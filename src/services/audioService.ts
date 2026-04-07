import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

export interface SpeakWordOptions {
  reason: 'autoplay' | 'manual';
  interrupt?: boolean;
  dedupeKey?: string;
  dedupeWindowMs?: number;
}

export class AudioService {
  private activeSpeechToken = 0;
  private isSpeaking = false;
  private lastRequest:
    | {
        key: string;
        at: number;
      }
    | null = null;

  async speakWord(word: string, options: SpeakWordOptions): Promise<boolean> {
    const text = word.trim();
    if (!text) return false;

    if (Platform.OS === 'web' && options.reason === 'autoplay') {
      return false;
    }

    const dedupeKey = options.dedupeKey ?? `${options.reason}:${text.toLowerCase()}`;
    const dedupeWindowMs = options.dedupeWindowMs ?? 1500;
    const now = Date.now();

    if (
      options.reason === 'autoplay' &&
      this.lastRequest &&
      this.lastRequest.key === dedupeKey &&
      now - this.lastRequest.at < dedupeWindowMs
    ) {
      return false;
    }

    if (options.interrupt ?? true) {
      await this.stop();
    } else if (this.isSpeaking) {
      return false;
    }

    const token = ++this.activeSpeechToken;
    this.isSpeaking = true;
    this.lastRequest = { key: dedupeKey, at: now };

    try {
      Speech.speak(text, {
        language: 'en-US',
        rate: 0.5,
        onDone: () => {
          this.finishSpeech(token);
        },
        onStopped: () => {
          this.finishSpeech(token);
        },
        onError: () => {
          this.finishSpeech(token);
        },
      });
      return true;
    } catch {
      this.finishSpeech(token);
      return false;
    }
  }

  async playWord(word: string): Promise<boolean> {
    return this.speakWord(word, {
      reason: 'manual',
      interrupt: true,
    });
  }

  private finishSpeech(token: number): void {
    if (this.activeSpeechToken !== token) return;
    this.isSpeaking = false;
  }

  async stop(): Promise<void> {
    this.activeSpeechToken += 1;
    this.isSpeaking = false;
    try {
      await Speech.stop();
    } catch {
      // Ignore stop failures to keep quiz flow unblocked.
    }
  }

  dispose(): void {
    void this.stop();
  }
}

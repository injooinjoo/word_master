import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';

/** Plays word pronunciation: URL first, then TTS fallback */
export class AudioService {
  private sound: Audio.Sound | null = null;

  /** Play pronunciation for word. If pronunciationUrl is non-null, use URL; else TTS */
  async playWord(word: string, pronunciationUrl?: string | null): Promise<void> {
    if (pronunciationUrl && pronunciationUrl.length > 0) {
      try {
        if (this.sound) {
          await this.sound.unloadAsync();
          this.sound = null;
        }
        const { sound: s } = await Audio.Sound.createAsync(
          { uri: pronunciationUrl },
          { shouldPlay: true }
        );
        this.sound = s;
        s.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded && status.didJustFinish) {
            s.unloadAsync().catch(() => {});
            if (this.sound === s) this.sound = null;
          }
        });
      } catch {
        await this._speakTts(word);
      }
    } else {
      await this._speakTts(word);
    }
  }

  private async _speakTts(text: string): Promise<void> {
    await Speech.speak(text, {
      language: 'en-US',
      rate: 0.5,
    });
  }

  async stop(): Promise<void> {
    if (this.sound) {
      try {
        await this.sound.stopAsync();
        await this.sound.unloadAsync();
      } catch {}
      this.sound = null;
    }
    Speech.stop();
  }

  dispose(): void {
    this.stop();
  }
}

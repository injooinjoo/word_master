import 'package:audioplayers/audioplayers.dart';
import 'package:flutter_tts/flutter_tts.dart';

/// Plays word pronunciation: URL first, then TTS fallback.
class AudioService {
  AudioService() {
    _player = AudioPlayer();
    _tts = FlutterTts();
  }

  late final AudioPlayer _player;
  late final FlutterTts _tts;

  /// Play pronunciation for [word]. If [pronunciationUrl] is non-null, use URL; else TTS.
  Future<void> playWord({
    required String word,
    String? pronunciationUrl,
  }) async {
    if (pronunciationUrl != null && pronunciationUrl.isNotEmpty) {
      try {
        await _player.play(UrlSource(pronunciationUrl));
      } catch (_) {
        await _speakTts(word);
      }
    } else {
      await _speakTts(word);
    }
  }

  Future<void> _speakTts(String text) async {
    await _tts.setLanguage('en-US');
    await _tts.setVolume(1.0);
    await _tts.setSpeechRate(0.5);
    await _tts.speak(text);
  }

  Future<void> stop() async {
    await _player.stop();
    await _tts.stop();
  }

  void dispose() {
    _player.dispose();
  }
}

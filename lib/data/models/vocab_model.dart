/// Learning tip entry: text + optional image_url.
class LearningTipEntry {
  const LearningTipEntry({required this.text, this.imageUrl});
  final String text;
  final String? imageUrl;

  factory LearningTipEntry.fromJson(Map<String, dynamic> json) {
    return LearningTipEntry(
      text: json['text'] as String,
      imageUrl: json['image_url'] as String?,
    );
  }

  Map<String, dynamic> toJson() => {
        'text': text,
        'image_url': imageUrl,
      };
}

/// All learning tips for a vocab item (schema: learning_tips).
class LearningTips {
  const LearningTips({
    required this.etymology,
    required this.visualAssociation,
    required this.soundAlike,
    required this.context,
    required this.synonymAntonym,
  });

  final LearningTipEntry etymology;
  final LearningTipEntry visualAssociation;
  final LearningTipEntry soundAlike;
  final LearningTipEntry context;
  final LearningTipEntry synonymAntonym;

  factory LearningTips.fromJson(Map<String, dynamic> json) {
    return LearningTips(
      etymology: LearningTipEntry.fromJson(
        Map<String, dynamic>.from(json['etymology'] as Map),
      ),
      visualAssociation: LearningTipEntry.fromJson(
        Map<String, dynamic>.from(json['visual_association'] as Map),
      ),
      soundAlike: LearningTipEntry.fromJson(
        Map<String, dynamic>.from(json['sound_alike'] as Map),
      ),
      context: LearningTipEntry.fromJson(
        Map<String, dynamic>.from(json['context'] as Map),
      ),
      synonymAntonym: LearningTipEntry.fromJson(
        Map<String, dynamic>.from(json['synonym_antonym'] as Map),
      ),
    );
  }

  Map<String, dynamic> toJson() => {
        'etymology': etymology.toJson(),
        'visual_association': visualAssociation.toJson(),
        'sound_alike': soundAlike.toJson(),
        'context': context.toJson(),
        'synonym_antonym': synonymAntonym.toJson(),
      };

  /// All entries in fixed order for random pick.
  List<LearningTipEntry> get entries => [
        etymology,
        visualAssociation,
        soundAlike,
        context,
        synonymAntonym,
      ];
}

/// Single vocabulary item (production-ready schema).
class VocabItem {
  const VocabItem({
    required this.id,
    required this.word,
    required this.meaning,
    this.pronunciationUrl,
    required this.level,
    required this.partOfSpeech,
    required this.distractors,
    required this.learningTips,
  });

  final String id;
  final String word;
  final String meaning;
  final String? pronunciationUrl;
  final int level;
  final String partOfSpeech;
  final List<String> distractors;
  final LearningTips learningTips;

  factory VocabItem.fromJson(Map<String, dynamic> json) {
    return VocabItem(
      id: json['id'] as String,
      word: json['word'] as String,
      meaning: json['meaning'] as String,
      pronunciationUrl: json['pronunciation_url'] as String?,
      level: json['level'] as int,
      partOfSpeech: json['part_of_speech'] as String,
      distractors: (json['distractors'] as List<dynamic>)
          .map((e) => e as String)
          .toList(),
      learningTips: LearningTips.fromJson(
        Map<String, dynamic>.from(json['learning_tips'] as Map),
      ),
    );
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'word': word,
        'meaning': meaning,
        'pronunciation_url': pronunciationUrl,
        'level': level,
        'part_of_speech': partOfSpeech,
        'distractors': distractors,
        'learning_tips': learningTips.toJson(),
      };
}

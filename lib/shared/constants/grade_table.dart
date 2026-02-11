/// Rating → 학년 구간 매핑 (ELO 기반).
class GradeTable {
  GradeTable._();

  static const int minRatingElementaryBasic = 0;
  static const int maxRatingElementaryBasic = 999;
  static const int minRatingElementaryAdvanced = 1000;
  static const int maxRatingElementaryAdvanced = 1200;
  static const int minRatingMiddle = 1201;
  static const int maxRatingMiddle = 1500;
  static const int minRatingHigh = 1501;
  static const int maxRatingHigh = 1800;
  static const int minRatingCollege = 1801;

  static const String labelElementaryBasic = '초등 기초';
  static const String labelElementaryAdvanced = '초등 심화';
  static const String labelMiddle = '중등';
  static const String labelHigh = '고등';
  static const String labelCollege = '대학 이상';

  /// Returns 학년 label for given rating.
  static String gradeLabel(int rating) {
    if (rating < 1000) return labelElementaryBasic;
    if (rating <= 1200) return labelElementaryAdvanced;
    if (rating <= 1500) return labelMiddle;
    if (rating <= 1800) return labelHigh;
    return labelCollege;
  }

  /// Target level range for current rating (for picking next word).
  /// Returns [minLevel, maxLevel] inclusive. Level is 1..10 or similar.
  static List<int> levelRangeForRating(int rating) {
    if (rating < 1000) return [1, 3];
    if (rating <= 1200) return [2, 4];
    if (rating <= 1500) return [3, 6];
    if (rating <= 1800) return [5, 8];
    return [6, 10];
  }
}

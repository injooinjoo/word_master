import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

import '../../../../data/models/vocab_model.dart';

/// Single learning tip display: text + optional image.
class LearningTipCard extends StatelessWidget {
  const LearningTipCard({
    super.key,
    required this.entry,
    this.title,
  });

  final LearningTipEntry entry;
  final String? title;

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (title != null && title!.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Text(
                  title!,
                  style: Theme.of(context).textTheme.titleSmall?.copyWith(
                        color: Theme.of(context).colorScheme.primary,
                        fontWeight: FontWeight.bold,
                      ),
                ),
              ),
            if (entry.imageUrl != null && entry.imageUrl!.isNotEmpty) ...[
              ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: CachedNetworkImage(
                  imageUrl: entry.imageUrl!,
                  height: 160,
                  width: double.infinity,
                  fit: BoxFit.cover,
                  placeholder: (_, __) => const SizedBox(
                    height: 160,
                    child: Center(child: CircularProgressIndicator()),
                  ),
                  errorWidget: (_, __, ___) => const SizedBox(
                    height: 160,
                    child: Center(child: Icon(Icons.broken_image)),
                  ),
                ),
              ),
              const SizedBox(height: 12),
            ],
            Text(
              entry.text,
              style: Theme.of(context).textTheme.bodyLarge,
            ),
          ],
        ),
      ),
    );
  }
}

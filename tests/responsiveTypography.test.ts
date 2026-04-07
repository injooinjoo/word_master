import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resolveDeviceTypographyScale,
  scaleFontSize,
  scaleLineHeight,
} from '../src/shared/ui/responsiveTypographyUtils';

test('resolveDeviceTypographyScale clamps small devices to the minimum scale', () => {
  assert.equal(resolveDeviceTypographyScale(320, 568), 0.92);
});

test('resolveDeviceTypographyScale uses the baseline scale at 393dp width', () => {
  assert.equal(resolveDeviceTypographyScale(393, 852), 1);
});

test('resolveDeviceTypographyScale grows for large phones and clamps tablets at the max scale', () => {
  assert.equal(Number(resolveDeviceTypographyScale(430, 932).toFixed(2)), 1.09);
  assert.equal(resolveDeviceTypographyScale(768, 1024), 1.1);
});

test('resolveDeviceTypographyScale uses the shortest side in landscape', () => {
  assert.equal(Number(resolveDeviceTypographyScale(844, 390).toFixed(2)), 0.99);
});

test('scaleFontSize and scaleLineHeight preserve device scaling and expand line height for larger fontScale', () => {
  assert.equal(scaleFontSize(15, 1.1), 16.5);
  assert.equal(scaleLineHeight(13, 20 / 13, 1, 1.3), 26);
  assert.equal(scaleLineHeight(13, 20 / 13, 1, 1), 20);
});

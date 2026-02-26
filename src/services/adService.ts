/**
 * Native ad service — uses react-native-google-mobile-ads on iOS/Android.
 * The web counterpart (adService.web.ts) exports no-op stubs.
 */
import { Platform } from 'react-native';

type InterstitialInstance = {
  load: () => void;
  addAdEventListener: (event: string, cb: () => void) => () => void;
  show: () => Promise<void>;
};

type InterstitialAdStatic = {
  createForAdRequest: (id: string) => InterstitialInstance;
};

type BannerAdType = React.ComponentType<{ unitId: string; size: string }>;

let _MobileAds: (() => { initialize: () => Promise<unknown> }) | null = null;
let _InterstitialAd: InterstitialAdStatic | null = null;
let _BannerAd: BannerAdType | null = null;

try {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    const ads = require('react-native-google-mobile-ads');
    _MobileAds = ads.default ?? ads.MobileAds;
    _InterstitialAd = ads.InterstitialAd ?? null;
    _BannerAd = ads.BannerAd ?? null;
  }
} catch {
  // Expo Go or missing native module
}

export const MobileAds = _MobileAds;
export const InterstitialAd = _InterstitialAd;
export const BannerAd = _BannerAd;

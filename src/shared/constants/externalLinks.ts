import { Linking } from 'react-native';

const siteBaseUrl = 'https://www.injookim.com/word_master';
const supportEmail = 'injooinjoo@gmail.com';

async function open(url: string): Promise<void> {
  try {
    await Linking.openURL(url);
  } catch (error) {
    console.warn(`Failed to open external URL: ${url}`, error);
  }
}

export const AppExternalLinks = {
  siteBaseUrl,
  supportPageUrl: `${siteBaseUrl}/support/`,
  privacyPageUrl: `${siteBaseUrl}/privacy/`,
  issuesUrl: 'https://github.com/injooinjoo/word_master/issues',
  repositoryUrl: 'https://github.com/injooinjoo/word_master',
  supportEmail,
  supportMailtoUrl: `mailto:${supportEmail}?subject=Word%20Master%20iOS%20Support`,
  open,
} as const;

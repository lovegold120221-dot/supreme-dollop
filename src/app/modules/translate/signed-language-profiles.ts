import {
  getSignedLanguageBackendCode,
  getSignedLanguageTranslationApi,
  hasSignedLanguageBackendOverride,
  isSignedLanguageFallbackActive,
  usesDefaultHostedTranslationApi,
} from '../../core/config/translation-api';

export interface SignedLanguageProfile {
  code: string;
  status: 'standard' | 'experimental';
  defaultSpokenLanguage?: string;
  note?: string;
}

export function getSignedLanguageProfile(code: string | null | undefined): SignedLanguageProfile {
  if (code === 'vgt') {
    if (isSignedLanguageFallbackActive(code)) {
      return {
        code,
        status: 'experimental',
        defaultSpokenLanguage: 'nl',
      };
    }

    if (hasSignedLanguageBackendOverride(code)) {
      return {
        code,
        status: 'experimental',
        defaultSpokenLanguage: 'nl',
        note: 'VGT custom backend configured. Verify gloss, pose, and avatar quality before shipping.',
      };
    }

    if (!usesDefaultHostedTranslationApi(getSignedLanguageTranslationApi(code))) {
      return {
        code,
        status: 'experimental',
        defaultSpokenLanguage: 'nl',
        note: 'VGT is using a custom global spoken-to-signed backend. Verify that backend against real Vlaamse Gebarentaal output before shipping.',
      };
    }

    return {
      code,
      status: 'standard',
      defaultSpokenLanguage: 'nl',
    };
  }

  return {
    code: code ?? '',
    status: 'standard',
  };
}

import type { Locale, Translation } from "./types"
import { defaultLocale, isLocale } from "./types"
import es from "./locales/es"
import en from "./locales/en"
import ar from "./locales/ar"
import fr from "./locales/fr"
import pt from "./locales/pt"
import it from "./locales/it"

export const translations: Record<Locale, Translation> = {
  es,
  en,
  ar,
  fr,
  pt,
  it,
}

export function getLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale
}

export function useTranslations(locale: string | undefined | null): Translation {
  return translations[getLocale(locale)]
}

export {
  locales,
  defaultLocale,
  localeMeta,
  localePath,
  isLocale,
  SITE_URL,
  PROFILE,
} from "./types"

export type {
  Locale,
  Translation,
  ExperienceItemData,
  EducationItemData,
  CertificationItemData,
  SkillGroupData,
  ProjectCopy,
  SpokenLanguage,
} from "./types"

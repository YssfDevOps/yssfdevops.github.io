export const locales = ["es", "en", "ar", "fr", "pt", "it"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "es"

export const localeMeta: Record<
  Locale,
  {
    name: string
    nativeName: string
    flag: string
    dir: "ltr" | "rtl"
    og: string
    htmlLang: string
  }
> = {
  es: { name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr", og: "es_ES", htmlLang: "es" },
  en: { name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr", og: "en_GB", htmlLang: "en" },
  ar: { name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl", og: "ar_AR", htmlLang: "ar" },
  fr: { name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr", og: "fr_FR", htmlLang: "fr" },
  pt: { name: "Portuguese", nativeName: "Português", flag: "🇵🇹", dir: "ltr", og: "pt_PT", htmlLang: "pt" },
  it: { name: "Italian", nativeName: "Italiano", flag: "🇮🇹", dir: "ltr", og: "it_IT", htmlLang: "it" },
}

export const SITE_URL = "https://yssfdevops.github.io"

export const PROFILE = {
  name: "Youssef Cahouach",
  fullName: "Youssef Cahouach Guella",
  email: "youssef.cah.7912@gmail.com",
  linkedin: "https://linkedin.com/in/yssf-cahouach",
  github: "https://github.com/YssfDevOps",
  photo: "/yssfdevops.webp",
  portrait: "/me.png",
  company: "NTT DATA Europe & Latam",
  role: "Backend Python & Cloud Developer",
}

export interface ExperienceItemData {
  date: string
  title: string
  company: string
  location: string
  description: string
  link?: string
  skills: string[]
}

export interface EducationItemData {
  date: string
  title: string
  company: string
  description: string
}

export interface CertificationItemData {
  title: string
  issuer: string
  date: string
  credential?: string
}

export interface SkillGroupData {
  title: string
  items: string[]
}

export interface ProjectCopy {
  title: string
  description: string
}

export interface SpokenLanguage {
  name: string
  level: string
}

export interface Translation {
  meta: {
    title: string
    description: string
  }
  nav: {
    experience: string
    education: string
    projects: string
    about: string
    contact: string
    skills: string
  }
  hero: {
    badgeAvailable: string
    badgeWorking: string
    greeting: string
    bio: string
    contact: string
  }
  sections: {
    experience: string
    education: string
    projects: string
    about: string
    skills: string
    certifications: string
  }
  experience: {
    more: string
    items: ExperienceItemData[]
  }
  education: {
    items: EducationItemData[]
  }
  certifications: {
    items: CertificationItemData[]
  }
  skills: {
    groups: SkillGroupData[]
  }
  projects: {
    code: string
    preview: string
    eyetracker: ProjectCopy
    gmrai: ProjectCopy
    mygmr: ProjectCopy
    reconstruction: ProjectCopy
    rain: ProjectCopy
    treasure: ProjectCopy
  }
  about: {
    p1: string
    p2: string
    p3: string
    languagesTitle: string
    languages: SpokenLanguage[]
  }
  footer: {
    rights: string
    about: string
    contact: string
  }
  theme: {
    label: string
    light: string
    dark: string
    system: string
  }
  language: {
    label: string
  }
}

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}/`
}

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

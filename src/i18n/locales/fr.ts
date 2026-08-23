import type { Translation } from "../types"

const fr: Translation = {
  meta: {
    title: "Youssef Cahouach | Développeur Backend Python & Cloud",
    description:
      "Software Developer chez NTT DATA, spécialisé en Backend Python et Cloud AWS (PySpark, Amazon Redshift, S3). Ingénieur informatique à Barcelone.",
  },
  nav: {
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
    skills: "Compétences",
  },
  hero: {
    badgeAvailable: "Ouvert aux opportunités",
    badgeWorking: "Actuellement chez NTT DATA",
    greeting: "Bonjour, je suis Youssef",
    bio: "<strong>Ingénieur informatique</strong> basé à Barcelone, Espagne 🇪🇸. <strong>Développeur Backend Python &amp; Cloud (AWS)</strong> chez NTT DATA, je travaille avec <strong>PySpark</strong>, <strong>Amazon Redshift</strong> et <strong>S3</strong>.",
    contact: "Me contacter",
  },
  sections: {
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
    about: "À propos de moi",
    skills: "Compétences",
    certifications: "Licences et certifications",
  },
  experience: {
    more: "En savoir plus",
    items: [
      {
        date: "Novembre 2025 – Aujourd’hui",
        title: "Développeur Backend Python & Cloud",
        company: "NTT DATA Europe & Latam",
        location: "Barcelone, Espagne · Hybride",
        description:
          "Je conçois et construis des services backend et des pipelines de données en Python sur AWS. Au quotidien, je travaille avec PySpark pour le traitement à grande échelle, Amazon Redshift comme entrepôt analytique, et S3 pour le stockage et l’intégration des données.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "AWS", "PySpark", "Redshift", "S3"],
      },
      {
        date: "Juillet 2025 – Septembre 2025",
        title: "Stagiaire GenAI",
        company: "NTT DATA Europe & Latam",
        location: "Barcelone, Espagne · Hybride",
        description:
          "Analyse de cas d’usage d’IA générative pour la maintenance d’applications et identification d’automatisations de processus afin d’améliorer la livraison et de réduire le travail répétitif.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "GenAI"],
      },
      {
        date: "Mars 2025 – Juillet 2025",
        title: "Stagiaire de recherche",
        company: "Computer Vision Center (CVC)",
        location: "Barcelone, Espagne · Télétravail",
        description:
          "Mise en œuvre d’un système de suivi oculaire en temps réel à partir d’une webcam, en s’appuyant sur le deep learning et la vision par ordinateur.",
        link: "https://www.cvc.uab.es/",
        skills: ["Python", "Deep Learning", "Computer Vision"],
      },
    ],
  },
  education: {
    items: [
      {
        date: "Septembre 2021 – Juillet 2025",
        title: "Licence en ingénierie informatique — Mention informatique",
        company: "Universitat Autònoma de Barcelona (UAB)",
        description: "Note : 8,76 / 10",
      },
      {
        date: "Juin 2021 – Juillet 2021",
        title: "Certificate of Proficiency B2",
        company: "Oxford English School",
        description: "",
      },
      {
        date: "2019 – 2021",
        title: "Baccalauréat technologique",
        company: "Instituto Escuela Municipal de Trabajo",
        description: "",
      },
    ],
  },
  certifications: {
    items: [
      {
        title: "Codex Solutions Practitioner",
        issuer: "OpenAI",
        date: "Délivré en août 2026",
      },
      {
        title: "OpenAI Foundational Knowledge",
        issuer: "OpenAI",
        date: "Délivré en août 2026",
        credential: "ID de credential 690669936",
      },
    ],
  },
  skills: {
    groups: [
      {
        title: "Backend & Cloud",
        items: ["Python", "AWS", "PySpark", "Amazon Redshift", "Amazon S3"],
      },
      {
        title: "IA & données",
        items: ["Machine Learning", "Vision par ordinateur", "PyTorch", "OpenCV", "GenAI"],
      },
      {
        title: "Logiciel",
        items: ["C / C++", "ROS 2", "Dart", "SQL", "Git"],
      },
    ],
  },
  projects: {
    code: "Code",
    preview: "Aperçu",
    eyetracker: {
      title: "Eye Tracker pour l’orientation vocationale",
      description:
        "Application de suivi oculaire en temps réel qui compare les trajectoires du regard aux choix vocationnels explicites, afin d’améliorer l’orientation académique.",
    },
    gmrai: {
      title: "GMR-AI",
      description:
        "Robot autonome conçu pour l’entretien de grandes pelouses. Une application permet de régler la hauteur de coupe ; le robot mesure aussi température et humidité et utilise plusieurs caméras pour éviter les obstacles et suivre sa propre trajectoire.",
    },
    mygmr: {
      title: "MyGMR",
      description:
        "Backend sur Google Cloud App Engine et application Android Flutter pour gérer les appareils GMR et leurs tâches associées.",
    },
    reconstruction: {
      title: "Reconstruction 3D — SfM",
      description:
        "Programme Python qui reconstruit un modèle 3D à partir d’images 2D couvrant tous les angles d’un objet, via Structure from Motion (SfM).",
    },
    rain: {
      title: "Prédiction de la pluie en Australie",
      description:
        "Projet d’apprentissage automatique pour prédire la pluie en Australie à partir d’un jeu de données Kaggle, en comparant plusieurs classifieurs et en visant la précision.",
    },
    treasure: {
      title: "Treasure Track",
      description:
        "Jeu en vue à la troisième et à la première personne dont le but est de collecter un nombre de pièces dans un temps limité, avec des changements d’éclairage jour/nuit et un mode libre.",
    },
  },
  about: {
    p1: "Je m’appelle Youssef et je suis <strong>ingénieur informatique</strong>, spécialisé en <strong>informatique (Computer Science)</strong>. Je travaille actuellement chez <strong>NTT DATA</strong> en tant que <strong>développeur Backend Python &amp; Cloud (AWS)</strong>.",
    p2: "J’y construis des services et des pipelines de données avec <strong>Python</strong>, <strong>PySpark</strong>, <strong>Amazon Redshift</strong> et <strong>S3</strong>. Auparavant, j’ai effectué un stage en <strong>IA générative</strong> et automatisation, puis une recherche en <strong>vision par ordinateur</strong> au CVC.",
    p3: "Pendant mes études, j’ai travaillé sur des jeux vidéo, des applications et des systèmes industriels avec <strong>ROS</strong>, et je me suis approfondi en <strong>Machine Learning</strong> : apprentissage supervisé et non supervisé, réseaux de neurones et vision par ordinateur.",
    languagesTitle: "Langues",
    languages: [
      { name: "Espagnol", level: "Langue maternelle" },
      { name: "Catalan", level: "Langue maternelle" },
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Anglais", level: "B2 · Professionnel" },
    ],
  },
  footer: {
    rights: "Presque tous droits réservés",
    about: "À propos",
    contact: "Contact",
  },
  theme: {
    label: "Choisir le thème",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
  },
  language: {
    label: "Changer de langue",
  },
}

export default fr

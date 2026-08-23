import type { Translation } from "../types"

const es: Translation = {
  meta: {
    title: "Youssef Cahouach | Desarrollador Backend Python y Cloud",
    description:
      "Software Developer en NTT DATA, especializado en Backend Python y Cloud AWS (PySpark, Amazon Redshift, S3). Ingeniero Informático en Barcelona.",
  },
  nav: {
    experience: "Experiencia",
    education: "Educación",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    skills: "Habilidades",
  },
  hero: {
    badgeAvailable: "Disponible para trabajar",
    badgeWorking: "Actualmente en NTT DATA",
    greeting: "Buenas, soy Youssef",
    bio: "<strong>Ingeniero Informático</strong> de Barcelona, España 🇪🇸. <strong>Software Developer Backend Python y Cloud (AWS)</strong> en NTT DATA. Trabajo con <strong>PySpark</strong>, <strong>Amazon Redshift</strong> y <strong>S3</strong>.",
    contact: "Contáctame",
  },
  sections: {
    experience: "Experiencia",
    education: "Educación",
    projects: "Proyectos",
    about: "Sobre mí",
    skills: "Habilidades",
    certifications: "Licencias y certificaciones",
  },
  experience: {
    more: "Saber más",
    items: [
      {
        date: "Noviembre 2025 – Actualidad",
        title: "Desarrollador Backend Python y Cloud",
        company: "NTT DATA Europe & Latam",
        location: "Barcelona, España · Híbrido",
        description:
          "Diseño y construyo servicios backend y pipelines de datos en Python sobre AWS. En el día a día trabajo con PySpark para procesamiento a gran escala, Amazon Redshift como almacén analítico y S3 para almacenamiento e integración de datos en la plataforma.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "AWS", "PySpark", "Redshift", "S3"],
      },
      {
        date: "Julio 2025 – Septiembre 2025",
        title: "Becario en GenAI",
        company: "NTT DATA Europe & Latam",
        location: "Barcelona, España · Híbrido",
        description:
          "Análisis de casos de uso de GenAI en el mantenimiento de aplicaciones e identificación de automatizaciones de procesos para mejorar la entrega y reducir el trabajo repetitivo.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "GenAI"],
      },
      {
        date: "Marzo 2025 – Julio 2025",
        title: "Becario de investigación",
        company: "Centro de Visión por Computador (CVC)",
        location: "Barcelona, España · En remoto",
        description:
          "Implementación de un sistema de seguimiento ocular en tiempo real a partir de una webcam, utilizando técnicas de Deep Learning y visión por computador.",
        link: "https://www.cvc.uab.es/",
        skills: ["Python", "Deep Learning", "Computer Vision"],
      },
    ],
  },
  education: {
    items: [
      {
        date: "Septiembre 2021 – Julio 2025",
        title: "Grado en Ingeniería Informática — Mención en Computación",
        company: "Universitat Autònoma de Barcelona (UAB)",
        description: "Nota: 8,76 / 10",
      },
      {
        date: "Junio 2021 – Julio 2021",
        title: "Certificate of Proficiency B2",
        company: "Oxford English School",
        description: "",
      },
      {
        date: "2019 – 2021",
        title: "Bachillerato Tecnológico",
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
        date: "Expedición: agosto 2026",
      },
      {
        title: "OpenAI Foundational Knowledge",
        issuer: "OpenAI",
        date: "Expedición: agosto 2026",
        credential: "ID de credencial 690669936",
      },
    ],
  },
  skills: {
    groups: [
      {
        title: "Backend y Cloud",
        items: ["Python", "AWS", "PySpark", "Amazon Redshift", "Amazon S3"],
      },
      {
        title: "IA y datos",
        items: ["Machine Learning", "Visión por computador", "PyTorch", "OpenCV", "GenAI"],
      },
      {
        title: "Software",
        items: ["C / C++", "ROS 2", "Dart", "SQL", "Git"],
      },
    ],
  },
  projects: {
    code: "Código",
    preview: "Demo",
    eyetracker: {
      title: "Eye Tracker para orientación vocacional",
      description:
        "Aplicación de seguimiento ocular en tiempo real para comparar trayectorias de mirada con elecciones vocacionales explícitas y mejorar la orientación académica.",
    },
    gmrai: {
      title: "GMR-AI",
      description:
        "Robot autónomo pensado para cuidar el césped en superficies extensas. Una aplicación permite elegir la altura de corte; además mide temperatura y humedad y usa varias cámaras para evitar obstáculos y seguir su propia ruta.",
    },
    mygmr: {
      title: "MyGMR",
      description:
        "Backend en Google Cloud App Engine y una app móvil con Flutter para Android, para gestionar dispositivos GMR y sus tareas asociadas.",
    },
    reconstruction: {
      title: "Reconstrucción 3D — SfM",
      description:
        "Programa en Python que reconstruye un modelo 3D a partir de imágenes 2D que cubren todos los ángulos del objeto, usando Structure from Motion (SfM).",
    },
    rain: {
      title: "Predicción de lluvia en Australia",
      description:
        "Proyecto de aprendizaje automático para predecir la lluvia en Australia con un dataset de Kaggle, comparando varios clasificadores y centrado en la precisión.",
    },
    treasure: {
      title: "Treasure Track",
      description:
        "Juego en tercera y primera persona cuyo objetivo es recolectar un número de monedas en un tiempo límite, con cambios de luz según el momento del día y un modo libre.",
    },
  },
  about: {
    p1: "Me llamo Youssef y soy <strong>Ingeniero Informático</strong> con mención en <strong>Computación (Computer Science)</strong>. Actualmente trabajo en <strong>NTT DATA</strong> como <strong>desarrollador Backend Python y Cloud (AWS)</strong>.",
    p2: "En este rol construyo servicios y pipelines de datos con <strong>Python</strong>, <strong>PySpark</strong>, <strong>Amazon Redshift</strong> y <strong>S3</strong>. Antes hice prácticas en <strong>GenAI</strong> y automatización de procesos, y una estancia de investigación en <strong>visión por computador</strong> en el CVC.",
    p3: "Durante el grado trabajé en videojuegos, aplicaciones y sistemas industriales con <strong>ROS</strong>, y profundicé en <strong>Machine Learning</strong>: aprendizaje supervisado y no supervisado, redes neuronales y visión por computador.",
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Catalán", level: "Nativo" },
      { name: "Árabe", level: "Nativo" },
      { name: "Inglés", level: "B2 · Profesional" },
    ],
  },
  footer: {
    rights: "Casi todos los derechos reservados",
    about: "Sobre mí",
    contact: "Contacto",
  },
  theme: {
    label: "Elige el tema",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
  language: {
    label: "Cambiar idioma",
  },
}

export default es

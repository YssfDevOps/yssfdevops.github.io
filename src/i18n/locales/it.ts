import type { Translation } from "../types"

const it: Translation = {
  meta: {
    title: "Youssef Cahouach | Sviluppatore Backend Python e Cloud",
    description:
      "Software Developer in NTT DATA, specializzato in Backend Python e Cloud AWS (PySpark, Amazon Redshift, S3). Ingegnere informatico a Barcellona.",
  },
  nav: {
    experience: "Esperienza",
    education: "Formazione",
    projects: "Progetti",
    about: "Su di me",
    contact: "Contatto",
    skills: "Competenze",
  },
  hero: {
    badgeAvailable: "Aperto a opportunità",
    badgeWorking: "Attualmente in NTT DATA",
    greeting: "Ciao, sono Youssef",
    bio: "<strong>Ingegnere informatico</strong> di Barcellona, Spagna 🇪🇸. <strong>Sviluppatore Backend Python e Cloud (AWS)</strong> in NTT DATA, lavoro con <strong>PySpark</strong>, <strong>Amazon Redshift</strong> e <strong>S3</strong>.",
    contact: "Contattami",
  },
  sections: {
    experience: "Esperienza",
    education: "Formazione",
    projects: "Progetti",
    about: "Su di me",
    skills: "Competenze",
    certifications: "Licenze e certificazioni",
  },
  experience: {
    more: "Scopri di più",
    items: [
      {
        date: "Novembre 2025 – Presente",
        title: "Sviluppatore Backend Python e Cloud",
        company: "NTT DATA Europe & Latam",
        location: "Barcellona, Spagna · Ibrido",
        description:
          "Progetto e realizzo servizi backend e pipeline di dati in Python su AWS. Nel quotidiano lavoro con PySpark per l’elaborazione su larga scala, Amazon Redshift come data warehouse analitico e S3 per storage e integrazione dei dati sulla piattaforma.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "AWS", "PySpark", "Redshift", "S3"],
      },
      {
        date: "Luglio 2025 – Settembre 2025",
        title: "Tirocinante GenAI",
        company: "NTT DATA Europe & Latam",
        location: "Barcellona, Spagna · Ibrido",
        description:
          "Analisi di casi d’uso di IA generativa nella manutenzione delle applicazioni e identificazione di automazioni di processo per migliorare la delivery e ridurre il lavoro ripetitivo.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "GenAI"],
      },
      {
        date: "Marzo 2025 – Luglio 2025",
        title: "Tirocinante di ricerca",
        company: "Computer Vision Center (CVC)",
        location: "Barcellona, Spagna · Da remoto",
        description:
          "Implementazione di un sistema di eye tracking in tempo reale da webcam, utilizzando tecniche di Deep Learning e computer vision.",
        link: "https://www.cvc.uab.es/",
        skills: ["Python", "Deep Learning", "Computer Vision"],
      },
    ],
  },
  education: {
    items: [
      {
        date: "Settembre 2021 – Luglio 2025",
        title: "Laurea in Ingegneria Informatica — curriculum Computing",
        company: "Universitat Autònoma de Barcelona (UAB)",
        description: "Voto: 8,76 / 10",
      },
      {
        date: "Giugno 2021 – Luglio 2021",
        title: "Certificate of Proficiency B2",
        company: "Oxford English School",
        description: "",
      },
      {
        date: "2019 – 2021",
        title: "Diploma di maturità tecnologica",
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
        date: "Rilasciato ad agosto 2026",
      },
      {
        title: "OpenAI Foundational Knowledge",
        issuer: "OpenAI",
        date: "Rilasciato ad agosto 2026",
        credential: "ID credenziale 690669936",
      },
    ],
  },
  skills: {
    groups: [
      {
        title: "Backend e Cloud",
        items: ["Python", "AWS", "PySpark", "Amazon Redshift", "Amazon S3"],
      },
      {
        title: "IA e dati",
        items: ["Machine Learning", "Computer Vision", "PyTorch", "OpenCV", "GenAI"],
      },
      {
        title: "Software",
        items: ["C / C++", "ROS 2", "Dart", "SQL", "Git"],
      },
    ],
  },
  projects: {
    code: "Codice",
    preview: "Anteprima",
    eyetracker: {
      title: "Eye Tracker per l’orientamento vocazionale",
      description:
        "Applicazione di eye tracking in tempo reale che confronta le traiettorie dello sguardo con le scelte vocazionali esplicite, migliorando l’orientamento accademico.",
    },
    gmrai: {
      title: "GMR-AI",
      description:
        "Robot autonomo per la cura di grandi prati. Un’app consente di impostare l’altezza di taglio; il robot misura anche temperatura e umidità e usa più telecamere per evitare ostacoli e seguire il proprio percorso.",
    },
    mygmr: {
      title: "MyGMR",
      description:
        "Backend su Google Cloud App Engine e un’app Android in Flutter per gestire i dispositivi GMR e le attività associate.",
    },
    reconstruction: {
      title: "Ricostruzione 3D — SfM",
      description:
        "Programma Python che ricostruisce un modello 3D da immagini 2D che coprono tutti gli angoli di un oggetto, usando Structure from Motion (SfM).",
    },
    rain: {
      title: "Previsione della pioggia in Australia",
      description:
        "Progetto di machine learning per prevedere la pioggia in Australia con un dataset Kaggle, confrontando diversi classificatori e puntando sulla precisione.",
    },
    treasure: {
      title: "Treasure Track",
      description:
        "Gioco in terza e prima persona il cui obiettivo è raccogliere un numero di monete entro un limite di tempo, con cambi di luce nel corso del giorno e una modalità libera.",
    },
  },
  about: {
    p1: "Mi chiamo Youssef e sono un <strong>ingegnere informatico</strong> specializzato in <strong>Computing (Computer Science)</strong>. Oggi lavoro in <strong>NTT DATA</strong> come <strong>sviluppatore Backend Python e Cloud (AWS)</strong>.",
    p2: "In questo ruolo costruisco servizi e pipeline di dati con <strong>Python</strong>, <strong>PySpark</strong>, <strong>Amazon Redshift</strong> e <strong>S3</strong>. Prima ho fatto un tirocinio in <strong>GenAI</strong> e automazione dei processi, e ricerca in <strong>computer vision</strong> al CVC.",
    p3: "Durante gli studi ho lavorato su videogiochi, applicazioni e sistemi industriali con <strong>ROS</strong>, e mi sono approfondito nel <strong>Machine Learning</strong>: apprendimento supervisionato e non supervisionato, reti neurali e computer vision.",
    languagesTitle: "Lingue",
    languages: [
      { name: "Spagnolo", level: "Madrelingua" },
      { name: "Catalano", level: "Madrelingua" },
      { name: "Arabo", level: "Madrelingua" },
      { name: "Inglese", level: "B2 · Professionale" },
    ],
  },
  footer: {
    rights: "Quasi tutti i diritti riservati",
    about: "Su di me",
    contact: "Contatto",
  },
  theme: {
    label: "Scegli il tema",
    light: "Chiaro",
    dark: "Scuro",
    system: "Sistema",
  },
  language: {
    label: "Cambia lingua",
  },
}

export default it

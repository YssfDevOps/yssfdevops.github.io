import type { Translation } from "../types"

const en: Translation = {
  meta: {
    title: "Youssef Cahouach | Backend Python & Cloud Developer",
    description:
      "Software Developer at NTT DATA specialized in Backend Python and AWS Cloud (PySpark, Amazon Redshift, S3). Computer Engineer based in Barcelona.",
  },
  nav: {
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    skills: "Skills",
  },
  hero: {
    badgeAvailable: "Open to opportunities",
    badgeWorking: "Currently at NTT DATA",
    greeting: "Hi, I'm Youssef",
    bio: "<strong>Computer Engineer</strong> based in Barcelona, Spain 🇪🇸. <strong>Backend Python &amp; Cloud (AWS) developer</strong> at NTT DATA, working with <strong>PySpark</strong>, <strong>Amazon Redshift</strong> and <strong>S3</strong>.",
    contact: "Contact me",
  },
  sections: {
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    about: "About me",
    skills: "Skills",
    certifications: "Licenses & certifications",
  },
  experience: {
    more: "Learn more",
    items: [
      {
        date: "November 2025 – Present",
        title: "Backend Python & Cloud Developer",
        company: "NTT DATA Europe & Latam",
        location: "Barcelona, Spain · Hybrid",
        description:
          "I design and build backend services and data pipelines in Python on AWS. Day to day I work with PySpark for large-scale processing, Amazon Redshift as the analytics warehouse, and S3 for storage and data integration across the platform.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "AWS", "PySpark", "Redshift", "S3"],
      },
      {
        date: "July 2025 – September 2025",
        title: "GenAI Intern",
        company: "NTT DATA Europe & Latam",
        location: "Barcelona, Spain · Hybrid",
        description:
          "Analyzed Generative AI use cases for application maintenance and identified process automations to improve delivery and reduce repetitive work.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "GenAI"],
      },
      {
        date: "March 2025 – July 2025",
        title: "Research Intern",
        company: "Computer Vision Center (CVC)",
        location: "Barcelona, Spain · Remote",
        description:
          "Implemented a real-time eye-tracking system from a webcam using Deep Learning techniques, combining computer vision models with a practical research prototype.",
        link: "https://www.cvc.uab.es/",
        skills: ["Python", "Deep Learning", "Computer Vision"],
      },
    ],
  },
  education: {
    items: [
      {
        date: "September 2021 – July 2025",
        title: "BSc in Computer Engineering — Computing",
        company: "Universitat Autònoma de Barcelona (UAB)",
        description: "Grade: 8.76 / 10",
      },
      {
        date: "June 2021 – July 2021",
        title: "Certificate of Proficiency B2",
        company: "Oxford English School",
        description: "",
      },
      {
        date: "2019 – 2021",
        title: "Technological Baccalaureate",
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
        date: "Issued August 2026",
      },
      {
        title: "OpenAI Foundational Knowledge",
        issuer: "OpenAI",
        date: "Issued August 2026",
        credential: "Credential ID 690669936",
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
        title: "AI & Data",
        items: ["Machine Learning", "Computer Vision", "PyTorch", "OpenCV", "GenAI"],
      },
      {
        title: "Software",
        items: ["C / C++", "ROS 2", "Dart", "SQL", "Git"],
      },
    ],
  },
  projects: {
    code: "Code",
    preview: "Preview",
    eyetracker: {
      title: "Eye Tracker for Vocational Guidance",
      description:
        "Real-time eye-tracking application that compares gaze trajectories with explicit vocational choices, improving academic guidance.",
    },
    gmrai: {
      title: "GMR-AI",
      description:
        "Autonomous robot designed to maintain large lawns. A companion app lets the user set cutting height; the robot also measures temperature and humidity and uses multiple cameras to avoid obstacles and follow its own route.",
    },
    mygmr: {
      title: "MyGMR",
      description:
        "Backend running on Google Cloud App Engine plus a Flutter Android app so users can manage GMR devices and their associated tasks.",
    },
    reconstruction: {
      title: "3D Reconstruction — SfM",
      description:
        "Python program that reconstructs a 3D model from 2D images covering every angle of an object, using Structure from Motion (SfM).",
    },
    rain: {
      title: "Rain in Australia Prediction",
      description:
        "Machine-learning project to predict rainfall in Australia from a Kaggle dataset, comparing several classifiers with a focus on prediction accuracy.",
    },
    treasure: {
      title: "Treasure Track",
      description:
        "Game with third- and first-person views whose goal is to collect a set number of coins within a time limit, with day-night lighting changes and a free-play mode.",
    },
  },
  about: {
    p1: "My name is Youssef and I am a <strong>Computer Engineer</strong> specialized in <strong>Computing (Computer Science)</strong>. I currently work at <strong>NTT DATA</strong> as a <strong>Backend Python &amp; Cloud (AWS)</strong> developer.",
    p2: "In this role I build services and data pipelines with <strong>Python</strong>, <strong>PySpark</strong>, <strong>Amazon Redshift</strong> and <strong>S3</strong>. Before that I interned in <strong>Generative AI</strong> and process automation, and I did research in <strong>computer vision</strong> at the Computer Vision Center.",
    p3: "During my degree I worked on video games, applications and industrial systems with <strong>ROS</strong>, and I went deep into <strong>Machine Learning</strong> — supervised and unsupervised learning, neural networks and computer vision.",
    languagesTitle: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "Catalan", level: "Native" },
      { name: "Arabic", level: "Native" },
      { name: "English", level: "B2 · Professional working" },
    ],
  },
  footer: {
    rights: "Almost all rights reserved",
    about: "About",
    contact: "Contact",
  },
  theme: {
    label: "Choose theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  language: {
    label: "Change language",
  },
}

export default en

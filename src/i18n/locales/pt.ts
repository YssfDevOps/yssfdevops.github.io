import type { Translation } from "../types"

const pt: Translation = {
  meta: {
    title: "Youssef Cahouach | Programador Backend Python e Cloud",
    description:
      "Software Developer na NTT DATA, especializado em Backend Python e Cloud AWS (PySpark, Amazon Redshift, S3). Engenheiro informático em Barcelona.",
  },
  nav: {
    experience: "Experiência",
    education: "Educação",
    projects: "Projetos",
    about: "Sobre mim",
    contact: "Contacto",
    skills: "Competências",
  },
  hero: {
    badgeAvailable: "Aberto a oportunidades",
    badgeWorking: "Atualmente na NTT DATA",
    greeting: "Olá, sou o Youssef",
    bio: "<strong>Engenheiro informático</strong> de Barcelona, Espanha 🇪🇸. <strong>Programador Backend Python e Cloud (AWS)</strong> na NTT DATA, a trabalhar com <strong>PySpark</strong>, <strong>Amazon Redshift</strong> e <strong>S3</strong>.",
    contact: "Contacta-me",
  },
  sections: {
    experience: "Experiência",
    education: "Educação",
    projects: "Projetos",
    about: "Sobre mim",
    skills: "Competências",
    certifications: "Licenças e certificações",
  },
  experience: {
    more: "Saber mais",
    items: [
      {
        date: "Novembro 2025 – Atualidade",
        title: "Programador Backend Python e Cloud",
        company: "NTT DATA Europe & Latam",
        location: "Barcelona, Espanha · Híbrido",
        description:
          "Desenho e construo serviços backend e pipelines de dados em Python na AWS. No dia a dia trabalho com PySpark para processamento em grande escala, Amazon Redshift como armazém analítico e S3 para armazenamento e integração de dados na plataforma.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "AWS", "PySpark", "Redshift", "S3"],
      },
      {
        date: "Julho 2025 – Setembro 2025",
        title: "Estagiário de GenAI",
        company: "NTT DATA Europe & Latam",
        location: "Barcelona, Espanha · Híbrido",
        description:
          "Análise de casos de uso de IA generativa na manutenção de aplicações e identificação de automatizações de processos para melhorar a entrega e reduzir trabalho repetitivo.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "GenAI"],
      },
      {
        date: "Março 2025 – Julho 2025",
        title: "Estagiário de investigação",
        company: "Computer Vision Center (CVC)",
        location: "Barcelona, Espanha · Remoto",
        description:
          "Implementação de um sistema de eye tracking em tempo real a partir de uma webcam, com técnicas de Deep Learning e visão por computador.",
        link: "https://www.cvc.uab.es/",
        skills: ["Python", "Deep Learning", "Computer Vision"],
      },
    ],
  },
  education: {
    items: [
      {
        date: "Setembro 2021 – Julho 2025",
        title: "Licenciatura em Engenharia Informática — Computação",
        company: "Universitat Autònoma de Barcelona (UAB)",
        description: "Nota: 8,76 / 10",
      },
      {
        date: "Junho 2021 – Julho 2021",
        title: "Certificate of Proficiency B2",
        company: "Oxford English School",
        description: "",
      },
      {
        date: "2019 – 2021",
        title: "Bacharelato Tecnológico",
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
        date: "Emitido em agosto de 2026",
      },
      {
        title: "OpenAI Foundational Knowledge",
        issuer: "OpenAI",
        date: "Emitido em agosto de 2026",
        credential: "ID da credencial 690669936",
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
        title: "IA e dados",
        items: ["Machine Learning", "Visão por computador", "PyTorch", "OpenCV", "GenAI"],
      },
      {
        title: "Software",
        items: ["C / C++", "ROS 2", "Dart", "SQL", "Git"],
      },
    ],
  },
  projects: {
    code: "Código",
    preview: "Pré-visualização",
    eyetracker: {
      title: "Eye Tracker para orientação vocacional",
      description:
        "Aplicação de eye tracking em tempo real que compara trajetórias de olhar com escolhas vocacionais explícitas, melhorando a orientação académica.",
    },
    gmrai: {
      title: "GMR-AI",
      description:
        "Robot autónomo para cuidar relvados extensos. Uma aplicação permite definir a altura de corte; o robot também mede temperatura e humidade e usa várias câmaras para evitar obstáculos e seguir a sua rota.",
    },
    mygmr: {
      title: "MyGMR",
      description:
        "Backend no Google Cloud App Engine e uma app Android em Flutter para gerir dispositivos GMR e as respetivas tarefas.",
    },
    reconstruction: {
      title: "Reconstrução 3D — SfM",
      description:
        "Programa em Python que reconstrói um modelo 3D a partir de imagens 2D que cobrem todos os ângulos de um objeto, usando Structure from Motion (SfM).",
    },
    rain: {
      title: "Previsão de chuva na Austrália",
      description:
        "Projeto de machine learning para prever chuva na Austrália com um dataset do Kaggle, comparando vários classificadores e focando a precisão.",
    },
    treasure: {
      title: "Treasure Track",
      description:
        "Jogo em terceira e primeira pessoa cujo objetivo é recolher um número de moedas num limite de tempo, com alterações de luz ao longo do dia e um modo livre.",
    },
  },
  about: {
    p1: "Chamo-me Youssef e sou <strong>engenheiro informático</strong>, especializado em <strong>Computação (Computer Science)</strong>. Trabalho atualmente na <strong>NTT DATA</strong> como <strong>programador Backend Python e Cloud (AWS)</strong>.",
    p2: "Neste papel construo serviços e pipelines de dados com <strong>Python</strong>, <strong>PySpark</strong>, <strong>Amazon Redshift</strong> e <strong>S3</strong>. Antes fiz estágio em <strong>GenAI</strong> e automatização de processos, e investigação em <strong>visão por computador</strong> no CVC.",
    p3: "Durante o curso trabalhei em videojogos, aplicações e sistemas industriais com <strong>ROS</strong>, e aprofundei-me em <strong>Machine Learning</strong>: aprendizagem supervisionada e não supervisionada, redes neuronais e visão por computador.",
    languagesTitle: "Línguas",
    languages: [
      { name: "Espanhol", level: "Nativo" },
      { name: "Catalão", level: "Nativo" },
      { name: "Árabe", level: "Nativo" },
      { name: "Inglês", level: "B2 · Profissional" },
    ],
  },
  footer: {
    rights: "Quase todos os direitos reservados",
    about: "Sobre mim",
    contact: "Contacto",
  },
  theme: {
    label: "Escolher o tema",
    light: "Claro",
    dark: "Escuro",
    system: "Sistema",
  },
  language: {
    label: "Mudar de idioma",
  },
}

export default pt

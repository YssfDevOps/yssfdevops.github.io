import type { Translation } from "../types"

const ar: Translation = {
  meta: {
    title: "يوسف كحواح | مطوّر Backend بلغة Python والسحابة",
    description:
      "مطوّر برمجيات في NTT DATA متخصص في Backend بلغة Python وسحابة AWS (PySpark وAmazon Redshift وS3). مهندس معلوماتية في برشلونة.",
  },
  nav: {
    experience: "الخبرة",
    education: "التعليم",
    projects: "المشاريع",
    about: "نبذة",
    contact: "تواصل",
    skills: "المهارات",
  },
  hero: {
    badgeAvailable: "متاح لفرص العمل",
    badgeWorking: "أعمل حالياً في NTT DATA",
    greeting: "مرحباً، أنا يوسف",
    bio: "<strong>مهندس معلوماتية</strong> من برشلونة، إسبانيا 🇪🇸. <strong>مطوّر برمجيات خلفية بلغة Python والسحابة (AWS)</strong> في NTT DATA، أعمل مع <strong>PySpark</strong> و<strong>Amazon Redshift</strong> و<strong>S3</strong>.",
    contact: "تواصل معي",
  },
  sections: {
    experience: "الخبرة",
    education: "التعليم",
    projects: "المشاريع",
    about: "نبذة عني",
    skills: "المهارات",
    certifications: "التراخيص والشهادات",
  },
  experience: {
    more: "المزيد",
    items: [
      {
        date: "نوفمبر 2025 – الحاضر",
        title: "مطوّر Backend Python والسحابة",
        company: "NTT DATA Europe & Latam",
        location: "برشلونة، إسبانيا · هجين",
        description:
          "أصمّم وأبني خدمات خلفية وسلاسل بيانات بلغة Python على AWS. أعمل يومياً مع PySpark للمعالجة واسعة النطاق، وAmazon Redshift كمستودع تحليلي، وS3 للتخزين ودمج البيانات عبر المنصة.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "AWS", "PySpark", "Redshift", "S3"],
      },
      {
        date: "يوليو 2025 – سبتمبر 2025",
        title: "متدرّب في الذكاء الاصطناعي التوليدي",
        company: "NTT DATA Europe & Latam",
        location: "برشلونة، إسبانيا · هجين",
        description:
          "تحليل حالات استخدام الذكاء الاصطناعي التوليدي في صيانة التطبيقات وتحديد أتمتة العمليات لتحسين التسليم وتقليل العمل المتكرر.",
        link: "https://www.nttdata.com/",
        skills: ["Python", "GenAI"],
      },
      {
        date: "مارس 2025 – يوليو 2025",
        title: "متدرّب بحث",
        company: "مركز الرؤية الحاسوبية (CVC)",
        location: "برشلونة، إسبانيا · عن بُعد",
        description:
          "تنفيذ نظام تتبّع للعين في الزمن الحقيقي انطلاقاً من كاميرا ويب باستخدام تقنيات التعلّم العميق والرؤية الحاسوبية.",
        link: "https://www.cvc.uab.es/",
        skills: ["Python", "Deep Learning", "Computer Vision"],
      },
    ],
  },
  education: {
    items: [
      {
        date: "سبتمبر 2021 – يوليو 2025",
        title: "شهادة في هندسة المعلوماتية — تخصّص الحوسبة",
        company: "الجامعة المستقلة في برشلونة (UAB)",
        description: "المعدّل: 8.76 / 10",
      },
      {
        date: "يونيو 2021 – يوليو 2021",
        title: "شهادة الكفاءة B2",
        company: "Oxford English School",
        description: "",
      },
      {
        date: "2019 – 2021",
        title: "البكالوريا التكنولوجية",
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
        date: "تاريخ الإصدار: أغسطس 2026",
      },
      {
        title: "OpenAI Foundational Knowledge",
        issuer: "OpenAI",
        date: "تاريخ الإصدار: أغسطس 2026",
        credential: "معرّف الشهادة 690669936",
      },
    ],
  },
  skills: {
    groups: [
      {
        title: "الخلفية والسحابة",
        items: ["Python", "AWS", "PySpark", "Amazon Redshift", "Amazon S3"],
      },
      {
        title: "الذكاء الاصطناعي والبيانات",
        items: ["Machine Learning", "الرؤية الحاسوبية", "PyTorch", "OpenCV", "GenAI"],
      },
      {
        title: "البرمجيات",
        items: ["C / C++", "ROS 2", "Dart", "SQL", "Git"],
      },
    ],
  },
  projects: {
    code: "الشيفرة",
    preview: "معاينة",
    eyetracker: {
      title: "تتبّع العين للتوجيه المهني",
      description:
        "تطبيق لتتبّع العين في الزمن الحقيقي يقارن مسار النظرة مع الاختيارات المهنية المعلنة لتحسين التوجيه الأكاديمي.",
    },
    gmrai: {
      title: "GMR-AI",
      description:
        "روبوت مستقل للعناية بالمساحات الخضراء الواسعة. يتيح تطبيق مصاحب ضبط ارتفاع القص، ويقيس الحرارة والرطوبة، ويستخدم عدة كاميرات لتجنّب العوائق واتباع مساره.",
    },
    mygmr: {
      title: "MyGMR",
      description:
        "خلفية على Google Cloud App Engine وتطبيق أندرويد بـ Flutter لإدارة أجهزة GMR ومهامها.",
    },
    reconstruction: {
      title: "إعادة البناء ثلاثي الأبعاد — SfM",
      description:
        "برنامج بايثون يعيد بناء نموذج ثلاثي الأبعاد من صور ثنائية الأبعاد تغطي كل زوايا الجسم باستخدام Structure from Motion.",
    },
    rain: {
      title: "التنبؤ بالمطر في أستراليا",
      description:
        "مشروع تعلّم آلي للتنبؤ بهطول المطر في أستراليا اعتماداً على بيانات Kaggle، مع مقارنة عدة مصنّفات والتركيز على الدقة.",
    },
    treasure: {
      title: "Treasure Track",
      description:
        "لعبة بمنظور ثالث وأول هدفها جمع عدد من العملات ضمن وقت محدد، مع تغيّر الإضاءة خلال اليوم ووضع لعب حر.",
    },
  },
  about: {
    p1: "اسمي يوسف، وأنا <strong>مهندس معلوماتية</strong> متخصّص في <strong>الحوسبة (علوم الحاسوب)</strong>. أعمل حالياً في <strong>NTT DATA</strong> كـ<strong>مطوّر Backend بلغة Python والسحابة (AWS)</strong>.",
    p2: "في هذا الدور أبني خدمات وسلاسل بيانات باستخدام <strong>Python</strong> و<strong>PySpark</strong> و<strong>Amazon Redshift</strong> و<strong>S3</strong>. سبق ذلك تدريب في <strong>الذكاء الاصطناعي التوليدي</strong> وأتمتة العمليات، وبحث في <strong>الرؤية الحاسوبية</strong> في مركز الرؤية الحاسوبية.",
    p3: "خلال دراستي عملت على ألعاب فيديو وتطبيقات وأنظمة صناعية باستخدام <strong>ROS</strong>، وتعمّقت في <strong>التعلّم الآلي</strong>: التعلّم الموجّه وغير الموجّه، والشبكات العصبية، والرؤية الحاسوبية.",
    languagesTitle: "اللغات",
    languages: [
      { name: "الإسبانية", level: "لغة أم" },
      { name: "القطلونية", level: "لغة أم" },
      { name: "العربية", level: "لغة أم" },
      { name: "الإنجليزية", level: "B2 · مستوى مهني" },
    ],
  },
  footer: {
    rights: "جميع الحقوق تقريباً محفوظة",
    about: "نبذة",
    contact: "تواصل",
  },
  theme: {
    label: "اختر المظهر",
    light: "فاتح",
    dark: "داكن",
    system: "النظام",
  },
  language: {
    label: "تغيير اللغة",
  },
}

export default ar

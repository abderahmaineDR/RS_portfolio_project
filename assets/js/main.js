const LANG_STORAGE_KEY = "idriss-rs-language";
const SUPPORTED_LANGS = ["en", "fr", "ar"];

const translations = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      youtube: "YouTube",
      about: "About",
      languageLabel: "Change Language",
      languages: {
        en: "English",
        fr: "Français",
        ar: "العربية",
      },
    },
    hero: {
      title: `Idriss <span class="text-gradient">RS</span>`,
      subtitle: "From Vlogs to Viral",
      text: "Your Brand Amplified — By IDRISS RS",
      buttons: {
        primary: "View Portfolio",
        secondary: "Watch My Channel",
      },
    },
    services: {
      heading: `What I <span class="text-gradient">Create</span>`,
      description: "Specializing in cinematic content that brings brands to life.",
      cards: {
        restaurants: { title: "Restaurants", body: "Culinary experiences" },
        clubs: { title: "Interactive Clubs", body: "Charity projects & helping people" },
        nutrition: { title: "Nutrition", body: "Healthy lifestyle" },
      },
    },
    stats: {
      projects: "Projects Completed",
      clients: "Happy Clients",
      videos: "Videos Created",
    },
    cta: {
      heading: `Ready to Ignite Your <span class="text-gradient">Brand?</span>`,
      text: "Let's create something extraordinary together.",
      button: "Explore My Work",
    },
    footer: {
      tagline: "From Vlogs to Viral",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "All rights reserved.",
    },
    work: {
      heroTitle: `My <span class="text-gradient">Portfolio</span>`,
      heroText: "A curated collection of visual stories that bring brands to life.",
      filters: {
        all: "All Work",
        restaurants: "Restaurants",
        "interactive-clubs": "Interactive Clubs",
        nutrition: "Nutrition",
      },
      categories: {
        restaurants: "Restaurants",
        "interactive-clubs": "Interactive Clubs",
        nutrition: "Nutrition",
      },
      projects: {
        doday: "Doday",
        tacosChaneb: "Tacos Chaneb",
        darHmeti: "Dar Hmeti",
        blackHouse: "Black House",
        anastasia: "Anastasia",
        interactMegrine1: "Interact Megrine 1",
        interactMegrine2: "Interact Megrine 2",
        carthagene1: "Carthagene 1",
        carthagene2: "Carthagene 2",
        interactGolf1: "Interact Golf 1",
        interactGolf2: "Interact Golf 2",
        aquatic1: "Aquatic 1",
        aquatic2: "Aquatic 2",
        aquatic3: "Aquatic 3",
        aquatic4: "Aquatic 4",
        nutribeast1: "Nutribeast 1",
        nutribeast2: "Nutribeast 2",
        nutribeast3: "Nutribeast 3",
        nutribeast4: "Nutribeast 4",
        nutribeast5: "Nutribeast 5",
        nutribeast6: "Nutribeast 6",
        nutribeast7: "Nutribeast 7",
        nutribeast8: "Nutribeast 8",
        nutribeast9: "Nutribeast 9",
      },
    },
    youtube: {
      heroTitle: `The Creative <span class="text-gradient">Fire</span>`,
      heroText:
        "Join me as I share tutorials, behind-the-scenes content, and the creative process behind stunning visual stories.",
      heroButton: "Ignite My Channel",
      latestHeading: `Latest <span class="text-gradient">Videos</span>`,
      viewAll: "View All Videos",
      stats: {
        subscribers: "Subscribers",
        views: "Total Views",
        growth: "Monthly Growth",
      },
      labels: {
        viewsWord: "views",
      },
      videos: {
        behindScenes: "IM MOVING TO A NEW SCHOOL !",
        editingWorkflow: "DAY IN THE LIFE OF THE WORST TUNISIAN STUDENT !",
        colorGrading: "I SPENT 5 DAYS ALONE IN THE SOUTH OF TUNISIA !",
        travelVlog: "I SPENT 24 HOURS WITH MY MOTHER !",
        clientBreakdown: "I WILL NEVER INVITE MY FRIEND TO MY HOUSE AGAIN !",
        gearSetup: "KICKED OUT OF MY SCHOOL ?",
        popularVideo1: "I SKIPPED CLASS TO MEET AN AMERICAN YOUTUBER !",
        popularVideo2: "WHERE HAVE I BEEN ?",
      },
    },
    about: {
      heroTitle: `The Story Behind <span class="text-gradient">the Lens</span>`,
      role: "Video Editor & Content Creator",
      howStarted: `How I <span class="text-gradient">Started</span>`,
      labels: {
        paragraph1: "Paragraph 1",
        paragraph2: "Paragraph 2",
        paragraph3: "Paragraph 3",
        paragraph4: "Paragraph 4",
      },
      content: {
        paragraph1: "[Content to be filled - Paragraph 1]",
        paragraph2: "[Content to be filled - Paragraph 2]",
        paragraph3: "[Content to be filled - Paragraph 3]",
        paragraph4: "[Content to be filled - Paragraph 4]",
      },
      paragraphs: {
        first:
          "My journey began in the vibrant streets of Tunisia, where every corner tells a story waiting to be captured. What started as a fascination with cameras evolved into a passion for crafting visual narratives that resonate worldwide.",
        second:
          "Over the years, I've honed my skills in video editing and content creation, partnering with restaurants, clubs, fitness centers, and retail brands. Each project blends creativity with technical mastery to drive real results.",
        third:
          "My approach is rooted in understanding the unique essence of every brand. From the energy of a bustling nightclub to the serenity of a Mediterranean restaurant, I aim to tell authentic stories that connect emotionally.",
        fourth:
          "Today, I share my journey through YouTube and continue to push the boundaries of what's possible with visual storytelling. From the heart of Tunisia to screens around the world, this is just the beginning.",
      },
      cta: "View My Work",
      quote: "Every frame is an opportunity to tell a story that matters.",
      location: "Based in Tunisia",
    },
    notFound: {
      text: "Oops! Page not found.",
      button: "Return Home",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      work: "Projets",
      youtube: "YouTube",
      about: "À propos",
      languageLabel: "Changer de langue",
      languages: {
        en: "Anglais",
        fr: "Français",
        ar: "Arabe",
      },
    },
    hero: {
      title: `Idriss <span class="text-gradient">RS</span>`,
      subtitle: "Des vlogs au viral",
      text: "Votre marque amplifiée — Par IDRISS RS",
      buttons: {
        primary: "Voir le portfolio",
        secondary: "Regarder ma chaîne",
      },
    },
    services: {
      heading: `Ce que je <span class="text-gradient">crée</span>`,
      description: "Des contenus cinématographiques qui donnent vie aux marques.",
      cards: {
        restaurants: { title: "Restaurants", body: "Expériences culinaires" },
        clubs: { title: "Clubs interactifs", body: "Projets caritatifs et aide aux personnes" },
        nutrition: { title: "Nutrition", body: "Style de vie sain" },
      },
    },
    stats: {
      projects: "Projets réalisés",
      clients: "Clients satisfaits",
      videos: "Vidéos produites",
    },
    cta: {
      heading: `Prêt à enflammer votre <span class="text-gradient">marque ?</span>`,
      text: "Créons quelque chose d'extraordinaire ensemble.",
      button: "Explorer mon travail",
    },
    footer: {
      tagline: "Des vlogs au viral",
      quickLinks: "Liens utiles",
      connect: "Réseaux",
      rights: "Tous droits réservés.",
    },
    work: {
      heroTitle: `Mon <span class="text-gradient">portfolio</span>`,
      heroText: "Une sélection d'histoires visuelles qui donnent vie aux marques.",
      filters: {
        all: "Tous les projets",
        restaurants: "Restaurants",
        "interactive-clubs": "Clubs interactifs",
        nutrition: "Nutrition",
      },
      categories: {
        restaurants: "Restaurants",
        "interactive-clubs": "Clubs interactifs",
        nutrition: "Nutrition",
      },
      projects: {
        doday: "Doday",
        tacosChaneb: "Tacos Chaneb",
        darHmeti: "Dar Hmeti",
        blackHouse: "Black House",
        anastasia: "Anastasia",
        interactMegrine1: "Interact Megrine 1",
        interactMegrine2: "Interact Megrine 2",
        carthagene1: "Carthagene 1",
        carthagene2: "Carthagene 2",
        interactGolf1: "Interact Golf 1",
        interactGolf2: "Interact Golf 2",
        aquatic1: "Aquatic 1",
        aquatic2: "Aquatic 2",
        aquatic3: "Aquatic 3",
        aquatic4: "Aquatic 4",
        nutribeast1: "Nutribeast 1",
        nutribeast2: "Nutribeast 2",
        nutribeast3: "Nutribeast 3",
        nutribeast4: "Nutribeast 4",
        nutribeast5: "Nutribeast 5",
        nutribeast6: "Nutribeast 6",
        nutribeast7: "Nutribeast 7",
        nutribeast8: "Nutribeast 8",
        nutribeast9: "Nutribeast 9",
      },
    },
    youtube: {
      heroTitle: `Le feu <span class="text-gradient">créatif</span>`,
      heroText:
        "Suivez-moi pour des tutoriels, des coulisses et toute mon approche créative pour raconter des histoires visuelles.",
      heroButton: "Lancer ma chaîne",
      latestHeading: `Dernières <span class="text-gradient">vidéos</span>`,
      viewAll: "Voir toutes les vidéos",
      stats: {
        subscribers: "Abonnés",
        views: "Vues totales",
        growth: "Croissance mensuelle",
      },
      labels: {
        viewsWord: "vues",
      },
      videos: {
        behindScenes: "JE DÉMÉNAGE DANS UNE NOUVELLE ÉCOLE !",
        editingWorkflow: "JOURNÉE DANS LA VIE DU PIRE ÉTUDIANT TUNISIEN !",
        colorGrading: "J'AI PASSÉ 5 JOURS SEUL DANS LE SUD DE LA TUNISIE !",
        travelVlog: "J'AI PASSÉ 24 HEURES AVEC MA MÈRE !",
        clientBreakdown: "JE N'INVITERAI PLUS JAMAIS MON AMI CHEZ MOI !",
        gearSetup: "EXPULSÉ DE MON ÉCOLE ?",
        popularVideo1: "J'AI SÉCHÉ LES COURS POUR RENCONTRER UN YOUTUBER AMÉRICAIN !",
        popularVideo2: "OÙ ÉTAIS-JE ?",
      },
    },
    about: {
      heroTitle: `L'histoire derrière <span class="text-gradient">l'objectif</span>`,
      role: "Monteur vidéo & créateur de contenu",
      howStarted: `Comment tout a <span class="text-gradient">commencé</span>`,
      labels: {
        paragraph1: "Paragraphe 1",
        paragraph2: "Paragraphe 2",
        paragraph3: "Paragraphe 3",
        paragraph4: "Paragraphe 4",
      },
      content: {
        paragraph1: "[Contenu à remplir - Paragraphe 1]",
        paragraph2: "[Contenu à remplir - Paragraphe 2]",
        paragraph3: "[Contenu à remplir - Paragraphe 3]",
        paragraph4: "[Contenu à remplir - Paragraphe 4]",
      },
      paragraphs: {
        first:
          "Mon aventure a commencé dans les rues vibrantes de Tunisie, où chaque coin raconte une histoire à capturer. Une simple passion pour les caméras est devenue un désir de créer des récits visuels qui voyagent dans le monde.",
        second:
          "Au fil des années, j'ai perfectionné mon montage vidéo et ma création de contenu aux côtés de restaurants, clubs, salles de sport et marques retail. Chaque projet marie créativité et précision pour offrir de vrais résultats.",
        third:
          "Mon approche repose sur la compréhension de l'âme de chaque marque. De l'énergie d'un club animé à la douceur d'un restaurant méditerranéen, je raconte des histoires authentiques qui touchent le cœur.",
        fourth:
          "Aujourd'hui, je partage mon parcours sur YouTube et je continue de repousser les limites du storytelling visuel. De la Tunisie au reste du monde, ce n'est que le début.",
      },
      cta: "Découvrir mon travail",
      quote: "Chaque image est une occasion de raconter une histoire qui compte.",
      location: "Basé en Tunisie",
    },
    notFound: {
      text: "Oups ! Page introuvable.",
      button: "Retour à l'accueil",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      work: "الأعمال",
      youtube: "يوتيوب",
      about: "نبذة عني",
      languageLabel: "تغيير اللغة",
      languages: {
        en: "الإنجليزية",
        fr: "الفرنسية",
        ar: "العربية",
      },
    },
    hero: {
      title: `Idriss <span class="text-gradient">RS</span>`,
      subtitle: "من الفيديوهات إلى الفيروسية",
      text: "علامتك التجارية مكبرة — بواسطة IDRISS RS",
      buttons: {
        primary: "عرض الأعمال",
        secondary: "شاهد قناتي",
      },
    },
    services: {
      heading: `ماذا <span class="text-gradient">أصنع</span>`,
      description: "متخصص في محتوى سينمائي يمنح العلامات التجارية حياة جديدة.",
      cards: {
        restaurants: { title: "المطاعم", body: "تجارب الطهي" },
        clubs: { title: "النوادي التفاعلية", body: "مشاريع خيرية ومساعدة الناس" },
        nutrition: { title: "التغذية", body: "أسلوب حياة صحي" },
      },
    },
    stats: {
      projects: "مشاريع منجزة",
      clients: "عملاء سعداء",
      videos: "فيديوهات منجزة",
    },
    cta: {
      heading: `هل أنت مستعد لإشعال <span class="text-gradient">علامتك؟</span>`,
      text: "فلنخلق شيئًا استثنائيًا معًا.",
      button: "استكشف أعمالي",
    },
    footer: {
      tagline: "من الفيديوهات إلى الفيروسية",
      quickLinks: "روابط سريعة",
      connect: "تواصل",
      rights: "جميع الحقوق محفوظة.",
    },
    work: {
      heroTitle: `مجموعة <span class="text-gradient">أعمالي</span>`,
      heroText: "مجموعة مختارة من الحكايات البصرية التي تحيي العلامات التجارية.",
      filters: {
        all: "كل الأعمال",
        restaurants: "المطاعم",
        "interactive-clubs": "النوادي التفاعلية",
        nutrition: "التغذية",
      },
      categories: {
        restaurants: "المطاعم",
        "interactive-clubs": "النوادي التفاعلية",
        nutrition: "التغذية",
      },
      projects: {
        doday: "Doday",
        tacosChaneb: "Tacos Chaneb",
        darHmeti: "Dar Hmeti",
        blackHouse: "Black House",
        anastasia: "Anastasia",
        interactMegrine1: "Interact Megrine 1",
        interactMegrine2: "Interact Megrine 2",
        carthagene1: "Carthagene 1",
        carthagene2: "Carthagene 2",
        interactGolf1: "Interact Golf 1",
        interactGolf2: "Interact Golf 2",
        aquatic1: "Aquatic 1",
        aquatic2: "Aquatic 2",
        aquatic3: "Aquatic 3",
        aquatic4: "Aquatic 4",
        nutribeast1: "Nutribeast 1",
        nutribeast2: "Nutribeast 2",
        nutribeast3: "Nutribeast 3",
        nutribeast4: "Nutribeast 4",
        nutribeast5: "Nutribeast 5",
        nutribeast6: "Nutribeast 6",
        nutribeast7: "Nutribeast 7",
        nutribeast8: "Nutribeast 8",
        nutribeast9: "Nutribeast 9",
      },
    },
    youtube: {
      heroTitle: `الشعلة <span class="text-gradient">الإبداعية</span>`,
      heroText:
        "انضم إليّ لأشارك الدروس، والكواليس، وكل ما يجري خلف القصص البصرية المدهشة.",
      heroButton: "أشعل قناتي",
      latestHeading: `أحدث <span class="text-gradient">الفيديوهات</span>`,
      viewAll: "عرض كل الفيديوهات",
      stats: {
        subscribers: "المشتركين",
        views: "إجمالي المشاهدات",
        growth: "نمو شهري",
      },
      labels: {
        viewsWord: "مشاهدة",
      },
      videos: {
        behindScenes: "سأنتقل إلى مدرسة جديدة !",
        editingWorkflow: "يوم في حياة أسوأ طالب تونسي !",
        colorGrading: "قضيت 5 أيام وحدي في جنوب تونس !",
        travelVlog: "قضيت 24 ساعة مع أمي !",
        clientBreakdown: "لن أدعو صديقي إلى منزلي مرة أخرى !",
        gearSetup: "طُردت من مدرستي ؟",
        popularVideo1: "تغيبت عن الفصل للقاء يوتيوبر أمريكي !",
        popularVideo2: "أين كنت ؟",
      },
    },
    about: {
      heroTitle: `حكاية ما وراء <span class="text-gradient">العدسة</span>`,
      role: "محرر فيديو وصانع محتوى",
      howStarted: `كيف <span class="text-gradient">بدأت</span>`,
      labels: {
        paragraph1: "الفقرة 1",
        paragraph2: "الفقرة 2",
        paragraph3: "الفقرة 3",
        paragraph4: "الفقرة 4",
      },
      content: {
        paragraph1: "[المحتوى سيتم ملؤه - الفقرة 1]",
        paragraph2: "[المحتوى سيتم ملؤه - الفقرة 2]",
        paragraph3: "[المحتوى سيتم ملؤه - الفقرة 3]",
        paragraph4: "[المحتوى سيتم ملؤه - الفقرة 4]",
      },
      paragraphs: {
        first:
          "بدأت رحلتي في شوارع تونس النابضة بالحياة، حيث لكل زاوية قصة تنتظر أن تُروى. تحوّل شغفي بالكاميرا إلى حب لصناعة حكايات بصرية تصل إلى العالم.",
        second:
          "على مر السنين، طوّرت مهاراتي في المونتاج وصناعة المحتوى مع مطاعم و نوادٍ ومراكز لياقة ومتاجر. كل مشروع يجمع بين الإبداع والإتقان ليصنع أثراً حقيقياً.",
        third:
          "أبدأ عملي بفهم جوهر كل علامة تجارية. من صخب النوادي إلى هدوء المطاعم المتوسطية، أبحث عن قصص صادقة تلامس المشاعر.",
        fourth:
          "اليوم أشارك رحلتي عبر يوتيوب وأواصل توسيع حدود السرد البصري. من قلب تونس إلى شاشات العالم، ما زلنا في البداية.",
      },
      cta: "شاهد أعمالي",
      quote: "كل لقطة فرصة لنسرد قصة ذات معنى.",
      location: "مقرّي في تونس",
    },
    notFound: {
      text: "عذرًا! الصفحة غير موجودة.",
      button: "العودة للرئيسية",
    },
  },
};

const WORK_FILTERS = [
  { id: "all", labelKey: "work.filters.all" },
  { id: "restaurants", labelKey: "work.filters.restaurants" },
  { id: "interactive-clubs", labelKey: "work.filters.interactive-clubs" },
  { id: "nutrition", labelKey: "work.filters.nutrition" },
];

const WORK_PROJECTS = [
  // Restaurants (4 total)
  { id: 1, titleKey: "work.projects.doday", category: "restaurants", thumbnail: "assets/img/restaurant-1.jpg" },
  { id: 2, titleKey: "work.projects.tacosChaneb", category: "restaurants", thumbnail: "assets/img/restaurant-2.jpg" },
  { id: 3, titleKey: "work.projects.darHmeti", category: "restaurants", thumbnail: "assets/img/restaurant-1.jpg" },
  { id: 4, titleKey: "work.projects.blackHouse", category: "restaurants", thumbnail: "assets/img/restaurant-2.jpg" },
  
  // Interactive Clubs (11 total)
  { id: 5, titleKey: "work.projects.anastasia", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 6, titleKey: "work.projects.interactMegrine1", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 7, titleKey: "work.projects.interactMegrine2", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 8, titleKey: "work.projects.carthagene1", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 9, titleKey: "work.projects.carthagene2", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 10, titleKey: "work.projects.interactGolf1", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 11, titleKey: "work.projects.interactGolf2", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 12, titleKey: "work.projects.aquatic1", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 13, titleKey: "work.projects.aquatic2", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 14, titleKey: "work.projects.aquatic3", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  { id: 15, titleKey: "work.projects.aquatic4", category: "interactive-clubs", thumbnail: "assets/img/nightclub.jpg" },
  
  // Nutrition (9 total)
  { id: 16, titleKey: "work.projects.nutribeast1", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
  { id: 17, titleKey: "work.projects.nutribeast2", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
  { id: 18, titleKey: "work.projects.nutribeast3", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
  { id: 19, titleKey: "work.projects.nutribeast4", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
  { id: 20, titleKey: "work.projects.nutribeast5", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
  { id: 21, titleKey: "work.projects.nutribeast6", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
  { id: 22, titleKey: "work.projects.nutribeast7", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
  { id: 23, titleKey: "work.projects.nutribeast8", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
  { id: 24, titleKey: "work.projects.nutribeast9", category: "nutrition", thumbnail: "assets/img/nutrition.jpg" },
];

const YOUTUBE_STATS = [
  { icon: "users", labelKey: "youtube.stats.subscribers", value: "50K+", counter: 50, suffix: "K+", prefix: "" },
  { icon: "eye", labelKey: "youtube.stats.views", value: "150K+", counter: 150, suffix: "K+", prefix: "" },
  { icon: "trending-up", labelKey: "youtube.stats.growth", value: "+15%", counter: 15, suffix: "%", prefix: "+" },
];

const YOUTUBE_VIDEOS = [
  {
    id: 1,
    titleKey: "youtube.videos.behindScenes",
    thumbnail: "thumbnailes/vid1.jpg",
    views: "10k",
    duration: "9:39",
    url: "https://youtu.be/o7WSSDM0JkI?si=DXC9_RINie9bqTZq",
  },
  {
    id: 2,
    titleKey: "youtube.videos.editingWorkflow",
    thumbnail: "thumbnailes/vid2.jpg",
    views: "9.6k",
    duration: "9:13",
    url: "https://youtu.be/HO1pLCJBBvE?si=-s6MZdQPoTH4HD_V",
  },
  {
    id: 3,
    titleKey: "youtube.videos.colorGrading",
    thumbnail: "thumbnailes/vid3.jpg",
    views: "9k",
    duration: "11:35",
    url: "https://youtu.be/gQINmFYHoj4?si=jdMSojfIKMkSMj9R",
  },
  {
    id: 4,
    titleKey: "youtube.videos.travelVlog",
    thumbnail: "thumbnailes/vid4.jpg",
    views: "5.6k",
    duration: "9:28",
    url: "https://youtu.be/skkkr6QMnvc?si=wcxnuoWavoCqbYrL",
  },
  {
    id: 5,
    titleKey: "youtube.videos.clientBreakdown",
    thumbnail: "thumbnailes/vid5.jpg",
    views: "5.2k",
    duration: "9:52",
    url: "https://youtu.be/09z8UwILyr8?si=05_GgrMZQtNHyY8g",
  },
  {
    id: 6,
    titleKey: "youtube.videos.gearSetup",
    thumbnail: "thumbnailes/vid6.jpg",
    views: "4.9k",
    duration: "9:14",
    url: "https://youtu.be/AwurSx-dp8c?si=aoilPIVLxbe2Rkp1",
  },
  {
    id: 7,
    titleKey: "youtube.videos.popularVideo1",
    thumbnail: "thumbnailes/vid7.jpg",
    views: "4.5k",
    duration: "11:05",
    url: "https://youtu.be/pPKunxOFcLI?si=M2OEuyMeHKlpVmjS",
  },
  {
    id: 8,
    titleKey: "youtube.videos.popularVideo2",
    thumbnail: "thumbnailes/vid8.jpg",
    views: "4.3k",
    duration: "7:23",
    url: "https://youtu.be/3yMSjeqzFz0?si=yAPsuOP2J_wRkTpa",
  },
];

let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSystem();
  initNavigation();
  initWorkPage();
  initYouTubePage();
  initCounterAnimations();
  updateFooterYear();
  refreshIcons();
});

function initLanguageSystem() {
  currentLanguage = getStoredLanguage();
  initLanguageSwitcher();
  setLanguage(currentLanguage, { skipStorage: true, skipDispatch: true, skipPulse: true });
}

function initNavigation() {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  const navLinks = nav.querySelectorAll("[data-nav-link]");
  const navToggle = nav.querySelector("[data-nav-toggle]");
  const navMenu = nav.querySelector("[data-nav-links]");
  const currentPage = document.body.dataset.page;

  navLinks.forEach((link) => {
    if (link.dataset.navLink === currentPage) {
      link.classList.add("is-active");
    }
  });

  const closeMenu = () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const isClickInside = nav.contains(event.target);
    if (!isClickInside) {
      closeMenu();
    }
  });

  const handleScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
}

function initLanguageSwitcher() {
  const langSwitch = document.querySelector("[data-lang-switch]");
  if (!langSwitch) return;

  const toggleBtn = langSwitch.querySelector("[data-lang-toggle]");
  const optionsList = langSwitch.querySelector("[data-lang-options]");

  const closeList = () => {
    langSwitch.classList.remove("is-open");
    toggleBtn?.setAttribute("aria-expanded", "false");
  };

  toggleBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = langSwitch.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  optionsList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang-option]");
    if (!button) return;
    event.preventDefault();
    setLanguage(button.dataset.langOption);
    closeList();
  });

  document.addEventListener("click", (event) => {
    if (!langSwitch.contains(event.target)) {
      closeList();
    }
  });
}

function setLanguage(lang, options = {}) {
  const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : "en";
  const { skipStorage = false, skipDispatch = false, skipPulse = false } = options;

  currentLanguage = safeLang;

  if (!skipStorage) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, safeLang);
    } catch {
      // Ignore storage errors (private mode, etc.)
    }
  }

  applyLanguageDirection(safeLang);
  applyTranslationsToDOM(safeLang);
  updateLanguageSwitcherUI(safeLang);

  if (!skipDispatch) {
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: safeLang } }));
  }

  if (!skipPulse) {
    triggerLanguagePulse();
  }
}

function translate(key, lang = currentLanguage) {
  const segments = key.split(".");
  let result = translations[lang];

  for (const segment of segments) {
    if (result && Object.prototype.hasOwnProperty.call(result, segment)) {
      result = result[segment];
    } else {
      result = undefined;
      break;
    }
  }

  if (typeof result === "string") {
    return result;
  }

  if (lang !== "en") {
    return translate(key, "en");
  }

  return key;
}

function applyTranslationsToDOM(lang) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    const value = translate(key, lang);
    if (!value) return;

    if (node.dataset.i18nType === "html") {
      node.innerHTML = value;
    } else {
      node.textContent = value;
    }
  });
}

function applyLanguageDirection(lang) {
  const isRTL = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.body?.classList.toggle("is-rtl", isRTL);
}

function updateLanguageSwitcherUI(lang) {
  const currentLabel = document.querySelector("[data-lang-current]");
  if (currentLabel) {
    currentLabel.textContent = lang.toUpperCase();
  }

  const toggleBtn = document.querySelector("[data-lang-toggle]");
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-label", `${translate("nav.languageLabel", lang)} (${lang.toUpperCase()})`);
  }

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === lang;
    button.classList.toggle("is-active", isActive);
    if (isActive) {
      button.setAttribute("aria-pressed", "true");
    } else {
      button.removeAttribute("aria-pressed");
    }
  });
}

function triggerLanguagePulse() {
  const langSwitch = document.querySelector("[data-lang-switch]");
  if (!langSwitch) return;
  langSwitch.classList.add("lang-switch--pulse");
  setTimeout(() => langSwitch.classList.remove("lang-switch--pulse"), 700);
}

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage errors
  }

  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  if (browserLang && SUPPORTED_LANGS.includes(browserLang)) {
    return browserLang;
  }

  return "en";
}

function initWorkPage() {
  const filterContainer = document.querySelector("[data-work-filters]");
  const gridContainer = document.querySelector("[data-work-grid]");
  if (!filterContainer || !gridContainer) return;

  let activeCategory = "all";

  const renderFilters = () => {
    filterContainer.innerHTML = WORK_FILTERS.map(
      (category) => `
        <button class="badge ${category.id === activeCategory ? "is-active" : ""}" data-category="${category.id}">
          ${translate(category.labelKey)}
        </button>
      `,
    ).join("");
  };

  const renderProjects = () => {
    const filteredProjects =
      activeCategory === "all"
        ? WORK_PROJECTS
        : WORK_PROJECTS.filter((project) => project.category === activeCategory);

    gridContainer.innerHTML = filteredProjects
      .map(
        (project) => `
          <div>
            <article class="project-card">
              <img src="${project.thumbnail}" alt="${translate(project.titleKey)}">
            </article>
            <div class="project-info">
              <h3 class="project-title">${translate(project.titleKey)}</h3>
              <p class="project-credits">${translate(`work.categories.${project.category}`)}</p>
            </div>
          </div>
        `,
      )
      .join("");
  };

  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderProjects();
  });

  document.addEventListener("languagechange", () => {
    renderFilters();
    renderProjects();
  });

  renderFilters();
  renderProjects();
}

function initYouTubePage() {
  const statsContainer = document.querySelector("[data-youtube-stats]");
  const videosContainer = document.querySelector("[data-youtube-videos]");
  if (!statsContainer || !videosContainer) return;

  const renderStats = () => {
    statsContainer.innerHTML = YOUTUBE_STATS.map(
      (stat) => `
        <div class="card text-center youtube-stat-card" data-counter="${stat.counter}" data-prefix="${stat.prefix}" data-suffix="${stat.suffix}">
          <span data-lucide="${stat.icon}"></span>
          <div class="stat-value">${stat.prefix}${stat.counter}${stat.suffix}</div>
          <p>${translate(stat.labelKey)}</p>
        </div>
      `,
    ).join("");
    refreshIcons();
  };

  const renderVideos = () => {
    const viewsLabel = translate("youtube.labels.viewsWord");
    videosContainer.innerHTML = YOUTUBE_VIDEOS.map(
      (video) => `
        <a href="${video.url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
          <article class="video-card">
            <figure>
              <img src="${video.thumbnail}" alt="${translate(video.titleKey)}">
              <div class="video-card__duration">${video.duration}</div>
            </figure>
            <h3>${translate(video.titleKey)}</h3>
            <p class="text-muted"><span data-lucide="eye"></span> ${video.views} ${viewsLabel}</p>
          </article>
        </a>
      `,
    ).join("");
    refreshIcons();
  };

  document.addEventListener("languagechange", () => {
    renderStats();
    renderVideos();
    // Reinitialize counter animations after stats are re-rendered
    initYouTubeCounterAnimations();
  });

  renderStats();
  renderVideos();
  // Initialize counter animations after initial render
  initYouTubeCounterAnimations();
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initCounterAnimations() {
  const statCards = document.querySelectorAll(".stat-card[data-counter]");
  statCards.forEach((card) => {
    const counterElement = card.querySelector("h3");
    if (!counterElement) return;

    const targetValue = parseInt(card.dataset.counter || "0", 10);
    const prefix = card.dataset.prefix || "";
    const suffix = card.dataset.suffix || "";
    let animationId = null;
    let isAnimating = false;

    const animateCounter = (startValue, endValue, duration) => {
      const startTime = Date.now();
      isAnimating = true;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        counterElement.textContent = prefix + currentValue + suffix;

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        } else {
          isAnimating = false;
        }
      };

      animationId = requestAnimationFrame(animate);
    };

    card.addEventListener("mouseenter", () => {
      if (isAnimating && animationId) {
        cancelAnimationFrame(animationId);
      }
      animateCounter(0, targetValue, 3500);
    });

    card.addEventListener("mouseleave", () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      counterElement.textContent = prefix + targetValue + suffix;
      isAnimating = false;
    });
  });
}

function initYouTubeCounterAnimations() {
  const youtubeStatCards = document.querySelectorAll(".youtube-stat-card[data-counter]");
  youtubeStatCards.forEach((card) => {
    const counterElement = card.querySelector(".stat-value");
    if (!counterElement) return;

    const targetValue = parseInt(card.dataset.counter || "0", 10);
    const prefix = card.dataset.prefix || "";
    const suffix = card.dataset.suffix || "";
    let animationId = null;
    let isAnimating = false;

    // Set initial value to final value
    counterElement.textContent = prefix + targetValue + suffix;

    const animateCounter = (startValue, endValue, duration) => {
      const startTime = Date.now();
      isAnimating = true;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        counterElement.textContent = prefix + currentValue + suffix;

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        } else {
          isAnimating = false;
        }
      };

      animationId = requestAnimationFrame(animate);
    };

    card.addEventListener("mouseenter", () => {
      if (isAnimating && animationId) {
        cancelAnimationFrame(animationId);
      }
      animateCounter(0, targetValue, 3500);
    });

    card.addEventListener("mouseleave", () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      counterElement.textContent = prefix + targetValue + suffix;
      isAnimating = false;
    });
  });
}

function updateFooterYear() {
  const target = document.querySelector("[data-current-year]");
  if (target) {
    target.textContent = new Date().getFullYear();
  }
}

// Carousel functionality
document.addEventListener("DOMContentLoaded", function() {
  // Check if we're on the about page and the carousel exists
  if (document.body.dataset.page !== "about") return;
  
  const carouselSection = document.querySelector(".carousel-section");
  if (!carouselSection) return;
  
  // Image paths - using the images from rsimages folder
  const images = [
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.08_decf797e.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.09_4021a974.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.10_8e22a7ff.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.10_cf24ef90.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.10_d051abc1.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.11_04e05626.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.11_e92d7eb3.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.11_fd92c144.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.12_1d47a8d0.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.12_2f98a7f7.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.12_bf45b7b9.jpg",
    "assets/img/rsimages/WhatsApp Image 2025-12-02 at 20.14.13_18a55e70.jpg"
  ];
  
  let currentIndex = 0;
  let autoSlideInterval;
  const autoSlideDelay = 5000; // 5 seconds
  
  const mainImage = document.getElementById("carousel-main-image");
  const thumbnailsContainer = document.getElementById("carousel-thumbnails");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  
  // Initialize carousel
  function initCarousel() {
    if (images.length === 0) return;
    
    // Create thumbnails
    thumbnailsContainer.innerHTML = images.map((image, index) => `
      <div class="carousel-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
        <img src="${image}" alt="Thumbnail ${index + 1}">
      </div>
    `).join('');
    
    // Set first image as active
    showImage(0);
    
    // Start auto sliding
    startAutoSlide();
    
    // Add event listeners
    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);
    
    thumbnailsContainer.addEventListener("click", (e) => {
      const thumbnail = e.target.closest(".carousel-thumbnail");
      if (thumbnail) {
        const index = parseInt(thumbnail.dataset.index);
        showImage(index);
        resetAutoSlide();
      }
    });
    
    // Pause auto-slide on hover
    carouselSection.addEventListener("mouseenter", stopAutoSlide);
    carouselSection.addEventListener("mouseleave", startAutoSlide);
  }
  
  // Show image at specific index
  function showImage(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    
    currentIndex = index;
    
    // Update main image
    mainImage.src = images[currentIndex];
    mainImage.alt = `Idriss RS Gallery Image ${currentIndex + 1}`;
    
    // Update active thumbnail
    document.querySelectorAll(".carousel-thumbnail").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === currentIndex);
    });
  }
  
  // Show next image
  function showNextImage() {
    showImage(currentIndex + 1);
    resetAutoSlide();
  }
  
  // Show previous image
  function showPrevImage() {
    showImage(currentIndex - 1);
    resetAutoSlide();
  }
  
  // Auto slide functions
  function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    autoSlideInterval = setInterval(showNextImage, autoSlideDelay);
  }
  
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }
  
  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }
  
  // Initialize the carousel
  initCarousel();
});

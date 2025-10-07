import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.why': 'Why Sarmoyavest',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.advantages': 'Advantages',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.logout': 'Logout',
    'nav.uploadProject': 'Upload Project',
    
    // Home Page
    'home.hero.badge': 'Connecting Innovators Globally',
    'home.hero.title': 'Connecting Visionaries and',
    'home.hero.titleHighlight': 'Investors',
    'home.hero.description': 'Sarmoyavest connects young innovators and early-stage startups with global investors and mentors. Making innovation funding accessible, transparent, and borderless.',
    'home.hero.browseProjects': 'Browse Projects',
    'home.hero.submitStartup': 'Submit Your Startup',
    'home.mission.title': 'Our Mission',
    'home.mission.description': 'We\'re building bridges between talented entrepreneurs in emerging markets and the global investment community. Our platform provides visibility, support, and opportunities for startups that might otherwise go unnoticed.',
    'home.mission.learnMore': 'Learn More About Us',
    'home.features.title': 'Why Choose Sarmoyavest',
    'home.features.subtitle': 'Built specifically for early-stage startups from developing regions',
    'home.features.globalReach': 'Global Reach',
    'home.features.globalReachDesc': 'Connect with investors and mentors from around the world',
    'home.features.community': 'Community First',
    'home.features.communityDesc': 'Join a thriving community of innovators and entrepreneurs',
    'home.features.earlyStage': 'Early-Stage Focus',
    'home.features.earlyStageDesc': 'Support for startups at every stage of their journey',
    'home.features.transparent': 'Transparent Process',
    'home.features.transparentDesc': 'Clear, secure, and straightforward funding process',
    'home.cta.title': 'Ready to Get Started?',
    'home.cta.description': 'Whether you\'re an innovator looking for funding or an investor seeking the next big opportunity, Sarmoyavest is your platform.',
    'home.cta.joinInnovator': 'Join as Innovator',
    'home.cta.exploreInvestor': 'Explore as Investor',
    
    // Auth
    'auth.title': 'Welcome to Sarmoyavest',
    'auth.subtitle': 'Join our community of innovators and investors',
    'auth.login': 'Login',
    'auth.signup': 'Sign Up',
    'auth.fullName': 'Full Name',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.role': 'I am an',
    'auth.innovator': 'Innovator',
    'auth.investor': 'Investor',
    'auth.haveAccount': 'Already have an account?',
    'auth.noAccount': 'Don\'t have an account?',
    'auth.loginButton': 'Login',
    'auth.signupButton': 'Create Account',
    'auth.success': 'Success!',
    'auth.error': 'Error',
    
    // Projects
    'projects.title': 'Explore Projects',
    'projects.subtitle': 'Discover innovative startups seeking funding',
    'projects.search': 'Search projects...',
    'projects.filterCategory': 'All Categories',
    'projects.filterRegion': 'All Regions',
    'projects.sortNewest': 'Newest',
    'projects.sortViews': 'Most Viewed',
    'projects.noProjects': 'No projects found',
    'projects.views': 'views',
    
    // Upload Project
    'upload.title': 'Submit Your Project',
    'upload.subtitle': 'Share your innovative idea with potential investors',
    'upload.projectTitle': 'Project Title',
    'upload.description': 'Description',
    'upload.category': 'Category',
    'upload.region': 'Region',
    'upload.fundingRange': 'Funding Range',
    'upload.telegram': 'Telegram Username',
    'upload.email': 'Email',
    'upload.images': 'Project Images',
    'upload.submit': 'Submit Project',
    'upload.success': 'Project submitted successfully!',
    'upload.error': 'Failed to submit project',
    
    // Advantages
    'advantages.title': 'Advantages of Sarmoyavest',
    'advantages.subtitle': 'Why choose our platform to connect innovators and investors',
    'advantages.global.title': 'Global Reach',
    'advantages.global.desc': 'We unite young entrepreneurs and investors from all over the world, starting with Uzbekistan and Central Asia.',
    'advantages.security.title': 'Security and Transparency',
    'advantages.security.desc': 'We ensure the security and transparency of all operations on the platform, protecting participants\' interests.',
    'advantages.support.title': 'Support for Early-Stage Startups',
    'advantages.support.desc': 'We help early innovators showcase and grow their ideas with confidence.',
    'advantages.bilingual.title': 'Bilingual Interface',
    'advantages.bilingual.desc': 'Full support for English and Russian languages to serve our diverse community.',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.why': 'Почему Sarmoyavest',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'nav.advantages': 'Преимущества',
    'nav.login': 'Войти',
    'nav.signup': 'Регистрация',
    'nav.logout': 'Выйти',
    'nav.uploadProject': 'Загрузить проект',
    
    // Home Page
    'home.hero.badge': 'Соединяем новаторов по всему миру',
    'home.hero.title': 'Соединяем визионеров и',
    'home.hero.titleHighlight': 'Инвесторов',
    'home.hero.description': 'Sarmoyavest соединяет молодых новаторов и стартапы на ранней стадии с глобальными инвесторами и менторами. Делаем финансирование инноваций доступным, прозрачным и безграничным.',
    'home.hero.browseProjects': 'Просмотреть проекты',
    'home.hero.submitStartup': 'Подать заявку',
    'home.mission.title': 'Наша миссия',
    'home.mission.description': 'Мы строим мосты между талантливыми предпринимателями на развивающихся рынках и мировым инвестиционным сообществом. Наша платформа обеспечивает видимость, поддержку и возможности для стартапов, которые иначе могли бы остаться незамеченными.',
    'home.mission.learnMore': 'Узнать больше о нас',
    'home.features.title': 'Почему выбирают Sarmoyavest',
    'home.features.subtitle': 'Создано специально для стартапов на ранней стадии из развивающихся регионов',
    'home.features.globalReach': 'Глобальный охват',
    'home.features.globalReachDesc': 'Связь с инвесторами и менторами со всего мира',
    'home.features.community': 'Сообщество на первом месте',
    'home.features.communityDesc': 'Присоединяйтесь к процветающему сообществу новаторов и предпринимателей',
    'home.features.earlyStage': 'Фокус на ранних стадиях',
    'home.features.earlyStageDesc': 'Поддержка стартапов на каждом этапе их пути',
    'home.features.transparent': 'Прозрачный процесс',
    'home.features.transparentDesc': 'Четкий, безопасный и понятный процесс финансирования',
    'home.cta.title': 'Готовы начать?',
    'home.cta.description': 'Независимо от того, являетесь ли вы новатором, ищущим финансирование, или инвестором, ищущим следующую большую возможность, Sarmoyavest - ваша платформа.',
    'home.cta.joinInnovator': 'Присоединиться как новатор',
    'home.cta.exploreInvestor': 'Исследовать как инвестор',
    
    // Auth
    'auth.title': 'Добро пожаловать в Sarmoyavest',
    'auth.subtitle': 'Присоединяйтесь к нашему сообществу новаторов и инвесторов',
    'auth.login': 'Вход',
    'auth.signup': 'Регистрация',
    'auth.fullName': 'Полное имя',
    'auth.email': 'Электронная почта',
    'auth.password': 'Пароль',
    'auth.role': 'Я',
    'auth.innovator': 'Новатор',
    'auth.investor': 'Инвестор',
    'auth.haveAccount': 'Уже есть аккаунт?',
    'auth.noAccount': 'Нет аккаунта?',
    'auth.loginButton': 'Войти',
    'auth.signupButton': 'Создать аккаунт',
    'auth.success': 'Успешно!',
    'auth.error': 'Ошибка',
    
    // Projects
    'projects.title': 'Обзор проектов',
    'projects.subtitle': 'Откройте для себя инновационные стартапы, ищущие финансирование',
    'projects.search': 'Поиск проектов...',
    'projects.filterCategory': 'Все категории',
    'projects.filterRegion': 'Все регионы',
    'projects.sortNewest': 'Новые',
    'projects.sortViews': 'Популярные',
    'projects.noProjects': 'Проекты не найдены',
    'projects.views': 'просмотров',
    
    // Upload Project
    'upload.title': 'Загрузить проект',
    'upload.subtitle': 'Поделитесь своей инновационной идеей с потенциальными инвесторами',
    'upload.projectTitle': 'Название проекта',
    'upload.description': 'Описание',
    'upload.category': 'Категория',
    'upload.region': 'Регион',
    'upload.fundingRange': 'Диапазон финансирования',
    'upload.telegram': 'Telegram',
    'upload.email': 'Email',
    'upload.images': 'Изображения проекта',
    'upload.submit': 'Отправить проект',
    'upload.success': 'Проект успешно отправлен!',
    'upload.error': 'Не удалось отправить проект',
    
    // Advantages
    'advantages.title': 'Преимущества Sarmoyavest',
    'advantages.subtitle': 'Почему стоит выбрать нашу платформу для соединения новаторов и инвесторов',
    'advantages.global.title': 'Глобальный охват',
    'advantages.global.desc': 'Мы объединяем молодых предпринимателей и инвесторов со всего мира, начиная с Узбекистана и Центральной Азии.',
    'advantages.security.title': 'Безопасность и прозрачность',
    'advantages.security.desc': 'Мы обеспечиваем безопасность и прозрачность всех операций на платформе, защищая интересы участников.',
    'advantages.support.title': 'Поддержка стартапов на ранней стадии',
    'advantages.support.desc': 'Мы помогаем начинающим новаторам демонстрировать и развивать свои идеи с уверенностью.',
    'advantages.bilingual.title': 'Двуязычный интерфейс',
    'advantages.bilingual.desc': 'Полная поддержка английского и русского языков для обслуживания нашего разнообразного сообщества.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
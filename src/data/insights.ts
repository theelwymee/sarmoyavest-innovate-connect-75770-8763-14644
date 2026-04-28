import economicsImg from "@/assets/insights/insight-economics.jpg";
import startupsImg from "@/assets/insights/insight-startups.jpg";
import trustImg from "@/assets/insights/insight-trust.jpg";
import investmentImg from "@/assets/insights/insight-investment.jpg";

export type Locale = "en" | "uz" | "ru";

export interface InsightTranslations {
  category: string;
  title: string;
  preview: string;
  body: string[];
}

export interface Insight {
  slug: string;
  image: string;
  date: string; // ISO
  readingTimeMin: number;
  translations: Record<Locale, InsightTranslations>;
}

export const insightsUI = {
  en: {
    sectionTitle: "Insights",
    sectionSubtitle: "Short reads on economics, startups, trust, and investment.",
    read: "Read Insight",
    minRead: "min read",
    reads: "reads",
    back: "Back to Insights",
  },
  uz: {
    sectionTitle: "Tahlillar",
    sectionSubtitle: "Iqtisodiyot, startaplar, ishonch va investitsiyalar haqida qisqa o‘qishlar.",
    read: "O‘qish",
    minRead: "daqiqa o‘qish",
    reads: "o‘qildi",
    back: "Tahlillarga qaytish",
  },
  ru: {
    sectionTitle: "Инсайты",
    sectionSubtitle: "Краткие материалы об экономике, стартапах, доверии и инвестициях.",
    read: "Читать",
    minRead: "мин чтения",
    reads: "прочтений",
    back: "Назад к инсайтам",
  },
} as const;

export const insights: Insight[] = [
  {
    slug: "economics-of-everyday-decisions",
    image: economicsImg,
    date: "2025-04-02",
    readingTimeMin: 5,
    translations: {
      en: {
        category: "Economics",
        title: "The Economics of Everyday Decisions",
        preview:
          "Why incentives, trade-offs, and opportunity cost shape the choices we make — long before any spreadsheet does.",
        body: [
          "Economics isn't a subject you study once and forget. It's a lens you carry into every decision: which class to take, which job to accept, which friend to call back first.",
          "When we talk about incentives, we're really asking: what does the world reward, and what does it quietly punish? The answers explain a surprising amount of human behavior.",
          "The point isn't to turn life into a spreadsheet. It's to notice the trade-offs you're already making — and choose them on purpose.",
        ],
      },
      uz: {
        category: "Iqtisodiyot",
        title: "Kundalik qarorlar iqtisodiyoti",
        preview:
          "Nega rag‘batlar, almashinuvlar va imkoniyat narxi har qanday jadvalgacha bizning tanlovlarimizni shakllantiradi.",
        body: [
          "Iqtisodiyot — bir marta o‘rganib unutiladigan fan emas. Bu har bir qarorga olib boradigan nigoh.",
          "Rag‘batlar haqida gapirganda, biz aslida: dunyo nimani mukofotlaydi va nimani jimgina jazolaydi, deb so‘raymiz.",
          "Maqsad — hayotni jadvalga aylantirish emas. Maqsad — siz allaqachon qilayotgan almashinuvlarni payqash va ularni ataylab tanlash.",
        ],
      },
      ru: {
        category: "Экономика",
        title: "Экономика повседневных решений",
        preview:
          "Почему стимулы, компромиссы и альтернативные издержки формируют наши решения задолго до любой таблицы.",
        body: [
          "Экономика — это не предмет, который изучают и забывают. Это оптика, которую вы берёте с собой в каждое решение.",
          "Говоря о стимулах, мы по сути спрашиваем: что мир вознаграждает, а что тихо наказывает?",
          "Смысл не в том, чтобы превратить жизнь в таблицу. Смысл — заметить компромиссы, которые вы уже совершаете, и выбирать их осознанно.",
        ],
      },
    },
  },
  {
    slug: "what-early-stage-founders-get-wrong",
    image: startupsImg,
    date: "2025-04-10",
    readingTimeMin: 6,
    translations: {
      en: {
        category: "Startups",
        title: "What Early-Stage Founders Get Wrong",
        preview:
          "Most first-time founders over-build the product and under-build the conversation with the people they're trying to serve.",
        body: [
          "The myth: ship a perfect product, users will come. The reality: a small group of real users beats a beautiful prototype every single time.",
          "Talk to ten people this week. Not to pitch — to listen. Their words become your landing page, your roadmap, and your moat.",
          "Your first version will embarrass you. That's the goal. Embarrassment means you shipped early enough to learn.",
        ],
      },
      uz: {
        category: "Startaplar",
        title: "Boshlovchi asoschilar nimada xato qiladi",
        preview:
          "Ko‘pchilik birinchi marta asos solgan kishilar mahsulotni haddan tashqari quradi va foydalanuvchilar bilan suhbatni kam quradi.",
        body: [
          "Afsona: mukammal mahsulotni chiqaring — foydalanuvchilar keladi. Haqiqat: bir nechta haqiqiy foydalanuvchi har doim chiroyli prototipdan ustun.",
          "Bu hafta o‘nta odam bilan suhbatlashing. Sotish uchun emas — tinglash uchun.",
          "Birinchi versiyangiz sizni uyaltiradi. Bu yaxshi belgi: demak, siz o‘rganish uchun yetarlicha erta chiqargansiz.",
        ],
      },
      ru: {
        category: "Стартапы",
        title: "Что упускают начинающие основатели",
        preview:
          "Большинство фаундеров пересобирают продукт и недособирают разговор с людьми, для которых они его делают.",
        body: [
          "Миф: выпусти идеальный продукт — пользователи придут. Реальность: небольшая группа живых пользователей всегда сильнее красивого прототипа.",
          "Поговорите с десятью людьми на этой неделе. Не чтобы продавать — чтобы слушать.",
          "Первая версия должна вас немного смущать. Это значит, что вы выпустили её достаточно рано, чтобы учиться.",
        ],
      },
    },
  },
  {
    slug: "trust-as-an-asset-class",
    image: trustImg,
    date: "2025-04-18",
    readingTimeMin: 4,
    translations: {
      en: {
        category: "Trust",
        title: "Trust Is an Asset Class",
        preview:
          "Markets don't just price products and labor. They price trust — and the regions that build it grow faster.",
        body: [
          "Every transaction has a hidden cost: the cost of verifying the other side. Where trust is high, that cost falls and trade flourishes.",
          "Reputation, contracts, and clear rules are the rails on which trust travels. None of them are free, but all of them compound.",
          "For emerging ecosystems, building credible institutions isn't a soft topic. It's the highest-leverage investment available.",
        ],
      },
      uz: {
        category: "Ishonch",
        title: "Ishonch — bu aktiv sinfi",
        preview:
          "Bozorlar faqat mahsulot va mehnatga emas, balki ishonchga ham narx qo‘yadi. Uni quradigan mintaqalar tezroq o‘sadi.",
        body: [
          "Har bir bitimning yashirin narxi bor: qarshi tomonni tekshirish narxi. Ishonch yuqori bo‘lsa, bu narx pasayadi.",
          "Obro‘, shartnomalar va aniq qoidalar — ishonch yuradigan yo‘llar.",
          "Rivojlanayotgan ekotizimlar uchun institutlar qurish — bu eng yuqori samarali sarmoya.",
        ],
      },
      ru: {
        category: "Доверие",
        title: "Доверие — это класс активов",
        preview:
          "Рынки оценивают не только товары и труд. Они оценивают доверие — и регионы, которые его строят, растут быстрее.",
        body: [
          "У каждой сделки есть скрытая цена: цена проверки контрагента. Там, где доверие выше, эта цена падает.",
          "Репутация, контракты и понятные правила — рельсы, по которым движется доверие.",
          "Для развивающихся экосистем построение институтов — не «мягкая» тема, а инвестиция с самым высоким плечом.",
        ],
      },
    },
  },
  {
    slug: "thinking-like-an-early-investor",
    image: investmentImg,
    date: "2025-04-24",
    readingTimeMin: 7,
    translations: {
      en: {
        category: "Investment",
        title: "Thinking Like an Early Investor",
        preview:
          "Early-stage investing isn't gambling on ideas. It's a disciplined search for asymmetric outcomes hidden in plain sight.",
        body: [
          "Great early investors aren't predicting the future. They're sizing bets so a few wins can pay for many honest losses.",
          "Look for founders who can change their mind without losing their direction. That combination is rarer than it sounds.",
          "Treat conviction as a budget, not a feeling. Spend it on the few opportunities that genuinely deserve it.",
        ],
      },
      uz: {
        category: "Investitsiya",
        title: "Boshlang‘ich investor kabi fikrlash",
        preview:
          "Erta bosqich investitsiya — bu g‘oyalarga qimor o‘ynash emas. Bu intizomli izlanish.",
        body: [
          "Yaxshi investorlar kelajakni bashorat qilmaydi. Ular bir nechta yutuqlar ko‘plab yo‘qotishlarni qoplashi uchun garovlarni o‘lchaydi.",
          "Fikrini o‘zgartira oladigan, lekin yo‘nalishini yo‘qotmaydigan asoschilarni qidiring.",
          "Ishonchni byudjet kabi ko‘ring, his-tuyg‘u kabi emas.",
        ],
      },
      ru: {
        category: "Инвестиции",
        title: "Мыслить как ранний инвестор",
        preview:
          "Ранние инвестиции — не азартная игра идеями, а дисциплинированный поиск асимметричных исходов.",
        body: [
          "Сильные ранние инвесторы не предсказывают будущее. Они так выстраивают ставки, чтобы несколько побед окупали честные поражения.",
          "Ищите основателей, способных менять мнение, не теряя направления.",
          "Относитесь к убеждённости как к бюджету, а не как к чувству.",
        ],
      },
    },
  },
];

export function formatReads(n: number): string {
  if (n < 1000) return `${n}`;
  const k = n / 1000;
  return `${k.toFixed(k < 10 ? 1 : 0).replace(/\.0$/, "")}k`;
}
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
  viewsBaseline?: number;
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
    date: "2026-04-10",
    readingTimeMin: 5,
    viewsBaseline: 268,
    translations: {
      en: {
        category: "Economics",
        title: "Why Do People Prefer Safe Jobs Over Startups?",
        preview:
          "A simple look at why people choose stability over risk, especially in Central Asia, and what influences these decisions.",
        body: [
          "After graduating, two friends from Tashkent — Javohir and Diyor — faced the same question: “What should we do next?”",
          "Javohir chose a stable office job at a bank. Diyor wanted to build a small startup idea he had been thinking about for months.",
          "A year later, Javohir had a steady salary. Diyor was still struggling, trying to make his idea work.",
          "Most people around them said: “Javohir made the right choice.” But why do so many people think this way?",
          "## The Simple Idea",
          "In many places, especially in Central Asia, people prefer certainty over uncertainty.",
          "A job gives you fixed income, clear responsibilities, and social approval. A startup gives you unclear income, high risk, and no guarantees.",
          "From an economic point of view, this is simple: people avoid risk when the outcome is uncertain.",
          "## A Familiar Situation",
          "Imagine a family dinner in Samarkand. An older relative asks: “Where are you working now?”",
          "If you answer “At a bank” — they smile and nod. If you answer “I’m building a startup” — they pause and look confused.",
          "Sometimes they respond with: “That’s risky… better find a stable job first.” This reaction is not because they don’t support you. It’s because they value security.",
          "## Why Safety Feels Better",
          "**1. Income Stability.** People want to know: “How much will I earn next month?” A job answers that clearly. A startup does not.",
          "**2. Family Expectations.** Many families have worked hard to build stability. So when someone chooses a risky path, it feels like: “Why take the risk when you already have a safe option?”",
          "**3. Fear of Failure.** Failure is often seen as something negative. People think: “What if it doesn’t work? What will others say?” So they avoid the risk completely.",
          "## But There’s Another Side",
          "Now imagine this: a young founder in Tashkent starts small — builds a simple product, shares progress online, and improves step by step.",
          "At first, people doubt him. But over time, he shows results, people start noticing, and opportunities slowly appear.",
          "What changed? Not luck. Not talent. Something else.",
          "## Think About This",
          "Why do people begin to support someone after they see progress? Why does a risky path start to feel safer once results appear? And why do some people manage to gain support even in uncertain environments?",
          "## Ending",
          "Choosing a safe job is not wrong. Choosing a startup is not wrong either.",
          "The real question is: what makes one path feel safer than the other? Maybe it’s not just about risk. Maybe something else influences how people make these decisions.",
        ],
      },
      uz: {
        category: "Iqtisodiyot",
        title: "Nega odamlar startaplar o‘rniga xavfsiz ishlarni tanlaydi?",
        preview:
          "Nega odamlar, ayniqsa Markaziy Osiyoda, tavakkalchilik o‘rniga barqarorlikni tanlashi va bu qarorlarga nima ta’sir qilishi haqida sodda nigoh.",
        body: [
          "Bitirgandan so‘ng Toshkentlik ikki do‘st — Javohir va Diyor — bir xil savolga duch keldi: “Endi nima qilamiz?”",
          "Javohir bankdagi barqaror ofis ishini tanladi. Diyor esa oylar davomida o‘ylab yurgan kichik startap g‘oyasini qurmoqchi edi.",
          "Bir yildan so‘ng Javohirning barqaror maoshi bor edi. Diyor esa hali ham g‘oyasini ishlashga harakat qilardi.",
          "Atrofdagilarning aksariyati: “Javohir to‘g‘ri tanlov qildi”, der edi. Lekin nega ko‘pchilik shunday o‘ylaydi?",
          "## Oddiy g‘oya",
          "Ko‘p joylarda, ayniqsa Markaziy Osiyoda, odamlar noaniqlikdan ko‘ra aniqlikni afzal ko‘radi.",
          "Ish sizga: belgilangan daromad, aniq mas’uliyat va ijtimoiy e’tirof beradi. Startap esa: noaniq daromad, yuqori tavakkal va kafolatlarning yo‘qligini.",
          "Iqtisodiy nuqtai nazardan bu sodda: natija noaniq bo‘lganda odamlar tavakkaldan qochadi.",
          "## Tanish vaziyat",
          "Samarqanddagi oilaviy ovqatni tasavvur qiling. Katta yoshli qarindosh so‘raydi: “Hozir qayerda ishlayapsan?”",
          "“Bankda” desangiz — jilmayib bosh irg‘aydi. “Startap qurayapman” desangiz — to‘xtab, hayron qaraydi.",
          "Ba’zan: “Bu xavfli… avval barqaror ish top”, deyishadi. Bu sizni qo‘llab-quvvatlamagani uchun emas — ular xavfsizlikni qadrlaydi.",
          "## Nega xavfsizlik yaxshi tuyuladi",
          "**1. Daromad barqarorligi.** Odamlar “Keyingi oy qancha topaman?” deb bilishni xohlaydi. Ish bunga aniq javob beradi, startap esa yo‘q.",
          "**2. Oilaviy umidlar.** Ko‘p oilalar barqarorlikni qurish uchun ko‘p mehnat qilgan. Shuning uchun xavfli yo‘l tanlash: “Xavfsiz variant turganda nega tavakkal qilasan?” bo‘lib tuyuladi.",
          "**3. Muvaffaqiyatsizlikdan qo‘rqish.** Muvaffaqiyatsizlik ko‘pincha salbiy deb qaraladi. “Agar ishlamasa nima bo‘ladi? Boshqalar nima deydi?” deb o‘ylanadi va tavakkaldan butunlay qochiladi.",
          "## Lekin boshqa tomoni ham bor",
          "Endi tasavvur qiling: Toshkentdagi yosh asoschi kichikdan boshlaydi — sodda mahsulot quradi, jarayonni onlayn ulashadi, qadam-baqadam yaxshilaydi.",
          "Avvaliga undan shubhalanadilar. Vaqt o‘tib u natijalarni ko‘rsatadi, odamlar e’tibor bera boshlaydi va imkoniyatlar asta-sekin paydo bo‘ladi.",
          "Nima o‘zgardi? Omad emas. Iste’dod ham emas. Boshqa narsa.",
          "## Bu haqda o‘ylab ko‘ring",
          "Nega odamlar kimnidir natijalarni ko‘rgandan keyin qo‘llab-quvvatlay boshlaydi? Nega xavfli yo‘l natijalar paydo bo‘lgach xavfsizroq tuyuladi? Va nega ba’zilar noaniq muhitda ham qo‘llab-quvvatlash topa oladi?",
          "## Yakun",
          "Xavfsiz ishni tanlash xato emas. Startap tanlash ham xato emas.",
          "Asl savol shu: bir yo‘l ikkinchisidan nega xavfsizroq tuyuladi? Ehtimol, gap faqat tavakkalda emas. Ehtimol, bu qarorlarga boshqa narsa ham ta’sir qiladi.",
        ],
      },
      ru: {
        category: "Экономика",
        title: "Почему люди выбирают стабильную работу вместо стартапов?",
        preview:
          "Простой взгляд на то, почему люди выбирают стабильность вместо риска, особенно в Центральной Азии, и что влияет на эти решения.",
        body: [
          "После выпуска двое друзей из Ташкента — Джавохир и Диёр — оказались перед одним и тем же вопросом: «Что делать дальше?»",
          "Джавохир выбрал стабильную офисную работу в банке. Диёр хотел построить небольшую стартап-идею, о которой думал месяцами.",
          "Через год у Джавохира была стабильная зарплата. Диёр всё ещё пытался заставить свою идею работать.",
          "Большинство вокруг говорили: «Джавохир сделал правильный выбор». Но почему так думают многие?",
          "## Простая идея",
          "Во многих местах, особенно в Центральной Азии, люди предпочитают определённость неопределённости.",
          "Работа даёт фиксированный доход, чёткие обязанности и социальное одобрение. Стартап — неясный доход, высокий риск и никаких гарантий.",
          "С экономической точки зрения это просто: люди избегают риска, когда исход неопределён.",
          "## Знакомая ситуация",
          "Представьте семейный ужин в Самарканде. Старший родственник спрашивает: «Где ты сейчас работаешь?»",
          "Если ответить «В банке» — он улыбнётся и кивнёт. Если «Я строю стартап» — задумается и посмотрит с недоумением.",
          "Иногда отвечают: «Это рискованно… найди сначала стабильную работу». Это не потому, что вас не поддерживают. Просто ценят безопасность.",
          "## Почему безопасность кажется лучше",
          "**1. Стабильность дохода.** Людям важно знать: «Сколько я заработаю в следующем месяце?» Работа отвечает на это ясно. Стартап — нет.",
          "**2. Ожидания семьи.** Многие семьи долго строили стабильность. Поэтому рискованный путь воспринимается как: «Зачем рисковать, если есть безопасный вариант?»",
          "**3. Страх неудачи.** Неудача часто воспринимается негативно. Люди думают: «А если не получится? Что скажут другие?» — и совсем избегают риска.",
          "## Но есть и другая сторона",
          "Теперь представьте: молодой основатель в Ташкенте начинает с малого — делает простой продукт, делится прогрессом онлайн и шаг за шагом улучшает его.",
          "Сначала в нём сомневаются. Но со временем он показывает результаты, его замечают, и медленно появляются возможности.",
          "Что изменилось? Не удача. Не талант. Что-то другое.",
          "## Подумайте об этом",
          "Почему люди начинают поддерживать кого-то после того, как видят прогресс? Почему рискованный путь кажется безопаснее, когда появляются результаты? И почему некоторым удаётся получить поддержку даже в неопределённой среде?",
          "## Заключение",
          "Выбрать стабильную работу — не ошибка. Выбрать стартап — тоже не ошибка.",
          "Настоящий вопрос: что делает один путь более безопасным, чем другой? Возможно, дело не только в риске. Возможно, на эти решения влияет что-то ещё.",
        ],
      },
    },
  },
  {
    slug: "what-early-stage-founders-get-wrong",
    image: startupsImg,
    date: "2026-04-14",
    readingTimeMin: 5,
    viewsBaseline: 243,
    translations: {
      en: {
        category: "Investment",
        title: "How Do Investors Actually Choose Where to Invest?",
        preview:
          "A simple look at how investors think, how they choose startups, and what they expect in return.",
        body: [
          "When people hear the word “investor”, they often imagine someone who just gives money to a good idea.",
          "But in reality, investors think very differently.",
          "They are not just asking: “Is this a good idea?” They are asking: “Is this worth the risk?”",
          "## The Simple Idea",
          "Investing is not about finding one perfect startup. It is about managing risk across many decisions.",
          "For example, out of 10 startups: 6 might fail, 3 might survive, and 1 might succeed strongly.",
          "This means investors expect most of their investments to fail. So why do they still invest? Because one success can cover all losses.",
          "## A Realistic Example",
          "Imagine an investor in Tashkent who invests in 5 small startups. Each investment: **$2,000**. Total invested: **$10,000**.",
          "After some time: 3 startups fail → $0 return, 1 startup returns $2,000, and 1 startup grows and returns $20,000.",
          "Final result: **$22,000 from $10,000 invested**.",
          "This is how investors think: not every decision wins — but overall results matter.",
          "## How Do Investors Choose?",
          "Investors usually look at a few simple things.",
          "**1. The Person.** Can the founder actually execute the idea? Have they shown effort before?",
          "**2. The Progress.** Is there any proof? Even small results matter more than just ideas.",
          "**3. The Market.** Is there real demand for this product or service?",
          "**4. The Risk.** What could go wrong? And how likely is failure?",
          "## Why They Don’t Invest in Everyone",
          "Many young founders think: “If my idea is good, investors will support me.” But investors see it differently.",
          "They ask: “Why this person? Why now? What makes this different?” If these answers are unclear, they usually say no.",
          "## The Relationship Between Investor and Founder",
          "An investment is not just money. It is a relationship.",
          "Investors expect honesty, updates, and progress over time. If a founder disappears or stops communicating, trust breaks. And without trust, the relationship ends.",
          "## Think About This",
          "Why do investors prefer someone with small results over someone with a big idea? Why do they invest in people, not just ideas? And why are they comfortable losing money in some cases?",
          "## Ending",
          "Investors are not just looking for success. They are managing uncertainty.",
          "They know that most things won’t work. But they also know that one strong outcome can change everything.",
          "So the real question is: what makes an investor believe that you are worth the risk?",
        ],
      },
      uz: {
        category: "Investitsiya",
        title: "Investorlar qayerga sarmoya kiritishni qanday tanlaydi?",
        preview:
          "Investorlar qanday fikrlashi, startaplarni qanday tanlashi va evaziga nimani kutishi haqida sodda nigoh.",
        body: [
          "Odamlar “investor” so‘zini eshitganda, ko‘pincha shunchaki yaxshi g‘oyaga pul beradigan kishini tasavvur qiladi.",
          "Lekin haqiqatda investorlar butunlay boshqacha fikrlaydi.",
          "Ular faqat: “Bu yaxshi g‘oyami?” deb so‘ramaydi. Ular: “Bu tavakkalga arziydimi?” deb so‘raydi.",
          "## Oddiy g‘oya",
          "Investitsiya — bir mukammal startapni topish emas. Bu ko‘plab qarorlar bo‘ylab tavakkalni boshqarishdir.",
          "Masalan, 10 ta startapdan: 6 tasi muvaffaqiyatsizlikka uchrashi, 3 tasi omon qolishi va 1 tasi kuchli muvaffaqiyat qozonishi mumkin.",
          "Bu shuni anglatadiki, investorlar ko‘p sarmoyalari muvaffaqiyatsiz bo‘lishini kutadi. Unda nega ular hali ham sarmoya kiritadi? Chunki bitta muvaffaqiyat barcha yo‘qotishlarni qoplashi mumkin.",
          "## Real misol",
          "Toshkentdagi investorni tasavvur qiling — u 5 ta kichik startapga sarmoya kiritadi. Har biri: **$2,000**. Jami: **$10,000**.",
          "Vaqt o‘tgach: 3 tasi muvaffaqiyatsiz → $0, 1 tasi $2,000 qaytaradi, 1 tasi o‘sib $20,000 qaytaradi.",
          "Yakuniy natija: **$10,000 dan $22,000**.",
          "Investorlar shunday fikrlaydi: har bir qaror yutmaydi — lekin umumiy natija muhim.",
          "## Investorlar qanday tanlaydi?",
          "Investorlar odatda bir nechta sodda narsaga qaraydi.",
          "**1. Shaxs.** Asoschi g‘oyani amalda bajara oladimi? Avval harakat ko‘rsatganmi?",
          "**2. Jarayon.** Biror dalil bormi? Hatto kichik natijalar ham g‘oyalardan ko‘ra muhim.",
          "**3. Bozor.** Ushbu mahsulot yoki xizmatga haqiqiy talab bormi?",
          "**4. Tavakkal.** Nima noto‘g‘ri ketishi mumkin? Va muvaffaqiyatsizlik ehtimoli qancha?",
          "## Nega ular hammaga sarmoya kiritmaydi",
          "Ko‘plab yosh asoschilar: “Agar g‘oyam yaxshi bo‘lsa, investorlar qo‘llab-quvvatlaydi”, deb o‘ylaydi. Lekin investorlar buni boshqacha ko‘radi.",
          "Ular so‘raydi: “Nega aynan bu odam? Nega hozir? Nimasi farqli?” Agar bu savollarga javob aniq bo‘lmasa, ular odatda “yo‘q” deydi.",
          "## Investor va asoschi o‘rtasidagi munosabat",
          "Sarmoya — bu shunchaki pul emas. Bu munosabat.",
          "Investorlar halollik, yangiliklar va vaqt o‘tishi bilan o‘sishni kutadi. Agar asoschi yo‘qolib qolsa yoki aloqani to‘xtatsa, ishonch buziladi. Ishonchsiz munosabat tugaydi.",
          "## Bu haqda o‘ylab ko‘ring",
          "Nega investorlar katta g‘oyali odamdan ko‘ra kichik natijalarga ega odamni afzal ko‘radi? Nega ular faqat g‘oyalarga emas, balki odamlarga sarmoya kiritadi? Va nega ba’zi hollarda pul yo‘qotishga tayyor?",
          "## Yakun",
          "Investorlar faqat muvaffaqiyatni izlamaydi. Ular noaniqlikni boshqaradi.",
          "Ular ko‘p narsa ishlamasligini biladi. Lekin bitta kuchli natija hammasini o‘zgartirishi mumkinligini ham biladi.",
          "Asl savol shu: investor sizni tavakkalga arziydi deb ishonishi uchun nima kerak?",
        ],
      },
      ru: {
        category: "Инвестиции",
        title: "Как инвесторы на самом деле выбирают, куда вкладывать?",
        preview:
          "Простой взгляд на то, как думают инвесторы, как они выбирают стартапы и что ожидают взамен.",
        body: [
          "Когда люди слышат слово «инвестор», они часто представляют человека, который просто даёт деньги хорошей идее.",
          "Но в реальности инвесторы мыслят совсем иначе.",
          "Они спрашивают не только: «Это хорошая идея?» Они спрашивают: «Стоит ли это риска?»",
          "## Простая идея",
          "Инвестирование — это не поиск одного идеального стартапа. Это управление риском в множестве решений.",
          "Например, из 10 стартапов: 6 могут провалиться, 3 — выжить, и 1 — добиться сильного успеха.",
          "Это значит, инвесторы ожидают, что большинство их вложений провалятся. Так почему они всё равно вкладывают? Потому что один успех может покрыть все потери.",
          "## Реалистичный пример",
          "Представьте инвестора в Ташкенте, который вложил в 5 небольших стартапов. Каждое вложение: **$2,000**. Всего: **$10,000**.",
          "Через какое-то время: 3 стартапа провалились → $0, 1 вернул $2,000, 1 вырос и вернул $20,000.",
          "Итог: **$22,000 из вложенных $10,000**.",
          "Так и думают инвесторы: не каждое решение выигрывает — важен общий результат.",
          "## Как инвесторы выбирают?",
          "Инвесторы обычно смотрят на несколько простых вещей.",
          "**1. Человек.** Сможет ли основатель реально реализовать идею? Показывал ли усилия раньше?",
          "**2. Прогресс.** Есть ли доказательства? Даже маленькие результаты важнее, чем просто идеи.",
          "**3. Рынок.** Есть ли реальный спрос на этот продукт или услугу?",
          "**4. Риск.** Что может пойти не так? И насколько вероятен провал?",
          "## Почему они вкладывают не во всех",
          "Многие молодые основатели думают: «Если моя идея хороша, инвесторы поддержат меня». Но инвесторы видят это иначе.",
          "Они спрашивают: «Почему именно этот человек? Почему сейчас? Чем это отличается?» Если ответы неясны, они обычно говорят «нет».",
          "## Отношения между инвестором и основателем",
          "Инвестиция — это не просто деньги. Это отношения.",
          "Инвесторы ждут честности, обновлений и прогресса со временем. Если основатель исчезает или перестаёт общаться, доверие ломается. А без доверия отношения заканчиваются.",
          "## Подумайте об этом",
          "Почему инвесторы предпочитают человека с маленькими результатами тому, у кого только большая идея? Почему они вкладывают в людей, а не только в идеи? И почему они спокойно теряют деньги в некоторых случаях?",
          "## Заключение",
          "Инвесторы ищут не только успех. Они управляют неопределённостью.",
          "Они знают, что большинство вещей не сработает. Но они также знают, что один сильный результат может изменить всё.",
          "Настоящий вопрос: что заставит инвестора поверить, что вы стоите риска?",
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
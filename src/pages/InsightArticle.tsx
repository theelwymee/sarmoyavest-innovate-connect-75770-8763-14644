import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { insights, insightsUI, formatReads, type Locale } from "@/data/insights";
import { useIncrementInsightView } from "@/hooks/useInsightViews";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const locale: Locale = (language as Locale) ?? "en";
  const ui = insightsUI[locale] ?? insightsUI.en;

  const insight = insights.find((i) => i.slug === slug);
  const count = useIncrementInsightView(insight?.slug);

  if (!insight) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 container py-20 text-center space-y-6">
          <h1 className="text-3xl font-bold">404</h1>
          <Button asChild variant="outline">
            <Link to="/insights">
              <ArrowLeft className="h-4 w-4" />
              {ui.back}
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const t = insight.translations[locale] ?? insight.translations.en;
  const dateFormatter = new Intl.DateTimeFormat(
    locale === "ru" ? "ru-RU" : locale === "uz" ? "uz-UZ" : "en-US",
    { month: "long", day: "numeric", year: "numeric" },
  );
  const reads = (count ?? 0) + (insight.viewsBaseline ?? 0);
  const renderInlineText = (text: string) =>
    text.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={j} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      ) : (
        <span key={j}>{part}</span>
      ),
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <article className="py-16 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background">
          <div className="container max-w-3xl">
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
              <Link to="/insights">
                <ArrowLeft className="h-4 w-4" />
                {ui.back}
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" className="rounded-full">{t.category}</Badge>
              <Badge variant="outline" className="rounded-full gap-1 font-normal">
                <Clock className="h-3 w-3" />
                {insight.readingTimeMin} {ui.minRead}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{t.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {dateFormatter.format(new Date(insight.date))}
              </span>
              <span className="inline-flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {formatReads(reads)} {ui.reads}
              </span>
            </div>

            <div className="rounded-xl overflow-hidden mb-10 shadow-sm">
              <img
                src={insight.image}
                alt={t.title}
                width={1024}
                height={640}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-5 text-foreground/90">
              {t.body.map((para, i) => {
                if (para.startsWith("- ")) return null;

                if (para.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl md:text-3xl font-semibold mt-10 mb-2 tracking-tight"
                    >
                      {para.slice(3)}
                    </h2>
                  );
                }

                const nextItems: string[] = [];
                for (let j = i + 1; j < t.body.length && t.body[j].startsWith("- "); j += 1) {
                  nextItems.push(t.body[j].slice(2));
                }

                return (
                  <div key={i} className="space-y-4">
                    <p className="leading-relaxed text-base md:text-lg">
                      {renderInlineText(para)}
                    </p>
                    {nextItems.length > 0 && (
                      <ul className="list-disc pl-6 space-y-2 text-base md:text-lg">
                        {nextItems.map((item, j) => (
                          <li key={j} className="leading-relaxed">
                            {renderInlineText(item)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default InsightArticle;

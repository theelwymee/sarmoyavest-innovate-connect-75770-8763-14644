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
  const reads = count ?? 0;

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
              {t.body.map((para, i) => (
                <p key={i} className="leading-relaxed text-base md:text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default InsightArticle;
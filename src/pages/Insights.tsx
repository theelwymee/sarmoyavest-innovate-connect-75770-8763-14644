import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { insights, insightsUI, formatReads, type Locale } from "@/data/insights";
import { useInsightViewCounts } from "@/hooks/useInsightViews";

const Insights = () => {
  const { language } = useLanguage();
  // Insights section supports en/uz/ru; the global toggle is en/ru today.
  const locale: Locale = (language as Locale) ?? "en";
  const ui = insightsUI[locale] ?? insightsUI.en;

  const counts = useInsightViewCounts(insights.map((i) => i.slug));

  const dateFormatter = new Intl.DateTimeFormat(
    locale === "ru" ? "ru-RU" : locale === "uz" ? "uz-UZ" : "en-US",
    { month: "short", day: "numeric", year: "numeric" },
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold">{ui.sectionTitle}</h1>
              <p className="text-lg text-muted-foreground">{ui.sectionSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {insights.map((insight, index) => {
                const t = insight.translations[locale] ?? insight.translations.en;
                const reads = (counts[insight.slug] ?? 0) + (insight.viewsBaseline ?? 0);
                return (
                  <Card
                    key={insight.slug}
                    className="overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-elegant transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <Link
                      to={`/insights/${insight.slug}`}
                      className="block aspect-[16/10] overflow-hidden bg-muted"
                    >
                      <img
                        src={insight.image}
                        alt={t.title}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>

                    <CardContent className="p-5 flex flex-col flex-1 gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="rounded-full">
                          {t.category}
                        </Badge>
                        <Badge variant="outline" className="rounded-full gap-1 font-normal">
                          <Clock className="h-3 w-3" />
                          {insight.readingTimeMin} {ui.minRead}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {dateFormatter.format(new Date(insight.date))}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {formatReads(reads)} {ui.reads}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold leading-snug">
                        <Link
                          to={`/insights/${insight.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {t.title}
                        </Link>
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-3">{t.preview}</p>

                      <div className="mt-auto pt-2">
                        <Button asChild variant="ghost" size="sm" className="px-0 hover:bg-transparent hover:text-primary">
                          <Link to={`/insights/${insight.slug}`}>
                            {ui.read}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Insights;
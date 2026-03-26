import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Events = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('events.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('events.subtitle')}
            </p>
          </div>
        </section>

        <section className="pb-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary">{t('events.badge')}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{t('events.featuredTitle')}</CardTitle>
                <CardDescription className="text-base">{t('events.featuredDescription')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>{t('events.datePlaceholder')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{t('events.locationPlaceholder')}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;

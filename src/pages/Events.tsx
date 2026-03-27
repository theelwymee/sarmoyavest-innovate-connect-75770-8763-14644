import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Mic2, Image, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Events = () => {
  const { t } = useLanguage();

  const galleryPlaceholders = [
    { id: 1, label: t('events.gallery.photo1') },
    { id: 2, label: t('events.gallery.photo2') },
    { id: 3, label: t('events.gallery.photo3') },
    { id: 4, label: t('events.gallery.photo4') },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                {t('events.badge')}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">{t('events.heroTitle')}</h1>
              <p className="text-lg text-muted-foreground">
                {t('events.heroSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16">
          <div className="container max-w-5xl">
            {/* Event Header */}
            <div className="mb-12 space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                  <Star className="h-3.5 w-3.5 mr-1" />
                  {t('events.featured')}
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{t('events.firstEvent.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('events.firstEvent.subtitle')}</p>
            </div>

            {/* What Happened */}
            <Card className="mb-10 overflow-hidden border-0 shadow-lg">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-1" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{t('events.whatHappened.title')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {t('events.whatHappened.desc')}
                </p>
              </CardContent>
            </Card>

            {/* Guest Speaker */}
            <Card className="mb-10 overflow-hidden border-0 shadow-lg bg-gradient-to-br from-primary/5 via-background to-primary-glow/5">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mic2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{t('events.guestSpeaker.title')}</h3>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Speaker Avatar Placeholder */}
                  <div className="w-28 h-28 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0 border-2 border-primary/10">
                    <Image className="h-8 w-8 text-muted-foreground/50" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div>
                      <h4 className="text-xl font-bold">{t('events.guestSpeaker.name')}</h4>
                      <p className="text-primary font-medium">{t('events.guestSpeaker.role')}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('events.guestSpeaker.bio')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Gallery */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Image className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{t('events.gallery.title')}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {galleryPlaceholders.map((photo) => (
                  <Card
                    key={photo.id}
                    className="group overflow-hidden border-2 border-dashed border-muted-foreground/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] bg-muted/50 flex flex-col items-center justify-center gap-3 p-6">
                      <div className="p-3 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                        <Image className="h-8 w-8 text-muted-foreground/40 group-hover:text-primary/50 transition-colors" />
                      </div>
                      <p className="text-sm text-muted-foreground/60 text-center font-medium">
                        {photo.label}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why It Mattered */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-1" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{t('events.whyItMattered.title')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {t('events.whyItMattered.desc')}
                </p>
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

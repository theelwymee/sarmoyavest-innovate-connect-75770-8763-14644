import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Mic2, Image, Star, Clock, ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import asadbekSpeaker from "@/assets/team/asadbek-speaker.png";
import eventStageImage from "@/assets/events/eventpic.jpg";
import eventPosterImage from "@/assets/events/forwebsite.jpg";
import eventGroupImage from "@/assets/events/eventpic2.jpg";

const Events = () => {
  const { t } = useLanguage();
  const totalEvents = 2;
  const [currentEvent, setCurrentEvent] = useState(0);

  const goToNext = () => {
    setCurrentEvent((prev) => (prev + 1) % totalEvents);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goToPrev = () => {
    setCurrentEvent((prev) => (prev - 1 + totalEvents) % totalEvents);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

        {/* Upcoming Event Section */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/[0.02]">
          <div className="container max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{t('events.upcoming.heading')}</h2>
            </div>

            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/[0.04] via-background to-primary-glow/[0.06]">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary" />
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Left content */}
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className="bg-primary text-primary-foreground border-0 shadow-md">
                        <Clock className="h-3.5 w-3.5 mr-1.5" />
                        {t('events.upcoming.badge')}
                      </Badge>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                      {t('events.upcoming.title')}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{t('events.upcoming.date')}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base max-w-xl">
                      {t('events.upcoming.desc')}
                    </p>
                    <Button size="lg" className="mt-2 shadow-lg">
                      {t('events.upcoming.cta')}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {/* Right decorative element */}
                  <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-2xl bg-primary/[0.06] border-2 border-dashed border-primary/15 flex-shrink-0">
                    <div className="text-center space-y-2">
                      <Sparkles className="h-10 w-10 text-primary/30 mx-auto" />
                      <p className="text-xs text-muted-foreground/50 font-medium">{t('events.upcoming.soon')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-16">
          <div className="container max-w-5xl">
            {/* Section Header */}
            <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{t('events.past.heading')}</h2>
              </div>
              <Badge variant="outline" className="text-muted-foreground">
                1 {t('events.past.eventCount')}
              </Badge>
            </div>

            {/* First Past Event */}
            <div className="space-y-8">
              {/* Event Header Card */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 p-1" />
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <Badge variant="secondary" className="w-fit">
                      <CheckCircle2 className="h-3 w-3 mr-1.5" />
                      {t('events.past.completedBadge')}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {t('events.past.firstEvent.date')}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{t('events.firstEvent.title')}</h3>
                  <p className="text-lg text-muted-foreground">{t('events.firstEvent.subtitle')}</p>
                </CardContent>
              </Card>

              {/* What Happened */}
              <Card className="overflow-hidden border-0 shadow-lg">
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

              {/* Guest Speaker — Premium Card */}
              <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-primary/[0.06] via-background to-primary-glow/[0.08]">
                <div className="bg-gradient-to-r from-primary via-primary-glow to-primary h-1" />
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-primary/15 rounded-xl">
                      <Mic2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{t('events.guestSpeaker.title')}</h3>
                      <p className="text-sm text-muted-foreground">{t('events.past.speakerSubtitle')}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Speaker Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/15 shadow-lg">
                        <img src={asadbekSpeaker} alt="Asadbek Ismoilov" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 p-1.5 bg-primary rounded-lg shadow-md">
                        <Star className="h-3.5 w-3.5 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div>
                        <h4 className="text-xl font-bold">{t('events.guestSpeaker.name')}</h4>
                        <p className="text-primary font-semibold">{t('events.guestSpeaker.role')}</p>
                      </div>
                      <div className="w-12 h-0.5 bg-primary/20 rounded-full" />
                      <p className="text-muted-foreground leading-relaxed">
                        {t('events.guestSpeaker.bio')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Gallery — Asymmetric Premium Layout */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Image className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{t('events.gallery.title')}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-rows-2">
                  {/* Large featured image */}
                  <div className="md:row-span-2 group">
                    <div className="h-full min-h-[280px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-lg relative">
                      <img
                        src={eventGroupImage}
                        alt={t('events.gallery.photo1')}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute left-4 bottom-4 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-background/90 text-foreground">
                          {t('events.gallery.featured')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {/* Supporting image 1 */}
                  <div className="group">
                    <div className="h-full min-h-[180px] rounded-2xl overflow-hidden shadow-lg relative">
                      <img
                        src={eventPosterImage}
                        alt={t('events.gallery.photo2')}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>
                  {/* Supporting image 2 */}
                  <div className="group">
                    <div className="h-full min-h-[180px] rounded-2xl overflow-hidden shadow-lg relative">
                      <img
                        src={eventStageImage}
                        alt={t('events.gallery.photo3')}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insights & Takeaways */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-1" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Key Insights &amp; Takeaways</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                    <p>
                      It demonstrated that even a small, committed group can create meaningful discussions and begin shaping a culture of informed financial decision-making.
                    </p>
                    <p>
                      The success of this inaugural session sets the stage for future events, including larger lectures, guest speaker sessions, and expanded participation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Event Navigation */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={goToPrev}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous Event
                </Button>
                <span className="text-sm text-muted-foreground font-medium">
                  Event {currentEvent + 1} of {totalEvents}
                </span>
                <Button
                  size="lg"
                  onClick={goToNext}
                  className="gap-2 shadow-md"
                >
                  Next Event
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;

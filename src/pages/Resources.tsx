import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Target, Sparkles, Users, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Resources = () => {
  const { t } = useLanguage();
  const buildGuides = [
    {
      title: t('resources.guide1Title'),
      description: t('resources.guide1Desc'),
      icon: FileText,
    },
    {
      title: t('resources.guide2Title'),
      description: t('resources.guide2Desc'),
      icon: Sparkles,
    },
    {
      title: t('resources.guide3Title'),
      description: t('resources.guide3Desc'),
      icon: Target,
    },
    {
      title: t('resources.guide4Title'),
      description: t('resources.guide4Desc'),
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('resources.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('resources.subtitle')}
            </p>
          </div>
        </section>

        {/* Build Your Idea Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('resources.buildTitle')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('resources.buildSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {buildGuides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {guide.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mentorship Coming Soon Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="animate-pulse">
                  {t('resources.comingSoon')}
                </Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">{t('resources.mentorshipTitle')}</CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto">
                  {t('resources.mentorshipDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>{t('resources.oneOnOne')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>{t('resources.expertFeedback')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>{t('resources.growthStrategies')}</span>
                  </div>
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

export default Resources;

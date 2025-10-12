import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import connectionImage from "@/assets/connection-illustration.jpg";
import vasliddinImage from "@/assets/team/vasliddin.jpg";
import asadbekImage from "@/assets/team/asadbek.jpg";
import adibaImage from "@/assets/team/adiba.jpg";
import daurenImage from "@/assets/team/dauren.jpg";
const About = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">{t('about.title')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{t('about.story.title')}</h2>
                <p className="text-muted-foreground">
                  {t('about.story.p1')}
                </p>
                <p className="text-muted-foreground">
                  {t('about.story.p2')}
                </p>
                <p className="text-muted-foreground">
                  {t('about.story.p3')}
                </p>
              </div>
              <div className="relative">
                <img src={connectionImage} alt="Global connections" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('about.values.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.values.accessibility')}</h3>
                <p className="text-muted-foreground">
                  {t('about.values.accessibilityDesc')}
                </p>
              </Card>
              
              <Card className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-secondary/10">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.values.transparency')}</h3>
                <p className="text-muted-foreground">
                  {t('about.values.transparencyDesc')}
                </p>
              </Card>
              
              <Card className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-accent/10">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.values.innovation')}</h3>
                <p className="text-muted-foreground">
                  {t('about.values.innovationDesc')}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">{t('about.vision.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t('about.vision.p1')}
                </p>
                <p>
                  {t('about.vision.p2')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('about.vision.li1')}</li>
                  <li>{t('about.vision.li2')}</li>
                  <li>{t('about.vision.li3')}</li>
                  <li>{t('about.vision.li4')}</li>
                </ul>
                <p>
                  {t('about.vision.p3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-4 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">{t('about.team.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('about.team.subtitle')}
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-16">
              {/* Vasliddin Isomiddinov */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-end">
                  
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold">{t('about.team.vasliddin')}</h3>
                  <p className="text-primary font-semibold">{t('about.team.vasliddinRole')}</p>
                  <p className="text-muted-foreground">
                    {t('about.team.vasliddinDesc')}
                  </p>
                </div>
              </div>

              {/* Asadbek Ismoilov */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-center md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold">{t('about.team.asadbek')}</h3>
                  <p className="text-primary font-semibold">{t('about.team.asadbekRole')}</p>
                  <p className="text-muted-foreground">
                    {t('about.team.asadbekDesc')}
                  </p>
                </div>
                <div className="flex justify-center md:justify-start order-1 md:order-2">
                  <img src={asadbekImage} alt={t('about.team.asadbek')} className="w-64 h-64 rounded-full object-cover object-center shadow-lg" />
                </div>
              </div>

              {/* Adiba Isabekova */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-end">
                  <img src={adibaImage} alt={t('about.team.adiba')} className="w-64 h-64 rounded-full object-cover object-center shadow-lg" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold">{t('about.team.adiba')}</h3>
                  <p className="text-primary font-semibold">{t('about.team.adibaRole')}</p>
                  <p className="text-muted-foreground">
                    {t('about.team.adibaDesc')}
                  </p>
                </div>
              </div>

              {/* Dauren */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-center md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold">{t('about.team.dauren')}</h3>
                  <p className="text-primary font-semibold">{t('about.team.daurenRole')}</p>
                  <p className="text-muted-foreground">
                    {t('about.team.daurenDesc')}
                  </p>
                </div>
                <div className="flex justify-center md:justify-start order-1 md:order-2">
                  <img src={daurenImage} alt={t('about.team.dauren')} className="w-64 h-64 rounded-full object-cover shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;
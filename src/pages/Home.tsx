import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Users, TrendingUp, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-main.jpg";
const Home = () => {
  const {
    t
  } = useLanguage();
  const features = [{
    icon: Globe,
    title: t('home.features.globalReach'),
    description: t('home.features.globalReachDesc')
  }, {
    icon: Users,
    title: t('home.features.community'),
    description: t('home.features.communityDesc')
  }, {
    icon: TrendingUp,
    title: t('home.features.earlyStage'),
    description: t('home.features.earlyStageDesc')
  }, {
    icon: Shield,
    title: t('home.features.transparent'),
    description: t('home.features.transparentDesc')
  }];
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
          <div className="container relative py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {t('home.hero.title')}{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    {t('home.hero.titleHighlight')}
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  {t('home.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="shadow-elegant group">
                    <Link to="/projects">
                      {t('home.hero.browseProjects')}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/auth">{t('home.hero.submitStartup')}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <img src={heroImage} alt="Innovators collaborating" className="relative rounded-2xl shadow-2xl w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{t('home.mission.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('home.mission.description')}
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/about">{t('home.mission.learnMore')}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t('home.features.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('home.features.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => <Card key={index} className="p-6 hover:shadow-elegant transition-all">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">{t('home.cta.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('home.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-elegant">
                  <Link to="/auth">{t('home.cta.joinInnovator')}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/projects">{t('home.cta.exploreInvestor')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Home;
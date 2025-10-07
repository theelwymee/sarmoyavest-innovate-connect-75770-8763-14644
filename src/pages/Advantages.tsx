import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Globe, Shield, TrendingUp, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Advantages = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Globe,
      title: t('advantages.global.title'),
      description: t('advantages.global.desc'),
    },
    {
      icon: Shield,
      title: t('advantages.security.title'),
      description: t('advantages.security.desc'),
    },
    {
      icon: TrendingUp,
      title: t('advantages.support.title'),
      description: t('advantages.support.desc'),
    },
    {
      icon: Languages,
      title: t('advantages.bilingual.title'),
      description: t('advantages.bilingual.desc'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold">{t('advantages.title')}</h1>
              <p className="text-lg text-muted-foreground">
                {t('advantages.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <advantage.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Advantages;
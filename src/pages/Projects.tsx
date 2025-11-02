import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  // Sample project data - will be replaced with real data from database
  const sampleProjects = [
    {
      id: 1,
      title: "Intelligent Traffic System",
      country: "Uzbekistan",
      description: "A smart solution designed to reduce traffic congestion by integrating artificial intelligence into traffic lights and road monitoring. The system analyzes real-time vehicle and pedestrian data to optimize signal timing, minimize waiting time, and improve overall traffic flow efficiency.",
      founder: "Anvar Karimov",
      contact: "anvar@ecotech.uz",
      tags: ["CleanTech", "Sustainability", "Pre-seed"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">{t('projects.heroTitle')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('projects.heroSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder={t('projects.searchPlaceholder')}
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                {t('projects.showing').replace('{count}', sampleProjects.length.toString())}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProjects.map((project) => (
                <Card key={project.id} className="p-6 hover:shadow-elegant transition-all flex flex-col">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{project.country}</span>
                    </div>
                    
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t space-y-3">
                    <div className="text-sm">
                      <span className="text-muted-foreground">{t('projects.founder')} </span>
                      <span className="font-medium">{project.founder}</span>
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <a href={`mailto:${project.contact}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        {t('projects.contactFounder')}
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Empty State Message */}
            <div className="mt-12 text-center p-12 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{t('projects.comingSoonTitle')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('projects.comingSoonText')}
              </p>
              <Button asChild className="shadow-elegant">
                <a href="/auth">{t('projects.submitStartup')}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

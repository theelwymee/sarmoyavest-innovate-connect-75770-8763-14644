import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Mail } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample project data - will be replaced with real data from database
  const sampleProjects = [
    {
      id: 1,
      title: "EcoTech Solutions",
      country: "Uzbekistan",
      description: "Developing sustainable technology for water purification in rural areas. Our innovative approach combines solar power with advanced filtration systems.",
      founder: "Anvar Karimov",
      contact: "anvar@ecotech.uz",
      tags: ["CleanTech", "Sustainability", "Pre-seed"],
    },
    {
      id: 2,
      title: "FinConnect",
      country: "Kazakhstan",
      description: "Mobile-first financial services platform for underbanked communities. Making banking accessible through simple smartphone apps.",
      founder: "Aisha Nurlan",
      contact: "aisha@finconnect.kz",
      tags: ["FinTech", "Mobile", "Seed"],
    },
    {
      id: 3,
      title: "AgriSmart",
      country: "Kyrgyzstan",
      description: "IoT-based smart farming solutions to increase crop yields. Using sensors and AI to help farmers make data-driven decisions.",
      founder: "Bektur Asanov",
      contact: "bektur@agrismart.kg",
      tags: ["AgriTech", "IoT", "Pre-seed"],
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
              <h1 className="text-4xl md:text-5xl font-bold">Discover Startups</h1>
              <p className="text-xl text-muted-foreground">
                Browse innovative projects from talented founders across emerging markets
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
                  placeholder="Search by project name, country, or keyword..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Showing {sampleProjects.length} projects
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
                      <span className="text-muted-foreground">Founder: </span>
                      <span className="font-medium">{project.founder}</span>
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <a href={`mailto:${project.contact}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Founder
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Empty State Message */}
            <div className="mt-12 text-center p-12 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                This is just a preview. Once you sign up and submit your project, 
                it will appear here for investors to discover.
              </p>
              <Button asChild className="shadow-elegant">
                <a href="/auth">Submit Your Startup</a>
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

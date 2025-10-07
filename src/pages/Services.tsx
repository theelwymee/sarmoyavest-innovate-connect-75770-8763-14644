import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Search, Users, BookOpen, Globe, Briefcase } from "lucide-react";

const Services = () => {
  const innovatorServices = [
    {
      icon: Rocket,
      title: "Project Showcase",
      description: "Create a compelling profile for your startup with images, descriptions, and key information to attract investors.",
    },
    {
      icon: Globe,
      title: "Global Visibility",
      description: "Get discovered by investors and mentors from around the world who are actively seeking new opportunities.",
    },
    {
      icon: Users,
      title: "Direct Communication",
      description: "Connect directly with interested investors through Telegram or email to discuss your vision and funding needs.",
    },
    {
      icon: BookOpen,
      title: "Resource Access",
      description: "Access guides, templates, and best practices for pitching your startup and preparing for investor conversations.",
    },
  ];

  const investorServices = [
    {
      icon: Search,
      title: "Curated Opportunities",
      description: "Browse a diverse portfolio of early-stage startups from emerging markets with high growth potential.",
    },
    {
      icon: Briefcase,
      title: "Smart Filtering",
      description: "Search and filter projects by country, industry, stage, and other criteria to find perfect matches.",
    },
    {
      icon: Users,
      title: "Founder Connections",
      description: "Reach out directly to founders to learn more, ask questions, and explore investment opportunities.",
    },
    {
      icon: Globe,
      title: "Market Insights",
      description: "Gain insights into emerging markets and discover opportunities in regions with untapped potential.",
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
              <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions for innovators and investors
              </p>
            </div>
          </div>
        </section>

        {/* For Innovators Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">For Innovators</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to showcase your startup and connect with the right investors
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {innovatorServices.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="shadow-elegant">
                <Link to="/auth">Submit Your Startup</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* For Investors Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">For Investors</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover and evaluate promising startups from emerging markets
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {investorServices.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-secondary/10 shrink-0">
                      <service.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sign Up</h3>
                    <p className="text-muted-foreground">
                      Create your account as an innovator or investor. It's free and takes just a few minutes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Build Your Profile</h3>
                    <p className="text-muted-foreground">
                      Innovators create detailed project profiles. Investors set up preferences and interests.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Connect</h3>
                    <p className="text-muted-foreground">
                      Browse projects, express interest, and start conversations through direct communication channels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Grow Together</h3>
                    <p className="text-muted-foreground">
                      Build relationships, negotiate terms, and work together to bring innovative ideas to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

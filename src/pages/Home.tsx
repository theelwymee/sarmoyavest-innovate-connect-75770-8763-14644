import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Users, TrendingUp, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-main.jpg";

const Home = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with investors and mentors from around the world",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Join a thriving community of innovators and entrepreneurs",
    },
    {
      icon: TrendingUp,
      title: "Early-Stage Focus",
      description: "Support for startups at every stage of their journey",
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Clear, secure, and straightforward funding process",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
          <div className="container relative py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Connecting Innovators Globally
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Empowering{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Startups
                  </span>{" "}
                  from Developing Regions
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Sarmoyavest connects young innovators and early-stage startups with global investors and mentors. 
                  Making innovation funding accessible, transparent, and borderless.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="shadow-elegant group">
                    <Link to="/projects">
                      Browse Projects
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/auth">Submit Your Startup</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <img
                  src={heroImage}
                  alt="Innovators collaborating"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                We're building bridges between talented entrepreneurs in emerging markets and 
                the global investment community. Our platform provides visibility, support, and 
                opportunities for startups that might otherwise go unnoticed.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Sarmoyavest</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built specifically for early-stage startups from developing regions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Whether you're an innovator looking for funding or an investor seeking 
                the next big opportunity, Sarmoyavest is your platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-elegant">
                  <Link to="/auth">Join as Innovator</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/projects">Explore as Investor</Link>
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

export default Home;

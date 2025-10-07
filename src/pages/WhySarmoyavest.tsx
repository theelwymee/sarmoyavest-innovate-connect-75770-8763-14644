import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Languages, Shield, Rocket } from "lucide-react";

const WhySarmoyavest = () => {
  const advantages = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with investors and mentors from every corner of the world. Our platform breaks down geographic barriers, giving you access to a truly international network of opportunities.",
      benefits: [
        "Investors from 50+ countries",
        "Cross-border collaboration tools",
        "International mentorship network",
        "Global market insights",
      ],
    },
    {
      icon: Languages,
      title: "Bilingual Interface",
      description: "Navigate seamlessly in both English and Uzbek. We understand the importance of communicating in your preferred language, especially when presenting your innovative ideas.",
      benefits: [
        "Full English and Uzbek support",
        "Localized content and resources",
        "Cultural awareness in design",
        "Expanding to more languages",
      ],
    },
    {
      icon: Shield,
      title: "Transparency & Security",
      description: "Built on principles of trust and openness. Every interaction is secure, every process is transparent, and your intellectual property is protected throughout the journey.",
      benefits: [
        "Secure communication channels",
        "Verified investor profiles",
        "Clear funding processes",
        "Data protection standards",
      ],
    },
    {
      icon: Rocket,
      title: "Early-Stage Support",
      description: "Specifically designed for startups in their early stages. We understand the unique challenges you face and provide tailored support to help you succeed from day one.",
      benefits: [
        "Pre-seed and seed stage focus",
        "Startup resources and templates",
        "Educational content library",
        "Community of fellow founders",
      ],
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
              <h1 className="text-4xl md:text-5xl font-bold">Why Choose Sarmoyavest</h1>
              <p className="text-xl text-muted-foreground">
                Four powerful advantages that set us apart in the global innovation ecosystem
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-16">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-8 hover:shadow-elegant transition-all">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                        <advantage.icon className="h-10 w-10 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                          {advantage.title}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                    <div className="lg:pl-8">
                      <h3 className="font-semibold text-lg mb-4">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {advantage.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Sarmoyavest vs Traditional Funding
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-2 border-primary/20">
                  <h3 className="font-semibold text-xl mb-4 text-primary">
                    With Sarmoyavest
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Accessible from anywhere in the world</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Direct connection with investors</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Transparent process and expectations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Early-stage focused support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span>Bilingual platform support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span>No geographic limitations</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-2">
                  <h3 className="font-semibold text-xl mb-4 text-muted-foreground">
                    Traditional Funding
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span>✗</span>
                      <span>Often limited to major cities/hubs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span>✗</span>
                      <span>Requires extensive networking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span>✗</span>
                      <span>Opaque processes and criteria</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span>✗</span>
                      <span>Focus on later-stage startups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span>✗</span>
                      <span>Primarily English-only</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span>✗</span>
                      <span>Geographic bias towards established markets</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Experience the Difference?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of innovators and investors who are already building the future together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-elegant">
                  <Link to="/auth">Get Started Today</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Us</Link>
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

export default WhySarmoyavest;

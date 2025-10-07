import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Lightbulb } from "lucide-react";
import connectionImage from "@/assets/connection-illustration.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">About Sarmoyavest</h1>
              <p className="text-xl text-muted-foreground">
                Empowering early-stage founders from developing regions to connect with global opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Sarmoyavest was born from a simple observation: brilliant innovators in Central Asia 
                  and other developing regions face significant barriers in accessing global capital and mentorship.
                </p>
                <p className="text-muted-foreground">
                  While the world has become increasingly connected, the innovation funding ecosystem remains 
                  concentrated in traditional hubs. We believe this represents a massive missed opportunity 
                  for both investors and entrepreneurs.
                </p>
                <p className="text-muted-foreground">
                  Our platform breaks down these barriers by providing a transparent, accessible space where 
                  talent meets opportunity, regardless of geographic boundaries.
                </p>
              </div>
              <div className="relative">
                <img
                  src={connectionImage}
                  alt="Global connections"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Accessibility</h3>
                <p className="text-muted-foreground">
                  Making innovation funding accessible to founders everywhere, 
                  regardless of their location or network.
                </p>
              </Card>
              
              <Card className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-secondary/10">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Transparency</h3>
                <p className="text-muted-foreground">
                  Building trust through clear processes, honest communication, 
                  and secure interactions.
                </p>
              </Card>
              
              <Card className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-accent/10">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  Championing bold ideas and supporting entrepreneurs who dare 
                  to think differently.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Our Vision</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We envision a world where innovation funding is truly borderless, where the quality 
                  of an idea matters more than the founder's postal code.
                </p>
                <p>
                  Through Sarmoyavest, we're creating an ecosystem where:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Talented founders from any region can showcase their innovations</li>
                  <li>Investors discover untapped opportunities in emerging markets</li>
                  <li>Mentors share their expertise with the next generation of entrepreneurs</li>
                  <li>Communities collaborate across borders to solve global challenges</li>
                </ul>
                <p>
                  We're not just building a platform – we're building a movement that recognizes 
                  and unleashes the potential of innovators everywhere.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

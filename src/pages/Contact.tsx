import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Twitter, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send to an API
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="Your full name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder="your@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" value={formData.subject} onChange={e => setFormData({
                    ...formData,
                    subject: e.target.value
                  })} placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} placeholder="Tell us more..." rows={6} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-elegant">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:info@sarmoyavest.com" className="text-muted-foreground hover:text-primary transition-colors">info@sarmoyavest.com</a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          Jizzakh, Uzbekistan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM (GMT+5)<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I submit my startup?</h3>
                  <p className="text-muted-foreground">
                    Simply sign up for an account, complete your profile, and submit your project details. 
                    Your startup will be reviewed and published on our platform.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Is Sarmoyavest free to use?</h3>
                  <p className="text-muted-foreground">
                    Yes! Our platform is completely free for both innovators and investors. 
                    We believe in making innovation funding accessible to everyone.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What types of startups can join?</h3>
                  <p className="text-muted-foreground">
                    We focus on early-stage startups (pre-seed and seed) from developing regions, 
                    particularly Central Asia. All industries and sectors are welcome.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Contact;
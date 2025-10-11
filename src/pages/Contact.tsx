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
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
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
        title: t('contact.missingInfo'),
        description: t('contact.fillFields'),
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send to an API
    toast({
      title: t('contact.messageSent'),
      description: t('contact.willRespond')
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
              <h1 className="text-4xl md:text-5xl font-bold">{t('contact.title')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('contact.subtitle')}
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
                <h2 className="text-2xl font-bold mb-6">{t('contact.formTitle')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.name')} *</Label>
                    <Input id="name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder={t('contact.namePlaceholder')} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.emailLabel')} *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder={t('contact.emailPlaceholder')} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.subject')}</Label>
                    <Input id="subject" value={formData.subject} onChange={e => setFormData({
                    ...formData,
                    subject: e.target.value
                  })} placeholder={t('contact.subjectPlaceholder')} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')} *</Label>
                    <Textarea id="message" value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} placeholder={t('contact.messagePlaceholder')} rows={6} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-elegant">
                    {t('contact.send')}
                  </Button>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">{t('contact.infoTitle')}</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.email')}</h3>
                        <a href="mailto:info@sarmoyavest.com" className="text-muted-foreground hover:text-primary transition-colors">info@sarmoyavest.com</a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.location')}</h3>
                        <p className="text-muted-foreground">
                          {t('contact.locationText')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">{t('contact.followUs')}</h3>
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
                  <h3 className="font-semibold text-lg mb-2">{t('contact.officeHours')}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t('contact.hoursText')}
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
              <h2 className="text-3xl font-bold text-center mb-12">{t('contact.faqTitle')}</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{t('contact.faq1Q')}</h3>
                  <p className="text-muted-foreground">
                    {t('contact.faq1A')}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{t('contact.faq2Q')}</h3>
                  <p className="text-muted-foreground">
                    {t('contact.faq2A')}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{t('contact.faq3Q')}</h3>
                  <p className="text-muted-foreground">
                    {t('contact.faq3A')}
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
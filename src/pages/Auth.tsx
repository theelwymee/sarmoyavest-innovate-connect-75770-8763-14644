import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              <div className="text-center space-y-4 mb-8">
                <h1 className="text-3xl font-bold">Get Started</h1>
                <p className="text-muted-foreground">
                  Authentication will be implemented here
                </p>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>Coming soon:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sign up as Innovator or Investor</li>
                  <li>Create your profile</li>
                  <li>Submit startup projects</li>
                  <li>Connect with the community</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;

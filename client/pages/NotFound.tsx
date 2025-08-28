import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-college-cream to-white flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full border-0 shadow-2xl">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-college-burgundy to-college-navy rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-6xl font-serif font-bold text-college-navy mb-4">
            404
          </h1>

          <h2 className="text-2xl font-semibold text-college-navy mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back to exploring KACC.
          </p>

          <Button
            onClick={() => navigate('/')}
            className="bg-college-navy hover:bg-college-navy/90 text-white font-semibold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;

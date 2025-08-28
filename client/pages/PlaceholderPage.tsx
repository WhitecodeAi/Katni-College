import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ 
  title, 
  description = "This page is currently under development. Please check back soon!" 
}: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-college-cream to-white flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full border-0 shadow-2xl">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-college-navy to-college-burgundy rounded-full flex items-center justify-center mx-auto mb-8">
            <Construction className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-college-navy mb-4">
            {title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/')}
              className="bg-college-navy hover:bg-college-navy/90 text-white font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Want this page to be developed? Continue prompting to fill in the content!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

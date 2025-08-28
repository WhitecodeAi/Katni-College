import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
}

export default function LeadershipCard({ name, role, imageUrl, quote }: Props) {
  return (
    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="bg-college-navy text-white px-6 py-8 flex flex-col items-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/20">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-4 text-xl font-serif font-bold text-white text-center">{name}</h3>
        <p className="text-college-gold font-medium text-sm">{role}</p>
      </div>
      <div className="px-6 py-6 text-center bg-white">
        <p className="text-sm text-muted-foreground leading-relaxed">{quote}</p>
        <Button variant="outline" size="sm" className="mt-4 text-college-navy border-college-navy hover:bg-college-navy hover:text-white">
          Read Message
        </Button>
      </div>
    </Card>
  );
}

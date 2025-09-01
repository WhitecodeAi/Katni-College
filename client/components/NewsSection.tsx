import { Calendar, Megaphone, School, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsSection() {
  return (
    <section className="py-16 bg-white border-b border-college-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-college-navy mb-4">
            Latest News & Notices
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest announcements and important information
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Admissions */}
          <Card className="bg-gradient-to-b from-white to-college-cream/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="px-6 py-4 bg-gradient-to-r from-college-gold to-college-bronze relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none" style={{backgroundImage:`radial-gradient(circle at 20% 20%, rgba(255,255,255,.35) 0, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,.25) 0, transparent 50%)`}} />
                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                    <School className="h-4 w-4 text-college-navy" />
                  </div>
                  <h3 className="font-bold text-college-navy text-lg tracking-wide">ADMISSIONS</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <NewsRow text="Admission Process for Academic Year 2024-25 Now Open" date="15 Dec 2024" />
                <NewsRow text="Merit List for UG Programs Published" date="12 Dec 2024" />
                <NewsRow text="Scholarship Application Forms Available" date="10 Dec 2024" />
                <NewsRow text="Last Date for Online Application Extended" date="08 Dec 2024" border={false} />
              </div>
            </CardContent>
          </Card>

          {/* Examinations */}
          <Card className="bg-gradient-to-b from-white to-college-cream/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="px-6 py-4 bg-gradient-to-r from-college-burgundy to-college-navy">
                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-college-burgundy" />
                  </div>
                  <h3 className="font-bold text-white text-lg tracking-wide">EXAMINATIONS</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <NewsRow text="Winter Semester Examination Schedule Released" date="16 Dec 2024" />
                <NewsRow text="Practical Exam Dates for Science Departments" date="14 Dec 2024" />
                <NewsRow text="Semester End Results for B.Com Final Year" date="11 Dec 2024" />
                <NewsRow text="Hall Ticket Download for December Exams" date="08 Dec 2024" border={false} />
              </div>
            </CardContent>
          </Card>

          {/* Events & Notices */}
          <Card className="bg-gradient-to-b from-white to-college-cream/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="px-6 py-4 bg-gradient-to-r from-college-sage to-college-gold">
                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                    <Megaphone className="h-4 w-4 text-college-sage" />
                  </div>
                  <h3 className="font-bold text-college-navy text-lg tracking-wide">GENERAL NOTICES</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <NewsRow text="Notice for Walk in Interview for Hindi Guest Faculty" date="18 Dec 2024" />
                <NewsRow text="Interview results for Guest Faculty of All Departments" date="15 Dec 2024" />
                <NewsRow text="Extension Notice for Nomination Form Students' Association 2025-26" date="14 Dec 2024" />
                <NewsRow text="Annual Cultural Festival - Kalakriti 2024" date="20-22 Dec 2024" border={false} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function NewsRow({ text, date, border = true }: { text: string; date: string; border?: boolean }) {
  return (
    <div className={`flex justify-between items-start py-3 ${border ? "border-b border-college-cream/50" : ""}`}>
      <div className="flex items-start gap-2 pr-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-college-navy flex-shrink-0" aria-hidden="true"></span>
        <p className="text-sm text-college-navy font-medium leading-relaxed">{text}</p>
      </div>
      <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
        <Calendar className="h-3.5 w-3.5" />
        {date}
      </span>
    </div>
  );
}

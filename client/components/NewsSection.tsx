import { Calendar, ChevronRight, Megaphone, School, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  tag?: "New" | "Update" | "Important";
  href?: string;
}

const admissions: NewsItem[] = [
  {
    id: "adm-1",
    title: "Admission Process for Academic Year 2024-25 Now Open",
    date: "15 Dec 2024",
    tag: "Important",
  },
  {
    id: "adm-2",
    title: "Merit List for UG Programs Published",
    date: "12 Dec 2024",
    tag: "New",
  },
  {
    id: "adm-3",
    title: "Scholarship Application Forms Available",
    date: "10 Dec 2024",
  },
  {
    id: "adm-4",
    title: "Last Date for Online Application Extended",
    date: "08 Dec 2024",
    tag: "Update",
  },
];

const exams: NewsItem[] = [
  {
    id: "exm-1",
    title: "Winter Semester Examination Schedule Released",
    date: "16 Dec 2024",
    tag: "Important",
  },
  {
    id: "exm-2",
    title: "Practical Exam Dates for Science Departments",
    date: "14 Dec 2024",
  },
  {
    id: "exm-3",
    title: "Semester End Results for B.Com Final Year",
    date: "11 Dec 2024",
  },
  {
    id: "exm-4",
    title: "Hall Ticket Download for December Exams",
    date: "08 Dec 2024",
  },
];

const events: NewsItem[] = [
  {
    id: "evt-1",
    title: "Notice for Walk in Interview for Hindi Guest Faculty",
    date: "18 Dec 2024",
    tag: "New",
  },
  {
    id: "evt-2",
    title: "Interview results for Guest Faculty of All Departments",
    date: "15 Dec 2024",
  },
  {
    id: "evt-3",
    title: "Extension Notice for Nomination Form Students' Association 2025-26",
    date: "14 Dec 2024",
  },
  {
    id: "evt-4",
    title: "Annual Cultural Festival - Kalakriti 2024",
    date: "20-22 Dec 2024",
  },
];

function Timeline({ items, color }: { items: NewsItem[]; color: string }) {
  return (
    <ul className="relative pl-6">{/* timeline */}
      <div className={cn("absolute left-2 top-0 bottom-0 w-[2px]", color)} />
      {items.map((item) => (
        <li key={item.id} className="relative pb-5">
          <div
            className={cn(
              "absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full ring-4 ring-white",
              color,
            )}
          />
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm text-college-navy font-medium leading-relaxed">
              {item.title}
            </p>
            <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {item.date}
            </span>
          </div>
          {item.tag && (
            <div className="mt-2">
              <Badge
                className={cn(
                  item.tag === "New" && "bg-college-gold text-college-navy",
                  item.tag === "Important" && "bg-college-burgundy text-white",
                  item.tag === "Update" && "bg-college-sage text-white",
                )}
                variant="default"
              >
                {item.tag}
              </Badge>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

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

        <Tabs defaultValue="admissions" className="w-full">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <TabsList className="bg-college-cream/60">
              <TabsTrigger value="admissions">Admissions</TabsTrigger>
              <TabsTrigger value="examinations">Examinations</TabsTrigger>
              <TabsTrigger value="events">Events & Notices</TabsTrigger>
            </TabsList>
            <Button className="bg-college-navy hover:bg-college-navy/90 text-white" size="sm">
              View All
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <TabsContent value="admissions">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-b from-white to-college-cream/30 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <School className="h-5 w-5 text-college-navy" />
                    <h3 className="font-bold text-college-navy">Admissions</h3>
                  </div>
                  <ScrollArea className="h-64 pr-3">
                    <Timeline items={admissions} color="bg-college-gold" />
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-white to-college-cream/30 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-5 w-5 text-college-burgundy" />
                    <h3 className="font-bold text-college-navy">Application & Forms</h3>
                  </div>
                  <div className="space-y-3 text-sm text-college-navy">
                    <a className="block hover:underline" href="#">Prospectus 2024-25 (PDF)</a>
                    <a className="block hover:underline" href="#">UG Program Guidelines</a>
                    <a className="block hover:underline" href="#">Scholarship Policy</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-white to-college-cream/30 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Megaphone className="h-5 w-5 text-college-sage" />
                    <h3 className="font-bold text-college-navy">Highlights</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-college-navy">
                    <li className="flex items-center gap-2"><Badge className="bg-college-gold text-college-navy">New</Badge> Online admission window live</li>
                    <li className="flex items-center gap-2"><Badge className="bg-college-sage text-white">Update</Badge> Last date extended</li>
                    <li className="flex items-center gap-2"><Badge className="bg-college-burgundy text-white">Important</Badge> Verify documents before submission</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examinations">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-b from-white to-college-cream/30 border-0 shadow-lg md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-5 w-5 text-college-burgundy" />
                    <h3 className="font-bold text-college-navy">Examination Notices</h3>
                  </div>
                  <ScrollArea className="h-64 pr-3">
                    <Timeline items={exams} color="bg-college-burgundy" />
                  </ScrollArea>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-white to-college-cream/30 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-college-navy mb-3">Quick Links</h3>
                  <div className="space-y-3 text-sm text-college-navy">
                    <a className="block hover:underline" href="#">Download Hall Ticket</a>
                    <a className="block hover:underline" href="#">Exam Timetable</a>
                    <a className="block hover:underline" href="#">Results Portal</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-b from-white to-college-cream/30 border-0 shadow-lg md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Megaphone className="h-5 w-5 text-college-sage" />
                    <h3 className="font-bold text-college-navy">Events & Notices</h3>
                  </div>
                  <ScrollArea className="h-64 pr-3">
                    <Timeline items={events} color="bg-college-sage" />
                  </ScrollArea>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-white to-college-cream/30 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-college-navy mb-3">Upcoming</h3>
                  <div className="space-y-3 text-sm text-college-navy">
                    <p>Annual Cultural Festival – Kalakriti 2024</p>
                    <p className="text-muted-foreground">20–22 Dec 2024</p>
                    <Button variant="outline" className="mt-2 border-college-navy text-college-navy hover:bg-college-navy hover:text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

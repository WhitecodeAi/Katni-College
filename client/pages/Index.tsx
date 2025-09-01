import { ChevronRight, ChevronLeft, Users, BookOpen, Award, MapPin, Phone, Mail, Calendar, FileText, GraduationCap, Microscope, Atom, Cpu, Briefcase, Scale, Library } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import NewsSection from "@/components/NewsSection";
import LeadershipCard from "@/components/LeadershipCard";
import { leaders } from "@/data/leaders";

export default function Index() {
  const slideImage = 'https://cdn.builder.io/api/v1/image/assets%2Fea72e649953d477dac6701b6dc53a600%2Fdd7883b2dc6f4ddea6e4780d8396b2eb?format=webp&width=800';

  const nextSlide = () => {
    // Arrows are visible but do nothing since it's the same slide
  };

  const prevSlide = () => {
    // Arrows are visible but do nothing since it's the same slide
  };

  const [visionExpanded, setVisionExpanded] = useState(false);
  const [missionExpanded, setMissionExpanded] = useState(false);

  type Program = { name: string; eligibility: string; duration: string; details: string; imageUrl?: string };

  const faculties: Record<string, Program[]> = {
    Science: [
      {
        name: "B.Sc. (Biotech - Botany - Computer)",
        eligibility: "Higher Secondary (10+2) Biology",
        duration: "3 Years",
        details: "Undergraduate program combining Biotechnology, Botany and Computer studies.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Sc. (Biotech - Chemistry - Computer)",
        eligibility: "Higher Secondary (10+2) Biology",
        duration: "3 Years",
        details: "Undergraduate program with Biotechnology, Chemistry and Computer Science.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Sc. (Chemistry - Mathematics - Physics)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Core science combination covering Chemistry, Mathematics and Physics.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Sc. (Computer Science - Mathematics - Physics)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Focus on Computer Science along with Mathematics and Physics.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Sc. (Computer Science - Mathematics - Economics)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Interdisciplinary program spanning CS, Mathematics and Economics.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    Commerce: [
      {
        name: "B.Com. (Applied Economics)",
        eligibility: "Higher Secondary (10+2) any stream except Arts",
        duration: "3 Years",
        details: "Undergraduate commerce degree with Applied Economics specialization.",
        imageUrl: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Com. (Tax Procedure)",
        eligibility: "Higher Secondary (10+2) any stream except Arts",
        duration: "3 Years",
        details: "Specialization focused on taxation procedures and practices.",
        imageUrl: "hhttps://images.unsplash.com/photo-1556742212-5b321f3c261b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Com. (Computer Application)",
        eligibility: "Higher Secondary (10+2) any stream except Arts",
        duration: "3 Years",
        details: "Commerce program with emphasis on computer applications.",
        imageUrl: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Com. (Marketing)",
        eligibility: "Higher Secondary (10+2) any stream except Arts",
        duration: "3 Years",
        details: "Undergraduate program centered on marketing domain.",
        imageUrl: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Com. (Honours - Account)",
        eligibility: "Higher Secondary (10+2) any stream except Arts",
        duration: "3 Years",
        details: "Honours specialization in Accountancy.",
        imageUrl: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "B.Com. (Honours - Management)",
        eligibility: "Higher Secondary (10+2) any stream except Arts",
        duration: "3 Years",
        details: "Honours specialization in Management.",
        imageUrl: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "M.Com.",
        eligibility: "Graduation in Commerce",
        duration: "2 Years (4 Semesters)",
        details: "Postgraduate program in Commerce.",
        imageUrl: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    Arts: [
      {
        name: "B.A. (History - Political Science - Sociology)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Undergraduate arts combination in History, Political Science and Sociology.",
      },
      {
        name: "B.A. (Hindi - History - Sociology)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Combination of Hindi, History and Sociology.",
      },
      {
        name: "B.A. (Hindi - History - Political Science)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Combination of Hindi, History and Political Science.",
      },
      {
        name: "B.A. (Economics - Hindi - Political Science)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Combination of Economics, Hindi and Political Science.",
      },
      {
        name: "B.A. (Economics - Political Science - Sociology)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Combination of Economics, Political Science and Sociology.",
      },
      {
        name: "B.A. (Computer - History - Sociology)",
        eligibility: "Higher Secondary (10+2)",
        duration: "3 Years",
        details: "Combination of Computer, History and Sociology.",
      },
    ],
    "Computer Science": [
      {
        name: "B.C.A.",
        eligibility: "Higher Secondary (10+2) with Mathematics",
        duration: "3 Years",
        details: "Bachelor's in Computer Applications.",
      },
      {
        name: "M.Sc. (Computer Science)",
        eligibility: "Graduation in Computer Science/Application",
        duration: "2 Years (4 Semesters)",
        details: "Postgraduate program in Computer Science.",
      },
    ],
    Management: [
      { name: "B.B.A.", eligibility: "Higher Secondary (10+2)", duration: "3 Years", details: "Bachelor of Business Administration." },
    ],
    Law: [
      { name: "LL.B.", eligibility: "Graduation in any stream", duration: "3 Years", details: "Bachelor of Laws." },
      { name: "LL.M.", eligibility: "Graduation in LL.B.", duration: "2 Years (4 Semesters)", details: "Master of Laws." },
    ],
    "Library Science": [
      { name: "B.Lib.", eligibility: "Graduation in any stream", duration: "1 Year (2 Semesters)", details: "Bachelor of Library and Information Science." },
    ],
    "Social Work": [
      { name: "MSW", eligibility: "Graduation in any stream", duration: "2 Years (4 Semesters)", details: "Master of Social Work." },
    ],
  };

  const facultyColors: Record<string, string> = {
    Science: "from-college-gold to-college-sage",
    Commerce: "from-college-burgundy to-college-navy",
    Arts: "from-college-navy to-college-gold",
    "Computer Science": "from-college-sage to-college-gold",
    Management: "from-college-burgundy to-college-sage",
    Law: "from-college-burgundy to-college-navy",
    "Library Science": "from-college-navy to-college-burgundy",
    "Social Work": "from-college-gold to-college-sage",
  };

  const programGradients = [
    "from-college-navy to-college-burgundy",
    "from-college-gold to-college-sage",
    "from-college-burgundy to-college-navy",
    "from-college-sage to-college-gold",
    "from-college-navy to-college-gold",
    "from-college-gold to-college-bronze",
  ];

  const facultyImages: Record<string, string[]> = {
    Science: [
      "https://images.unsplash.com/photo-1581091012184-7f06b180a3a1?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=60",
    ],
    Commerce: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=60",
    ],
    Arts: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=60",
    ],
    "Computer Science": [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=60",
    ],
    Management: [
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60",
    ],
    Law: [
      "https://images.unsplash.com/photo-1555375771-14b1f1aa1b2a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=60",
    ],
    "Library Science": [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=60",
    ],
    "Social Work": [
      "https://images.unsplash.com/photo-1520975928316-56f2c6d69c49?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=60",
    ],
  };

  const fallbackImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=60";

  return (
    <div className="bg-white">
      {/* Hero Carousel Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Single Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('${slideImage}')`
          }}
        />

        {/* Subtle Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/40" />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 text-college-navy" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 text-college-navy" />
        </button>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-none tracking-tight">
                <span className="block text-college-navy">Welcome to</span>
                <span className="block bg-gradient-to-r from-college-gold via-college-bronze to-college-gold bg-clip-text text-transparent mt-2">
                  KATNI ARTS & COMMERCE COLLEGE
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-college-charcoal leading-relaxed max-w-4xl mx-auto">
                Shaping tomorrow's leaders through academic excellence, innovation, and
                holistic development. Join a legacy of distinguished education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-college-gold to-college-bronze hover:from-college-bronze hover:to-college-gold text-white font-bold text-lg px-10 py-5 h-auto rounded-xl"
              >
                Apply for Admission
                <ChevronRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-college-navy text-college-navy hover:bg-college-navy hover:text-white font-bold text-lg px-10 py-5 h-auto rounded-xl"
              >
                Explore Programs
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-college-navy text-college-navy hover:bg-college-navy hover:text-white font-bold text-lg px-10 py-5 h-auto rounded-xl">
                <a href="/brochure">Download Brochure</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Notices Section */}
      <NewsSection />

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-college-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-college-navy mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guiding principles that shape our commitment to excellence in education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl h-full">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-college-navy to-college-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-college-navy mb-4 text-center">
                  Our Vision
                </h3>
                <p className={`text-muted-foreground leading-relaxed text-center ${visionExpanded ? "" : "line-clamp-4"}`}>
                  Vision to be recognised far and wide as an
                  institution which provides need-based,
                  skill-integrated, cost-effective, quality holistic
                  education, to prepare the students into globally
                  competitive, employable and responsivle citizens
                  tomorrow. KACC is committed to becoming a centre of
                  academic excellence.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setVisionExpanded((v) => !v)}
                  className="mt-4 border-college-navy text-college-navy hover:bg-college-navy hover:text-white"
                >
                  {visionExpanded ? "Read Less" : "Read More"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl h-full">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-college-burgundy to-college-sage rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-college-navy mb-4 text-center">
                  Our Mission
                </h3>
                <p className={`text-muted-foreground leading-relaxed text-center ${missionExpanded ? "" : "line-clamp-4"}`}>
                  Our mission is to create and acquire relevant
                  knowledge along with skills and global competencies
                  and disseminate the same among students. The college
                  fosters holistic education through relevant
                  curriculum, programmes and pedagogic innovations with
                  focus on employability and self-employment.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMissionExpanded((v) => !v)}
                  className="mt-4 border-college-navy text-college-navy hover:bg-college-navy hover:text-white"
                >
                  {missionExpanded ? "Read Less" : "Read More"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* From the Desk Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-college-navy mb-4">
              From the Desk
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Messages from our distinguished leadership team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((p) => (
              <LeadershipCard
                key={p.name}
                name={p.name}
                role={p.role}
                imageUrl={p.imageUrl}
                quote={p.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-college-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Important Links
            </h2>
            <p className="text-xl text-gray-200">
              Quick access to essential information and services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <a href="/admissions" className="group">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Admissions</h3>
                </CardContent>
              </Card>
            </a>

            <a href="/brochure" className="group">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6 text-college-navy" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Brochure</h3>
                </CardContent>
              </Card>
            </a>

            <a href="/placements" className="group">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-college-navy" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Placements</h3>
                </CardContent>
              </Card>
            </a>

            <a href="/results" className="group">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Results</h3>
                </CardContent>
              </Card>
            </a>

            <a href="/scholarships" className="group">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Scholarships</h3>
                </CardContent>
              </Card>
            </a>

            <a href="/library" className="group">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-college-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Library</h3>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-college-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-college-navy mb-4">
              Why Choose KACC?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience excellence in education with our world-class facilities, 
              distinguished faculty, and commitment to holistic development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-college-navy to-college-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-college-navy mb-4">
                  Academic Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recognized for outstanding academic performance and innovative 
                  teaching methodologies that prepare students for global challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-college-gold to-college-sage rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-college-navy mb-4">
                  Expert Faculty
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn from distinguished professors and industry experts who bring 
                  real-world experience and cutting-edge research to the classroom.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-college-burgundy to-college-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-college-navy mb-4">
                  Modern Infrastructure
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  State-of-the-art facilities including smart classrooms, research labs, 
                  library, and recreational amenities for comprehensive learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-college-navy mb-4">
              Academic Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of undergraduate and postgraduate 
              programs designed to shape future leaders and innovators.
            </p>
          </div>
          
          <Tabs defaultValue="Science" className="w-full">
            <TabsList className="mx-auto mb-10 bg-college-cream text-college-navy">
              {Object.keys(faculties).map((fac) => (
                <TabsTrigger
                  key={fac}
                  value={fac}
                  className="data-[state=active]:bg-college-gold data-[state=active]:text-college-navy"
                >
                  {fac}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(faculties).map(([fac, progs]) => (
              <TabsContent key={fac} value={fac}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {progs.map((prog, idx) => (
                    <Card key={idx} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-0">
                        <div
                          className="relative h-36 overflow-hidden rounded-t-lg"
                          style={{
                            backgroundImage: `url('${prog.imageUrl || fallbackImage}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                          <h3 className="absolute bottom-3 left-4 right-4 text-lg font-serif font-bold text-white">
                            {prog.name}
                          </h3>
                        </div>
                        <div className="p-6 space-y-2">
                          <p className="text-sm text-muted-foreground"><span className="font-semibold text-college-navy">Eligibility:</span> {prog.eligibility}</p>
                          <p className="text-sm text-muted-foreground"><span className="font-semibold text-college-navy">Duration:</span> {prog.duration}</p>
                          <p className="text-sm text-muted-foreground"><span className="font-semibold text-college-navy">Details:</span></p>
                          <Button variant="outline" className="w-full mt-2 border-college-navy text-college-navy hover:bg-college-navy hover:text-white">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-20 bg-gradient-to-br from-college-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-college-navy">
                Vibrant Campus Life
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience a dynamic campus environment that fosters personal growth, 
                cultural diversity, and lifelong friendships through various clubs, 
                societies, and extracurricular activities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-college-gold rounded-full flex items-center justify-center">
                    <span className="text-college-navy font-bold text-sm">✓</span>
                  </div>
                  <span className="text-college-navy font-medium">Student Clubs & Societies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-college-gold rounded-full flex items-center justify-center">
                    <span className="text-college-navy font-bold text-sm">✓</span>
                  </div>
                  <span className="text-college-navy font-medium">Sports & Recreation Facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-college-gold rounded-full flex items-center justify-center">
                    <span className="text-college-navy font-bold text-sm">✓</span>
                  </div>
                  <span className="text-college-navy font-medium">Cultural Events & Festivals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-college-gold rounded-full flex items-center justify-center">
                    <span className="text-college-navy font-bold text-sm">✓</span>
                  </div>
                  <span className="text-college-navy font-medium">Career Development Programs</span>
                </div>
              </div>
              
              <Button className="bg-college-navy hover:bg-college-navy/90 text-white font-semibold">
                Explore Campus Life
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-college-navy to-college-burgundy rounded-lg p-6 flex items-end">
                  <div className="text-white">
                    <h4 className="font-semibold">Library</h4>
                    <p className="text-sm opacity-90">50,000+ Books</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-br from-college-gold to-college-sage rounded-lg p-4 flex items-end">
                  <div className="text-white">
                    <h4 className="font-semibold">Sports Complex</h4>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 bg-gradient-to-br from-college-burgundy to-college-navy rounded-lg p-4 flex items-end">
                  <div className="text-white">
                    <h4 className="font-semibold">Labs</h4>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-college-sage to-college-gold rounded-lg p-6 flex items-end">
                  <div className="text-white">
                    <h4 className="font-semibold">Auditorium</h4>
                    <p className="text-sm opacity-90">500+ Seating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-college-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of successful alumni who started their journey at KACC.
            Take the first step towards a bright future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-college-gold hover:bg-college-gold/90 text-college-navy font-semibold text-lg px-8 py-4 h-auto"
            >
              Apply for Admission
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-college-navy hover:bg-white/90 font-semibold text-lg px-8 py-4 h-auto"
            >
              <a href="/brochure">Download Brochure</a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700">
            <div className="text-center">
              <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-college-navy" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Campus</h3>
              <p className="text-gray-300">Katni, Madhya Pradesh</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-college-navy" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+91 761 XXX XXXX</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-college-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-college-navy" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">info@kacckatni.org</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

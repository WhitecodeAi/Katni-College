import { ChevronRight, ChevronLeft, Users, BookOpen, Award, MapPin, Phone, Mail, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import NewsSection from "@/components/NewsSection";

export default function Index() {
  const slideImage = 'https://cdn.builder.io/api/v1/image/assets%2Fea72e649953d477dac6701b6dc53a600%2Fdd7883b2dc6f4ddea6e4780d8396b2eb?format=webp&width=800';

  const nextSlide = () => {
    // Arrows are visible but do nothing since it's the same slide
  };

  const prevSlide = () => {
    // Arrows are visible but do nothing since it's the same slide
  };

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
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-college-navy to-college-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-college-navy mb-4 text-center">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To be a premier autonomous institution of higher learning that fosters
                  intellectual growth, innovation, and social responsibility, preparing
                  global citizens who contribute meaningfully to society and lead with
                  integrity and wisdom.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-college-burgundy to-college-sage rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-college-navy mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To provide quality education through innovative teaching methodologies,
                  research excellence, and holistic development programs. We are committed
                  to nurturing critical thinking, ethical values, and lifelong learning
                  while serving the educational needs of our community.
                </p>
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
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F19009a265873491e8d25a2fc6b43dc4d%2Fe1ced84cd4a14c70b19921fc1f7614e7?format=webp&width=800" alt="Secretary" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-college-gold rounded-full flex items-center justify-center">
                    <svg className="h-4 w-4 text-college-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-college-navy mb-2">
                  Dr. Rajesh Sharma
                </h3>
                <p className="text-college-gold font-medium mb-3">Secretary</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Education is the foundation of progress. At KACC, we strive to build strong foundations for our students' future."
                </p>
                <Button variant="outline" size="sm" className="mt-4 text-college-navy border-college-navy hover:bg-college-navy hover:text-white">
                  Read Message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-college-burgundy to-college-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl font-serif">C</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-college-gold rounded-full flex items-center justify-center">
                    <svg className="h-4 w-4 text-college-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-college-navy mb-2">
                  Shri Amit Verma
                </h3>
                <p className="text-college-gold font-medium mb-3">Chairperson</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Our commitment to excellence drives us to continuously evolve and provide world-class education to our students."
                </p>
                <Button variant="outline" size="sm" className="mt-4 text-college-navy border-college-navy hover:bg-college-navy hover:text-white">
                  Read Message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-college-sage to-college-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl font-serif">P</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-college-gold rounded-full flex items-center justify-center">
                    <svg className="h-4 w-4 text-college-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-college-navy mb-2">
                  Dr. Priya Agarwal
                </h3>
                <p className="text-college-gold font-medium mb-3">Principal</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Knowledge is power, and we empower our students with the tools they need to succeed in an ever-changing world."
                </p>
                <Button variant="outline" size="sm" className="mt-4 text-college-navy border-college-navy hover:bg-college-navy hover:text-white">
                  Read Message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-college-gold to-college-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl font-serif">V</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-college-gold rounded-full flex items-center justify-center">
                    <svg className="h-4 w-4 text-college-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-college-navy mb-2">
                  Prof. Suresh Kumar
                </h3>
                <p className="text-college-gold font-medium mb-3">Vice Principal</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Innovation in education is key to preparing students for tomorrow's challenges and opportunities."
                </p>
                <Button variant="outline" size="sm" className="mt-4 text-college-navy border-college-navy hover:bg-college-navy hover:text-white">
                  Read Message
                </Button>
              </CardContent>
            </Card>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Arts & Humanities",
                description: "Literature, History, Philosophy, Languages",
                programs: ["B.A.", "M.A.", "Ph.D."],
                color: "from-college-navy to-college-burgundy"
              },
              {
                title: "Science & Technology",
                description: "Physics, Chemistry, Mathematics, Computer Science",
                programs: ["B.Sc.", "M.Sc.", "Ph.D."],
                color: "from-college-gold to-college-sage"
              },
              {
                title: "Commerce & Management",
                description: "Accounting, Economics, Business Administration",
                programs: ["B.Com.", "M.Com.", "MBA"],
                color: "from-college-burgundy to-college-navy"
              },
              {
                title: "Law",
                description: "Constitutional Law, Corporate Law, Criminal Law",
                programs: ["LL.B.", "LL.M.", "Ph.D."],
                color: "from-college-sage to-college-gold"
              },
              {
                title: "Social Sciences",
                description: "Sociology, Psychology, Political Science",
                programs: ["B.A.", "M.A.", "Ph.D."],
                color: "from-college-navy to-college-gold"
              },
              {
                title: "Education",
                description: "Teaching Methodology, Educational Psychology",
                programs: ["B.Ed.", "M.Ed.", "Ph.D."],
                color: "from-college-burgundy to-college-sage"
              }
            ].map((program, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                    <h3 className="text-xl font-serif font-bold text-white text-center px-4">
                      {program.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-college-navy">Programs:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.programs.map((prog, idx) => (
                          <span key={idx} className="px-3 py-1 bg-college-cream text-college-navy text-sm rounded-full font-medium">
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4 border-college-navy text-college-navy hover:bg-college-navy hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-college-navy font-semibold text-lg px-8 py-4 h-auto"
            >
              Download Brochure
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

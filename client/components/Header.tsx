import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Contact Strip with Premium Styling */}
      <div className="bg-gradient-to-r from-college-navy via-college-charcoal to-college-navy text-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20l10-10v20zM10 10l10 10-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-12 text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-college-gold/20 rounded-full flex items-center justify-center group-hover:bg-college-gold/30 transition-colors">
                  <Mail size={14} className="text-college-gold" />
                </div>
                <span className="group-hover:text-college-gold transition-colors">info@kacckatni.org</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-college-gold/20 rounded-full flex items-center justify-center group-hover:bg-college-gold/30 transition-colors">
                  <Phone size={14} className="text-college-gold" />
                </div>
                <span className="group-hover:text-college-gold transition-colors">+91 761 XXX XXXX</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/alumni" className="hover:text-college-gold transition-colors text-xs font-medium">
                ALUMNI
              </a>
              <a href="/placements" className="hover:text-college-gold transition-colors text-xs font-medium">
                PLACEMENTS
              </a>
              <a href="/iqac" className="hover:text-college-gold transition-colors text-xs font-medium">
                IQAC
              </a>
              <a href="/nirf" className="hover:text-college-gold transition-colors text-xs font-medium">
                NIRF
              </a>
              <a href="/careers" className="hover:text-college-gold transition-colors text-xs font-medium">
                CAREERS
              </a>
              <a href="/contact" className="hover:text-college-gold transition-colors text-xs font-medium">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Logo - Premium Styling */}
      <div className="bg-gradient-to-r from-white via-slate-50 to-white border-b-2 border-college-gold/20 shadow-sm relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-college-gold via-college-navy to-college-burgundy"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-24">
            {/* Logo Section */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fea72e649953d477dac6701b6dc53a600%2F10cb8204488f429689218f0526b4368d?format=webp&width=800"
                  alt="KACC Logo"
                  className="w-17 h-17 object-contain" style={{width:'112px'}}
                />
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <h1 className="text-2xl font-serif font-bold text-college-navy tracking-tight leading-tight">
                  KATNI ARTS & COMMERCE COLLEGE
                </h1>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-0.5 bg-yellow-400"></div>
                  <p className="text-sm text-college-charcoal font-medium">
                    Near Railway Station, Katni - 483501, MP, India
                  </p>
                  <div className="w-6 h-0.5 bg-yellow-400"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Search and Mobile Menu */}
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-3">
                <div className="relative">
                  <Input
                    placeholder="Search programs, faculty..."
                    className="w-64 h-11 text-sm border-2 border-college-cream focus:border-college-gold rounded-xl pl-4 pr-12 shadow-sm focus:shadow-md transition-all"
                  />
                  <Button size="sm" className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-college-gold to-college-bronze hover:from-college-bronze hover:to-college-gold rounded-lg px-3">
                    <Search size={16} className="text-white" />
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block w-px h-8 bg-college-cream"></div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 text-college-navy hover:text-college-gold transition-all duration-300 rounded-lg hover:bg-college-cream/50"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-college-cream">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="flex space-x-2 mb-4">
              <Input placeholder="Search..." className="flex-1 h-9 text-sm" />
              <Button size="sm" className="bg-college-navy hover:bg-college-navy/90 h-9">
                <Search size={16} />
              </Button>
            </div>
            
            {/* Primary Menu */}
            <div className="space-y-3">
              <p className="font-semibold text-college-navy text-sm">MAIN MENU</p>
              <a href="/" className="block bg-college-navy text-white px-3 py-1 rounded text-sm w-fit">Home</a>
              <a href="/about" className="block text-college-navy hover:text-college-gold transition-colors text-sm">About</a>
              <a href="/admissions" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Admissions</a>
              <a href="/academics" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Academics</a>
              <a href="/programs" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Programs</a>
              <a href="/departments" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Departments</a>
              <a href="/research" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Research</a>
              <a href="/students" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Students</a>
              <a href="/facilities" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Facilities</a>
              <a href="/e-tenders" className="block text-college-navy hover:text-college-gold transition-colors text-sm">E-Tenders</a>
              <a href="/publications" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Publications</a>
            </div>

            {/* Services & Quick Access */}
            <div className="space-y-3 pt-4 border-t border-college-cream">
              <p className="font-semibold text-college-navy text-sm">SERVICES & QUICK ACCESS</p>
              <a href="/incubation" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Incubation Center</a>
              <a href="/support-services" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Support Services</a>
              <a href="/careers" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Careers</a>
              <a href="/alumni" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Alumni</a>
              <a href="/e-content" className="block text-college-navy hover:text-college-gold transition-colors text-sm">E Content</a>
              <a href="/iqac" className="block text-college-navy hover:text-college-gold transition-colors text-sm">IQAC</a>
              <a href="/placements" className="block text-college-navy hover:text-college-gold transition-colors text-sm">Placements</a>
              <a href="/nirf" className="block text-college-navy hover:text-college-gold transition-colors text-sm">NIRF</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

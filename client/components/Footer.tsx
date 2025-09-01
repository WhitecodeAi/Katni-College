import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-college-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fea72e649953d477dac6701b6dc53a600%2F10cb8204488f429689218f0526b4368d?format=webp&width=800"
                alt="KACC Logo"
                className="w-10 h-10 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">Katni Arts & Commerce College</h3>
                <p className="text-college-gold text-sm">KACC</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering minds, shaping futures. A premier autonomous institution 
              committed to academic excellence and holistic development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-college-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-college-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-college-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-college-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-college-gold">Quick Links</h3>
            <nav className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </a>
              <a href="/programs" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Academic Programs
              </a>
              <a href="/admissions" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Admissions
              </a>
              <a href="/faculty" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Faculty
              </a>
              <a href="/campus-life" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Campus Life
              </a>
              <a href="/research" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Research
              </a>
            </nav>
          </div>

          {/* Student Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-college-gold">Student Resources</h3>
            <nav className="space-y-2">
              <a href="/library" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Library
              </a>
              <a href="/portal" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Student Portal
              </a>
              <a href="/placements" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Placements
              </a>
              <a href="/scholarships" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Scholarships
              </a>
              <a href="/events" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Events
              </a>
              <a href="/alumni" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Alumni
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-college-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-college-gold mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Saraswati School Road</p>
                  <p>Nai Basti, Madhya Pradesh,</p>
                  <p>India - 483501</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-college-gold flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+91 761 XXX XXXX</p>
                  <p>+91 761 XXX XXXY</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-college-gold flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>info@kacckatni.org</p>
                  <p>admissions@kacckatni.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Katni Arts & Commerce College (KACC). All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/accessibility" className="text-sm text-gray-400 hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

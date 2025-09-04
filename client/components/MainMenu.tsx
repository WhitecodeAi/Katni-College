export default function MainMenu() {
  return (
    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-b border-college-navy/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden lg:flex items-center h-12 space-x-8">
          <a href="/" className="bg-college-navy text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-college-navy/90 transition-all">
            HOME
          </a>
          <a href="/about" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            ABOUT
          </a>
          <a href="/admissions" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            ADMISSIONS
          </a>
          <a href="/academics" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            ACADEMICS
          </a>
          <a href="/programs" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            PROGRAMS
          </a>
          <a href="/departments" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            DEPARTMENTS
          </a>
          <a href="/research" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            RESEARCH
          </a>
          <a href="/students" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            STUDENTS
          </a>
          <a href="/facilities" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            FACILITIES
          </a>
          <a href="/e-tenders" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            E-TENDERS
          </a>
          <a href="/publications" className="text-college-navy hover:text-college-gold transition-colors font-medium text-sm">
            PUBLICATIONS
          </a>
        </nav>
      </div>
    </div>
  );
}

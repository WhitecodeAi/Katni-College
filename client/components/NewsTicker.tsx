export default function NewsTicker() {
  return (
    <div className="bg-white border-b border-college-cream overflow-hidden">
      <div className="flex items-center h-10">
        <div className="bg-college-navy text-white px-4 text-xs font-bold flex-shrink-0 h-full flex items-center">
          LATEST NEWS
        </div>
        <div className="flex-1 relative overflow-hidden h-full">
          <div className="animate-marquee whitespace-nowrap flex items-center h-full py-2">
            <span className="text-college-navy text-sm px-6">
              • Winter Semester Examination Schedule Released - Check Student Portal
            </span>
            <span className="text-college-navy text-sm px-6">
              • Admission Process for Academic Year 2024-25 Now Open - Apply Online
            </span>
            <span className="text-college-navy text-sm px-6">
              �� Notice for Walk in Interview for Hindi Guest Faculty - 18 Dec 2024
            </span>
            <span className="text-college-navy text-sm px-6">
              • Annual Cultural Festival Kalakriti 2024 - 20-22 December
            </span>
            <span className="text-college-navy text-sm px-6">
              • Scholarship Application Forms Available - Download from Website
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

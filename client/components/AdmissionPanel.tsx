import { useState } from "react";
import { ChevronUp, ChevronDown, Calendar, FileText, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionPanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Collapsed State */}
      {!isExpanded && (
        <div 
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-college-navy to-college-burgundy text-white p-4 rounded-2xl shadow-2xl cursor-pointer hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-xs"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Admissions Open!</h3>
              <p className="text-college-gold text-sm">Click to learn more</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-college-gold rounded-full animate-pulse"></div>
              <ChevronUp className="h-5 w-5 text-college-gold" />
            </div>
          </div>
        </div>
      )}

      {/* Expanded State */}
      {isExpanded && (
        <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-80 overflow-hidden border-2 border-college-gold/20 transform transition-all duration-500 ease-out">
          {/* Premium Header */}
          <div className="bg-gradient-to-r from-college-navy to-college-burgundy p-6 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-college-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Admission Information
                </h3>
                <p className="text-college-gold font-medium">Academic Year 2024-25</p>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-white hover:text-college-gold transition-colors p-1"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-college-cream/50 rounded-xl hover:bg-college-cream/70 transition-colors">
                <div className="w-10 h-10 bg-college-gold rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-college-navy">Admissions Open</p>
                  <p className="text-sm text-college-charcoal">Applications being accepted</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-college-cream/50 rounded-xl hover:bg-college-cream/70 transition-colors">
                <div className="w-10 h-10 bg-college-navy rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-college-navy">Online Portal</p>
                  <p className="text-sm text-college-charcoal">Apply digitally with ease</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-college-cream/50 rounded-xl hover:bg-college-cream/70 transition-colors">
                <div className="w-10 h-10 bg-college-burgundy rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-college-navy">Merit Scholarships</p>
                  <p className="text-sm text-college-charcoal">Financial aid available</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-college-gold to-college-bronze hover:from-college-bronze hover:to-college-gold text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Complete Admission Guide
            </Button>
            
            <div className="text-center pt-4 border-t border-college-platinum">
              <p className="text-xs text-college-charcoal">
                🏆 Ranked among top colleges in Madhya Pradesh
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

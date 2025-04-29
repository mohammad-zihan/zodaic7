import { Moon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#4A148C] bg-opacity-50 py-8 mt-8 border-t border-[#FFD700] border-opacity-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-[#FFD700] text-xl font-bold flex items-center">
              <Moon className="mr-2 h-5 w-5" />
              Celestial Earnings
            </h3>
            <p className="text-white text-sm mt-2">Unlock your financial destiny through the stars</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="text-white hover:text-[#FFD700] transition duration-300">Privacy Policy</a>
            <a href="#" className="text-white hover:text-[#FFD700] transition duration-300">Terms of Service</a>
            <a href="#" className="text-white hover:text-[#FFD700] transition duration-300">Contact Us</a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white border-opacity-10 text-center">
          <p className="text-white text-sm">&copy; {new Date().getFullYear()} Celestial Earnings. All rights reserved.</p>
          <p className="text-white text-xs mt-1">Disclaimer: Results are for entertainment purposes only.</p>
        </div>
      </div>
    </footer>
  );
}

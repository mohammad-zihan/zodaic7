import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';

export default function ZodiacSigns() {
  const { data: zodiacSigns, isLoading, error } = useQuery({
    queryKey: ['/api/zodiac-signs'],
  });

  // Display only visible set of signs by default
  const [visibleSigns, setVisibleSigns] = useState([]);
  const [showAllSigns, setShowAllSigns] = useState(false);

  useEffect(() => {
    if (zodiacSigns) {
      // By default, show only first 4 signs
      setVisibleSigns(showAllSigns ? zodiacSigns : zodiacSigns.slice(0, 4));
    }
  }, [zodiacSigns, showAllSigns]);

  if (error) {
    return (
      <section id="zodiac" className="relative z-10 py-12 px-4 bg-white bg-opacity-5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Explore Zodiac Prosperity Profiles</h2>
          <div className="text-center text-red-400">
            Failed to load zodiac signs. Please try refreshing the page.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="zodiac" className="relative z-10 py-12 px-4 bg-white bg-opacity-5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Explore Zodiac Prosperity Profiles</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {isLoading ? (
            // Show skeleton loading UI
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-[#4A148C] to-[#1A237E] p-4">
                  <Skeleton className="w-16 h-16 mx-auto rounded-full" />
                  <Skeleton className="h-5 w-24 mx-auto mt-2" />
                  <Skeleton className="h-4 w-20 mx-auto mt-2" />
                </div>
                <div className="p-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-3/4 mt-2" />
                </div>
              </div>
            ))
          ) : (
            visibleSigns.map((sign) => (
              <div key={sign.id} className="zodiac-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 text-center">
                <div className="bg-gradient-to-r from-[#4A148C] to-[#1A237E] p-4">
                  <img 
                    src={sign.image} 
                    alt={sign.sign} 
                    className="w-16 h-16 mx-auto rounded-full object-cover border-2 border-[#FFD700]"
                  />
                  <h3 className="text-white font-bold mt-2">{sign.sign}</h3>
                  <p className="text-white text-sm">{sign.dates}</p>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-[#212121]">
                    Earning potential: ${sign.potentialRangeLow.toLocaleString()} - ${sign.potentialRangeHigh.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">{sign.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
        
        {zodiacSigns && zodiacSigns.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllSigns(!showAllSigns)}
              className="inline-block bg-[#FFD700] text-[#212121] font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              {showAllSigns ? 'Show Less' : 'Show All Zodiac Signs'}
            </button>
          </div>
        )}
        
        <div className="text-center mt-10">
          <a href="#calculator" className="inline-block bg-[#FFD700] text-[#212121] font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
            Calculate Your Potential
          </a>
        </div>
      </div>
    </section>
  );
}

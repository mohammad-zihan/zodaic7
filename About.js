import { Star, Coins, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">How Celestial Forces Impact Your Finances</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20 transform transition duration-300 hover:scale-105">
            <div className="text-[#FFD700] text-3xl mb-4">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cosmic Influence</h3>
            <p className="text-white opacity-90">The alignment of planets at your birth shapes your financial traits and earning potential throughout your lifetime.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20 transform transition duration-300 hover:scale-105">
            <div className="text-[#FFD700] text-3xl mb-4">
              <Coins className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Financial Destiny</h3>
            <p className="text-white opacity-90">Each zodiac sign carries unique financial strengths, weaknesses, and opportunities that influence your wealth journey.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20 transform transition duration-300 hover:scale-105">
            <div className="text-[#FFD700] text-3xl mb-4">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Prosperity Insights</h3>
            <p className="text-white opacity-90">Understanding your astrological profile empowers you to make financial decisions aligned with your cosmic blueprint.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

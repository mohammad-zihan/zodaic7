import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Calendar, WandSparkles } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import SharingCard from './SharingCard';

export default function BirthdateCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();
  
  const { mutate, data: result, isPending } = useMutation({
    mutationFn: async () => {
      if (!birthdate) {
        throw new Error('Birthdate is required');
      }
      
      const response = await apiRequest('POST', '/api/calculate-earnings', {
        birthdate,
        name
      });
      
      return response.json();
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to calculate your cosmic earnings potential',
        variant: 'destructive'
      });
    }
  });

  const handleCalculate = () => {
    if (!birthdate) {
      toast({
        title: 'Missing Information',
        description: 'Please enter your birthdate to reveal your cosmic earnings potential',
        variant: 'destructive'
      });
      return;
    }
    
    mutate();
  };

  return (
    <section id="calculator" className="relative z-10 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 md:p-10 border border-white border-opacity-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Calculate Your Cosmic Earning Potential</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <Label htmlFor="birthdate" className="block text-white mb-2 font-medium">Enter Your Birthdate</Label>
                <div className="relative">
                  <Input 
                    type="date" 
                    id="birthdate" 
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    className="input-field w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white bg-opacity-10 border-white border-opacity-20"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="name" className="block text-white mb-2 font-medium">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name" 
                  className="input-field w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white bg-opacity-10 border-white border-opacity-20"
                />
              </div>
              
              <Button
                onClick={handleCalculate}
                disabled={isPending || !birthdate}
                className="w-full bg-[#FFD700] text-[#212121] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg flex items-center justify-center"
              >
                <WandSparkles className="mr-2 h-5 w-5" />
                {isPending ? 'Consulting the Stars...' : 'Reveal My Potential'}
              </Button>
            </div>
            
            <div className={`flex flex-col justify-center items-center ${result ? 'block' : 'hidden'}`}>
              {isPending ? (
                <div className="text-center mb-6">
                  <Skeleton className="w-16 h-16 rounded-full mx-auto" />
                  <Skeleton className="h-6 w-32 mx-auto mt-4" />
                  <Skeleton className="h-8 w-24 mx-auto mt-2" />
                  <Skeleton className="h-4 w-20 mx-auto mt-1" />
                  <Skeleton className="h-5 w-48 mx-auto mt-6" />
                  <Skeleton className="h-8 w-36 mx-auto mt-2" />
                  <Skeleton className="h-4 w-64 mx-auto mt-3" />
                </div>
              ) : result ? (
                <>
                  <div className="text-center mb-6">
                    <div className="bg-[#FFD700] p-4 rounded-full inline-block mb-4">
                      <Star className="text-[#4A148C] h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Your Zodiac Sign</h3>
                    <p className="text-3xl text-[#FFD700] font-bold mt-2">{result.zodiacSign}</p>
                    <p className="text-sm text-white mt-1">{result.dates}</p>
                  </div>
                  
                  <div className="text-white text-center">
                    <h4 className="text-xl font-semibold mb-2">Earning Potential</h4>
                    <p className="text-4xl font-bold text-[#FFD700] mb-3">{result.potentialRange}</p>
                    <p className="text-sm">{result.description}</p>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          
          {/* Sharing Card Section */}
          {result && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Share Your Cosmic Fortune</h3>
              <SharingCard result={result} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Star icon component
function Star(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Download, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SharingCard({ result }) {
  const cardRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  const siteUrl = window.location.origin;

  const handleDownload = async () => {
    if (!cardRef.current) return;
    
    try {
      setIsDownloading(true);
      
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `cosmic-earnings-${result.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.click();
      
      toast({
        title: 'Success',
        description: 'Your cosmic earnings card has been downloaded!'
      });
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: 'Download Failed',
        description: 'Unable to generate your cosmic earnings card',
        variant: 'destructive'
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = (platform) => {
    let shareUrl = '';
    const text = `I discovered my cosmic earning potential is ${result.potentialRange} as a ${result.zodiacSign}! Find yours at:`;
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}&quote=${encodeURIComponent(text)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(siteUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}&title=${encodeURIComponent('Cosmic Earnings')}&summary=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${siteUrl}`)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: 'My Cosmic Earnings Potential',
            text,
            url: siteUrl
          }).catch(console.error);
          return;
        } else {
          // Fallback if Web Share API is not available
          navigator.clipboard.writeText(`${text} ${siteUrl}`);
          toast({
            title: 'Link Copied',
            description: 'Share link copied to clipboard'
          });
          return;
        }
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="max-w-md mx-auto">
      <div 
        ref={cardRef} 
        className="rounded-xl overflow-hidden border-2 border-[#FFD700] shadow-2xl"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-black bg-opacity-70 p-6">
          <div className="text-center mb-4">
            <h4 className="text-[#FFD700] text-xl font-bold">Cosmic Earning Potential</h4>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-white text-sm">Financial Destiny For:</p>
            <p className="text-2xl font-bold text-[#FFD700]">{result.name}</p>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col items-center">
              <img 
                src={result.image} 
                alt={result.zodiacSign} 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#FFD700]"
              />
              <p className="text-white mt-2 font-medium">{result.zodiacSign}</p>
            </div>
            
            <div className="text-right">
              <p className="text-white text-sm">Earning Potential:</p>
              <p className="text-3xl font-bold text-[#FFD700]">{result.potentialRange}</p>
            </div>
          </div>
          
          <div className="text-center text-white text-xs">
            <p>Discover your cosmic earning potential at</p>
            <p className="text-[#FFD700]">{window.location.host}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-[#4A148C] text-white font-medium py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
        >
          <Download className="mr-2 h-5 w-5" />
          {isDownloading ? 'Generating...' : 'Download'}
        </Button>
        
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => handleShare('facebook')}
            size="icon"
            className="bg-[#1877F2] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300"
          >
            <Facebook className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => handleShare('twitter')}
            size="icon"
            className="bg-[#1DA1F2] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300"
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => handleShare('linkedin')}
            size="icon"
            className="bg-[#0A66C2] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => handleShare('default')}
            size="icon"
            className="bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
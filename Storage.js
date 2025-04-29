// modify the interface with any CRUD methods
// you might need

export class MemStorage {
  constructor() {
    this.users = new Map();
    this.currentId = 1;
    this.zodiacSigns = [
      {
        id: 1,
        sign: 'Aries',
        dates: 'Mar 21 - Apr 19',
        potentialRangeLow: 75000,
        potentialRangeHigh: 120000,
        description: 'Bold risk-takers with entrepreneurial spirit',
        image: 'https://images.unsplash.com/photo-1542809608-f3a94a5a01a0'
      },
      {
        id: 2,
        sign: 'Taurus',
        dates: 'Apr 20 - May 20',
        potentialRangeLow: 70000,
        potentialRangeHigh: 115000,
        description: 'Stable financial planners with investing talent',
        image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511'
      },
      {
        id: 3,
        sign: 'Gemini',
        dates: 'May 21 - Jun 20',
        potentialRangeLow: 65000,
        potentialRangeHigh: 125000,
        description: 'Versatile income streams and communication skills',
        image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9'
      },
      {
        id: 4,
        sign: 'Cancer',
        dates: 'Jun 21 - Jul 22',
        potentialRangeLow: 60000,
        potentialRangeHigh: 110000,
        description: 'Security-focused with excellent saving habits',
        image: 'https://images.unsplash.com/photo-1587588354456-ae376af71a25'
      },
      {
        id: 5,
        sign: 'Leo',
        dates: 'Jul 23 - Aug 22',
        potentialRangeLow: 80000,
        potentialRangeHigh: 140000,
        description: 'Natural leaders with performance-based earning talents',
        image: 'https://images.unsplash.com/photo-1564937726459-8f4c189379f2'
      },
      {
        id: 6,
        sign: 'Virgo',
        dates: 'Aug 23 - Sep 22',
        potentialRangeLow: 65000,
        potentialRangeHigh: 120000,
        description: 'Detail-oriented professionals with analytical skills',
        image: 'https://images.unsplash.com/photo-1555650239-4268f758a4c4'
      },
      {
        id: 7,
        sign: 'Libra',
        dates: 'Sep 23 - Oct 22',
        potentialRangeLow: 85000,
        potentialRangeHigh: 130000,
        description: 'Natural mediators and negotiators with excellent interpersonal skills',
        image: 'https://images.unsplash.com/photo-1593592561899-abd3502ae42c'
      },
      {
        id: 8,
        sign: 'Scorpio',
        dates: 'Oct 23 - Nov 21',
        potentialRangeLow: 90000,
        potentialRangeHigh: 150000,
        description: 'Strategic thinkers with powerful financial intuition',
        image: 'https://images.unsplash.com/photo-1585855268958-2f8c0c707d9a'
      },
      {
        id: 9,
        sign: 'Sagittarius',
        dates: 'Nov 22 - Dec 21',
        potentialRangeLow: 75000,
        potentialRangeHigh: 135000,
        description: 'Opportunity seekers with global earning mindset',
        image: 'https://images.unsplash.com/photo-1599688619779-14732e1d3c41'
      },
      {
        id: 10,
        sign: 'Capricorn',
        dates: 'Dec 22 - Jan 19',
        potentialRangeLow: 95000,
        potentialRangeHigh: 160000,
        description: 'Disciplined achievers with long-term wealth focus',
        image: 'https://images.unsplash.com/photo-1595586264778-b9b957578ac8'
      },
      {
        id: 11,
        sign: 'Aquarius',
        dates: 'Jan 20 - Feb 18',
        potentialRangeLow: 70000,
        potentialRangeHigh: 140000,
        description: 'Innovative thinkers with technology-based earning paths',
        image: 'https://images.unsplash.com/photo-1599426247374-f676a58118ce'
      },
      {
        id: 12,
        sign: 'Pisces',
        dates: 'Feb 19 - Mar 20',
        potentialRangeLow: 60000,
        potentialRangeHigh: 115000,
        description: 'Creative souls with artistic and healing income sources',
        image: 'https://images.unsplash.com/photo-1589282278655-38e71419421d'
      }
    ];
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  getAllZodiacSigns() {
    return this.zodiacSigns;
  }

  getZodiacBySign(sign) {
    return this.zodiacSigns.find(zodiac => 
      zodiac.sign.toLowerCase() === sign.toLowerCase()
    );
  }

  getZodiacByDate(date) {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1; // January is 0
    const day = dateObj.getDate();

    // Determine zodiac sign based on date
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return this.getZodiacBySign('Aries');
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return this.getZodiacBySign('Taurus');
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return this.getZodiacBySign('Gemini');
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return this.getZodiacBySign('Cancer');
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return this.getZodiacBySign('Leo');
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return this.getZodiacBySign('Virgo');
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return this.getZodiacBySign('Libra');
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return this.getZodiacBySign('Scorpio');
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return this.getZodiacBySign('Sagittarius');
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return this.getZodiacBySign('Capricorn');
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return this.getZodiacBySign('Aquarius');
    return this.getZodiacBySign('Pisces'); // Feb 19 - Mar 20
  }

  calculateEarningPotential(birthdate, name) {
    const zodiacSign = this.getZodiacByDate(birthdate);
    
    if (!zodiacSign) {
      throw new Error('Invalid birthdate provided');
    }

    return {
      name: name || 'Cosmic Explorer',
      zodiacSign: zodiacSign.sign,
      dates: zodiacSign.dates,
      potentialRange: `$${zodiacSign.potentialRangeLow.toLocaleString()} - $${zodiacSign.potentialRangeHigh.toLocaleString()}`,
      description: zodiacSign.description,
      image: zodiacSign.image
    };
  }
}

export const storage = new MemStorage();

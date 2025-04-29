import { createServer } from "http";
import { storage } from "./storage";
import fs from 'fs';
import path from 'path';

export async function registerRoutes(app) {
  // Create empty ads.txt file for Google AdSense
  const adsPath = path.join(process.cwd(), 'public', 'ads.txt');
  if (!fs.existsSync(path.dirname(adsPath))) {
    fs.mkdirSync(path.dirname(adsPath), { recursive: true });
  }
  
  // Create empty ads.txt file if it doesn't exist
  if (!fs.existsSync(adsPath)) {
    fs.writeFileSync(adsPath, '');
  }

  // API endpoints
  app.get('/api/zodiac-signs', (_req, res) => {
    res.json(storage.getAllZodiacSigns());
  });

  app.get('/api/zodiac/:sign', (req, res) => {
    const sign = req.params.sign;
    const zodiacSign = storage.getZodiacBySign(sign);
    
    if (!zodiacSign) {
      return res.status(404).json({ message: `Zodiac sign ${sign} not found` });
    }
    
    res.json(zodiacSign);
  });

  app.post('/api/calculate-earnings', (req, res) => {
    const { birthdate, name } = req.body;
    
    if (!birthdate) {
      return res.status(400).json({ message: 'Birthdate is required' });
    }
    
    const result = storage.calculateEarningPotential(birthdate, name || '');
    res.json(result);
  });

  const httpServer = createServer(app);
  return httpServer;
}
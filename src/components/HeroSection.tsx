import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-recycling.jpg";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export const HeroSection = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional scrap collection and recycling services" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t('hero.title')}
          <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
            {t('hero.subtitle')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('pricing')}
            className="text-lg px-8 py-4 h-auto"
          >
            {t('hero.checkPrices')}
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => scrollToSection('booking')}
            className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/90"
          >
            {t('hero.bookService')}
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-sm opacity-80">{t('hero.stats.customers').replace('50K+ ', '')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-80">{t('hero.stats.service').replace('24/7 ', '')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-80">{t('hero.stats.pricing').replace('100% ', '')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

export const PricingSection = () => {
  const { t } = useTranslation();
  const priceData = [
    {
      category: "Paper & Cardboard",
      items: [
        { name: "Newspaper", price: "₹10-12", unit: "per kg", trending: true },
        { name: "Books / Magazines", price: "₹8-12", unit: "per kg" },
        { name: "Cardboard", price: "₹6-10", unit: "per kg" },
        { name: "Office Paper", price: "₹10-14", unit: "per kg" },
      ],
      icon: "📰"
    },
    {
      category: "Plastic Materials",
      items: [
        { name: "Plastic Bottles", price: "₹15-20", unit: "per kg", trending: true },
        { name: "Plastic Bags", price: "₹8-12", unit: "per kg" },
        { name: "Hard Plastic", price: "₹12-18", unit: "per kg" },
        { name: "PET Bottles", price: "₹15-20", unit: "per kg" },
      ],
      icon: "♻️"
    },
    {
      category: "Metal Scrap",
      items: [
        { name: "Aluminum", price: "₹120-150", unit: "per kg", trending: true },
        { name: "Copper", price: "₹400-450", unit: "per kg" },
        { name: "Iron/Steel", price: "₹25-30", unit: "per kg" },
        { name: "Brass", price: "₹280-320", unit: "per kg" },
      ],
      icon: "🔧"
    },
    {
      category: "Electronics & E-Waste",
      items: [
        { name: "Mobile Phones", price: "₹200-2000", unit: "per piece", trending: true },
        { name: "Laptops", price: "₹1000-5000", unit: "per piece" },
        { name: "CRT TVs", price: "₹500-1000", unit: "per piece" },
        { name: "Circuit Boards", price: "₹150-300", unit: "per kg" },
      ],
      icon: "📱"
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          <div className="mt-4">
            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
              {t('pricing.lastUpdated')}: {new Date().toLocaleDateString()}
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {priceData.map((category, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 border-primary/10">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.unit}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-success">{item.price}</div>
                      {item.trending && (
                        <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/30">
                          {t('pricing.trending')}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-blue-700 mb-4 animate-pulse">
              * Prices may vary based on quality and quantity. Minimum pickup: ₹200
            </p>
          <div className="bg-success/10 border border-success/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-success font-medium">
              {t('pricing.bulkDiscount')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
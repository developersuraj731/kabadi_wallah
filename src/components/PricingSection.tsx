import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PricingSection = () => {
  const priceData = [
    {
      category: "Paper & Cardboard",
      items: [
        { name: "Newspaper", price: "₹12-15", unit: "per kg", trending: true },
        { name: "Magazines", price: "₹8-12", unit: "per kg" },
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
        { name: "PET Bottles", price: "₹18-25", unit: "per kg" },
      ],
      icon: "♻️"
    },
    {
      category: "Metal Scrap",
      items: [
        { name: "Aluminum", price: "₹120-150", unit: "per kg", trending: true },
        { name: "Copper", price: "₹400-450", unit: "per kg" },
        { name: "Iron/Steel", price: "₹25-35", unit: "per kg" },
        { name: "Brass", price: "₹280-320", unit: "per kg" },
      ],
      icon: "🔧"
    },
    {
      category: "Electronics",
      items: [
        { name: "Mobile Phones", price: "₹200-2000", unit: "per piece", trending: true },
        { name: "Laptops", price: "₹1000-5000", unit: "per piece" },
        { name: "CRT TVs", price: "₹500-1500", unit: "per piece" },
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
            Today's Market Prices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent and competitive rates for all your scrap materials. Prices updated daily based on market conditions.
          </p>
          <div className="mt-4">
            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
              Last updated: {new Date().toLocaleDateString()}
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
                          Trending
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
          <p className="text-sm text-muted-foreground mb-4">
            * Prices may vary based on quality and quantity. Minimum pickup: 5kg
          </p>
          <div className="bg-success/10 border border-success/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-success font-medium">
              📞 Call for bulk quantities and get better rates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
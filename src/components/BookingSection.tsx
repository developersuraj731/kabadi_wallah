import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';

export const BookingSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: t('booking.toast.title'),
      description: t('booking.toast.description'),
      duration: 5000,
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const scrapTypes = [
    "Paper & Cardboard",
    "Plastic Materials", 
    "Metal Scrap",
    "Electronics",
    "Mixed Items"
  ];

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('booking.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('booking.subtitle')}
          </p>
        </div>

        <Card className="shadow-elegant border-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">{t('booking.cardTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Enter your full name" 
                    required 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    required 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Complete Address *</Label>
                <Textarea 
                  id="address" 
                  name="address"
                  placeholder="Enter your complete address with landmark" 
                  required 
                  className="border-primary/20 focus:border-primary min-h-[80px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="scrapType">Scrap Type *</Label>
                  <Select name="scrapType" required>
                    <SelectTrigger className="border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select scrap type" />
                    </SelectTrigger>
                    <SelectContent>
                      {scrapTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estimatedWeight">Estimated Weight</Label>
                  <Input 
                    id="estimatedWeight" 
                    name="estimatedWeight"
                    placeholder="e.g., 25 kg" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <Input 
                    id="preferredDate" 
                    name="preferredDate"
                    type="date" 
                    required 
                    min={new Date().toISOString().split('T')[0]}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time *</Label>
                  <Select name="preferredTime" required>
                    <SelectTrigger className="border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  name="notes"
                  placeholder="Any special instructions or additional information" 
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the pickup terms and conditions *
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                variant="success"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('booking.form.submitting') : t('booking.form.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-success/10 rounded-lg p-6 border border-success/20">
            <div className="text-2xl mb-2">🚚</div>
            <h3 className="font-semibold mb-2 text-success">{t('booking.features.freePickup')}</h3>
            <p className="text-sm text-muted-foreground">{t('booking.features.freePickupDesc')}</p>
          </div>
          <div className="bg-success/10 rounded-lg p-6 border border-success/20">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2 text-success">{t('booking.features.quickResponse')}</h3>
            <p className="text-sm text-muted-foreground">{t('booking.features.quickResponseDesc')}</p>
          </div>
          <div className="bg-success/10 rounded-lg p-6 border border-success/20">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold mb-2 text-success">{t('booking.features.instantPayment')}</h3>
            <p className="text-sm text-muted-foreground">{t('booking.features.instantPaymentDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
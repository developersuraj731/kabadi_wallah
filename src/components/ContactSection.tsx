import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 border-primary/10">
            <CardHeader>
              <div className="text-4xl mb-4">📞</div>
              <CardTitle className="text-primary">{t('contact.call')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2">+91 95174 68656</p>
              <p className="text-muted-foreground mb-4">Available 24/7</p>
              <Button variant="outline" className="w-full">
                {t('contact.callNow')}
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 border-primary/10">
            <CardHeader>
              <div className="text-4xl mb-4">💬</div>
              <CardTitle className="text-primary">{t('contact.whatsapp')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2">+91 95174 68656</p>
              <p className="text-muted-foreground mb-4">Quick response guaranteed</p>
              <Button variant="success" className="w-full">
                {t('contact.messageUs')}
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 border-primary/10">
            <CardHeader>
              <div className="text-4xl mb-4">📧</div>
              <CardTitle className="text-primary">{t('contact.email')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold mb-2">kabadiwallah01@gmail.com</p>
              <p className="text-muted-foreground mb-4">For business inquiries</p>
              <Button variant="outline" className="w-full">
                {t('contact.sendEmail')}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto shadow-elegant border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t('contact.serviceAreas')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="font-semibold">Ballia</div>
                  <div className="text-sm text-muted-foreground">Free pickup</div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="font-semibold">Mau</div>
                  <div className="text-sm text-muted-foreground">Free pickup</div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="font-semibold">Ghazipur</div>
                  <div className="text-sm text-muted-foreground">Free pickup</div>
                </div>
                {/* <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="font-semibold">Navi Mumbai</div>
                  <div className="text-sm text-muted-foreground">₹50 charge</div>
                </div> */}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Serving Ballia and surrounding areas since 1990. Contact us for locations not listed above.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
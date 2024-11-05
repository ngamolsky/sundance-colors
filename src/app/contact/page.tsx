import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const emailBody = `Hi Rachel,

I'm interested in learning more about your interior design services.

Please let me know your availability for an initial consultation.

Best regards,`;

  return (
    <main className="my-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg mb-8">
              Ready to transform your space? Contact us for color consultation
              and interior design services.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>(530) 300-8844</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a
                  href={`mailto:rachel@sundancecolors.com?subject=Interior Design Services Inquiry&body=${encodeURIComponent(emailBody)}`}
                  className="hover:underline"
                >
                  rachel@sundancecolors.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Grass Valley, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

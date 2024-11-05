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
          <div className="bg-accent-light/10 p-8 rounded-lg shadow-sm border border-accent-light/10">
            <h2 className="text-2xl font-semibold mb-6 text-accent-dark">
              Get in Touch
            </h2>
            <p className="text-lg mb-8 text-secondary">
              Ready to transform your space? Contact us for color consultation
              and interior design services.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary-dark hover:text-accent-dark transition-colors">
                <div className="bg-primary p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <span>(530) 300-8844</span>
              </div>
              <div className="flex items-center gap-4 text-secondary-dark hover:text-accent-dark transition-colors">
                <div className="bg-primary p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href={`mailto:rachel@sundancecolors.com?subject=Interior Design Services Inquiry&body=${encodeURIComponent(emailBody)}`}
                  className="hover:underline"
                >
                  rachel@sundancecolors.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-secondary-dark hover:text-accent-dark transition-colors">
                <div className="bg-primary p-3 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Grass Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-accent-light/10 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-accent-dark">
              Business Hours
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-secondary-dark">Monday - Friday</span>
                <span className="font-medium text-accent">
                  9:00 AM - 5:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary-dark">Saturday</span>
                <span className="font-medium text-accent">By Appointment</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary-dark">Sunday</span>
                <span className="font-medium text-accent">Closed</span>
              </div>
              <div className="mt-8 pt-6 border-t border-accent/20">
                <p className="text-secondary">
                  Available for virtual consultations and in-person meetings by
                  appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

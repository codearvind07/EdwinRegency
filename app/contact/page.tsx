import OptimizedImage from '@/components/OptimizedImage';
import AnimatedSection from '@/components/AnimatedSection';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  // A server action could be used here to handle form submission.
  // For this example, we'll just use a standard form.
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log('Form Submitted:', { name, email, message });
    // Here you would typically send an email or save to a database.
  };

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" 
          alt="Contact us background"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold font-serif">Contact Us</h1>
          <p className="mt-2 text-lg">We would love to hear from you.</p>
        </div>
      </section>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Send us a Message</h2>
            <form action={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-sm hover:bg-yellow-300 transition-colors">Submit Request</button>
              </div>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Get in Touch</h2>
            <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                    <MapPin className="text-brand-gold mt-1 mr-4 flex-shrink-0" />
                    <span>SD-02, Sector 63 A, Noida, <br/>Uttar Pradesh, India</span>
                </p>
                <p className="flex items-center">
                    <Mail className="text-brand-gold mr-4 flex-shrink-0" />
                    <a href="mailto:bookingsnoida@edwinregency.com" className="hover:text-brand-gold">bookingsnoida@edwinregency.com</a>
                </p>
                 <p className="flex items-center">
                    <Phone className="text-brand-gold mr-4 flex-shrink-0" />
                    <a href="tel:+919911169979" className="hover:text-brand-gold">+91-9911169979</a>
                </p>
            </div>
            <div className="mt-8 h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.01183177308!2d77.40822681508207!3d28.5994489824305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe35b436c81%3A0x628f80f5573887f1!2sSector%2063A%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1672922152862!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
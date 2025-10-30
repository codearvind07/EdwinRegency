import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { UtensilsCrossed, PartyPopper, BedDouble, Star } from 'lucide-react';
import OptimizedImage from "@/components/OptimizedImage";
import ContactPage from "./contact/page";
import AboutPage from "./about/page";

const rooms = [
    { name: 'Deluxe King Room', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800' },
    { name: 'Premium Suite', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800' },
    { name: 'Executive Twin Room', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxurious hotel pool area"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold font-serif tracking-tight">Welcome to Edwin Regency</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            If you need quality hospitality for business or leisure, keep an eye on us. Opening details drop soon!
          </p>
          <Link href="/contact" className="mt-8 inline-block bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-300 transition-colors">
            Inquire Now
          </Link>
        </div>
      </section>
      <AboutPage />

      {/* About Section */}
      <AnimatedSection className="py-20 bg-brand-light">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-4xl font-bold text-brand-blue mb-4">A Touch of Warmth in 3-Star Hospitality</h2>
                  <p className="mb-4 text-gray-600">
                      Edwin Regency is more than just a place to stay; it's an experience. We blend premium comfort with the genuine warmth of Indian hospitality to make every moment of your stay memorable. Whether for business or leisure, we are dedicated to providing impeccable service.
                  </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                 <OptimizedImage 
                   src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200" 
                   alt="Hotel Lobby" 
                   fill
                   style={{ objectFit: 'cover' }}
                 />
              </div>
          </div>
      </AnimatedSection>
      
      {/* Features Section */}
       <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-brand-blue mb-2">Our Offerings</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Experience luxury and comfort with our world-class amenities.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8 border border-gray-200 rounded-lg">
                    <BedDouble className="mx-auto text-brand-gold mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2">Luxurious Rooms</h3>
                    <p className="text-gray-600">Elegantly designed rooms with modern amenities for a relaxing stay.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-lg">
                    <UtensilsCrossed className="mx-auto text-brand-gold mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2">Rooftop Dining</h3>
                    <p className="text-gray-600">Savor exquisite dishes with a panoramic view of the city skyline.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-lg">
                    <PartyPopper className="mx-auto text-brand-gold mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2">Elegant Banquets</h3>
                    <p className="text-gray-600">Host your events in our spacious and beautifully decorated halls.</p>
                </div>
            </div>
        </div>
      </AnimatedSection>

      {/* Rooms Section */}
      <AnimatedSection id="rooms" className="py-20 bg-brand-light">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-brand-blue mb-12">Our Premium Rooms</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {rooms.map((room, index) => (
                      <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
                          <div className="relative h-64">
                              <OptimizedImage 
                                src={room.image} 
                                alt={room.name} 
                                fill
                                style={{ objectFit: 'cover' }}
                                className="transition-transform duration-500 group-hover:scale-110"
                              />
                          </div>
                          <div className="p-6 bg-white">
                              <h3 className="text-xl font-bold text-brand-blue">{room.name}</h3>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </AnimatedSection>

      {/* Dining Section */}
      <AnimatedSection id="dining" className="relative py-32 text-white bg-brand-dark">
         <div className="absolute inset-0 bg-black/60 z-10"></div>
         <OptimizedImage 
           src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070" 
           alt="Rooftop Restaurant" 
           fill
           style={{ objectFit: 'cover' }}
           className="opacity-50"
         />
         <div className="container mx-auto px-6 relative z-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Rooftop Restaurant & Bar</h2>
            <p className="text-lg max-w-3xl mx-auto">Dine under the stars at our rooftop restaurant, offering a fusion of global cuisines and handcrafted cocktails. The perfect setting for a romantic dinner or a casual evening with friends.</p>
         </div>
      </AnimatedSection>

      {/* Banquet Section */}
      <AnimatedSection id="banquet" className="py-20 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                 <OptimizedImage 
                   src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200" 
                   alt="Banquet Hall" 
                   fill
                   style={{ objectFit: 'cover' }}
                 />
              </div>
              <div>
                  <h2 className="text-4xl font-bold text-brand-blue mb-4">Elegant Banquet Hall</h2>
                  <p className="mb-4 text-gray-600">
                      With state-of-the-art facilities and a dedicated event planning team, our banquet hall is the ideal venue for weddings, corporate events, and social gatherings. Let us help you create unforgettable memories.
                  </p>
              </div>
          </div>
      </AnimatedSection>

      <ContactPage />
    </>
  );
}
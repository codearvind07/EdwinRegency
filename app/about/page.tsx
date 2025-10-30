import OptimizedImage from '@/components/OptimizedImage';
import AnimatedSection from '@/components/AnimatedSection';

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[20vh] flex items-center justify-center text-white">
        <div className="absolute inset-0  z-10"></div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl text-black md:text-6xl font-extrabold font-serif">About Edwin Regency</h1>
        </div>
      </section>

      <AnimatedSection className="py-2">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600">
            At Edwin Regency, our vision is to redefine 3-star hospitality by infusing it with the luxury, comfort, and personalized service typically found in premium establishments. We aim to be the premier choice in Noida for travelers who seek quality, elegance, and a warm, welcoming atmosphere.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000"
              alt="Hotel staff providing service"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-brand-blue mb-4">Commitment to Excellence</h3>
            <p className="text-gray-600 mb-4">
              Our commitment is to our guests. From the moment you step into our lobby to the time you check out, every detail is meticulously curated to ensure your comfort and satisfaction. Our team is trained to anticipate your needs and provide service that is both professional and personable.
            </p>
            <p className="text-gray-600">
              We believe that true hospitality lies in the details—the crispness of the linen, the quality of our cuisine, and the smile that greets you every day.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Edwin Regency</h3>
                        <p className="text-gray-400">
                            SD-02, Sector 63 A, Noida<br />
                            <a href="mailto:bookingsnoida@edwinregency.com" className="hover:text-brand-gold transition-colors">bookingsnoida@edwinregency.com</a><br />
                            <a href="tel:+919911169979" className="hover:text-brand-gold transition-colors">+91-9911169979</a>
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-brand-gold transition-colors">About Us</Link></li>
                            <li><Link href="/#rooms" className="text-gray-400 hover:text-brand-gold transition-colors">Our Rooms</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-brand-gold transition-colors">Contact</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Edwin Regency. All Rights Reserved.</p>
                    <p>Designed by a D'miraki.</p>
                </div>
            </div>
        </footer>
    );
}

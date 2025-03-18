
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-asap-blue text-white">
      <div className="container mx-auto p-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">ASAP</h3>
            <p className="mb-2">Autism Services And Programs</p>
            <p className="mb-4">Services When You Need Them</p>
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>4940 Ward Rd, Wheat Ridge CO 80033</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>928-587-9198 / 928-587-9196</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>chanel@asapsperry.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/insurance" className="hover:underline">Insurance</Link></li>
              <li><Link to="/staff" className="hover:underline">Staff</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link to="/training" className="hover:underline">Training/Cues</Link></li>
              <li><Link to="/forensics" className="hover:underline">Forensics</Link></li>
              <li><Link to="/resources" className="hover:underline">Resources</Link></li>
              <li><Link to="/news" className="hover:underline">ASAP News</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Autism Services And Programs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

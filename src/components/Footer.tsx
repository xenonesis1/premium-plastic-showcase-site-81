import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/39045c23-2251-496a-92ff-661486780f27.png" 
                className="w-12 h-12 rounded-lg shadow-md" 
                alt="ToptexVinyl Logo" 
              />
              <h3 className="text-2xl font-bold">ToptexVinyl</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading manufacturer of high-quality artificial leather, PVC films, and flooring solutions. 
              Committed to excellence and innovation since 1992.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16R8ZBNMwj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/toptexvinyl?igsh=bHFqaXMyc3RtMXd0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/automotive" className="text-gray-300 hover:text-white transition-colors">Automotive</a></li>
              <li><a href="/pvc-film" className="text-gray-300 hover:text-white transition-colors">PVC Films</a></li>
              <li><a href="/belts" className="text-gray-300 hover:text-white transition-colors">Belts</a></li>
              <li><a href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 8585850739</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@toptexvinyl.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 ToptexVinyl. All rights reserved. | Quality & Innovation Since 1992
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

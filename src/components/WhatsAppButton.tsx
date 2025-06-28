
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isWelcomed, setIsWelcomed] = useState(false);
  const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJUYmJVbXRUVUs4MDNwWVlxQjRENmFZTFBvaGlHN2dQRCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzUxMDEyMzQyfQ.Eu3Mc1buQBaGslYUQWgpW28PNhcd-tfkH4b9V9t-36s";

  const handleWhatsAppClick = async () => {
    try {
      // Welcome the user first
      if (!isWelcomed) {
        alert("Welcome! Thank you for your interest in ToptexVinyl artificial leather products. We're here to help you!");
        setIsWelcomed(true);
      }
      
      // Here you can add API call logic if needed
      console.log("WhatsApp button clicked with API token:", API_TOKEN);
      
      // Open WhatsApp with a pre-filled message
      const message = encodeURIComponent("Hi! I'm interested in your ToptexVinyl artificial leather products. Please provide more information.");
      const phoneNumber = "+918585850739";
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      
    } catch (error) {
      console.error("Error with WhatsApp integration:", error);
    }
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl z-50 flex items-center gap-3 group transition-all duration-300"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} className="group-hover:animate-pulse" />
      <span className="hidden sm:inline text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-1">
        Chat with us
      </span>
      
      {/* Pulse ring animation */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
    </motion.button>
  );
};

export default WhatsAppButton;


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
        alert("Welcome! Thank you for your interest in our artificial leather products. We're here to help you!");
        setIsWelcomed(true);
      }
      
      // Here you can add API call logic if needed
      console.log("WhatsApp button clicked with API token:", API_TOKEN);
      
      // Open WhatsApp with a pre-filled message
      const message = encodeURIComponent("Hi! I'm interested in your artificial leather products. Please provide more information.");
      const phoneNumber = "+918585850739"; // Updated contact number
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      
    } catch (error) {
      console.error("Error with WhatsApp integration:", error);
    }
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center gap-2 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;

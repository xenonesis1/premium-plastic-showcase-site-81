
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your plastic product requirements? Get in touch with our team 
            for expert consultation and competitive quotes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Work Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Delhi NCR<br />
                    (Work From Home based)<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 9810765284
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    contact@toptexvinyl.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
                  🕒
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9511989544!2d76.76356251956677!3d28.64369750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sDelhi%20NCR!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

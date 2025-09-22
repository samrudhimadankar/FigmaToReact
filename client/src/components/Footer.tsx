import { MapPin, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section - Logo and Description */}
          <motion.div className="space-y-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900 dark:text-white">
                  Google Developer Groups
                </div>
                <div className="text-gray-600 dark:text-gray-400">On Campus • Ramdeobaba University</div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Info */}
          <motion.div className="space-y-8" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Shri Ramdeobaba College of Engineering and Management,<br />
                    Ramdeo Tekdi, Gittikhadan Katol Road Nagpur - 440013
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <a 
                    href="mailto:dsc.rknec@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    data-testid="link-email"
                  >
                    dsc.rknec@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">Follow Us:</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  data-testid="link-instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  data-testid="link-twitter"
                >
                  <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <motion.div className="relative rounded-3xl overflow-hidden p-6 bg-white dark:bg-gray-900" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="absolute inset-x-0 -bottom-6 h-20">
              <div className="absolute left-6 bottom-0 w-24 h-6 rounded-full" style={{ backgroundColor: '#EA4335' }}></div>
              <div className="absolute left-32 bottom-2 w-28 h-6 rounded-full" style={{ backgroundColor: '#4285F4' }}></div>
              <div className="absolute left-60 bottom-1 w-20 h-6 rounded-full" style={{ backgroundColor: '#34A853' }}></div>
              <div className="absolute left-80 bottom-3 w-24 h-6 rounded-full" style={{ backgroundColor: '#FBBC05' }}></div>
              <div className="absolute right-10 bottom-1 w-24 h-6 rounded-full" style={{ backgroundColor: '#EA4335' }}></div>
              <div className="absolute right-36 bottom-2 w-28 h-6 rounded-full" style={{ backgroundColor: '#4285F4' }}></div>
              <div className="absolute right-56 bottom-0 w-16 h-6 rounded-full" style={{ backgroundColor: '#34A853' }}></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 pointer-events-none select-none" aria-hidden="true">
              <div className="w-16 h-16 bg-red-500 rounded-3xl" />
              <div className="w-16 h-16 bg-blue-500 rounded-3xl" />
              <div className="w-16 h-16 bg-green-500 rounded-3xl" />
              <div className="w-16 h-16 bg-yellow-500 rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
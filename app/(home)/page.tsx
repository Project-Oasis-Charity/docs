'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/public/img/logo2.png';
import ParticleBackground from '@/app/components/ParticleBackground';

export default function HomePage() {
  const features = [
    {
      title: 'Warm Gaming Experience',
      description: 'Creating gaming experiences that touch hearts and convey positive energy.',
      icon: '🎮',
    },
    {
      title: 'Open Source Collaboration',
      description: 'Welcome developers and designers to contribute their skills.',
      icon: '🤝',
    },
    {
      title: 'Charitable Mission',
      description: 'Games convey charitable concepts and carry social values.',
      icon: '❤️',
    },
  ];

  return (
    <div className="text-gray-900 relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="mb-10 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-300 rounded-3xl transform rotate-12 opacity-30 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-300 rounded-3xl transform -rotate-12 opacity-30 blur-xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-10 border border-white/30 dark:border-gray-700/50 shadow-2xl">
              <Image
                src={Logo}
                alt="Project Oasis Logo" 
                width="150" 
                height="150" 
                className="mx-auto drop-shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                Project Oasis
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-blue-900/80 dark:text-blue-100 mb-12 max-w-3xl leading-relaxed"
          >
            An open-source charitable project under Wintertea Charity, creating warm and meaningful video games.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-8 justify-center w-full max-w-2xl mx-auto"
          >
            {/* Primary Button - Explore Project */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <Link
                href="/docs"
                className="relative px-12 py-6 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <span className="font-semibold">Explore Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* Secondary Button - Learn Features */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href="#features"
                className="relative px-12 py-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg text-gray-900 dark:text-white font-bold rounded-2xl border-2 border-blue-500/30 dark:border-blue-400/30 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Learn Features</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300">
              Our Features
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-800/90 dark:text-blue-100 max-w-2xl mx-auto"
          >
            Core values and unique aspects of Project Oasis
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 hover:border-blue-400/40 transition-all duration-300 shadow-xl"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-blue-50">{feature.title}</h3>
              <p className="text-gray-800/90 dark:text-blue-100/90 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900/30 to-green-900/30 backdrop-blur-lg rounded-3xl p-16 border border-white/10 dark:border-gray-700/50">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-300">
              Join Our Charitable Journey
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-800/90 dark:text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Contribute to this open-source charitable project
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/docs"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <span>Start Contributing</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 dark:border-gray-800/50 bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-t-3xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src={Logo}
                  alt="Project Oasis Logo"
                  width="40"
                  height="40"
                  className="mr-3"
                />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                  Project Oasis
                </span>
              </div>
              <p className="text-gray-800/90 dark:text-gray-300 max-w-md leading-relaxed">
                An open-source charitable project under Wintertea Charity, dedicated to creating warm and meaningful video games that combine entertainment with social responsibility.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-800/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-800/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Project Docs</Link></li>
                <li><Link href="https://github.com/Project-Oasis-Charity" className="text-gray-800/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</Link></li>
                <li><Link href="#" className="text-gray-800/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contribution Guide</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-800/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-800/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Use</Link></li>
                <li><Link href="#" className="text-gray-800/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 dark:border-gray-800/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-800/90 dark:text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Project Oasis. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="https://github.com/Project-Oasis-Charity" className="text-gray-800/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.55-4.951 0-1.093.39-1.98 1.029-2.688-.103-.253-.46-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.84c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.68 0 3.848-2.339 4.695-4.56 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

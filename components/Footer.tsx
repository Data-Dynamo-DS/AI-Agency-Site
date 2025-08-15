'use client'

import { motion } from 'framer-motion'
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AI Nexus</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading AI agency specializing in designing and deploying multi-agent automation systems, 
                AI video generation, and intelligent solutions that transform businesses across industries.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  'AI Agent Creation',
                  'AI Video Generation',
                  'Digital Agent Replicas',
                  'Data Analytics & Automation',
                  'Sales & Marketing AI',
                  'Process Automation'
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Link 
                      href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {service}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {[
                  'About Us',
                  'Case Studies',
                  'Industries',
                  'Careers',
                  'Blog',
                  'Press'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Link 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'hello@ainexus.com', href: 'mailto:hello@ainexus.com' },
                  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                  { icon: MapPin, text: 'San Francisco, CA', href: '#' }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <contact.icon className="w-5 h-5 text-primary-400" />
                    <a 
                      href={contact.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {contact.text}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated with AI Insights</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest news, case studies, and insights about AI automation and business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AI Nexus. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}

export default Footer


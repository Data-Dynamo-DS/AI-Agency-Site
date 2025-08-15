'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, HelpCircle, Brain, Clock, DollarSign, Shield, Zap } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  icon: any
}

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('general')

  const faqData: FAQItem[] = [
    // General Questions
    {
      id: 'what-is-ai-agency',
      question: 'What is an AI agency and what do you do?',
      answer: 'We are a specialized agency that designs, develops, and deploys intelligent automation systems using artificial intelligence. Our services include AI agent creation, video generation automation, digital agent replicas, and data analytics solutions. We help businesses automate complex processes, improve efficiency, and achieve measurable ROI through AI technology.',
      category: 'general',
      icon: Brain
    },
    {
      id: 'how-ai-works',
      question: 'How does AI automation actually work?',
      answer: 'AI automation works by combining machine learning algorithms, natural language processing, and robotic process automation. Our systems learn from your business data and processes, then automatically execute tasks that previously required human intervention. This includes everything from customer service responses to inventory management, all while continuously learning and improving over time.',
      category: 'general',
      icon: Brain
    },
    
    // Technology Questions
    {
      id: 'ai-technology',
      question: 'What AI technologies do you use?',
      answer: 'We utilize cutting-edge AI technologies including Large Language Models (LLMs), computer vision, natural language processing, machine learning algorithms, and robotic process automation. Our systems are built on proven frameworks and are continuously updated with the latest advancements in AI research and development.',
      category: 'technology',
      icon: Zap
    },
    {
      id: 'customization',
      question: 'Can AI solutions be customized for our specific business?',
      answer: 'Absolutely! Every AI solution we create is tailored to your specific business needs, industry requirements, and existing workflows. We conduct thorough analysis of your current processes, understand your unique challenges, and design custom AI systems that integrate seamlessly with your existing infrastructure.',
      category: 'technology',
      icon: Zap
    },
    {
      id: 'integration',
      question: 'How do AI systems integrate with existing software?',
      answer: 'Our AI systems are designed with flexible APIs and integration capabilities that work with most existing business software. We can integrate with CRM systems, ERP platforms, e-commerce platforms, and custom software. The integration process is handled by our technical team to ensure smooth operation.',
      category: 'technology',
      icon: Zap
    },
    
    // Implementation Questions
    {
      id: 'implementation-time',
      question: 'How long does it take to implement AI solutions?',
      answer: 'Implementation timelines vary based on complexity and scope. Simple automation solutions can be deployed in 2-4 weeks, while comprehensive AI systems typically take 8-12 weeks. We provide detailed project timelines during the discovery phase and keep you updated throughout the implementation process.',
      category: 'implementation',
      icon: Clock
    },
    {
      id: 'team-training',
      question: 'Do our team members need technical training?',
      answer: 'No technical training is required for your team. We design our AI systems to be user-friendly and intuitive. We provide comprehensive training on how to use and manage the systems, and our support team is always available to help with any questions or issues.',
      category: 'implementation',
      icon: Clock
    },
    {
      id: 'ongoing-support',
      question: 'What kind of ongoing support do you provide?',
      answer: 'We provide comprehensive ongoing support including 24/7 system monitoring, regular updates and improvements, technical support, and performance optimization. Our team continuously monitors your AI systems to ensure optimal performance and can quickly address any issues that arise.',
      category: 'implementation',
      icon: Clock
    },
    
    // ROI & Cost Questions
    {
      id: 'roi-timeline',
      question: 'How quickly can we expect to see ROI?',
      answer: 'Most clients begin seeing measurable ROI within 3-6 months of implementation. Simple automation solutions can show immediate benefits, while more complex AI systems typically demonstrate significant ROI within 6-12 months. We provide detailed ROI projections during the planning phase.',
      category: 'roi',
      icon: DollarSign
    },
    {
      id: 'cost-structure',
      question: 'What are the typical costs for AI implementation?',
      answer: 'Costs vary based on the scope and complexity of your AI solution. Entry-level automation solutions start around $25,000, while comprehensive AI systems can range from $100,000 to $500,000+. We offer flexible pricing models and can work within your budget constraints.',
      category: 'roi',
      icon: DollarSign
    },
    {
      id: 'maintenance-costs',
      question: 'What are the ongoing maintenance costs?',
      answer: 'Ongoing costs typically range from 15-25% of the initial implementation cost annually. This includes system updates, monitoring, support, and continuous improvement. We provide transparent pricing and can customize maintenance packages based on your needs.',
      category: 'roi',
      icon: DollarSign
    },
    
    // Security & Compliance
    {
      id: 'data-security',
      question: 'How secure are AI systems and our business data?',
      answer: 'Security is our top priority. All AI systems are built with enterprise-grade security measures including data encryption, secure APIs, role-based access controls, and compliance with industry standards. We follow strict security protocols and can meet specific compliance requirements for your industry.',
      category: 'security',
      icon: Shield
    },
    {
      id: 'compliance',
      question: 'Do AI solutions comply with industry regulations?',
      answer: 'Yes, our AI solutions are designed to comply with major industry regulations including GDPR, HIPAA, SOX, and others. We work closely with your compliance team to ensure all systems meet your specific regulatory requirements and can provide detailed compliance documentation.',
      category: 'security',
      icon: Shield
    }
  ]

  const categories = [
    { id: 'general', name: 'General', icon: Brain },
    { id: 'technology', name: 'Technology', icon: Zap },
    { id: 'implementation', name: 'Implementation', icon: Clock },
    { id: 'roi', name: 'ROI & Cost', icon: DollarSign },
    { id: 'security', name: 'Security & Compliance', icon: Shield }
  ]

  const filteredFAQs = faqData.filter(faq => faq.category === activeCategory)

  const toggleFAQ = (id: string) => {
    setActiveFAQ(activeFAQ === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our AI solutions, implementation process, 
            and how artificial intelligence can transform your business.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      <faq.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeFAQ === faq.id ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Our AI experts are here to help. Get in touch with us for personalized answers 
              and detailed information about how AI can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Our Experts
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Facts About AI Implementation
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, fact: "Average implementation time: 8-12 weeks", description: "From discovery to deployment" },
              { icon: DollarSign, fact: "Typical ROI timeline: 3-6 months", description: "Start seeing measurable results" },
              { icon: Shield, fact: "100% compliance ready", description: "Built with security and regulations in mind" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">{item.fact}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ


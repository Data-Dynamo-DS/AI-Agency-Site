'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, TrendingUp, Users, Target, Zap, BarChart3, Send } from 'lucide-react'

const SalesMarketingAI = () => {
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! I'm your AI sales assistant. I can help you understand how our AI solutions can transform your business operations and drive significant ROI. What would you like to know?", isAI: true, timestamp: new Date() },
    { id: 2, text: "I'm interested in learning about your AI solutions", isAI: false, timestamp: new Date() },
    { id: 3, text: "Excellent! Our AI solutions have helped companies achieve 3-5x ROI within 6 months. We specialize in AI Agent Creation, Digital Agent Replicas, and Process Automation. Based on your business size and industry, I'd recommend starting with a consultation call where we can analyze your specific needs and create a customized implementation plan. Would you like to schedule a 30-minute discovery call?", isAI: true, timestamp: new Date() }
  ])

  const features = [
    {
      icon: MessageSquare,
      title: "AI Sales Agents",
      description: "Intelligent agents that qualify leads, answer questions, and guide prospects through the sales funnel 24/7.",
      benefits: ["24/7 availability", "Consistent messaging", "Lead qualification", "Appointment scheduling"]
    },
    {
      icon: TrendingUp,
      title: "Automated Marketing Campaigns",
      description: "AI-powered campaigns that automatically segment audiences, personalize content, and optimize performance in real-time.",
      benefits: ["Dynamic segmentation", "Personalized content", "Real-time optimization", "Performance tracking"]
    },
    {
      icon: Users,
      title: "Customer Journey Automation",
      description: "Seamless automation of the entire customer journey from awareness to conversion and retention.",
      benefits: ["Multi-touchpoint engagement", "Behavioral triggers", "Conversion optimization", "Retention automation"]
    }
  ]

  const metrics = [
    { label: "Lead Response Time", value: "< 30 seconds", improvement: "90% faster" },
    { label: "Conversion Rate", value: "+45%", improvement: "vs. manual process" },
    { label: "Cost per Lead", value: "-60%", improvement: "reduction" },
    { label: "Sales Cycle", value: "-40%", improvement: "shorter" }
  ]

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('roi') || lowerMessage.includes('return')) {
      return "Our clients typically see 3-5x ROI within 6 months. One client achieved 400% ROI in just 4 months by automating their sales process. The key is our customized approach - we analyze your specific operations and implement targeted AI solutions. Would you like to schedule a consultation to discuss your potential ROI?"
    } else if (lowerMessage.includes('time') || lowerMessage.includes('implement') || lowerMessage.includes('how long')) {
      return "Implementation typically takes 4-8 weeks for initial automation, with full system deployment in 12-16 weeks. We use a phased approach so you start seeing benefits quickly. Our fastest client went live in 3 weeks and saw immediate efficiency gains. Let's discuss your timeline in a consultation call."
    } else if (lowerMessage.includes('industry') || lowerMessage.includes('work with')) {
      return "We work across all industries - from healthcare to manufacturing, retail to SaaS. Our AI solutions are adaptable to any business process. We've helped 500+ companies across 15+ industries. The best way to see if we're a fit is through a consultation where we analyze your specific needs."
    } else if (lowerMessage.includes('help') || lowerMessage.includes('specific')) {
      return "Absolutely! Every business has unique challenges. We start with a comprehensive analysis of your current processes, identify automation opportunities, and create a customized implementation plan. Our consultation calls are free and typically reveal 3-5 immediate automation opportunities. Shall we schedule one?"
    } else if (lowerMessage.includes('consultation') || lowerMessage.includes('schedule')) {
      return "Perfect! I'll connect you with our AI solutions team. They'll schedule a 30-minute discovery call where we'll analyze your business processes, discuss potential ROI, and create a customized automation roadmap. What's the best time for you this week?"
    } else {
      return "That's a great question! Our AI solutions are designed to be customized for each business. The best way to get specific answers for your situation is through a consultation call with our AI experts. They'll analyze your processes and provide a detailed implementation plan. Would you like to schedule a free 30-minute discovery call?"
    }
  }

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatInput,
        isAI: false,
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, newMessage])
      setChatInput('')
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          text: generateAIResponse(newMessage.text),
          isAI: true,
          timestamp: new Date()
        }
        setChatMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
  }

  return (
    <section id="sales-marketing-ai" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 network-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
            <span className="text-gradient">Sales & Marketing</span> AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your sales and marketing operations with intelligent automation that works 24/7, 
            qualifies leads, and drives conversions at scale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="tech-card p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4 glow-blue">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Demo Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white text-shadow">
              Experience AI-Powered Sales Consultation
            </h3>
            <p className="text-lg text-gray-300">
              Our AI sales agents can handle complex customer inquiries, qualify leads, and guide prospects 
              through the entire sales process. Schedule a consultation to see how we can transform your business.
            </p>
            
            {/* Demo Controls */}
            <div className="flex items-center space-x-4">
              <button className="tech-button">
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>

          {/* Chat Demo */}
          <div className="tech-card overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
              </div>
              <div className="text-center mt-2">
                <h4 className="font-semibold">AI Sales Assistant</h4>
                <p className="text-blue-100 text-sm">Online • Ready to help</p>
              </div>
            </div>
            
            <div className="p-4 h-96 flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                {chatMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.isAI
                          ? 'bg-gray-800 text-gray-200 border border-gray-700'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Chat Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
            Proven Results Across Industries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="tech-card p-6">
                  <div className="text-2xl font-bold text-blue-400 mb-2 text-shadow">{metric.value}</div>
                  <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-400 font-medium">{metric.improvement}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow Automation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="tech-card p-8"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8 text-shadow">
            End-to-End Sales & Marketing Automation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Lead Generation</h4>
              <p className="text-gray-300">
                AI-powered lead scoring, qualification, and nurturing across all channels
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Engagement</h4>
              <p className="text-gray-300">
                Personalized content delivery, automated follow-ups, and intelligent routing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Conversion</h4>
              <p className="text-gray-300">
                Optimized sales processes, automated closing, and performance analytics
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white glow-blue-strong">
            <h3 className="text-3xl font-bold mb-4 text-shadow">
              Ready to Transform Your Sales & Marketing?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss how our AI solutions can transform your sales and marketing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SalesMarketingAI


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, TrendingUp, Users, Target, Zap, BarChart3, Play, Pause, RotateCcw, Send } from 'lucide-react'

const SalesMarketingAI = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! I'm your AI sales assistant. How can I help you today?", isAI: true, timestamp: new Date() },
    { id: 2, text: "I'm interested in learning about your AI solutions", isAI: false, timestamp: new Date() },
    { id: 3, text: "Great! I'd love to tell you about our AI solutions. What's your primary business goal?", isAI: true, timestamp: new Date() }
  ])

  const demoMessages = [
    "Hi! I'm interested in your AI solutions",
    "What's the ROI typically?",
    "How long does implementation take?",
    "Can you show me a demo?",
    "What industries do you work with?"
  ]

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
          text: "Thank you for your message! I'll get back to you with a detailed response shortly.",
          isAI: true,
          timestamp: new Date()
        }
        setChatMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
  }

  const handleDemoMessage = (message: string) => {
    setChatInput(message)
  }

  return (
    <section id="sales-marketing-ai" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
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
            <span className="text-gradient">Sales & Marketing</span> AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="card p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
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
            <h3 className="text-3xl font-bold text-gray-900">
              Experience AI-Powered Sales in Action
            </h3>
            <p className="text-lg text-gray-600">
              Our AI sales agents can handle complex customer inquiries, qualify leads, and guide prospects 
              through the entire sales process with human-like intelligence.
            </p>
            
            {/* Demo Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : 'Start'} Demo</span>
              </button>
              <button
                onClick={() => setCurrentMessage(0)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>

            {/* Quick Demo Messages */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Try these demo messages:</h4>
              <div className="flex flex-wrap gap-2">
                {demoMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleDemoMessage(message)}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full transition-colors"
                  >
                    {message}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Demo */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4 text-white">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
              </div>
              <div className="text-center mt-2">
                <h4 className="font-semibold">AI Sales Assistant</h4>
                <p className="text-primary-100 text-sm">Online • Ready to help</p>
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
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-primary-600 text-white'
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
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
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
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="text-2xl font-bold text-primary-600 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-600 font-medium">{metric.improvement}</div>
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
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            End-to-End Sales & Marketing Automation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Lead Generation</h4>
              <p className="text-gray-600">
                AI-powered lead scoring, qualification, and nurturing across all channels
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Engagement</h4>
              <p className="text-gray-600">
                Personalized content delivery, automated follow-ups, and intelligent routing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Conversion</h4>
              <p className="text-gray-600">
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
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Automate Your Sales & Marketing?
            </h3>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already using AI to transform their sales and marketing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SalesMarketingAI


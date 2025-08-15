'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react'

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. I can help you understand how our AI automation services can transform your business operations and drive significant ROI. What would you like to know?",
      isAI: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = [
    "Tell me about your services",
    "What's the typical ROI?",
    "How long does implementation take?",
    "Can you help with my specific needs?",
    "I want to schedule a consultation"
  ]

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        isAI: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, newMessage])
      setInputValue('')
      setIsTyping(true)

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = generateAIResponse(inputValue)
        const aiMessage = {
          id: messages.length + 2,
          text: aiResponse,
          isAI: true,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
        setIsTyping(false)
      }, 1500)
    }
  }

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return "We offer AI Agent Creation, Digital Agent Replicas, and Data Analytics & Automation. Each service is customized to your business needs and typically delivers 3-5x ROI within 6 months. The best way to understand which services fit your needs is through a consultation call. Would you like to schedule one?"
    } else if (lowerMessage.includes('roi') || lowerMessage.includes('return')) {
      return "Our clients typically see 3-5x ROI within 6 months. One client achieved 400% ROI in just 4 months by automating their sales process. The key is our customized approach - we analyze your specific operations and implement targeted AI solutions. Would you like to schedule a consultation to discuss your potential ROI?"
    } else if (lowerMessage.includes('time') || lowerMessage.includes('implement') || lowerMessage.includes('how long')) {
      return "Implementation typically takes 4-8 weeks for initial automation, with full system deployment in 12-16 weeks. We use a phased approach so you start seeing benefits quickly. Our fastest client went live in 3 weeks and saw immediate efficiency gains. Let's discuss your timeline in a consultation call."
    } else if (lowerMessage.includes('help') || lowerMessage.includes('specific')) {
      return "Absolutely! Every business has unique challenges. We start with a comprehensive analysis of your current processes, identify automation opportunities, and create a customized implementation plan. Our consultation calls are free and typically reveal 3-5 immediate automation opportunities. Shall we schedule one?"
    } else if (lowerMessage.includes('consultation') || lowerMessage.includes('schedule')) {
      return "Perfect! I'll connect you with our AI solutions team. They'll schedule a 30-minute discovery call where we'll analyze your business processes, discuss potential ROI, and create a customized automation roadmap. What's the best time for you this week?"
    } else {
      return "That's a great question! Our AI solutions are designed to be customized for each business. The best way to get specific answers for your situation is through a consultation call with our AI experts. They'll analyze your processes and provide a detailed implementation plan. Would you like to schedule a free 30-minute discovery call?"
    }
  }

  const handleQuickReply = (reply: string) => {
    setInputValue(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 glow-blue"
        aria-label="Open chat"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-8 w-96 h-[500px] bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-800 z-50 overflow-hidden glow-border"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs text-blue-100">Online • Ready to help</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 h-80 overflow-y-auto space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.isAI
                          ? 'bg-gray-800 text-gray-200 border border-gray-700'
                          : 'bg-blue-600 text-white'
                      }`}>
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Quick Replies */}
                <div className="px-4 pb-3">
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="px-3 py-1 text-xs bg-gray-800 hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 rounded-full transition-colors border border-gray-700 hover:border-blue-500/50"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-800 p-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LiveChat


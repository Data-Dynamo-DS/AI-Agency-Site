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
      text: "Hi! I'm your AI assistant. How can I help you today?",
      isAI: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = [
    "Tell me about your services",
    "How much does it cost?",
    "What's the implementation time?",
    "Can you show me a demo?",
    "I have a specific question"
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
      return "We offer AI Agent Creation, AI Video Generation, Digital Agent Replicas, and Data Analytics & Automation. Each service is customized to your business needs. Would you like me to explain any specific service in detail?"
    } else if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('how much')) {
      return "Our pricing varies based on the scope and complexity of your AI solution. Entry-level automation starts around $25K, while comprehensive systems range from $100K to $500K+. We offer flexible payment plans and can work within your budget. Would you like a personalized quote?"
    } else if (lowerMessage.includes('time') || lowerMessage.includes('implement') || lowerMessage.includes('how long')) {
      return "Implementation timelines depend on complexity. Simple automation takes 2-4 weeks, while comprehensive AI systems typically take 8-12 weeks. We provide detailed project timelines during discovery and keep you updated throughout the process."
    } else if (lowerMessage.includes('demo') || lowerMessage.includes('show')) {
      return "Absolutely! We'd love to show you our AI solutions in action. We can schedule a personalized demo where we'll walk through relevant case studies and show how our systems work. When would be a good time for you?"
    } else {
      return "That's a great question! I'd be happy to help you with that. Could you provide a bit more context so I can give you the most accurate and helpful response? Alternatively, you can schedule a call with one of our AI experts for a more detailed discussion."
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
        className="fixed bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
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
            className="fixed bottom-8 left-8 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs text-primary-100">Online • Ready to help</p>
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
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-primary-600 text-white'
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
                      <div className="bg-gray-100 px-3 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
                        className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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


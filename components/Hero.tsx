'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Zap, Target } from 'lucide-react'

interface HeroProps {
  onStartAssessment: () => void
}

const Hero = ({ onStartAssessment }: HeroProps) => {
  const [currentTagline, setCurrentTagline] = useState(0)
  
  const taglines = [
    "Transform Your Business with AI-Powered Automation",
    "Deploy Intelligent Agents That Work 24/7",
    "Generate Engaging Content with AI Video Technology",
    "Scale Operations Without Scaling Headcount"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [taglines.length])

  const features = [
    { icon: Brain, text: "Multi-Agent Systems" },
    { icon: Zap, text: "AI Automation" },
    { icon: Target, text: "ROI Focused" }
  ]

  return (
    <section id="home" className="pt-20 pb-16 gradient-bg network-pattern overflow-hidden relative">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow animate-delay-200"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 glow-border"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Leading AI Agency Since 2020
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow"
            >
              The Future of Business is{' '}
              <span className="text-gradient">AI-Powered</span>
            </motion.h1>

            {/* Dynamic Tagline */}
            <motion.div
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 min-h-[3rem] flex items-center"
            >
              {taglines[currentTagline]}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              We design and deploy intelligent automation systems that transform how businesses operate. 
              From AI agents to video generation, we create solutions that scale and deliver measurable ROI.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <feature.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={onStartAssessment}
                className="btn-primary glow-blue-strong"
              >
                Start Your Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative">
              {/* Central Brain Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-2xl glow-blue-strong"
              >
                <Brain className="w-16 h-16 text-white" />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-800 glow-border"
              >
                <div className="text-sm font-medium text-white">AI Agent</div>
                <div className="text-xs text-blue-400">Active</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-800 glow-border"
              >
                <div className="text-sm font-medium text-white">Video Gen</div>
                <div className="text-xs text-blue-400">Processing</div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              {[
                { number: "500+", label: "AI Agents Deployed" },
                { number: "95%", label: "Automation Rate" },
                { number: "3x", label: "ROI Average" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-400 text-shadow">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


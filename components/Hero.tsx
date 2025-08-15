'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Brain, Zap, Target } from 'lucide-react'

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
    <section id="home" className="pt-20 pb-16 gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
              Leading AI Agency Since 2020
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
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
              className="text-xl md:text-2xl text-gray-600 min-h-[3rem] flex items-center"
            >
              {taglines[currentTagline]}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed"
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
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <feature.icon className="w-5 h-5 text-primary-600" />
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
                className="btn-primary group"
              >
                Start Your Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
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
                className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Brain className="w-16 h-16 text-white" />
              </motion.div>

              {/* Orbiting Elements */}
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 8 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                  className="absolute top-1/2 left-1/2 w-20 h-20 -mt-10 -ml-10"
                  style={{
                    transformOrigin: '100px 100px'
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-80 shadow-lg"></div>
                </motion.div>
              ))}

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="text-sm font-medium text-gray-700">AI Agent</div>
                <div className="text-xs text-gray-500">Active</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="text-sm font-medium text-gray-700">Video Gen</div>
                <div className="text-xs text-gray-500">Processing</div>
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
                  <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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


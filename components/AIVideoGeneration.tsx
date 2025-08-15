'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Video, Play, Pause, RotateCcw, Download, Share2, Eye, Clock, Zap, Target, BarChart3 } from 'lucide-react'

const AIVideoGeneration = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)

  const videoSamples = [
    {
      id: 1,
      title: "Product Demo Video",
      description: "AI-generated product demonstration with voice-over and animations",
      duration: "2:15",
      category: "Marketing",
      thumbnail: "/api/placeholder/400/225",
      views: "1.2k",
      likes: "89"
    },
    {
      id: 2,
      title: "Training Module",
      description: "Educational content with interactive elements and visual aids",
      duration: "5:30",
      category: "Training",
      thumbnail: "/api/placeholder/400/225",
      views: "856",
      likes: "67"
    },
    {
      id: 3,
      title: "Social Media Ad",
      description: "Short-form content optimized for social platforms",
      duration: "0:45",
      category: "Social",
      thumbnail: "/api/placeholder/400/225",
      views: "2.1k",
      likes: "124"
    },
    {
      id: 4,
      title: "Customer Onboarding",
      description: "Welcome video with personalized messaging",
      duration: "3:20",
      category: "Customer Success",
      thumbnail: "/api/placeholder/400/225",
      views: "743",
      likes: "56"
    }
  ]

  const workflows = [
    {
      icon: Target,
      title: "Content Planning",
      description: "AI analyzes your goals and suggests optimal video formats and messaging",
      steps: ["Goal definition", "Audience analysis", "Format selection", "Content strategy"]
    },
    {
      icon: Zap,
      title: "Automated Generation",
      description: "AI creates videos using your brand guidelines and content requirements",
      steps: ["Script generation", "Visual creation", "Voice synthesis", "Animation"]
    },
    {
      icon: BarChart3,
      title: "Optimization & Distribution",
      description: "AI optimizes videos for different platforms and tracks performance",
      steps: ["Format optimization", "Platform adaptation", "Performance tracking", "A/B testing"]
    }
  ]

  const features = [
    {
      title: "Multi-Format Output",
      description: "Generate videos in multiple formats: MP4, MOV, GIF, and more",
      icon: Video
    },
    {
      title: "Voice Synthesis",
      description: "Natural-sounding voice-overs in multiple languages and accents",
      icon: Play
    },
    {
      title: "Brand Integration",
      description: "Automatic logo placement, color schemes, and brand consistency",
      icon: Target
    },
    {
      title: "Batch Processing",
      description: "Create hundreds of videos simultaneously with different variations",
      icon: Zap
    }
  ]

  const metrics = [
    { label: "Video Creation Time", value: "90% faster", description: "vs. manual production" },
    { label: "Cost Reduction", value: "75% less", description: "than traditional video production" },
    { label: "Content Output", value: "10x more", description: "videos per month" },
    { label: "Engagement Rate", value: "+40%", description: "higher than stock videos" }
  ]

  return (
    <section id="ai-video" className="py-20 bg-white">
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
            <span className="text-gradient">AI Video Generation</span> Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create engaging video content automatically using advanced AI algorithms. 
            From concept to final output, our system handles the entire video production pipeline.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            End-to-End Video Production Workflow
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
              <motion.div
                key={workflow.title}
                initial={{ opacity: 0, x: index === 1 ? 0 : index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <workflow.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{workflow.title}</h4>
                <p className="text-gray-600 mb-4 text-center">{workflow.description}</p>
                <div className="space-y-2">
                  {workflow.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI-Generated Video Samples
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoSamples.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Video Thumbnail */}
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-primary-600 text-white text-xs px-2 py-1 rounded">
                    {video.category}
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">{video.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 text-red-500">♥</div>
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex space-x-2 mt-3">
                    <button className="flex-1 bg-primary-600 text-white text-xs py-2 rounded hover:bg-primary-700 transition-colors">
                      <Play className="w-3 h-3 inline mr-1" />
                      Play
                    </button>
                    <button className="px-2 py-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <Download className="w-3 h-3" />
                    </button>
                    <button className="px-2 py-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <Share2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Demo Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Experience AI Video Generation
            </h3>
            <p className="text-lg text-gray-600">
              Watch how our AI transforms simple text prompts into professional video content 
              in minutes, not days. See the power of automated video production in action.
            </p>
            
            {/* Demo Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{isPlaying ? 'Pause' : 'Start'} Demo</span>
              </button>
              <button
                onClick={() => setCurrentVideo(0)}
                className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Demo Steps */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <span className="text-gray-700">Enter your video requirements</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <span className="text-gray-700">AI generates script and visuals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <span className="text-gray-700">Download your finished video</span>
              </div>
            </div>
          </div>

          {/* Demo Interface */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4 text-white">
              <h4 className="font-semibold text-center">AI Video Generator</h4>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Input Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Video Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Product Demo</option>
                  <option>Training Video</option>
                  <option>Social Media Ad</option>
                  <option>Customer Onboarding</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  placeholder="Describe your video content..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>15 seconds</option>
                  <option>30 seconds</option>
                  <option>1 minute</option>
                  <option>2 minutes</option>
                </select>
              </div>
              
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Generate Video
              </button>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Proven Results & Performance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="text-2xl font-bold text-primary-600 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-600 font-medium">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Perfect for Every Business Need
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Marketing Teams", description: "Create campaign videos, product demos, and social content" },
              { title: "Sales Teams", description: "Generate personalized video proposals and presentations" },
              { title: "Training Departments", description: "Develop educational content and onboarding materials" },
              { title: "Customer Success", description: "Create welcome videos and product tutorials" },
              { title: "HR Teams", description: "Develop company culture and training videos" },
              { title: "Content Creators", description: "Scale video production without increasing workload" }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <h4 className="font-bold text-gray-900 mb-2">{useCase.title}</h4>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Video Production?
            </h3>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already using AI to create professional videos at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIVideoGeneration


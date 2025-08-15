'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Brain, Users, BarChart3, ArrowRight, Zap, Target, Clock } from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  icon: any
  features: string[]
  benefits: string[]
  useCases: string[]
  expanded: boolean
}

const ServicesOverview = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 'ai-agents',
      title: 'AI Agent Creation',
      description: 'Design and deploy intelligent AI agents that automate complex business processes and decision-making.',
      icon: Brain,
      features: [
        'Custom AI agent development',
        'Multi-agent orchestration',
        'Natural language processing',
        'Machine learning integration',
        'Real-time decision making',
        'Scalable architecture'
      ],
      benefits: [
        '24/7 automated operations',
        'Reduced human error',
        'Faster response times',
        'Scalable without headcount',
        'Consistent performance',
        'Data-driven insights'
      ],
      useCases: [
        'Customer service automation',
        'Process workflow management',
        'Data analysis and reporting',
        'Predictive maintenance',
        'Quality control systems',
        'Supply chain optimization'
      ],
      expanded: false
    },
    {
      id: 'digital-agents',
      title: 'Digital Agent Replicas',
      description: 'Create digital twins of your best employees to handle customer interactions and complex tasks.',
      icon: Users,
      features: [
        'Employee knowledge capture',
        'Personality replication',
        'Multi-channel deployment',
        'Learning and adaptation',
        'Performance analytics',
        'Seamless handoff'
      ],
      benefits: [
        'Preserve institutional knowledge',
        'Consistent customer experience',
        'Handle peak demand periods',
        'Reduce training costs',
        'Improve response quality',
        '24/7 availability'
      ],
      useCases: [
        'Customer support',
        'Sales consultation',
        'Technical assistance',
        'Training and onboarding',
        'Knowledge management',
        'Process documentation'
      ],
      expanded: false
    },
    {
      id: 'analytics',
      title: 'Data Analytics & Automation',
      description: 'Transform raw data into actionable insights with automated analytics and intelligent reporting systems.',
      icon: BarChart3,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards',
        'Data visualization',
        'Alert systems'
      ],
      benefits: [
        'Faster decision making',
        'Identify hidden patterns',
        'Proactive problem solving',
        'Performance optimization',
        'Cost reduction',
        'Competitive advantage'
      ],
      useCases: [
        'Business intelligence',
        'Performance monitoring',
        'Risk assessment',
        'Customer analytics',
        'Operational efficiency',
        'Market analysis'
      ],
      expanded: false
    }
  ])

  const toggleService = (id: string) => {
    setServices(prev => prev.map(service => 
      service.id === id 
        ? { ...service, expanded: !service.expanded }
        : service
    ))
  }

  const businessValueCategories = [
    {
      category: 'High Impact, Quick ROI',
      services: ['AI Agent Creation', 'Digital Agent Replicas'],
      description: 'Transform operations and see results in weeks',
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Strategic Growth',
      services: ['Data Analytics'],
      description: 'Build long-term competitive advantages',
      color: 'from-blue-500 to-indigo-600'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-950 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 network-pattern opacity-30"></div>
      
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
            Our <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI services designed to transform your business operations, 
            from intelligent automation to data-driven insights.
          </p>
        </motion.div>

        {/* Business Value Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center text-shadow">
            Services Grouped by Business Value
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {businessValueCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`bg-gradient-to-r ${category.color} text-white p-6 rounded-xl shadow-2xl glow-border`}
              >
                <h4 className="text-xl font-bold mb-3">{category.category}</h4>
                <p className="text-white/90 mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.services.map(service => (
                    <div key={service} className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="tech-card overflow-hidden"
            >
              {/* Service Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center glow-blue">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: service.expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.expanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {service.expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-800"
                  >
                    <div className="p-6 space-y-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Zap className="w-5 h-5 text-blue-400 mr-2" />
                          Key Features
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center space-x-2 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Target className="w-5 h-5 text-blue-400 mr-2" />
                          Business Benefits
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center space-x-2 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-sm">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Clock className="w-5 h-5 text-blue-400 mr-2" />
                          Use Cases
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.useCases.map((useCase, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center space-x-2 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                              <span className="text-sm">{useCase}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-gray-800">
                        <button className="btn-primary group">
                          Learn More About {service.title}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-blue-950/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 glow-border">
            <h3 className="text-2xl font-bold text-white mb-4 text-shadow">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive growth, efficiency, and innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview


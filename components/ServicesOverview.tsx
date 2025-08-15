'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Brain, Video, Users, BarChart3, ArrowRight, Zap, Target, Clock } from 'lucide-react'

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
      id: 'ai-video',
      title: 'AI Video Generation Automation',
      description: 'Create engaging video content automatically using advanced AI algorithms and automation workflows.',
      icon: Video,
      features: [
        'Automated video creation',
        'Multi-format output',
        'Custom branding integration',
        'Voice synthesis',
        'Scene generation',
        'Batch processing'
      ],
      benefits: [
        'Massive time savings',
        'Consistent brand messaging',
        'Scalable content creation',
        'Reduced production costs',
        'Faster time to market',
        'Personalized content'
      ],
      useCases: [
        'Marketing campaigns',
        'Product demonstrations',
        'Training materials',
        'Social media content',
        'Customer onboarding',
        'Sales presentations'
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
      services: ['AI Agent Creation', 'AI Video Generation'],
      description: 'Transform operations and see results in weeks',
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Strategic Growth',
      services: ['Digital Agent Replicas', 'Data Analytics'],
      description: 'Build long-term competitive advantages',
      color: 'from-blue-500 to-indigo-600'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
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
            Our <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
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
                className={`bg-gradient-to-r ${category.color} text-white p-6 rounded-xl shadow-lg`}
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
              className="card overflow-hidden"
            >
              {/* Service Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: service.expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.expanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
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
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 space-y-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Zap className="w-5 h-5 text-primary-600 mr-2" />
                          Key Features
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center space-x-2 text-gray-700"
                            >
                              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Target className="w-5 h-5 text-primary-600 mr-2" />
                          Business Benefits
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center space-x-2 text-gray-700"
                            >
                              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                              <span className="text-sm">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Clock className="w-5 h-5 text-primary-600 mr-2" />
                          Use Cases
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.useCases.map((useCase, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center space-x-2 text-gray-700"
                            >
                              <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                              <span className="text-sm">{useCase}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-gray-200">
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
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive growth, efficiency, and innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule a Consultation
              </button>
              <button className="btn-outline">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Heart, Car, GraduationCap, Factory, Plane, Globe, ArrowRight, Zap, Target, TrendingUp, Users, DollarSign, Clock } from 'lucide-react'

interface Industry {
  id: string
  name: string
  icon: any
  description: string
  challenges: string[]
  solutions: string[]
  benefits: string[]
  caseStudy: string
  color: string
}

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState('retail')

  const industries: Industry[] = [
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Transform retail operations with AI-powered inventory management, personalized shopping experiences, and automated customer service.',
      challenges: [
        'Inventory management inefficiencies',
        'Customer service scaling issues',
        'Personalization at scale',
        'Supply chain optimization'
      ],
      solutions: [
        'AI inventory forecasting',
        'Intelligent chatbots',
        'Personalized recommendations',
        'Automated reordering systems'
      ],
      benefits: [
        '85% reduction in stockouts',
        '40% increase in customer satisfaction',
        '30% reduction in operational costs',
        '3x faster inventory turnover'
      ],
      caseStudy: 'RetailMax achieved $1.8M annual savings with AI inventory management',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      description: 'Enhance patient care with AI-powered diagnostics, appointment scheduling, and medical record management systems.',
      challenges: [
        'Patient appointment scheduling',
        'Medical record management',
        'Diagnostic accuracy',
        'Resource allocation'
      ],
      solutions: [
        'AI appointment optimization',
        'Intelligent medical records',
        'Diagnostic assistance',
        'Resource planning automation'
      ],
      benefits: [
        '60% reduction in wait times',
        '73% reduction in no-show rates',
        '95% accuracy in diagnostics',
        '40% improvement in resource utilization'
      ],
      caseStudy: 'HealthTech Pro reduced patient wait times by 60% with AI scheduling',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Factory,
      description: 'Optimize production processes with predictive maintenance, quality control automation, and supply chain intelligence.',
      challenges: [
        'Equipment downtime',
        'Quality control issues',
        'Supply chain disruptions',
        'Production inefficiencies'
      ],
      solutions: [
        'Predictive maintenance',
        'AI quality inspection',
        'Supply chain optimization',
        'Production planning automation'
      ],
      benefits: [
        '50% reduction in downtime',
        '90% improvement in defect detection',
        '25% reduction in supply chain costs',
        '3.2x increase in production efficiency'
      ],
      caseStudy: 'Manufacturing Corp increased production efficiency by 3.2x with AI automation',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: Building2,
      description: 'Revolutionize financial operations with AI-powered fraud detection, risk assessment, and customer service automation.',
      challenges: [
        'Fraud detection accuracy',
        'Risk assessment complexity',
        'Customer service volume',
        'Compliance requirements'
      ],
      solutions: [
        'AI fraud detection',
        'Automated risk assessment',
        'Intelligent customer service',
        'Compliance automation'
      ],
      benefits: [
        '95% fraud detection accuracy',
        '80% faster risk assessment',
        '24/7 customer service',
        '100% compliance adherence'
      ],
      caseStudy: 'FinancePro achieved 95% fraud detection accuracy with AI systems',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      description: 'Transform learning experiences with AI-powered tutoring, personalized curricula, and administrative automation.',
      challenges: [
        'Personalized learning at scale',
        'Administrative overhead',
        'Student engagement',
        'Resource allocation'
      ],
      solutions: [
        'AI-powered tutoring',
        'Administrative automation',
        'Engagement analytics',
        'Resource optimization'
      ],
      benefits: [
        '40% improvement in learning outcomes',
        '70% reduction in administrative tasks',
        '85% increase in student engagement',
        '50% better resource utilization'
      ],
      caseStudy: 'EduTech University improved learning outcomes by 40% with AI tutoring',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'logistics',
      name: 'Logistics & Transportation',
      icon: Plane,
      description: 'Optimize logistics operations with AI-powered route planning, fleet management, and delivery optimization.',
      challenges: [
        'Route optimization',
        'Fleet management',
        'Delivery scheduling',
        'Cost optimization'
      ],
      solutions: [
        'AI route planning',
        'Intelligent fleet management',
        'Dynamic delivery scheduling',
        'Cost optimization algorithms'
      ],
      benefits: [
        '25% reduction in fuel costs',
        '30% improvement in delivery times',
        '40% increase in fleet utilization',
        '20% reduction in operational costs'
      ],
      caseStudy: 'LogiTech reduced fuel costs by 25% with AI route optimization',
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  const activeIndustryData = industries.find(ind => ind.id === activeIndustry)

  return (
    <section id="industries" className="py-20 bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 network-pattern opacity-15"></div>
      
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
            AI Solutions for <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI automation solutions are designed to work across all industries, 
            delivering measurable results and driving transformation.
          </p>
        </motion.div>

        {/* Industry Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeIndustry === industry.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <industry.icon className="w-4 h-4" />
              <span>{industry.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Industry Content */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-start mb-16"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Industry Header */}
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${activeIndustryData.color} rounded-xl flex items-center justify-center glow-blue`}>
                <activeIndustryData.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{activeIndustryData.name}</h3>
                <p className="text-gray-300">{activeIndustryData.description}</p>
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 text-red-400 mr-2" />
                Common Challenges
              </h4>
              <div className="grid gap-3">
                {activeIndustryData.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                Our AI Solutions
              </h4>
              <div className="grid gap-3">
                {activeIndustryData.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                Measurable Benefits
              </h4>
              <div className="grid gap-4">
                {activeIndustryData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 glow-border"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{benefit}</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 glow-border">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                Success Story
              </h4>
              <p className="text-gray-300 mb-4">{activeIndustryData.caseStudy}</p>
              <button className="btn-outline text-sm">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Industry Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
            Industry Impact Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Industries Served", value: "15+", description: "across all sectors" },
              { icon: DollarSign, label: "Average ROI", value: "3-5x", description: "within 6 months" },
              { icon: Clock, label: "Implementation", value: "4-8 weeks", description: "to first results" },
              { icon: TrendingUp, label: "Success Rate", value: "98%", description: "client satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 glow-blue">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-2 text-shadow">{stat.value}</div>
                <div className="text-sm text-gray-300 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-blue-950/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 glow-border">
            <h3 className="text-2xl font-bold text-white mb-4 text-shadow">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can address your industry-specific challenges and drive measurable results.
            </p>
            <button className="btn-primary">
              Schedule Industry Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries


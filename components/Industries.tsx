'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Heart, Car, GraduationCap, Factory, Plane, Globe, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'

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
    <section id="industries" className="py-20 bg-white">
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
            AI Solutions for <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI solutions are transforming businesses across diverse sectors, 
            from retail to healthcare, manufacturing to finance.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveIndustry(industry.id)}
              className={`text-left p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                activeIndustry === industry.id
                  ? 'border-primary-500 bg-primary-50 shadow-lg'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{industry.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Active Industry Details */}
        {activeIndustryData && (
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start mb-16"
          >
            {/* Industry Overview */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeIndustryData.name}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{activeIndustryData.description}</p>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 text-red-500 mr-2" />
                  Key Challenges
                </h4>
                <div className="space-y-3">
                  {activeIndustryData.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-primary-500 mr-2" />
                  AI Solutions
                </h4>
                <div className="space-y-3">
                  {activeIndustryData.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{solution}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits & Case Study */}
            <div className="space-y-8">
              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  Measurable Benefits
                </h4>
                <div className="grid gap-4">
                  {activeIndustryData.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200"
                    >
                      <div className="text-sm text-green-600 font-medium">{benefit}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Success Story</h4>
                <p className="text-gray-700 mb-4">{activeIndustryData.caseStudy}</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Industry Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Cross-Industry Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Industries Served", value: "25+", description: "across all sectors" },
              { label: "Average ROI", value: "3.2x", description: "within 12 months" },
              { label: "Implementation Time", value: "6-12 weeks", description: "from start to finish" },
              { label: "Client Satisfaction", value: "98%", description: "would recommend us" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="text-2xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200 mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Implementation Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discovery", description: "Understand your business needs and AI readiness" },
              { step: "2", title: "Strategy", description: "Design custom AI solution architecture" },
              { step: "3", title: "Implementation", description: "Deploy and integrate AI systems" },
              { step: "4", title: "Optimization", description: "Monitor, improve, and scale solutions" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h4>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Whether you're in retail, healthcare, manufacturing, or any other industry, 
              our AI solutions can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Industry Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                View Solutions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries


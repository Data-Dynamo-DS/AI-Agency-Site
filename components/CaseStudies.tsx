'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, BarChart3, Target, Zap } from 'lucide-react'
import * as d3 from 'd3'

interface CaseStudy {
  id: number
  company: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  logo: string
  testimonial: string
  author: string
  role: string
}

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0)
  const chartRef = useRef<HTMLDivElement>(null)

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      company: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Manual customer onboarding was taking 2-3 hours per customer, limiting scalability and increasing costs.",
      solution: "Implemented AI-powered onboarding agents that handle 80% of customer setup automatically, with human agents handling complex cases.",
      results: [
        { metric: "Onboarding Time", value: "15 minutes", improvement: "90% reduction" },
        { metric: "Customer Satisfaction", value: "4.8/5", improvement: "+0.6 points" },
        { metric: "Cost per Onboarding", value: "$25", improvement: "75% reduction" }
      ],
      logo: "/api/placeholder/80/80",
      testimonial: "The AI onboarding system transformed our customer experience. We can now onboard 10x more customers without increasing our support team.",
      author: "Sarah Chen",
      role: "VP of Customer Success"
    },
    {
      id: 2,
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Inventory management was causing stockouts and overstock situations, leading to $2M in annual losses.",
      solution: "Deployed AI agents that monitor inventory levels, predict demand, and automatically reorder products based on real-time data.",
      results: [
        { metric: "Stockout Reduction", value: "85%", improvement: "vs. previous year" },
        { metric: "Inventory Turnover", value: "12x/year", improvement: "+3x improvement" },
        { metric: "Annual Savings", value: "$1.8M", improvement: "90% of losses recovered" }
      ],
      logo: "/api/placeholder/80/80",
      testimonial: "Our AI inventory system pays for itself. We've eliminated stockouts and reduced carrying costs significantly.",
      author: "Michael Rodriguez",
      role: "Operations Director"
    },
    {
      id: 3,
      company: "HealthTech Pro",
      industry: "Healthcare",
      challenge: "Patient appointment scheduling was inefficient, with 30% no-show rates and long wait times for urgent care.",
      solution: "Created intelligent scheduling agents that optimize appointment slots, send reminders, and handle rescheduling automatically.",
      results: [
        { metric: "No-Show Rate", value: "8%", improvement: "73% reduction" },
        { metric: "Wait Time", value: "15 minutes", improvement: "60% reduction" },
        { metric: "Patient Satisfaction", value: "4.9/5", improvement: "+0.8 points" }
      ],
      logo: "/api/placeholder/80/80",
      testimonial: "The AI scheduling system has revolutionized our patient experience. We're seeing more patients with less staff overhead.",
      author: "Dr. Emily Watson",
      role: "Medical Director"
    }
  ]

  useEffect(() => {
    if (chartRef.current && caseStudies[activeCase]) {
      const data = caseStudies[activeCase].results
      
      // Clear previous chart
      d3.select(chartRef.current).selectAll("*").remove()
      
      const margin = { top: 20, right: 20, bottom: 40, left: 60 }
      const width = 400 - margin.left - margin.right
      const height = 300 - margin.top - margin.bottom
      
      // Helper function to extract numeric values from improvement strings
      const extractNumericValue = (improvement: string): number => {
        const match = improvement.match(/(\d+(?:\.\d+)?)/)
        return match ? parseFloat(match[1]) : 0
      }
      
      // Create scales
      const x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(d => d.metric))
        .padding(0.2)
      
      const maxValue = Math.max(...data.map(d => extractNumericValue(d.improvement)))
      const y = d3.scaleLinear()
        .domain([0, maxValue * 1.2])
        .range([height, 0])
      
      const svg = d3.select(chartRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
      
      // Add gradient
      const defs = svg.append("defs")
      const gradient = defs.append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%")
      
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#3b82f6")
      
      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#8b5cf6")
      
      // Add bars
      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => x(d.metric)!)
        .attr("y", d => y(extractNumericValue(d.improvement)))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(extractNumericValue(d.improvement)))
        .attr("fill", "url(#gradient)")
        .attr("rx", 4)
      
      // Add axes
      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)")
      
      svg.append("g")
        .call(d3.axisLeft(y).tickFormat(d => `${d}%`))
      
      // Add labels
      svg.selectAll(".bar-label")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "bar-label")
        .attr("x", d => x(d.metric)! + x.bandwidth() / 2)
        .attr("y", d => y(extractNumericValue(d.improvement)) - 5)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#374151")
        .text(d => d.improvement)
    }
  }, [activeCase])

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            Real-World <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI solutions have transformed businesses across industries, 
            delivering measurable ROI and operational excellence.
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCase === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">{study.company.charAt(0)}</span>
                </div>
                <span>{study.company}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-start mb-16"
        >
          {/* Case Study Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {caseStudies[activeCase].company.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{caseStudies[activeCase].company}</h3>
                <p className="text-gray-600">{caseStudies[activeCase].industry} Industry</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="w-5 h-5 text-primary-600 mr-2" />
                The Challenge
              </h4>
              <p className="text-gray-700 leading-relaxed">{caseStudies[activeCase].challenge}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Zap className="w-5 h-5 text-primary-600 mr-2" />
                Our Solution
              </h4>
              <p className="text-gray-700 leading-relaxed">{caseStudies[activeCase].solution}</p>
            </div>

            {/* Results Grid */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-primary-600 mr-2" />
                Results & Impact
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {caseStudies[activeCase].results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600">{result.metric}</div>
                        <div className="text-lg font-bold text-gray-900">{result.value}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">{result.improvement}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {caseStudies[activeCase].author.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">"{caseStudies[activeCase].testimonial}"</p>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{caseStudies[activeCase].author}</div>
                    <div className="text-gray-600">{caseStudies[activeCase].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Visualization */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Performance Improvement
            </h4>
            <div ref={chartRef} className="flex justify-center"></div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Visual representation of key metrics improvement
              </p>
            </div>
          </div>
        </motion.div>

        {/* Industry Impact Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Impact Across Industries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "SaaS Companies", value: "85%", description: "faster customer onboarding" },
              { icon: DollarSign, label: "E-commerce", value: "$2.1M", description: "average annual savings" },
              { icon: Clock, label: "Healthcare", value: "60%", description: "reduction in wait times" },
              { icon: TrendingUp, label: "Manufacturing", value: "3.2x", description: "increase in efficiency" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business operations and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                View More Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies

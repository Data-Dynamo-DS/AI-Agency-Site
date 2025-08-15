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
    <section id="case-studies" className="py-20 bg-gray-950 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 network-pattern opacity-20"></div>
      
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
            Real-World <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our AI solutions have transformed businesses across industries, 
            delivering measurable results and driving growth.
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-gray-800/50 p-2 rounded-xl backdrop-blur-sm border border-gray-700">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                Case {index + 1}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-start mb-16"
        >
          {/* Left Content */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center glow-blue">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{caseStudies[activeCase].company}</h3>
                <p className="text-blue-400 font-medium">{caseStudies[activeCase].industry}</p>
              </div>
            </div>

            {/* Challenge */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Target className="w-5 h-5 text-red-400 mr-2" />
                The Challenge
              </h4>
              <p className="text-gray-300 leading-relaxed">{caseStudies[activeCase].challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                Our Solution
              </h4>
              <p className="text-gray-300 leading-relaxed">{caseStudies[activeCase].solution}</p>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 glow-border">
              <p className="text-gray-200 italic mb-4">"{caseStudies[activeCase].testimonial}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">{caseStudies[activeCase].author}</div>
                  <div className="text-sm text-gray-400">{caseStudies[activeCase].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Chart */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white text-center">Performance Improvements</h4>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 glow-border">
              <div ref={chartRef} className="w-full h-80"></div>
            </div>
            
            {/* Metrics Summary */}
            <div className="grid grid-cols-1 gap-4">
              {caseStudies[activeCase].results.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400">{result.metric}</div>
                      <div className="text-lg font-semibold text-white">{result.value}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-medium">{result.improvement}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-blue-950/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 glow-border">
            <h3 className="text-2xl font-bold text-white mb-4 text-shadow">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business operations and drive similar results.
            </p>
            <button className="btn-primary">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies

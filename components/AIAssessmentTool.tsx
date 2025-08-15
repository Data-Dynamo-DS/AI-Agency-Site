'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, CheckCircle, Brain, Zap, Target, TrendingUp } from 'lucide-react'

interface AIAssessmentToolProps {
  isOpen: boolean
  onClose: () => void
}

interface Question {
  id: number
  text: string
  options: {
    value: string
    label: string
    description: string
  }[]
}

interface AssessmentResult {
  score: number
  recommendations: string[]
  services: string[]
  estimatedROI: string
  timeline: string
}

const AIAssessmentTool = ({ isOpen, onClose }: AIAssessmentToolProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<AssessmentResult | null>(null)

  const questions: Question[] = [
    {
      id: 1,
      text: "What's your primary business goal for implementing AI?",
      options: [
        { value: "automation", label: "Process Automation", description: "Reduce manual tasks and increase efficiency" },
        { value: "growth", label: "Business Growth", description: "Scale operations and increase revenue" },
        { value: "customer", label: "Customer Experience", description: "Improve customer satisfaction and engagement" },
        { value: "innovation", label: "Innovation", description: "Stay ahead of competition with cutting-edge tech" }
      ]
    },
    {
      id: 2,
      text: "Which area of your business needs the most improvement?",
      options: [
        { value: "sales", label: "Sales & Marketing", description: "Lead generation, customer acquisition, campaigns" },
        { value: "operations", label: "Operations", description: "Internal processes, workflow optimization" },
        { value: "customer", label: "Customer Support", description: "24/7 support, quick response times" },
        { value: "data", label: "Data & Analytics", description: "Insights, reporting, decision making" }
      ]
    },
    {
      id: 3,
      text: "What's your current team size?",
      options: [
        { value: "small", label: "1-10 employees", description: "Small team, need to maximize efficiency" },
        { value: "medium", label: "11-50 employees", description: "Growing team, scaling challenges" },
        { value: "large", label: "50+ employees", description: "Large organization, complex processes" }
      ]
    },
    {
      id: 4,
      text: "What's your budget range for AI implementation?",
      options: [
        { value: "starter", label: "$5K - $25K", description: "Entry-level automation solutions" },
        { value: "growth", label: "$25K - $100K", description: "Comprehensive AI systems" },
        { value: "enterprise", label: "$100K+", description: "Full-scale enterprise solutions" }
      ]
    },
    {
      id: 5,
      text: "How quickly do you need to see results?",
      options: [
        { value: "immediate", label: "Immediate (1-2 months)", description: "Quick wins and fast implementation" },
        { value: "quarter", label: "Quarter (3-6 months)", description: "Balanced approach with steady progress" },
        { value: "long", label: "Long-term (6+ months)", description: "Strategic transformation with lasting impact" }
      ]
    }
  ]

  const calculateResults = (): AssessmentResult => {
    const scores = {
      automation: 0,
      growth: 0,
      customer: 0,
      innovation: 0,
      sales: 0,
      operations: 0,
      data: 0
    }

    Object.values(answers).forEach(answer => {
      if (scores.hasOwnProperty(answer)) {
        scores[answer as keyof typeof scores] += 1
      }
    })

    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0)
    const recommendations: string[] = []
    const services: string[] = []

    // Generate recommendations based on answers
    if (scores.sales > 0) {
      recommendations.push("Implement AI-powered sales automation for lead generation and follow-up")
      services.push("AI Sales Agents")
    }
    if (scores.operations > 0) {
      recommendations.push("Deploy workflow automation to streamline internal processes")
      services.push("Process Automation")
    }
    if (scores.customer > 0) {
      recommendations.push("Create intelligent chatbots for 24/7 customer support")
      services.push("Digital Agent Replicas")
    }
    if (scores.data > 0) {
      recommendations.push("Build comprehensive analytics dashboards for data-driven decisions")
      services.push("Data Analytics & Automation")
    }

    if (recommendations.length === 0) {
      recommendations.push("Start with basic process automation to build AI foundation")
      services.push("AI Agent Creation")
    }

    const estimatedROI = scores.growth > 0 ? "3-5x ROI within 12 months" : "2-3x ROI within 6 months"
    const timeline = answers[5] === "immediate" ? "1-2 months" : answers[5] === "quarter" ? "3-6 months" : "6-12 months"

    return {
      score: totalScore,
      recommendations,
      services,
      estimatedROI,
      timeline
    }
  }

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const assessmentResults = calculateResults()
      setResults(assessmentResults)
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
    setResults(null)
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-hidden glow-border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Brain className="w-8 h-8" />
                  <div>
                    <h2 className="text-2xl font-bold">AI Readiness Assessment</h2>
                    <p className="text-blue-100">Discover how AI can transform your business</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {!showResults ? (
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Question {currentStep + 1} of {questions.length}</span>
                      <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <motion.div
                    key={questions[currentStep].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-white text-shadow">
                      {questions[currentStep].text}
                    </h3>

                    {/* Options */}
                    <div className="grid gap-4">
                      {questions[currentStep].options.map((option, index) => (
                        <motion.button
                          key={option.value}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                            answers[questions[currentStep].id] === option.value
                              ? 'border-blue-500 bg-blue-600/20 shadow-lg shadow-blue-500/25'
                              : 'border-gray-700 bg-gray-800/50 hover:border-blue-500/50 hover:bg-gray-800'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="font-semibold text-white mb-1">{option.label}</div>
                              <div className="text-gray-300 text-sm">{option.description}</div>
                            </div>
                            {answers[questions[currentStep].id] === option.value && (
                              <CheckCircle className="w-6 h-6 text-blue-400" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Navigation */}
                  <div className="flex justify-between pt-6">
                    <button
                      onClick={handlePrevious}
                      disabled={currentStep === 0}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Previous</span>
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={!answers[questions[currentStep].id]}
                      className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <span>{currentStep === questions.length - 1 ? 'Get Results' : 'Next'}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Results */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 text-shadow">Your AI Readiness Score</h3>
                    <div className="text-6xl font-bold text-gradient mb-4">{results?.score}/100</div>
                    <p className="text-gray-300 text-lg">
                      Based on your responses, here's how AI can transform your business
                    </p>
                  </div>

                  {/* Recommendations Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="tech-card p-6">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-blue-400 mr-2" />
                        Key Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {results?.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="tech-card p-6">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Target className="w-5 h-5 text-blue-400 mr-2" />
                        Recommended Services
                      </h4>
                      <ul className="space-y-2">
                        {results?.services.map((service, index) => (
                          <li key={index} className="flex items-start space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ROI and Timeline */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="tech-card p-6 text-center">
                      <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-white mb-2">Estimated ROI</h4>
                      <p className="text-2xl font-bold text-green-400">{results?.estimatedROI}</p>
                    </div>
                    <div className="tech-card p-6 text-center">
                      <Target className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-white mb-2">Implementation Timeline</h4>
                      <p className="text-2xl font-bold text-blue-400">{results?.timeline}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-6">
                    <button className="btn-primary mr-4">
                      Schedule Consultation
                    </button>
                    <button
                      onClick={() => {
                        setShowResults(false)
                        setCurrentStep(0)
                        setAnswers({})
                        setResults(null)
                      }}
                      className="btn-outline"
                    >
                      Take Assessment Again
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AIAssessmentTool


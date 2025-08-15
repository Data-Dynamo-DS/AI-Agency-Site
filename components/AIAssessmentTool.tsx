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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">AI Readiness Assessment</h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-primary-100 mt-2">
            Discover how AI can transform your business in just 5 questions
          </p>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Question {currentStep + 1} of {questions.length}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Question */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {questions[currentStep].text}
                  </h3>
                  
                  {/* Options */}
                  <div className="space-y-3">
                    {questions[currentStep].options.map((option) => (
                      <motion.button
                        key={option.value}
                        onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                          answers[questions[currentStep].id] === option.value
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={!answers[questions[currentStep].id]}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Results Header */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Your AI Assessment Results
                  </h3>
                  <p className="text-gray-600">
                    Based on your answers, here's how AI can transform your business
                  </p>
                </div>

                {/* Results Content */}
                {results && (
                  <div className="space-y-6">
                    {/* Score */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 mb-2">
                          AI Readiness Score: {Math.round((results.score / 5) * 100)}%
                        </div>
                        <p className="text-gray-600">
                          Your business is well-positioned for AI transformation
                        </p>
                      </div>
                    </motion.div>

                    {/* Recommendations */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Brain className="w-5 h-5 text-primary-600 mr-2" />
                        Recommended Solutions
                      </h4>
                      <div className="space-y-3">
                        {results.recommendations.map((rec, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{rec}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Zap className="w-5 h-5 text-primary-600 mr-2" />
                        Services to Consider
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {results.services.map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-primary-300 transition-colors"
                          >
                            {service}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* ROI & Timeline */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                        <Target className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Estimated ROI</div>
                        <div className="font-semibold text-gray-900">{results.estimatedROI}</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                        <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Timeline</div>
                        <div className="font-semibold text-gray-900">{results.timeline}</div>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex flex-col sm:flex-row gap-3 pt-4"
                    >
                      <button className="btn-primary flex-1">
                        Schedule Consultation
                      </button>
                      <button className="btn-outline flex-1">
                        Download Report
                      </button>
                      <button
                        onClick={handleRestart}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Take Assessment Again
                      </button>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default AIAssessmentTool


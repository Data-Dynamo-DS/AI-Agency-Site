'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import AIAssessmentTool from '@/components/AIAssessmentTool'
import SalesMarketingAI from '@/components/SalesMarketingAI'
import CaseStudies from '@/components/CaseStudies'
import Industries from '@/components/Industries'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import LiveChat from '@/components/LiveChat'

export default function Home() {
  const [showAssessment, setShowAssessment] = useState(false)

  return (
    <main className="min-h-screen">
      <Header onStartAssessment={() => setShowAssessment(true)} />
      <Hero onStartAssessment={() => setShowAssessment(true)} />
      <ServicesOverview />
      <AIAssessmentTool 
        isOpen={showAssessment} 
        onClose={() => setShowAssessment(false)} 
      />
      <SalesMarketingAI />
      <CaseStudies />
      <Industries />
      <FAQ />
      <Footer />
      <LiveChat />
    </main>
  )
}


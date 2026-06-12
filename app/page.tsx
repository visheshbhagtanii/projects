'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AreasOfWork from '@/components/AreasOfWork'
import TherapyServices from '@/components/TherapyServices'
import FAQ from '@/components/FAQ'
import Privacy from '@/components/Privacy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <AreasOfWork />
      <TherapyServices />
      <FAQ />
      <Privacy />
      <Contact />
      <Footer />
    </main>
  )
}

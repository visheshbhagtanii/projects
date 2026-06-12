'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What happens after booking?',
      answer: 'Once you fill out the intake form, I\'ll get back to you within 1-2 business days to guide you through the next steps and schedule your session.',
    },
    {
      question: 'Not sure which service is right for you?',
      answer: 'Book a free 30-minute discovery call to discuss your needs and find the best approach for your mental health journey.',
    },
  ]

  return (
    <section className="px-8 md:px-16 py-20 md:py-32 bg-[#f5f1ed]">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-xl">ℹ️</span>
                  <h3 className="font-bold text-black text-lg">
                    {faq.question}
                  </h3>
                </div>
                <span className="text-gray-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <p className="mt-4 text-gray-700 ml-10 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Schedule Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  )
}

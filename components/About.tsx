import Image from 'next/image'

export default function About() {
  return (
    <section className="px-8 md:px-16 py-20 md:py-32 bg-[#f5f1ed]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          ABOUT ME
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <div className="w-full max-w-sm h-96 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-blue-400 flex items-center justify-center text-white font-bold">
                Professional Photo
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I&apos;m Sonakshi Bhargava (PhD), she/her. I hold an MSc in Clinical Psychology from Christ University and am currently a PhD scholar and Research Fellow. My therapeutic approach is rooted in evidence-based methods and tailored to your unique needs.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              My practice is centered around creating a safe, non-judgmental space where clients can explore their thoughts and feelings. I believe in a holistic approach to mental health that considers all aspects of a person&apos;s life.
            </p>
            
            <div className="flex items-center gap-2 text-gray-700">
              <span>📍</span>
              <a href="https://instagram.com/mentalhealth.withsonakshi" className="hover:text-blue-600">
                @mentalhealth.withsonakshi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

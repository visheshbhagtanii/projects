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
              Dr. Sonakshi Bhargava holds a PhD in Clinical Psychology and an MSc in Clinical Psychology from Christ University. As a therapist and researcher, her work is grounded in evidence-based practice, with a particular focus on helping individuals navigate grief and loss, relationship difficulties, emotional abuse, trauma, anxiety, depression, and life transitions.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Drawing primarily from Cognitive Behaviour Therapy (CBT) and a trauma-informed perspective, Dr. Bhargava provides a compassionate, collaborative, and non-judgmental therapeutic space where individuals can explore their experiences, develop resilience, and work towards meaningful change.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Her clinical approach recognizes the unique experiences of each individual and aims to foster emotional well-being, self-understanding, and long-term psychological growth through scientifically informed and client-centered care.
            </p>
            
            <div className="flex items-center gap-2 text-gray-700">
              <span>📍</span>
              <a href="https://instagram.com/mentalhealth.withsonakshi" className="hover:text-blue-600">
                @mentalhealthwithsonakshi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

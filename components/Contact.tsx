export default function Contact() {
  return (
    <section className="px-8 md:px-16 py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          CONTACT
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-700 text-lg">
            <span>📧</span>
            <a href="mailto:psychologistsonakshi@gmail.com" className="hover:text-blue-600">
              psychologistsonakshi@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 text-lg">
            <span>📱</span>
            <a href="https://instagram.com/mentalhealthwithsonakshi" className="hover:text-blue-600">
              @mentalhealthwithsonakshi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

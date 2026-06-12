export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-8 md:px-16 py-16 md:py-32 bg-[#f5f1ed]">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold text-gray-700 tracking-widest mb-4">
          COUNSELLING PSYCHOLOGIST
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 leading-tight">
          SONAKSHI BHARGAVA
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Psychologist | PhD Scholar
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Welcome to My Counselling Practice
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
          Thank you for considering therapy with me. I&apos;m here to offer a safe, supportive, and confidential space where you can explore your emotions, challenges, and goals at your own pace.
        </p>
      </div>
      
      <div className="hidden lg:flex items-start justify-end">
        <div className="bg-white rounded-3xl px-8 py-12 shadow-lg max-w-xs text-center">
          <p className="text-2xl font-bold text-black leading-tight">
            Empowering your mental well-being
          </p>
        </div>
      </div>
    </section>
  )
}

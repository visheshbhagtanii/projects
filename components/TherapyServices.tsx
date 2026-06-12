'use client'

export default function TherapyServices() {
  const services = [
    {
      title: 'Individual Counselling',
      subtitle: 'INDIA',
      price: '₹1,499',
      duration: '50 minutes',
      icon: '👤',
      color: 'from-blue-50 to-blue-100',
      features: [
        'One-on-one personalized therapy',
        'Online via Google Meet',
        'English & Hindi',
        'Flexible scheduling',
      ],
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'Individual Counselling',
      subtitle: 'OVERSEAS',
      price: '$30',
      duration: '50 minutes',
      icon: '🌍',
      color: 'from-purple-50 to-purple-100',
      features: [
        'International clients welcome',
        'English & Hindi',
        'Flexible scheduling',
      ],
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      title: "Couple's Counselling",
      subtitle: '',
      price: '₹2,499',
      duration: '60 minutes',
      icon: '❤️',
      color: 'from-pink-50 to-pink-100',
      features: [
        'Both partners included',
        'Relationship focused',
        'Extended session time',
      ],
      buttonColor: 'bg-pink-600 hover:bg-pink-700',
    },
    {
      title: 'Counselling Package',
      subtitle: 'COMPREHENSIVE THERAPY JOURNEY',
      price: '₹5,999',
      duration: '5 Sessions',
      badge: 'BEST VALUE',
      icon: '🎯',
      color: 'from-green-50 to-green-100',
      features: [
        '5 individual sessions',
        'Structured approach',
        'Progress tracking',
      ],
      buttonColor: 'bg-green-600 hover:bg-green-700',
      highlighted: true,
    },
    {
      title: 'Career Guidance',
      subtitle: 'NAVIGATE YOUR PROFESSIONAL JOURNEY',
      price: '₹1,499',
      duration: '50 minutes',
      icon: '💼',
      color: 'from-amber-50 to-amber-100',
      features: [
        'Career assessment',
        'Goal setting',
        'Action planning',
      ],
      buttonColor: 'bg-amber-600 hover:bg-amber-700',
    },
  ]

  return (
    <section className="px-8 md:px-16 py-20 md:py-32 bg-[#f5f1ed]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          THERAPY SERVICES
        </h2>
        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
          Choose from our range of professional mental health services designed to support your unique journey towards well-being.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative ${
                service.highlighted
                  ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-green-50 to-green-100'
                  : `bg-gradient-to-br ${service.color}`
              }`}
            >
              {service.badge && (
                <div className="absolute -top-3 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {service.badge}
                </div>
              )}
              
              <div className="text-4xl mb-4">{service.icon}</div>
              
              <h3 className="text-xl font-bold text-black mb-1">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-xs font-semibold text-gray-600 mb-6">
                  {service.subtitle}
                </p>
              )}
              
              <p className="text-gray-700 text-sm mb-2">
                {service.duration}
              </p>
              
              <p className="text-3xl font-bold text-black mb-6">
                {service.price}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full ${service.buttonColor} text-white font-bold py-2 rounded-lg transition`}
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

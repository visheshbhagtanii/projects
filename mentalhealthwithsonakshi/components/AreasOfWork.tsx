export default function AreasOfWork() {
  const areas = [
    {
      title: 'Relationship Issues',
      description: 'Improve complex interpersonal dynamics and improving communication.',
    },
    {
      title: 'Anxiety & Depression',
      description: 'Managing symptoms and developing coping strategies for better mental health.',
    },
    {
      title: 'Self-esteem',
      description: 'Building confidence and developing a positive self-image.',
    },
    {
      title: 'Eating Disorders',
      description: 'Support for recovery and developing a healthier relationship with food.',
    },
    {
      title: 'Emotional Regulation',
      description: 'Learning to understand and manage emotional responses effectively.',
    },
    {
      title: 'Young Adult Concerns',
      description: 'Addressing challenges specific to early adulthood and life transitions.',
    },
    {
      title: 'Grief and Trauma',
      description: 'Processing loss and healing from traumatic experiences with compassionate support.',
    },
    {
      title: 'Emotional Abuse',
      description: 'Recovery and healing from emotional abuse with validation and therapeutic support.',
    },
  ]

  return (
    <section className="px-8 md:px-16 py-20 md:py-32 bg-[#f5f1ed]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
          AREAS I WORK WITH
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="p-6">
              <h3 className="text-xl font-bold text-black mb-3">
                {area.title}
              </h3>
              <p className="text-gray-700">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

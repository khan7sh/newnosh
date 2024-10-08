import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes, we have a variety of vegetarian dishes on our menu, including traditional Afghan vegetarian options."
  },
  {
    question: "Is your meat Halal?",
    answer: "All our meat is 100% Halal certified."
  },
  {
    question: "Are you open on Mondays?",
    answer: "No, we are closed on Mondays. We are open Tuesday to Sunday from 8:00 AM to 10:00 PM."
  },
  {
    question: "Do I need to make a reservation?",
    answer: "Reservations are recommended, especially for dinner and weekends, but we also welcome walk-ins."
  },
  {
    question: "Do you offer takeaway or delivery?",
    answer: "Yes, we offer both takeaway and delivery services. Please check our website or call us for more details."
  }
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-burgundy text-cream">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 text-beige" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-cream border-opacity-20 pb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-serif font-semibold text-lg text-cream">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-cream" /> : <ChevronDown className="text-cream" />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-cream text-opacity-90 font-light leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
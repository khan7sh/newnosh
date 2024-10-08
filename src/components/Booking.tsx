import React from 'react'
import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-16 bg-green text-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-beige" data-aos="fade-up">Reserve Your Table</h2>
        <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">Experience the flavors of Afghanistan at Noshe Cambridge</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/booking" className="btn bg-cream text-green hover:bg-opacity-90 transition-colors text-lg px-8 py-3" data-aos="fade-up" data-aos-delay="400">
            Book a Table
          </Link>
          <div className="flex items-center text-lg" data-aos="fade-up" data-aos-delay="600">
            <Phone className="mr-2" size={24} />
            <span>Or call: 07964 624055</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
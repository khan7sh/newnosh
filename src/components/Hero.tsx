import React from 'react'

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center h-screen flex items-center">
      <div className="container mx-auto text-center px-4">
        <h1 className="mb-4" data-aos="fade-up">
          <span className="text-beige">Welcome to</span>{' '}
          <span className="text-beige font-bold">Noshe Cambridge</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light text-cream" data-aos="fade-up" data-aos-delay="200">Experience the flavors of Afghanistan in Cambridge</p>
        <button onClick={scrollToBooking} className="btn text-xl" data-aos="fade-up" data-aos-delay="400">Book a Table</button>
      </div>
    </section>
  )
}

export default Hero
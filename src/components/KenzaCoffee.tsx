import React from 'react'
import { Coffee } from 'lucide-react'

const KenzaCoffee: React.FC = () => {
  return (
    <section id="coffee" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">
          <span className="text-green">Kenza Coffee</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p className="mb-4">
              At Noshe, we take pride in our house-roasted coffee, Kenza. Our master roasters carefully select the finest beans from around the world, with a focus on Afghan and neighboring regions' varieties.
            </p>
            <p className="mb-4">
              Each batch is roasted to perfection, bringing out the unique flavors and aromas that make Kenza Coffee a true delight for coffee enthusiasts.
            </p>
            <p>
              Take the Kenza experience home with you! We offer 250g bags of our freshly roasted coffee beans, available for purchase at our restaurant.
            </p>
          </div>
          <div className="bg-brown p-8 rounded-lg text-cream mt-8 md:mt-0" data-aos="fade-left">
            <Coffee className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-2 text-beige">Kenza Coffee Offerings</h3>
            <ul className="space-y-2">
              <li>Single-origin Afghan beans</li>
              <li>Custom Noshe blend</li>
              <li>Seasonal special roasts</li>
              <li>250g bags available for take-home</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KenzaCoffee
import React from 'react'
import { Utensils } from 'lucide-react'

const Menu: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          <span className="text-green font-bold">Menu Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="menu-category">
            <h3 className="text-2xl font-serif font-semibold mb-4 flex items-center">
              <Utensils className="text-burgundy mr-2" size={24} />
              <span>Starters</span>
            </h3>
            <ul className="space-y-6">
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Bolani</h4>
                <p className="text-sm text-gray-600">Stuffed flatbread with potato and leeks</p>
                <span className="text-burgundy font-semibold">£5.99</span>
              </li>
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Mantu</h4>
                <p className="text-sm text-gray-600">Steamed dumplings with spiced beef and yogurt sauce</p>
                <span className="text-burgundy font-semibold">£6.99</span>
              </li>
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Bedanjan Borani</h4>
                <p className="text-sm text-gray-600">Fried eggplant with tomato sauce and yogurt</p>
                <span className="text-burgundy font-semibold">£5.50</span>
              </li>
            </ul>
          </div>
          <div className="menu-category">
            <h3 className="text-2xl font-serif font-semibold mb-4 flex items-center">
              <Utensils className="text-burgundy mr-2" size={24} />
              <span>Main Courses</span>
            </h3>
            <ul className="space-y-6">
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Kabuli Palao</h4>
                <p className="text-sm text-gray-600">Afghanistan's national dish - rice with lamb, raisins, and carrots</p>
                <span className="text-burgundy font-semibold">£14.99</span>
              </li>
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Kofta Qorma</h4>
                <p className="text-sm text-gray-600">Meatballs in a rich tomato and spice sauce</p>
                <span className="text-burgundy font-semibold">£12.99</span>
              </li>
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Sabzi Palak</h4>
                <p className="text-sm text-gray-600">Spinach curry with aromatic spices</p>
                <span className="text-burgundy font-semibold">£10.99</span>
              </li>
            </ul>
          </div>
          <div className="menu-category">
            <h3 className="text-2xl font-serif font-semibold mb-4 flex items-center">
              <Utensils className="text-burgundy mr-2" size={24} />
              <span>Breakfast</span>
            </h3>
            <ul className="space-y-6">
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Noshe Breakfast</h4>
                <p className="text-sm text-gray-600">Eggs, naan bread, cheese, and Afghan tea</p>
                <span className="text-burgundy font-semibold">£8.99</span>
              </li>
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Afghan Shakshuka</h4>
                <p className="text-sm text-gray-600">Eggs poached in a sauce of tomatoes, olive oil, and spices</p>
                <span className="text-burgundy font-semibold">£9.99</span>
              </li>
              <li className="menu-item">
                <h4 className="text-lg font-semibold">Kenza Coffee & Pastry</h4>
                <p className="text-sm text-gray-600">Our house-roasted coffee with a traditional Afghan pastry</p>
                <span className="text-burgundy font-semibold">£6.99</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-base text-gray-600 mb-4">All our dishes are prepared fresh daily using locally sourced ingredients.</p>
          <button onClick={scrollToBooking} className="btn flex items-center mx-auto">
            <Utensils className="mr-2" size={18} />
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  )
}

export default Menu
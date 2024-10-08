import React, { useState, useEffect } from 'react'
import { Coffee, Menu as MenuIcon, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-burgundy shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Coffee className="text-cream mr-2" size={28} />
          <span className="font-serif text-2xl md:text-3xl font-bold text-cream">Noshe Cambridge</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {['menu', 'about', 'coffee', 'faq'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-cream hover:text-beige transition-colors duration-300 font-medium text-lg capitalize"
            >
              {item}
            </button>
          ))}
          <Link
            to="/booking"
            className="bg-cream text-burgundy hover:bg-beige transition-colors duration-300 px-4 py-2 rounded-full font-semibold text-lg"
          >
            Book a Table
          </Link>
        </nav>
        <button className="md:hidden text-cream" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-burgundy">
          <nav className="container mx-auto px-4 py-4">
            {['menu', 'about', 'coffee', 'faq'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-cream hover:text-beige transition-colors duration-300 py-2 font-medium text-lg capitalize"
              >
                {item}
              </button>
            ))}
            <Link
              to="/booking"
              className="block w-full text-center bg-cream text-burgundy hover:bg-beige transition-colors duration-300 py-2 mt-4 rounded-full font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
import React, { useState, useEffect } from 'react'
import { ArrowLeft, Phone, Check, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const BookingPage: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState('')
  const [people, setPeople] = useState('2')
  const [isFloorSeating, setIsFloorSeating] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Booking submitted:', { date, time, people, isFloorSeating, name, email, phone, specialRequests })
      setShowConfirmation(true)
    }
  }

  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 14; hour < 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const startHour = hour.toString().padStart(2, '0')
        const startMinute = minute.toString().padStart(2, '0')
        const endHour = (hour + 2 > 22 ? 22 : hour + 2).toString().padStart(2, '0')
        const endMinute = minute.toString().padStart(2, '0')
        slots.push(`${startHour}:${startMinute} - ${endHour}:${endMinute}`)
      }
    }
    return slots
  }

  const isDateDisabled = (date: Date) => {
    return date.getDay() === 1 // Monday is 1
  }

  useEffect(() => {
    if (date && people) {
      setIsLoading(true)
      // Simulate API call to fetch available times
      setTimeout(() => {
        setAvailableTimes(generateTimeSlots())
        setIsLoading(false)
      }, 1000)
    } else {
      setAvailableTimes([])
    }
  }, [date, people])

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!date) newErrors.date = "Please select a date"
    if (!time) newErrors.time = "Please select a time"
    if (!people) newErrors.people = "Please select the number of people"
    if (showContactForm) {
      if (!name.trim()) newErrors.name = "Please enter your name"
      if (!email.trim()) newErrors.email = "Please enter your email"
      if (!phone.trim()) newErrors.phone = "Please enter your phone number"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateForm()) {
      setShowContactForm(true)
    }
  }

  return (
    <section className="min-h-screen py-20 bg-cream flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <Link to="/" className="inline-flex items-center text-burgundy hover:text-green transition-colors mb-8">
          <ArrowLeft className="mr-2" size={24} />
          Back to Home
        </Link>
        <h2 className="section-title text-center mb-12">
          <span className="text-green">Book a Table</span>
        </h2>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label htmlFor="date" className="block text-burgundy font-semibold mb-2">Date</label>
                <DatePicker
                  selected={date}
                  onChange={(date: Date) => setDate(date)}
                  minDate={new Date()}
                  filterDate={(date) => !isDateDisabled(date)}
                  inline
                  className="w-full"
                />
                {date && isDateDisabled(date) && (
                  <p className="text-red-500 text-sm mt-1">We're closed on Mondays. Please select another day.</p>
                )}
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="people" className="block text-burgundy font-semibold mb-2">Number of People</label>
                <select
                  id="people"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  {[...Array(14)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                {errors.people && <p className="text-red-500 text-sm mt-1">{errors.people}</p>}
              </div>
              <div className="mb-6">
                <label className="flex items-center text-burgundy font-semibold">
                  <input
                    type="checkbox"
                    checked={isFloorSeating}
                    onChange={(e) => setIsFloorSeating(e.target.checked)}
                    className="mr-2"
                  />
                  Floor Seating
                </label>
                <p className="text-sm text-gray-600 mt-2">
                  Floor seating has limited availability. For reservations, please call{' '}
                  <a href="tel:+441223123456" className="text-burgundy hover:underline">
                    <Phone className="inline-block w-4 h-4 mr-1" />
                    +44 (0)1223 123456
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <label htmlFor="time" className="block text-burgundy font-semibold mb-2">Available Times</label>
                {isLoading ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-burgundy"></div>
                  </div>
                ) : availableTimes.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                    {availableTimes.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`p-2 rounded-md text-sm ${
                          time === slot
                            ? 'bg-burgundy text-cream'
                            : 'bg-cream text-burgundy hover:bg-burgundy hover:text-cream'
                        } transition-colors`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">Please select a date and number of people to see available times.</p>
                )}
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
              </div>
            </div>
          </div>
          {!showContactForm ? (
            <button
              type="button"
              className="w-full bg-burgundy text-cream py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors mt-6"
              onClick={handleNextStep}
            >
              Next: Contact Details
            </button>
          ) : (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-burgundy font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-burgundy font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-burgundy font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="specialRequests" className="block text-burgundy font-semibold mb-2">Special Requests (Optional)</label>
                  <textarea
                    id="specialRequests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={4}
                  />
                </div>
              </div>
              <div className="mt-8 p-4 bg-cream rounded-md">
                <h4 className="text-lg font-semibold mb-2">Booking Summary</h4>
                <p><strong>Date:</strong> {date?.toDateString()}</p>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Number of People:</strong> {people}</p>
                <p><strong>Floor Seating:</strong> {isFloorSeating ? 'Yes' : 'No'}</p>
              </div>
              <button
                type="submit"
                className="w-full bg-burgundy text-cream py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors mt-6"
              >
                Confirm Booking
              </button>
            </div>
          )}
        </form>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-2">
                <Check className="text-green-600" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Booking Confirmed!</h3>
            <p className="text-center mb-6">Thank you for your reservation. We look forward to seeing you at Noshe Cambridge.</p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-burgundy text-cream py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default BookingPage
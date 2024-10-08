import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import BookingPage from './components/BookingPage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
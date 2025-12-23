import React from 'react'
import { Link } from "react-router-dom";

const Footer = ({ footerRef }) => {
  return (
    <div ref={footerRef}>
      <section >
      <div className="h-10 bg-gradient-to-r from-red-50 via-teal-50 to-emerald-50"></div>

      <nav className="bg-gradient-to-r from-cyan-700 via-teal-700 to-emerald-700 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="flex items-center gap-3 mb-3">
  <Link to="/">
  <img
    src="/petzy101.png"
    alt="Petzy"
    className="h-16 md:h-20 lg:h-24 w-auto cursor-pointer"
  />
</Link>

  <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-red-300">
    Petzy
  </span>
</div>

                
              </div>
              <p className="text-lg text-red-950 leading-relaxed mb-4">
                At Petzy Store, we believe pets are family. That’s why we provide high-quality food, comfortable beds, engaging toys, medicines, and daily care essentials. 
                We are committed to helping pet owners give their pets a happy, healthy, and loving life.
              </p>
              <p className="text-red-300 font-semibold">
                Your One-Stop Pet Store
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-950 mb-4"></h3>
              <h3 className="text-xl font-bold text-red-950 mb-4"> Location</h3>
              <p className="text-red-950">Tokha , Greenland</p>
              <p className="text-red-950">Kathmandu, Nepal</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-950 mb-4"></h3>
              <p className="text-red-950 font-bold mb-">Open All days</p>
              <p className="text-red-950 font-bold mb-2">7:00 AM - 10:00 PM</p>
              
              <p className="text-red-950">Contact: +977-9869695959</p>
              <p className="text-red-950">Email: petzy@gmail.com</p>
            </div>
          </div>
        </div>
        </nav>
      </section>

      
      <footer className="bg-cyan-950 text-red-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Petzy:Your One-Stop Pet Store</p>
        </div>
      </footer></div>
  )
}

export default Footer
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
   
      
      
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-yellow-300 text-xl mb-4 font-semibold">🐾 About Petzy</div>
          <h1 className="text-5xl font-bold mb-8 text-white">Your One-Stop Pet Store</h1>
          <p className="text-xl text-cyan-50 leading-relaxed">
            Everything your pets need – food, toys, beds, medicine, and trusted veterinary care
          </p>
        </div>
      </section>

     
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-cyan-900 mb-8">Why Choose Petzy?</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Petzy is more than a pet store – we're your trusted partner in pet care. 
                From premium food and cozy beds to essential medicines and fun toys, 
                we handpick every product to keep your furry friends happy and healthy.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our mission is simple: make pet care easy, affordable, and accessible. 
                Whether you're shopping for a new puppy, caring for an older cat, or 
                looking for the perfect gift, Petzy has everything you need.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-gradient-to-br from-cyan-50 to-teal-50 p-4 rounded-lg shadow-md border-2 border-cyan-200">
                  <div className="text-3xl font-bold text-cyan-600">5K+</div>
                  <div className="text-cyan-800 font-semibold">Happy Pets</div>
                </div>
                <div className="text-center bg-gradient-to-br from-teal-50 to-emerald-50 p-4 rounded-lg shadow-md border-2 border-teal-200">
                  <div className="text-3xl font-bold text-teal-600">200+</div>
                  <div className="text-teal-800 font-semibold">Trusted Vets</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5731860/pexels-photo-5731860.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy pets"
                className="rounded-2xl shadow-2xl w-full border-4 border-cyan-200"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-cyan-900 p-6 rounded-xl shadow-lg border-2 border-white">
                <div className="font-bold text-lg">🐾</div>
                <div className="text-sm font-semibold">Pet Care Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">What Makes Us Special</h2>
            <div className="text-yellow-300 text-lg">🐾 Trusted Pet Care Partner</div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                🍖
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Premium Products</h3>
              <p className="text-cyan-50 leading-relaxed">
                Handpicked food, treats, and accessories from trusted brands for your pet's health
              </p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                🏥
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Vet Network</h3>
              <p className="text-cyan-50 leading-relaxed">
                Connect with nearby veterinary clinics and pet care services for checkups and emergencies
              </p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                ❤️
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Pet Adoption</h3>
              <p className="text-cyan-50 leading-relaxed">
                Find your perfect companion through our adoption program – give a pet a loving home
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-900">Our Promise</h2>
          <p className="text-xl mb-8 leading-relaxed text-slate-700">
            At Petzy, we promise to provide the best products and services for your pets. 
            Your furry friends deserve the best, and we're here to make that happen – 
            one happy pet at a time.
          </p>
          
          <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-8 rounded-xl shadow-lg inline-block text-white">
            <p className="text-2xl font-bold mb-2">
              "Your One-Stop Pet Store"
            </p>
            <p className="text-lg text-cyan-50">
              Everything your pets need, all in one place 🐾
            </p>
          </div>
        </div>
      </section>

        
    </div>
  );
};

export default About;
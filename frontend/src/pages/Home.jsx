import React from "react";
import { Link } from "react-router-dom";

// Home page for Petzy (no big hero slider, just sections for shop, adoption, vets, and CTA)
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-emerald-50">
      {/* Top intro strip with title + motto */}
      <section className="py-12 px-6 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-200 text-white shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-cyan-100 mb-2 font-semibold">
              Welcome to
            </p>
            <img
  src="/petzy101.png"
  alt="Petzy"
  className="h-14 md:h-20 lg:h-24 mb-3"
/>

            <p className="text-lg md:text-xl font-semibold text-yellow-300">
              Your One-Stop Pet Store
            </p>
          </div>
          <p className="max-w-xl text-sm md:text-base text-cyan-50">
            Everything your pets need in one friendly place – nutritious food, comfy beds,
            fun toys, cozy clothes, essential medicines, and nearby veterinary care.
          </p>
        </div>
      </section>

      {/* Shop categories */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-3">
              Shop Pet Essentials
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Browse our most-loved categories and add items to your cart in a click.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-cyan-100 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:border-cyan-300">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500" />
              <div className="p-6 flex flex-col items-center text-center gap-3">
                <img
                  src="https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pet food"
                  className="w-28 h-28 rounded-full object-cover border-4 border-cyan-200 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-cyan-900">Food & Treats</h3>
                <p className="text-sm text-slate-600">
                  Balanced meals and tasty bites for dogs, cats, birds, and more.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-100 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:border-teal-300">
              <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-500" />
              <div className="p-6 flex flex-col items-center text-center gap-3">
                <img
                  src="https://images.pexels.com/photos/4588453/pexels-photo-4588453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pet clothes"
                  className="w-28 h-28 rounded-full object-cover border-4 border-teal-200 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-teal-900">
                  Clothes & Accessories
                </h3>
                <p className="text-sm text-slate-600">
                  Cozy outfits, collars, and harnesses to keep pets comfy and stylish.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-100 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:border-emerald-300">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-cyan-500" />
              <div className="p-6 flex flex-col items-center text-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pet bed"
                  className="w-28 h-28 rounded-full object-cover border-4 border-emerald-200 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-emerald-900">
                  Beds & Pet Houses
                </h3>
                <p className="text-sm text-slate-600">
                  Soft beds, cat trees, and outdoor houses for every size and breed.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-cyan-100 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:border-cyan-300">
              <div className="h-2 bg-gradient-to-r from-cyan-400 to-teal-400" />
              <div className="p-6 flex flex-col items-center text-center gap-3">
                <img
                  src="https://images.pexels.com/photos/6235015/pexels-photo-6235015.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pet medicine"
                  className="w-28 h-28 rounded-full object-cover border-4 border-cyan-200 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-cyan-900">
                  Health & Medicine
                </h3>
                <p className="text-sm text-slate-600">
                  Supplements, flea & tick care, and daily wellness products.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/menu"
              className="px-10 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-lg shadow-md hover:from-cyan-700 hover:to-teal-700 hover:shadow-lg transition-all transform hover:scale-105"
            >
              Browse full shop
            </Link>
          </div>
        </div>
      </section>

      {/* Adoption section */}
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Adopt a New Friend</h2>
            <p className="text-cyan-50 max-w-2xl mx-auto text-sm md:text-base">
              Give a second chance to loving pets waiting for a forever home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 shadow-lg border-2 border-white/20 hover:bg-white/15 transition-all">
              <img
                src="https://images.pexels.com/photos/5731860/pexels-photo-5731860.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Adopt dog"
                className="w-full h-52 object-cover rounded-xl mb-4 border-2 border-white/30"
              />
              <h3 className="text-xl font-semibold text-white">Buddy • 2 yrs • Dog</h3>
              <p className="text-sm text-cyan-50 mt-1">
                Playful and loyal, gets along well with kids and other dogs.
              </p>
              <button className="mt-4 px-5 py-2 rounded-full bg-yellow-400 text-cyan-900 text-sm font-semibold hover:bg-yellow-300 transition-colors shadow-md">
                View details
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 shadow-lg border-2 border-white/20 hover:bg-white/15 transition-all">
              <img
                src="https://images.pexels.com/photos/4608237/pexels-photo-4608237.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Adopt cat"
                className="w-full h-52 object-cover rounded-xl mb-4 border-2 border-white/30"
              />
              <h3 className="text-xl font-semibold text-white">Luna • 1 yr • Cat</h3>
              <p className="text-sm text-cyan-50 mt-1">
                Calm and cuddly, perfect for apartments and quiet homes.
              </p>
              <button className="mt-4 px-5 py-2 rounded-full bg-yellow-400 text-cyan-900 text-sm font-semibold hover:bg-yellow-300 transition-colors shadow-md">
                View details
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 shadow-lg border-2 border-white/20 hover:bg-white/15 transition-all">
              <img
                src="https://images.pexels.com/photos/4108040/pexels-photo-4108040.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Adopt rabbit"
                className="w-full h-52 object-cover rounded-xl mb-4 border-2 border-white/30"
              />
              <h3 className="text-xl font-semibold text-white">Snowy • 6 mo • Rabbit</h3>
              <p className="text-sm text-cyan-50 mt-1">
                Gentle and curious, loves fresh veggies and cozy corners.
              </p>
              <button className="mt-4 px-5 py-2 rounded-full bg-yellow-400 text-cyan-900 text-sm font-semibold hover:bg-yellow-300 transition-colors shadow-md">
                View details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby vets and services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-2">
              Nearby Veterinary Care
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              Trusted clinics and pet services around you for checkups, grooming, and
              emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-cyan-100 hover:border-cyan-300 transition-all">
              <h3 className="text-xl font-semibold text-cyan-900 mb-1">
                CityCare Vet Clinic
              </h3>
              <p className="text-sm text-slate-600">
                24/7 emergency care, vaccinations, surgery & wellness checkups.
              </p>
              <p className="text-xs text-slate-500 mt-2">2.1 km away • ★ 4.8</p>
              <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs font-semibold hover:from-cyan-700 hover:to-teal-700 shadow-md">
                Call Now
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-teal-100 hover:border-teal-300 transition-all">
              <h3 className="text-xl font-semibold text-teal-900 mb-1">
                Paws & Relax Spa
              </h3>
              <p className="text-sm text-slate-600">
                Professional grooming, nail trim, spa baths & fur styling.
              </p>
              <p className="text-xs text-slate-500 mt-2">1.3 km away • ★ 4.6</p>
              <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-semibold hover:from-teal-700 hover:to-emerald-700 shadow-md">
                Book Slot
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-emerald-100 hover:border-emerald-300 transition-all">
              <h3 className="text-xl font-semibold text-emerald-900 mb-1">
                Happy Tails Trainer
              </h3>
              <p className="text-sm text-slate-600">
                Obedience training, socialization, and behavior consulting.
              </p>
              <p className="text-xs text-slate-500 mt-2">Online & home visits</p>
              <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-xs font-semibold hover:from-emerald-700 hover:to-cyan-700 shadow-md">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-14 px-6 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Ready to spoil your pet?
          </h2>
          <p className="text-sm md:text-base text-cyan-50 mb-8 max-w-2xl mx-auto">
            Start building your cart with food, toys, and accessories tailored to your
            best friend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="px-10 py-3 rounded-full bg-yellow-400 text-cyan-900 font-semibold shadow-md hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Shop now
            </Link>
            <Link
              to="/about"
              className="px-10 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Learn about Petzy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
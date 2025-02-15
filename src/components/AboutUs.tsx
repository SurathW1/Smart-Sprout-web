import React from 'react'

export default function AboutUs() {
  return (
    <section id="second-section"
    className="h-screen flex relative">
        <div className="absolute bottom-4 left-4">
          <button className="bg-white text-[#2CC295] font-bold py-2 px-4 rounded shadow-lg hover:bg-gray-200 hover:scale-110">
            Learn More
          </button>
        </div>
      <div className="w-1/2 flex flex-col justify-center px-8 bg-emerald-600">
        <h2 className="text-4xl font-bold text-white mb-4">Welcome To The Future Of Agriculture</h2><br />
        <p className="text-lg text-white-600">
          Smart Sprout is your ultimate platform for smarter, sustainable farming.
        </p>
        <br />
        <br />
        <p className="text-lg text-white-600">
        Revolutionize your farming with Smart Sprout! Get real-time soil insights, detect crop diseases, and plan ahead with accurate weather forecasts—all powered by AI and IoT technology. Smarter farming starts here. Let’s grow better, together!
        </p>
      
      </div>
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <img 
        src="/SSH.jpg"
        alt="Right Section Image"
        className="w-full h-full object-cover"
        />
        </div>
    </section>
  )
}
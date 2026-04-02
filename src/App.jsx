import React from 'react'
import avatar from './assets/ava.png'
import BackgroundPlanes from './components/BackgroundPlanes'

function App() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-white font-ans text-gray-900 overflow-hidden px-6">
      {/* Background Animation */}
      <BackgroundPlanes />

      {/* Avatar Section */}
      <div className="relative group z-10">
        {/* Animated Background Ring */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#0088cc] via-blue-400 to-[#0088cc] rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>
        
        {/* Static Internal Border */}
        <div className="relative bg-white rounded-full p-1.5 shadow-2xl">
          <img 
            src={avatar} 
            alt="Profile Avatar" 
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-xl bg-gray-50"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-14 text-center max-w-2xl z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in">
          Complete simple tasks and earn <span className="text-[#0088cc]">$50+</span> per result.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
          A platform where advertisers pay for simple actions. 
          No experience required—get started now!
        </p>

        <a 
          href="https://t.me/gvusajob_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-[#0088cc]/30 group animate-pulse-subtle"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.206 8.134l-1.637 7.712c-.124.56-.456.697-.925.434l-2.493-1.838-1.203 1.157c-.133.133-.245.245-.502.245l.179-2.541 4.623-4.175c.201-.179-.044-.278-.31-.099l-5.713 3.6-2.463-.77c-.535-.167-.546-.535.111-.791l9.626-3.709c.446-.162.837.106.697.776z"/>
          </svg>
          Start
        </a>
      </div>

      {/* Background Glows for Premium Vibe */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 z-0"></div>
    </main>
  )
}

export default App

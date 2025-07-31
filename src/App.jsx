import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-8 px-4"> 
        <div className="text-center mb-8">
          <h1 className='text-6xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent'>
            Image Enhancer
          </h1>
          <p className='text-xl text-slate-600 font-medium'>Transform your images with AI-powered enhancement</p>
        </div>
        <Home />

        <div className='text-lg text-slate-500 mt-8 text-center max-w-2xl leading-relaxed'> 
          <span className='font-semibold text-slate-600'>🚀 Upload your image</span> and let our AI enhance it in seconds with stunning results!
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
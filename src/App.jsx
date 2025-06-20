import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center bg-gray-100 py-8 px-4"> 
      <div className="text-center mb-8">
        <h1 className='text-5xl font-bold mb-3'>Image Enhancer</h1>
        <p className='text-lg text-gray-600'>Enhance your images with ease</p>
      </div>
      <Home />

      <div className='text-lg text-gray-500 mt-6'> Upload Your Image and let AI Enhance to in Seconds!</div>


    </div>
  )
}

export default App
import React from 'react'

// Add CSS animations
const loadingStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

// Inject styles if not already present
if (!document.querySelector('#loading-styles')) {
  const styleSheet = document.createElement('style')
  styleSheet.id = 'loading-styles'
  styleSheet.textContent = loadingStyles
  document.head.appendChild(styleSheet)
}

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full space-y-6 p-8'>
        {/* Main Loading Animation */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-20 h-20 border-4 border-emerald-200/30 rounded-full animate-spin"></div>
          
          {/* Inner rotating ring - opposite direction */}
          <div className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-t-emerald-500 border-r-emerald-400 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          
          {/* Center pulsing dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse shadow-lg"></div>
          </div>
          
          {/* Orbiting particles */}
          <div className="absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping transform -translate-x-1/2" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping transform -translate-y-1/2" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping transform -translate-x-1/2" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping transform -translate-y-1/2" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>

        {/* Loading Text with Gradient */}
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Enhancing your image
          </h3>
          <p className="text-slate-500 text-base leading-relaxed max-w-xs">
            Our AI is working its magic to improve quality, colors, and sharpness
          </p>
        </div>

        {/* Progress Indicators */}
        <div className="flex space-x-2">
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" 
                style={{animationDelay: `${i * 0.2}s`}}
              ></div>
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 gap-3 w-full max-w-sm text-sm">
          {[
            { icon: "✨", text: "Enhancing sharpness", delay: "0s" },
            { icon: "🎨", text: "Boosting colors", delay: "1s" },
            { icon: "🔍", text: "Improving details", delay: "2s" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 bg-emerald-50/50 rounded-lg px-4 py-2 backdrop-blur-sm border border-emerald-100/50"
              style={{animation: `fadeInUp 0.5s ease-out ${item.delay} both`}}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-emerald-700 font-medium">{item.text}</span>
              <div className="ml-auto">
                <div className="w-4 h-4 border-2 border-emerald-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Estimated time */}
        <div className="text-center">
          <p className="text-xs text-slate-400 bg-slate-100/50 rounded-full px-4 py-2 backdrop-blur-sm">
            Estimated time: 10-30 seconds
          </p>
        </div>
    </div>
  )
}

export default Loading
import React, { useState, useEffect } from 'react'

const Toast = ({ message, type = 'info', isVisible, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-200'
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-pink-600 text-white border-red-200'
      case 'warning':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-yellow-200'
      default:
        return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-200'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        )
      case 'error':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        )
      case 'warning':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        )
    }
  }

  return (
    <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-right duration-300">
      <div className={`
        max-w-sm w-full shadow-2xl rounded-2xl border-2 backdrop-blur-sm
        transform transition-all duration-300 hover:scale-105
        ${getToastStyles()}
      `}>
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-1 rounded-full bg-white/20">
                {getIcon()}
              </div>
            </div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium leading-5">
                {message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={onClose}
                className="rounded-md inline-flex text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200"
                aria-label="Close notification"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-white/20 rounded-b-2xl overflow-hidden">
          <div 
            className="h-full bg-white/40 rounded-b-2xl animate-pulse"
            style={{
              animation: `shrink ${duration}ms linear forwards`
            }}
          />
        </div>
      </div>
    </div>
  )
}

// Toast notification hook
export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const showToast = (message, type = 'info', duration = 4000) => {
    const id = Date.now()
    const toast = { id, message, type, duration, isVisible: true }
    
    setToasts(prev => [...prev, toast])
    
    return id
  }

  const hideToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const ToastContainer = () => (
    <div className="fixed top-0 right-0 z-50 p-6 space-y-3">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          duration={toast.duration}
          onClose={() => hideToast(toast.id)}
        />
      ))}
    </div>
  )

  return {
    showToast,
    hideToast,
    ToastContainer
  }
}

// Add CSS animation
const style = document.createElement('style')
style.textContent = `
  @keyframes shrink {
    from { width: 100%; }
    to { width: 0%; }
  }
  
  @keyframes slide-in-from-right {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .animate-in {
    animation-fill-mode: both;
  }
  
  .slide-in-from-right {
    animation-name: slide-in-from-right;
  }
`
document.head.appendChild(style)

export default Toast

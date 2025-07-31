import React, { useState } from 'react'

const ImageUpload = (props) => {
  const [dragActive, setDragActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if(file){
      props.UploadImagehandler(file);
    }
  }
  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      props.UploadImagehandler(e.dataTransfer.files[0]);
    }
  };
  
  return (
    <div className='relative bg-gradient-to-br from-white via-slate-50 to-blue-50/30 shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-slate-200/50 backdrop-blur-sm'>
      {/* Upload Area */}
      <label 
        htmlFor="InputFile" 
        className={`
          block w-full transition-all duration-500 ease-out cursor-pointer 
          border-2 border-dashed rounded-2xl p-12 text-center 
          transform hover:scale-[1.02] hover:rotate-1 
          focus:outline-none focus:ring-4 focus:ring-emerald-500/20
          ${dragActive 
            ? 'border-emerald-400 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 shadow-xl scale-[1.02] rotate-1 ring-4 ring-emerald-200/50' 
            : 'border-slate-300/60 hover:border-emerald-400/80 hover:bg-gradient-to-br hover:from-slate-50 hover:via-emerald-50/30 hover:to-teal-50/30 hover:shadow-lg'
          }
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex={0}
        aria-label="Upload image for enhancement"
        aria-describedby="upload-description"
      >
        <div className="flex flex-col items-center justify-center">
          {/* Animated Upload Icon */}
          <div className={`
            relative p-6 rounded-full mb-6 transition-all duration-500 ease-out
            ${dragActive || isHovered
              ? 'bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 text-emerald-600 scale-110 rotate-12 shadow-lg' 
              : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500 hover:scale-105'
            }
          `}>
            {/* Background pulse effect */}
            <div className={`
              absolute inset-0 rounded-full transition-all duration-1000
              ${dragActive || isHovered ? 'animate-ping bg-emerald-200/50' : ''}
            `}></div>
            
            {/* Main icon */}
            <svg 
              className={`
                w-16 h-16 relative z-10 transition-all duration-500 ease-out
                ${dragActive || isHovered ? 'animate-bounce' : 'group-hover:scale-110'}
              `} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            
            {/* Sparkle effects */}
            {(dragActive || isHovered) && (
              <>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1 -left-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              </>
            )}
          </div>

          {/* Main Text */}
          <div className="space-y-3 mb-6">
            <p className="text-xl font-bold text-slate-700">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Drop your image here
              </span>
              <span className="text-slate-600"> or </span>
              <span className="underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-4 transition-all">
                browse files
              </span>
            </p>
            <p className="text-sm text-slate-500 leading-relaxed" id="upload-description">
              Support for PNG, JPG, WEBP formats • Maximum 10MB
            </p>
          </div>

          {/* AI Status Badge */}
          <div className="flex items-center space-x-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="relative">
              <span className="w-3 h-3 bg-emerald-400 rounded-full block animate-pulse"></span>
              <span className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></span>
            </div>
            <span className="text-sm font-medium text-emerald-700">
              AI Enhancement Ready
            </span>
            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          {/* Feature highlights */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
            <div className="flex items-center space-x-1 bg-slate-100/50 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              <span>Instant Processing</span>
            </div>
            <div className="flex items-center space-x-1 bg-slate-100/50 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              <span>4K Support</span>
            </div>
            <div className="flex items-center space-x-1 bg-slate-100/50 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
              <span>Privacy First</span>
            </div>
          </div>
        </div>
      </label>
      <input 
        type="file" 
        id="InputFile" 
        className='hidden' 
        onChange={showImageHandler} 
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />
    </div>
  )
}

export default ImageUpload
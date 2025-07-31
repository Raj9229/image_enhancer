import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-12'>
        {/* Original Image */}
        <div className='group relative bg-gradient-to-br from-slate-50 to-slate-100/80 shadow-2xl rounded-3xl overflow-hidden border border-slate-200/60 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm'>
            {/* Header */}
            <div className='bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white py-5 px-6 relative overflow-hidden'>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
              </div>
              <h2 className='text-xl font-bold text-center tracking-wide relative z-10 flex items-center justify-center'>
                <span className='inline-block w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse shadow-lg shadow-red-400/50'></span>
                Original Image
                <svg className="w-5 h-5 ml-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </h2>
            </div>
            
            {/* Content */}
            {props.upload ? (
                <div className='relative p-4 group'>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={props.upload} 
                        alt="Original uploaded image" 
                        className='w-full h-80 object-cover transition-all duration-500 group-hover:scale-105' 
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    
                    {/* Remove button */}
                    {props.onRemoveImage && (
                      <button
                        onClick={props.onRemoveImage}
                        className="absolute top-6 right-6 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-4 focus:ring-red-500/30"
                        aria-label="Remove image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                    
                    {/* Image info */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-sm text-slate-600 font-medium">Ready for enhancement</p>
                      <p className="text-xs text-slate-400">Click enhance to improve quality</p>
                    </div>
                </div>
            ) : (
                <div className='p-12 text-center flex flex-col justify-center items-center h-80 text-slate-500'>
                    <div className="relative mb-6">
                      <svg className="w-20 h-20 text-slate-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-200 rounded-full animate-bounce delay-300"></div>
                    </div>
                    <span className='text-lg font-semibold mb-2'>No image selected</span>
                    <span className='text-sm text-slate-400 max-w-xs leading-relaxed'>Upload an image above to see the original preview and start the enhancement process</span>
                </div>
            )}
        </div>
        
        {/* Enhanced Image */}
        <div className='group relative bg-gradient-to-br from-emerald-50/80 to-cyan-50/80 shadow-2xl rounded-3xl overflow-hidden border border-emerald-200/60 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm'>
            {/* Header */}
            <div className='bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white py-5 px-6 relative overflow-hidden'>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"></div>
              </div>
              <h2 className='text-xl font-bold text-center tracking-wide relative z-10 flex items-center justify-center'>
                <span className='inline-block w-3 h-3 bg-yellow-300 rounded-full mr-3 animate-pulse shadow-lg shadow-yellow-300/50'></span>
                Enhanced Image
                <svg className="w-5 h-5 ml-3 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </h2>
            </div>            {/* Content */}
            {props.enhanced && !props.loading && (
                <div className="relative p-4 group">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={props.enhanced} 
                        alt="AI enhanced image" 
                        className='w-full h-80 object-cover transition-all duration-500 group-hover:scale-105' 
                      />
                      {/* Success overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      
                      {/* Enhancement badge */}
                      <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Enhanced</span>
                      </div>
                    </div>
                    
                    {/* Download button */}
                    <div className="absolute bottom-6 right-6">
                        <a 
                            href={props.enhanced} 
                            download="enhanced-image.jpg"
                            className="group/btn bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 px-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold flex items-center space-x-3 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                            aria-label="Download enhanced image"
                        >
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download</span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>

                    {/* Quality indicators */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-slate-600 font-medium">4K Quality</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-slate-600 font-medium">AI Enhanced</span>
                        </div>
                      </div>
                    </div>
                </div>
            )}
            
            {props.loading ? (
                <div className='p-12 h-80 flex justify-center items-center bg-gradient-to-br from-emerald-50/50 to-teal-50/50'>
                    <Loading/>
                </div>
            ) : (
                !props.enhanced && 
                    <div className='p-12 text-center flex flex-col justify-center items-center h-80 text-slate-500'>
                        <div className="relative mb-6">
                          <svg className="w-20 h-20 text-emerald-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-300"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-700"></div>
                        </div>
                        <span className='text-lg font-semibold mb-2'>Ready for AI magic</span>
                        <span className='text-sm text-slate-400 max-w-xs leading-relaxed'>Upload an image to see our AI enhancement technology in action</span>
                        
                        {/* Feature preview */}
                        <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-emerald-100/50 rounded-lg p-2 text-emerald-700">
                            <div className="font-semibold">✨ Sharpening</div>
                            <div className="text-emerald-600">Crystal clear details</div>
                          </div>
                          <div className="bg-blue-100/50 rounded-lg p-2 text-blue-700">
                            <div className="font-semibold">🎨 Color boost</div>
                            <div className="text-blue-600">Vibrant colors</div>
                          </div>
                        </div>
                    </div>
            )}
        </div>
    </div>
  )
}

export default ImagePreview
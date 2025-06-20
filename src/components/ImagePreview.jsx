import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    

    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8'>
        {/* original Image */}
        <div className='bg-white shadow-lg  rounded-xl overflow-hidden'>
            <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>Original Image</h2>
            {props.upload ? <img src={props.upload} alt="" className='w-full h-full object-cover' /> : <div className='p-4 text-center flex justify-center items-center h-60'>No image selected</div>}
        </div>
        {/* Enhanced Image */}        <div className='bg-white shadow-lg  rounded-xl overflow-hidden'>
            <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>Enhanced Image</h2>            {props.enhanced && !props.loading && (
                <div className="relative">
                    <img src={props.enhanced} alt="Enhanced" className='w-full h-full object-cover' />
                    <div className="absolute bottom-4 right-4">
                        <a 
                            href={props.enhanced} 
                            download="enhanced-image.jpg"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                        >
                            Download
                        </a>
                    </div>
                </div>
            )}
            {props.loading ? 
                <Loading/> : 
                (!props.enhanced && <div className='p-4 text-center flex justify-center items-center h-60'>No image enhanced yet</div>)
            }
        </div>
    </div>
  )
}

export default ImagePreview
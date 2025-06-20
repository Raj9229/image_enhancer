import React, { useState } from 'react'

const ImageUpload = (props) => {
  const [dragActive, setDragActive] = useState(false);
  
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
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
      <label 
        htmlFor="InputFile" 
        className={`block w-full hover:border-blue-500 transition-all cursor-pointer border-2 border-dashed ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-lg p-4 text-center`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center">
          <svg className="w-8 h-8 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p className="mb-2 text-sm text-gray-600">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG or WEBP (MAX. 10MB)</p>
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
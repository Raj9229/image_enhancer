import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'
import { enhancedImageAPI } from '../utlis/enhanceimageapi'
import { useToast } from './Toast'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const { showToast, ToastContainer } = useToast()
    
    const UploadImagehandler = async(file) => {
        // Check if the file is an image and not too large
        if (!file.type.startsWith('image/')) {
            showToast("Please select an image file (JPEG, PNG, WEBP, etc.)", "error")
            return;
        }
        
        // 10 MB max size
        if (file.size > 10 * 1024 * 1024) {
            showToast("Image is too large. Please select an image smaller than 10MB.", "warning")
            return;
        }
        
        // Reset previous enhanced image
        setEnhancedImage(null)
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);
        
        // Show upload success toast
        showToast(`Uploading ${file.name}... Starting enhancement!`, "info")
        
        try {
            console.log("Enhancing image:", file.name);
            const enhancedURL = await enhancedImageAPI(file);
            
            if (!enhancedURL) {
                throw new Error("No enhanced URL returned from API");
            }
            
            console.log("Enhancement successful, URL:", enhancedURL);
            setEnhancedImage(enhancedURL);
            
            // Show success toast
            showToast("🎉 Image enhanced successfully! Your image looks amazing!", "success")
            
        } catch (error) {
            console.error("Error enhancing image:", error);
            showToast(`❌ Enhancement failed: ${error.message || "Unknown error"}. Please try again.`, "error")
        } finally {
            setLoading(false);
        }
    }

    const handleRemoveImage = () => {
        setUploadImage(null)
        setEnhancedImage(null)
        setLoading(false)
        showToast("Images removed successfully", "info")
    }

    return (
        <div>
            <ImageUpload UploadImagehandler={UploadImagehandler} />
            
            {/* Enhancement Button */}
            {uploadImage && !loading && !enhancedImage && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => {
                            // Trigger enhancement for already uploaded image
                            const fileInput = document.getElementById('InputFile')
                            if (fileInput && fileInput.files[0]) {
                                UploadImagehandler(fileInput.files[0])
                            }
                        }}
                        className="group bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-600 hover:via-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                    >
                        <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-lg">Enhance Image</span>
                            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                        </div>
                    </button>
                </div>
            )}
            
            <ImagePreview
                loading={loading}
                upload={uploadImage} 
                enhanced={enhancedImage}
                onRemoveImage={uploadImage ? handleRemoveImage : null}
            />
            <ToastContainer />
        </div>
    )
}

export default Home
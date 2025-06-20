import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'
import { enhancedImageAPI } from '../utlis/enhanceimageapi'

const Home = () => {    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setLoading] = useState(false)
    
    /*api handling */const UploadImagehandler =  async(file) => {
        // Check if the file is an image and not too large
        if (!file.type.startsWith('image/')) {
            alert("Please select an image file (JPEG, PNG, etc.)");
            return;
        }
        
        // 10 MB max size
        if (file.size > 10 * 1024 * 1024) {
            alert("Image is too large. Please select an image smaller than 10MB.");
            return;
        }
        
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);
        
        try {
            console.log("Enhancing image:", file.name);
            const enhancedURL = await enhancedImageAPI(file);
            
            if (!enhancedURL) {
                throw new Error("No enhanced URL returned from API");
            }
            
            console.log("Enhancement successful, URL:", enhancedURL);
            setEnhancedImage(enhancedURL);
        } catch (error) {
            console.error("Error enhancing image:", error);
            alert(`Failed to enhance image: ${error.message || "Unknown error"}. Please try again.`);
        } finally {
            setLoading(false);
        }
    }
  return (
    <div>
        <ImageUpload UploadImagehandler={UploadImagehandler} />
        <ImagePreview
            loading={loading}
            upload={uploadImage} 
            enhanced={enhancedImage}
            
        />
    </div>
  )
}

export default Home
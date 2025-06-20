/**
 * Mock API implementation for image enhancement
 * This serves as a fallback when the real API isn't working or for testing purposes
 */

// Simple image processing delay simulator (1-3 seconds)
const simulateProcessing = () => {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * 2000) + 1000; 
        setTimeout(resolve, delay);
    });
};

/**
 * Mock image enhancement that applies a basic filter using Canvas
 * @param {File} file - The image file to enhance
 * @returns {Promise<string>} - Promise resolving to a data URL of the enhanced image
 */
export const mockEnhanceImage = async (file) => {
    return new Promise((resolve, reject) => {
        try {
            // Create image element to load the file
            const img = new Image();
            const reader = new FileReader();
            
            reader.onload = function(e) {
                img.src = e.target.result;
            };
            
            img.onload = async function() {
                // Simulate API processing delay
                await simulateProcessing();
                
                // Create canvas with the same dimensions as the image
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                
                // Draw the original image
                ctx.drawImage(img, 0, 0);
                
                // Apply a simple image enhancement effect
                // 1. Get the image data
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                
                // 2. Apply enhancements (increase contrast and saturation)
                for (let i = 0; i < data.length; i += 4) {
                    // Increase contrast
                    data[i] = Math.min(255, Math.max(0, (data[i] - 128) * 1.2 + 128)); // Red
                    data[i+1] = Math.min(255, Math.max(0, (data[i+1] - 128) * 1.2 + 128)); // Green
                    data[i+2] = Math.min(255, Math.max(0, (data[i+2] - 128) * 1.2 + 128)); // Blue
                    
                    // Increase saturation
                    const avg = (data[i] + data[i+1] + data[i+2]) / 3;
                    data[i] = Math.min(255, Math.max(0, data[i] + (data[i] - avg) * 0.3));
                    data[i+1] = Math.min(255, Math.max(0, data[i+1] + (data[i+1] - avg) * 0.3));
                    data[i+2] = Math.min(255, Math.max(0, data[i+2] + (data[i+2] - avg) * 0.3));
                }
                
                // 3. Put the enhanced image data back
                ctx.putImageData(imageData, 0, 0);
                
                // Convert canvas to data URL and return
                resolve(canvas.toDataURL('image/jpeg', 0.92));
            };
            
            img.onerror = function() {
                reject(new Error('Failed to load image'));
            };
            
            // Start loading the image
            reader.readAsDataURL(file);
            
        } catch (error) {
            console.error('Mock enhancement failed:', error);
            reject(error);
        }
    });
};

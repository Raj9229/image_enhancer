@echo off
REM Direct deployment without merge handling
cd /d "C:\Users\Krishna\Desktop\image_enchancer"

echo ==========================================
echo   Direct Deployment - AI Image Enhancer
echo ==========================================

REM Create a fresh commit without merge conflicts
echo Step 1: Force reset...
git reset --mixed HEAD~1

echo Step 2: Adding all files...
git add .

echo Step 3: Creating new commit...
git commit -m "🚀 AI Image Enhancer - Complete Application

✨ Features:
- Modern React + Tailwind CSS interface
- AI-powered image enhancement
- Drag & drop upload with animations  
- Toast notification system
- Mobile responsive design
- Accessibility (ARIA labels, focus states)
- Professional footer with contact info

🎨 UI Features:
- Gradient themes and glass-morphism
- Smooth animations and hover effects
- Loading states with progress indicators
- Image preview with remove functionality
- Premium visual design

🛠️ Technical:
- Vite build system optimized for production
- GitHub Actions CI/CD pipeline
- Error handling with user-friendly messages
- Mock API fallback for demonstrations
- SEO-ready with proper meta tags

Created with ❤️ by Raj Gupta
Live demo: https://raj9229.github.io/image_enhancer/"

echo Step 4: Force pushing to GitHub...
git push origin main --force

if %errorlevel% equ 0 (
    echo.
    echo ==========================================
    echo          🎉 DEPLOYMENT SUCCESS! 🎉
    echo ==========================================
    echo.
    echo Your AI Image Enhancer is now live!
    echo.
    echo 🔗 GitHub Repository: 
    echo    https://github.com/Raj9229/image_enhancer
    echo.
    echo 🌐 Live Application:
    echo    https://raj9229.github.io/image_enhancer/
    echo.
    echo 📋 Final Setup Steps:
    echo    1. Visit your GitHub repository
    echo    2. Go to Settings ^> Pages
    echo    3. Set Source to "GitHub Actions"
    echo    4. Wait 2-3 minutes for deployment
    echo.
    echo 🎨 Your app includes:
    echo    ✓ AI Image Enhancement
    echo    ✓ Modern Gradient UI
    echo    ✓ Toast Notifications
    echo    ✓ Mobile Responsive
    echo    ✓ Accessibility Features
    echo    ✓ Professional Contact Footer
    echo.
    echo ==========================================
    echo        Ready to showcase your work! 🌟
    echo ==========================================
) else (
    echo.
    echo ❌ Push failed. Please check the error above.
)

echo.
echo Press any key to exit...
pause >nul

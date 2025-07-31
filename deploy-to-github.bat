@echo off
echo ========================================
echo  Image Enhancer - GitHub Deployment
echo ========================================

echo Installing deployment dependencies...
npm install

echo Building the application...
npm run build

echo Initializing Git repository...
git init

echo Adding files to Git...
git add .

echo Making initial commit...
git commit -m "feat: Add AI Image Enhancer with modern UI and animations"

echo Creating main branch...
git branch -M main

echo Setting up remote origin...
git remote add origin https://github.com/Raj9229/image_enhancer.git

echo Pushing to GitHub...
git push -u origin main

echo ========================================
echo  Deployment Steps Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Go to https://github.com/Raj9229/image_enhancer
echo 2. Go to Settings ^> Pages
echo 3. Set Source to "GitHub Actions"
echo 4. Your site will be available at:
echo    https://raj9229.github.io/image_enhancer/
echo.
echo The GitHub Actions workflow will automatically
echo deploy your app whenever you push changes!
echo ========================================

pause
echo Don't forget to set up the VITE_IMAGE_API_KEY secret in your GitHub repository settings.
pause

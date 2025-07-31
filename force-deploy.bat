@echo off
REM AI Image Enhancer - Force Deployment Script
echo ==========================================
echo   AI Image Enhancer - Force Deployment
echo ==========================================

REM Kill any hanging processes
taskkill /f /im git.exe >nul 2>&1
timeout /t 2 /nobreak >nul

REM Remove merge files and reset
if exist .git\MERGE_HEAD del .git\MERGE_HEAD
if exist .git\MERGE_MSG del .git\MERGE_MSG
if exist .git\index.lock del .git\index.lock

REM Reset to clean state
git reset --hard HEAD
git clean -fd

REM Configure git
git config merge.ours.driver true
git config pull.rebase false

REM Fetch and reset
git fetch origin
git reset --soft origin/main

REM Add all files
git add .

REM Commit with comprehensive message
git commit -m "feat: Complete AI Image Enhancer Application - Modern React UI with AI enhancement, animations, and GitHub Pages deployment"

REM Force push
git push origin main --force-with-lease

if %errorlevel% equ 0 (
    echo.
    echo ==========================================
    echo          DEPLOYMENT SUCCESSFUL!
    echo ==========================================
    echo.
    echo 🎉 Your AI Image Enhancer is now deployed!
    echo.
    echo 📍 Repository: https://github.com/Raj9229/image_enhancer
    echo 🌐 Live App: https://raj9229.github.io/image_enhancer/
    echo.
    echo 📋 Next Steps:
    echo 1. Go to GitHub repository settings
    echo 2. Navigate to Pages section  
    echo 3. Set Source to 'GitHub Actions'
    echo 4. Your app will be live in 2-3 minutes!
    echo.
    echo ✨ Features deployed:
    echo    - AI Image Enhancement
    echo    - Modern UI with animations
    echo    - Toast notifications
    echo    - Mobile responsive design
    echo    - Professional contact footer
    echo.
    echo ==========================================
) else (
    echo.
    echo ❌ Deployment failed. Please check the error above.
    echo.
)

pause

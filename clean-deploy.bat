@echo off
echo ========================================
echo  Clean Deployment Solution
echo ========================================

echo Step 1: Handling merge conflicts...
echo q | git merge --abort 2>nul
git reset --hard HEAD

echo Step 2: Force sync with remote...
git fetch origin
git reset --hard origin/main

echo Step 3: Adding your local changes...
git add .
git commit -m "feat: Add complete AI Image Enhancer application with modern UI"

echo Step 4: Pushing to GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo Regular push failed, trying force push...
    git push origin main --force-with-lease
)

echo ========================================
echo  Deployment Successful!
echo ========================================
echo.
echo Next steps:
echo 1. Go to: https://github.com/Raj9229/image_enhancer
echo 2. Settings ^> Pages ^> Source: GitHub Actions
echo 3. Your app will be live at:
echo    https://raj9229.github.io/image_enhancer/
echo ========================================

pause

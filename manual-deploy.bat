@echo off
REM === MANUAL DEPLOYMENT STEPS ===
echo Run these commands one by one:
echo.
echo 1. git merge --abort
echo 2. git reset --hard HEAD
echo 3. git pull origin main --strategy=ours --allow-unrelated-histories
echo 4. git add .
echo 5. git commit -m "feat: Complete AI Image Enhancer application"
echo 6. git push origin main
echo.
echo If push fails, use: git push origin main --force-with-lease
echo.
pause

REM Actual commands:
git merge --abort
git reset --hard HEAD
git pull origin main --strategy=ours --allow-unrelated-histories
git add .
git commit -m "feat: Complete AI Image Enhancer with modern UI and all features"
git push origin main

if %errorlevel% neq 0 (
    echo Push failed, trying force push...
    git push origin main --force-with-lease
)

echo.
echo ========================================
echo  SUCCESS! Your app is deployed!
echo ========================================
echo Repository: https://github.com/Raj9229/image_enhancer
echo Live URL: https://raj9229.github.io/image_enhancer/
echo.
echo Enable GitHub Pages: Settings ^> Pages ^> Source: GitHub Actions
echo ========================================

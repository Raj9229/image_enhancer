@echo off
echo Initializing Git repository...
git init

echo Adding files to Git...
git add .

echo Making initial commit...
git commit -m "Initial commit"

echo Creating main branch...
git branch -M main

echo Setting up remote origin...
git remote add origin https://github.com/Raj9229/image_enhancer.git

echo Pushing to GitHub...
git push -u origin main

echo Done! Your code is now on GitHub.
echo Don't forget to set up the VITE_IMAGE_API_KEY secret in your GitHub repository settings.
pause

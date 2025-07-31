# PowerShell script for clean deployment
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " AI Image Enhancer - Clean Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Step 1: Clean up any ongoing merge
Write-Host "Step 1: Cleaning up merge state..." -ForegroundColor Yellow
try {
    git merge --abort 2>$null
} catch {
    Write-Host "No merge to abort" -ForegroundColor Gray
}

# Step 2: Reset to clean state
Write-Host "Step 2: Resetting to clean state..." -ForegroundColor Yellow
git reset --hard HEAD

# Step 3: Fetch latest remote
Write-Host "Step 3: Fetching remote changes..." -ForegroundColor Yellow
git fetch origin

# Step 4: Create new branch for deployment
Write-Host "Step 4: Creating deployment branch..." -ForegroundColor Yellow
git checkout -B deployment

# Step 5: Add all files
Write-Host "Step 5: Adding files..." -ForegroundColor Yellow
git add .

# Step 6: Commit changes
Write-Host "Step 6: Committing changes..." -ForegroundColor Yellow
git commit -m "feat: Complete AI Image Enhancer with modern UI and animations

Features:
- AI-powered image enhancement
- Modern gradient UI design
- Toast notifications
- Drag & drop upload
- Mobile responsive
- Accessibility features
- GitHub Pages deployment"

# Step 7: Push to main
Write-Host "Step 7: Deploying to GitHub..." -ForegroundColor Yellow
git checkout main
git reset --hard deployment
git push origin main --force-with-lease

# Step 8: Clean up
git branch -D deployment

Write-Host "========================================" -ForegroundColor Green
Write-Host " Deployment Complete! " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your Image Enhancer is now deployed!" -ForegroundColor White
Write-Host ""
Write-Host "Repository: https://github.com/Raj9229/image_enhancer" -ForegroundColor Blue
Write-Host "Live App: https://raj9229.github.io/image_enhancer/" -ForegroundColor Blue
Write-Host ""
Write-Host "Don't forget to enable GitHub Pages in repository settings!" -ForegroundColor Yellow
Write-Host "Settings > Pages > Source: GitHub Actions" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Green

Read-Host "Press Enter to continue"

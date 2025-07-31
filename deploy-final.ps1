# PowerShell Force Deployment Script
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  AI Image Enhancer - Force Deployment  " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Step 1: Kill hanging processes
Write-Host "Step 1: Cleaning up processes..." -ForegroundColor Yellow
Get-Process | Where-Object {$_.ProcessName -eq "git"} | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Step 2: Remove merge files
Write-Host "Step 2: Removing merge files..." -ForegroundColor Yellow
if (Test-Path ".git\MERGE_HEAD") { Remove-Item ".git\MERGE_HEAD" -Force }
if (Test-Path ".git\MERGE_MSG") { Remove-Item ".git\MERGE_MSG" -Force }
if (Test-Path ".git\index.lock") { Remove-Item ".git\index.lock" -Force }

# Step 3: Reset to clean state
Write-Host "Step 3: Resetting to clean state..." -ForegroundColor Yellow
git reset --hard HEAD
git clean -fd

# Step 4: Configure git
Write-Host "Step 4: Configuring git..." -ForegroundColor Yellow
git config merge.ours.driver true
git config pull.rebase false

# Step 5: Fetch and reset
Write-Host "Step 5: Syncing with remote..." -ForegroundColor Yellow
git fetch origin
git reset --soft origin/main

# Step 6: Add files
Write-Host "Step 6: Adding files..." -ForegroundColor Yellow
git add .

# Step 7: Commit
Write-Host "Step 7: Committing changes..." -ForegroundColor Yellow
$commitMessage = @"
feat: Complete AI Image Enhancer Application

🚀 Features:
- Modern React UI with Tailwind CSS gradients
- AI-powered image enhancement with fallback
- Drag & drop upload with animations
- Toast notification system
- Mobile responsive design
- Accessibility features (ARIA labels, keyboard nav)
- Professional footer with contact information
- GitHub Pages deployment configuration

🎨 UI Enhancements:
- Sophisticated loading animations
- Glass-morphism effects
- Hover animations and micro-interactions
- Image preview with remove functionality
- Premium gradient color scheme

🛠️ Technical:
- Vite build system
- GitHub Actions CI/CD
- Error handling with user feedback
- Mock API fallback for demo

Built with ❤️ by Raj Gupta
"@

git commit -m $commitMessage

# Step 8: Force push
Write-Host "Step 8: Deploying to GitHub..." -ForegroundColor Yellow
$pushResult = git push origin main --force-with-lease

if ($LASTEXITCODE -eq 0) {
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host "        DEPLOYMENT SUCCESSFUL! 🎉        " -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your AI Image Enhancer is now deployed!" -ForegroundColor White
    Write-Host ""
    Write-Host "📍 Repository: " -NoNewline -ForegroundColor White
    Write-Host "https://github.com/Raj9229/image_enhancer" -ForegroundColor Blue
    Write-Host "🌐 Live App: " -NoNewline -ForegroundColor White  
    Write-Host "https://raj9229.github.io/image_enhancer/" -ForegroundColor Blue
    Write-Host ""
    Write-Host "📋 Final Steps:" -ForegroundColor Yellow
    Write-Host "1. Go to your GitHub repository" -ForegroundColor White
    Write-Host "2. Settings → Pages" -ForegroundColor White
    Write-Host "3. Set Source to 'GitHub Actions'" -ForegroundColor White
    Write-Host "4. Your app will be live in 2-3 minutes!" -ForegroundColor White
    Write-Host ""
    Write-Host "✨ Deployed Features:" -ForegroundColor Magenta
    Write-Host "   • AI Image Enhancement" -ForegroundColor White
    Write-Host "   • Modern Gradient UI" -ForegroundColor White
    Write-Host "   • Toast Notifications" -ForegroundColor White
    Write-Host "   • Mobile Responsive" -ForegroundColor White
    Write-Host "   • Accessibility Features" -ForegroundColor White
    Write-Host "   • Professional Footer" -ForegroundColor White
    Write-Host ""
    Write-Host "==========================================" -ForegroundColor Green
} else {
    Write-Host "❌ Deployment failed. Error details above." -ForegroundColor Red
}

Read-Host "Press Enter to continue"

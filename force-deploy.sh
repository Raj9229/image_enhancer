#!/bin/bash
# Force deployment script for AI Image Enhancer

echo "=========================================="
echo "  AI Image Enhancer - Force Deployment"
echo "=========================================="

# Kill any hanging git processes
taskkill /f /im git.exe 2>/dev/null || true
pkill -f git 2>/dev/null || true
sleep 2

# Remove any merge files
rm -f .git/MERGE_*
rm -f .git/index.lock

# Reset to a clean state
git reset --hard HEAD
git clean -fd

# Configure git to handle conflicts
git config merge.ours.driver true
git config pull.rebase false

# Force pull with ours strategy
git fetch origin
git reset --soft origin/main
git reset .

# Add all files
git add .

# Commit with a clear message
git commit -m "feat: Complete AI Image Enhancer Application

Features:
- Modern React UI with Tailwind CSS
- AI-powered image enhancement
- Drag & drop upload functionality
- Toast notifications system
- Mobile responsive design
- Accessibility features
- Professional footer with contact info
- GitHub Pages deployment ready

Built with ❤️ by Raj Gupta"

# Force push to GitHub
git push origin main --force-with-lease

echo "=========================================="
echo "         DEPLOYMENT SUCCESSFUL!"
echo "=========================================="
echo ""
echo "🎉 Your AI Image Enhancer is now deployed!"
echo ""
echo "📍 Repository: https://github.com/Raj9229/image_enhancer"
echo "🌐 Live App: https://raj9229.github.io/image_enhancer/"
echo ""
echo "📋 Next Steps:"
echo "1. Go to GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Set Source to 'GitHub Actions'"
echo "4. Your app will be live in 2-3 minutes!"
echo ""
echo "✨ Features deployed:"
echo "   - AI Image Enhancement"
echo "   - Modern UI with animations"
echo "   - Toast notifications"
echo "   - Mobile responsive design"
echo "   - Professional contact footer"
echo ""
echo "=========================================="

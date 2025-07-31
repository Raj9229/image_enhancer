# 🚀 Deployment Guide

## Quick Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Run the deployment script**
   ```bash
   ./deploy-to-github.bat
   ```
   This will:
   - Install dependencies
   - Build the application
   - Initialize git repository
   - Push to GitHub
   - Set up automatic deployment

2. **Enable GitHub Pages**
   - Go to your repository: https://github.com/Raj9229/image_enhancer
   - Navigate to Settings → Pages
   - Set Source to "GitHub Actions"
   - Your site will be live at: https://raj9229.github.io/image_enhancer/

### Option 2: Manual Steps

1. **Prepare the project**
   ```bash
   npm install
   npm run build
   ```

2. **Initialize Git (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "feat: Add AI Image Enhancer application"
   git branch -M main
   ```

3. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/Raj9229/image_enhancer.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy your app

## 🔧 Configuration Details

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: Push to main branch
- **Process**: Build → Upload → Deploy
- **URL**: https://raj9229.github.io/image_enhancer/

### Vite Configuration
- **Base URL**: `/image_enhancer/` (for GitHub Pages)
- **Build Output**: `dist/` directory
- **Assets**: Properly configured for GitHub Pages

### Package.json Scripts
- `npm run build` - Build for production
- `npm run deploy` - Manual deployment with gh-pages
- `npm run preview` - Preview build locally

## 🌐 After Deployment

Once deployed, your app will be available at:
**https://raj9229.github.io/image_enhancer/**

### Features Available:
- ✅ AI Image Enhancement
- ✅ Drag & Drop Upload
- ✅ Modern UI with animations
- ✅ Toast notifications
- ✅ Mobile responsive design
- ✅ Download enhanced images

## 🔄 Updating Your Deployment

To update your live app:
1. Make changes to your code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "your update message"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and deploy

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails**: Check console for errors, ensure all dependencies are installed
2. **404 on GitHub Pages**: Verify base URL in vite.config.js
3. **Images not loading**: Check asset paths and build output

### Support
- Check GitHub Actions tab for deployment logs
- Review repository settings for Pages configuration
- Ensure branch is set to `main`

---

Your AI Image Enhancer is ready for the world! 🎉

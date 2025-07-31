# 🚀 AI Image Enhancer

[![Deploy to GitHub Pages](https://github.com/Raj9229/image_enhancer/actions/workflows/deploy.yml/badge.svg)](https://github.com/Raj9229/image_enhancer/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat&logo=github)](https://raj9229.github.io/image_enhancer/)

A modern, AI-powered image enhancement application built with React and Tailwind CSS. Transform your images with cutting-edge AI technology through an elegant, user-friendly interface.

## ✨ Features

- 🎨 **Modern UI Design** - Beautiful gradients, animations, and glass-morphism effects
- 🖼️ **Drag & Drop Upload** - Intuitive file upload with visual feedback
- 🤖 **AI Enhancement** - Powered by advanced image enhancement API
- 📱 **Fully Responsive** - Perfect experience on all devices
- 🎯 **Real-time Preview** - Side-by-side comparison of original and enhanced images
- 💾 **Easy Download** - One-click download of enhanced images
- 🎊 **Toast Notifications** - Smart feedback for all user actions
- ♿ **Accessibility** - ARIA labels, keyboard navigation, and focus states
- 🌟 **Premium Animations** - Smooth transitions and micro-interactions

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 with modern hooks
- **Build Tool**: Vite 6.3.5 for lightning-fast development
- **Styling**: Tailwind CSS 4.1.10 with custom gradients
- **Deployment**: GitHub Pages with automated CI/CD
- **Icons**: Custom SVG icons and Heroicons

## 🚀 Live Demo

Visit the live application: **[https://raj9229.github.io/image_enhancer/](https://raj9229.github.io/image_enhancer/)**

## 📸 Screenshots

### Main Interface
![Main Interface](https://via.placeholder.com/800x400/1e293b/10b981?text=AI+Image+Enhancer+Interface)

### Enhancement Process
![Enhancement Process](https://via.placeholder.com/800x400/059669/ffffff?text=AI+Enhancement+in+Progress)

## 🎯 Getting Started

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Raj9229/image_enhancer.git
   cd image_enhancer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional)
   ```bash
   cp .env.example .env
   # Edit .env and add your API key if you have one
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

### Method 1: Automatic Deployment (Recommended)
1. Fork or clone this repository
2. Push your changes to the `main` branch
3. GitHub Actions will automatically build and deploy your app
4. Your site will be live at `https://yourusername.github.io/image_enhancer/`

### Method 2: Manual Deployment
1. Run the deployment script:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Themes
The app uses a modern color palette with emerald/teal gradients. You can customize colors in:
- `src/components/` - Individual component styles
- `tailwind.config.js` - Global theme configuration

### API Integration
- Update `src/utils/enhanceimageapi.js` for different API endpoints
- The app includes a fallback mock API for development

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Raj Gupta**
- 💼 [LinkedIn](https://www.linkedin.com/in/rajgupta123)
- 🐙 [GitHub](https://github.com/Raj9229)
- 📧 [Email](mailto:rajgupta807633@gmail.com)

---

<div align="center">
  <p>Made with ❤️ by Raj</p>
  <p>Building beautiful experiences with code</p>
</div>
3. Push your code to the repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/image_enhancer.git
   git push -u origin main
   ```
4. GitHub Actions will automatically build and deploy your site
4. Build for production:
   ```
   npm run build
   ```

## How It Works

The application uses an external API to enhance images. When a user uploads an image, it is sent to the API for processing. The enhanced image is then displayed alongside the original for comparison.

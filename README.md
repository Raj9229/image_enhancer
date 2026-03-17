# 🚀 AI Image Enhancer

[![Deploy to GitHub Pages](https://github.com/Raj9229/image_enhancer/actions/workflows/deploy.yml/badge.svg)](https://github.com/Raj9229/image_enhancer/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat&logo=github)](https://raj9229.github.io/image_enhancer/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.10-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

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
- **HTTP Client**: Axios 1.10.0
- **Deployment**: GitHub Pages with automated CI/CD

## 🎯 Demo

Visit the live demo: [https://raj9229.github.io/image_enhancer/](https://raj9229.github.io/image_enhancer/)

## 📸 Screenshots

The application provides an intuitive interface with:
- Drag and drop image upload area
- Side-by-side comparison view
- Real-time processing status
- Downloadable enhanced results

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Raj9229/image_enhancer.git
   cd image_enhancer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

4. Add your API key to the `.env` file:
   ```
   VITE_IMAGE_API_KEY=your_api_key_here
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
image_enhancer/
├── src/
│   ├── components/
│   │   ├── Home.jsx           # Main component orchestrating the app
│   │   ├── ImageUpload.jsx    # Drag & drop upload interface
│   │   ├── ImagePreview.jsx   # Side-by-side image comparison
│   │   ├── Loading.jsx        # Loading animation component
│   │   ├── Toast.jsx          # Toast notification system
│   │   └── Footer.jsx         # Footer with social links
│   ├── utlis/
│   │   ├── enhanceimageapi.js # API integration with fallbacks
│   │   └── mockAPI.js         # Local enhancement fallback
│   ├── App.jsx                # Root application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── public/                     # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD pipeline
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Project dependencies
```

## 🎨 Features in Detail

### Image Upload
- Supports drag and drop functionality
- File type validation (PNG, JPG, WEBP, etc.)
- Maximum file size: 10MB
- Visual feedback and animations
- File browser fallback

### AI Enhancement
- Primary API enhancement using advanced AI models
- Intelligent fallback system with multiple endpoints
- Local mock enhancement for testing
- Progress tracking with retry mechanism
- Error handling with user-friendly messages

### Image Preview
- Side-by-side comparison view
- Original image on the left
- Enhanced image on the right
- Download button for enhanced images
- Remove/reset functionality

### User Experience
- Toast notifications for all actions
- Loading animations during processing
- Smooth transitions and micro-interactions
- Responsive design for all screen sizes
- Keyboard navigation support
- ARIA labels for accessibility

## 🔧 Configuration

### Environment Variables

- `VITE_IMAGE_API_KEY`: API key for the image enhancement service

### Vite Configuration

The project is configured with:
- React plugin for fast refresh
- Relative base path for GitHub Pages deployment
- PostCSS with Tailwind CSS
- Build optimization for production

## 📦 Deployment

### GitHub Pages (Automated)

The project includes automated CI/CD via GitHub Actions:

1. Push to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Live at `https://raj9229.github.io/image_enhancer/`

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Deploy to GitHub Pages

## 🐛 Troubleshooting

### Common Issues

**Build fails:**
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (should be v18 or higher)

**API errors:**
- Verify your API key in `.env` file
- Check network connectivity
- The app includes fallback enhancement methods

**Images not loading:**
- Check file size (max 10MB)
- Verify file type (PNG, JPG, WEBP supported)
- Try a different image

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Raj**

- GitHub: [@Raj9229](https://github.com/Raj9229)
- LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/raj-patel-517a31254/)

## 🌟 Acknowledgments

- React team for the amazing framework
- Vite for blazing fast build tool
- Tailwind CSS for beautiful styling utilities
- Image enhancement API provider

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on [GitHub Issues](https://github.com/Raj9229/image_enhancer/issues)
- Email: rajpatel29102003@gmail.com

---

Made with ❤️ by Raj

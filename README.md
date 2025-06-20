# Image Enhancer

An AI-powered image enhancement application built with React and Vite. This application allows users to upload images and enhance them using an AI API.

## Features

- Simple, intuitive user interface
- Drag and drop image upload
- Real-time image enhancement using AI
- Side-by-side comparison of original and enhanced images
- Visual loading indicators
- Download enhanced images

## Tech Stack

- React 19.1.0
- Vite 6.3.5
- Tailwind CSS 4.1.10
- Modern JavaScript (ES6+)

## Getting Started

1. Clone this repository
2. Copy `.env.example` to `.env` and add your API key:
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file to add your actual API key.

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Build for production:
   ```
   npm run build
   ```

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. Create a GitHub repository
2. Add your API key as a repository secret named `VITE_IMAGE_API_KEY`
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

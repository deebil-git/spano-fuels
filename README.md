# Spano Fuels - Professional Website

![Spano Fuels Logo](./src/assets/images/logo.png)

A modern, responsive website for **Spano Fuels**, a premier fuel supply company based in the UAE.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 UAE-themed color scheme (Red, Green, Gold)
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite
- 🎭 Smooth animations and transitions
- 📧 Contact form with validation
- 🎯 SEO optimized
- 🌐 Ready for GitHub Pages deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd spano_fules
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Usage

### Development Server

To run the development server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
spano_fules/
├── src/
│   ├── assets/
│   │   └── images/          # Company logo, warehouse, and other images
│   ├── styles/
│   │   └── main.scss        # Main stylesheet with SCSS
│   └── js/
│       └── main.js          # JavaScript functionality
├── pages/                   # Additional HTML pages
├── public/                  # Static assets
├── index.html              # Main HTML file
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

## 🎨 Customization

### Adding Your Images

Replace the placeholder images in `src/assets/images/` with your actual company images:

1. **logo.png** - Your company logo
2. **warehouse.jpg** - Warehouse/facility image
3. **hero-bg.jpg** - Hero section background image
4. **favicon.ico** - Browser favicon

### Updating Company Information

Edit the following in `index.html`:

- **Phone numbers**: Search for `+971 XX XXX XXXX` and replace
- **Email**: Replace `info@spano-fuels.com`
- **Address**: Update location details
- **Social media links**: Add your social media URLs

### Changing Colors

Colors are defined in `src/styles/main.scss`:

```scss
$primary-color: #c41e3a;    // Red (UAE flag color)
$secondary-color: #1a472a;  // Green (UAE flag color)
$accent-color: #ffd700;     // Gold
```

## 🚀 Deployment to GitHub Pages

### Step 1: Update Configuration

1. In `package.json`, update the `homepage` field:
```json
"homepage": "https://your-username.github.io/spano-fuels-website"
```

2. In `vite.config.js`, update the `base` field:
```javascript
base: '/spano-fuels-website/'
```

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub
2. Initialize git in your project:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/spano-fuels-website.git
git push -u origin main
```

### Step 3: Deploy

Deploy to GitHub Pages using:

```bash
npm run deploy
```

This command will:
1. Build the project
2. Deploy to the `gh-pages` branch
3. Make your site available at your GitHub Pages URL

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your website will be live at `https://your-username.github.io/spano-fuels-website`

## 📦 Technologies Used

- **Vite** - Build tool and development server
- **SCSS** - CSS preprocessor for styling
- **Vanilla JavaScript** - For interactivity
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins & Inter)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: < 768px
- Desktop: < 992px
- Wide: < 1200px

## 🌟 Features to Add (Optional)

- [ ] Multi-language support (English/Arabic)
- [ ] Blog section
- [ ] Client testimonials slider
- [ ] Live chat integration
- [ ] Online quote calculator
- [ ] Service area map
- [ ] Gallery/Portfolio section

## 📄 License

This project is licensed under the MIT License.

## 👥 Support

For support or questions:
- Email: info@spano-fuels.com
- Phone: +971 XX XXX XXXX

---

**Made with ❤️ for Spano Fuels**

# Yamuna Global Trades - Complete Website Template

This is a complete pure HTML, CSS, and JavaScript website template based on the Carma Paper Cup design, fully rebranded for **Yamuna Global Trades**. This template includes all pages and features from the original design.

## 🎯 Based on Original Design

This template replicates the structure and features from [Carma Paper Cup website](https://www.carmapapercup.com/), adapted for Yamuna Global Trades with:
- Side drawer navigation
- Complete homepage with all sections
- Product pages with filtering
- About page with company information
- Contact page with form
- Blog section
- All interactive features

## Structure

```
html-version/
├── index.html          # Homepage
├── about.html          # About page
├── services.html        # Services page
├── products.html       # Products page with filtering
├── contact.html        # Contact page with form
├── css/
│   └── style.css       # Custom styles
├── js/
│   ├── data.js         # Products and services data
│   ├── main.js         # Main functionality (mobile menu, counters, modals, forms)
│   └── products.js     # Product filtering
├── assets/
│   ├── hero-image.jpg
│   └── products/
│       ├── single-wall-cup.jpg
│       ├── ripple-wall-cup.jpg
│       └── paper-bowl.jpg
└── README.md
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Mobile navigation menu
- ✅ Product filtering by category
- ✅ Animated counters on scroll
- ✅ Product detail modals
- ✅ Contact form with validation
- ✅ Smooth scrolling
- ✅ SEO-friendly structure

## How to Use

1. **Open the website**: Simply open `index.html` in a web browser
2. **Local Server** (Recommended): Use a local server to avoid CORS issues:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```
3. **Access**: Navigate to `http://localhost:8000` in your browser

## Dependencies

- **Tailwind CSS**: Loaded via CDN (no build step required)
- **Vanilla JavaScript**: No frameworks or build tools needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Notes

- Images should be placed in the `assets/` directory
- All functionality is implemented in vanilla JavaScript
- No build step or compilation required
- Can be deployed to any static hosting service

## Deployment

Simply upload all files to your web hosting service. No build process required!


# TechVision 2026 - Innovation Summit Website

A fully responsive, modern, and interactive event website for TechVision 2026, showcasing innovation and technology leadership.

## 🎯 Project Overview

This project is a professional event website that demonstrates modern web development practices with responsive design, smooth interactions, and engaging animations. It's perfect for showcasing a tech event or innovation summit.

## ✨ Features

### Layout & Structure
- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Navigation Bar** - Fixed header with smooth scrolling navigation and responsive hamburger menu
- **Hero Section** - Eye-catching landing section with animated background and call-to-action
- **About/Event Overview** - Informative section with feature cards highlighting event benefits
- **Events/Highlights** - Showcase section with interactive image carousel
- **FAQ Section** - Expandable accordion for frequently asked questions
- **Footer** - Comprehensive footer with links, contact info, and social media

### Functionality
1. **Responsive Hamburger Menu** - Mobile-friendly navigation that toggles on smaller screens
2. **Smooth Scrolling Navigation** - All navigation links smoothly scroll to corresponding sections
3. **Interactive Image Slider/Carousel** 
   - Auto-advancing slides (6-second interval)
   - Next/Previous button controls
   - Dot indicators for direct slide navigation
   - Keyboard navigation support (arrow keys)
4. **FAQ Accordion** - Expandable/collapsible sections with smooth animations
5. **Modal Popup** - Contact form in a modal triggered by CTA button
6. **Scroll-Based Animations** - Elements fade in and slide up as they enter the viewport
7. **Active Navigation Highlighting** - Nav links highlight based on current scroll position

### Design Features
- **Modern Color Scheme** - Gradient backgrounds with tech-focused palette (cyan, purple, slate)
- **Smooth Animations** - Floating elements, pulse effects, and transition animations
- **Consistent Typography** - Professional font hierarchy and spacing
- **Visual Hierarchy** - Clear and intuitive layout with proper visual emphasis
- **Glass-morphism Effects** - Frosted glass effects on navigation and modals
- **Gradient Overlays** - Sophisticated gradient backgrounds throughout

## 📁 Project Structure

```
/home/sagar/code/pro/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with responsive media queries
├── script.js           # JavaScript for interactivity and animations
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations, Media Queries
- **JavaScript (Vanilla)** - No external dependencies required
- **Responsive Design** - Mobile-first approach

## 🚀 Quick Start

### Running Locally
1. Clone or download the project files
2. Open `index.html` directly in a web browser
3. No build process or dependencies required!

### File Descriptions

#### index.html
- Semantic HTML5 structure
- All sections with proper IDs for navigation
- SVG placeholder images for carousel slides
- Accessibility attributes

#### styles.css
- 1000+ lines of responsive styling
- CSS Grid and Flexbox layouts
- Smooth transitions and animations
- Responsive breakpoints:
  - Desktop: 1200px and above
  - Tablet: 769px to 1199px
  - Mobile: 480px to 768px
  - Small Mobile: Below 480px

#### script.js
- Hamburger menu toggle functionality
- Smooth scroll navigation
- Image carousel with auto-advance
- FAQ accordion toggle
- Modal popup management
- Scroll-based animations (Intersection Observer)
- Keyboard accessibility (Escape to close modal, arrow keys for slider)
- Active link highlighting during scroll

## 📱 Responsive Breakpoints

- **Desktop** (1200px+): Full layout with all animations
- **Tablet** (769px - 1199px): Optimized grid layout
- **Mobile** (481px - 768px): Single column layout, hamburger menu
- **Small Mobile** (480px and below): Compact design, smaller fonts

## ♿ Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Proper color contrast ratios
- ARIA-friendly modal structure
- Smooth focus transitions

## 🎨 Color Palette

- **Primary Cyan**: `#00d4ff` - Links, highlights, gradients
- **Secondary Purple**: `#6366f1`, `#8b5cf6` - Accents, buttons
- **Dark Background**: `#0f172a` - Main background
- **Text Light**: `#e2e8f0` - Primary text
- **Text Muted**: `#94a3b8` - Secondary text

## 📊 Interactive Components

### Slider/Carousel Features
- Automatic advance every 6 seconds
- Manual controls (Previous/Next buttons)
- Dot indicators with direct slide access
- Keyboard support (←/→ arrow keys)
- Smooth CSS transitions

### Accordion Features
- Click to expand/collapse
- Only one section open at a time (optional behavior)
- Smooth max-height transitions
- Icon rotation animation

### Modal Features
- Trigger on CTA button click
- Close on X button, outside click, or Escape key
- Form validation
- Prevents body scroll when open
- Smooth slide-in animation

## 🎯 Performance Optimizations

- Minimal external dependencies (none required)
- CSS animations using GPU-accelerated properties
- Intersection Observer for efficient scroll animations
- Debounced scroll events
- Lightweight JavaScript (no framework overhead)

## 🔧 Customization Guide

### Change Event Details
Edit the text content in `index.html` to update:
- Event name and dates
- Section content and descriptions
- Contact information
- Social media links

### Customize Colors
Update CSS colors in `styles.css`:
- Primary color: `#00d4ff` → Your color
- Secondary color: `#6366f1` → Your color
- Background: `#0f172a` → Your color

### Replace Images
Update the SVG data URLs in carousel slides with actual image paths:
```html
<img src="your-image.jpg" alt="Slide Title">
```

### Adjust Timing
- Carousel auto-advance: Change `6000` in `script.js` (milliseconds)
- Animation delays: Modify transition values in `styles.css`

## 📝 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

This project demonstrates:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- CSS animations and transitions
- Vanilla JavaScript DOM manipulation
- Event listeners and conditionals
- Intersection Observer API
- Mobile-first design approach
- CSS media queries
- Semantic HTML5

## 📄 License

Feel free to use this project as a template or reference for your own projects.

## 🤝 Contributing

This is a standalone project, but you can customize it for your own events or use cases.

## 📞 Contact

For questions or customizations, refer to the contact form in the modal or update the footer contact information.

---

**Built with ❤️ for the future of technology**
# Modern Responsive Website with Counter and Carousel

A responsive website layout featuring animated counters and a full-width image carousel, with modern design aesthetics.

## Features

- **Clean Typography and Balanced Spacing**: Modern design with a focus on readability
- **Dynamic Counter Section**: Animated counters to display key statistics
- **Full-Width Image Carousel**: Responsive image slider with touch support
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices
- **Modern Color Palette**: Contemporary color scheme with accent colors
- **Scrolling Customer Logos**: Continuously scrolling customer logos that move across the screen
- **Additional Sections**: Testimonials and call-to-action

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript (no frameworks)
- Font Awesome for icons
- Google Fonts (Poppins)

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser

## Structure

- `index.html` - Main structure of the website
- `styles.css` - All styling for the website
- `script.js` - JavaScript functionality for counters and carousel
- `img/` - Directory for storing images

## Customization

### Changing Counter Values

Edit the `data-target` attribute in the counter elements in `index.html`:

```html
<div class="counter-item">
    <i class="fas fa-globe"></i>
    <h2 class="counter" data-target="85">0</h2>
    <p>Countries Exported To</p>
</div>
```

### Adding Carousel Images

Add or replace carousel slides in the carousel section:

```html
<div class="carousel-slide">
    <img src="path-to-your-image.jpg" alt="Product Image">
</div>
```

Don't forget to add a corresponding dot for each new slide:

```html
<span class="dot" data-index="3"></span>
```

### Customizing Customer Logos

To add or replace customer logos in the scrolling section:

```html
<div class="logo-item">
    <img src="path-to-your-logo.png" alt="Company Name">
</div>
```

Make sure to add the logo both in the original set and in the duplicate set for seamless scrolling.

### Customizing Colors

Edit the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    --accent-color: #f97316;
    --dark-color: #1e293b;
    --light-color: #f8fafc;
    --text-color: #334155;
    --text-light: #64748b;
}
```

## Browser Support

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is available for personal and commercial use.
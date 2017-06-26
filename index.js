import  './app/fonts/robin_theme_fonts';
import './dist/css/main.css';

/* SVG */
import svgXHR from './app/js/svgxhr';

// require basic or custom sprite loader
svgXHR({ path: './svg/**/*.svg', name: 'svg/main.svg' });
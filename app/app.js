/* Styles */
import  './fonts/robin_theme_fonts';
import './scss/main.scss';

/* SVG */
import svgXHR from './js/svgxhr';

// require basic or custom sprite loader
svgXHR({ path: './app/svg/**/*.svg', name: 'svg/main.svg' });
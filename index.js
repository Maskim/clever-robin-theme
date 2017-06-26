import  './app/fonts/robin_theme_fonts';
import './app/scss/main.scss';

/* SVG */
import svgXHR from './app/svg/svgxhr';

let __svg__ = { path: './svg/**/*.svg', name: 'svg/main.svg' };

// require basic or custom sprite loader
svgXHR(__svg__);
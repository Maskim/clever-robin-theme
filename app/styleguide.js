/* Styles */

import './fonts/robin_theme_fonts';
import './scss/main.scss';
import './scss/styleguide.scss';

/* SVG */
import svgXHR from './js/svgxhr';

// require basic or custom sprite loader
svgXHR({ path: './svg/**/*.svg', name: 'svg/main.svg' });
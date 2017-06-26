/* Styles */

import './fonts/robin_theme_fonts';
import './scss/main.scss';
import './scss/styleguide.scss';

/* SVG */
import svgXHR from './svg/svgxhr';

let __svg__ = { path: './svg/**/*.svg', name: 'svg/main.svg' };

// require basic or custom sprite loader
svgXHR(__svg__);
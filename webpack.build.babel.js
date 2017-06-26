import Merge from 'webpack-merge';
import CommonConfig from './webpack.common.babel.js';
import KssWebpackPlugin from 'kss-webpack-plugin';

const KssConfig = {
    source: 'app/scss',
    title: 'Robin Theme Style Guide',
    css: ['../dist/css/main.css', '../dist/css/styleguide.css'],
    js: ['../dist/js/styleguide.js'],
    builder: 'builder/twig',
};

module.exports = Merge(CommonConfig, {
    watch: false,
    plugins: [
        new KssWebpackPlugin(KssConfig),
    ]
});
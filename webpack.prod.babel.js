import Merge from 'webpack-merge';
import CommonConfig from './webpack.common.babel.js';
import webpack from 'webpack';
import KssWebpackPlugin from 'kss-webpack-plugin';

const KssConfig = {
    source: 'app/scss',
    title: 'Robin Theme Style Guide',
    css: ['../dist/css/main.css', '../dist/css/styleguide.css'],
    js: ['../dist/js/styleguide.js'],
    builder: 'builder/twig',
};

module.exports = Merge(CommonConfig, {
    plugins: [
        new KssWebpackPlugin(KssConfig),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
    ]
});
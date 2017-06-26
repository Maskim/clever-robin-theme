import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import postcssReporter from 'postcss-reporter';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import SvgStore from 'webpack-svgstore-plugin';

const supportedBrowsers = [
    '> 0.5%',
    'last 2 versions'
];

const scssProcessors = [
    autoprefixer({
        browsers: supportedBrowsers,
        cascade: false
    }),
    postcssReporter({ clearReportedMessages: true }),
];

const MODULE_APP_DIR = path.resolve(__dirname, 'app');
const MODULE_BUILD_DIR = path.resolve(__dirname, 'dist');

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].css'
});

module.exports = {
    context: MODULE_APP_DIR,

    entry: {
        main: './main.js',
        styleguide: './styleguide.js'
    },

    output: {
        filename: './js/[name].js',
        path: MODULE_BUILD_DIR,
    },

    devtool: 'source-map',

    devServer: {
        contentBase: MODULE_BUILD_DIR,
        watchContentBase: true
    },

    module: {
        noParse: /lodash/,

        rules: [
            {
                test: /\.js$/,
                include: MODULE_APP_DIR + '/js',
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'es2016'],
                        cacheDirectory: true,
                        plugins: ['transform-runtime']
                    }
                }, {
                    loader: 'eslint-loader',
                    options: {
                        cache: true,
                        emitWarning: true,
                        configFile: '.eslintrc.yml'
                    }
                }]
            },

            {
                test: /\.scss$/,

                use: extractSass.extract( {
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: 'inline',
                                plugins: (loader) => scssProcessors
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                keepQuery: false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, './node_modules/compass-mixins/lib')
                                ],
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'import-glob-loader'
                        },
                    ],
                    publicPath: '../'
                } ),
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: MODULE_APP_DIR + '/svg',
                use: [{
                    loader: "file-loader?name=fonts/[name].[ext]"
                }],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            LANG: JSON.stringify("en")
        }),

        extractSass,

        new StyleLintPlugin({
            configFile: '.stylelintrc',
            context: MODULE_APP_DIR + '/scss',
            files: '**/*' + 'scss',
            failOnError: false,
            quiet: true,
        }),

        new SvgStore.Options({
            svgoOptions: {
                plugins: [
                    {
                        removeTitle: true
                    }
                ],
            }
        }),
    ],
};

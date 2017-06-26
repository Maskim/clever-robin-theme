import Merge from 'webpack-merge';
import CommonConfig from './webpack.common.babel.js';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import KssWebpackPlugin from 'kss-webpack-plugin';

const KssConfig = {
    source: 'app/scss',
    title: 'Robin Theme Style Guide',
    js: ['../dist/js/styleguide.js'],
    builder: 'builder/twig',
};

module.exports = Merge(CommonConfig, {
    watch: true,
    plugins: [
        new KssWebpackPlugin(KssConfig),
        new BrowserSyncPlugin({
            files: ["dist/**/*.*", "components/**/*.*"],
            server: {
                baseDir: "./",
                directory: true
            },
            port: 3000,
            reloadDelay: 200,
            injectChanges: false,
            reloadDebounce: 500,
            reloadOnRestart: true
        }),
    ]
});
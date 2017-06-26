import Merge from 'webpack-merge';
import CommonConfig from './webpack.common.babel.js';

module.exports = Merge(CommonConfig, {
    watch: true,
});
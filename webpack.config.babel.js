module.exports = env => {
    console.log(`Build ${env} Environement`);
    return require( `./webpack.${env}.babel.js` );
};
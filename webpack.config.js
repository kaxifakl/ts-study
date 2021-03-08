let path = require('path');

module.exports = {
    entry: './build/ts/index.js',
    output: {
        path: path.resolve(__dirname, './build/dist'),
        filename: 'bundle.js',
    },
};
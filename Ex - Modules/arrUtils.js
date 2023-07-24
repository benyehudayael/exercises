const strUtils = require('./strUtils');

module.exports = {
    getArrLength: function (arr) {
        return arr.reduce((totalLength, str) => totalLength + strUtils.getLength(str), 0);
    }
};
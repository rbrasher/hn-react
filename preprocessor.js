/**
 * Created by ron on 4/7/2015.
 */
// pre-processor for jest since we are using jsx
var ReactTools = require('react-tools');
module.exports = {
    process: function(src) {
        return ReactTools.transform(src);
    }
};

var path = require('path');
var sass = require('node-sass');

modules = [ 'singularitygs', 'breakpoint-sass', 'sass-toolkit' ];

var options = {
    file: path.join('source', '6c5443acf20fe855f854.scss'),
    includePaths: modules.map(function(dir) {
        return path.join(require.resolve(dir), '..')
    })
};

console.log(options);

// Standard node-sass rendering of a single file.
sass.render(options, function(err, result) {
    console.log(err, result);
});

var path = require('path');
var sass = require('node-sass');
var eyeglass = require('eyeglass');

modules = [ 'singularitygs', 'breakpoint-sass', 'sass-toolkit' ];

var options = {
    file: path.join('source', '6c5443acf20fe855f854.scss'),
    includePaths: modules.map(function(dir) {
        return path.join(require.resolve(dir), '..')
    })
};

console.log(options);

options.eyeglass = {
  engines: {
    sass: sass
  },
  
  buildDir: path.join(__dirname, 'dist'),
}

// Standard node-sass rendering of a single file.
sass.render(eyeglass(options), function(err, result) {
    console.log(err, result);
});

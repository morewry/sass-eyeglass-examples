var fs = require('fs');
var path = require('path');
var nodeSass = require('node-sass');
var eyeglass = require('eyeglass');

var scssDir = path.join(__dirname);

var isScssFile = function (itemInDir) {
  return itemInDir.match(/[.]scss$/gi);
};

var setFilePath = function (scssFileName) {
  return path.join(scssDir, scssFileName);
};

var getSpecs = function () {
  return fs.readdirSync(scssDir)
    .filter(isScssFile)
    .map(setFilePath);
};

var runSass = function (filePath) {
  var options = eyeglass({
    file: filePath,
    eyeglass: {
      root: scssDir,
      engines: {
        sass: nodeSass
      }
    }
  });
  console.log(options);
  nodeSass.render(options, function (error, result) {
    if (error) {
      console.error(error);
    }
    else {
      console.log(result);
    }
  });
};

getSpecs().forEach(runSass);
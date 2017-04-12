var fs = require('fs');
var path = require('path');
var sassTrue = require('sass-true');
var eyeglass = require('eyeglass');
var describe = require('mocha').describe;
var it = require('mocha').it;

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

var runTrue = function (filePath) {
  var options = eyeglass({
    file: filePath,
    eyeglass: {
      root: scssDir
    }
  });
  console.log(options);
  sassTrue.runSass(options, describe, it);
};

getSpecs().forEach(runTrue);

var eyeglass = require('eyeglass');

module.exports = function(grunt) {

  grunt.initConfig({
  	sass: {
  		options: eyeglass({}),
  		dist: {
  			files: {
  				'use-grunt.css': 'use-grunt.scss'
  			}
  		}
  	}
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);

};

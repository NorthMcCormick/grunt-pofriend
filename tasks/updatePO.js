/*
 * grunt-po2mo
 * https://github.com/NorthMcCormick/grunt-pofriend.git
 *
 * Copyright (c) 2017 North McCormick
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('sync-exec');

module.exports = function(grunt) {

  grunt.registerMultiTask('updatePO', 'Update .po files from a .pot with msgmerge.', function() {

    var options = this.options({

    });

    this.files.forEach(function(file) {

      var dest = file.dest;

      file.src.forEach(function(src) {

      grunt.verbose.writeln('SRC: ' + src);
      grunt.verbose.writeln('DEST: ' + dest);

        var command = 'msgmerge -U ' + src + ' ' + dest;

        grunt.verbose.writeln('Executing: ' + command);

        var result = exec(command);

        grunt.verbose.writeln('Executed with status: ' + result.status);

        if (result.status !== 0) {
          grunt.log.error(result.stderr);
        }
      }, this);

    });

  });

};
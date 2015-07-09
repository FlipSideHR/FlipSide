module.exports = function (grunt) {
  'use strict';

  var paths = grunt.config.get('paths'),
    pkg = grunt.config.get('pkg');

  grunt.config.merge({
    clean: {
      'MacOS64_v0.12.0': {
        files: [{
          dot: true,
          src: ['<%= paths.dist %>/MacOS64_v0.12.0/*']
        }]
      }
    },
    copy: {
      options: {
        mode: true
      },
      'MacOS64_v0.12.0': {
        files: [
          {
            expand: true,
            cwd: '<%= paths.nwjsSource %>/nwjs-v0.12.0-osx-x64',
            dest: '<%= paths.dist %>/MacOS64_v0.12.0',
            src: '**'
          },
          {
            expand: true,
            cwd: '<%= paths.app %>',
            dest: '<%= paths.dist %>/MacOS64_v0.12.0/nwjs.app/Contents/Resources/app.nw',
            src: '**'
          },
          {
            expand: true,
            cwd: '<%= paths.resources %>/mac',
            dest: '<%= paths.dist %>/MacOS64_v0.12.0/nwjs.app/Contents/Resources',
            filter: 'isFile',
            src: '*.icns'
          }
        ]
      }
    },
    rename: {
      'MacOS64_v0.12.0': {
        files: [{
          src: '<%= paths.dist %>/MacOS64_v0.12.0/nwjs.app',
          dest: '<%= paths.dist %>/MacOS64_v0.12.0/<%= pkg.name %>.app'
        }]
      }
    }
  });

  grunt.registerTask('plist-MacOS64_v0.12.0', 'set node webkit and app relevant information to a new plist file', function () {
    var infoPlistTmp = grunt.file.read(paths.resources + '/mac/Info.plist.tmp', {encoding: 'UTF8'}),
      infoPlist = grunt.template.process(infoPlistTmp, {
        data: {
          nwExecutable: 'nwjs',
          version: pkg.version
        }
      });

    grunt.file.write(paths.dist + '/MacOS64_v0.12.0/nwjs.app/Contents/Info.plist', infoPlist, {
      encoding: 'UTF8'
    });
  });

  grunt.registerTask('dmg-MacOS64_v0.12.0', 'Create dmg from previously created app folder in dist.', function () {
    var done = this.async(),
      createDmgCommand = 'resources/mac/package.sh "'+ pkg.name +'" "'+ paths.dist +'/MacOS64_v0.12.0"',
      fs = require('fs'),
      exec = require('child_process').exec;

    fs.chmodSync('resources/mac/package.sh', '555');
    exec(createDmgCommand, function (error, stdout, stderr) {
      var result = true;
      if (stdout) {
        grunt.log.write(stdout);
      }
      if (stderr) {
        grunt.log.write(stderr);
      }
      if (error !== null) {
        grunt.log.error(error);
        result = false;
      }
      done(result);
    });
  });

  grunt.registerTask('MacOS64_v0.12.0', function(dmg){
    grunt.task.run([
      'clean:MacOS64_v0.12.0',
      'copy:MacOS64_v0.12.0',
      'plist-MacOS64_v0.12.0',
      'rename:MacOS64_v0.12.0'
    ]);

    if(dmg){
      grunt.task.run('dmg-MacOS64_v0.12.0');
    }
  });

};
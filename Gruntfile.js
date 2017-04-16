module.exports = (grunt) => {


    grunt.initConfig({
      sass: {
        dist: {
          files: {
            'dev/stylesheets/main.css': 'dev/stylesheets/scss/main.scss'
          }
        }
      },
      'ftp-deploy': {
        build: {
          auth: {
            host: 'meriti.rj.gov.br',
            port: 21,
            authKey: 'key1'
          },
          src: 'dev',
          dest: 'public_html/100dias',
          exclusions: ['dev/stylesheets/scss/*']
        }
      },
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'dev/stylesheets/main.min.css': ['dev/stylesheets/main.css']
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'dev/scripts/scripts.min.js': ['dev/scripts/libs/*.js','dev/scripts/partials/*.js']
          }
        }
      },
      watch: {
        css: {
          files: ['**/*.scss'],
          tasks: ['sass', 'cssmin'],
          options: {
            spawn: false,
          },
        },
        scripts: {
          files: ['dev/scripts/partials/*.js','dev/scripts/libs/*.js'],
          tasks: ['uglify'],
          options: {
            spawn: false,
          },
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('development', ['watch']);
    grunt.registerTask('production', ['ftp-deploy']);
};

module.exports = (grunt) => {


    grunt.initConfig({
      sass: {
        dist: {
          files: {
            'dev/stylesheets/main.css': 'dev/stylesheets/scss/main.scss'
          }
        }
      },
      imagemin: {                          // Task
         dynamic: {                         // Another target
           files: [{
             expand: true,                  // Enable dynamic expansion
             cwd: 'dev/',                   // Src matches are relative to this path
             src: ['images/*.{png,jpg,gif}'],   // Actual patterns to match
             dest: 'public/'                  // Destination path prefix
           }]
         }
       },
      copy: {
        main: {
          expand: true,
          src: ['scripts/scripts.min.js', 'stylesheets/main.min.css', 'stylesheets/odometer.css', 'stylesheets/animate.css', 'images/logo.svg'],
          cwd: 'dev',
          dest: 'public/',
        }
      },
      minifyHtml: {
    		options: {
    			cdata: true
    		},
    		dist: {
    			files: {
    				'public/index.html': 'dev/index.html'
    			}
    		}
    	},
      'ftp-deploy': {
        build: {
          auth: {
            host: 'ftp.meriti.rj.gov.br',
            port: 21,
            authKey: 'key1'
          },
          src: 'public',
          dest: '/public_html/100dias/'
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('development', ['watch']);
    grunt.registerTask('production', ['copy','minifyHtml','imagemin', 'ftp-deploy']);
};

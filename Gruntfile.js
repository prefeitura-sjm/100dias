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
      watch: {
        scripts: {
          files: ['**/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
          },
        },
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('development', ['watch']);
    grunt.registerTask('production', ['ftp-deploy']);
};

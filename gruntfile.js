module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      browserSync: {
          bsFiles: {
              src : ['style.css', //assets/css/*.css' - * - jakikolwiek plik css szuka ze zbioru wszystkich
                    '*.js',
                    '*.html'
              ]
          },                                   // kiedy jest określony 'assets/css/style.css - szuka wtedy konkretny plik css
          options: {
              server: {
                  baseDir: "./"
              }
          }
      }
  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-browser-sync'); 
  
  // Default task(s).
  grunt.registerTask('default', ['browserSync']);

};
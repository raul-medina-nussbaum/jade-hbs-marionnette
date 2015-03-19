/**
 * Created by raul on 2/21/15.
 */
'use strict';


module.exports = function(grunt) {

    grunt.registerTask('default', ['watch']);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            jade: {
                files: ['jade/**/*.jade'],
                tasks: ['jade','handlebars','concat:js']
            },
            handlebars: {
                files: ['hbs/**/*.html'],
                tasks: ['handlebars']
            },
            scripts: {
                files: ['js/dev/**/*.js'],
                tasks: ['concat:js']
            },
            grunt: {
                files: ['Gruntfile.js']
            }
        },
        jade: {
            compile:{
              options:{
                pretty: true
              }
            },
            files:{
              cwd: 'jade',
              src: '**/*.jade',
              dest: 'html_hbs',
              expand: true,
              ext: '.html'
            }
        },
        handlebars: {
            compile: {
               options: {
                   namespace: 'handlebars'
               },
               files: {
                   'js/dev/hbs/templates.js' : ['html_hbs/handlebars/*.html']
               }
            }
        },
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                files: {
                    'js/prod/mario.concat.js': [
                        'js/dev/vendor/jquery-1.11.1.min.js',
                        'js/dev/vendor/handlebars-v3.0.0.js',
                        'js/dev/hbs/templates.js',
                        'js/dev/mario.js']
                }
            }
        },

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
};

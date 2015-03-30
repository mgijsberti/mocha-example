module.exports = function(grunt) {

    // configure tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        // test runner suite
        'mocha-chai-sinon': {
            options: {
                ui: 'bdd',
                quiet: false
            },
            build: {
                src: ['./specs/**/*.spec.js'],
                options: {
                    reporter: 'spec',
                    require: './spec/helpers/chai.js'
                }
            }
        },
        watch: {
            build: {
                files: [
                    './lib/**/*.js',
                    './specs/**/*.js'
                ],
                tasks: [
                    'default'
                ]
            }
        }

    });


    // load required tasks
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-mocha-chai-sinon");

    grunt.registerTask('default', [
         'mocha-chai-sinon:build'
    ]);

    grunt.registerTask('start', [
        'default',
        'watch:build'
    ]);};
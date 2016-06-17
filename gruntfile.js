/**
 * Created by Chris on 2016-06-16.
 */

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: "client/style/*.scss",
                tasks: ['sass','cssmin'],
                options: {
                    livereload: false
                }
            },
            ts: {
                files:"server/*.ts",
                tasks: ['ts']
            },
            express: {
                files: ['**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            },
            public: {
                files: ["client/**/*.css"]
            }
        },
        cssmin:{
            my_target: {
                files: [{
                    expand: true,
                    cwd:"client/style",
                    src:["*.css",'!*.min.css'],
                    dest: 'client/style',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
          options: {
              manage: false
          },
          my_target: {
              files: [{
                  expand: true,
                  cwd: 'server/',
                  src: "**/*.js",
                  dest:'server'
              }]
          }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'client/style/werk.css' : 'client/style/*.scss'
                }
            }
        },
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**"]
            }
        },
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server/werk_server.js'
                }
            }
        },
        clean: {
            server: ['server/**/*.js'],
            client: ['client/**/*.js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask("default", ["express","watch"]);
};
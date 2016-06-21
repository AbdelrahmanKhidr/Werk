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
                files: "style/*.scss",
                tasks: ['sass','cssmin'],
                options: {
                    livereload: false
                }
            },
            ts: {
                files:"*.ts",
                tasks: ['ts']
            },
            express: {
                files: ['**/*.js','**/*.handlebars'],
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
                    cwd:"style",
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
                  cwd: '.',
                  src: "**/*.js",
                  dest:'.'
              }]
          }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'client/style/werk.css' : 'style/*.scss'
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
                    script: 'werk.js'
                }
            }
        },
        clean: {
            server: ['server/**/*.js'],
            client: ['client/**/*.js']
        },
        exec: {
            typings: {
                cmd: 'python typings/make_typings.py > typings/_werkTypings.d.ts'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask("default", ["ts","sass","express","watch"]);
};
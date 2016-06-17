/**
 * Created by Chris on 2016-06-16.
 */

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        watch: {
            sass: {
                files: "client/style/*.scss",
                tasks: ['sass','cssmin']
            },
            ts: {
                files:"server/*.ts",
                tasks: ['ts']
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
            server: {
                server: 'server/werk_server.js',
                port:3000,
                hostname:'localhost',
                livereload: true,
                serverreload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-express");
    grunt.registerTask("default", ["express:server","watch" ]);
};
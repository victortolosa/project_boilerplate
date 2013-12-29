module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
             dist: {
        src: [
            'js/*.js', // All JS in the libs folder
        ],
        dest: 'js/production.js',
    }
},

        uglify: {
    build: {
        src: 'js/production.js',
        dest: 'js/production.min.js'
    }
},

imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['*/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
},

watch: {
    options: {
        livereload: true,
    },
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    },

        css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
    }
},

sass: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/build.css':'css/build.scss'
        }
    } 
}


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);

};
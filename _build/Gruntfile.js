module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../',
            deployPath: '../deploy/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                //src: ['<%= meta.srcPath %>lib/jquery.min.js', '<%= meta.srcPath %>lib/angular.min.js','<%= meta.srcPath %>lib/jq.appframework.js', '<%= meta.srcPath %>lib/appframework.ui.min.js','<%= meta.srcPath %>lib/appframeworkos-min.js', '<%= meta.srcPath %>js/index.min.js','<%= meta.srcPath %>js/main.min.js', '<%= meta.srcPath %>js/bagpack.js', '<%= meta.srcPath %>lib/kinect.min.js','<%= meta.srcPath %>js/drawcontrols.min.js','<%= meta.srcPath %>js/localstorage.min.js','<%= meta.srcPath %>js/stopwatch.min.js'],
                //src: ['<%= meta.srcPath %>www/js/jquery.min.js', '<%= meta.srcPath %>www/js/jquery-migrate-1.2.1.min.js','<%= meta.srcPath %>www/js/jquery-ui.js','<%= meta.srcPath %>www/js/bootstrap.js','<%= meta.srcPath %>www/js/jquery.parallax.js','<%= meta.srcPath %>www/js/jquery.wait.js','<%= meta.srcPath %>www/js/modernizr-2.6.2.min.js','<%= meta.srcPath %>www/js/modernizr.custom.js','<%= meta.srcPath %>www/js/jquery.themepunch.tools.min.js','<%= meta.srcPath %>www/js/jquery.themepunch.revolution.min.js','<%= meta.srcPath %>www/js/jquery.prettyPhoto.js','<%= meta.srcPath %>www/js/superfish.js','<%= meta.srcPath %>www/js/tweetMachine.js','<%= meta.srcPath %>www/js/tytabs.js','<%= meta.srcPath %>www/js/jquery.gmap.min.js','<%= meta.srcPath %>www/js/circularnav.js','<%= meta.srcPath %>www/js/jquery.sticky.js','<%= meta.srcPath %>www/js/jflickrfeed.js','<%= meta.srcPath %>www/js/imagesloaded.pkgd.min.js','<%= meta.srcPath %>www/js/waypoints.min.js','<%= meta.srcPath %>www/js/custom.js'],
                src: ['<%= meta.srcPath %>www/js/jquery.min.js', '<%= meta.srcPath %>www/js/jquery-migrate-1.2.1.min.js','<%= meta.srcPath %>www/js/jquery-ui.js','<%= meta.srcPath %>www/js/bootstrap.js','<%= meta.srcPath %>www/js/jquery.parallax.js','<%= meta.srcPath %>www/js/jquery.wait.js','<%= meta.srcPath %>www/js/modernizr-2.6.2.min.js','<%= meta.srcPath %>www/js/modernizr.custom.js','<%= meta.srcPath %>www/js/jquery.themepunch.tools.min.js','<%= meta.srcPath %>www/js/jquery.themepunch.revolution.min.js'],
                dest: '<%= meta.deployPath %>main.js'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task.
    grunt.registerTask('default', ['concat']);

};

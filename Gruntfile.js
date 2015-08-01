module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	require('time-grunt')(grunt);
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: '_js/*.js', // input
				dest: 'js/scripts.min.js' // output
			}
		},
		sass: {
			options: {
				outputStyle: 'compressed',
			},
			dist: {
				files: {
					'css/styles.css': ['_sass/main.sass'],
				}
			}
		},
		shell: {
			jekyll_build: {
				command: 'jekyll build'
			}
		},
		watch: {
			options: { 
				livereload: true 
			},
			src: {
				files: [
					'_sass/*.scss',
					'_sass/*.sass',
					'index.html',
					'_includes/*.html',
					'_js/*.js',
					'_layouts/*.html',
					'_posts/*.md',
					'_posts/*/*.md',
					'_data/*','*.md',
				],
				tasks: ['uglify','sass','shell'],
			},
		},
		connect: {
			server: {
				options: {
					base: '_site',
					port: 4400,
				}
			}
		},
	});


	
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	// grunt.loadNpmTasks('grunt-contrib-htmlmin');
	// grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-newer');

	// Default task(s).
	grunt.registerTask('default', [
		'newer:uglify',
		'newer:sass',
		'shell',
		'connect',
		'watch'
	]);

};
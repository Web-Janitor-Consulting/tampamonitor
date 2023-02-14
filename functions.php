<?php
/**
 * Additional and override functions for blackswan2022.
 *
 * @package tampa-monitor
 */

// Enqueue scripts and style from parent theme.

function tampa_monitor_scripts() {
		wp_enqueue_style(
			'tampa-monitor-style',
			get_stylesheet_directory_uri() . '/min.style.css',
			array( 'twenty-twenty-two-style' ),
			wp_get_theme()->get( 'Version' )
		);
		wp_enqueue_script(
			'tampa-monitor-theme-scripts',
			get_stylesheet_directory_uri() . '/assets/js/main.js',
			array('jquery'),
			wp_get_theme()->get( 'Version' ),
			true
		);

}
add_action( 'wp_enqueue_scripts', 'tampa_monitor_scripts' );

function wjc_editor_scripts() {
	wp_enqueue_script(
		'tampa-monitor-theme-scripts',
		get_stylesheet_directory_uri() . '/assets/js/main.js',
		array('jquery'),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action('enqueue_block_editor_assets', 'wjc_editor_scripts');

add_editor_style( 'min.main.css' );


// Enable SVG support
function wjc_add_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'wjc_add_mime_types');

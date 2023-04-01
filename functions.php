<?php
/**
 * Additional and override functions for blackswan2022.
 *
 * @package tampa-monitor
 */

// Enqueue scripts and style from parent theme.

add_action( 'template_redirect', 'plugin_is_page' );

function plugin_is_page() {
    if ( is_page( 'tampa-land-use-map' ) ) {
        wp_enqueue_script( 'wjc-mapbox', 'https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.js', [], null, true );
        wp_enqueue_script( 'wjc-mapbox-geocoder', 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js', array('wjc-mapbox'), null, true );
		wp_enqueue_script( 'wjc-mapbox-land-use', get_stylesheet_directory_uri() . '/assets/js/land-use.js', array('wjc-mapbox-legend'), null, true);
		wp_enqueue_script( 'wjc-mapbox-legend', 'https://unpkg.com/mapboxgl-legend@1.4.2/dist/index.umd.min.js', array('wjc-mapbox'), null, true );
		wp_enqueue_style( 'wjc-mapbox-style', 'https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.css', [], null, 'all' );
		wp_enqueue_style( 'wjc-mapbox-style-legend', 'https://unpkg.com/mapboxgl-legend@1.4.2/dist/index.umd.min.css', array('wjc-mapbox-style'), null, 'all' );
		wp_enqueue_style( 'wjc-mapbox-style-geocoder', 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css', array('wjc-mapbox-style'), null, 'all' );

    }
}

function tampa_monitor_scripts() {
		wp_enqueue_style(
			'tampa-monitor-style',
			get_stylesheet_directory_uri() . '/min.main.css',
			array( 'twenty-twenty-one-style','adobe-fonts' ),
			null,
			'all'
		);
		wp_enqueue_style(
			'tampa-monitor-style-dark',
			get_stylesheet_directory_uri() . '/assets/css/darkmode.css',
			array( 'twenty-twenty-one-style','adobe-fonts' ),
			null,
			'all'
		);
		wp_enqueue_style(
			'adobe-fonts',
			'https://use.typekit.net/qgm8kyl.css',
			array(),
			null,
			'all'
		);
		wp_enqueue_script(
			'tampa-monitor-theme-scripts',
			get_stylesheet_directory_uri() . '/assets/js/main.js'
		);

}
add_action( 'wp_enqueue_scripts', 'tampa_monitor_scripts' );

add_editor_style( 'min.main.css' );


// Enable SVG support
function wjc_add_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'wjc_add_mime_types');

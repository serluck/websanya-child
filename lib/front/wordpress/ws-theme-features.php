<?php
/**
 * Websanya Theme WordPress Features.
 *
 * @package   Websanya Child Theme
 * @author    Alexander Goncharov <http://websanya.ru/>
 * @copyright Copyright (c) 2015, Alexander Goncharov
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

/**
 * Add custom header support.
 *
 * @since 0.9.0
 */
add_theme_support( 'custom-header', array(
	'default-text-color'     => '2a3333',
	'width'                  => 2560,
	'height'                 => 1440,
	'flex-height'            => true,
	'flex-width'             => true,
	'uploads'                => true,
	'wp-head-callback'       => 'ws_custom_header_style',
) );

/**
 * Add markup for custom header.
 *
 * @since 0.9.0
 */
add_action( 'genesis_before_header', 'ws_custom_header_markup' );
function ws_custom_header_markup() {
	echo '<div class="ws-custom-header"></div>';
}

/**
 * Callback function for custom header, wp_head action.
 *
 * @since 0.9.0
 */
add_action( 'wp_head', 'genesis_custom_header_style' );
function ws_custom_header_style() {

	$output = '';

	$header_selector = '.ws-custom-header';
	$title_selector  = genesis_html5() ? '.custom-header .site-title'       : '.custom-header #title';
	$desc_selector   = genesis_html5() ? '.custom-header .site-description' : '.custom-header #description';
	
	//* If single post get Featured Image else get custom header image.
	if ( is_single() && has_post_thumbnail() ) {
		$header_image = array_shift(wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' ));
	} else {
		$header_image = get_header_image();
	}
	
	$text_color   = get_header_textcolor();

	//* If no options set, don't waste the output. Do nothing.
	if ( empty( $header_image ) && ! display_header_text() && $text_color === get_theme_support( 'custom-header', 'default-text-color' ) ) {
		return;	
	}

	//* Header image CSS, if exists
	if ( $header_image ) {
		$output .= sprintf( '%1$s { background-image: -moz-linear-gradient(top, rgba(246,246,246,0) 0%%, rgba(246,246,246,1) 100%%), url(%2$s); background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%%, rgba(246,246,246,0)), color-stop(100%%, rgba(246,246,246,1))), url(%2$s); background-image: -webkit-linear-gradient(top, rgba(246,246,246,0) 0%%, rgba(246,246,246,1) 100%%), url(%2$s); background-image: -o-linear-gradient(top, rgba(246,246,246,0) 0%%, rgba(246,246,246,1) 100%%), url(%2$s); background-image: -ms-linear-gradient(top, rgba(246,246,246,0) 0%%, rgba(246,246,246,1) 100%%), url(%2$s); background-image: linear-gradient(to bottom, rgba(246,246,246,0) 0%%, rgba(246,246,246,1) 100%%), url(%2$s); }', $header_selector, esc_url( $header_image ) );
	}

	//* Header text color CSS, if showing text
	if ( display_header_text() ) {
		$output .= sprintf( '%2$s a, %3$s { color: #%1$s; } .nav-header ul.genesis-nav-menu li a { color: #%1$s; } ', esc_html( $text_color ), esc_html( $title_selector ), esc_html( $desc_selector ) );
	}
	
	if ( $output )
		printf( '<style type="text/css">%s</style>' . "\n", $output );
}
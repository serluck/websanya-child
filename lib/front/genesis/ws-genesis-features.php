<?php
/**
 * Websanya Genesis Features.
 *
 * @package   Websanya Child Theme
 * @author    Alexander Goncharov <http://websanya.ru/>
 * @copyright Copyright (c) 2015, Alexander Goncharov
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */
	
/**
 * Add HTML5 markup structure.
 *
 * @since 0.9.0
 */
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list' ) );

/**
 * Add viewport meta tag for mobile browsers.
 *
 * @since 0.9.0
 */
add_theme_support( 'genesis-responsive-viewport' );

/**
 * Remove the header right widget area.
 *
 * @since 0.9.0
 */
unregister_sidebar( 'header-right' );

/**
 * Remove Primary & Secondary navigations.
 *
 * @since 1.0.0
 */
remove_theme_support( 'genesis-menus' );

/**
 * Force full width layout.
 *
 * @since 1.0.0
 */
add_filter('genesis_pre_get_option_site_layout', '__genesis_return_full_width_content');

/**
 * Customize Viewport meta tag for mobile browsers.
 *
 * @since 1.0.0
 */
remove_action( 'genesis_meta','genesis_responsive_viewport' );
add_action( 'genesis_meta', 'ws_viewport_meta_tag' );
function ws_viewport_meta_tag() {
	print('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>');
}

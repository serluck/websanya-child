<?php
/**
 * Websanya scripts enqueueing.
 *
 * @package   Websanya Child Theme
 * @author    Alexander Goncharov <http://websanya.ru/>
 * @copyright Copyright (c) 2015, Alexander Goncharov
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

/**
 * Enqueue theme script.
 *
 * @since 0.9.0
 */
add_action( 'wp_enqueue_scripts', 'ws_include_js' );
function ws_include_js() {
  wp_enqueue_script( 'main', get_stylesheet_directory_uri() . '/js/min/main-min.js', array( 'jquery' ), '', true );
}

/**
 * Remove WP version param from any enqueued scripts & styles.
 *
 * @since 1.0.5
 */
function ws_remove_wp_ver_css_js( $src ) {
    if ( strpos( $src, 'ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'ws_remove_wp_ver_css_js', 9999 );
add_filter( 'script_loader_src', 'ws_remove_wp_ver_css_js', 9999 );
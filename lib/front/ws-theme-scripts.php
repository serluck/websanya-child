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
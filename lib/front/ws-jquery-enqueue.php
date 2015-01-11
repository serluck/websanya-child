<?php
/**
 * Websanya proper jQuery enqueueing.
 *
 * @package   Websanya Child Theme
 * @author    Alexander Goncharov <http://websanya.ru/>
 * @copyright Copyright (c) 2015, Alexander Goncharov
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */
	
/**
 * Remove jQuery scripts loading.
 *
 * @since 0.9.0
 */
add_action('wp_enqueue_scripts', 'ws_jquery_remove');
function ws_jquery_remove() {
  wp_deregister_script( 'jquery' );
}

/**
 * Load jQuery just before closing Body tag.
 *
 * @since 0.9.0
 */
add_action('genesis_after_footer', 'ws_script_add_body');
function ws_script_add_body() {
  wp_register_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js' );
}
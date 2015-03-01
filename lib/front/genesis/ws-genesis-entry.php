<?php
/**
 * Websanya Genesis Entry Hooks.
 *
 * @package   Websanya Child Theme
 * @author    Alexander Goncharov <http://websanya.ru/>
 * @copyright Copyright (c) 2015, Alexander Goncharov
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

/**
 * Customize the post info function.
 *
 * @since 0.9.0
 */
add_filter( 'genesis_post_info', 'ws_post_info_filter' );
function ws_post_info_filter($post_info) {
	if ( !is_singular() ) {
		$post_info = 'Опубликовано [post_date] [post_edit]';
		return $post_info;
	} else {
		$post_info = '[post_date] [post_edit]';
		return $post_info;
	}
}

/**
 * Remove the entry meta & the entry footer markup (requires HTML5 theme support).
 *
 * @since 0.9.0
 */
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );
remove_action( 'genesis_entry_footer', 'genesis_entry_footer_markup_open', 5 );
remove_action( 'genesis_entry_footer', 'genesis_entry_footer_markup_close', 15 );

/**
 * Modify the WordPress read more link.
 *
 * @since 0.9.0
 */
add_filter( 'the_content_more_link', 'sp_read_more_link' );
function sp_read_more_link() {
	return '<a class="more-link" href="' . get_permalink() . '">' . __('Читать далее', 'genesis') . '</a>';
}
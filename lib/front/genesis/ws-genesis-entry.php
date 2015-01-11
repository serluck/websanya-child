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
if ( !is_page() ) {
	$post_info = '<a href="' . get_permalink() . '">[post_date]</a> [post_comments] [post_edit]';
	return $post_info;
}}

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

/**
 * This function displays social sharing buttons based on the options selected by the user.
 *
 * @since 0.9.0
 
add_action( 'genesis_entry_footer', 'websanya_social_sharing_buttons' );
function websanya_social_sharing_buttons() {
	$perm  = get_permalink();
	$title = get_the_title();
	if ( genesis_get_option( 'websanya_facebook_link', WEBSANYA_SETTINGS_FIELD ) ) {
		echo '<div class="websanya-fb-like websanya-social-share">' . '<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like href="'.$perm.'" send="false" layout="button_count" width="120" show_faces="false" action="like" font="lucida grande"></fb:like>' . '</div>';
	}
	if ( genesis_get_option( 'websanya_twitter_link', WEBSANYA_SETTINGS_FIELD ) ) {
		echo '<div class="websanya-tweet websanya-social-share">' . '<a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-url="'.$perm.'" data-text="'.$title.'">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>' . '</div>';
	}
	if ( genesis_get_option( 'websanya_google_link', WEBSANYA_SETTINGS_FIELD ) ) {
		echo '<div class="websanya-google websanya-social-share">' . '<g:plusone size="medium" href="'.$perm.'"></g:plusone><script type="text/javascript">
			(function() {
   			var po = document.createElement("script"); po.type = "text/javascript"; po.async = true;
    		po.src = "https://apis.google.com/js/plusone.js";
    		var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);
  			})();
		</script>' . '</div>';
	}
}
 */
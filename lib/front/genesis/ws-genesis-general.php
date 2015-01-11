<?php
/**
 * Websanya Genesis General Hooks.
 *
 * @package   Websanya Child Theme
 * @author    Alexander Goncharov <http://websanya.ru/>
 * @copyright Copyright (c) 2015, Alexander Goncharov
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

/**
 * Remove the breadcrumbs.
 *
 * @since 0.9.0
 */
remove_action( 'genesis_before_loop', 'genesis_do_breadcrumbs' );

/**
 * Mobile menu markup as seen on Codrops Demo.
 *
 * @since 0.9.0
 */
add_action( 'genesis_after', 'ws_mobile_menu' );
function ws_mobile_menu() {
	print('<div class="overlay overlay-hugeinc">
		<svg class="overlay-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve">
			<path fill="#F6F6F6" d="M6.1,8.9l17,17c0.8,0.8,2,0.8,2.8,0c0.8-0.8,0.8-2,0-2.8l-17-17c-0.8-0.8-2-0.8-2.8,0S5.3,8.1,6.1,8.9z"/>
			<path fill="#F6F6F6" d="M23.1,6.1l-17,17c-0.8,0.8-0.8,2,0,2.8c0.8,0.8,2,0.8,2.8,0l17-17c0.8-0.8,0.8-2,0-2.8
	C25.1,5.3,23.9,5.3,23.1,6.1z"/>
		</svg>');
	$class = 'mobile-menu';
	genesis_nav_menu(
		array(
			'theme_location' => 'header',
			'menu_class'     => $class,
		)
	);
	print('</div>');
}

/**
 * Placing trigger for mobile menu.
 *
 * @since 0.9.0
 */
add_action( 'genesis_header', 'ws_mobile_trigger' );
function ws_mobile_trigger() {
	print('<svg id="trigger-overlay" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve">
<path fill="#2a3333" d="M4,10h24c1.1,0,2-0.9,2-2s-0.9-2-2-2H4C2.9,6,2,6.9,2,8S2.9,10,4,10z M28,14H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2S29.1,14,28,14z M28,22H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2S29.1,22,28,22z"/>
</svg>');
}

/**
 * Customizing footer.
 *
 * @since 1.0.0
 */
add_filter( 'genesis_footer_creds_text', 'ws_footer_creds_text' );
function ws_footer_creds_text() {
	print('2014 – 2015 &copy; — <a href="http://twitter.com/websanya">Александр Гончаров</a>');
}
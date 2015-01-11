<?php
/**
 * Functions.php aggregates all the php-files.
 *
 * @package   Websanya Child Theme
 * @author    Alexander Goncharov <http://websanya.ru/>
 * @copyright Copyright (c) 2015, Alexander Goncharov
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */
	
//* Start the engine
include_once( get_template_directory() . '/lib/init.php' );

//* Child theme (do not remove)
define( 'CHILD_THEME_NAME', 'Websanya Genesis Theme' );
define( 'CHILD_THEME_URL', 'http://websanya.ru/' );
define( 'CHILD_THEME_VERSION', '1.0.0' );

//* Enqueue Proper jQuery from Google
require_once( CHILD_DIR . '/lib/front/ws-jquery-enqueue.php' );

//* Enqueue Theme scripts
require_once( CHILD_DIR . '/lib/front/ws-theme-scripts.php' );

//* Activating Theme Features
require_once( CHILD_DIR . '/lib/front/wordpress/ws-theme-features.php' );

//* Repositioning Stuff w/ Genesis Hooks
require_once( CHILD_DIR . '/lib/front/genesis/ws-genesis-features.php' );
require_once( CHILD_DIR . '/lib/front/genesis/ws-genesis-general.php' );
require_once( CHILD_DIR . '/lib/front/genesis/ws-genesis-entry.php' );
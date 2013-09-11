<?php 

function cat_settings() {  
	// Add tag metabox to page
	register_taxonomy_for_object_type('post_tag', 'page'); 
	// Add category metabox to page
	register_taxonomy_for_object_type('category', 'page');  
}

// Add to the admin_init hook of your theme functions.php file 
add_action( 'admin_init', 'cat_settings' );

function register_my_menu() {
	register_nav_menu('main-menu',__('Main menu'));
}

add_action('init','register_my_menu'); 

// Adds Theme support for thumbnails
add_theme_support( 'post-thumbnails' );

// Adds Theme support for post-formats
add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );

function custom_excerpt_length( $length ) {
	return 80;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );


function new_excerpt_more( $more ) {
	return '.';
}
add_filter('excerpt_more', 'new_excerpt_more');


?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<link href="<?php bloginfo('stylesheet_url'); ?>" media="screen, projection" rel="stylesheet" type="text/css" />
<link href="<?php bloginfo('template_url'); ?>/css/gridset/gridset.css" media="screen, projection" rel="stylesheet" type="text/css" />
<link href="<?php bloginfo('template_url'); ?>/css/jquery.bxslider.css" media="screen, projection" rel="stylesheet" type="text/css" />
<link href="http://fnt.webink.com/wfs/webink.css/?project=7C5C8AF9-1A36-4CDC-B07A-ED72417698D9&fonts=382B4521-6228-4C38-41BC-3DE66C7C910A:f=ProximaNova-Bold,38D80777-BBB8-AAF3-8C21-AAA9AD92B6E6:f=ProximaNova-BlackIt,58DEFEBD-4A55-477B-3C13-525C6AEBDD7A:f=ProximaNova-Regular,58A3DDEA-1A20-AFB9-54E7-882B2382F4AD:f=ProximaNova-SemiboldIt,FA4379E2-2038-8F3F-1CCD-9D7F6C1BE854:f=ProximaNova-ExtrabldIt,C344819E-7F64-52D2-5903-DE54F5382845:f=ProximaNova-Semibold,C88A28DF-0112-63D9-25D2-A4EA08DAF75B:f=ProximaNova-Light,3CE3758E-9A83-BA6E-300A-ACCFD5D3E584:f=ProximaNova-BoldIt,F5870F1F-48F5-36F5-550E-B276AA09225A:f=ProximaNova-RegularIt,7ADDF267-02FA-4E7A-F098-EF6D9CFEF9AE:f=ProximaNova-Black,D8F30418-0E92-EBB4-6408-D220574EF53E:f=ProximaNova-Extrabld,5A9479E7-B0E0-2DCD-5F27-F7666DF19C0F:f=ProximaNova-LightIt" rel="stylesheet" type="text/css"/>

<?php wp_head(); ?>

</head>

<body id="heyo" onload="initialize()">

<!--[if lt IE 7]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

<!-- Header & Menu Section -->

<header class="panel">
  
  <div class="row">
  
  <div class="nav-fix">
      <div class="logo"><a class="logo" href="<?php echo home_url(); ?>"><h1>Notion</h1></a></div>  
        <button class="t-hide d-hide s-hide l-hide menu-icon menu-trigger"></button>  
      <nav> 
        <span class="mobile-menu">

 <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
         
      </span>
    </nav>
  </div>
  </div>

</header>

<div class="wrapper">
<?php get_header(); ?>


<?php 
/* 

Template Name: Overview page

*/
?>

<section class="panel">
	<div class="row">
		
	<aside class="s1-s5 d1-d4 l1-l4 m1 s-overlap d-overlap l-overlap">
<h1 class="size-2"><?php the_field('page_title'); ?></h1>

<?php if(get_field('page_info'))
	{
	echo '<p class="size-2 orange margin-right">' . get_field('page_info') . '</p>';
	}
?>

<?php
$button = get_field('scroll_down');
if($button) {
echo '';
} 
?>

<?php if(get_field('scroll_down'))
	{
	echo '<a href="#target" id="down" class="circle-button down anchor"></a>';
	}
?>
</aside>


		<div class="content">
 			<article>

 			<ul>
 		<?php if(get_field('featured_work')): ?>
<ul>
<?php while(has_sub_field('featured_work')): ?>
<li class="four hovertext"><a href="<?php the_sub_field('page_link'); ?>"><img src="<?php the_sub_field('thumbnail'); ?>" alt="" title="<?php the_sub_field('title'); ?>"></a></li>
<?php endwhile; ?>
</ul>
 	<?php endif; ?>
 			</ul>

 			</article>
 		</div>


</div></section>


<?php get_footer(); ?>


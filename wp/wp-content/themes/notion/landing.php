<?php get_header(); ?>

<?php 
/* 
Template Name: Landing Page
*/
?>


<section class="panel">
	<div class="row">

		<aside class="s1-s5 d1-d5 l1-l5 m1 s-overlap d-overlap l-overlap">
			<h1 class="size-3"><?php the_field('page_title'); ?></h1>

			<?php if(get_field('page_info'))
			{
				echo '<p class="size-2 orange">' . get_field('page_info') . '</p>';
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

			<?php if(get_field('page_slider')): ?>


			<div class="slider"> <!-- This is slider -->
				<ul class="bxslider">
					<?php while (has_sub_field('page_slider')): ?>
					<li><img src="<?php the_sub_field('slider_image_01'); ?>" /></li>
				<?php endwhile; ?>
			</ul>
		</div>


	<?php endif; ?>



	<article id="target">
		<ul>
			<?php while(has_sub_field("featured_projects")): ?>
			<?php if(get_row_layout() == "projects"): ?>

			<li class="<?php the_sub_field("image_size"); ?> <?php the_sub_field("float_right"); ?> hovertext">
			<a href="http://<?php the_sub_field("project_link"); ?>">
			<img src="<?php the_sub_field("project_image"); ?>" title="<?php the_sub_field("project_title"); ?>">
			</a>
			</li>

		<?php elseif(get_row_layout() == "page_info"): ?>

		<li class="<?php the_sub_field("text_size"); ?> l-clear"><?php the_sub_field("page_info"); ?></li>


	<?php endif; ?>
<?php endwhile; ?>
</ul>
</article>
</div>

</section>

<?php get_footer(); ?>




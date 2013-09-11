<?php get_header(); ?>

<?php 
/* 
Template Name: Project
*/
?>


<section class="panel">
		<div class="row">


			<aside class="s1-s5 d1-d5 l1-l5 m1 s-overlap d-overlap l-overlap aside-project">
				<h1 class="size-2"><?php the_field('page_title'); ?></h1>

				<?php if(get_field('page_info')) { echo '<p class="size-2 orange">' . get_field('page_info') . '</p>'; } ?>
			
			</aside>

			<div class="content">
				<article>
					<ul>
						<?php if(get_field('project')): ?>
							<?php while(has_sub_field('project')): ?>

								<li class="<?php the_sub_field('image_size'); ?> <?php the_sub_field('float_right'); ?>"><img src="<?php the_sub_field('project_image'); ?>" alt=""></li>
							
							<?php endwhile; ?>	
						<?php endif; ?>
					</ul>
				</article>

<!--  -->


			</div>
		</div>
</section>




<?php get_footer(); ?>

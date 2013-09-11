
<?php get_header(); ?>


<section class="panel">
	<div class="row">



		<?php if (have_posts()): while(have_posts()): the_post(); ?>



		<div class="archive-posts panel"><a href="<?php echo get_permalink(); ?>">	

			<div class="content">
				<div class="s1-s10 d1-d10 l1-l10 post">
					<h1 class="size-3 post-title" id="post-<?php the_id(); ?>"> <?php the_title(); ?> </h1>
					<img src="<?php the_field('feature_image');?>">
					<div ><?php the_excerpt(); ?></div>
					<p class="size1 orange"><a href="<?php echo get_permalink(); ?>">Read More</a></p>




				</div>
			</div>

		</div>



	<?php endwhile; ?>	
<?php endif; ?>


<a href="#target" id="down" class="circle-button top anchor"></a>

</div>
</section>


<?php get_footer() ;?>
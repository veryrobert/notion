<?php get_header(); ?>


<section class="panel journal">
	<div class="row">
		<?php while ( have_posts() ) : the_post(); ?>

		<aside class="journal-aside">
			<h1 class="size-5"><?php the_title(); ?></h1>
		</aside>

		<div class="content">
			<div class="twelve t4-t12"><img src="<?php the_field('feature_image');?>"></div>
			</div>
		</div>
	</section>

	<section class="panel journal">
		<div class="row">
			<div class="intro">
					<p class="size-4 orange"><?php the_field('post_intro') ?></p>
					<p class="size-3 italic orange"><?php the_author(); ?></p>
				</div>
				
			<article class="journal">
			
				<div class="journal-p d-overlap l-overlap s-overlap">
					<?php the_content(); ?>
					</div>
				

					<div class="meta">
						<ul class="share">
							<li>
								<a href="#">Twitter</a> / <a href="#">Facebook</a> /
								<a href="#">Tumblr</a>
							</li>
						</ul>

						<ul class="tags">
								<li>Tagged:
								<?php
					$tags = wp_get_post_tags($post->ID);
					if ($tags) {
						foreach($tags as $tag) {
							echo  '<a class="tag" href="' . get_term_link( $tag, 'post_tag' ) . '" title="' . sprintf( __( "View all posts in %s" ), $tag->name ) . '" ' . '>' . $tag->name.'</a>';
						}
					}
					?></li>

							<li>Author: <a href="#">Ian Walton</a>
							</li>

							<li>Posted On:<a href="#"><?php the_date();?></a>
							</li>
						</ul>
					</div><?php endwhile; // end of the loop. ?>
				</article>
			</div>
			</section>

			<?php get_footer(); ?>
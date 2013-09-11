<?php get_header(); ?>

<?php 
/* 
Template Name: Case Study
*/
?>


<section class="panel">
		<div class="row">


			<aside class="s1-s5 d1-d5 l1-l4 m1 s-overlap d-overlap l-overlap aside-project">
				<h1 class="size-2"><?php the_field('page_title'); ?></h1>

				<?php if(get_field('page_info')) { echo '<p class="size-2 orange">' . get_field('page_info') . '</p>'; } ?>
				<?php $button = get_field('scroll_down'); if($button) { echo ''; }?>
				<?php if(get_field('scroll_down')) { echo '<a href="#case-study" id="down" class="circle-button down down-case-study anchor"></a>'; } ?>

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
			</div>
		</div>
</section>

<section class="panel case-study" id="target" >
<div class="row">

<aside class="s1-s5 d1-d5 l1-l4 s-overlap d-overlap l-overlap case-study-title">
<h1 class="size-2"><?php the_field('page_title'); ?></h1>
<a href="#target" id="down" class="circle-button down anchor"></a>
</aside>	

<div class="content ">
<ul>
<li class="six info">
<h3>Case Study</h3>	
<p>
<?php the_field('case_study_intro_left'); ?>
</p>
</li>

<li class="six ">
<p>
<?php the_field('case_study_intro_right'); ?>
</p>
</li>


<?php while(has_sub_field('case_study')): ?>

<?php if(get_row_layout() == 'project_image'): ?>

<li class="<?php the_sub_field("image_size"); ?> <?php the_sub_field("float_right"); ?>"><img src="<?php the_sub_field('image'); ?>"></li>	

<?php elseif (get_row_layout() == 'project_info'): ?>
<li class="<?php the_sub_field('clear_left'); ?> six"><?php the_sub_field('project_info_left'); ?></li>

<?php endif; ?>
<?php endwhile; ?>

</ul>


<!-- <ul class="l-clear case-study-social">
<li class="twitter float-left"><a target="_blank"  rel="nofollow" href="http://twitter.com/home?status=<?php echo urlencode("Design by Notion "); ?><?php the_permalink(); ?>" title="Share this article with your Twitter followers">

<button>Twitter</button></a></li>
<li class="facebook float-left"><a target="_blank" rel="nofollow" href="http://www.facebook.com/sharer.php?u=<?php the_permalink();?>&amp;t=<?php echo urlencode(get_the_title($id)); ?>" title="Share this post on Facebook"><button>Facebook</button></a></li>
<li class="tumblr float-left"><a target="_blank"  rel="nofollow" href="http://www.tumblr.com/share?v=3&u=<?php the_permalink(); ?>&t=Design by Notion" title="Share on Tumblr"><button>Tumblr</button></a></li>
</ul>
 -->

<!-- <ul>
<li class="next two float-right"><button class="float-right" >next</button></li>
<li class="prev two float-right"><button class="float-right" >prev</button></li>
</ul>
 -->

</div>
</div>
</section>


<?php get_footer(); ?>

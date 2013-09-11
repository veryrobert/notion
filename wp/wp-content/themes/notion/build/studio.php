
<?php get_header(); ?>

<?php 
/* 
Template Name: Studio Page
*/
?>

<!-- Start of first section -->
<section class="panel studio ">
	<div class="row">
		<div class="content">
			<article class="twelve orange">
				<ul>
					<!-- Repeater Field for studio images -->
					<?php if(get_field('studio_image')): ?>
					<?php while(has_sub_field('studio_image')): ?>

					<li class="seven"><img src="<?php the_sub_field('studio_image_one'); ?>"></li>
					<li class="five float-right"><img src="<?php the_sub_field('studio_image_two'); ?>"></li>

				<?php endwhile; ?>
			<?php endif; ?>
			<!-- Studio large information -->
			<li><p class="size-4 studio-intro seven orange"><?php the_field("large_info"); ?></p></li>
		</ul>


		<!-- Studio Profile -->
		<ul class="twelve ">
			<li class="two"><h3>Profile</h3></li>
			<?php if(get_field('studio_profile')): ?>
			<?php while(has_sub_field('studio_profile')): ?>
			<li class="five"><p><?php the_sub_field('paragraph_one'); ?></p></li>
			<li class="five"><p><?php the_sub_field('paragraph_two'); ?></p></li>
		<?php endwhile; ?>
	<?php endif; ?>
</ul>

<ul class="twelve">
	<li class="two">
		<h3 class="no-border jobs">Vancies &amp; <span
			"add-border">Placements</span></h3>
		</li>
		<!-- Studio Jobs & Vancies -->
		<?php if(get_field('jobs')): ?>
		<?php while(has_sub_field('jobs')): ?>

		<li class="five"><p><?php the_sub_field('employment_info'); ?>
			<p class="size-2"><a href="<?php the_sub_field('email'); ?>"><?php the_sub_field('email'); ?></a></p></p>
		</li>


	<?php endwhile; ?>
<?php endif; ?>
</ul>

<ul class="twelve">

	<li class="two"><h3>Our Team</h3></li>

	<!-- Directors Profiles -->
	<?php if(get_field('directors')): ?>
	<?php while(has_sub_field('directors')): ?>
<div class="profile-wrap">	
	<li class="one profile"><img src="<?php the_sub_field('profile_image'); ?>" alt=""></li>
	<li class="two">
		<h4><?php the_sub_field('name'); ?></h4>
		<p class="size-1"><?php the_sub_field('position'); ?></p>
		<p class="size-2"><a href="<?php the_sub_field('email_address'); ?>"><?php the_sub_field('email_address'); ?></a></p>
	</li>
</div>
<?php endwhile; ?>
<?php endif; ?>

</ul>

<!-- Staff Profiles -->
<ul class="twelve">
	<li class="two hide-m">
	</li>

	<?php if(get_field('staff')): ?>
	<?php while(has_sub_field('staff')): ?>
	<div class="profile-wrap">	
	<li class="one profile"><img src="<?php the_sub_field('profile_image'); ?>" alt=""></li>
	<li class="two">
		<h4><?php the_sub_field('name'); ?></h4>
		<p class="size-1"><?php the_sub_field('position'); ?></p>
		<p class="size-2"><a href="<?php the_sub_field('email_address'); ?>"><?php the_sub_field('email_address'); ?></a></p>
	</li>
</div>
<?php endwhile; ?>
<?php endif; ?>
</ul>

<ul class="twelve">

	<li class="two"><h3>Contact Us</h3></li>
	<li class="three">
		
		<ul>
<div class="address">			
			<li><h4>Notion</h4></li>
			<li>29 Holles Place</li>
			<li>Dublin 2</li>
			<li>Ireland</li>

</div>
			<li><p  class="size-2"><a href="#">hello@notion.ie</a></p></li>
			<li><p  class="size-2">+353 (0) 1 906 0179</p></li>
			<li class="trigger l-clear hide-m"><button >View Map</button></li>
		</ul>
	</li>

	<li class="four">
		<h4>Keep in touch</h4>
		<form action="demo_form.asp">
			<input placeholder="Your Email" type="text">
			<input type="submit" value="GO">
		</form>
	</li>

	<li class="three">
		<ul class="social">
			<li><a class="social twitter" href="#">Twitter</a></li>
			<li><a class="social facebook" href="#">Facebook</a></li>
			<li><a class="social tumblr" href="#">Tumblr</a></li>
		</ul>

	</ul>

</article>
</div>
<!-- End of content -->
</div>
<!-- End of Row -->


<!-- end of first section -->

<!-- Map Goes in here -->

<div class="panel map hide-m">
	<div id="map-canvas">

		<div class="row">
			<!-- This is the map -->
		</div>
	</div>
</div>
</section>
<!-- End of map -->

<section class="panel studio no-pad-top">
	<div class="row">
		<div class="content">
			<article class="twelve">
				<!-- Start of second section -->
				<!-- Client Logos -->
				<ul>
					<li class="two">
						<h3>Our Clients</h3>
					</li>

					
						
			<li class="ten float-right">
				<div class="clients"></div>
			</li>
						
				
				</ul>

				<!-- Client Logos -->
				<ul class="twelve no-pad-bottom">
					<li class="two hide-m"></li>
					<?php if(get_field('photos_of_clients')): ?>
					<?php while(has_sub_field('photos_of_clients')): ?>
					<li class="five"><img src="<?php the_sub_field('image_1'); ?>"></li>
					<li class="five"><img src="<?php the_sub_field('image_2'); ?>"></li>
				<?php endwhile; ?>
			<?php endif; ?>
		</ul>

		<ul class="ten float-right no-pad-top">
			<!-- Client Testimonials -->
			<?php if(get_field('testimonial')): ?>
			<?php while(has_sub_field('testimonial')): ?>
			<li class="testimonial">
				<p class="size-1 italic"><?php the_sub_field('client_paragraph'); ?></p>
				<p class="italic size-1"><?php the_sub_field('name'); ?></p>
			</li>

			<!-- End of second section -->

		<?php endwhile; ?>
	<?php endif; ?>
</ul>


</article>
</div>
</div>
</section>


<?php get_footer(); ?>
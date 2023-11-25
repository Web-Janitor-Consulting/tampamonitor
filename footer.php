<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- #content -->
	<footer id="colophon" class="site-footer">
	<div class="mc-subscribe">
	<p class="loud">Want a weekend wrapup of Tampa City Council in your weekend inbox?
	</p>
	<!-- Begin Mailchimp Signup Form -->
	<!-- This is the code you will get from Mailchimp’s NAKED Signup Form -->
<div id="mc_embed_signup">
<form action="https://tampamonitor.us21.list-manage.com/subscribe/post?u=07d5482fa1e57df3d81da358b&amp;id=f6fd249904&amp;f_id=001afbe1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
	<div id="mc_embed_signup_scroll">

        <!-- Text Input Field -->
        <div class="mc-field-group"><input type="email" placeholder="Your Email" name="EMAIL" class="required email" id="mce-EMAIL"></div>
        <!-- /Text Input Field -->

        <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
        </div><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->

        <div style="position: absolute; left: -5000px;"><input type="text" name="b_0b5586be71b0fee16a03f5684_e41ec18eab" tabindex="-1" value=""></div>

        <!-- Submit Button -->
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        <!-- /Submit Button -->
        </div>
    </form>
</div>
<!--End mc_embed_signup-->
<p class="quiet">We hate unsolicted emails and promise to never share your email or send you anything you haven't consented to.
</p>
</div>
	<?php get_template_part( 'template-parts/footer/footer-widgets' ); ?>



		<?php if ( has_nav_menu( 'footer' ) ) : ?>
			<nav aria-label="<?php esc_attr_e( 'Secondary menu', 'twentytwentyone' ); ?>" class="footer-navigation">
				<ul class="footer-navigation-wrapper">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'items_wrap'     => '%3$s',
							'container'      => false,
							'depth'          => 1,
							'link_before'    => '<span>',
							'link_after'     => '</span>',
							'fallback_cb'    => false,
						)
					);
					?>
				</ul><!-- .footer-navigation-wrapper -->
			</nav><!-- .footer-navigation -->
		<?php endif; ?>
		<div class="site-info">
			<div class="site-name">
				<?php if ( has_custom_logo() ) : ?>
					<div class="site-logo"><?php the_custom_logo(); ?></div>
				<?php else : ?>
					<?php if ( get_bloginfo( 'name' ) && get_theme_mod( 'display_title_and_tagline', true ) ) : ?>
						<?php if ( is_front_page() && ! is_paged() ) : ?>
							<?php bloginfo( 'name' ); ?>
						<?php else : ?>
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
						<?php endif; ?>
					<?php endif; ?>
				<?php endif; ?>
			</div><!-- .site-name -->

			<?php
			if ( function_exists( 'the_privacy_policy_link' ) ) {
				the_privacy_policy_link( '<div class="privacy-policy">', '</div>' );
			}
			?>

			<div class="powered-by">
				<?php
				printf(
					/* translators: %s: WordPress. */
					esc_html__( 'Begrudgingly powered by %s.', 'twentytwentyone' ),
					'<a href="' . esc_url( __( 'https://wordpress.org/', 'twentytwentyone' ) ) . '">WordPress</a>'
				);
				?>
			</div><!-- .powered-by -->

		</div><!-- .site-info -->
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

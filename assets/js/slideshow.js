/*
	Slideshow plugin
	Provides automatic and manual slideshow functionality with captions
*/

(function($) {

	$.fn.slideshow = function(options) {
		
		var settings = $.extend({
			autoplay: true,
			interval: 5000,      // milliseconds between slides
			speed: 500            // animation speed
		}, options);

		return this.each(function() {
			
			var $slideshow = $(this);
			var $slides = $slideshow.find('.slide');
			var $caption = $slideshow.find('.slideshow-caption');
			var currentSlide = 0;
			var autoplayTimer;

			// Hide all slides except the first
			$slides.hide();
			$slides.eq(0).show();
			updateCaption();

			// Function to show a specific slide
			function showSlide(n) {
				// Wrap around
				if (n >= $slides.length) {
					currentSlide = 0;
				} else if (n < 0) {
					currentSlide = $slides.length - 1;
				} else {
					currentSlide = n;
				}

				$slides.fadeOut(settings.speed);
				$slides.eq(currentSlide).fadeIn(settings.speed);
				updateCaption();
			}

			// Update caption text
			function updateCaption() {
				var captionText = $slides.eq(currentSlide).data('caption') || '';
				if ($caption.length) {
					$caption.text(captionText);
				}
			}

			// Next slide
			function nextSlide() {
				showSlide(currentSlide + 1);
				resetAutoplay();
			}

			// Previous slide
			function prevSlide() {
				showSlide(currentSlide - 1);
				resetAutoplay();
			}

			// Start/restart autoplay
			function startAutoplay() {
				if (!settings.autoplay) return;
				
				autoplayTimer = setInterval(function() {
					showSlide(currentSlide + 1);
				}, settings.interval);
			}

			// Reset autoplay timer
			function resetAutoplay() {
				clearInterval(autoplayTimer);
				startAutoplay();
			}

			// Attach click handlers to navigation buttons
			$slideshow.on('click', '.slideshow-next', function(e) {
				e.preventDefault();
				nextSlide();
			});

			$slideshow.on('click', '.slideshow-prev', function(e) {
				e.preventDefault();
				prevSlide();
			});

			// Start autoplay
			if (settings.autoplay) {
				startAutoplay();
			}

			// Pause autoplay on hover
			$slideshow.on('mouseenter', function() {
				clearInterval(autoplayTimer);
			});

			$slideshow.on('mouseleave', function() {
				if (settings.autoplay) {
					startAutoplay();
				}
			});
		});
	};

})(jQuery);

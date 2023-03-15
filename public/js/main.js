


$(function () {

	$('[data-countdown]').each(function () {
		const $this = $(this);
		const	finalDate = $(this).data('countdown');


		console.debug('finalDate', finalDate);

		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="countdown d-flex"><div class="single-count-content"><span class="count">%D</span><p class="text">Days</p></div><div class="single-count-content"><span class="count">%H</span><p class="text">Hours</p></div><div class="single-count-content"><span class="count">%M</span><p class="text">Minutes</p></div><div class="single-count-content"><span class="count">%S</span><p class="text">Seconds</p></div></div>'));
		});
	});

	// WOW active
	new WOW().init();

});


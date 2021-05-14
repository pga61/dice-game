const Dice = function ($) {
	let elementDice = $('.dice');
	console.log(elementDice);
	let numberDice = function () {
		const max = 7, min = 1;
		return parseInt(Math.random() * (max - min) + min, 10)
	};
	let setDice = function (num) {
		console.log(num);
		elementDice.attr('data-dice', 'dice-' + num);
	};

	return {
		init: function () {
			$('.roll').on('click', function () {
				setDice(numberDice());
			});
		}(),
	}
}(jQuery);
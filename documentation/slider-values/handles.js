var handlesSlider = document.getElementById('slider-handles');

noUiSlider.create(handlesSlider, {
	start: [ 4000, 8000 ],
	range: {
		'min': [  2000 ],
		'max': [ 10000 ]
	}
});

handlesSlider.getElementsByClassName('noUi-origin')[0].setAttribute('disabled', true);

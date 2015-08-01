var header = document.getElementById('header');

var pattern = Trianglify({
	width: document.documentElement.clientWidth,
	height: 400,
	x_colors: 'Greens',
	y_colors: 'Blues',
});

svg = pattern.svg();
svg.id = "test";

// header.appendChild(svg);

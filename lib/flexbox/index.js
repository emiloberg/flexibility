module.exports = function display(target) {
	require('flex-direction')(target);

	require('flexbox-lines')(target);

	if (target.mainSize === 'auto') {
		target.mainSize = Math.max.apply(Math, target.line.children);
	}

	if (target.crossSize === 'auto') {
		target.crossSize = target.line.children.reduce(function (line, crossSize) {
			return crossSize + line.crossSize;
		}, 0);

		target.crossSpace = 0;
	} else {
		target.crossSpace = target.crossSize - target.line.children.reduce(function (line, crossSize) {
			return crossSize + line.crossSize;
		}, 0);
	}

	target.lines.forEach(function (line) {
		line.mainSpace = target.mainSize - line.mainSize;

		require('flex-grow')(line);
		require('flex-shrink')(line);
		require('margin-main')(line);
		require('margin-cross')(line);
	});

	require('justify-content')(target);
	require('align-content')(target);
	require('align-items')(target);
};

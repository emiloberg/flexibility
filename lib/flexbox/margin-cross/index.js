module.exports = function marginCross(line) {
	var count = 0;

	line.children.forEach(function (child) {
		if (child.crossMarginBefore === 'auto') {
			++count;
		}

		if (child.crossMarginAfter === 'auto') {
			++count;
		}
	});

	if (count > 0) {
		line.children.forEach(function (child) {
			if (child.crossMarginBefore === 'auto') {
				child.crossMarginBefore = line.crossSpace / count;
			}

			if (child.crossMarginAfter === 'auto') {
				child.crossMarginAfter = line.crossSpace / count;
			}
		});

		line.crossSpace = 0;
	}
};

module.exports = function marginCross(line) {
	var count = 0;

	line.children.forEach(function (child) {
		if (child.mainMarginBefore === 'auto') {
			++count;
		}

		if (child.mainMarginAfter === 'auto') {
			++count;
		}
	});

	if (count > 0) {
		line.children.forEach(function (child) {
			if (child.mainMarginBefore === 'auto') {
				child.mainMarginBefore = line.mainSpace / count;
			}

			if (child.mainMarginAfter === 'auto') {
				child.mainMarginAfter = line.mainSpace / count;
			}
		});

		line.mainSpace = 0;
	}
};

module.exports = function alignContent(target) {
	var start;
	var factor;

	if (target.alignContent === 'flex-start') {
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			line.children.forEach(function (child) {
				child.crossStart = start;
			});

			start += line.crossSize;
		});
	} else if (target.alignContent === 'flex-end') {
		start = target.crossSpace;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			line.children.forEach(function (child) {
				child.crossStart = start;
			});

			start += line.crossSize;
		});
	} else if (target.alignContent === 'center') {
		start = target.crossSpace / 2;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			line.children.forEach(function (child) {
				child.crossStart = start;
			});

			start += line.crossSize;
		});
	} else if (target.alignContent === 'space-between') {
		factor = target.crossSpace / (target.lines.length - 1);
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			line.children.forEach(function (child) {
				child.crossStart = start;
			});

			start += line.crossSize + factor;
		});
	} else if (target.alignContent === 'space-around') {
		factor = target.crossSpace / (target.lines.length + 1);
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start + factor;

			line.children.forEach(function (child) {
				child.crossStart = start + factor;
			});

			start += line.crossSize;
		});
	} else if (target.alignContent === 'stretch') {
		factor = target.crossSpace / target.lines.length;
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;
			line.crossSize += factor;

			line.children.forEach(function (child) {
				child.crossStart = start;
				child.crossSize = line.crossSize;
			});

			start += line.crossSize;
		});
	}
};

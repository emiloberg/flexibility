module.exports = function alignItems(target) {
	target.lines.forEach(function (line) {
		line.children.forEach(function (child) {
			if (child.alignSelf === 'flex-end') {
				child.crossStart += line.crossSize - child.crossSize;
			} else if (child.alignSelf === 'center') {
				child.crossStart += (line.crossSize - child.crossSize) / 2;
			} else if (child.alignSelf === 'stretch') {
				child.crossSize = line.crossSize;
			}
		});
	});
};

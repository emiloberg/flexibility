module.exports = function flexGrow(line) {
	if (line.mainSpace > 0) {
		line.growFactor = line.children.reduce(function (growFactor, child) {
			return growFactor + child.flexGrow;
		}, 0);

		if (line.growFactor > 0) {
			line.children.forEach(function (child) {
				child.mainSize += child.flexGrow / line.growFactor * line.mainSpace;
			});

			line.mainSize = line.children.reduce(function (child, mainSize) {
				return mainSize + child.mainSize;
			}, 0);
		}
	}
};

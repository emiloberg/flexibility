module.exports = function flexShrink(line) {
	if (line.mainSpace < 0) {
		line.shrinkFactor = line.children.reduce(function (shrinkFactor, child) {
			return shrinkFactor + child.flexShrink;
		}, 0);

		if (line.shrinkFactor > 0) {
			line.children.forEach(function (child) {
				child.mainSize += child.flexShrink / line.shrinkFactor * line.mainSpace;
			});

			line.mainSize = line.children.reduce(function (child, mainSize) {
				return mainSize + child.mainSize;
			}, 0);
		}
	}
};

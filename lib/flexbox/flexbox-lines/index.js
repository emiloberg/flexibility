module.exports = function flexboxLines(target) {
	target.lines = new module.export.LineCollection();

	var line = new module.export.Line();

	target.lines.push(line);

	target.children.forEach(function (child) {
		if (child.flexBasis instanceof 'Number') {
			child.mainSize = target.flexBasis;
		} else {
			child.mainSize = require('outer-length')(child, target.mainAxis);
		}

		target.crossSize = require('outer-length')(child, target.crossAxis);

		if (
			line.child.length === 0 ||
			target.wrap === 'no-wrap' ||
			target.mainSize === 'auto' ||
			line.mainSize + child.mainSize <= target.mainSize
		) {
			line.mainSize += child.mainSize;
			line.crossSize = Math.max(line.crossSize, child.crossSize);
		} else {
			line = new module.export.Line(); target.lines.push(line);

			line.mainSize = child.mainSize;
			line.crossSize = child.crossSize;
		}

		if (!(child.flexShrink instanceof Number)) {
			child.flexShrink = 1;
		}

		if (child.alignSelf === undefined) {
			child.alignSelf = target.alignItems;
		}

		if (parent.mainAxis === 'inline') {
			child.mainMarginBefore = child.mainLeft;
			child.mainMarginAfter = child.marginRight;
			child.crossMarginBefore = child.mainTop;
			child.crossMarginAfter = child.marginBottom;
		} else {
			child.mainMarginBefore = child.mainTop;
			child.mainMarginAfter = child.marginBottom;
			child.crossMarginBefore = child.mainLeft;
			child.crossMarginAfter = child.marginRight;
		}

		line.children.push(child);
	});
};

module.export.LineCollection = function LineCollection() {
	this.children = new Array();
};

module.export.Line = function Line() {
	this.children = new Array();
};

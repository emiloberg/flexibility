module.exports = function outerLength(child, axis) {
	var length = 0;

	if (axis === 'inline') {
		if (typeof child.mainSize === 'number') {
			length += child.mainSize;
		} else {
			length += child.mainContentSize;
		}

		if (typeof child.mainMarginBefore === 'number') {
			length += child.mainMarginBefore;
		}

		if (typeof child.mainMarginAfter === 'number') {
			length += child.mainMarginAfter;
		}
	} else {
		if (typeof child.crossSize === 'number') {
			length += child.crossSize;
		} else {
			length += child.crossContentSize;
		}

		if (typeof child.crossMarginBefore === 'number') {
			length += child.crossMarginBefore;
		}

		if (typeof child.crossMarginAfter === 'number') {
			length += child.crossMarginAfter;
		}
	}

	return length;
};

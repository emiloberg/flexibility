module.exports = function write(target) {
	var style = target.node.style;

	if ('mainStart' in target) {
		style.position = 'absolute';

		if (target.mainAxis === 'inline') {
			style.left = target.mainStart  + 'px';
			style.top  = target.crossStart + 'px';
			style.marginTop    = target.crossMarginBefore + 'px';
			style.marginRight  = target.crossMarginAfter  + 'px';
			style.marginBottom = target.mainMarginAfter   + 'px';
			style.marginLeft   = target.mainMarginBefore  + 'px';
		} else {
			style.left = target.crossStart + 'px';
			style.top  = target.mainStart  + 'px';
			style.marginTop    = target.mainMarginBefore  + 'px';
			style.marginRight  = target.mainMarginAfter   + 'px';
			style.marginBottom = target.crossMarginAfter  + 'px';
			style.marginLeft   = target.crossMarginBefore + 'px';
		}
	} else {
		style.position = 'relative';
	}

	if (target.mainAxis === 'inline') {
		style.width = target.mainSize  + 'px';
	} else {
		style.width = target.crossSize + 'px';
	}

	if (target.crossAxis === 'inline') {
		style.height = target.mainSize  + 'px';
	} else {
		style.height = target.crossSize + 'px';
	}

	if (target.children) {
		target.children.forEach(function (child) {
			module.exports(child);
		});
	}
};

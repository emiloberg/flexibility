module.exports = function flexDirection(target) {
	if (target.flexDirection === 'row' || target.flexDirection === 'row-reverse') {
		target.mainAxis = 'inline';
		target.crossAxis = 'block';
		target.mainSize = target.width;
		target.crossSize = target.height;
	} else {
		target.mainAxis = 'block';
		target.crossAxis = 'inline';
		target.mainSize = target.height;
		target.crossSize = target.width;
	}
};

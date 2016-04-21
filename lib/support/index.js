module.exports = function support() {
	var test = document.createElement('x').style;

	test.display = 'flex';

	return test.display === 'flex';
};

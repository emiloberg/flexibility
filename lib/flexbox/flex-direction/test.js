import test from 'ava';
import perform from './';

var target = {
	flexDirection: 'row',
	width:  400,
	height: 200
};

test('Accurately calculate "flex-direction" with "row"', function (t) {
	t.plan(4);

	target.flexDirection = 'row';

	perform(target);

	t.is(target.mainAxis, 'inline');
	t.is(target.crossAxis, 'block');
	t.is(target.mainSize, 400);
	t.is(target.crossSize, 200);
});

test('Accurately calculate "flex-direction" with "row-reverse"', function (t) {
	t.plan(4);

	target.flexDirection = 'row-reverse';

	perform(target);

	t.is(target.mainAxis, 'inline');
	t.is(target.crossAxis, 'block');
	t.is(target.mainSize, 400);
	t.is(target.crossSize, 200);
});

test('Accurately calculate "flex-direction" with "column"', function (t) {
	t.plan(4);

	target.flexDirection = 'column';

	perform(target);

	t.is(target.mainAxis, 'block');
	t.is(target.crossAxis, 'inline');
	t.is(target.mainSize, 200);
	t.is(target.crossSize, 400);
});

test('Accurately calculate "flex-direction" with "column-reverse"', function (t) {
	t.plan(4);

	target.flexDirection = 'column-reverse';

	perform(target);

	t.is(target.mainAxis, 'block');
	t.is(target.crossAxis, 'inline');
	t.is(target.mainSize, 200);
	t.is(target.crossSize, 400);
});

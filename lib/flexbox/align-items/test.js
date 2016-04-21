import test from 'ava';
import perform from './';

var target = {
	lines: [
		{
			crossSize: 100,
			children: [
				{
					crossSize: 50,
					crossStart: 0
				},
				{
					crossSize: 100,
					crossStart: 0
				}
			]
		},
		{
			crossSize: 200,
			children: [
				{
					crossSize: 150,
					crossStart: 100
				},
				{
					crossSize: 200,
					crossStart: 100
				}
			]
		}
	]
};

var target1 = target.lines[0].children[0];
var target2 = target.lines[0].children[1];
var target3 = target.lines[1].children[0];
var target4 = target.lines[1].children[1];

test('Accurately calculate "cross-size" with "flex-start"', function (t) {
	t.plan(4);

	target1.alignSelf = 'flex-start'; target1.crossStart = 0;
	target2.alignSelf = 'flex-start'; target2.crossStart = 0;
	target3.alignSelf = 'flex-start'; target3.crossStart = 100;
	target4.alignSelf = 'flex-start'; target4.crossStart = 100;

	perform(target);

	t.is(target1.crossStart, 0);
	t.is(target2.crossStart, 0);
	t.is(target3.crossStart, 100);
	t.is(target4.crossStart, 100);
});

test('Accurately calculate "cross-size" with "flex-end"', function (t) {
	t.plan(4);

	target1.alignSelf = 'flex-end'; target1.crossStart = 0;
	target2.alignSelf = 'flex-end'; target2.crossStart = 0;
	target3.alignSelf = 'flex-end'; target3.crossStart = 100;
	target4.alignSelf = 'flex-end'; target4.crossStart = 100;

	perform(target);

	t.is(target1.crossStart, 50);
	t.is(target2.crossStart, 0);
	t.is(target3.crossStart, 150);
	t.is(target4.crossStart, 100);
});

test('Accurately calculate "cross-size" with "center"', function (t) {
	t.plan(4);

	target1.alignSelf = 'center'; target1.crossStart = 0;
	target2.alignSelf = 'center'; target2.crossStart = 0;
	target3.alignSelf = 'center'; target3.crossStart = 100;
	target4.alignSelf = 'center'; target4.crossStart = 100;

	perform(target);

	t.is(target1.crossStart, 25);
	t.is(target2.crossStart, 0);
	t.is(target3.crossStart, 125);
	t.is(target4.crossStart, 100);
});

test('Accurately calculate "cross-size" with "strech"', function (t) {
	t.plan(8);

	target1.alignSelf = 'stretch'; target1.crossStart = 0;
	target2.alignSelf = 'stretch'; target2.crossStart = 0;
	target3.alignSelf = 'stretch'; target3.crossStart = 100;
	target4.alignSelf = 'stretch'; target4.crossStart = 100;

	perform(target);

	t.is(target1.crossStart, 0);
	t.is(target1.crossSize,  100);
	t.is(target2.crossStart, 0);
	t.is(target2.crossSize,  100);
	t.is(target3.crossStart, 100);
	t.is(target3.crossSize,  200);
	t.is(target4.crossStart, 100);
	t.is(target4.crossSize,  200);
});

import test from 'ava';
import perform from './';

var target = {
	lines: [
		{
			mainSpace: -100,
			children: [
				{
					flexShrink: 0,
					mainSize: 200
				},
				{
					flexShrink: 0,
					mainSize: 400
				}
			]
		},
		{
			mainSpace: -200,
			children: [
				{
					flexShrink: 0,
					mainSize: 300
				},
				{
					flexShrink: 0,
					mainSize: 400
				}
			]
		}
	]
};

var target1 = target.lines[0].children[0];
var target2 = target.lines[0].children[1];
var target3 = target.lines[1].children[0];
var target4 = target.lines[1].children[1];

test('Test "flex-shrink" with all "flex-shrink" as 0', function (t) {
	t.plan(4);

	target1.flexShrink = 0; target1.mainSize = 200;
	target2.flexShrink = 0; target2.mainSize = 400;
	target3.flexShrink = 0; target3.mainSize = 300;
	target4.flexShrink = 0; target4.mainSize = 400;

	target.lines.forEach(perform);

	t.is(target1.mainSize, 200);
	t.is(target2.mainSize, 400);

	t.is(target3.mainSize, 300);
	t.is(target4.mainSize, 400);
});

test('Test "flex-shrink" with odd "flex-shrink" as 1', function (t) {
	t.plan(4);

	target1.flexShrink = 1; target1.mainSize = 200;
	target2.flexShrink = 0; target2.mainSize = 400;
	target3.flexShrink = 1; target3.mainSize = 300;
	target4.flexShrink = 0; target4.mainSize = 400;

	target.lines.forEach(perform);

	t.is(target1.mainSize, 100);
	t.is(target2.mainSize, 400);

	t.is(target3.mainSize, 100);
	t.is(target4.mainSize, 400);
});

test('Test "flex-shrink" with even "flex-shrink" as 1', function (t) {
	t.plan(4);

	target1.flexShrink = 0; target1.mainSize = 200;
	target2.flexShrink = 1; target2.mainSize = 400;
	target3.flexShrink = 0; target3.mainSize = 300;
	target4.flexShrink = 1; target4.mainSize = 400;

	target.lines.forEach(perform);

	t.is(target1.mainSize, 200);
	t.is(target2.mainSize, 300);

	t.is(target3.mainSize, 300);
	t.is(target4.mainSize, 200);
});

test('Test "flex-shrink" with all "flex-shrink" as 1', function (t) {
	t.plan(4);

	target1.flexShrink = 1; target1.mainSize = 200;
	target2.flexShrink = 1; target2.mainSize = 400;
	target3.flexShrink = 1; target3.mainSize = 300;
	target4.flexShrink = 1; target4.mainSize = 400;

	target.lines.forEach(perform);

	t.is(target1.mainSize, 150);
	t.is(target2.mainSize, 350);

	t.is(target3.mainSize, 200);
	t.is(target4.mainSize, 300);
});

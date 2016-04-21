import test from 'ava';
import perform from './';

var target = {
	lines: [
		{
			mainSpace: 250,
			children: [
				{
					flexGrow: 0,
					mainSize: 50
				},
				{
					flexGrow: 0,
					mainSize: 100
				}
			]
		},
		{
			mainSpace: 50,
			children: [
				{
					flexGrow: 0,
					mainSize: 150
				},
				{
					flexGrow: 0,
					mainSize: 200
				}
			]
		}
	]
};

var target1 = target.lines[0].children[0];
var target2 = target.lines[0].children[1];
var target3 = target.lines[1].children[0];
var target4 = target.lines[1].children[1];

test('Test "flex-grow" with all "flex-grow" as 0', function (t) {
	t.plan(4);

	target1.flexGrow = 0; target1.mainSize = 50;
	target2.flexGrow = 0; target2.mainSize = 100;
	target3.flexGrow = 0; target3.mainSize = 150;
	target4.flexGrow = 0; target4.mainSize = 200;

	target.lines.forEach(perform);

	t.is(target1.mainSize, 50);
	t.is(target2.mainSize, 100);

	t.is(target3.mainSize, 150);
	t.is(target4.mainSize, 200);
});

test('Test "flex-grow" with odd "flex-grow" as 1', function (t) {
	t.plan(4);

	target1.flexGrow = 1; target1.mainSize = 50;
	target2.flexGrow = 0; target2.mainSize = 100;
	target3.flexGrow = 1; target3.mainSize = 150;
	target4.flexGrow = 0; target4.mainSize = 200;

	target.lines.forEach(perform);

	t.is(target1.mainSize, 300);
	t.is(target2.mainSize, 100);

	t.is(target3.mainSize, 200);
	t.is(target4.mainSize, 200);
});

test('Test "flex-grow" with even "flex-grow" as 1', function (t) {
	t.plan(4);

	target1.flexGrow = 0; target1.mainSize = 50;
	target2.flexGrow = 1; target2.mainSize = 100;
	target3.flexGrow = 0; target3.mainSize = 150;
	target4.flexGrow = 1; target4.mainSize = 200;

	target.lines.forEach(perform);

	t.is(target1.mainSize, 50);
	t.is(target2.mainSize, 350);

	t.is(target3.mainSize, 150);
	t.is(target4.mainSize, 250);
});

test('Test "flex-grow" with all "flex-grow" as 1', function (t) {
	t.plan(4);

	target1.flexGrow = 1; target1.mainSize = 50;
	target2.flexGrow = 1; target2.mainSize = 100;
	target3.flexGrow = 1; target3.mainSize = 150;
	target4.flexGrow = 1; target4.mainSize = 200;

	target.lines.forEach(perform);

	t.is(target1.mainSize, 175);
	t.is(target2.mainSize, 225);

	t.is(target3.mainSize, 175);
	t.is(target4.mainSize, 225);
});

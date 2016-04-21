import test from 'ava';
import perform from './';

var target = {
	lines: [
		{
			mainSpace: 100,
			children: [
				{
					mainSize: 100
				},
				{
					mainSize: 300
				}
			]
		},
		{
			mainSpace: 100,
			children: [
				{
					mainSize: 200
				},
				{
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

test('Test "justify-content" with "flex-start"', function (t) {
	t.plan(4);

	target.justifyContent = 'flex-start';
	target1.mainSize = 100; delete target1.mainStart;
	target2.mainSize = 300; delete target2.mainStart;
	target3.mainSize = 200; delete target3.mainStart;
	target4.mainSize = 200; delete target4.mainStart;

	target.lines.forEach(function (line) {
		perform(line, target.justifyContent);
	});

	t.is(target1.mainStart, 0);
	t.is(target2.mainStart, 100);

	t.is(target3.mainStart, 0);
	t.is(target4.mainStart, 200);
});

test('Test "justify-content" with "flex-end"', function (t) {
	t.plan(4);

	target.justifyContent = 'flex-end';
	target1.mainSize = 100; delete target1.mainStart;
	target2.mainSize = 300; delete target2.mainStart;
	target3.mainSize = 200; delete target3.mainStart;
	target4.mainSize = 200; delete target4.mainStart;

	target.lines.forEach(function (line) {
		perform(line, target.justifyContent);
	});

	t.is(target1.mainStart, 100);
	t.is(target2.mainStart, 200);

	t.is(target3.mainStart, 100);
	t.is(target4.mainStart, 300);
});

test('Test "justify-content" with "center"', function (t) {
	t.plan(4);

	target.justifyContent = 'center';
	target1.mainSize = 100; delete target1.mainStart;
	target2.mainSize = 300; delete target2.mainStart;
	target3.mainSize = 200; delete target3.mainStart;
	target4.mainSize = 200; delete target4.mainStart;

	target.lines.forEach(function (line) {
		perform(line, target.justifyContent);
	});

	t.is(target1.mainStart, 50);
	t.is(target2.mainStart, 150);

	t.is(target3.mainStart, 50);
	t.is(target4.mainStart, 250);
});

test('Test "justify-content" with "space-between"', function (t) {
	t.plan(4);

	target.justifyContent = 'space-between';
	target1.mainSize = 100; delete target1.mainStart;
	target2.mainSize = 300; delete target2.mainStart;
	target3.mainSize = 200; delete target3.mainStart;
	target4.mainSize = 200; delete target4.mainStart;

	target.lines.forEach(function (line) {
		perform(line, target.justifyContent);
	});

	t.is(target1.mainStart, 0);
	t.is(target2.mainStart, 200);

	t.is(target3.mainStart, 0);
	t.is(target4.mainStart, 300);
});

test('Test "justify-content" with "space-around"', function (t) {
	t.plan(4);

	target.justifyContent = 'space-around';
	target1.mainSize = 100; delete target1.mainStart;
	target2.mainSize = 300; delete target2.mainStart;
	target3.mainSize = 200; delete target3.mainStart;
	target4.mainSize = 200; delete target4.mainStart;

	target.lines.forEach(function (line) {
		perform(line, target.justifyContent);
	});

	t.is(target1.mainStart, 33.333333333333336);
	t.is(target2.mainStart, 166.66666666666669);

	t.is(target3.mainStart, 33.333333333333336);
	t.is(target4.mainStart, 266.6666666666667);
});

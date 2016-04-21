import test from 'ava';
import perform from './';

var target = {
	lines: [
		{
			crossSpace: 100,
			children: [
				{
					crossMarginBefore: 0,
					crossMarginAfter: 0
				},
				{
					crossMarginBefore: 0,
					crossMarginAfter: 0
				}
			]
		},
		{
			crossSpace: 100,
			children: [
				{
					crossMarginBefore: 0,
					crossMarginAfter: 0
				},
				{
					crossMarginBefore: 0,
					crossMarginAfter: 0
				}
			]
		}
	]
};

var target1 = target.lines[0].children[0];
var target2 = target.lines[0].children[1];
var target3 = target.lines[1].children[0];
var target4 = target.lines[1].children[1];

test('Test "cross-margin" with all as 0', function (t) {
	t.plan(8);

	target.lines[0].crossSpace = 100; target.lines[1].crossSpace = 100;
	target1.crossMarginBefore = 0; target1.crossMarginAfter = 0;
	target2.crossMarginBefore = 0; target2.crossMarginAfter = 0;
	target3.crossMarginBefore = 0; target3.crossMarginAfter = 0;
	target4.crossMarginBefore = 0; target4.crossMarginAfter = 0;

	target.lines.forEach(function (line) {
		perform(line);
	});

	t.is(target1.crossMarginBefore, 0); t.is(target1.crossMarginAfter, 0);
	t.is(target2.crossMarginBefore, 0); t.is(target2.crossMarginAfter, 0);

	t.is(target3.crossMarginBefore, 0); t.is(target3.crossMarginAfter, 0);
	t.is(target4.crossMarginBefore, 0); t.is(target4.crossMarginAfter, 0);
});

test('Test "cross-margin" with odd before as "auto"', function (t) {
	t.plan(8);

	target.lines[0].crossSpace = 100; target.lines[1].crossSpace = 100;
	target1.crossMarginBefore = 'auto'; target1.crossMarginAfter = 0;
	target2.crossMarginBefore = 0; target2.crossMarginAfter = 0;
	target3.crossMarginBefore = 'auto'; target3.crossMarginAfter = 0;
	target4.crossMarginBefore = 0; target4.crossMarginAfter = 0;

	target.lines.forEach(function (line) {
		perform(line);
	});

	t.is(target1.crossMarginBefore, 100); t.is(target1.crossMarginAfter, 0);
	t.is(target2.crossMarginBefore, 0); t.is(target2.crossMarginAfter, 0);

	t.is(target3.crossMarginBefore, 100); t.is(target3.crossMarginAfter, 0);
	t.is(target4.crossMarginBefore, 0); t.is(target4.crossMarginAfter, 0);
});

test('Test "cross-margin" with even after as "auto"', function (t) {
	t.plan(8);

	target.lines[0].crossSpace = 100; target.lines[1].crossSpace = 100;
	target1.crossMarginBefore = 0; target1.crossMarginAfter = 0;
	target2.crossMarginBefore = 0; target2.crossMarginAfter = 'auto';
	target3.crossMarginBefore = 0; target3.crossMarginAfter = 0;
	target4.crossMarginBefore = 0; target4.crossMarginAfter = 'auto';

	target.lines.forEach(function (line) {
		perform(line);
	});

	t.is(target1.crossMarginBefore, 0); t.is(target1.crossMarginAfter, 0);
	t.is(target2.crossMarginBefore, 0); t.is(target2.crossMarginAfter, 100);

	t.is(target3.crossMarginBefore, 0); t.is(target3.crossMarginAfter, 0);
	t.is(target4.crossMarginBefore, 0); t.is(target4.crossMarginAfter, 100);
});

test('Test "cross-margin" with all as "auto"', function (t) {
	t.plan(8);

	target.lines[0].crossSpace = 100; target.lines[1].crossSpace = 100;
	target1.crossMarginBefore = 'auto'; target1.crossMarginAfter = 'auto';
	target2.crossMarginBefore = 'auto'; target2.crossMarginAfter = 'auto';
	target3.crossMarginBefore = 'auto'; target3.crossMarginAfter = 'auto';
	target4.crossMarginBefore = 'auto'; target4.crossMarginAfter = 'auto';

	target.lines.forEach(function (line) {
		perform(line);
	});

	t.is(target1.crossMarginBefore, 25); t.is(target1.crossMarginAfter, 25);
	t.is(target2.crossMarginBefore, 25); t.is(target2.crossMarginAfter, 25);

	t.is(target3.crossMarginBefore, 25); t.is(target3.crossMarginAfter, 25);
	t.is(target4.crossMarginBefore, 25); t.is(target4.crossMarginAfter, 25);
});

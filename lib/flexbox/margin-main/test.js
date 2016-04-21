import test from 'ava';
import perform from './';

var target = {
	lines: [
		{
			mainSpace: 100,
			children: [
				{
					mainMarginBefore: 0,
					mainMarginAfter: 0
				},
				{
					mainMarginBefore: 0,
					mainMarginAfter: 0
				}
			]
		},
		{
			mainSpace: 100,
			children: [
				{
					mainMarginBefore: 0,
					mainMarginAfter: 0
				},
				{
					mainMarginBefore: 0,
					mainMarginAfter: 0
				}
			]
		}
	]
};

var target1 = target.lines[0].children[0];
var target2 = target.lines[0].children[1];
var target3 = target.lines[1].children[0];
var target4 = target.lines[1].children[1];

test('Test "main-margin" with all as 0', function (t) {
	t.plan(8);

	target.lines[0].mainSpace = 100; target.lines[1].mainSpace = 100;
	target1.mainMarginBefore = 0; target1.mainMarginAfter = 0;
	target2.mainMarginBefore = 0; target2.mainMarginAfter = 0;
	target3.mainMarginBefore = 0; target3.mainMarginAfter = 0;
	target4.mainMarginBefore = 0; target4.mainMarginAfter = 0;

	target.lines.forEach(function (line) {
		perform(line);
	});

	t.is(target1.mainMarginBefore, 0); t.is(target1.mainMarginAfter, 0);
	t.is(target2.mainMarginBefore, 0); t.is(target2.mainMarginAfter, 0);

	t.is(target3.mainMarginBefore, 0); t.is(target3.mainMarginAfter, 0);
	t.is(target4.mainMarginBefore, 0); t.is(target4.mainMarginAfter, 0);
});

test('Test "main-margin" with odd before as "auto"', function (t) {
	t.plan(8);

	target.lines[0].mainSpace = 100; target.lines[1].mainSpace = 100;
	target1.mainMarginBefore = 'auto'; target1.mainMarginAfter = 0;
	target2.mainMarginBefore = 0; target2.mainMarginAfter = 0;
	target3.mainMarginBefore = 'auto'; target3.mainMarginAfter = 0;
	target4.mainMarginBefore = 0; target4.mainMarginAfter = 0;

	target.lines.forEach(function (line) {
		perform(line);
	});

	t.is(target1.mainMarginBefore, 100); t.is(target1.mainMarginAfter, 0);
	t.is(target2.mainMarginBefore, 0); t.is(target2.mainMarginAfter, 0);

	t.is(target3.mainMarginBefore, 100); t.is(target3.mainMarginAfter, 0);
	t.is(target4.mainMarginBefore, 0); t.is(target4.mainMarginAfter, 0);
});

test('Test "main-margin" with even after as "auto"', function (t) {
	t.plan(8);

	target.lines[0].mainSpace = 100; target.lines[1].mainSpace = 100;
	target1.mainMarginBefore = 0; target1.mainMarginAfter = 0;
	target2.mainMarginBefore = 0; target2.mainMarginAfter = 'auto';
	target3.mainMarginBefore = 0; target3.mainMarginAfter = 0;
	target4.mainMarginBefore = 0; target4.mainMarginAfter = 'auto';

	target.lines.forEach(function (line) {
		perform(line);
	});

	t.is(target1.mainMarginBefore, 0); t.is(target1.mainMarginAfter, 0);
	t.is(target2.mainMarginBefore, 0); t.is(target2.mainMarginAfter, 100);

	t.is(target3.mainMarginBefore, 0); t.is(target3.mainMarginAfter, 0);
	t.is(target4.mainMarginBefore, 0); t.is(target4.mainMarginAfter, 100);
});

test('Test "main-margin" with all as "auto"', function (t) {
	t.plan(8);

	target.lines[0].mainSpace = 100; target.lines[1].mainSpace = 100;
	target1.mainMarginBefore = 'auto'; target1.mainMarginAfter = 'auto';
	target2.mainMarginBefore = 'auto'; target2.mainMarginAfter = 'auto';
	target3.mainMarginBefore = 'auto'; target3.mainMarginAfter = 'auto';
	target4.mainMarginBefore = 'auto'; target4.mainMarginAfter = 'auto';

	target.lines.forEach(function (line) {
		perform(line);
	});

	t.is(target1.mainMarginBefore, 25); t.is(target1.mainMarginAfter, 25);
	t.is(target2.mainMarginBefore, 25); t.is(target2.mainMarginAfter, 25);

	t.is(target3.mainMarginBefore, 25); t.is(target3.mainMarginAfter, 25);
	t.is(target4.mainMarginBefore, 25); t.is(target4.mainMarginAfter, 25);
});

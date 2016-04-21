import test from 'ava';
import perform from './';

var target = {
	lines: [
		{
			children: [
				{
					mainSize: 100,
					mainContentSize: 50,
					crossContentSize: 50,
					crossSize: 300,
					mainMarginBefore: 0,
					mainMarginAfter: 0
				},
				{
					mainSize: 300,
					mainContentSize: 50,
					crossContentSize: 50,
					crossSize: 100,
					mainMarginBefore: 0,
					mainMarginAfter: 0
				}
			]
		},
		{
			children: [
				{
					mainSize: 200,
					mainContentSize: 100,
					crossSize: 200,
					crossContentSize: 50,
					mainMarginBefore: 0,
					mainMarginAfter: 0
				},
				{
					mainSize: 200,
					mainContentSize: 100,
					crossSize: 200,
					crossContentSize: 50,
					mainMarginBefore: 0,
					mainMarginAfter: 0
				}
			]
		}
	]
};

test('Test "outer-length" with "axis" as "inline"', function (t) {
	t.plan(4);

	var length0_0 = perform(target.lines[0].children[0], 'inline');
	var length0_1 = perform(target.lines[0].children[1], 'inline');
	var length1_0 = perform(target.lines[1].children[0], 'inline');
	var length1_1 = perform(target.lines[1].children[1], 'inline');

	t.is(length0_0, 100); t.is(length0_1, 300);
	t.is(length1_0, 200); t.is(length1_1, 200);
});

test('Test "outer-length" with "axis" as "block"', function (t) {
	t.plan(4);

	var length0_0 = perform(target.lines[0].children[0], 'block');
	var length0_1 = perform(target.lines[0].children[1], 'block');
	var length1_0 = perform(target.lines[1].children[0], 'block');
	var length1_1 = perform(target.lines[1].children[1], 'block');

	t.is(length0_0, 300); t.is(length0_1, 100);
	t.is(length1_0, 200); t.is(length1_1, 200);
});

test('Test "outer-length" with "axis" as "inline" and "mainSize" is "auto"', function (t) {
	t.plan(4);

	target.lines[0].children[0].mainSize = 'auto';
	target.lines[0].children[1].mainSize = 'auto';
	target.lines[1].children[0].mainSize = 'auto';
	target.lines[1].children[1].mainSize = 'auto';

	var length0_0 = perform(target.lines[0].children[0], 'inline');
	var length0_1 = perform(target.lines[0].children[1], 'inline');
	var length1_0 = perform(target.lines[1].children[0], 'inline');
	var length1_1 = perform(target.lines[1].children[1], 'inline');

	t.is(length0_0, 50); t.is(length0_1, 50);
	t.is(length1_0, 100); t.is(length1_1, 100);
});

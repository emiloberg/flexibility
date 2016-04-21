# align-content

The `align-content` method calculates the position of flex lines along the cross axis.

```js
alignContent( target, target.alignContent )
```

### Specification

> https://drafts.csswg.org/css-flexbox-1/#propdef-align-content

1. If `target.align-content` is `"flex-start"`;
	1. Let `start` be `0`.
	-  For each `line` in `target.lines`;
		1. Let `line.cross-start` be `start`.
		-  For each `child` in `line.children`;
			1. Let `child.cross-start` be `start`.
		-  Let `start` be itself and `line.cross-size`.
-  If `target.align-content` is `"flex-end"`;
	1. Let `start` be `target.cross-space`.
	-  For each `line` in `target.lines`;
		1. Let `line.cross-start` be `start`.
		-  For each `child` in `line.children`;
			1. Let `child.cross-start` be `start`.
		-  Let `start` be itself and `line.cross-size`.
-  If `target.align-content` is `"center"`;
	1. Let `start` be `target.cross-space` divided by `2`.
	-  For each `line` in `target.lines`;
		1. Let `line.cross-start` be `start`.
		-  For each `child` in `line.children`;
			1. Let `child.cross-start` be `start`.
		-  Let `start` be itself and `line.cross-size`.
-  If `target.align-content` is `"space-between"`;
	1. Let `factor` be `target.cross-space` divided by; the length of `lines` sans `1`.
	-  Let `start` be `0`.
	-  For each `line` in `target.lines`;
		1. Let `line.cross-start` be `start`.
		-  For each `child` in `line.children`;
			1. Let `child.cross-start` be `start`.
		-  Let `start` be itself and `line.cross-size` and `factor`.
-  If `target.align-content` is `"space-around"`;
	1. Let `factor` be `target.cross-space` divided by; the length of `lines` and `1`.
	-  Let  `start` be `factor`.
	-  For each `line` in `target.lines`;
		1. Let `line.cross-start` be `start` and `factor`.
		-  For each `child` in `line.children`;
			1. Let `child.cross-start` be `start` and `factor`.
		-  Let `start` be itself and `line.cross-size`.
-  If `target.align-content` is `"stretch"`;
	1. Let `factor` be `target.cross-space` divided by the length of `target.lines`.
	1. Let `start` be `0`.
	-  For each `line` in `target.lines`;
		1. Let `line.cross-start` be `start`.
		1. Let `line.cross-size` be itself and `factor`.
		-  For each `child` in `line.children`;
			1. Let `child.cross-start` be `start`.
			-  Let `child.cross-size` be `line.cross-size`.
		-  Let `start` be itself and `line.cross-size`.

[Implementation](index.js)

# justify-content

The `justify-content` method calculates the position of flex items in a line along the main axis.

```js
justifyContent( line, target.justifyContent )
```

### Specification

> https://drafts.csswg.org/css-flexbox-1/#propdef-justify-content

1. If `justify-content` is `"flex-start"`;
	1. Let `start` be `0`.
	-  For each `child` in `line.children`;
		1. Let `child.main-start` be `start`.
		-  Let `start` be itself and `child.main-start`.
-  Otherwise, if `justify-content` is `"flex-end"`;
	1. Let `start` be `line.main-space`.
	-  For each `child` in `line.children`;
		1. Let `child.main-start` be `start`.
		-  Let `start` be itself and `child.main-start`.
-  Otherwise, if `justify-content` is `"center"`;
	1. Let `start` be `line.main-space` divided by `2`.
	-  For each `child` in `line.children`;
		1. Let `child.main-start` be `start`.
		-  Let `start` be itself and `child.main-start`.
-  Otherwise, if `justify-content` is `"space-between"`;
	1. Let `factor` be `line.main-space` divided by; the length of `line.children` sans `1`.
	-  Let `start` be `0`.
	-  For each `child` in `line.children`;
		1. Let `child.main-start` be `start`.
		-  Let `start` be itself and `child.main-size` and `factor`.
-  Otherwise, if `justify-content` is `"space-around"`;
	1. Let `factor` be `line.main-space` divided by; the length of `line.children` and `1`.
	-  Let `start` be `0`.
	-  For each `child` in `line.children`;
		1. Let `child.main-start` be `start` and `factor`.
		-  Let `start` be itself and `child.main-size` and `factor`.

[Implementation](index.js)

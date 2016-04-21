# flexbox-lines

The `flexbox-lines` method calculates the lengths of lines in a flex container.

```js
flexboxLines( target )
```

### Dependencies

#### [outer-length](outer-length)

The `outer-length` method calculates the total length of a flex container along either the main or cross axis.

### Specification

> https://drafts.csswg.org/css-flexbox-1/

1.  Let `target.lines` be a `LineCollection`.
-  Let `line` be a `Line` child of `target.lines`.
-  For each `child` in `target.children`;
	1. If `child.flex-basis` is a `Number`;
		1. Let `child.main-size` be `target.flex-basis`.
	-  Otherwise;
		1. Let `child.main-size` be `outer-size( child, target.main-axis )`.
	-  Let `target.cross-size` be `outer-size( child, target.cross-axis )`.
	-  If `line.children` has a length of `0`, or;
	   if the `target.wrap` is `"no-wrap"`, or;
	   if the `target.main-size` is `"auto"`, or;
	   if the `line.main-size` and `child.main-size` is less than or equal to `target.main-size`;
		1. Let `line.main-size` be itself and `child.main-size`.
		-  Let `line.cross-size` be the `Math.max` of itself or `child.cross-size`.
	-  Otherwise;
		1. Let `line` be a `Line` child of `target.lines`.
		-  Let `line.main-size` be `child.main-size`.
		-  Let `line.cross-size` be `child.cross-size`.
	-  If `child.flex-shrink` is not a `Number`;
		1. Let `child.flex-shrink` be `1`.
	-  If `child.align-self` is defined;
		1. Let `child.align-self` be itself.
	-  Otherwise;
		1. Let `child.align-self` by `target.align-items`.
	-  If `parent.main-axis` is `"inline"`;
		1. Let `child.main-margin-before` be `child.margin-left`.
		-  Let `child.main-margin-after` be `child.margin-right`.
		-  Let `child.cross-margin-before` be `child.margin-top`.
		-  Let `child.cross-margin-after` be `child.margin-bottom`.
	-  Otherwise, if `parent.main-axis` is `"block"`;
		1. Let `child.main-margin-before` be `child.margin-top`.
		-  Let `child.main-margin-after` be `child.margin-bottom`.
		-  Let `child.cross-margin-before` be `child.margin-left`.
		-  Let `child.cross-margin-after` be `child.margin-right`.
	-  Let `child` be a child of `line.children`.

[Implementation](index.js)

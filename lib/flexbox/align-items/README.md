# align-items

The `align-self` method calculates the position of flex items along the cross axis.

```js
alignItems( target )
```

### Specification

> https://drafts.csswg.org/css-flexbox-1/#propdef-align-items

1. For each `line` in `target.lines`;
	1. For each `child` in `line.children`;
		-  If `child.align-self` is `"flex-start"`;
			1. Let `child.cross-start` be itself.
		-  Otherwise, if `child.align-self` is `"flex-end"`;
			1. Let `child.cross-start` be itself and the `line.cross-size` sans `child.cross-size`.
		-  Otherwise, if `child.align-self` is `"center"`;
			1. Let `child.cross-start` be itself and; the `line.cross-size` sans `child.cross-size`; divided by `2`.
		-  Otherwise, if `child.align-self` is `"stretch"`;
			1. Let `child.cross-start` be itself.
			-  Let `child.cross-size` be `line.cross-size`.

[Implementation](index.js)

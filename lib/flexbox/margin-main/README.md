# margin-main

The `margin-main` method calculates the numerical length of flex item margins set to `"auto"` along the main axis.

```js
marginCross( line )
```

### Specification

1. Let `count` be `0`.
-  For each `child` in `line.children`;
	1. If `child.main-margin-before` is `auto`;
		1. Increment `count` by `1`.
	-  If `child.main-margin-after` is `auto`;
		1. Increment `count` by `1`.
1. If `count` is greater than `0`;
	1. For each `child` in `line.children`;
		1. If `child.main-margin-before` is `auto`;
			1. Let `child.main-margin-before` be the `line.main-space` divided by `count`.
		+  If `child.main-margin-after` is `auto`;
			1. Let `child.main-margin-after` be the `line.main-space` divided by `count`.
	+  Let `line.main-space` be `0`.

[Implementation](index.js)

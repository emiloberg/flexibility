# outer-length

The `outer-length` method calculates the total length of a flex container along either the main or cross axis.

```js
outerLength( child, axis )
```

### Specification

> https://drafts.csswg.org/css-flexbox-1/

1. Let `length` be `0`.
-  If `axis` is `"inline"`;
	1. If `child.main-size` is a `Number`;
		1. Let `length` be itself and `child.main-size`.
	-  Otherwise, if `child.main-size` is `auto`;
		1. Let `length` be itself and `child.main-content-size`.
	-  If `child.main-margin-before` is a `Number`;
		1. Let `length` be itself and `child.main-margin-before`.
	-  If `child.main-margin-after` is a `Number`;
		1. Let `length` be itself and `child.main-margin-after`.
-  Otherwise, if `axis` is `"block"`;
	1. If `child.cross-size` is a `Number`;
		1. Let `length` be itself and `child.cross-size`.
	-  Otherwise, if `child.cross-size` is `auto`;
		1. Let `length` be itself and `child.cross-content-size`.
	-  If `child.cross-margin-before` is a `Number`;
		1. Let `length` be itself and `child.cross-margin-before`.
	-  If `child.cross-margin-after` is a `Number`;
		1. Let `length` be itself and `child.cross-margin-after`.
-  Return `length`.

[Implementation](index.js)

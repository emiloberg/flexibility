# `flex-shrink( line )`

The `flex-shrink` methods calculates any numerical decrease to the size of flex items along the main axis.

```js
flexGrow( line )
```

### Specification

> https://drafts.csswg.org/css-flexbox-1/#propdef-flex-shrink

1. If `line.main-space` is less than `0`.
	1. Let `line.shrink-factor` be all the `flex-shrink` of each `child` in `line.children`.
	-  If `line.shrink-factor` is greater than `0`.
		1. For each `child` in `line.children`;
			1. Let the `child.main-size` be itself and;
			   `child.flex-shrink` divided by `line.shrink-factor` multiplied by `line.main-space`.
		-  Let `line.main-size` be all the `main-size` of each `child` in `line.children`.

[Implementation](index.js)

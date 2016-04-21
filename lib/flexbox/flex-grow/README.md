# flex-grow

The `flex-grow` methods calculates any numerical increase to the size of flex items along the main axis.

```js
flexGrow( line )
```

### Specification

> https://drafts.csswg.org/css-flexbox-1/#propdef-flex-grow

1. If `line.main-space` is greater than `0`.
	1. Let `line.grow-factor` be all the `flex-grow` of each `child` in `line.children`.
	-  If `line.grow-factor` is greater than `0`.
		1. For each `child` in `line.children`;
			1. Let `child.main-size` be itself and;
				`child.flex-grow` divided by `line.grow-factor` multiplied by `line.main-space`.
		-  Let `line.main-size` be all the `main-size` of each `child` in `line.children`.

[Implementation](index.js)

# flex-direction

The `flex-direction` methods calculates the size and axis of the flex container.

```js
flexDirection( target )
```

### Specification

> https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction

1. If `target.flex-direction` is `"row"` or `"row-reverse"`;
	1. Let `target.main-axis` be `"inline"`.
	-  Let `target.cross-axis` be `"block"`.
	-  Let `target.main-size` be `target.width`.
	-  Let `target.cross-size` be `target.height`.
-  Otherwise, if `target.flex-direction` is `column` or `column-reverse`;
	1. Let `target.main-axis` be `"block"`.
	-  Let `target.cross-axis` be `"inline"`.
	-  Let `target.main-size` be `target.height`.
	-  Let `target.cross-size` be `target.width`.

[Implementation](index.js)

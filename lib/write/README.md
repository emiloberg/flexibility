# write

The `write` method takes a `flexbox()` object and writes it as compatible CSS to its node.

```js
write(target);
```

1. If something;
	1. Let `style.position` be `"relative"`.
	+  If `target.main-axis` is `"inline"`;
		1. Let `style.width` be `target.main-size`.
	+  Otherwise, if `target.main-size` is `"block"`;
		1. Let `style.width` be `target.cross-size`.
	+  If `target.cross-axis` is `"block"`;
		1. Let `style.width` be `target.cross-size`.
	+  Otherwise, if `target.main-size` is `"block"`;
		1. Let `style.height` be `target.main-size`.
-  Otherwise, if something else;
	1. Let `style.position` be `"absolute"`.
	-  Let `style.width` be `main-size` sans `main-margin-before` sans `main-margin-after`.
	-  Let `style.height` be `cross-size` sans `cross-margin-before` sans `cross-margin-after`.
	-  Let `style.margin-top` be `cross-margin-before`.
	-  Let `style.margin-right` be `main-margin-after`.
	-  Let `style.margin-bottom` be `cross-margin-after`.
	-  Let `style.margin-left` be `main-margin-before`.

-  For each `child` of `target.children`;
	1. Perform `style( child )`.

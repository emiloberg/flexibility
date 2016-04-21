# support

The `support` method determines whether the browser supports the late 2012 syntax of Flexible Box Layout. Browsers not supporting this syntax, including browsers supporting the older syntaxes (2009’s `display: box` and 2011 to early 2012’s `display: flexbox`) will fail the test.

```js
support();
```

### Specification

1. Let `test` be the `style` of a new `Element`.
-  Let `test.display` be `"flex"`.
-  Return whether `test.display` is still `"flex"`.

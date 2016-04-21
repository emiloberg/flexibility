# Flexibility

### Dependencies

#### [support](support)

The `support` method determines whether the browser supports the late 2012 syntax of Flexible Box Layout. Browsers not supporting this syntax, including browsers supporting the older syntaxes (2009’s `display: box` and 2011 to early 2012’s `display: flexbox`) will fail the test.

#### [flexbox](flexbox)

The `flexbox` method calculates the lengths and positions used to simulate CSS Flexible Box Layout on a flex container.

#### [read](read)

The `read` method takes an `Element` object and prepares it for `flexbox`.

#### [write](write)

The `write` method takes a `flexbox` object and writes it as compatible CSS to its node.

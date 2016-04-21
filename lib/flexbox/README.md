# flexbox

The `flexbox` method calculates the lengths and positions used to simulate CSS Flexible Box Layout on a flex container.

```js
flexbox( target )
```

### Dependencies

#### [flexbox-lines](flexbox-lines)

The `lines` method calculates the lengths of lines in a flex container.

#### [flex-direction](flex-direction)

The `flex-direction` methods calculates the size and axis of the flex container.

#### [flex-grow](flex-grow)

The `flex-grow` methods calculates any numerical increase to the size of flex items along the main axis.

#### [flex-shrink](flex-shrink)

The `flex-shrink` methods calculates any numerical decrease to the size of flex items along the main axis.

#### [margin-main](margin-main)

The `margin-main` method calculates the numerical value of flex item margins set to `"auto"` along the main axis.

#### [margin-cross](margin-cross)

The `margin-cross` method calculates the numerical length of flex item margins set to `"auto"` along the cross axis.

#### [justify-content](justify-content)

The `justify-content` method calculates the position of flex items in a line along the main axis.

#### [align-items](align-items)

The `align-self` method calculates the position of flex items along the cross axis.

#### [align-content](align-content)

The `align-content` method calculates the position of flex lines along the cross axis.

### Specification

> https://drafts.csswg.org/css-flexbox-1/

1. Perform `flex-direction( target )`.
-  Perform `line( target )`.
-  If `target.main-size` is `"auto"`;
	1. Let `target.main-size` be the `Math.max` of all the `main-size` of each `line` in `target.lines`.
-  If `target.cross-size` is `"auto"`;
	1. Let `target.cross-size` be all the `cross-size` of each `line` in `target.lines`.
	-  Let `target.cross-space` be `0`.
- Otherwise;
	1. Let `target.cross-space` be `target.cross-size` sans all the `cross-size` of each `line` in `target.lines`.
-  For each `line` in `target.lines`;
	1. Let `line.main-space` be `target.main-size` sans `line.main-size`.
	-  Perform `flex-shrink( line )`.
	-  Perform `margin-main( line )`.
	-  Perform `margin-cross( line )`.
	-  Perform `justify-content( line, target.justify-content )`.
-  Perform `align-content( target )`.
-  Perform `align-items( target )`.

[Implementation](index.js)

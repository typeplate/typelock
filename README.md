# TypeLock.js

[View Demo](https://codepen.io/dennisgaebel/pen/WZyyMr)

Clamping typography for your responsive needs using a combination of JavaScript(ES6) and [CSS variables](https://caniuse.com/#search=CSS%20variables). 2 KB of pure fuel. Supports CommonJS-like environments and AMD module loaders.

### Example

```css
:root {
	--foo-bar: number;
	--bar-foo: number;
}

.element {
	font-size: calc(var(--foo-bar) * factor);
	line-height: calc(var(--bar-foo) * factor);
}
```

"factor" can be whatever you want to use as a numerical value within your math logic.

```html
<script src="path/to/directory/typelock.js"></script>
<script>
addTypeLock({
	cssvar: '--foo-bar',
	min: number,
	max: number,
	factor: number
});

addTypeLock({
	cssvar: '--bar-foo',
	min: number,
	max: number,
	factor: number
});
</script>
```

`addTypeLock({})` can be called as many times as you need it, but be mindful that you're manipulating CSS with JS so your performance will vary.

©2017 Typeplate. Licensed under MIT. Special thanks to Tommy Hodgins, Chris Wallis and Mathew Chase.

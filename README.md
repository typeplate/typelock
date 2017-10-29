# TypeLock.js

Clamping typography for your responsive needs using a combination of JavaScript and CSS variables. 1.6 KB of pure fuel.

## Example Usage

```css
:root {
	--fontsize-global: 16;
}

.element {
	font-size: calc(var(--fontsize-global) * 0.1rem);
}
```

```html
<script src="path/to/directory/typelock.js"></script>
<script>
addTypeLock({
	cssvar: '--fontsize-global',
	min: 14,
	max: 18,
	factor: 10
});
</script>
```

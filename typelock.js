/*!
 * TypeLock v1.0.0
 * ©2017 Typeplate
 * Licensed under MIT
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD module
		define(factory);
	} else if (typeof exports === 'object') {
		// CommonJS-like environment (i.e. Node)
		module.exports = factory();
	} else {
		// Browser global
		root.addTypeLock = factory();
	}
}(this || window, function () {
	let isRegistered = false;
	const typeLockOptions = [];

	// setup clamping
	function clamp(min, mid, max) {
		return Math.min(Math.max(min, mid), max);
	}

	// clamp values and define css variable
	function typeLock({ cssvar, min, max, factor }) {
		let clamp_value = clamp(min, window.innerWidth / factor, max);
		document.documentElement.style.setProperty(cssvar, clamp_value);
	}

	// apply passed values from addTypeLock method
	function applyTypeLock() {
		typeLockOptions.forEach(typeLock);
	}

	// register our desires to the window's load and resize event
	function registerTypeLock() {
		let events        = [ 'load', 'resize' ],
				events_length = events.length;

		// Attach Events
		for(let i = 0, l = events_length; i < l; i++) {
			window.addEventListener( events[i], applyTypeLock );
		}
	}

	// check if registered and push values and to options array
	function addTypeLock(config) {
		if (!isRegistered) {
			registerTypeLock();
			isRegistered = true;
		}
		typeLockOptions.push(config);
	}

	// required only if you want to unregister one of the variables
	function remove(config) {
		let index = typeLockOptions.indexOf(config);
		if (index !== -1) {
			typeLockOptions.splice(index, 1);
		}
	}

	return addTypeLock;
}));

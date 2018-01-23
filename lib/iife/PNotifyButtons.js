"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* src/PNotifyButtons.html generated by Svelte v1.52.0 */
var PNotifyButtons = function (PNotify) {
	"use strict";

	PNotify = PNotify && PNotify.__esModule ? PNotify["default"] : PNotify;

	function _show_sticker(sticker, show_on_nonblock, _options) {
		return sticker && (!(_options.modules && _options.modules.NonBlock && _options.modules.NonBlock.nonblock) || show_on_nonblock);
	}

	function _show_closer(closer, show_on_nonblock, _options) {
		return closer && (!(_options.modules && _options.modules.NonBlock && _options.modules.NonBlock.nonblock) || show_on_nonblock);
	}

	function _pin_up_class(classes, _notice) {
		return _notice ? classes.pin_up === null ? _notice.get("_icons").pin_up : classes.pin_up : '';
	}

	function _pin_down_class(classes, _notice) {
		return _notice ? classes.pin_down === null ? _notice.get("_icons").pin_down : classes.pin_down : '';
	}

	function _closer_class(classes, _notice) {
		return _notice ? classes.closer === null ? _notice.get("_icons").closer : classes.closer : '';
	}

	function data() {
		return _extends({
			"_notice": null, // The PNotify notice.
			"_options": {}, // The options for the notice.
			"_mouseIsIn": false
		}, PNotify.modules.Buttons.defaults);
	};

	var methods = {
		handleStickerClick: function handleStickerClick() {
			var _notice = this.get("_notice");
			_notice.update({ hide: !_notice.get("hide") });
		},
		handleCloserClick: function handleCloserClick() {
			this.get("_notice").remove(false);
			this.set({ "_mouseIsIn": false });
		}
	};

	function oncreate() {
		var _this = this;

		this.on("initModule", function (options) {
			_this.set(options);
			_this.get("_notice").on("mouseenter", function () {
				return _this.set({ "_mouseIsIn": true });
			});
			_this.get("_notice").on("mouseleave", function () {
				return _this.set({ "_mouseIsIn": false });
			});
		});
		this.fire("init", { module: this });
	};

	function setup(Component) {
		Component.key = "Buttons";

		Component.defaults = {
			// Provide a button for the user to manually close the notice.
			closer: true,
			// Only show the closer button on hover.
			closer_hover: true,
			// Provide a button for the user to manually stick the notice.
			sticker: true,
			// Only show the sticker button on hover.
			sticker_hover: true,
			// Show the buttons even when the nonblock module is in use.
			show_on_nonblock: false,
			// The various displayed text, helps facilitating internationalization.
			labels: {
				close: "Close",
				stick: "Stick",
				unstick: "Unstick"
			},
			// The classes to use for button icons. Leave them null to use the classes from the styling you're using.
			classes: {
				closer: null,
				pin_up: null,
				pin_down: null
			}
		};

		// Register the module with PNotify.
		PNotify.modules.Buttons = Component;
		// Prepend this module to the container.
		PNotify.modulesPrependContainer.push(Component);

		// Add button icons to icons objects.
		_extends(PNotify.icons.brighttheme, {
			closer: "brighttheme-icon-closer",
			pin_up: "brighttheme-icon-sticker",
			pin_down: "brighttheme-icon-sticker brighttheme-icon-stuck"
		});
		_extends(PNotify.icons.bootstrap3, {
			closer: "glyphicon glyphicon-remove",
			pin_up: "glyphicon glyphicon-pause",
			pin_down: "glyphicon glyphicon-play"
		});
		_extends(PNotify.icons.fontawesome4, {
			closer: "fa fa-times",
			pin_up: "fa fa-pause",
			pin_down: "fa fa-play"
		});
		_extends(PNotify.icons.fontawesome5, {
			closer: "fas fa-times",
			pin_up: "fas fa-pause",
			pin_down: "fas fa-play"
		});
	};

	function encapsulateStyles(node) {
		setAttribute(node, "svelte-192329391", "");
	}

	function add_css() {
		var style = createElement("style");
		style.id = 'svelte-192329391-style';
		style.textContent = ".ui-pnotify-closer[svelte-192329391],.ui-pnotify-sticker[svelte-192329391]{float:right;margin-left:.5em;cursor:pointer}.ui-pnotify-hidden[svelte-192329391]{visibility:hidden}";
		appendNode(style, document.head);
	}

	function create_main_fragment(state, component) {
		var text, if_block_1_anchor;

		var if_block = state._show_closer && create_if_block(state, component);

		var if_block_1 = state._show_sticker && create_if_block_1(state, component);

		return {
			c: function create() {
				if (if_block) if_block.c();
				text = createText("\n");
				if (if_block_1) if_block_1.c();
				if_block_1_anchor = createComment();
			},

			m: function mount(target, anchor) {
				if (if_block) if_block.m(target, anchor);
				insertNode(text, target, anchor);
				if (if_block_1) if_block_1.m(target, anchor);
				insertNode(if_block_1_anchor, target, anchor);
			},

			p: function update(changed, state) {
				if (state._show_closer) {
					if (if_block) {
						if_block.p(changed, state);
					} else {
						if_block = create_if_block(state, component);
						if_block.c();
						if_block.m(text.parentNode, text);
					}
				} else if (if_block) {
					if_block.u();
					if_block.d();
					if_block = null;
				}

				if (state._show_sticker) {
					if (if_block_1) {
						if_block_1.p(changed, state);
					} else {
						if_block_1 = create_if_block_1(state, component);
						if_block_1.c();
						if_block_1.m(if_block_1_anchor.parentNode, if_block_1_anchor);
					}
				} else if (if_block_1) {
					if_block_1.u();
					if_block_1.d();
					if_block_1 = null;
				}
			},

			u: function unmount() {
				if (if_block) if_block.u();
				detachNode(text);
				if (if_block_1) if_block_1.u();
				detachNode(if_block_1_anchor);
			},

			d: function destroy() {
				if (if_block) if_block.d();
				if (if_block_1) if_block_1.d();
			}
		};
	}

	// (1:0) {{#if _show_closer}}
	function create_if_block(state, component) {
		var div, span, div_class_value, div_title_value;

		function click_handler(event) {
			component.handleCloserClick();
		}

		return {
			c: function create() {
				div = createElement("div");
				span = createElement("span");
				this.h();
			},

			h: function hydrate() {
				encapsulateStyles(div);
				encapsulateStyles(span);
				span.className = state._closer_class;
				div.className = div_class_value = "ui-pnotify-closer " + (!state.closer_hover || state._mouseIsIn ? '' : 'ui-pnotify-hidden');
				setAttribute(div, "role", "button");
				div.tabIndex = "0";
				div.title = div_title_value = state.labels.closer;
				addListener(div, "click", click_handler);
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				appendNode(span, div);
			},

			p: function update(changed, state) {
				if (changed._closer_class) {
					span.className = state._closer_class;
				}

				if ((changed.closer_hover || changed._mouseIsIn) && div_class_value !== (div_class_value = "ui-pnotify-closer " + (!state.closer_hover || state._mouseIsIn ? '' : 'ui-pnotify-hidden'))) {
					div.className = div_class_value;
				}

				if (changed.labels && div_title_value !== (div_title_value = state.labels.closer)) {
					div.title = div_title_value;
				}
			},

			u: function unmount() {
				detachNode(div);
			},

			d: function destroy() {
				removeListener(div, "click", click_handler);
			}
		};
	}

	// (11:0) {{#if _show_sticker}}
	function create_if_block_1(state, component) {
		var div, span, span_class_value, div_class_value, div_aria_pressed_value, div_title_value;

		function click_handler(event) {
			component.handleStickerClick();
		}

		return {
			c: function create() {
				div = createElement("div");
				span = createElement("span");
				this.h();
			},

			h: function hydrate() {
				encapsulateStyles(div);
				encapsulateStyles(span);
				span.className = span_class_value = state._options.hide ? state._pin_up_class : state._pin_down_class;
				div.className = div_class_value = "ui-pnotify-sticker " + (!state.sticker_hover || state._mouseIsIn ? '' : 'ui-pnotify-hidden');
				setAttribute(div, "role", "button");
				setAttribute(div, "aria-pressed", div_aria_pressed_value = state._options.hide);
				div.tabIndex = "0";
				div.title = div_title_value = state._options.hide ? state.labels.stick : state.labels.unstick;
				addListener(div, "click", click_handler);
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				appendNode(span, div);
			},

			p: function update(changed, state) {
				if ((changed._options || changed._pin_up_class || changed._pin_down_class) && span_class_value !== (span_class_value = state._options.hide ? state._pin_up_class : state._pin_down_class)) {
					span.className = span_class_value;
				}

				if ((changed.sticker_hover || changed._mouseIsIn) && div_class_value !== (div_class_value = "ui-pnotify-sticker " + (!state.sticker_hover || state._mouseIsIn ? '' : 'ui-pnotify-hidden'))) {
					div.className = div_class_value;
				}

				if (changed._options && div_aria_pressed_value !== (div_aria_pressed_value = state._options.hide)) {
					setAttribute(div, "aria-pressed", div_aria_pressed_value);
				}

				if ((changed._options || changed.labels) && div_title_value !== (div_title_value = state._options.hide ? state.labels.stick : state.labels.unstick)) {
					div.title = div_title_value;
				}
			},

			u: function unmount() {
				detachNode(div);
			},

			d: function destroy() {
				removeListener(div, "click", click_handler);
			}
		};
	}

	function PNotifyButtons(options) {
		init(this, options);
		this._state = assign(data(), options.data);
		this._recompute({ sticker: 1, show_on_nonblock: 1, _options: 1, closer: 1, classes: 1, _notice: 1 }, this._state);

		if (!document.getElementById("svelte-192329391-style")) add_css();

		var _oncreate = oncreate.bind(this);

		if (!options.root) {
			this._oncreate = [_oncreate];
		} else {
			this.root._oncreate.push(_oncreate);
		}

		this._fragment = create_main_fragment(this._state, this);

		if (options.target) {
			this._fragment.c();
			this._fragment.m(options.target, options.anchor || null);

			callAll(this._oncreate);
		}
	}

	assign(PNotifyButtons.prototype, methods, {
		destroy: destroy,
		get: get,
		fire: fire,
		observe: observe,
		on: on,
		set: set,
		teardown: destroy,
		_set: _set,
		_mount: _mount,
		_unmount: _unmount
	});

	PNotifyButtons.prototype._recompute = function _recompute(changed, state) {
		if (changed.sticker || changed.show_on_nonblock || changed._options) {
			if (differs(state._show_sticker, state._show_sticker = _show_sticker(state.sticker, state.show_on_nonblock, state._options))) changed._show_sticker = true;
		}

		if (changed.closer || changed.show_on_nonblock || changed._options) {
			if (differs(state._show_closer, state._show_closer = _show_closer(state.closer, state.show_on_nonblock, state._options))) changed._show_closer = true;
		}

		if (changed.classes || changed._notice) {
			if (differs(state._pin_up_class, state._pin_up_class = _pin_up_class(state.classes, state._notice))) changed._pin_up_class = true;
			if (differs(state._pin_down_class, state._pin_down_class = _pin_down_class(state.classes, state._notice))) changed._pin_down_class = true;
			if (differs(state._closer_class, state._closer_class = _closer_class(state.classes, state._notice))) changed._closer_class = true;
		}
	};

	setup(PNotifyButtons);

	function setAttribute(node, attribute, value) {
		node.setAttribute(attribute, value);
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function createComment() {
		return document.createComment('');
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function addListener(node, event, handler) {
		node.addEventListener(event, handler, false);
	}

	function removeListener(node, event, handler) {
		node.removeEventListener(event, handler, false);
	}

	function init(component, options) {
		component._observers = { pre: blankObject(), post: blankObject() };
		component._handlers = blankObject();
		component._bind = options._bind;

		component.options = options;
		component.root = options.root || component;
		component.store = component.root.store || options.store;
	}

	function assign(target) {
		var k,
		    source,
		    i = 1,
		    len = arguments.length;
		for (; i < len; i++) {
			source = arguments[i];
			for (k in source) {
				target[k] = source[k];
			}
		}

		return target;
	}

	function callAll(fns) {
		while (fns && fns.length) {
			fns.pop()();
		}
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = this.get = noop;

		if (detach !== false) this._fragment.u();
		this._fragment.d();
		this._fragment = this._state = null;
	}

	function get(key) {
		return key ? this._state[key] : this._state;
	}

	function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	}

	function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.post : this._observers.pre;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	}

	function on(eventName, handler) {
		if (eventName === 'teardown') return this.on('destroy', handler);

		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		this.root._lock = true;
		callAll(this.root._beforecreate);
		callAll(this.root._oncreate);
		callAll(this.root._aftercreate);
		this.root._lock = false;
	}

	function _set(newState) {
		var oldState = this._state,
		    changed = {},
		    dirty = false;

		for (var key in newState) {
			if (differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign({}, oldState, newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
			this._fragment.p(changed, this._state);
			dispatchObservers(this, this._observers.post, changed, this._state, oldState);
		}
	}

	function _mount(target, anchor) {
		this._fragment.m(target, anchor);
	}

	function _unmount() {
		if (this._fragment) this._fragment.u();
	}

	function differs(a, b) {
		return a !== b || a && (typeof a === "undefined" ? "undefined" : _typeof(a)) === 'object' || typeof a === 'function';
	}

	function blankObject() {
		return Object.create(null);
	}

	function noop() {}

	function dispatchObservers(component, group, changed, newState, oldState) {
		for (var key in group) {
			if (!changed[key]) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}
	return PNotifyButtons;
}(PNotify);
//# sourceMappingURL=PNotifyButtons.js.map
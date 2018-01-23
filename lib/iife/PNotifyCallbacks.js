"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* src/PNotifyCallbacks.html generated by Svelte v1.52.0 */
var PNotifyCallbacks = function (PNotify) {
	"use strict";

	PNotify = PNotify && PNotify.__esModule ? PNotify["default"] : PNotify;

	var _open = PNotify.prototype.open,
	    _close = PNotify.prototype.close;

	var callbacks = function callbacks(notice, options, name) {
		var modules = notice ? notice.get('modules') : options.modules;
		var cbs = modules && modules.Callbacks ? modules.Callbacks : {};
		return cbs[name] ? cbs[name] : function () {
			return true;
		};
	};

	PNotify.prototype.open = function () {
		var ret = callbacks(this, null, 'before_open')(this);
		if (ret !== false) {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_open.apply(this, args);
			callbacks(this, null, 'after_open')(this);
		}
	};

	PNotify.prototype.close = function (timer_hide) {
		var ret = callbacks(this, null, 'before_close')(this, timer_hide);
		if (ret !== false) {
			for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				args[_key2 - 1] = arguments[_key2];
			}

			_close.apply(this, [timer_hide].concat(args));
			callbacks(this, null, 'after_close')(this, timer_hide);
		}
	};

	function setup(Component) {
		Component.key = "Callbacks";

		var _alert = PNotify.alert,
		    _notice = PNotify.notice,
		    _info = PNotify.info,
		    _success = PNotify.success,
		    _error = PNotify.error;

		var init = function init(original, options) {
			callbacks(null, options, 'before_init')(options);
			var notice = original(options);
			callbacks(notice, null, 'after_init')(notice);
			return notice;
		};

		PNotify.alert = function (options) {
			return init(_alert, options);
		};
		PNotify.notice = function (options) {
			return init(_notice, options);
		};
		PNotify.info = function (options) {
			return init(_info, options);
		};
		PNotify.success = function (options) {
			return init(_success, options);
		};
		PNotify.error = function (options) {
			return init(_error, options);
		};

		// Register the module with PNotify.
		PNotify.modules.Callbacks = Component;
	};

	function create_main_fragment(state, component) {

		return {
			c: noop,

			m: noop,

			p: noop,

			u: noop,

			d: noop
		};
	}

	function PNotifyCallbacks(options) {
		init(this, options);
		this._state = assign({}, options.data);

		this._fragment = create_main_fragment(this._state, this);

		if (options.target) {
			this._fragment.c();
			this._fragment.m(options.target, options.anchor || null);
		}
	}

	assign(PNotifyCallbacks.prototype, {
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

	PNotifyCallbacks.prototype._recompute = noop;

	setup(PNotifyCallbacks);

	function noop() {}

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

	function blankObject() {
		return Object.create(null);
	}

	function callAll(fns) {
		while (fns && fns.length) {
			fns.pop()();
		}
	}

	function differs(a, b) {
		return a !== b || a && (typeof a === "undefined" ? "undefined" : _typeof(a)) === 'object' || typeof a === 'function';
	}

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
	return PNotifyCallbacks;
}(PNotify);
//# sourceMappingURL=PNotifyCallbacks.js.map
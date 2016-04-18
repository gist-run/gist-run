define('config',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var isDev = /^http:\/\/localhost/.test(location.origin);
  var workerOrigin = isDev ? 'http://localhost:3000' : 'https://gist.host';
  exports.workerOrigin = workerOrigin;
  var workerPage = workerOrigin + '/';

  exports.workerPage = workerPage;
  var authorizationCodeUri = 'https://github.com/login/oauth/authorize';
  exports.authorizationCodeUri = authorizationCodeUri;
  var accessTokenUri = 'https://gist-run-auth.herokuapp.com/access-token';
  exports.accessTokenUri = accessTokenUri;
  var redirect_uri = 'https://gist.run/redirect-target.html';
  exports.redirect_uri = redirect_uri;
  var client_id = '13b6e534ab9bc9953506';
  exports.client_id = client_id;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELE1BQU0sWUFBWSxHQUFHLEtBQUssR0FBRyx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQzs7QUFDM0UsTUFBTSxVQUFVLEdBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQzs7O0FBRXRDLE1BQU0sb0JBQW9CLEdBQUcsMENBQTBDLENBQUM7O0FBQ3hFLE1BQU0sY0FBYyxHQUFHLGtEQUFrRCxDQUFDOztBQUMxRSxNQUFNLFlBQVksR0FBRyx1Q0FBdUMsQ0FBQzs7QUFDN0QsTUFBTSxTQUFTLEdBQUcsc0JBQXNCLENBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNEZXYgPSAvXmh0dHA6XFwvXFwvbG9jYWxob3N0Ly50ZXN0KGxvY2F0aW9uLm9yaWdpbik7XHJcbmV4cG9ydCBjb25zdCB3b3JrZXJPcmlnaW4gPSBpc0RldiA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDogJ2h0dHBzOi8vZ2lzdC5ob3N0JztcclxuZXhwb3J0IGNvbnN0IHdvcmtlclBhZ2UgPSB3b3JrZXJPcmlnaW4gKyAnLyc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aG9yaXphdGlvbkNvZGVVcmkgPSAnaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2F1dGhvcml6ZSc7XHJcbmV4cG9ydCBjb25zdCBhY2Nlc3NUb2tlblVyaSA9ICdodHRwczovL2dpc3QtcnVuLWF1dGguaGVyb2t1YXBwLmNvbS9hY2Nlc3MtdG9rZW4nO1xyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RfdXJpID0gJ2h0dHBzOi8vZ2lzdC5ydW4vcmVkaXJlY3QtdGFyZ2V0Lmh0bWwnO1xyXG5leHBvcnQgY29uc3QgY2xpZW50X2lkID0gJzEzYjZlNTM0YWI5YmM5OTUzNTA2JztcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('editing/current-file-changed-event',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var CurrentFileChangedEvent = function CurrentFileChangedEvent(file) {
    _classCallCheck(this, CurrentFileChangedEvent);

    this.file = file;
  };

  exports.CurrentFileChangedEvent = CurrentFileChangedEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbmcvY3VycmVudC1maWxlLWNoYW5nZWQtZXZlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O01BQWEsdUJBQXVCLEdBQ3ZCLFNBREEsdUJBQXVCLENBQ3RCLElBQUksRUFBRTswQkFEUCx1QkFBdUI7O0FBRWhDLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0dBQ2xCIiwiZmlsZSI6ImVkaXRpbmcvY3VycmVudC1maWxlLWNoYW5nZWQtZXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3VycmVudEZpbGVDaGFuZ2VkRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKGZpbGUpIHtcclxuICAgIHRoaXMuZmlsZSA9IGZpbGU7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('aurelia-pal',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AggregateError = AggregateError;
  exports.initializePAL = initializePAL;
  function AggregateError(message, innerError, skipIfAlreadyAggregate) {
    if (innerError) {
      if (innerError.innerError && skipIfAlreadyAggregate) {
        return innerError;
      }

      if (innerError.stack) {
        message += '\n------------------------------------------------\ninner error: ' + innerError.stack;
      }
    }

    var e = new Error(message);
    if (innerError) {
      e.innerError = innerError;
    }

    return e;
  }

  var FEATURE = exports.FEATURE = {};

  var PLATFORM = exports.PLATFORM = {
    noop: function noop() {},
    eachModule: function eachModule() {}
  };

  PLATFORM.global = function () {
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    return new Function('return this')();
  }();

  var DOM = exports.DOM = {};

  function initializePAL(callback) {
    if (typeof Object.getPropertyDescriptor !== 'function') {
      Object.getPropertyDescriptor = function (subject, name) {
        var pd = Object.getOwnPropertyDescriptor(subject, name);
        var proto = Object.getPrototypeOf(subject);
        while (typeof pd === 'undefined' && proto !== null) {
          pd = Object.getOwnPropertyDescriptor(proto, name);
          proto = Object.getPrototypeOf(proto);
        }
        return pd;
      };
    }

    callback(PLATFORM, FEATURE, DOM);
  }
});
define('aurelia-metadata',['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Origin = exports.metadata = undefined;
  exports.decorators = decorators;
  exports.deprecated = deprecated;
  exports.mixin = mixin;
  exports.protocol = protocol;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var metadata = exports.metadata = {
    resource: 'aurelia:resource',
    paramTypes: 'design:paramtypes',
    properties: 'design:properties',
    get: function get(metadataKey, target, targetKey) {
      if (!target) {
        return undefined;
      }
      var result = metadata.getOwn(metadataKey, target, targetKey);
      return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
    },
    getOwn: function getOwn(metadataKey, target, targetKey) {
      if (!target) {
        return undefined;
      }
      return Reflect.getOwnMetadata(metadataKey, target, targetKey);
    },
    define: function define(metadataKey, metadataValue, target, targetKey) {
      Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
    },
    getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
      var result = metadata.getOwn(metadataKey, target, targetKey);

      if (result === undefined) {
        result = new Type();
        Reflect.defineMetadata(metadataKey, result, target, targetKey);
      }

      return result;
    }
  };

  var originStorage = new Map();
  var unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

  var Origin = exports.Origin = function () {
    function Origin(moduleId, moduleMember) {
      _classCallCheck(this, Origin);

      this.moduleId = moduleId;
      this.moduleMember = moduleMember;
    }

    Origin.get = function get(fn) {
      var origin = originStorage.get(fn);

      if (origin === undefined) {
        _aureliaPal.PLATFORM.eachModule(function (key, value) {
          for (var name in value) {
            var exp = value[name];
            if (exp === fn) {
              originStorage.set(fn, origin = new Origin(key, name));
              return true;
            }
          }

          if (value === fn) {
            originStorage.set(fn, origin = new Origin(key, 'default'));
            return true;
          }
        });
      }

      return origin || unknownOrigin;
    };

    Origin.set = function set(fn, origin) {
      originStorage.set(fn, origin);
    };

    return Origin;
  }();

  function decorators() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    var applicator = function applicator(target, key, descriptor) {
      var i = rest.length;

      if (key) {
        descriptor = descriptor || {
          value: target[key],
          writable: true,
          configurable: true,
          enumerable: true
        };

        while (i--) {
          descriptor = rest[i](target, key, descriptor) || descriptor;
        }

        Object.defineProperty(target, key, descriptor);
      } else {
        while (i--) {
          target = rest[i](target) || target;
        }
      }

      return target;
    };

    applicator.on = applicator;
    return applicator;
  }

  function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
    function decorator(target, key, descriptor) {
      var methodSignature = target.constructor.name + '#' + key;
      var options = maybeKey ? {} : optionsOrTarget || {};
      var message = 'DEPRECATION - ' + methodSignature;

      if (typeof descriptor.value !== 'function') {
        throw new SyntaxError('Only methods can be marked as deprecated.');
      }

      if (options.message) {
        message += ' - ' + options.message;
      }

      return _extends({}, descriptor, {
        value: function deprecationWrapper() {
          if (options.error) {
            throw new Error(message);
          } else {
            console.warn(message);
          }

          return descriptor.value.apply(this, arguments);
        }
      });
    }

    return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
  }

  function mixin(behavior) {
    var instanceKeys = Object.keys(behavior);

    function _mixin(possible) {
      var decorator = function decorator(target) {
        var resolvedTarget = typeof target === 'function' ? target.prototype : target;

        var i = instanceKeys.length;
        while (i--) {
          var property = instanceKeys[i];
          Object.defineProperty(resolvedTarget, property, {
            value: behavior[property],
            writable: true
          });
        }
      };

      return possible ? decorator(possible) : decorator;
    }

    return _mixin;
  }

  function alwaysValid() {
    return true;
  }
  function noCompose() {}

  function ensureProtocolOptions(options) {
    if (options === undefined) {
      options = {};
    } else if (typeof options === 'function') {
      options = {
        validate: options
      };
    }

    if (!options.validate) {
      options.validate = alwaysValid;
    }

    if (!options.compose) {
      options.compose = noCompose;
    }

    return options;
  }

  function createProtocolValidator(validate) {
    return function (target) {
      var result = validate(target);
      return result === true;
    };
  }

  function createProtocolAsserter(name, validate) {
    return function (target) {
      var result = validate(target);
      if (result !== true) {
        throw new Error(result || name + ' was not correctly implemented.');
      }
    };
  }

  function protocol(name, options) {
    options = ensureProtocolOptions(options);

    var result = function result(target) {
      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

      options.compose(resolvedTarget);
      result.assert(resolvedTarget);

      Object.defineProperty(resolvedTarget, 'protocol:' + name, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: true
      });
    };

    result.validate = createProtocolValidator(options.validate);
    result.assert = createProtocolAsserter(name, options.validate);

    return result;
  }

  protocol.create = function (name, options) {
    options = ensureProtocolOptions(options);
    var hidden = 'protocol:' + name;
    var result = function result(target) {
      var decorator = protocol(name, options);
      return target ? decorator(target) : decorator;
    };

    result.decorates = function (obj) {
      return obj[hidden] === true;
    };
    result.validate = createProtocolValidator(options.validate);
    result.assert = createProtocolAsserter(name, options.validate);

    return result;
  };
});
define('aurelia-dependency-injection',['exports', 'aurelia-metadata', 'aurelia-pal'], function (exports, _aureliaMetadata, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Container = exports.InvocationHandler = exports._emptyParameters = exports.SingletonRegistration = exports.TransientRegistration = exports.FactoryInvoker = exports.Factory = exports.StrategyResolver = exports.Parent = exports.Optional = exports.All = exports.Lazy = exports.resolver = undefined;
  exports.invoker = invoker;
  exports.factory = factory;
  exports.registration = registration;
  exports.transient = transient;
  exports.singleton = singleton;
  exports.autoinject = autoinject;
  exports.inject = inject;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class6, _classInvokers;

  var resolver = exports.resolver = _aureliaMetadata.protocol.create('aurelia:resolver', function (target) {
    if (!(typeof target.get === 'function')) {
      return 'Resolvers must implement: get(container: Container, key: any): any';
    }

    return true;
  });

  var Lazy = exports.Lazy = (_dec = resolver(), _dec(_class = function () {
    function Lazy(key) {
      _classCallCheck(this, Lazy);

      this._key = key;
    }

    Lazy.prototype.get = function get(container) {
      var _this = this;

      return function () {
        return container.get(_this._key);
      };
    };

    Lazy.of = function of(key) {
      return new Lazy(key);
    };

    return Lazy;
  }()) || _class);
  var All = exports.All = (_dec2 = resolver(), _dec2(_class2 = function () {
    function All(key) {
      _classCallCheck(this, All);

      this._key = key;
    }

    All.prototype.get = function get(container) {
      return container.getAll(this._key);
    };

    All.of = function of(key) {
      return new All(key);
    };

    return All;
  }()) || _class2);
  var Optional = exports.Optional = (_dec3 = resolver(), _dec3(_class3 = function () {
    function Optional(key) {
      var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      _classCallCheck(this, Optional);

      this._key = key;
      this._checkParent = checkParent;
    }

    Optional.prototype.get = function get(container) {
      if (container.hasResolver(this._key, this._checkParent)) {
        return container.get(this._key);
      }

      return null;
    };

    Optional.of = function of(key) {
      var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      return new Optional(key, checkParent);
    };

    return Optional;
  }()) || _class3);
  var Parent = exports.Parent = (_dec4 = resolver(), _dec4(_class4 = function () {
    function Parent(key) {
      _classCallCheck(this, Parent);

      this._key = key;
    }

    Parent.prototype.get = function get(container) {
      return container.parent ? container.parent.get(this._key) : null;
    };

    Parent.of = function of(key) {
      return new Parent(key);
    };

    return Parent;
  }()) || _class4);
  var StrategyResolver = exports.StrategyResolver = (_dec5 = resolver(), _dec5(_class5 = function () {
    function StrategyResolver(strategy, state) {
      _classCallCheck(this, StrategyResolver);

      this.strategy = strategy;
      this.state = state;
    }

    StrategyResolver.prototype.get = function get(container, key) {
      switch (this.strategy) {
        case 0:
          return this.state;
        case 1:
          var singleton = container.invoke(this.state);
          this.state = singleton;
          this.strategy = 0;
          return singleton;
        case 2:
          return container.invoke(this.state);
        case 3:
          return this.state(container, key, this);
        case 4:
          return this.state[0].get(container, key);
        case 5:
          return container.get(this.state);
        default:
          throw new Error('Invalid strategy: ' + this.strategy);
      }
    };

    return StrategyResolver;
  }()) || _class5);
  var Factory = exports.Factory = (_dec6 = resolver(), _dec6(_class6 = function () {
    function Factory(key) {
      _classCallCheck(this, Factory);

      this._key = key;
    }

    Factory.prototype.get = function get(container) {
      var _this2 = this;

      return function () {
        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }

        return container.invoke(_this2._key, rest);
      };
    };

    Factory.of = function of(key) {
      return new Factory(key);
    };

    return Factory;
  }()) || _class6);
  function invoker(value) {
    return function (target) {
      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.invoker, value, target);
    };
  }

  function factory(potentialTarget) {
    var deco = function deco(target) {
      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.invoker, FactoryInvoker.instance, target);
    };

    return potentialTarget ? deco(potentialTarget) : deco;
  }

  var FactoryInvoker = exports.FactoryInvoker = function () {
    function FactoryInvoker() {
      _classCallCheck(this, FactoryInvoker);
    }

    FactoryInvoker.prototype.invoke = function invoke(container, fn, dependencies) {
      var i = dependencies.length;
      var args = new Array(i);

      while (i--) {
        args[i] = container.get(dependencies[i]);
      }

      return fn.apply(undefined, args);
    };

    FactoryInvoker.prototype.invokeWithDynamicDependencies = function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
      var i = staticDependencies.length;
      var args = new Array(i);

      while (i--) {
        args[i] = container.get(staticDependencies[i]);
      }

      if (dynamicDependencies !== undefined) {
        args = args.concat(dynamicDependencies);
      }

      return fn.apply(undefined, args);
    };

    return FactoryInvoker;
  }();

  FactoryInvoker.instance = new FactoryInvoker();

  function registration(value) {
    return function (target) {
      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.registration, value, target);
    };
  }

  function transient(key) {
    return registration(new TransientRegistration(key));
  }

  function singleton(keyOrRegisterInChild) {
    var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
  }

  var TransientRegistration = exports.TransientRegistration = function () {
    function TransientRegistration(key) {
      _classCallCheck(this, TransientRegistration);

      this._key = key;
    }

    TransientRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
      var resolver = new StrategyResolver(2, fn);
      container.registerResolver(this._key || key, resolver);
      return resolver;
    };

    return TransientRegistration;
  }();

  var SingletonRegistration = exports.SingletonRegistration = function () {
    function SingletonRegistration(keyOrRegisterInChild) {
      var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      _classCallCheck(this, SingletonRegistration);

      if (typeof keyOrRegisterInChild === 'boolean') {
        this._registerInChild = keyOrRegisterInChild;
      } else {
        this._key = keyOrRegisterInChild;
        this._registerInChild = registerInChild;
      }
    }

    SingletonRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
      var resolver = new StrategyResolver(1, fn);

      if (this._registerInChild) {
        container.registerResolver(this._key || key, resolver);
      } else {
        container.root.registerResolver(this._key || key, resolver);
      }

      return resolver;
    };

    return SingletonRegistration;
  }();

  var badKeyError = 'key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?';
  var _emptyParameters = exports._emptyParameters = Object.freeze([]);

  _aureliaMetadata.metadata.registration = 'aurelia:registration';
  _aureliaMetadata.metadata.invoker = 'aurelia:invoker';

  var resolverDecorates = resolver.decorates;

  var InvocationHandler = exports.InvocationHandler = function () {
    function InvocationHandler(fn, invoker, dependencies) {
      _classCallCheck(this, InvocationHandler);

      this.fn = fn;
      this.invoker = invoker;
      this.dependencies = dependencies;
    }

    InvocationHandler.prototype.invoke = function invoke(container, dynamicDependencies) {
      return dynamicDependencies !== undefined ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies) : this.invoker.invoke(container, this.fn, this.dependencies);
    };

    return InvocationHandler;
  }();

  function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
    var i = staticDependencies.length;
    var args = new Array(i);

    while (i--) {
      args[i] = container.get(staticDependencies[i]);
    }

    if (dynamicDependencies !== undefined) {
      args = args.concat(dynamicDependencies);
    }

    return Reflect.construct(fn, args);
  }

  var classInvokers = (_classInvokers = {}, _classInvokers[0] = {
    invoke: function invoke(container, Type) {
      return new Type();
    },

    invokeWithDynamicDependencies: invokeWithDynamicDependencies
  }, _classInvokers[1] = {
    invoke: function invoke(container, Type, deps) {
      return new Type(container.get(deps[0]));
    },

    invokeWithDynamicDependencies: invokeWithDynamicDependencies
  }, _classInvokers[2] = {
    invoke: function invoke(container, Type, deps) {
      return new Type(container.get(deps[0]), container.get(deps[1]));
    },

    invokeWithDynamicDependencies: invokeWithDynamicDependencies
  }, _classInvokers[3] = {
    invoke: function invoke(container, Type, deps) {
      return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]));
    },

    invokeWithDynamicDependencies: invokeWithDynamicDependencies
  }, _classInvokers[4] = {
    invoke: function invoke(container, Type, deps) {
      return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]));
    },

    invokeWithDynamicDependencies: invokeWithDynamicDependencies
  }, _classInvokers[5] = {
    invoke: function invoke(container, Type, deps) {
      return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]), container.get(deps[4]));
    },

    invokeWithDynamicDependencies: invokeWithDynamicDependencies
  }, _classInvokers.fallback = {
    invoke: invokeWithDynamicDependencies,
    invokeWithDynamicDependencies: invokeWithDynamicDependencies
  }, _classInvokers);

  function getDependencies(f) {
    if (!f.hasOwnProperty('inject')) {
      return [];
    }

    if (typeof f.inject === 'function') {
      return f.inject();
    }

    return f.inject;
  }

  var Container = exports.Container = function () {
    function Container(configuration) {
      _classCallCheck(this, Container);

      if (configuration === undefined) {
        configuration = {};
      }

      this._configuration = configuration;
      this._onHandlerCreated = configuration.onHandlerCreated;
      this._handlers = configuration.handlers || (configuration.handlers = new Map());
      this._resolvers = new Map();
      this.root = this;
      this.parent = null;
    }

    Container.prototype.makeGlobal = function makeGlobal() {
      Container.instance = this;
      return this;
    };

    Container.prototype.setHandlerCreatedCallback = function setHandlerCreatedCallback(onHandlerCreated) {
      this._onHandlerCreated = onHandlerCreated;
      this._configuration.onHandlerCreated = onHandlerCreated;
    };

    Container.prototype.registerInstance = function registerInstance(key, instance) {
      this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
    };

    Container.prototype.registerSingleton = function registerSingleton(key, fn) {
      this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
    };

    Container.prototype.registerTransient = function registerTransient(key, fn) {
      this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
    };

    Container.prototype.registerHandler = function registerHandler(key, handler) {
      this.registerResolver(key, new StrategyResolver(3, handler));
    };

    Container.prototype.registerAlias = function registerAlias(originalKey, aliasKey) {
      this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
    };

    Container.prototype.registerResolver = function registerResolver(key, resolver) {
      if (key === null || key === undefined) {
        throw new Error(badKeyError);
      }

      var allResolvers = this._resolvers;
      var result = allResolvers.get(key);

      if (result === undefined) {
        allResolvers.set(key, resolver);
      } else if (result.strategy === 4) {
        result.state.push(resolver);
      } else {
        allResolvers.set(key, new StrategyResolver(4, [result, resolver]));
      }
    };

    Container.prototype.autoRegister = function autoRegister(fn, key) {
      var resolver = void 0;

      if (typeof fn === 'function') {
        var _registration = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.registration, fn);

        if (_registration === undefined) {
          resolver = new StrategyResolver(1, fn);
          this.registerResolver(key === undefined ? fn : key, resolver);
        } else {
          resolver = _registration.registerResolver(this, key === undefined ? fn : key, fn);
        }
      } else {
        resolver = new StrategyResolver(0, fn);
        this.registerResolver(key === undefined ? fn : key, resolver);
      }

      return resolver;
    };

    Container.prototype.autoRegisterAll = function autoRegisterAll(fns) {
      var i = fns.length;
      while (i--) {
        this.autoRegister(fns[i]);
      }
    };

    Container.prototype.unregister = function unregister(key) {
      this._resolvers.delete(key);
    };

    Container.prototype.hasResolver = function hasResolver(key) {
      var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (key === null || key === undefined) {
        throw new Error(badKeyError);
      }

      return this._resolvers.has(key) || checkParent && this.parent !== null && this.parent.hasResolver(key, checkParent);
    };

    Container.prototype.get = function get(key) {
      if (key === null || key === undefined) {
        throw new Error(badKeyError);
      }

      if (key === Container) {
        return this;
      }

      if (resolverDecorates(key)) {
        return key.get(this, key);
      }

      var resolver = this._resolvers.get(key);

      if (resolver === undefined) {
        if (this.parent === null) {
          return this.autoRegister(key).get(this, key);
        }

        return this.parent._get(key);
      }

      return resolver.get(this, key);
    };

    Container.prototype._get = function _get(key) {
      var resolver = this._resolvers.get(key);

      if (resolver === undefined) {
        if (this.parent === null) {
          return this.autoRegister(key).get(this, key);
        }

        return this.parent._get(key);
      }

      return resolver.get(this, key);
    };

    Container.prototype.getAll = function getAll(key) {
      if (key === null || key === undefined) {
        throw new Error(badKeyError);
      }

      var resolver = this._resolvers.get(key);

      if (resolver === undefined) {
        if (this.parent === null) {
          return _emptyParameters;
        }

        return this.parent.getAll(key);
      }

      if (resolver.strategy === 4) {
        var state = resolver.state;
        var i = state.length;
        var results = new Array(i);

        while (i--) {
          results[i] = state[i].get(this, key);
        }

        return results;
      }

      return [resolver.get(this, key)];
    };

    Container.prototype.createChild = function createChild() {
      var child = new Container(this._configuration);
      child.root = this.root;
      child.parent = this;
      return child;
    };

    Container.prototype.invoke = function invoke(fn, dynamicDependencies) {
      try {
        var _handler = this._handlers.get(fn);

        if (_handler === undefined) {
          _handler = this._createInvocationHandler(fn);
          this._handlers.set(fn, _handler);
        }

        return _handler.invoke(this, dynamicDependencies);
      } catch (e) {
        throw new _aureliaPal.AggregateError('Error invoking ' + fn.name + '. Check the inner error for details.', e, true);
      }
    };

    Container.prototype._createInvocationHandler = function _createInvocationHandler(fn) {
      var dependencies = void 0;

      if (fn.inject === undefined) {
        dependencies = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, fn) || _emptyParameters;
      } else {
        dependencies = [];
        var ctor = fn;
        while (typeof ctor === 'function') {
          var _dependencies;

          (_dependencies = dependencies).push.apply(_dependencies, getDependencies(ctor));
          ctor = Object.getPrototypeOf(ctor);
        }
      }

      var invoker = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.invoker, fn) || classInvokers[dependencies.length] || classInvokers.fallback;

      var handler = new InvocationHandler(fn, invoker, dependencies);
      return this._onHandlerCreated !== undefined ? this._onHandlerCreated(handler) : handler;
    };

    return Container;
  }();

  function autoinject(potentialTarget) {
    var deco = function deco(target) {
      target.inject = _aureliaMetadata.metadata.getOwn(_aureliaMetadata.metadata.paramTypes, target) || _emptyParameters;
    };

    return potentialTarget ? deco(potentialTarget) : deco;
  }

  function inject() {
    for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      rest[_key2] = arguments[_key2];
    }

    return function (target, key, descriptor) {
      if (descriptor) {
        var _fn = descriptor.value;
        _fn.inject = rest;
      } else {
        target.inject = rest;
      }
    };
  }
});
define('aurelia-task-queue',['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TaskQueue = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var hasSetImmediate = typeof setImmediate === 'function';

  function makeRequestFlushFromMutationObserver(flush) {
    var toggle = 1;
    var observer = _aureliaPal.DOM.createMutationObserver(flush);
    var node = _aureliaPal.DOM.createTextNode('');
    observer.observe(node, { characterData: true });
    return function requestFlush() {
      toggle = -toggle;
      node.data = toggle;
    };
  }

  function makeRequestFlushFromTimer(flush) {
    return function requestFlush() {
      var timeoutHandle = setTimeout(handleFlushTimer, 0);

      var intervalHandle = setInterval(handleFlushTimer, 50);
      function handleFlushTimer() {
        clearTimeout(timeoutHandle);
        clearInterval(intervalHandle);
        flush();
      }
    };
  }

  function onError(error, task) {
    if ('onError' in task) {
      task.onError(error);
    } else if (hasSetImmediate) {
      setImmediate(function () {
        throw error;
      });
    } else {
      setTimeout(function () {
        throw error;
      }, 0);
    }
  }

  var TaskQueue = exports.TaskQueue = function () {
    function TaskQueue() {
      var _this = this;

      _classCallCheck(this, TaskQueue);

      this.microTaskQueue = [];
      this.microTaskQueueCapacity = 1024;
      this.taskQueue = [];

      if (_aureliaPal.FEATURE.mutationObserver) {
        this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
          return _this.flushMicroTaskQueue();
        });
      } else {
        this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
          return _this.flushMicroTaskQueue();
        });
      }

      this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
        return _this.flushTaskQueue();
      });
    }

    TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
      if (this.microTaskQueue.length < 1) {
        this.requestFlushMicroTaskQueue();
      }

      this.microTaskQueue.push(task);
    };

    TaskQueue.prototype.queueTask = function queueTask(task) {
      if (this.taskQueue.length < 1) {
        this.requestFlushTaskQueue();
      }

      this.taskQueue.push(task);
    };

    TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
      var queue = this.taskQueue;
      var index = 0;
      var task = void 0;

      this.taskQueue = [];

      try {
        while (index < queue.length) {
          task = queue[index];
          task.call();
          index++;
        }
      } catch (error) {
        onError(error, task);
      }
    };

    TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
      var queue = this.microTaskQueue;
      var capacity = this.microTaskQueueCapacity;
      var index = 0;
      var task = void 0;

      try {
        while (index < queue.length) {
          task = queue[index];
          task.call();
          index++;

          if (index > capacity) {
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
              queue[scan] = queue[scan + index];
            }

            queue.length -= index;
            index = 0;
          }
        }
      } catch (error) {
        onError(error, task);
      }

      queue.length = 0;
    };

    return TaskQueue;
  }();
});
define('aurelia-binding',['exports', 'aurelia-pal', 'aurelia-task-queue', 'aurelia-metadata'], function (exports, _aureliaPal, _aureliaTaskQueue, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSetObserver = exports.BindingEngine = exports.NameExpression = exports.Listener = exports.ListenerExpression = exports.BindingBehaviorResource = exports.ValueConverterResource = exports.Call = exports.CallExpression = exports.Binding = exports.BindingExpression = exports.ObjectObservationAdapter = exports.ObserverLocator = exports.SVGAnalyzer = exports.presentationAttributes = exports.presentationElements = exports.elements = exports.ComputedExpression = exports.ClassObserver = exports.SelectValueObserver = exports.CheckedObserver = exports.ValueAttributeObserver = exports.StyleObserver = exports.DataAttributeObserver = exports.dataAttributeAccessor = exports.XLinkAttributeObserver = exports.SetterObserver = exports.PrimitiveObserver = exports.propertyAccessor = exports.DirtyCheckProperty = exports.DirtyChecker = exports.EventManager = exports.getMapObserver = exports.ParserImplementation = exports.Parser = exports.Scanner = exports.Lexer = exports.Token = exports.bindingMode = exports.ExpressionCloner = exports.Unparser = exports.LiteralObject = exports.LiteralArray = exports.LiteralString = exports.LiteralPrimitive = exports.PrefixNot = exports.Binary = exports.CallFunction = exports.CallMember = exports.CallScope = exports.AccessKeyed = exports.AccessMember = exports.AccessScope = exports.AccessThis = exports.Conditional = exports.Assign = exports.ValueConverter = exports.BindingBehavior = exports.Chain = exports.Expression = exports.getArrayObserver = exports.CollectionLengthObserver = exports.ModifyCollectionObserver = exports.ExpressionObserver = exports.sourceContext = undefined;
  exports.camelCase = camelCase;
  exports.createOverrideContext = createOverrideContext;
  exports.getContextFor = getContextFor;
  exports.createScopeForTest = createScopeForTest;
  exports.connectable = connectable;
  exports.enqueueBindingConnect = enqueueBindingConnect;
  exports.subscriberCollection = subscriberCollection;
  exports.calcSplices = calcSplices;
  exports.mergeSplice = mergeSplice;
  exports.projectArraySplices = projectArraySplices;
  exports.getChangeRecords = getChangeRecords;
  exports.cloneExpression = cloneExpression;
  exports.hasDeclaredDependencies = hasDeclaredDependencies;
  exports.declarePropertyDependencies = declarePropertyDependencies;
  exports.computedFrom = computedFrom;
  exports.createComputedObserver = createComputedObserver;
  exports.valueConverter = valueConverter;
  exports.bindingBehavior = bindingBehavior;
  exports.observable = observable;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class, _dec3, _class2, _dec4, _class3, _dec5, _class5, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _class11, _temp, _dec10, _class12, _class13, _temp2;

  function camelCase(name) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  function createOverrideContext(bindingContext, parentOverrideContext) {
    return {
      bindingContext: bindingContext,
      parentOverrideContext: parentOverrideContext || null
    };
  }

  function getContextFor(name, scope, ancestor) {
    var oc = scope.overrideContext;

    if (ancestor) {
      while (ancestor && oc) {
        ancestor--;
        oc = oc.parentOverrideContext;
      }
      if (ancestor || !oc) {
        return undefined;
      }
      return name in oc ? oc : oc.bindingContext;
    }

    while (oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext)) {
      oc = oc.parentOverrideContext;
    }
    if (oc) {
      return name in oc ? oc : oc.bindingContext;
    }

    return scope.bindingContext || scope.overrideContext;
  }

  function createScopeForTest(bindingContext, parentBindingContext) {
    if (parentBindingContext) {
      return {
        bindingContext: bindingContext,
        overrideContext: createOverrideContext(bindingContext, createOverrideContext(parentBindingContext))
      };
    }
    return {
      bindingContext: bindingContext,
      overrideContext: createOverrideContext(bindingContext)
    };
  }

  var sourceContext = exports.sourceContext = 'Binding:source';
  var slotNames = [];
  var versionSlotNames = [];

  for (var i = 0; i < 100; i++) {
    slotNames.push('_observer' + i);
    versionSlotNames.push('_observerVersion' + i);
  }

  function addObserver(observer) {
    var observerSlots = this._observerSlots === undefined ? 0 : this._observerSlots;
    var i = observerSlots;
    while (i-- && this[slotNames[i]] !== observer) {}

    if (i === -1) {
      i = 0;
      while (this[slotNames[i]]) {
        i++;
      }
      this[slotNames[i]] = observer;
      observer.subscribe(sourceContext, this);

      if (i === observerSlots) {
        this._observerSlots = i + 1;
      }
    }

    if (this._version === undefined) {
      this._version = 0;
    }
    this[versionSlotNames[i]] = this._version;
  }

  function observeProperty(obj, propertyName) {
    var observer = this.observerLocator.getObserver(obj, propertyName);
    addObserver.call(this, observer);
  }

  function observeArray(array) {
    var observer = this.observerLocator.getArrayObserver(array);
    addObserver.call(this, observer);
  }

  function unobserve(all) {
    var i = this._observerSlots;
    while (i--) {
      if (all || this[versionSlotNames[i]] !== this._version) {
        var observer = this[slotNames[i]];
        this[slotNames[i]] = null;
        if (observer) {
          observer.unsubscribe(sourceContext, this);
        }
      }
    }
  }

  function connectable() {
    return function (target) {
      target.prototype.observeProperty = observeProperty;
      target.prototype.observeArray = observeArray;
      target.prototype.unobserve = unobserve;
      target.prototype.addObserver = addObserver;
    };
  }

  var bindings = new Map();
  var minimumImmediate = 100;
  var frameBudget = 15;

  var isFlushRequested = false;
  var immediate = 0;

  function flush(animationFrameStart) {
    var i = 0;
    var keys = bindings.keys();
    var item = void 0;

    while (item = keys.next()) {
      if (item.done) {
        break;
      }

      var binding = item.value;
      bindings.delete(binding);
      binding.connect(true);
      i++;

      if (i % 100 === 0 && _aureliaPal.PLATFORM.performance.now() - animationFrameStart > frameBudget) {
        break;
      }
    }

    if (bindings.size) {
      _aureliaPal.PLATFORM.requestAnimationFrame(flush);
    } else {
      isFlushRequested = false;
      immediate = 0;
    }
  }

  function enqueueBindingConnect(binding) {
    if (immediate < minimumImmediate) {
      immediate++;
      binding.connect(false);
    } else {
      bindings.set(binding);
    }
    if (!isFlushRequested) {
      isFlushRequested = true;
      _aureliaPal.PLATFORM.requestAnimationFrame(flush);
    }
  }

  function addSubscriber(context, callable) {
    if (this.hasSubscriber(context, callable)) {
      return false;
    }
    if (!this._context0) {
      this._context0 = context;
      this._callable0 = callable;
      return true;
    }
    if (!this._context1) {
      this._context1 = context;
      this._callable1 = callable;
      return true;
    }
    if (!this._context2) {
      this._context2 = context;
      this._callable2 = callable;
      return true;
    }
    if (!this._contextsRest) {
      this._contextsRest = [context];
      this._callablesRest = [callable];
      return true;
    }
    this._contextsRest.push(context);
    this._callablesRest.push(callable);
    return true;
  }

  function removeSubscriber(context, callable) {
    if (this._context0 === context && this._callable0 === callable) {
      this._context0 = null;
      this._callable0 = null;
      return true;
    }
    if (this._context1 === context && this._callable1 === callable) {
      this._context1 = null;
      this._callable1 = null;
      return true;
    }
    if (this._context2 === context && this._callable2 === callable) {
      this._context2 = null;
      this._callable2 = null;
      return true;
    }
    var rest = this._contextsRest;
    var index = void 0;
    if (!rest || !rest.length || (index = rest.indexOf(context)) === -1 || this._callablesRest[index] !== callable) {
      return false;
    }
    rest.splice(index, 1);
    this._callablesRest.splice(index, 1);
    return true;
  }

  var arrayPool1 = [];
  var arrayPool2 = [];
  var poolUtilization = [];

  function callSubscribers(newValue, oldValue) {
    var context0 = this._context0;
    var callable0 = this._callable0;
    var context1 = this._context1;
    var callable1 = this._callable1;
    var context2 = this._context2;
    var callable2 = this._callable2;
    var length = this._contextsRest ? this._contextsRest.length : 0;
    var contextsRest = void 0;
    var callablesRest = void 0;
    var poolIndex = void 0;
    var i = void 0;
    if (length) {
      poolIndex = poolUtilization.length;
      while (poolIndex-- && poolUtilization[poolIndex]) {}
      if (poolIndex < 0) {
        poolIndex = poolUtilization.length;
        contextsRest = [];
        callablesRest = [];
        poolUtilization.push(true);
        arrayPool1.push(contextsRest);
        arrayPool2.push(callablesRest);
      } else {
        poolUtilization[poolIndex] = true;
        contextsRest = arrayPool1[poolIndex];
        callablesRest = arrayPool2[poolIndex];
      }

      i = length;
      while (i--) {
        contextsRest[i] = this._contextsRest[i];
        callablesRest[i] = this._callablesRest[i];
      }
    }

    if (context0) {
      if (callable0) {
        callable0.call(context0, newValue, oldValue);
      } else {
        context0(newValue, oldValue);
      }
    }
    if (context1) {
      if (callable1) {
        callable1.call(context1, newValue, oldValue);
      } else {
        context1(newValue, oldValue);
      }
    }
    if (context2) {
      if (callable2) {
        callable2.call(context2, newValue, oldValue);
      } else {
        context2(newValue, oldValue);
      }
    }
    if (length) {
      for (i = 0; i < length; i++) {
        var callable = callablesRest[i];
        var context = contextsRest[i];
        if (callable) {
          callable.call(context, newValue, oldValue);
        } else {
          context(newValue, oldValue);
        }
        contextsRest[i] = null;
        callablesRest[i] = null;
      }
      poolUtilization[poolIndex] = false;
    }
  }

  function hasSubscribers() {
    return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length);
  }

  function hasSubscriber(context, callable) {
    var has = this._context0 === context && this._callable0 === callable || this._context1 === context && this._callable1 === callable || this._context2 === context && this._callable2 === callable;
    if (has) {
      return true;
    }
    var index = void 0;
    var contexts = this._contextsRest;
    if (!contexts || (index = contexts.length) === 0) {
      return false;
    }
    var callables = this._callablesRest;
    while (index--) {
      if (contexts[index] === context && callables[index] === callable) {
        return true;
      }
    }
    return false;
  }

  function subscriberCollection() {
    return function (target) {
      target.prototype.addSubscriber = addSubscriber;
      target.prototype.removeSubscriber = removeSubscriber;
      target.prototype.callSubscribers = callSubscribers;
      target.prototype.hasSubscribers = hasSubscribers;
      target.prototype.hasSubscriber = hasSubscriber;
    };
  }

  var ExpressionObserver = exports.ExpressionObserver = (_dec = connectable(), _dec2 = subscriberCollection(), _dec(_class = _dec2(_class = function () {
    function ExpressionObserver(scope, expression, observerLocator, lookupFunctions) {
      _classCallCheck(this, ExpressionObserver);

      this.scope = scope;
      this.expression = expression;
      this.observerLocator = observerLocator;
      this.lookupFunctions = lookupFunctions;
    }

    ExpressionObserver.prototype.getValue = function getValue() {
      return this.expression.evaluate(this.scope, this.lookupFunctions);
    };

    ExpressionObserver.prototype.setValue = function setValue(newValue) {
      this.expression.assign(this.scope, newValue);
    };

    ExpressionObserver.prototype.subscribe = function subscribe(context, callable) {
      var _this = this;

      if (!this.hasSubscribers()) {
        this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions);
        this.expression.connect(this, this.scope);
      }
      this.addSubscriber(context, callable);
      if (arguments.length === 1 && context instanceof Function) {
        return {
          dispose: function dispose() {
            _this.unsubscribe(context, callable);
          }
        };
      }
    };

    ExpressionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
      if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
        this.unobserve(true);
        this.oldValue = undefined;
      }
    };

    ExpressionObserver.prototype.call = function call() {
      var newValue = this.expression.evaluate(this.scope, this.lookupFunctions);
      var oldValue = this.oldValue;
      if (newValue !== oldValue) {
        this.oldValue = newValue;
        this.callSubscribers(newValue, oldValue);
      }
      this._version++;
      this.expression.connect(this, this.scope);
      this.unobserve(false);
    };

    return ExpressionObserver;
  }()) || _class) || _class);


  function isIndex(s) {
    return +s === s >>> 0;
  }

  function toNumber(s) {
    return +s;
  }

  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount
    };
  }

  var EDIT_LEAVE = 0;
  var EDIT_UPDATE = 1;
  var EDIT_ADD = 2;
  var EDIT_DELETE = 3;

  function ArraySplice() {}

  ArraySplice.prototype = {
    calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
      var rowCount = oldEnd - oldStart + 1;
      var columnCount = currentEnd - currentStart + 1;
      var distances = new Array(rowCount);
      var i, j, north, west;

      for (i = 0; i < rowCount; ++i) {
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
      }

      for (j = 0; j < columnCount; ++j) {
        distances[0][j] = j;
      }

      for (i = 1; i < rowCount; ++i) {
        for (j = 1; j < columnCount; ++j) {
          if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1])) distances[i][j] = distances[i - 1][j - 1];else {
            north = distances[i - 1][j] + 1;
            west = distances[i][j - 1] + 1;
            distances[i][j] = north < west ? north : west;
          }
        }
      }

      return distances;
    },

    spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
      var i = distances.length - 1;
      var j = distances[0].length - 1;
      var current = distances[i][j];
      var edits = [];
      while (i > 0 || j > 0) {
        if (i == 0) {
          edits.push(EDIT_ADD);
          j--;
          continue;
        }
        if (j == 0) {
          edits.push(EDIT_DELETE);
          i--;
          continue;
        }
        var northWest = distances[i - 1][j - 1];
        var west = distances[i - 1][j];
        var north = distances[i][j - 1];

        var min;
        if (west < north) min = west < northWest ? west : northWest;else min = north < northWest ? north : northWest;

        if (min == northWest) {
          if (northWest == current) {
            edits.push(EDIT_LEAVE);
          } else {
            edits.push(EDIT_UPDATE);
            current = northWest;
          }
          i--;
          j--;
        } else if (min == west) {
          edits.push(EDIT_DELETE);
          i--;
          current = west;
        } else {
          edits.push(EDIT_ADD);
          j--;
          current = north;
        }
      }

      edits.reverse();
      return edits;
    },

    calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
      var prefixCount = 0;
      var suffixCount = 0;

      var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
      if (currentStart == 0 && oldStart == 0) prefixCount = this.sharedPrefix(current, old, minLength);

      if (currentEnd == current.length && oldEnd == old.length) suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);

      currentStart += prefixCount;
      oldStart += prefixCount;
      currentEnd -= suffixCount;
      oldEnd -= suffixCount;

      if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];

      if (currentStart == currentEnd) {
        var splice = newSplice(currentStart, [], 0);
        while (oldStart < oldEnd) {
          splice.removed.push(old[oldStart++]);
        }return [splice];
      } else if (oldStart == oldEnd) return [newSplice(currentStart, [], currentEnd - currentStart)];

      var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

      var splice = undefined;
      var splices = [];
      var index = currentStart;
      var oldIndex = oldStart;
      for (var i = 0; i < ops.length; ++i) {
        switch (ops[i]) {
          case EDIT_LEAVE:
            if (splice) {
              splices.push(splice);
              splice = undefined;
            }

            index++;
            oldIndex++;
            break;
          case EDIT_UPDATE:
            if (!splice) splice = newSplice(index, [], 0);

            splice.addedCount++;
            index++;

            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
          case EDIT_ADD:
            if (!splice) splice = newSplice(index, [], 0);

            splice.addedCount++;
            index++;
            break;
          case EDIT_DELETE:
            if (!splice) splice = newSplice(index, [], 0);

            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
        }
      }

      if (splice) {
        splices.push(splice);
      }
      return splices;
    },

    sharedPrefix: function sharedPrefix(current, old, searchLength) {
      for (var i = 0; i < searchLength; ++i) {
        if (!this.equals(current[i], old[i])) return i;
      }return searchLength;
    },

    sharedSuffix: function sharedSuffix(current, old, searchLength) {
      var index1 = current.length;
      var index2 = old.length;
      var count = 0;
      while (count < searchLength && this.equals(current[--index1], old[--index2])) {
        count++;
      }return count;
    },

    calculateSplices: function calculateSplices(current, previous) {
      return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
    },

    equals: function equals(currentValue, previousValue) {
      return currentValue === previousValue;
    }
  };

  var arraySplice = new ArraySplice();

  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
  }

  function intersect(start1, end1, start2, end2) {
    if (end1 < start2 || end2 < start1) return -1;

    if (end1 == start2 || end2 == start1) return 0;

    if (start1 < start2) {
      if (end1 < end2) return end1 - start2;else return end2 - start2;
    } else {
        if (end2 < end1) return end2 - start1;else return end1 - start1;
      }
  }

  function mergeSplice(splices, index, removed, addedCount) {
    var splice = newSplice(index, removed, addedCount);

    var inserted = false;
    var insertionOffset = 0;

    for (var i = 0; i < splices.length; i++) {
      var current = splices[i];
      current.index += insertionOffset;

      if (inserted) continue;

      var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);

      if (intersectCount >= 0) {

        splices.splice(i, 1);
        i--;

        insertionOffset -= current.addedCount - current.removed.length;

        splice.addedCount += current.addedCount - intersectCount;
        var deleteCount = splice.removed.length + current.removed.length - intersectCount;

        if (!splice.addedCount && !deleteCount) {
          inserted = true;
        } else {
          var removed = current.removed;

          if (splice.index < current.index) {
            var prepend = splice.removed.slice(0, current.index - splice.index);
            Array.prototype.push.apply(prepend, removed);
            removed = prepend;
          }

          if (splice.index + splice.removed.length > current.index + current.addedCount) {
            var append = splice.removed.slice(current.index + current.addedCount - splice.index);
            Array.prototype.push.apply(removed, append);
          }

          splice.removed = removed;
          if (current.index < splice.index) {
            splice.index = current.index;
          }
        }
      } else if (splice.index < current.index) {

        inserted = true;

        splices.splice(i, 0, splice);
        i++;

        var offset = splice.addedCount - splice.removed.length;
        current.index += offset;
        insertionOffset += offset;
      }
    }

    if (!inserted) splices.push(splice);
  }

  function createInitialSplices(array, changeRecords) {
    var splices = [];

    for (var i = 0; i < changeRecords.length; i++) {
      var record = changeRecords[i];
      switch (record.type) {
        case 'splice':
          mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
          break;
        case 'add':
        case 'update':
        case 'delete':
          if (!isIndex(record.name)) continue;
          var index = toNumber(record.name);
          if (index < 0) continue;
          mergeSplice(splices, index, [record.oldValue], record.type === 'delete' ? 0 : 1);
          break;
        default:
          console.error('Unexpected record type: ' + JSON.stringify(record));
          break;
      }
    }

    return splices;
  }

  function projectArraySplices(array, changeRecords) {
    var splices = [];

    createInitialSplices(array, changeRecords).forEach(function (splice) {
      if (splice.addedCount == 1 && splice.removed.length == 1) {
        if (splice.removed[0] !== array[splice.index]) splices.push(splice);

        return;
      };

      splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    });

    return splices;
  }

  function newRecord(type, object, key, oldValue) {
    return {
      type: type,
      object: object,
      key: key,
      oldValue: oldValue
    };
  }

  function getChangeRecords(map) {
    var entries = new Array(map.size);
    var keys = map.keys();
    var i = 0;
    var item = void 0;

    while (item = keys.next()) {
      if (item.done) {
        break;
      }

      entries[i] = newRecord('added', map, item.value);
      i++;
    }

    return entries;
  }

  var ModifyCollectionObserver = exports.ModifyCollectionObserver = (_dec3 = subscriberCollection(), _dec3(_class2 = function () {
    function ModifyCollectionObserver(taskQueue, collection) {
      _classCallCheck(this, ModifyCollectionObserver);

      this.taskQueue = taskQueue;
      this.queued = false;
      this.changeRecords = null;
      this.oldCollection = null;
      this.collection = collection;
      this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
    }

    ModifyCollectionObserver.prototype.subscribe = function subscribe(context, callable) {
      this.addSubscriber(context, callable);
    };

    ModifyCollectionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
      this.removeSubscriber(context, callable);
    };

    ModifyCollectionObserver.prototype.addChangeRecord = function addChangeRecord(changeRecord) {
      if (!this.hasSubscribers() && !this.lengthObserver) {
        return;
      }

      if (changeRecord.type === 'splice') {
        var index = changeRecord.index;
        var arrayLength = changeRecord.object.length;
        if (index > arrayLength) {
          index = arrayLength - changeRecord.addedCount;
        } else if (index < 0) {
          index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
        }
        if (index < 0) {
          index = 0;
        }
        changeRecord.index = index;
      }

      if (this.changeRecords === null) {
        this.changeRecords = [changeRecord];
      } else {
        this.changeRecords.push(changeRecord);
      }

      if (!this.queued) {
        this.queued = true;
        this.taskQueue.queueMicroTask(this);
      }
    };

    ModifyCollectionObserver.prototype.flushChangeRecords = function flushChangeRecords() {
      if (this.changeRecords && this.changeRecords.length || this.oldCollection) {
        this.call();
      }
    };

    ModifyCollectionObserver.prototype.reset = function reset(oldCollection) {
      this.oldCollection = oldCollection;

      if (this.hasSubscribers() && !this.queued) {
        this.queued = true;
        this.taskQueue.queueMicroTask(this);
      }
    };

    ModifyCollectionObserver.prototype.getLengthObserver = function getLengthObserver() {
      return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
    };

    ModifyCollectionObserver.prototype.call = function call() {
      var changeRecords = this.changeRecords;
      var oldCollection = this.oldCollection;
      var records = void 0;

      this.queued = false;
      this.changeRecords = [];
      this.oldCollection = null;

      if (this.hasSubscribers()) {
        if (oldCollection) {
          if (this.collection instanceof Map || this.collection instanceof Set) {
            records = getChangeRecords(oldCollection);
          } else {
            records = calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length);
          }
        } else {
          if (this.collection instanceof Map || this.collection instanceof Set) {
            records = changeRecords;
          } else {
            records = projectArraySplices(this.collection, changeRecords);
          }
        }

        this.callSubscribers(records);
      }

      if (this.lengthObserver) {
        this.lengthObserver.call(this.collection[this.lengthPropertyName]);
      }
    };

    return ModifyCollectionObserver;
  }()) || _class2);
  var CollectionLengthObserver = exports.CollectionLengthObserver = (_dec4 = subscriberCollection(), _dec4(_class3 = function () {
    function CollectionLengthObserver(collection) {
      _classCallCheck(this, CollectionLengthObserver);

      this.collection = collection;
      this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
      this.currentValue = collection[this.lengthPropertyName];
    }

    CollectionLengthObserver.prototype.getValue = function getValue() {
      return this.collection[this.lengthPropertyName];
    };

    CollectionLengthObserver.prototype.setValue = function setValue(newValue) {
      this.collection[this.lengthPropertyName] = newValue;
    };

    CollectionLengthObserver.prototype.subscribe = function subscribe(context, callable) {
      this.addSubscriber(context, callable);
    };

    CollectionLengthObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
      this.removeSubscriber(context, callable);
    };

    CollectionLengthObserver.prototype.call = function call(newValue) {
      var oldValue = this.currentValue;
      this.callSubscribers(newValue, oldValue);
      this.currentValue = newValue;
    };

    return CollectionLengthObserver;
  }()) || _class3);


  var pop = Array.prototype.pop;
  var push = Array.prototype.push;
  var reverse = Array.prototype.reverse;
  var shift = Array.prototype.shift;
  var sort = Array.prototype.sort;
  var splice = Array.prototype.splice;
  var unshift = Array.prototype.unshift;

  Array.prototype.pop = function () {
    var methodCallResult = pop.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'delete',
        object: this,
        name: this.length,
        oldValue: methodCallResult
      });
    }
    return methodCallResult;
  };

  Array.prototype.push = function () {
    var methodCallResult = push.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'splice',
        object: this,
        index: this.length - arguments.length,
        removed: [],
        addedCount: arguments.length
      });
    }
    return methodCallResult;
  };

  Array.prototype.reverse = function () {
    var oldArray = void 0;
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.flushChangeRecords();
      oldArray = this.slice();
    }
    var methodCallResult = reverse.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.reset(oldArray);
    }
    return methodCallResult;
  };

  Array.prototype.shift = function () {
    var methodCallResult = shift.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'delete',
        object: this,
        name: 0,
        oldValue: methodCallResult
      });
    }
    return methodCallResult;
  };

  Array.prototype.sort = function () {
    var oldArray = void 0;
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.flushChangeRecords();
      oldArray = this.slice();
    }
    var methodCallResult = sort.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.reset(oldArray);
    }
    return methodCallResult;
  };

  Array.prototype.splice = function () {
    var methodCallResult = splice.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'splice',
        object: this,
        index: arguments[0],
        removed: methodCallResult,
        addedCount: arguments.length > 2 ? arguments.length - 2 : 0
      });
    }
    return methodCallResult;
  };

  Array.prototype.unshift = function () {
    var methodCallResult = unshift.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'splice',
        object: this,
        index: 0,
        removed: [],
        addedCount: arguments.length
      });
    }
    return methodCallResult;
  };

  function _getArrayObserver(taskQueue, array) {
    return ModifyArrayObserver.for(taskQueue, array);
  }

  exports.getArrayObserver = _getArrayObserver;

  var ModifyArrayObserver = function (_ModifyCollectionObse) {
    _inherits(ModifyArrayObserver, _ModifyCollectionObse);

    function ModifyArrayObserver(taskQueue, array) {
      _classCallCheck(this, ModifyArrayObserver);

      return _possibleConstructorReturn(this, _ModifyCollectionObse.call(this, taskQueue, array));
    }

    ModifyArrayObserver.for = function _for(taskQueue, array) {
      if (!('__array_observer__' in array)) {
        var observer = ModifyArrayObserver.create(taskQueue, array);
        Object.defineProperty(array, '__array_observer__', { value: observer, enumerable: false, configurable: false });
      }
      return array.__array_observer__;
    };

    ModifyArrayObserver.create = function create(taskQueue, array) {
      var observer = new ModifyArrayObserver(taskQueue, array);
      return observer;
    };

    return ModifyArrayObserver;
  }(ModifyCollectionObserver);

  var Expression = exports.Expression = function () {
    function Expression() {
      _classCallCheck(this, Expression);

      this.isChain = false;
      this.isAssignable = false;
    }

    Expression.prototype.evaluate = function evaluate(scope, lookupFunctions, args) {
      throw new Error('Binding expression "' + this + '" cannot be evaluated.');
    };

    Expression.prototype.assign = function assign(scope, value, lookupFunctions) {
      throw new Error('Binding expression "' + this + '" cannot be assigned to.');
    };

    Expression.prototype.toString = function toString() {
      return Unparser.unparse(this);
    };

    return Expression;
  }();

  var Chain = exports.Chain = function (_Expression) {
    _inherits(Chain, _Expression);

    function Chain(expressions) {
      _classCallCheck(this, Chain);

      var _this3 = _possibleConstructorReturn(this, _Expression.call(this));

      _this3.expressions = expressions;
      _this3.isChain = true;
      return _this3;
    }

    Chain.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var result,
          expressions = this.expressions,
          length = expressions.length,
          i,
          last;

      for (i = 0; i < length; ++i) {
        last = expressions[i].evaluate(scope, lookupFunctions);

        if (last !== null) {
          result = last;
        }
      }

      return result;
    };

    Chain.prototype.accept = function accept(visitor) {
      return visitor.visitChain(this);
    };

    return Chain;
  }(Expression);

  var BindingBehavior = exports.BindingBehavior = function (_Expression2) {
    _inherits(BindingBehavior, _Expression2);

    function BindingBehavior(expression, name, args) {
      _classCallCheck(this, BindingBehavior);

      var _this4 = _possibleConstructorReturn(this, _Expression2.call(this));

      _this4.expression = expression;
      _this4.name = name;
      _this4.args = args;
      return _this4;
    }

    BindingBehavior.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      return this.expression.evaluate(scope, lookupFunctions);
    };

    BindingBehavior.prototype.assign = function assign(scope, value, lookupFunctions) {
      return this.expression.assign(scope, value, lookupFunctions);
    };

    BindingBehavior.prototype.accept = function accept(visitor) {
      return visitor.visitBindingBehavior(this);
    };

    BindingBehavior.prototype.connect = function connect(binding, scope) {
      this.expression.connect(binding, scope);
    };

    BindingBehavior.prototype.bind = function bind(binding, scope, lookupFunctions) {
      if (this.expression.expression && this.expression.bind) {
        this.expression.bind(binding, scope, lookupFunctions);
      }
      var behavior = lookupFunctions.bindingBehaviors(this.name);
      if (!behavior) {
        throw new Error('No BindingBehavior named "' + this.name + '" was found!');
      }
      var behaviorKey = 'behavior-' + this.name;
      if (binding[behaviorKey]) {
        throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
      }
      binding[behaviorKey] = behavior;
      behavior.bind.apply(behavior, [binding, scope].concat(evalList(scope, this.args, binding.lookupFunctions)));
    };

    BindingBehavior.prototype.unbind = function unbind(binding, scope) {
      var behaviorKey = 'behavior-' + this.name;
      binding[behaviorKey].unbind(binding, scope);
      binding[behaviorKey] = null;
      if (this.expression.expression && this.expression.unbind) {
        this.expression.unbind(binding, scope);
      }
    };

    return BindingBehavior;
  }(Expression);

  var ValueConverter = exports.ValueConverter = function (_Expression3) {
    _inherits(ValueConverter, _Expression3);

    function ValueConverter(expression, name, args, allArgs) {
      _classCallCheck(this, ValueConverter);

      var _this5 = _possibleConstructorReturn(this, _Expression3.call(this));

      _this5.expression = expression;
      _this5.name = name;
      _this5.args = args;
      _this5.allArgs = allArgs;
      return _this5;
    }

    ValueConverter.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var converter = lookupFunctions.valueConverters(this.name);
      if (!converter) {
        throw new Error('No ValueConverter named "' + this.name + '" was found!');
      }

      if ('toView' in converter) {
        return converter.toView.apply(converter, evalList(scope, this.allArgs, lookupFunctions));
      }

      return this.allArgs[0].evaluate(scope, lookupFunctions);
    };

    ValueConverter.prototype.assign = function assign(scope, value, lookupFunctions) {
      var converter = lookupFunctions.valueConverters(this.name);
      if (!converter) {
        throw new Error('No ValueConverter named "' + this.name + '" was found!');
      }

      if ('fromView' in converter) {
        value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, lookupFunctions)));
      }

      return this.allArgs[0].assign(scope, value, lookupFunctions);
    };

    ValueConverter.prototype.accept = function accept(visitor) {
      return visitor.visitValueConverter(this);
    };

    ValueConverter.prototype.connect = function connect(binding, scope) {
      var expressions = this.allArgs;
      var i = expressions.length;
      while (i--) {
        expressions[i].connect(binding, scope);
      }
    };

    return ValueConverter;
  }(Expression);

  var Assign = exports.Assign = function (_Expression4) {
    _inherits(Assign, _Expression4);

    function Assign(target, value) {
      _classCallCheck(this, Assign);

      var _this6 = _possibleConstructorReturn(this, _Expression4.call(this));

      _this6.target = target;
      _this6.value = value;
      return _this6;
    }

    Assign.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      return this.target.assign(scope, this.value.evaluate(scope, lookupFunctions));
    };

    Assign.prototype.accept = function accept(vistor) {
      vistor.visitAssign(this);
    };

    Assign.prototype.connect = function connect(binding, scope) {};

    return Assign;
  }(Expression);

  var Conditional = exports.Conditional = function (_Expression5) {
    _inherits(Conditional, _Expression5);

    function Conditional(condition, yes, no) {
      _classCallCheck(this, Conditional);

      var _this7 = _possibleConstructorReturn(this, _Expression5.call(this));

      _this7.condition = condition;
      _this7.yes = yes;
      _this7.no = no;
      return _this7;
    }

    Conditional.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      return !!this.condition.evaluate(scope) ? this.yes.evaluate(scope) : this.no.evaluate(scope);
    };

    Conditional.prototype.accept = function accept(visitor) {
      return visitor.visitConditional(this);
    };

    Conditional.prototype.connect = function connect(binding, scope) {
      this.condition.connect(binding, scope);
      if (this.condition.evaluate(scope)) {
        this.yes.connect(binding, scope);
      } else {
        this.no.connect(binding, scope);
      }
    };

    return Conditional;
  }(Expression);

  var AccessThis = exports.AccessThis = function (_Expression6) {
    _inherits(AccessThis, _Expression6);

    function AccessThis(ancestor) {
      _classCallCheck(this, AccessThis);

      var _this8 = _possibleConstructorReturn(this, _Expression6.call(this));

      _this8.ancestor = ancestor;
      return _this8;
    }

    AccessThis.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var oc = scope.overrideContext;
      var i = this.ancestor;
      while (i-- && oc) {
        oc = oc.parentOverrideContext;
      }
      return i < 1 && oc ? oc.bindingContext : undefined;
    };

    AccessThis.prototype.accept = function accept(visitor) {
      return visitor.visitAccessThis(this);
    };

    AccessThis.prototype.connect = function connect(binding, scope) {};

    return AccessThis;
  }(Expression);

  var AccessScope = exports.AccessScope = function (_Expression7) {
    _inherits(AccessScope, _Expression7);

    function AccessScope(name, ancestor) {
      _classCallCheck(this, AccessScope);

      var _this9 = _possibleConstructorReturn(this, _Expression7.call(this));

      _this9.name = name;
      _this9.ancestor = ancestor;
      _this9.isAssignable = true;
      return _this9;
    }

    AccessScope.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var context = getContextFor(this.name, scope, this.ancestor);
      return context[this.name];
    };

    AccessScope.prototype.assign = function assign(scope, value) {
      var context = getContextFor(this.name, scope, this.ancestor);
      return context ? context[this.name] = value : undefined;
    };

    AccessScope.prototype.accept = function accept(visitor) {
      return visitor.visitAccessScope(this);
    };

    AccessScope.prototype.connect = function connect(binding, scope) {
      var context = getContextFor(this.name, scope, this.ancestor);
      binding.observeProperty(context, this.name);
    };

    return AccessScope;
  }(Expression);

  var AccessMember = exports.AccessMember = function (_Expression8) {
    _inherits(AccessMember, _Expression8);

    function AccessMember(object, name) {
      _classCallCheck(this, AccessMember);

      var _this10 = _possibleConstructorReturn(this, _Expression8.call(this));

      _this10.object = object;
      _this10.name = name;
      _this10.isAssignable = true;
      return _this10;
    }

    AccessMember.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var instance = this.object.evaluate(scope, lookupFunctions);
      return instance === null || instance === undefined ? instance : instance[this.name];
    };

    AccessMember.prototype.assign = function assign(scope, value) {
      var instance = this.object.evaluate(scope);

      if (instance === null || instance === undefined) {
        instance = {};
        this.object.assign(scope, instance);
      }

      return instance[this.name] = value;
    };

    AccessMember.prototype.accept = function accept(visitor) {
      return visitor.visitAccessMember(this);
    };

    AccessMember.prototype.connect = function connect(binding, scope) {
      this.object.connect(binding, scope);
      var obj = this.object.evaluate(scope);
      if (obj) {
        binding.observeProperty(obj, this.name);
      }
    };

    return AccessMember;
  }(Expression);

  var AccessKeyed = exports.AccessKeyed = function (_Expression9) {
    _inherits(AccessKeyed, _Expression9);

    function AccessKeyed(object, key) {
      _classCallCheck(this, AccessKeyed);

      var _this11 = _possibleConstructorReturn(this, _Expression9.call(this));

      _this11.object = object;
      _this11.key = key;
      _this11.isAssignable = true;
      return _this11;
    }

    AccessKeyed.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var instance = this.object.evaluate(scope, lookupFunctions);
      var lookup = this.key.evaluate(scope, lookupFunctions);
      return getKeyed(instance, lookup);
    };

    AccessKeyed.prototype.assign = function assign(scope, value) {
      var instance = this.object.evaluate(scope);
      var lookup = this.key.evaluate(scope);
      return setKeyed(instance, lookup, value);
    };

    AccessKeyed.prototype.accept = function accept(visitor) {
      return visitor.visitAccessKeyed(this);
    };

    AccessKeyed.prototype.connect = function connect(binding, scope) {
      this.object.connect(binding, scope);
      var obj = this.object.evaluate(scope);
      if (obj instanceof Object) {
        this.key.connect(binding, scope);
        var key = this.key.evaluate(scope);

        if (key !== null && key !== undefined && !(Array.isArray(obj) && typeof key === 'number')) {
          binding.observeProperty(obj, key);
        }
      }
    };

    return AccessKeyed;
  }(Expression);

  var CallScope = exports.CallScope = function (_Expression10) {
    _inherits(CallScope, _Expression10);

    function CallScope(name, args, ancestor) {
      _classCallCheck(this, CallScope);

      var _this12 = _possibleConstructorReturn(this, _Expression10.call(this));

      _this12.name = name;
      _this12.args = args;
      _this12.ancestor = ancestor;
      return _this12;
    }

    CallScope.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
      var args = evalList(scope, this.args, lookupFunctions);
      var context = getContextFor(this.name, scope, this.ancestor);
      var func = getFunction(context, this.name, mustEvaluate);
      if (func) {
        return func.apply(context, args);
      }
      return undefined;
    };

    CallScope.prototype.accept = function accept(visitor) {
      return visitor.visitCallScope(this);
    };

    CallScope.prototype.connect = function connect(binding, scope) {
      var args = this.args;
      var i = args.length;
      while (i--) {
        args[i].connect(binding, scope);
      }
    };

    return CallScope;
  }(Expression);

  var CallMember = exports.CallMember = function (_Expression11) {
    _inherits(CallMember, _Expression11);

    function CallMember(object, name, args) {
      _classCallCheck(this, CallMember);

      var _this13 = _possibleConstructorReturn(this, _Expression11.call(this));

      _this13.object = object;
      _this13.name = name;
      _this13.args = args;
      return _this13;
    }

    CallMember.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
      var instance = this.object.evaluate(scope, lookupFunctions);
      var args = evalList(scope, this.args, lookupFunctions);
      var func = getFunction(instance, this.name, mustEvaluate);
      if (func) {
        return func.apply(instance, args);
      }
      return undefined;
    };

    CallMember.prototype.accept = function accept(visitor) {
      return visitor.visitCallMember(this);
    };

    CallMember.prototype.connect = function connect(binding, scope) {
      this.object.connect(binding, scope);
      var obj = this.object.evaluate(scope);
      if (getFunction(obj, this.name, false)) {
        var args = this.args;
        var _i = args.length;
        while (_i--) {
          args[_i].connect(binding, scope);
        }
      }
    };

    return CallMember;
  }(Expression);

  var CallFunction = exports.CallFunction = function (_Expression12) {
    _inherits(CallFunction, _Expression12);

    function CallFunction(func, args) {
      _classCallCheck(this, CallFunction);

      var _this14 = _possibleConstructorReturn(this, _Expression12.call(this));

      _this14.func = func;
      _this14.args = args;
      return _this14;
    }

    CallFunction.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
      var func = this.func.evaluate(scope, lookupFunctions);
      if (typeof func === 'function') {
        return func.apply(null, evalList(scope, this.args, lookupFunctions));
      }
      if (!mustEvaluate && (func === null || func === undefined)) {
        return undefined;
      }
      throw new Error(this.func + ' is not a function');
    };

    CallFunction.prototype.accept = function accept(visitor) {
      return visitor.visitCallFunction(this);
    };

    CallFunction.prototype.connect = function connect(binding, scope) {
      this.func.connect(binding, scope);
      var func = this.func.evaluate(scope);
      if (typeof func === 'function') {
        var args = this.args;
        var _i2 = args.length;
        while (_i2--) {
          args[_i2].connect(binding, scope);
        }
      }
    };

    return CallFunction;
  }(Expression);

  var Binary = exports.Binary = function (_Expression13) {
    _inherits(Binary, _Expression13);

    function Binary(operation, left, right) {
      _classCallCheck(this, Binary);

      var _this15 = _possibleConstructorReturn(this, _Expression13.call(this));

      _this15.operation = operation;
      _this15.left = left;
      _this15.right = right;
      return _this15;
    }

    Binary.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var left = this.left.evaluate(scope);

      switch (this.operation) {
        case '&&':
          return left && this.right.evaluate(scope);
        case '||':
          return left || this.right.evaluate(scope);
      }

      var right = this.right.evaluate(scope);

      switch (this.operation) {
        case '==':
          return left == right;
        case '===':
          return left === right;
        case '!=':
          return left != right;
        case '!==':
          return left !== right;
      }

      if (left === null || right === null) {
        switch (this.operation) {
          case '+':
            if (left != null) return left;
            if (right != null) return right;
            return 0;
          case '-':
            if (left != null) return left;
            if (right != null) return 0 - right;
            return 0;
        }

        return null;
      }

      switch (this.operation) {
        case '+':
          return autoConvertAdd(left, right);
        case '-':
          return left - right;
        case '*':
          return left * right;
        case '/':
          return left / right;
        case '%':
          return left % right;
        case '<':
          return left < right;
        case '>':
          return left > right;
        case '<=':
          return left <= right;
        case '>=':
          return left >= right;
        case '^':
          return left ^ right;
      }

      throw new Error('Internal error [' + this.operation + '] not handled');
    };

    Binary.prototype.accept = function accept(visitor) {
      return visitor.visitBinary(this);
    };

    Binary.prototype.connect = function connect(binding, scope) {
      this.left.connect(binding, scope);
      var left = this.left.evaluate(scope);
      if (this.operation === '&&' && !left || this.operation === '||' && left) {
        return;
      }
      this.right.connect(binding, scope);
    };

    return Binary;
  }(Expression);

  var PrefixNot = exports.PrefixNot = function (_Expression14) {
    _inherits(PrefixNot, _Expression14);

    function PrefixNot(operation, expression) {
      _classCallCheck(this, PrefixNot);

      var _this16 = _possibleConstructorReturn(this, _Expression14.call(this));

      _this16.operation = operation;
      _this16.expression = expression;
      return _this16;
    }

    PrefixNot.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      return !this.expression.evaluate(scope);
    };

    PrefixNot.prototype.accept = function accept(visitor) {
      return visitor.visitPrefix(this);
    };

    PrefixNot.prototype.connect = function connect(binding, scope) {
      this.expression.connect(binding, scope);
    };

    return PrefixNot;
  }(Expression);

  var LiteralPrimitive = exports.LiteralPrimitive = function (_Expression15) {
    _inherits(LiteralPrimitive, _Expression15);

    function LiteralPrimitive(value) {
      _classCallCheck(this, LiteralPrimitive);

      var _this17 = _possibleConstructorReturn(this, _Expression15.call(this));

      _this17.value = value;
      return _this17;
    }

    LiteralPrimitive.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      return this.value;
    };

    LiteralPrimitive.prototype.accept = function accept(visitor) {
      return visitor.visitLiteralPrimitive(this);
    };

    LiteralPrimitive.prototype.connect = function connect(binding, scope) {};

    return LiteralPrimitive;
  }(Expression);

  var LiteralString = exports.LiteralString = function (_Expression16) {
    _inherits(LiteralString, _Expression16);

    function LiteralString(value) {
      _classCallCheck(this, LiteralString);

      var _this18 = _possibleConstructorReturn(this, _Expression16.call(this));

      _this18.value = value;
      return _this18;
    }

    LiteralString.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      return this.value;
    };

    LiteralString.prototype.accept = function accept(visitor) {
      return visitor.visitLiteralString(this);
    };

    LiteralString.prototype.connect = function connect(binding, scope) {};

    return LiteralString;
  }(Expression);

  var LiteralArray = exports.LiteralArray = function (_Expression17) {
    _inherits(LiteralArray, _Expression17);

    function LiteralArray(elements) {
      _classCallCheck(this, LiteralArray);

      var _this19 = _possibleConstructorReturn(this, _Expression17.call(this));

      _this19.elements = elements;
      return _this19;
    }

    LiteralArray.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var elements = this.elements,
          length = elements.length,
          result = [],
          i;

      for (i = 0; i < length; ++i) {
        result[i] = elements[i].evaluate(scope, lookupFunctions);
      }

      return result;
    };

    LiteralArray.prototype.accept = function accept(visitor) {
      return visitor.visitLiteralArray(this);
    };

    LiteralArray.prototype.connect = function connect(binding, scope) {
      var length = this.elements.length;
      for (var _i3 = 0; _i3 < length; _i3++) {
        this.elements[_i3].connect(binding, scope);
      }
    };

    return LiteralArray;
  }(Expression);

  var LiteralObject = exports.LiteralObject = function (_Expression18) {
    _inherits(LiteralObject, _Expression18);

    function LiteralObject(keys, values) {
      _classCallCheck(this, LiteralObject);

      var _this20 = _possibleConstructorReturn(this, _Expression18.call(this));

      _this20.keys = keys;
      _this20.values = values;
      return _this20;
    }

    LiteralObject.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      var instance = {},
          keys = this.keys,
          values = this.values,
          length = keys.length,
          i;

      for (i = 0; i < length; ++i) {
        instance[keys[i]] = values[i].evaluate(scope, lookupFunctions);
      }

      return instance;
    };

    LiteralObject.prototype.accept = function accept(visitor) {
      return visitor.visitLiteralObject(this);
    };

    LiteralObject.prototype.connect = function connect(binding, scope) {
      var length = this.keys.length;
      for (var _i4 = 0; _i4 < length; _i4++) {
        this.values[_i4].connect(binding, scope);
      }
    };

    return LiteralObject;
  }(Expression);

  var evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];

  function evalList(scope, list, lookupFunctions) {
    var length = list.length,
        cacheLength,
        i;

    for (cacheLength = evalListCache.length; cacheLength <= length; ++cacheLength) {
      evalListCache.push([]);
    }

    var result = evalListCache[length];

    for (i = 0; i < length; ++i) {
      result[i] = list[i].evaluate(scope, lookupFunctions);
    }

    return result;
  }

  function autoConvertAdd(a, b) {
    if (a != null && b != null) {
      if (typeof a == 'string' && typeof b != 'string') {
        return a + b.toString();
      }

      if (typeof a != 'string' && typeof b == 'string') {
        return a.toString() + b;
      }

      return a + b;
    }

    if (a != null) {
      return a;
    }

    if (b != null) {
      return b;
    }

    return 0;
  }

  function getFunction(obj, name, mustExist) {
    var func = obj === null || obj === undefined ? null : obj[name];
    if (typeof func === 'function') {
      return func;
    }
    if (!mustExist && (func === null || func === undefined)) {
      return null;
    }
    throw new Error(name + ' is not a function');
  }

  function getKeyed(obj, key) {
    if (Array.isArray(obj)) {
      return obj[parseInt(key)];
    } else if (obj) {
      return obj[key];
    } else if (obj === null || obj === undefined) {
      return undefined;
    } else {
      return obj[key];
    }
  }

  function setKeyed(obj, key, value) {
    if (Array.isArray(obj)) {
      var index = parseInt(key);

      if (obj.length <= index) {
        obj.length = index + 1;
      }

      obj[index] = value;
    } else {
      obj[key] = value;
    }

    return value;
  }

  var Unparser = exports.Unparser = function () {
    function Unparser(buffer) {
      _classCallCheck(this, Unparser);

      this.buffer = buffer;
    }

    Unparser.unparse = function unparse(expression) {
      var buffer = [],
          visitor = new Unparser(buffer);

      expression.accept(visitor);

      return buffer.join('');
    };

    Unparser.prototype.write = function write(text) {
      this.buffer.push(text);
    };

    Unparser.prototype.writeArgs = function writeArgs(args) {
      var i, length;

      this.write('(');

      for (i = 0, length = args.length; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        args[i].accept(this);
      }

      this.write(')');
    };

    Unparser.prototype.visitChain = function visitChain(chain) {
      var expressions = chain.expressions,
          length = expressions.length,
          i;

      for (i = 0; i < length; ++i) {
        if (i !== 0) {
          this.write(';');
        }

        expressions[i].accept(this);
      }
    };

    Unparser.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
      var args = behavior.args,
          length = args.length,
          i;

      behavior.expression.accept(this);
      this.write('&' + behavior.name);

      for (i = 0; i < length; ++i) {
        this.write(':');
        args[i].accept(this);
      }
    };

    Unparser.prototype.visitValueConverter = function visitValueConverter(converter) {
      var args = converter.args,
          length = args.length,
          i;

      converter.expression.accept(this);
      this.write('|' + converter.name);

      for (i = 0; i < length; ++i) {
        this.write(':');
        args[i].accept(this);
      }
    };

    Unparser.prototype.visitAssign = function visitAssign(assign) {
      assign.target.accept(this);
      this.write('=');
      assign.value.accept(this);
    };

    Unparser.prototype.visitConditional = function visitConditional(conditional) {
      conditional.condition.accept(this);
      this.write('?');
      conditional.yes.accept(this);
      this.write(':');
      conditional.no.accept(this);
    };

    Unparser.prototype.visitAccessThis = function visitAccessThis(access) {
      if (access.ancestor === 0) {
        this.write('$this');
        return;
      }
      this.write('$parent');
      var i = access.ancestor - 1;
      while (i--) {
        this.write('.$parent');
      }
    };

    Unparser.prototype.visitAccessScope = function visitAccessScope(access) {
      var i = access.ancestor;
      while (i--) {
        this.write('$parent.');
      }
      this.write(access.name);
    };

    Unparser.prototype.visitAccessMember = function visitAccessMember(access) {
      access.object.accept(this);
      this.write('.' + access.name);
    };

    Unparser.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
      access.object.accept(this);
      this.write('[');
      access.key.accept(this);
      this.write(']');
    };

    Unparser.prototype.visitCallScope = function visitCallScope(call) {
      var i = call.ancestor;
      while (i--) {
        this.write('$parent.');
      }
      this.write(call.name);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitCallFunction = function visitCallFunction(call) {
      call.func.accept(this);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitCallMember = function visitCallMember(call) {
      call.object.accept(this);
      this.write('.' + call.name);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitPrefix = function visitPrefix(prefix) {
      this.write('(' + prefix.operation);
      prefix.expression.accept(this);
      this.write(')');
    };

    Unparser.prototype.visitBinary = function visitBinary(binary) {
      binary.left.accept(this);
      this.write(binary.operation);
      binary.right.accept(this);
    };

    Unparser.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
      this.write('' + literal.value);
    };

    Unparser.prototype.visitLiteralArray = function visitLiteralArray(literal) {
      var elements = literal.elements,
          length = elements.length,
          i;

      this.write('[');

      for (i = 0; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        elements[i].accept(this);
      }

      this.write(']');
    };

    Unparser.prototype.visitLiteralObject = function visitLiteralObject(literal) {
      var keys = literal.keys,
          values = literal.values,
          length = keys.length,
          i;

      this.write('{');

      for (i = 0; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        this.write('\'' + keys[i] + '\':');
        values[i].accept(this);
      }

      this.write('}');
    };

    Unparser.prototype.visitLiteralString = function visitLiteralString(literal) {
      var escaped = literal.value.replace(/'/g, "\'");
      this.write('\'' + escaped + '\'');
    };

    return Unparser;
  }();

  var ExpressionCloner = exports.ExpressionCloner = function () {
    function ExpressionCloner() {
      _classCallCheck(this, ExpressionCloner);
    }

    ExpressionCloner.prototype.cloneExpressionArray = function cloneExpressionArray(array) {
      var clonedArray = [];
      var i = array.length;
      while (i--) {
        clonedArray[i] = array[i].accept(this);
      }
      return clonedArray;
    };

    ExpressionCloner.prototype.visitChain = function visitChain(chain) {
      return new Chain(this.cloneExpressionArray(chain.expressions));
    };

    ExpressionCloner.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
      return new BindingBehavior(behavior.expression.accept(this), behavior.name, this.cloneExpressionArray(behavior.args));
    };

    ExpressionCloner.prototype.visitValueConverter = function visitValueConverter(converter) {
      return new ValueConverter(converter.expression.accept(this), converter.name, this.cloneExpressionArray(converter.args));
    };

    ExpressionCloner.prototype.visitAssign = function visitAssign(assign) {
      return new Assign(assign.target.accept(this), assign.value.accept(this));
    };

    ExpressionCloner.prototype.visitConditional = function visitConditional(conditional) {
      return new Conditional(conditional.condition.accept(this), conditional.yes.accept(this), conditional.no.accept(this));
    };

    ExpressionCloner.prototype.visitAccessThis = function visitAccessThis(access) {
      return new AccessThis(access.ancestor);
    };

    ExpressionCloner.prototype.visitAccessScope = function visitAccessScope(access) {
      return new AccessScope(access.name, access.ancestor);
    };

    ExpressionCloner.prototype.visitAccessMember = function visitAccessMember(access) {
      return new AccessMember(access.object.accept(this), access.name);
    };

    ExpressionCloner.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
      return new AccessKeyed(access.object.accept(this), access.key.accept(this));
    };

    ExpressionCloner.prototype.visitCallScope = function visitCallScope(call) {
      return new CallScope(call.name, this.cloneExpressionArray(call.args), call.ancestor);
    };

    ExpressionCloner.prototype.visitCallFunction = function visitCallFunction(call) {
      return new CallFunction(call.func.accept(this), this.cloneExpressionArray(call.args));
    };

    ExpressionCloner.prototype.visitCallMember = function visitCallMember(call) {
      return new CallMember(call.object.accept(this), call.name, this.cloneExpressionArray(call.args));
    };

    ExpressionCloner.prototype.visitPrefix = function visitPrefix(prefix) {
      return new PrefixNot(prefix.operation, prefix.expression.accept(this));
    };

    ExpressionCloner.prototype.visitBinary = function visitBinary(binary) {
      return new Binary(binary.operation, binary.left.accept(this), binary.right.accept(this));
    };

    ExpressionCloner.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
      return new LiteralPrimitive(literal);
    };

    ExpressionCloner.prototype.visitLiteralArray = function visitLiteralArray(literal) {
      return new LiteralArray(this.cloneExpressionArray(literal.elements));
    };

    ExpressionCloner.prototype.visitLiteralObject = function visitLiteralObject(literal) {
      return new LiteralObject(literal.keys, this.cloneExpressionArray(literal.values));
    };

    ExpressionCloner.prototype.visitLiteralString = function visitLiteralString(literal) {
      return new LiteralString(literal.value);
    };

    return ExpressionCloner;
  }();

  function cloneExpression(expression) {
    var visitor = new ExpressionCloner();
    return expression.accept(visitor);
  }

  var bindingMode = exports.bindingMode = {
    oneTime: 0,
    oneWay: 1,
    twoWay: 2
  };

  var Token = exports.Token = function () {
    function Token(index, text) {
      _classCallCheck(this, Token);

      this.index = index;
      this.text = text;
    }

    Token.prototype.withOp = function withOp(op) {
      this.opKey = op;
      return this;
    };

    Token.prototype.withGetterSetter = function withGetterSetter(key) {
      this.key = key;
      return this;
    };

    Token.prototype.withValue = function withValue(value) {
      this.value = value;
      return this;
    };

    Token.prototype.toString = function toString() {
      return 'Token(' + this.text + ')';
    };

    return Token;
  }();

  var Lexer = exports.Lexer = function () {
    function Lexer() {
      _classCallCheck(this, Lexer);
    }

    Lexer.prototype.lex = function lex(text) {
      var scanner = new Scanner(text);
      var tokens = [];
      var token = scanner.scanToken();

      while (token) {
        tokens.push(token);
        token = scanner.scanToken();
      }

      return tokens;
    };

    return Lexer;
  }();

  var Scanner = exports.Scanner = function () {
    function Scanner(input) {
      _classCallCheck(this, Scanner);

      this.input = input;
      this.length = input.length;
      this.peek = 0;
      this.index = -1;

      this.advance();
    }

    Scanner.prototype.scanToken = function scanToken() {
      while (this.peek <= $SPACE) {
        if (++this.index >= this.length) {
          this.peek = $EOF;
          return null;
        } else {
          this.peek = this.input.charCodeAt(this.index);
        }
      }

      if (isIdentifierStart(this.peek)) {
        return this.scanIdentifier();
      }

      if (isDigit(this.peek)) {
        return this.scanNumber(this.index);
      }

      var start = this.index;

      switch (this.peek) {
        case $PERIOD:
          this.advance();
          return isDigit(this.peek) ? this.scanNumber(start) : new Token(start, '.');
        case $LPAREN:
        case $RPAREN:
        case $LBRACE:
        case $RBRACE:
        case $LBRACKET:
        case $RBRACKET:
        case $COMMA:
        case $COLON:
        case $SEMICOLON:
          return this.scanCharacter(start, String.fromCharCode(this.peek));
        case $SQ:
        case $DQ:
          return this.scanString();
        case $PLUS:
        case $MINUS:
        case $STAR:
        case $SLASH:
        case $PERCENT:
        case $CARET:
        case $QUESTION:
          return this.scanOperator(start, String.fromCharCode(this.peek));
        case $LT:
        case $GT:
        case $BANG:
        case $EQ:
          return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), '=');
        case $AMPERSAND:
          return this.scanComplexOperator(start, $AMPERSAND, '&', '&');
        case $BAR:
          return this.scanComplexOperator(start, $BAR, '|', '|');
        case $NBSP:
          while (isWhitespace(this.peek)) {
            this.advance();
          }

          return this.scanToken();
      }

      var character = String.fromCharCode(this.peek);
      this.error('Unexpected character [' + character + ']');
      return null;
    };

    Scanner.prototype.scanCharacter = function scanCharacter(start, text) {
      assert(this.peek === text.charCodeAt(0));
      this.advance();
      return new Token(start, text);
    };

    Scanner.prototype.scanOperator = function scanOperator(start, text) {
      assert(this.peek === text.charCodeAt(0));
      assert(OPERATORS.indexOf(text) !== -1);
      this.advance();
      return new Token(start, text).withOp(text);
    };

    Scanner.prototype.scanComplexOperator = function scanComplexOperator(start, code, one, two) {
      assert(this.peek === one.charCodeAt(0));
      this.advance();

      var text = one;

      if (this.peek === code) {
        this.advance();
        text += two;
      }

      if (this.peek === code) {
        this.advance();
        text += two;
      }

      assert(OPERATORS.indexOf(text) != -1);

      return new Token(start, text).withOp(text);
    };

    Scanner.prototype.scanIdentifier = function scanIdentifier() {
      assert(isIdentifierStart(this.peek));
      var start = this.index;

      this.advance();

      while (isIdentifierPart(this.peek)) {
        this.advance();
      }

      var text = this.input.substring(start, this.index);
      var result = new Token(start, text);

      if (OPERATORS.indexOf(text) !== -1) {
        result.withOp(text);
      } else {
        result.withGetterSetter(text);
      }

      return result;
    };

    Scanner.prototype.scanNumber = function scanNumber(start) {
      assert(isDigit(this.peek));
      var simple = this.index === start;
      this.advance();

      while (true) {
        if (isDigit(this.peek)) {} else if (this.peek === $PERIOD) {
            simple = false;
          } else if (isExponentStart(this.peek)) {
            this.advance();

            if (isExponentSign(this.peek)) {
              this.advance();
            }

            if (!isDigit(this.peek)) {
              this.error('Invalid exponent', -1);
            }

            simple = false;
          } else {
            break;
          }

        this.advance();
      }

      var text = this.input.substring(start, this.index);
      var value = simple ? parseInt(text) : parseFloat(text);
      return new Token(start, text).withValue(value);
    };

    Scanner.prototype.scanString = function scanString() {
      assert(this.peek === $SQ || this.peek === $DQ);

      var start = this.index;
      var quote = this.peek;

      this.advance();

      var buffer = void 0;
      var marker = this.index;

      while (this.peek !== quote) {
        if (this.peek === $BACKSLASH) {
          if (!buffer) {
            buffer = [];
          }

          buffer.push(this.input.substring(marker, this.index));
          this.advance();

          var _unescaped = void 0;

          if (this.peek === $u) {
            var hex = this.input.substring(this.index + 1, this.index + 5);

            if (!/[A-Z0-9]{4}/.test(hex)) {
              this.error('Invalid unicode escape [\\u' + hex + ']');
            }

            _unescaped = parseInt(hex, 16);

            for (var _i5 = 0; _i5 < 5; ++_i5) {
              this.advance();
            }
          } else {
            _unescaped = unescape(this.peek);
            this.advance();
          }

          buffer.push(String.fromCharCode(_unescaped));
          marker = this.index;
        } else if (this.peek === $EOF) {
          this.error('Unterminated quote');
        } else {
          this.advance();
        }
      }

      var last = this.input.substring(marker, this.index);
      this.advance();
      var text = this.input.substring(start, this.index);

      var unescaped = last;

      if (buffer != null) {
        buffer.push(last);
        unescaped = buffer.join('');
      }

      return new Token(start, text).withValue(unescaped);
    };

    Scanner.prototype.advance = function advance() {
      if (++this.index >= this.length) {
        this.peek = $EOF;
      } else {
        this.peek = this.input.charCodeAt(this.index);
      }
    };

    Scanner.prototype.error = function error(message) {
      var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var position = this.index + offset;
      throw new Error('Lexer Error: ' + message + ' at column ' + position + ' in expression [' + this.input + ']');
    };

    return Scanner;
  }();

  var OPERATORS = ['undefined', 'null', 'true', 'false', '+', '-', '*', '/', '%', '^', '=', '==', '===', '!=', '!==', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?'];

  var $EOF = 0;
  var $TAB = 9;
  var $LF = 10;
  var $VTAB = 11;
  var $FF = 12;
  var $CR = 13;
  var $SPACE = 32;
  var $BANG = 33;
  var $DQ = 34;
  var $$ = 36;
  var $PERCENT = 37;
  var $AMPERSAND = 38;
  var $SQ = 39;
  var $LPAREN = 40;
  var $RPAREN = 41;
  var $STAR = 42;
  var $PLUS = 43;
  var $COMMA = 44;
  var $MINUS = 45;
  var $PERIOD = 46;
  var $SLASH = 47;
  var $COLON = 58;
  var $SEMICOLON = 59;
  var $LT = 60;
  var $EQ = 61;
  var $GT = 62;
  var $QUESTION = 63;

  var $0 = 48;
  var $9 = 57;

  var $A = 65;
  var $E = 69;
  var $Z = 90;

  var $LBRACKET = 91;
  var $BACKSLASH = 92;
  var $RBRACKET = 93;
  var $CARET = 94;
  var $_ = 95;

  var $a = 97;
  var $e = 101;
  var $f = 102;
  var $n = 110;
  var $r = 114;
  var $t = 116;
  var $u = 117;
  var $v = 118;
  var $z = 122;

  var $LBRACE = 123;
  var $BAR = 124;
  var $RBRACE = 125;
  var $NBSP = 160;

  function isWhitespace(code) {
    return code >= $TAB && code <= $SPACE || code === $NBSP;
  }

  function isIdentifierStart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || code === $_ || code === $$;
  }

  function isIdentifierPart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code === $_ || code === $$;
  }

  function isDigit(code) {
    return $0 <= code && code <= $9;
  }

  function isExponentStart(code) {
    return code === $e || code === $E;
  }

  function isExponentSign(code) {
    return code === $MINUS || code === $PLUS;
  }

  function unescape(code) {
    switch (code) {
      case $n:
        return $LF;
      case $f:
        return $FF;
      case $r:
        return $CR;
      case $t:
        return $TAB;
      case $v:
        return $VTAB;
      default:
        return code;
    }
  }

  function assert(condition, message) {
    if (!condition) {
      throw message || "Assertion failed";
    }
  }

  var EOF = new Token(-1, null);

  var Parser = exports.Parser = function () {
    function Parser() {
      _classCallCheck(this, Parser);

      this.cache = {};
      this.lexer = new Lexer();
    }

    Parser.prototype.parse = function parse(input) {
      input = input || '';

      return this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
    };

    return Parser;
  }();

  var ParserImplementation = exports.ParserImplementation = function () {
    function ParserImplementation(lexer, input) {
      _classCallCheck(this, ParserImplementation);

      this.index = 0;
      this.input = input;
      this.tokens = lexer.lex(input);
    }

    ParserImplementation.prototype.parseChain = function parseChain() {
      var isChain = false;
      var expressions = [];

      while (this.optional(';')) {
        isChain = true;
      }

      while (this.index < this.tokens.length) {
        if (this.peek.text === ')' || this.peek.text === '}' || this.peek.text === ']') {
          this.error('Unconsumed token ' + this.peek.text);
        }

        var expr = this.parseBindingBehavior();
        expressions.push(expr);

        while (this.optional(';')) {
          isChain = true;
        }

        if (isChain) {
          this.error('Multiple expressions are not allowed.');
        }
      }

      return expressions.length === 1 ? expressions[0] : new Chain(expressions);
    };

    ParserImplementation.prototype.parseBindingBehavior = function parseBindingBehavior() {
      var result = this.parseValueConverter();

      while (this.optional('&')) {
        var name = this.peek.text;
        var args = [];

        this.advance();

        while (this.optional(':')) {
          args.push(this.parseExpression());
        }

        result = new BindingBehavior(result, name, args);
      }

      return result;
    };

    ParserImplementation.prototype.parseValueConverter = function parseValueConverter() {
      var result = this.parseExpression();

      while (this.optional('|')) {
        var name = this.peek.text;
        var args = [];

        this.advance();

        while (this.optional(':')) {
          args.push(this.parseExpression());
        }

        result = new ValueConverter(result, name, args, [result].concat(args));
      }

      return result;
    };

    ParserImplementation.prototype.parseExpression = function parseExpression() {
      var start = this.peek.index;
      var result = this.parseConditional();

      while (this.peek.text === '=') {
        if (!result.isAssignable) {
          var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
          var expression = this.input.substring(start, end);

          this.error('Expression ' + expression + ' is not assignable');
        }

        this.expect('=');
        result = new Assign(result, this.parseConditional());
      }

      return result;
    };

    ParserImplementation.prototype.parseConditional = function parseConditional() {
      var start = this.peek.index;
      var result = this.parseLogicalOr();

      if (this.optional('?')) {
        var yes = this.parseExpression();

        if (!this.optional(':')) {
          var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
          var expression = this.input.substring(start, end);

          this.error('Conditional expression ' + expression + ' requires all 3 expressions');
        }

        var no = this.parseExpression();
        result = new Conditional(result, yes, no);
      }

      return result;
    };

    ParserImplementation.prototype.parseLogicalOr = function parseLogicalOr() {
      var result = this.parseLogicalAnd();

      while (this.optional('||')) {
        result = new Binary('||', result, this.parseLogicalAnd());
      }

      return result;
    };

    ParserImplementation.prototype.parseLogicalAnd = function parseLogicalAnd() {
      var result = this.parseEquality();

      while (this.optional('&&')) {
        result = new Binary('&&', result, this.parseEquality());
      }

      return result;
    };

    ParserImplementation.prototype.parseEquality = function parseEquality() {
      var result = this.parseRelational();

      while (true) {
        if (this.optional('==')) {
          result = new Binary('==', result, this.parseRelational());
        } else if (this.optional('!=')) {
          result = new Binary('!=', result, this.parseRelational());
        } else if (this.optional('===')) {
          result = new Binary('===', result, this.parseRelational());
        } else if (this.optional('!==')) {
          result = new Binary('!==', result, this.parseRelational());
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parseRelational = function parseRelational() {
      var result = this.parseAdditive();

      while (true) {
        if (this.optional('<')) {
          result = new Binary('<', result, this.parseAdditive());
        } else if (this.optional('>')) {
          result = new Binary('>', result, this.parseAdditive());
        } else if (this.optional('<=')) {
          result = new Binary('<=', result, this.parseAdditive());
        } else if (this.optional('>=')) {
          result = new Binary('>=', result, this.parseAdditive());
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parseAdditive = function parseAdditive() {
      var result = this.parseMultiplicative();

      while (true) {
        if (this.optional('+')) {
          result = new Binary('+', result, this.parseMultiplicative());
        } else if (this.optional('-')) {
          result = new Binary('-', result, this.parseMultiplicative());
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parseMultiplicative = function parseMultiplicative() {
      var result = this.parsePrefix();

      while (true) {
        if (this.optional('*')) {
          result = new Binary('*', result, this.parsePrefix());
        } else if (this.optional('%')) {
          result = new Binary('%', result, this.parsePrefix());
        } else if (this.optional('/')) {
          result = new Binary('/', result, this.parsePrefix());
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parsePrefix = function parsePrefix() {
      if (this.optional('+')) {
        return this.parsePrefix();
      } else if (this.optional('-')) {
          return new Binary('-', new LiteralPrimitive(0), this.parsePrefix());
        } else if (this.optional('!')) {
          return new PrefixNot('!', this.parsePrefix());
        } else {
          return this.parseAccessOrCallMember();
        }
    };

    ParserImplementation.prototype.parseAccessOrCallMember = function parseAccessOrCallMember() {
      var result = this.parsePrimary();

      while (true) {
        if (this.optional('.')) {
          var name = this.peek.text;

          this.advance();

          if (this.optional('(')) {
            var args = this.parseExpressionList(')');
            this.expect(')');
            if (result instanceof AccessThis) {
              result = new CallScope(name, args, result.ancestor);
            } else {
              result = new CallMember(result, name, args);
            }
          } else {
            if (result instanceof AccessThis) {
              result = new AccessScope(name, result.ancestor);
            } else {
              result = new AccessMember(result, name);
            }
          }
        } else if (this.optional('[')) {
          var key = this.parseExpression();
          this.expect(']');
          result = new AccessKeyed(result, key);
        } else if (this.optional('(')) {
          var _args = this.parseExpressionList(')');
          this.expect(')');
          result = new CallFunction(result, _args);
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parsePrimary = function parsePrimary() {
      if (this.optional('(')) {
        var result = this.parseExpression();
        this.expect(')');
        return result;
      } else if (this.optional('null')) {
        return new LiteralPrimitive(null);
      } else if (this.optional('undefined')) {
        return new LiteralPrimitive(undefined);
      } else if (this.optional('true')) {
        return new LiteralPrimitive(true);
      } else if (this.optional('false')) {
        return new LiteralPrimitive(false);
      } else if (this.optional('[')) {
        var elements = this.parseExpressionList(']');
        this.expect(']');
        return new LiteralArray(elements);
      } else if (this.peek.text == '{') {
        return this.parseObject();
      } else if (this.peek.key != null) {
        return this.parseAccessOrCallScope();
      } else if (this.peek.value != null) {
        var value = this.peek.value;
        this.advance();
        return value instanceof String || typeof value === 'string' ? new LiteralString(value) : new LiteralPrimitive(value);
      } else if (this.index >= this.tokens.length) {
        throw new Error('Unexpected end of expression: ' + this.input);
      } else {
        this.error('Unexpected token ' + this.peek.text);
      }
    };

    ParserImplementation.prototype.parseAccessOrCallScope = function parseAccessOrCallScope() {
      var name = this.peek.key;

      this.advance();

      if (name === '$this') {
        return new AccessThis(0);
      }

      var ancestor = 0;
      while (name === '$parent') {
        ancestor++;
        if (this.optional('.')) {
          name = this.peek.key;
          this.advance();
        } else if (this.peek === EOF || this.peek.text === '(' || this.peek.text === '[' || this.peek.text === '}') {
          return new AccessThis(ancestor);
        } else {
          this.error('Unexpected token ' + this.peek.text);
        }
      }

      if (this.optional('(')) {
        var args = this.parseExpressionList(')');
        this.expect(')');
        return new CallScope(name, args, ancestor);
      }

      return new AccessScope(name, ancestor);
    };

    ParserImplementation.prototype.parseObject = function parseObject() {
      var keys = [];
      var values = [];

      this.expect('{');

      if (this.peek.text !== '}') {
        do {
          var peek = this.peek;
          var value = peek.value;
          keys.push(typeof value === 'string' ? value : peek.text);

          this.advance();
          if (peek.key && (this.peek.text === ',' || this.peek.text === '}')) {
            --this.index;
            values.push(this.parseAccessOrCallScope());
          } else {
            this.expect(':');
            values.push(this.parseExpression());
          }
        } while (this.optional(','));
      }

      this.expect('}');

      return new LiteralObject(keys, values);
    };

    ParserImplementation.prototype.parseExpressionList = function parseExpressionList(terminator) {
      var result = [];

      if (this.peek.text != terminator) {
        do {
          result.push(this.parseExpression());
        } while (this.optional(','));
      }

      return result;
    };

    ParserImplementation.prototype.optional = function optional(text) {
      if (this.peek.text === text) {
        this.advance();
        return true;
      }

      return false;
    };

    ParserImplementation.prototype.expect = function expect(text) {
      if (this.peek.text === text) {
        this.advance();
      } else {
        this.error('Missing expected ' + text);
      }
    };

    ParserImplementation.prototype.advance = function advance() {
      this.index++;
    };

    ParserImplementation.prototype.error = function error(message) {
      var location = this.index < this.tokens.length ? 'at column ' + (this.tokens[this.index].index + 1) + ' in' : 'at the end of the expression';

      throw new Error('Parser Error: ' + message + ' ' + location + ' [' + this.input + ']');
    };

    _createClass(ParserImplementation, [{
      key: 'peek',
      get: function get() {
        return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
      }
    }]);

    return ParserImplementation;
  }();

  var mapProto = Map.prototype;

  function _getMapObserver(taskQueue, map) {
    return ModifyMapObserver.for(taskQueue, map);
  }

  exports.getMapObserver = _getMapObserver;

  var ModifyMapObserver = function (_ModifyCollectionObse2) {
    _inherits(ModifyMapObserver, _ModifyCollectionObse2);

    function ModifyMapObserver(taskQueue, map) {
      _classCallCheck(this, ModifyMapObserver);

      return _possibleConstructorReturn(this, _ModifyCollectionObse2.call(this, taskQueue, map));
    }

    ModifyMapObserver.for = function _for(taskQueue, map) {
      if (!('__map_observer__' in map)) {
        var observer = ModifyMapObserver.create(taskQueue, map);
        Object.defineProperty(map, '__map_observer__', { value: observer, enumerable: false, configurable: false });
      }
      return map.__map_observer__;
    };

    ModifyMapObserver.create = function create(taskQueue, map) {
      var observer = new ModifyMapObserver(taskQueue, map);

      var proto = mapProto;
      if (proto.add !== map.add || proto.delete !== map.delete || proto.clear !== map.clear) {
        proto = {
          add: map.add,
          delete: map.delete,
          clear: map.clear
        };
      }

      map['set'] = function () {
        var hasValue = map.has(arguments[0]);
        var type = hasValue ? 'update' : 'add';
        var oldValue = map.get(arguments[0]);
        var methodCallResult = proto['set'].apply(map, arguments);
        if (!hasValue || oldValue !== map.get(arguments[0])) {
          observer.addChangeRecord({
            type: type,
            object: map,
            key: arguments[0],
            oldValue: oldValue
          });
        }
        return methodCallResult;
      };

      map['delete'] = function () {
        var hasValue = map.has(arguments[0]);
        var oldValue = map.get(arguments[0]);
        var methodCallResult = proto['delete'].apply(map, arguments);
        if (hasValue) {
          observer.addChangeRecord({
            type: 'delete',
            object: map,
            key: arguments[0],
            oldValue: oldValue
          });
        }
        return methodCallResult;
      };

      map['clear'] = function () {
        var methodCallResult = proto['clear'].apply(map, arguments);
        observer.addChangeRecord({
          type: 'clear',
          object: map
        });
        return methodCallResult;
      };

      return observer;
    };

    return ModifyMapObserver;
  }(ModifyCollectionObserver);

  function findOriginalEventTarget(event) {
    return event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target;
  }

  function handleDelegatedEvent(event) {
    var target = findOriginalEventTarget(event);
    var callback = void 0;

    while (target && !callback) {
      if (target.delegatedCallbacks) {
        callback = target.delegatedCallbacks[event.type];
      }

      if (!callback) {
        target = target.parentNode;
      }
    }

    if (callback) {
      callback(event);
    }
  }

  var DelegateHandlerEntry = function () {
    function DelegateHandlerEntry(eventName) {
      _classCallCheck(this, DelegateHandlerEntry);

      this.eventName = eventName;
      this.count = 0;
    }

    DelegateHandlerEntry.prototype.increment = function increment() {
      this.count++;

      if (this.count === 1) {
        _aureliaPal.DOM.addEventListener(this.eventName, handleDelegatedEvent, false);
      }
    };

    DelegateHandlerEntry.prototype.decrement = function decrement() {
      this.count--;

      if (this.count === 0) {
        _aureliaPal.DOM.removeEventListener(this.eventName, handleDelegatedEvent);
      }
    };

    return DelegateHandlerEntry;
  }();

  var DefaultEventStrategy = function () {
    function DefaultEventStrategy() {
      _classCallCheck(this, DefaultEventStrategy);

      this.delegatedHandlers = [];
    }

    DefaultEventStrategy.prototype.subscribe = function subscribe(target, targetEvent, callback, delegate) {
      var _this22 = this;

      if (delegate) {
        var _ret = function () {
          var delegatedHandlers = _this22.delegatedHandlers;
          var handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent));
          var delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});

          handlerEntry.increment();
          delegatedCallbacks[targetEvent] = callback;

          return {
            v: function v() {
              handlerEntry.decrement();
              delegatedCallbacks[targetEvent] = null;
            }
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      } else {
        target.addEventListener(targetEvent, callback, false);

        return function () {
          target.removeEventListener(targetEvent, callback);
        };
      }
    };

    return DefaultEventStrategy;
  }();

  var EventManager = exports.EventManager = function () {
    function EventManager() {
      _classCallCheck(this, EventManager);

      this.elementHandlerLookup = {};
      this.eventStrategyLookup = {};

      this.registerElementConfig({
        tagName: 'input',
        properties: {
          value: ['change', 'input'],
          checked: ['change', 'input'],
          files: ['change', 'input']
        }
      });

      this.registerElementConfig({
        tagName: 'textarea',
        properties: {
          value: ['change', 'input']
        }
      });

      this.registerElementConfig({
        tagName: 'select',
        properties: {
          value: ['change']
        }
      });

      this.registerElementConfig({
        tagName: 'content editable',
        properties: {
          value: ['change', 'input', 'blur', 'keyup', 'paste']
        }
      });

      this.registerElementConfig({
        tagName: 'scrollable element',
        properties: {
          scrollTop: ['scroll'],
          scrollLeft: ['scroll']
        }
      });

      this.defaultEventStrategy = new DefaultEventStrategy();
    }

    EventManager.prototype.registerElementConfig = function registerElementConfig(config) {
      var tagName = config.tagName.toLowerCase();
      var properties = config.properties;
      var propertyName = void 0;

      this.elementHandlerLookup[tagName] = {};

      for (propertyName in properties) {
        if (properties.hasOwnProperty(propertyName)) {
          this.registerElementPropertyConfig(tagName, propertyName, properties[propertyName]);
        }
      }
    };

    EventManager.prototype.registerElementPropertyConfig = function registerElementPropertyConfig(tagName, propertyName, events) {
      this.elementHandlerLookup[tagName][propertyName] = this.createElementHandler(events);
    };

    EventManager.prototype.createElementHandler = function createElementHandler(events) {
      return {
        subscribe: function subscribe(target, callback) {
          events.forEach(function (changeEvent) {
            target.addEventListener(changeEvent, callback, false);
          });

          return function () {
            events.forEach(function (changeEvent) {
              target.removeEventListener(changeEvent, callback);
            });
          };
        }
      };
    };

    EventManager.prototype.registerElementHandler = function registerElementHandler(tagName, handler) {
      this.elementHandlerLookup[tagName.toLowerCase()] = handler;
    };

    EventManager.prototype.registerEventStrategy = function registerEventStrategy(eventName, strategy) {
      this.eventStrategyLookup[eventName] = strategy;
    };

    EventManager.prototype.getElementHandler = function getElementHandler(target, propertyName) {
      var tagName = void 0;
      var lookup = this.elementHandlerLookup;

      if (target.tagName) {
        tagName = target.tagName.toLowerCase();

        if (lookup[tagName] && lookup[tagName][propertyName]) {
          return lookup[tagName][propertyName];
        }

        if (propertyName === 'textContent' || propertyName === 'innerHTML') {
          return lookup['content editable']['value'];
        }

        if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
          return lookup['scrollable element'][propertyName];
        }
      }

      return null;
    };

    EventManager.prototype.addEventListener = function addEventListener(target, targetEvent, callback, delegate) {
      return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callback, delegate);
    };

    return EventManager;
  }();

  var DirtyChecker = exports.DirtyChecker = function () {
    function DirtyChecker() {
      _classCallCheck(this, DirtyChecker);

      this.tracked = [];
      this.checkDelay = 120;
    }

    DirtyChecker.prototype.addProperty = function addProperty(property) {
      var tracked = this.tracked;

      tracked.push(property);

      if (tracked.length === 1) {
        this.scheduleDirtyCheck();
      }
    };

    DirtyChecker.prototype.removeProperty = function removeProperty(property) {
      var tracked = this.tracked;
      tracked.splice(tracked.indexOf(property), 1);
    };

    DirtyChecker.prototype.scheduleDirtyCheck = function scheduleDirtyCheck() {
      var _this23 = this;

      setTimeout(function () {
        return _this23.check();
      }, this.checkDelay);
    };

    DirtyChecker.prototype.check = function check() {
      var tracked = this.tracked,
          i = tracked.length;

      while (i--) {
        var current = tracked[i];

        if (current.isDirty()) {
          current.call();
        }
      }

      if (tracked.length) {
        this.scheduleDirtyCheck();
      }
    };

    return DirtyChecker;
  }();

  var DirtyCheckProperty = exports.DirtyCheckProperty = (_dec5 = subscriberCollection(), _dec5(_class5 = function () {
    function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
      _classCallCheck(this, DirtyCheckProperty);

      this.dirtyChecker = dirtyChecker;
      this.obj = obj;
      this.propertyName = propertyName;
    }

    DirtyCheckProperty.prototype.getValue = function getValue() {
      return this.obj[this.propertyName];
    };

    DirtyCheckProperty.prototype.setValue = function setValue(newValue) {
      this.obj[this.propertyName] = newValue;
    };

    DirtyCheckProperty.prototype.call = function call() {
      var oldValue = this.oldValue;
      var newValue = this.getValue();

      this.callSubscribers(newValue, oldValue);

      this.oldValue = newValue;
    };

    DirtyCheckProperty.prototype.isDirty = function isDirty() {
      return this.oldValue !== this.obj[this.propertyName];
    };

    DirtyCheckProperty.prototype.subscribe = function subscribe(context, callable) {
      if (!this.hasSubscribers()) {
        this.oldValue = this.getValue();
        this.dirtyChecker.addProperty(this);
      }
      this.addSubscriber(context, callable);
    };

    DirtyCheckProperty.prototype.unsubscribe = function unsubscribe(context, callable) {
      if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
        this.dirtyChecker.removeProperty(this);
      }
    };

    return DirtyCheckProperty;
  }()) || _class5);
  var propertyAccessor = exports.propertyAccessor = {
    getValue: function getValue(obj, propertyName) {
      return obj[propertyName];
    },
    setValue: function setValue(value, obj, propertyName) {
      return obj[propertyName] = value;
    }
  };

  var PrimitiveObserver = exports.PrimitiveObserver = function () {
    function PrimitiveObserver(primitive, propertyName) {
      _classCallCheck(this, PrimitiveObserver);

      this.doNotCache = true;

      this.primitive = primitive;
      this.propertyName = propertyName;
    }

    PrimitiveObserver.prototype.getValue = function getValue() {
      return this.primitive[this.propertyName];
    };

    PrimitiveObserver.prototype.setValue = function setValue() {
      var type = _typeof(this.primitive);
      throw new Error('The ' + this.propertyName + ' property of a ' + type + ' (' + this.primitive + ') cannot be assigned.');
    };

    PrimitiveObserver.prototype.subscribe = function subscribe() {};

    PrimitiveObserver.prototype.unsubscribe = function unsubscribe() {};

    return PrimitiveObserver;
  }();

  var SetterObserver = exports.SetterObserver = (_dec6 = subscriberCollection(), _dec6(_class7 = function () {
    function SetterObserver(taskQueue, obj, propertyName) {
      _classCallCheck(this, SetterObserver);

      this.taskQueue = taskQueue;
      this.obj = obj;
      this.propertyName = propertyName;
      this.queued = false;
      this.observing = false;
    }

    SetterObserver.prototype.getValue = function getValue() {
      return this.obj[this.propertyName];
    };

    SetterObserver.prototype.setValue = function setValue(newValue) {
      this.obj[this.propertyName] = newValue;
    };

    SetterObserver.prototype.getterValue = function getterValue() {
      return this.currentValue;
    };

    SetterObserver.prototype.setterValue = function setterValue(newValue) {
      var oldValue = this.currentValue;

      if (oldValue !== newValue) {
        if (!this.queued) {
          this.oldValue = oldValue;
          this.queued = true;
          this.taskQueue.queueMicroTask(this);
        }

        this.currentValue = newValue;
      }
    };

    SetterObserver.prototype.call = function call() {
      var oldValue = this.oldValue;
      var newValue = this.currentValue;

      this.queued = false;

      this.callSubscribers(newValue, oldValue);
    };

    SetterObserver.prototype.subscribe = function subscribe(context, callable) {
      if (!this.observing) {
        this.convertProperty();
      }
      this.addSubscriber(context, callable);
    };

    SetterObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
      this.removeSubscriber(context, callable);
    };

    SetterObserver.prototype.convertProperty = function convertProperty() {
      this.observing = true;
      this.currentValue = this.obj[this.propertyName];
      this.setValue = this.setterValue;
      this.getValue = this.getterValue;

      try {
        Object.defineProperty(this.obj, this.propertyName, {
          configurable: true,
          enumerable: true,
          get: this.getValue.bind(this),
          set: this.setValue.bind(this)
        });
      } catch (_) {}
    };

    return SetterObserver;
  }()) || _class7);

  var XLinkAttributeObserver = exports.XLinkAttributeObserver = function () {
    function XLinkAttributeObserver(element, propertyName, attributeName) {
      _classCallCheck(this, XLinkAttributeObserver);

      this.element = element;
      this.propertyName = propertyName;
      this.attributeName = attributeName;
    }

    XLinkAttributeObserver.prototype.getValue = function getValue() {
      return this.element.getAttributeNS('http://www.w3.org/1999/xlink', this.attributeName);
    };

    XLinkAttributeObserver.prototype.setValue = function setValue(newValue) {
      return this.element.setAttributeNS('http://www.w3.org/1999/xlink', this.attributeName, newValue);
    };

    XLinkAttributeObserver.prototype.subscribe = function subscribe() {
      throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
    };

    return XLinkAttributeObserver;
  }();

  var dataAttributeAccessor = exports.dataAttributeAccessor = {
    getValue: function getValue(obj, propertyName) {
      return obj.getAttribute(propertyName);
    },
    setValue: function setValue(value, obj, propertyName) {
      return obj.setAttribute(propertyName, value);
    }
  };

  var DataAttributeObserver = exports.DataAttributeObserver = function () {
    function DataAttributeObserver(element, propertyName) {
      _classCallCheck(this, DataAttributeObserver);

      this.element = element;
      this.propertyName = propertyName;
    }

    DataAttributeObserver.prototype.getValue = function getValue() {
      return this.element.getAttribute(this.propertyName);
    };

    DataAttributeObserver.prototype.setValue = function setValue(newValue) {
      return this.element.setAttribute(this.propertyName, newValue);
    };

    DataAttributeObserver.prototype.subscribe = function subscribe() {
      throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
    };

    return DataAttributeObserver;
  }();

  var StyleObserver = exports.StyleObserver = function () {
    function StyleObserver(element, propertyName) {
      _classCallCheck(this, StyleObserver);

      this.element = element;
      this.propertyName = propertyName;

      this.styles = null;
      this.version = 0;
    }

    StyleObserver.prototype.getValue = function getValue() {
      return this.element.style.cssText;
    };

    StyleObserver.prototype.setValue = function setValue(newValue) {
      var styles = this.styles || {},
          style = void 0,
          version = this.version;

      if (newValue !== null && newValue !== undefined) {
        if (newValue instanceof Object) {
          for (style in newValue) {
            if (newValue.hasOwnProperty(style)) {
              styles[style] = version;
              this.element.style[style] = newValue[style];
            }
          }
        } else if (newValue.length) {
          var pairs = newValue.split(/(?:;|:(?!\/))\s*/);
          for (var _i6 = 0, length = pairs.length; _i6 < length; _i6++) {
            style = pairs[_i6].trim();
            if (!style) {
              continue;
            }

            styles[style] = version;

            this.element.style[style] = pairs[++_i6];
          }
        }
      }

      this.styles = styles;
      this.version += 1;

      if (version === 0) {
        return;
      }

      version -= 1;
      for (style in styles) {
        if (!styles.hasOwnProperty(style) || styles[style] !== version) {
          continue;
        }

        this.element.style[style] = '';
      }
    };

    StyleObserver.prototype.subscribe = function subscribe() {
      throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
    };

    return StyleObserver;
  }();

  var ValueAttributeObserver = exports.ValueAttributeObserver = (_dec7 = subscriberCollection(), _dec7(_class8 = function () {
    function ValueAttributeObserver(element, propertyName, handler) {
      _classCallCheck(this, ValueAttributeObserver);

      this.element = element;
      this.propertyName = propertyName;
      this.handler = handler;
      if (propertyName === 'files') {
        this.setValue = function () {};
      }
    }

    ValueAttributeObserver.prototype.getValue = function getValue() {
      return this.element[this.propertyName];
    };

    ValueAttributeObserver.prototype.setValue = function setValue(newValue) {
      newValue = newValue === undefined || newValue === null ? '' : newValue;
      if (this.element[this.propertyName] !== newValue) {
        this.element[this.propertyName] = newValue;
        this.notify();
      }
    };

    ValueAttributeObserver.prototype.notify = function notify() {
      var oldValue = this.oldValue;
      var newValue = this.getValue();

      this.callSubscribers(newValue, oldValue);

      this.oldValue = newValue;
    };

    ValueAttributeObserver.prototype.subscribe = function subscribe(context, callable) {
      if (!this.hasSubscribers()) {
        this.oldValue = this.getValue();
        this.disposeHandler = this.handler.subscribe(this.element, this.notify.bind(this));
      }

      this.addSubscriber(context, callable);
    };

    ValueAttributeObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
      if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
        this.disposeHandler();
        this.disposeHandler = null;
      }
    };

    return ValueAttributeObserver;
  }()) || _class8);


  var checkedArrayContext = 'CheckedObserver:array';

  var CheckedObserver = exports.CheckedObserver = (_dec8 = subscriberCollection(), _dec8(_class9 = function () {
    function CheckedObserver(element, handler, observerLocator) {
      _classCallCheck(this, CheckedObserver);

      this.element = element;
      this.handler = handler;
      this.observerLocator = observerLocator;
    }

    CheckedObserver.prototype.getValue = function getValue() {
      return this.value;
    };

    CheckedObserver.prototype.setValue = function setValue(newValue) {
      if (this.value === newValue) {
        return;
      }

      if (this.arrayObserver) {
        this.arrayObserver.unsubscribe(checkedArrayContext, this);
        this.arrayObserver = null;
      }

      if (this.element.type === 'checkbox' && Array.isArray(newValue)) {
        this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
        this.arrayObserver.subscribe(checkedArrayContext, this);
      }

      this.oldValue = this.value;
      this.value = newValue;
      this.synchronizeElement();
      this.notify();

      if (!this.initialSync) {
        this.initialSync = true;
        this.observerLocator.taskQueue.queueMicroTask(this);
      }
    };

    CheckedObserver.prototype.call = function call(context, splices) {
      this.synchronizeElement();
    };

    CheckedObserver.prototype.synchronizeElement = function synchronizeElement() {
      var value = this.value,
          element = this.element,
          elementValue = element.hasOwnProperty('model') ? element.model : element.value,
          isRadio = element.type === 'radio',
          matcher = element.matcher || function (a, b) {
        return a === b;
      };

      element.checked = isRadio && !!matcher(value, elementValue) || !isRadio && value === true || !isRadio && Array.isArray(value) && !!value.find(function (item) {
        return !!matcher(item, elementValue);
      });
    };

    CheckedObserver.prototype.synchronizeValue = function synchronizeValue() {
      var value = this.value,
          element = this.element,
          elementValue = element.hasOwnProperty('model') ? element.model : element.value,
          index = void 0,
          matcher = element.matcher || function (a, b) {
        return a === b;
      };

      if (element.type === 'checkbox') {
        if (Array.isArray(value)) {
          index = value.findIndex(function (item) {
            return !!matcher(item, elementValue);
          });
          if (element.checked && index === -1) {
            value.push(elementValue);
          } else if (!element.checked && index !== -1) {
            value.splice(index, 1);
          }

          return;
        } else {
          value = element.checked;
        }
      } else if (element.checked) {
        value = elementValue;
      } else {
        return;
      }

      this.oldValue = this.value;
      this.value = value;
      this.notify();
    };

    CheckedObserver.prototype.notify = function notify() {
      var oldValue = this.oldValue;
      var newValue = this.value;

      this.callSubscribers(newValue, oldValue);
    };

    CheckedObserver.prototype.subscribe = function subscribe(context, callable) {
      if (!this.hasSubscribers()) {
        this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
      }
      this.addSubscriber(context, callable);
    };

    CheckedObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
      if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
        this.disposeHandler();
        this.disposeHandler = null;
      }
    };

    CheckedObserver.prototype.unbind = function unbind() {
      if (this.arrayObserver) {
        this.arrayObserver.unsubscribe(checkedArrayContext, this);
        this.arrayObserver = null;
      }
    };

    return CheckedObserver;
  }()) || _class9);


  var selectArrayContext = 'SelectValueObserver:array';

  var SelectValueObserver = exports.SelectValueObserver = (_dec9 = subscriberCollection(), _dec9(_class10 = function () {
    function SelectValueObserver(element, handler, observerLocator) {
      _classCallCheck(this, SelectValueObserver);

      this.element = element;
      this.handler = handler;
      this.observerLocator = observerLocator;
    }

    SelectValueObserver.prototype.getValue = function getValue() {
      return this.value;
    };

    SelectValueObserver.prototype.setValue = function setValue(newValue) {
      if (newValue !== null && newValue !== undefined && this.element.multiple && !Array.isArray(newValue)) {
        throw new Error('Only null or Array instances can be bound to a multi-select.');
      }
      if (this.value === newValue) {
        return;
      }

      if (this.arrayObserver) {
        this.arrayObserver.unsubscribe(selectArrayContext, this);
        this.arrayObserver = null;
      }

      if (Array.isArray(newValue)) {
        this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
        this.arrayObserver.subscribe(selectArrayContext, this);
      }

      this.oldValue = this.value;
      this.value = newValue;
      this.synchronizeOptions();
      this.notify();

      if (!this.initialSync) {
        this.initialSync = true;
        this.observerLocator.taskQueue.queueMicroTask(this);
      }
    };

    SelectValueObserver.prototype.call = function call(context, splices) {
      this.synchronizeOptions();
    };

    SelectValueObserver.prototype.synchronizeOptions = function synchronizeOptions() {
      var value = this.value,
          clear = void 0,
          isArray = void 0;

      if (value === null || value === undefined) {
        clear = true;
      } else if (Array.isArray(value)) {
        isArray = true;
      }

      var options = this.element.options;
      var i = options.length;
      var matcher = this.element.matcher || function (a, b) {
        return a === b;
      };

      var _loop = function _loop() {
        var option = options.item(i);
        if (clear) {
          option.selected = false;
          return 'continue';
        }
        var optionValue = option.hasOwnProperty('model') ? option.model : option.value;
        if (isArray) {
          option.selected = !!value.find(function (item) {
            return !!matcher(optionValue, item);
          });
          return 'continue';
        }
        option.selected = !!matcher(optionValue, value);
      };

      while (i--) {
        var _ret2 = _loop();

        if (_ret2 === 'continue') continue;
      }
    };

    SelectValueObserver.prototype.synchronizeValue = function synchronizeValue() {
      var _this24 = this;

      var options = this.element.options,
          count = 0,
          value = [];

      for (var _i7 = 0, ii = options.length; _i7 < ii; _i7++) {
        var _option = options.item(_i7);
        if (!_option.selected) {
          continue;
        }
        value.push(_option.hasOwnProperty('model') ? _option.model : _option.value);
        count++;
      }

      if (this.element.multiple) {
        if (Array.isArray(this.value)) {
          var _ret3 = function () {
            var matcher = _this24.element.matcher || function (a, b) {
              return a === b;
            };

            var i = 0;

            var _loop2 = function _loop2() {
              var a = _this24.value[i];
              if (value.findIndex(function (b) {
                return matcher(a, b);
              }) === -1) {
                _this24.value.splice(i, 1);
              } else {
                i++;
              }
            };

            while (i < _this24.value.length) {
              _loop2();
            }

            i = 0;

            var _loop3 = function _loop3() {
              var a = value[i];
              if (_this24.value.findIndex(function (b) {
                return matcher(a, b);
              }) === -1) {
                _this24.value.push(a);
              }
              i++;
            };

            while (i < value.length) {
              _loop3();
            }
            return {
              v: void 0
            };
          }();

          if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
        }
      } else {
          if (count === 0) {
            value = null;
          } else {
            value = value[0];
          }
        }

      if (value !== this.value) {
        this.oldValue = this.value;
        this.value = value;
        this.notify();
      }
    };

    SelectValueObserver.prototype.notify = function notify() {
      var oldValue = this.oldValue;
      var newValue = this.value;

      this.callSubscribers(newValue, oldValue);
    };

    SelectValueObserver.prototype.subscribe = function subscribe(context, callable) {
      if (!this.hasSubscribers()) {
        this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
      }
      this.addSubscriber(context, callable);
    };

    SelectValueObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
      if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
        this.disposeHandler();
        this.disposeHandler = null;
      }
    };

    SelectValueObserver.prototype.bind = function bind() {
      var _this25 = this;

      this.domObserver = _aureliaPal.DOM.createMutationObserver(function () {
        _this25.synchronizeOptions();
        _this25.synchronizeValue();
      });
      this.domObserver.observe(this.element, { childList: true, subtree: true });
    };

    SelectValueObserver.prototype.unbind = function unbind() {
      this.domObserver.disconnect();
      this.domObserver = null;

      if (this.arrayObserver) {
        this.arrayObserver.unsubscribe(selectArrayContext, this);
        this.arrayObserver = null;
      }
    };

    return SelectValueObserver;
  }()) || _class10);

  var ClassObserver = exports.ClassObserver = function () {
    function ClassObserver(element) {
      _classCallCheck(this, ClassObserver);

      this.element = element;
      this.doNotCache = true;
      this.value = '';
      this.version = 0;
    }

    ClassObserver.prototype.getValue = function getValue() {
      return this.value;
    };

    ClassObserver.prototype.setValue = function setValue(newValue) {
      var nameIndex = this.nameIndex || {},
          version = this.version,
          names,
          name;

      if (newValue !== null && newValue !== undefined && newValue.length) {
        names = newValue.split(/\s+/);
        for (var _i8 = 0, length = names.length; _i8 < length; _i8++) {
          name = names[_i8];
          if (name === '') {
            continue;
          }
          nameIndex[name] = version;
          this.element.classList.add(name);
        }
      }

      this.value = newValue;
      this.nameIndex = nameIndex;
      this.version += 1;

      if (version === 0) {
        return;
      }

      version -= 1;
      for (name in nameIndex) {
        if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
          continue;
        }
        this.element.classList.remove(name);
      }
    };

    ClassObserver.prototype.subscribe = function subscribe() {
      throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.');
    };

    return ClassObserver;
  }();

  function hasDeclaredDependencies(descriptor) {
    return !!(descriptor && descriptor.get && descriptor.get.dependencies);
  }

  function declarePropertyDependencies(ctor, propertyName, dependencies) {
    var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);
    descriptor.get.dependencies = dependencies;
  }

  function computedFrom() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
      descriptor.get.dependencies = rest;
      return descriptor;
    };
  }

  var ComputedExpression = exports.ComputedExpression = function (_Expression19) {
    _inherits(ComputedExpression, _Expression19);

    function ComputedExpression(name, dependencies) {
      _classCallCheck(this, ComputedExpression);

      var _this26 = _possibleConstructorReturn(this, _Expression19.call(this));

      _this26.name = name;
      _this26.dependencies = dependencies;
      _this26.isAssignable = true;
      return _this26;
    }

    ComputedExpression.prototype.evaluate = function evaluate(scope, lookupFunctions) {
      return scope.bindingContext[this.name];
    };

    ComputedExpression.prototype.assign = function assign(scope, value) {
      scope.bindingContext[this.name] = value;
    };

    ComputedExpression.prototype.accept = function accept(visitor) {
      throw new Error('not implemented');
    };

    ComputedExpression.prototype.connect = function connect(binding, scope) {
      var dependencies = this.dependencies;
      var i = dependencies.length;
      while (i--) {
        dependencies[i].connect(binding, scope);
      }
    };

    return ComputedExpression;
  }(Expression);

  function createComputedObserver(obj, propertyName, descriptor, observerLocator) {
    var dependencies = descriptor.get.dependencies;
    if (!(dependencies instanceof ComputedExpression)) {
      var _i9 = dependencies.length;
      while (_i9--) {
        dependencies[_i9] = observerLocator.parser.parse(dependencies[_i9]);
      }
      dependencies = descriptor.get.dependencies = new ComputedExpression(propertyName, dependencies);
    }

    var scope = { bindingContext: obj, overrideContext: createOverrideContext(obj) };
    return new ExpressionObserver(scope, dependencies, observerLocator);
  }

  var elements = exports.elements = {
    a: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'target', 'transform', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    altGlyph: ['class', 'dx', 'dy', 'externalResourcesRequired', 'format', 'glyphRef', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    altGlyphDef: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    altGlyphItem: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    animate: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateColor: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateMotion: ['accumulate', 'additive', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keyPoints', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'origin', 'path', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'rotate', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateTransform: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'type', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    circle: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'r', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    clipPath: ['class', 'clipPathUnits', 'externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    'color-profile': ['id', 'local', 'name', 'rendering-intent', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    cursor: ['externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    defs: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    desc: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    ellipse: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    feBlend: ['class', 'height', 'id', 'in', 'in2', 'mode', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feColorMatrix: ['class', 'height', 'id', 'in', 'result', 'style', 'type', 'values', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feComponentTransfer: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feComposite: ['class', 'height', 'id', 'in', 'in2', 'k1', 'k2', 'k3', 'k4', 'operator', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feConvolveMatrix: ['bias', 'class', 'divisor', 'edgeMode', 'height', 'id', 'in', 'kernelMatrix', 'kernelUnitLength', 'order', 'preserveAlpha', 'result', 'style', 'targetX', 'targetY', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feDiffuseLighting: ['class', 'diffuseConstant', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feDisplacementMap: ['class', 'height', 'id', 'in', 'in2', 'result', 'scale', 'style', 'width', 'x', 'xChannelSelector', 'xml:base', 'xml:lang', 'xml:space', 'y', 'yChannelSelector'],
    feDistantLight: ['azimuth', 'elevation', 'id', 'xml:base', 'xml:lang', 'xml:space'],
    feFlood: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feFuncA: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncB: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncG: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncR: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feGaussianBlur: ['class', 'height', 'id', 'in', 'result', 'stdDeviation', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feImage: ['class', 'externalResourcesRequired', 'height', 'id', 'preserveAspectRatio', 'result', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feMerge: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feMergeNode: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    feMorphology: ['class', 'height', 'id', 'in', 'operator', 'radius', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feOffset: ['class', 'dx', 'dy', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    fePointLight: ['id', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
    feSpecularLighting: ['class', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'specularConstant', 'specularExponent', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feSpotLight: ['id', 'limitingConeAngle', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'specularExponent', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
    feTile: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feTurbulence: ['baseFrequency', 'class', 'height', 'id', 'numOctaves', 'result', 'seed', 'stitchTiles', 'style', 'type', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    filter: ['class', 'externalResourcesRequired', 'filterRes', 'filterUnits', 'height', 'id', 'primitiveUnits', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    font: ['class', 'externalResourcesRequired', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face': ['accent-height', 'alphabetic', 'ascent', 'bbox', 'cap-height', 'descent', 'font-family', 'font-size', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'hanging', 'id', 'ideographic', 'mathematical', 'overline-position', 'overline-thickness', 'panose-1', 'slope', 'stemh', 'stemv', 'strikethrough-position', 'strikethrough-thickness', 'underline-position', 'underline-thickness', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'widths', 'x-height', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-format': ['id', 'string', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-name': ['id', 'name', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-src': ['id', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-uri': ['id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    foreignObject: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    g: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    glyph: ['arabic-form', 'class', 'd', 'glyph-name', 'horiz-adv-x', 'id', 'lang', 'orientation', 'style', 'unicode', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    glyphRef: ['class', 'dx', 'dy', 'format', 'glyphRef', 'id', 'style', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    hkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space'],
    image: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    line: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'x1', 'x2', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
    linearGradient: ['class', 'externalResourcesRequired', 'gradientTransform', 'gradientUnits', 'id', 'spreadMethod', 'style', 'x1', 'x2', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
    marker: ['class', 'externalResourcesRequired', 'id', 'markerHeight', 'markerUnits', 'markerWidth', 'orient', 'preserveAspectRatio', 'refX', 'refY', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
    mask: ['class', 'externalResourcesRequired', 'height', 'id', 'maskContentUnits', 'maskUnits', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    metadata: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    'missing-glyph': ['class', 'd', 'horiz-adv-x', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    mpath: ['externalResourcesRequired', 'id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    path: ['class', 'd', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'pathLength', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    pattern: ['class', 'externalResourcesRequired', 'height', 'id', 'patternContentUnits', 'patternTransform', 'patternUnits', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'viewBox', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    polygon: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    polyline: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    radialGradient: ['class', 'cx', 'cy', 'externalResourcesRequired', 'fx', 'fy', 'gradientTransform', 'gradientUnits', 'id', 'r', 'spreadMethod', 'style', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    rect: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    script: ['externalResourcesRequired', 'id', 'type', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    set: ['attributeName', 'attributeType', 'begin', 'dur', 'end', 'externalResourcesRequired', 'fill', 'id', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    stop: ['class', 'id', 'offset', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    style: ['id', 'media', 'title', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    svg: ['baseProfile', 'class', 'contentScriptType', 'contentStyleType', 'externalResourcesRequired', 'height', 'id', 'onabort', 'onactivate', 'onclick', 'onerror', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onresize', 'onscroll', 'onunload', 'onzoom', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'version', 'viewBox', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'zoomAndPan'],
    switch: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    symbol: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
    text: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'transform', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    textPath: ['class', 'externalResourcesRequired', 'id', 'lengthAdjust', 'method', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'spacing', 'startOffset', 'style', 'systemLanguage', 'textLength', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    title: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    tref: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    tspan: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    use: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    view: ['externalResourcesRequired', 'id', 'preserveAspectRatio', 'viewBox', 'viewTarget', 'xml:base', 'xml:lang', 'xml:space', 'zoomAndPan'],
    vkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space']
  };

  var presentationElements = exports.presentationElements = {
    'a': true,
    'altGlyph': true,
    'animate': true,
    'animateColor': true,
    'circle': true,
    'clipPath': true,
    'defs': true,
    'ellipse': true,
    'feBlend': true,
    'feColorMatrix': true,
    'feComponentTransfer': true,
    'feComposite': true,
    'feConvolveMatrix': true,
    'feDiffuseLighting': true,
    'feDisplacementMap': true,
    'feFlood': true,
    'feGaussianBlur': true,
    'feImage': true,
    'feMerge': true,
    'feMorphology': true,
    'feOffset': true,
    'feSpecularLighting': true,
    'feTile': true,
    'feTurbulence': true,
    'filter': true,
    'font': true,
    'foreignObject': true,
    'g': true,
    'glyph': true,
    'glyphRef': true,
    'image': true,
    'line': true,
    'linearGradient': true,
    'marker': true,
    'mask': true,
    'missing-glyph': true,
    'path': true,
    'pattern': true,
    'polygon': true,
    'polyline': true,
    'radialGradient': true,
    'rect': true,
    'stop': true,
    'svg': true,
    'switch': true,
    'symbol': true,
    'text': true,
    'textPath': true,
    'tref': true,
    'tspan': true,
    'use': true
  };

  var presentationAttributes = exports.presentationAttributes = {
    'alignment-baseline': true,
    'baseline-shift': true,
    'clip-path': true,
    'clip-rule': true,
    'clip': true,
    'color-interpolation-filters': true,
    'color-interpolation': true,
    'color-profile': true,
    'color-rendering': true,
    'color': true,
    'cursor': true,
    'direction': true,
    'display': true,
    'dominant-baseline': true,
    'enable-background': true,
    'fill-opacity': true,
    'fill-rule': true,
    'fill': true,
    'filter': true,
    'flood-color': true,
    'flood-opacity': true,
    'font-family': true,
    'font-size-adjust': true,
    'font-size': true,
    'font-stretch': true,
    'font-style': true,
    'font-variant': true,
    'font-weight': true,
    'glyph-orientation-horizontal': true,
    'glyph-orientation-vertical': true,
    'image-rendering': true,
    'kerning': true,
    'letter-spacing': true,
    'lighting-color': true,
    'marker-end': true,
    'marker-mid': true,
    'marker-start': true,
    'mask': true,
    'opacity': true,
    'overflow': true,
    'pointer-events': true,
    'shape-rendering': true,
    'stop-color': true,
    'stop-opacity': true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    'stroke-linecap': true,
    'stroke-linejoin': true,
    'stroke-miterlimit': true,
    'stroke-opacity': true,
    'stroke-width': true,
    'stroke': true,
    'text-anchor': true,
    'text-decoration': true,
    'text-rendering': true,
    'unicode-bidi': true,
    'visibility': true,
    'word-spacing': true,
    'writing-mode': true
  };

  function createElement(html) {
    var div = _aureliaPal.DOM.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  }

  var SVGAnalyzer = exports.SVGAnalyzer = function () {
    function SVGAnalyzer() {
      _classCallCheck(this, SVGAnalyzer);

      if (createElement('<svg><altGlyph /></svg>').firstElementChild.nodeName === 'altglyph' && elements.altGlyph) {
        elements.altglyph = elements.altGlyph;
        delete elements.altGlyph;
        elements.altglyphdef = elements.altGlyphDef;
        delete elements.altGlyphDef;
        elements.altglyphitem = elements.altGlyphItem;
        delete elements.altGlyphItem;
        elements.glyphref = elements.glyphRef;
        delete elements.glyphRef;
      }
    }

    SVGAnalyzer.prototype.isStandardSvgAttribute = function isStandardSvgAttribute(nodeName, attributeName) {
      return presentationElements[nodeName] && presentationAttributes[attributeName] || elements[nodeName] && elements[nodeName].indexOf(attributeName) !== -1;
    };

    return SVGAnalyzer;
  }();

  var ObserverLocator = exports.ObserverLocator = (_temp = _class11 = function () {
    function ObserverLocator(taskQueue, eventManager, dirtyChecker, svgAnalyzer, parser) {
      _classCallCheck(this, ObserverLocator);

      this.taskQueue = taskQueue;
      this.eventManager = eventManager;
      this.dirtyChecker = dirtyChecker;
      this.svgAnalyzer = svgAnalyzer;
      this.parser = parser;
      this.adapters = [];
    }

    ObserverLocator.prototype.getObserver = function getObserver(obj, propertyName) {
      var observersLookup = obj.__observers__;
      var observer = void 0;

      if (observersLookup && propertyName in observersLookup) {
        return observersLookup[propertyName];
      }

      observer = this.createPropertyObserver(obj, propertyName);

      if (!observer.doNotCache) {
        if (observersLookup === undefined) {
          observersLookup = this.getOrCreateObserversLookup(obj);
        }

        observersLookup[propertyName] = observer;
      }

      return observer;
    };

    ObserverLocator.prototype.getOrCreateObserversLookup = function getOrCreateObserversLookup(obj) {
      return obj.__observers__ || this.createObserversLookup(obj);
    };

    ObserverLocator.prototype.createObserversLookup = function createObserversLookup(obj) {
      var value = {};

      try {
        Object.defineProperty(obj, "__observers__", {
          enumerable: false,
          configurable: false,
          writable: false,
          value: value
        });
      } catch (_) {}

      return value;
    };

    ObserverLocator.prototype.addAdapter = function addAdapter(adapter) {
      this.adapters.push(adapter);
    };

    ObserverLocator.prototype.getAdapterObserver = function getAdapterObserver(obj, propertyName, descriptor) {
      for (var _i10 = 0, ii = this.adapters.length; _i10 < ii; _i10++) {
        var adapter = this.adapters[_i10];
        var observer = adapter.getObserver(obj, propertyName, descriptor);
        if (observer) {
          return observer;
        }
      }
      return null;
    };

    ObserverLocator.prototype.createPropertyObserver = function createPropertyObserver(obj, propertyName) {
      var observerLookup = void 0;
      var descriptor = void 0;
      var handler = void 0;
      var xlinkResult = void 0;

      if (!(obj instanceof Object)) {
        return new PrimitiveObserver(obj, propertyName);
      }

      if (obj instanceof _aureliaPal.DOM.Element) {
        if (propertyName === 'class') {
          return new ClassObserver(obj);
        }
        if (propertyName === 'style' || propertyName === 'css') {
          return new StyleObserver(obj, propertyName);
        }
        handler = this.eventManager.getElementHandler(obj, propertyName);
        if (propertyName === 'value' && obj.tagName.toLowerCase() === 'select') {
          return new SelectValueObserver(obj, handler, this);
        }
        if (propertyName === 'checked' && obj.tagName.toLowerCase() === 'input') {
          return new CheckedObserver(obj, handler, this);
        }
        if (handler) {
          return new ValueAttributeObserver(obj, propertyName, handler);
        }
        xlinkResult = /^xlink:(.+)$/.exec(propertyName);
        if (xlinkResult) {
          return new XLinkAttributeObserver(obj, propertyName, xlinkResult[1]);
        }
        if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof _aureliaPal.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
          return new DataAttributeObserver(obj, propertyName);
        }
      }

      descriptor = Object.getPropertyDescriptor(obj, propertyName);

      if (hasDeclaredDependencies(descriptor)) {
        return createComputedObserver(obj, propertyName, descriptor, this);
      }

      var existingGetterOrSetter = void 0;
      if (descriptor && (existingGetterOrSetter = descriptor.get || descriptor.set)) {
        if (existingGetterOrSetter.getObserver) {
          return existingGetterOrSetter.getObserver(obj);
        }

        var adapterObserver = this.getAdapterObserver(obj, propertyName, descriptor);
        if (adapterObserver) {
          return adapterObserver;
        }
        return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
      }

      if (obj instanceof Array) {
        if (propertyName === 'length') {
          return this.getArrayObserver(obj).getLengthObserver();
        } else {
          return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
        }
      } else if (obj instanceof Map) {
        if (propertyName === 'size') {
          return this.getMapObserver(obj).getLengthObserver();
        } else {
          return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
        }
      } else if (obj instanceof Set) {
        if (propertyName === 'size') {
          return this.getSetObserver(obj).getLengthObserver();
        } else {
          return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
        }
      }

      return new SetterObserver(this.taskQueue, obj, propertyName);
    };

    ObserverLocator.prototype.getAccessor = function getAccessor(obj, propertyName) {
      if (obj instanceof _aureliaPal.DOM.Element) {
        if (propertyName === 'class' || propertyName === 'style' || propertyName === 'css' || propertyName === 'value' && (obj.tagName.toLowerCase() === 'input' || obj.tagName.toLowerCase() === 'select') || propertyName === 'checked' && obj.tagName.toLowerCase() === 'input' || /^xlink:.+$/.exec(propertyName)) {
          return this.getObserver(obj, propertyName);
        }
        if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof _aureliaPal.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
          return dataAttributeAccessor;
        }
      }
      return propertyAccessor;
    };

    ObserverLocator.prototype.getArrayObserver = function getArrayObserver(array) {
      return _getArrayObserver(this.taskQueue, array);
    };

    ObserverLocator.prototype.getMapObserver = function getMapObserver(map) {
      return _getMapObserver(this.taskQueue, map);
    };

    ObserverLocator.prototype.getSetObserver = function getSetObserver(set) {
      return _getSetObserver(this.taskQueue, set);
    };

    return ObserverLocator;
  }(), _class11.inject = [_aureliaTaskQueue.TaskQueue, EventManager, DirtyChecker, SVGAnalyzer, Parser], _temp);

  var ObjectObservationAdapter = exports.ObjectObservationAdapter = function () {
    function ObjectObservationAdapter() {
      _classCallCheck(this, ObjectObservationAdapter);
    }

    ObjectObservationAdapter.prototype.getObserver = function getObserver(object, propertyName, descriptor) {
      throw new Error('BindingAdapters must implement getObserver(object, propertyName).');
    };

    return ObjectObservationAdapter;
  }();

  var BindingExpression = exports.BindingExpression = function () {
    function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, lookupFunctions, attribute) {
      _classCallCheck(this, BindingExpression);

      this.observerLocator = observerLocator;
      this.targetProperty = targetProperty;
      this.sourceExpression = sourceExpression;
      this.mode = mode;
      this.lookupFunctions = lookupFunctions;
      this.attribute = attribute;
      this.discrete = false;
    }

    BindingExpression.prototype.createBinding = function createBinding(target) {
      return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.lookupFunctions);
    };

    return BindingExpression;
  }();

  var targetContext = 'Binding:target';

  var Binding = exports.Binding = (_dec10 = connectable(), _dec10(_class12 = function () {
    function Binding(observerLocator, sourceExpression, target, targetProperty, mode, lookupFunctions) {
      _classCallCheck(this, Binding);

      this.observerLocator = observerLocator;
      this.sourceExpression = sourceExpression;
      this.target = target;
      this.targetProperty = targetProperty;
      this.mode = mode;
      this.lookupFunctions = lookupFunctions;
    }

    Binding.prototype.updateTarget = function updateTarget(value) {
      this.targetObserver.setValue(value, this.target, this.targetProperty);
    };

    Binding.prototype.updateSource = function updateSource(value) {
      this.sourceExpression.assign(this.source, value, this.lookupFunctions);
    };

    Binding.prototype.call = function call(context, newValue, oldValue) {
      if (!this.isBound) {
        return;
      }
      if (context === sourceContext) {
        oldValue = this.targetObserver.getValue(this.target, this.targetProperty);
        newValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
        if (newValue !== oldValue) {
          this.updateTarget(newValue);
        }
        if (this.mode !== bindingMode.oneTime) {
          this._version++;
          this.sourceExpression.connect(this, this.source);
          this.unobserve(false);
        }
        return;
      }
      if (context === targetContext) {
        if (newValue !== this.sourceExpression.evaluate(this.source, this.lookupFunctions)) {
          this.updateSource(newValue);
        }
        return;
      }
      throw new Error('Unexpected call context ' + context);
    };

    Binding.prototype.bind = function bind(source) {
      if (this.isBound) {
        if (this.source === source) {
          return;
        }
        this.unbind();
      }
      this.isBound = true;
      this.source = source;

      if (this.sourceExpression.bind) {
        this.sourceExpression.bind(this, source, this.lookupFunctions);
      }

      var mode = this.mode;
      if (!this.targetObserver) {
        var method = mode === bindingMode.twoWay ? 'getObserver' : 'getAccessor';
        this.targetObserver = this.observerLocator[method](this.target, this.targetProperty);
      }

      if ('bind' in this.targetObserver) {
        this.targetObserver.bind();
      }
      var value = this.sourceExpression.evaluate(source, this.lookupFunctions);
      this.updateTarget(value);

      if (mode === bindingMode.oneWay) {
        enqueueBindingConnect(this);
      } else if (mode === bindingMode.twoWay) {
        this.sourceExpression.connect(this, source);
        this.targetObserver.subscribe(targetContext, this);
      }
    };

    Binding.prototype.unbind = function unbind() {
      if (!this.isBound) {
        return;
      }
      this.isBound = false;
      if (this.sourceExpression.unbind) {
        this.sourceExpression.unbind(this, this.source);
      }
      this.source = null;
      if ('unbind' in this.targetObserver) {
        this.targetObserver.unbind();
      }
      if (this.targetObserver.unsubscribe) {
        this.targetObserver.unsubscribe(targetContext, this);
      }
      this.unobserve(true);
    };

    Binding.prototype.connect = function connect(evaluate) {
      if (!this.isBound) {
        return;
      }
      if (evaluate) {
        var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
        this.updateTarget(value);
      }
      this.sourceExpression.connect(this, this.source);
    };

    return Binding;
  }()) || _class12);

  var CallExpression = exports.CallExpression = function () {
    function CallExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions) {
      _classCallCheck(this, CallExpression);

      this.observerLocator = observerLocator;
      this.targetProperty = targetProperty;
      this.sourceExpression = sourceExpression;
      this.lookupFunctions = lookupFunctions;
    }

    CallExpression.prototype.createBinding = function createBinding(target) {
      return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.lookupFunctions);
    };

    return CallExpression;
  }();

  var Call = exports.Call = function () {
    function Call(observerLocator, sourceExpression, target, targetProperty, lookupFunctions) {
      _classCallCheck(this, Call);

      this.sourceExpression = sourceExpression;
      this.target = target;
      this.targetProperty = observerLocator.getObserver(target, targetProperty);
      this.lookupFunctions = lookupFunctions;
    }

    Call.prototype.callSource = function callSource($event) {
      var overrideContext = this.source.overrideContext;
      Object.assign(overrideContext, $event);
      overrideContext.$event = $event;
      var mustEvaluate = true;
      var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
      delete overrideContext.$event;
      for (var prop in $event) {
        delete overrideContext[prop];
      }
      return result;
    };

    Call.prototype.bind = function bind(source) {
      var _this27 = this;

      if (this.isBound) {
        if (this.source === source) {
          return;
        }
        this.unbind();
      }
      this.isBound = true;
      this.source = source;

      if (this.sourceExpression.bind) {
        this.sourceExpression.bind(this, source, this.lookupFunctions);
      }
      this.targetProperty.setValue(function ($event) {
        return _this27.callSource($event);
      });
    };

    Call.prototype.unbind = function unbind() {
      if (!this.isBound) {
        return;
      }
      this.isBound = false;
      if (this.sourceExpression.unbind) {
        this.sourceExpression.unbind(this, this.source);
      }
      this.source = null;
      this.targetProperty.setValue(null);
    };

    return Call;
  }();

  var ValueConverterResource = exports.ValueConverterResource = function () {
    function ValueConverterResource(name) {
      _classCallCheck(this, ValueConverterResource);

      this.name = name;
    }

    ValueConverterResource.convention = function convention(name) {
      if (name.endsWith('ValueConverter')) {
        return new ValueConverterResource(camelCase(name.substring(0, name.length - 14)));
      }
    };

    ValueConverterResource.prototype.initialize = function initialize(container, target) {
      this.instance = container.get(target);
    };

    ValueConverterResource.prototype.register = function register(registry, name) {
      registry.registerValueConverter(name || this.name, this.instance);
    };

    ValueConverterResource.prototype.load = function load(container, target) {};

    return ValueConverterResource;
  }();

  function valueConverter(nameOrTarget) {
    if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
      return function (target) {
        _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ValueConverterResource(nameOrTarget), target);
      };
    }

    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ValueConverterResource(), nameOrTarget);
  }

  var BindingBehaviorResource = exports.BindingBehaviorResource = function () {
    function BindingBehaviorResource(name) {
      _classCallCheck(this, BindingBehaviorResource);

      this.name = name;
    }

    BindingBehaviorResource.convention = function convention(name) {
      if (name.endsWith('BindingBehavior')) {
        return new BindingBehaviorResource(camelCase(name.substring(0, name.length - 15)));
      }
    };

    BindingBehaviorResource.prototype.initialize = function initialize(container, target) {
      this.instance = container.get(target);
    };

    BindingBehaviorResource.prototype.register = function register(registry, name) {
      registry.registerBindingBehavior(name || this.name, this.instance);
    };

    BindingBehaviorResource.prototype.load = function load(container, target) {};

    return BindingBehaviorResource;
  }();

  function bindingBehavior(nameOrTarget) {
    if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
      return function (target) {
        _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new BindingBehaviorResource(nameOrTarget), target);
      };
    }

    _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new BindingBehaviorResource(), nameOrTarget);
  }

  var ListenerExpression = exports.ListenerExpression = function () {
    function ListenerExpression(eventManager, targetEvent, sourceExpression, delegate, preventDefault, lookupFunctions) {
      _classCallCheck(this, ListenerExpression);

      this.eventManager = eventManager;
      this.targetEvent = targetEvent;
      this.sourceExpression = sourceExpression;
      this.delegate = delegate;
      this.discrete = true;
      this.preventDefault = preventDefault;
      this.lookupFunctions = lookupFunctions;
    }

    ListenerExpression.prototype.createBinding = function createBinding(target) {
      return new Listener(this.eventManager, this.targetEvent, this.delegate, this.sourceExpression, target, this.preventDefault, this.lookupFunctions);
    };

    return ListenerExpression;
  }();

  var Listener = exports.Listener = function () {
    function Listener(eventManager, targetEvent, delegate, sourceExpression, target, preventDefault, lookupFunctions) {
      _classCallCheck(this, Listener);

      this.eventManager = eventManager;
      this.targetEvent = targetEvent;
      this.delegate = delegate;
      this.sourceExpression = sourceExpression;
      this.target = target;
      this.preventDefault = preventDefault;
      this.lookupFunctions = lookupFunctions;
    }

    Listener.prototype.callSource = function callSource(event) {
      var overrideContext = this.source.overrideContext;
      overrideContext.$event = event;
      var mustEvaluate = true;
      var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
      delete overrideContext.$event;
      if (result !== true && this.preventDefault) {
        event.preventDefault();
      }
      return result;
    };

    Listener.prototype.bind = function bind(source) {
      var _this28 = this;

      if (this.isBound) {
        if (this.source === source) {
          return;
        }
        this.unbind();
      }
      this.isBound = true;
      this.source = source;

      if (this.sourceExpression.bind) {
        this.sourceExpression.bind(this, source, this.lookupFunctions);
      }
      this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function (event) {
        return _this28.callSource(event);
      }, this.delegate);
    };

    Listener.prototype.unbind = function unbind() {
      if (!this.isBound) {
        return;
      }
      this.isBound = false;
      if (this.sourceExpression.unbind) {
        this.sourceExpression.unbind(this, this.source);
      }
      this.source = null;
      this._disposeListener();
      this._disposeListener = null;
    };

    return Listener;
  }();

  function getAU(element) {
    var au = element.au;

    if (au === undefined) {
      throw new Error('No Aurelia APIs are defined for the referenced element.');
    }

    return au;
  }

  var NameExpression = exports.NameExpression = function () {
    function NameExpression(sourceExpression, apiName, lookupFunctions) {
      _classCallCheck(this, NameExpression);

      this.sourceExpression = sourceExpression;
      this.apiName = apiName;
      this.lookupFunctions = lookupFunctions;
      this.discrete = true;
    }

    NameExpression.prototype.createBinding = function createBinding(target) {
      return new NameBinder(this.sourceExpression, NameExpression.locateAPI(target, this.apiName), this.lookupFunctions);
    };

    NameExpression.locateAPI = function locateAPI(element, apiName) {
      switch (apiName) {
        case 'element':
          return element;
        case 'controller':
          return getAU(element).controller;
        case 'view-model':
          return getAU(element).controller.viewModel;
        case 'view':
          return getAU(element).controller.view;
        default:
          var target = getAU(element)[apiName];

          if (target === undefined) {
            throw new Error('Attempted to reference "' + apiName + '", but it was not found amongst the target\'s API.');
          }

          return target.viewModel;
      }
    };

    return NameExpression;
  }();

  var NameBinder = function () {
    function NameBinder(sourceExpression, target, lookupFunctions) {
      _classCallCheck(this, NameBinder);

      this.sourceExpression = sourceExpression;
      this.target = target;
      this.lookupFunctions = lookupFunctions;
    }

    NameBinder.prototype.bind = function bind(source) {
      if (this.isBound) {
        if (this.source === source) {
          return;
        }
        this.unbind();
      }
      this.isBound = true;
      this.source = source;
      if (this.sourceExpression.bind) {
        this.sourceExpression.bind(this, source, this.lookupFunctions);
      }
      this.sourceExpression.assign(this.source, this.target, this.lookupFunctions);
    };

    NameBinder.prototype.unbind = function unbind() {
      if (!this.isBound) {
        return;
      }
      this.isBound = false;
      this.sourceExpression.assign(this.source, null, this.lookupFunctions);
      if (this.sourceExpression.unbind) {
        this.sourceExpression.unbind(this, this.source);
      }
      this.source = null;
    };

    return NameBinder;
  }();

  var lookupFunctions = {
    bindingBehaviors: function bindingBehaviors(name) {
      return null;
    },
    valueConverters: function valueConverters(name) {
      return null;
    }
  };

  var BindingEngine = exports.BindingEngine = (_temp2 = _class13 = function () {
    function BindingEngine(observerLocator, parser) {
      _classCallCheck(this, BindingEngine);

      this.observerLocator = observerLocator;
      this.parser = parser;
    }

    BindingEngine.prototype.createBindingExpression = function createBindingExpression(targetProperty, sourceExpression) {
      var mode = arguments.length <= 2 || arguments[2] === undefined ? bindingMode.oneWay : arguments[2];
      var lookupFunctions = arguments.length <= 3 || arguments[3] === undefined ? lookupFunctions : arguments[3];

      return new BindingExpression(this.observerLocator, targetProperty, this.parser.parse(sourceExpression), mode, lookupFunctions);
    };

    BindingEngine.prototype.propertyObserver = function propertyObserver(obj, propertyName) {
      var _this29 = this;

      return {
        subscribe: function subscribe(callback) {
          var observer = _this29.observerLocator.getObserver(obj, propertyName);
          observer.subscribe(callback);
          return {
            dispose: function dispose() {
              return observer.unsubscribe(callback);
            }
          };
        }
      };
    };

    BindingEngine.prototype.collectionObserver = function collectionObserver(collection) {
      var _this30 = this;

      return {
        subscribe: function subscribe(callback) {
          var observer = void 0;
          if (collection instanceof Array) {
            observer = _this30.observerLocator.getArrayObserver(collection);
          } else if (collection instanceof Map) {
            observer = _this30.observerLocator.getMapObserver(collection);
          } else if (collection instanceof Set) {
            observer = _this30.observerLocator.getSetObserver(collection);
          } else {
            throw new Error('collection must be an instance of Array, Map or Set.');
          }
          observer.subscribe(callback);
          return {
            dispose: function dispose() {
              return observer.unsubscribe(callback);
            }
          };
        }
      };
    };

    BindingEngine.prototype.expressionObserver = function expressionObserver(bindingContext, expression) {
      var scope = { bindingContext: bindingContext, overrideContext: createOverrideContext(bindingContext) };
      return new ExpressionObserver(scope, this.parser.parse(expression), this.observerLocator, lookupFunctions);
    };

    BindingEngine.prototype.parseExpression = function parseExpression(expression) {
      return this.parser.parse(expression);
    };

    BindingEngine.prototype.registerAdapter = function registerAdapter(adapter) {
      this.observerLocator.addAdapter(adapter);
    };

    return BindingEngine;
  }(), _class13.inject = [ObserverLocator, Parser], _temp2);


  var setProto = Set.prototype;

  function _getSetObserver(taskQueue, set) {
    return ModifySetObserver.for(taskQueue, set);
  }

  exports.getSetObserver = _getSetObserver;

  var ModifySetObserver = function (_ModifyCollectionObse3) {
    _inherits(ModifySetObserver, _ModifyCollectionObse3);

    function ModifySetObserver(taskQueue, set) {
      _classCallCheck(this, ModifySetObserver);

      return _possibleConstructorReturn(this, _ModifyCollectionObse3.call(this, taskQueue, set));
    }

    ModifySetObserver.for = function _for(taskQueue, set) {
      if (!('__set_observer__' in set)) {
        var observer = ModifySetObserver.create(taskQueue, set);
        Object.defineProperty(set, '__set_observer__', { value: observer, enumerable: false, configurable: false });
      }
      return set.__set_observer__;
    };

    ModifySetObserver.create = function create(taskQueue, set) {
      var observer = new ModifySetObserver(taskQueue, set);

      var proto = setProto;
      if (proto.add !== set.add || proto.delete !== set.delete || proto.clear !== set.clear) {
        proto = {
          add: set.add,
          delete: set.delete,
          clear: set.clear
        };
      }

      set['add'] = function () {
        var type = 'add';
        var oldSize = set.size;
        var methodCallResult = proto['add'].apply(set, arguments);
        var hasValue = set.size === oldSize;
        if (!hasValue) {
          observer.addChangeRecord({
            type: type,
            object: set,
            value: Array.from(set).pop()
          });
        }
        return methodCallResult;
      };

      set['delete'] = function () {
        var hasValue = set.has(arguments[0]);
        var methodCallResult = proto['delete'].apply(set, arguments);
        if (hasValue) {
          observer.addChangeRecord({
            type: 'delete',
            object: set,
            value: arguments[0]
          });
        }
        return methodCallResult;
      };

      set['clear'] = function () {
        var methodCallResult = proto['clear'].apply(set, arguments);
        observer.addChangeRecord({
          type: 'clear',
          object: set
        });
        return methodCallResult;
      };

      return observer;
    };

    return ModifySetObserver;
  }(ModifyCollectionObserver);

  function observable(targetOrConfig, key, descriptor) {
    var deco = function deco(target, key2, descriptor2) {
      var innerPropertyName = '_' + key2;
      var callbackName = targetOrConfig && targetOrConfig.changeHandler || key2 + 'Changed';

      var babel = descriptor2 !== undefined;

      if (babel) {
        if (typeof descriptor2.initializer === 'function') {
          target[innerPropertyName] = descriptor2.initializer();
        }
      } else {
        descriptor2 = {};
      }

      delete descriptor2.writable;
      delete descriptor2.initializer;

      descriptor2.get = function () {
        return this[innerPropertyName];
      };
      descriptor2.set = function (newValue) {
        var oldValue = this[innerPropertyName];
        this[innerPropertyName] = newValue;
        if (this[callbackName]) {
          this[callbackName](newValue, oldValue);
        }
      };

      descriptor2.get.dependencies = [innerPropertyName];

      if (!babel) {
        Object.defineProperty(target, key2, descriptor2);
      }
    };

    if (key) {
      var target = targetOrConfig;
      targetOrConfig = null;
      return deco(target, key, descriptor);
    }

    return deco;
  }
});
define('aurelia-logging',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLogger = getLogger;
  exports.addAppender = addAppender;
  exports.setLevel = setLevel;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var logLevel = exports.logLevel = {
    none: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4
  };

  var loggers = {};
  var currentLevel = logLevel.none;
  var appenders = [];
  var slice = Array.prototype.slice;
  var loggerConstructionKey = {};

  function log(logger, level, args) {
    var i = appenders.length;
    var current = void 0;

    args = slice.call(args);
    args.unshift(logger);

    while (i--) {
      current = appenders[i];
      current[level].apply(current, args);
    }
  }

  function debug() {
    if (currentLevel < 4) {
      return;
    }

    log(this, 'debug', arguments);
  }

  function info() {
    if (currentLevel < 3) {
      return;
    }

    log(this, 'info', arguments);
  }

  function warn() {
    if (currentLevel < 2) {
      return;
    }

    log(this, 'warn', arguments);
  }

  function error() {
    if (currentLevel < 1) {
      return;
    }

    log(this, 'error', arguments);
  }

  function connectLogger(logger) {
    logger.debug = debug;
    logger.info = info;
    logger.warn = warn;
    logger.error = error;
  }

  function createLogger(id) {
    var logger = new Logger(id, loggerConstructionKey);

    if (appenders.length) {
      connectLogger(logger);
    }

    return logger;
  }

  function getLogger(id) {
    return loggers[id] || (loggers[id] = createLogger(id));
  }

  function addAppender(appender) {
    appenders.push(appender);

    if (appenders.length === 1) {
      for (var key in loggers) {
        connectLogger(loggers[key]);
      }
    }
  }

  function setLevel(level) {
    currentLevel = level;
  }

  var Logger = exports.Logger = function () {
    function Logger(id, key) {
      _classCallCheck(this, Logger);

      if (key !== loggerConstructionKey) {
        throw new Error('You cannot instantiate "Logger". Use the "getLogger" API instead.');
      }

      this.id = id;
    }

    Logger.prototype.debug = function debug(message) {};

    Logger.prototype.info = function info(message) {};

    Logger.prototype.warn = function warn(message) {};

    Logger.prototype.error = function error(message) {};

    return Logger;
  }();
});
define('aurelia-path',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.relativeToFile = relativeToFile;
  exports.join = join;
  exports.buildQueryString = buildQueryString;
  exports.parseQueryString = parseQueryString;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  function trimDots(ary) {
    for (var i = 0; i < ary.length; ++i) {
      var part = ary[i];
      if (part === '.') {
        ary.splice(i, 1);
        i -= 1;
      } else if (part === '..') {
        if (i === 0 || i === 1 && ary[2] === '..' || ary[i - 1] === '..') {
          continue;
        } else if (i > 0) {
          ary.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  }

  function relativeToFile(name, file) {
    var fileParts = file && file.split('/');
    var nameParts = name.trim().split('/');

    if (nameParts[0].charAt(0) === '.' && fileParts) {
      var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
      nameParts.unshift.apply(nameParts, normalizedBaseParts);
    }

    trimDots(nameParts);

    return nameParts.join('/');
  }

  function join(path1, path2) {
    if (!path1) {
      return path2;
    }

    if (!path2) {
      return path1;
    }

    var schemeMatch = path1.match(/^([^/]*?:)\//);
    var scheme = schemeMatch && schemeMatch.length > 0 ? schemeMatch[1] : '';
    path1 = path1.substr(scheme.length);

    var urlPrefix = void 0;
    if (path1.indexOf('///') === 0 && scheme === 'file:') {
      urlPrefix = '///';
    } else if (path1.indexOf('//') === 0) {
      urlPrefix = '//';
    } else if (path1.indexOf('/') === 0) {
      urlPrefix = '/';
    } else {
      urlPrefix = '';
    }

    var trailingSlash = path2.slice(-1) === '/' ? '/' : '';

    var url1 = path1.split('/');
    var url2 = path2.split('/');
    var url3 = [];

    for (var i = 0, ii = url1.length; i < ii; ++i) {
      if (url1[i] === '..') {
        url3.pop();
      } else if (url1[i] === '.' || url1[i] === '') {
        continue;
      } else {
        url3.push(url1[i]);
      }
    }

    for (var _i = 0, _ii = url2.length; _i < _ii; ++_i) {
      if (url2[_i] === '..') {
        url3.pop();
      } else if (url2[_i] === '.' || url2[_i] === '') {
        continue;
      } else {
        url3.push(url2[_i]);
      }
    }

    return scheme + urlPrefix + url3.join('/') + trailingSlash;
  }

  var encode = encodeURIComponent;
  var encodeKey = function encodeKey(k) {
    return encode(k).replace('%24', '$');
  };

  function buildParam(key, value) {
    var result = [];
    if (value === null || value === undefined) {
      return result;
    }
    if (Array.isArray(value)) {
      for (var i = 0, l = value.length; i < l; i++) {
        var arrayKey = key + '[' + (_typeof(value[i]) === 'object' && value[i] !== null ? i : '') + ']';
        result = result.concat(buildParam(arrayKey, value[i]));
      }
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      for (var propertyName in value) {
        result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
      }
    } else {
      result.push(encodeKey(key) + '=' + encode(value));
    }
    return result;
  }

  function buildQueryString(params) {
    var pairs = [];
    var keys = Object.keys(params || {}).sort();
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      pairs = pairs.concat(buildParam(key, params[key]));
    }

    if (pairs.length === 0) {
      return '';
    }

    return pairs.join('&');
  }

  function processScalarParam(existedParam, value, isPrimitive) {
    if (Array.isArray(existedParam)) {
      existedParam.push(value);
      return existedParam;
    }
    if (existedParam !== undefined) {
      return isPrimitive ? value : [existedParam, value];
    }

    return value;
  }

  function parseComplexParam(queryParams, keys, value) {
    var currentParams = queryParams;
    var keysLastIndex = keys.length - 1;
    for (var j = 0; j <= keysLastIndex; j++) {
      var key = keys[j] === '' ? currentParams.length : keys[j];
      if (j < keysLastIndex) {
        currentParams = currentParams[key] = currentParams[key] || (isNaN(keys[j + 1]) ? {} : []);
      } else {
        currentParams = currentParams[key] = value;
      }
    }
  }

  function parseQueryString(queryString) {
    var queryParams = {};
    if (!queryString || typeof queryString !== 'string') {
      return queryParams;
    }

    var query = queryString;
    if (query.charAt(0) === '?') {
      query = query.substr(1);
    }

    var pairs = query.replace(/\+/g, ' ').split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      var key = decodeURIComponent(pair[0]);
      var isPrimitive = false;
      if (!key) {
        continue;
      }

      var keys = key.split('][');
      var keysLastIndex = keys.length - 1;

      if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
        keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
        keys = keys.shift().split('[').concat(keys);
        keysLastIndex = keys.length - 1;
      } else {
        isPrimitive = true;
        keysLastIndex = 0;
      }

      if (pair.length >= 2) {
        var value = pair[1] ? decodeURIComponent(pair[1]) : '';
        if (keysLastIndex) {
          parseComplexParam(queryParams, keys, value);
        } else {
          queryParams[key] = processScalarParam(queryParams[key], value, isPrimitive);
        }
      } else {
        queryParams[key] = true;
      }
    }
    return queryParams;
  }
});
define('aurelia-loader',['exports', 'aurelia-path', 'aurelia-metadata'], function (exports, _aureliaPath, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Loader = exports.TemplateRegistryEntry = exports.TemplateDependency = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TemplateDependency = exports.TemplateDependency = function TemplateDependency(src, name) {
    _classCallCheck(this, TemplateDependency);

    this.src = src;
    this.name = name;
  };

  var TemplateRegistryEntry = exports.TemplateRegistryEntry = function () {
    function TemplateRegistryEntry(address) {
      _classCallCheck(this, TemplateRegistryEntry);

      this.templateIsLoaded = false;
      this.factoryIsReady = false;
      this.resources = null;
      this.dependencies = null;

      this.address = address;
      this.onReady = null;
      this._template = null;
      this._factory = null;
    }

    TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
      var finalSrc = typeof src === 'string' ? (0, _aureliaPath.relativeToFile)(src, this.address) : _aureliaMetadata.Origin.get(src).moduleId;

      this.dependencies.push(new TemplateDependency(finalSrc, name));
    };

    _createClass(TemplateRegistryEntry, [{
      key: 'template',
      get: function get() {
        return this._template;
      },
      set: function set(value) {
        var address = this.address;
        var requires = void 0;
        var current = void 0;
        var src = void 0;
        var dependencies = void 0;

        this._template = value;
        this.templateIsLoaded = true;

        requires = value.content.querySelectorAll('require');
        dependencies = this.dependencies = new Array(requires.length);

        for (var i = 0, ii = requires.length; i < ii; ++i) {
          current = requires[i];
          src = current.getAttribute('from');

          if (!src) {
            throw new Error('<require> element in ' + address + ' has no "from" attribute.');
          }

          dependencies[i] = new TemplateDependency((0, _aureliaPath.relativeToFile)(src, address), current.getAttribute('as'));

          if (current.parentNode) {
            current.parentNode.removeChild(current);
          }
        }
      }
    }, {
      key: 'factory',
      get: function get() {
        return this._factory;
      },
      set: function set(value) {
        this._factory = value;
        this.factoryIsReady = true;
      }
    }]);

    return TemplateRegistryEntry;
  }();

  var Loader = exports.Loader = function () {
    function Loader() {
      _classCallCheck(this, Loader);

      this.templateRegistry = {};
    }

    Loader.prototype.map = function map(id, source) {
      throw new Error('Loaders must implement map(id, source).');
    };

    Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
      throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
    };

    Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
      throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
    };

    Loader.prototype.loadModule = function loadModule(id) {
      throw new Error('Loaders must implement loadModule(id).');
    };

    Loader.prototype.loadAllModules = function loadAllModules(ids) {
      throw new Error('Loader must implement loadAllModules(ids).');
    };

    Loader.prototype.loadTemplate = function loadTemplate(url) {
      throw new Error('Loader must implement loadTemplate(url).');
    };

    Loader.prototype.loadText = function loadText(url) {
      throw new Error('Loader must implement loadText(url).');
    };

    Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
      throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
    };

    Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
      throw new Error('Loader must implement addPlugin(pluginName, implementation).');
    };

    Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
      return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
    };

    return Loader;
  }();
});
define('aurelia-templating',['exports', 'aurelia-logging', 'aurelia-pal', 'aurelia-metadata', 'aurelia-path', 'aurelia-loader', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue'], function (exports, _aureliaLogging, _aureliaPal, _aureliaMetadata, _aureliaPath, _aureliaLoader, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TemplatingEngine = exports.ElementConfigResource = exports.CompositionEngine = exports.HtmlBehaviorResource = exports.BindableProperty = exports.BehaviorPropertyObserver = exports.Controller = exports.ViewEngine = exports.ModuleAnalyzer = exports.ResourceDescription = exports.ResourceModule = exports.ViewCompiler = exports.ViewFactory = exports.BoundViewFactory = exports.ViewSlot = exports._ContentSelector = exports.View = exports.ViewResources = exports.BindingLanguage = exports.ViewLocator = exports.InlineViewStrategy = exports.TemplateRegistryViewStrategy = exports.NoViewStrategy = exports.ConventionalViewStrategy = exports.RelativeViewStrategy = exports.viewStrategy = exports.TargetInstruction = exports.BehaviorInstruction = exports.ViewCompileInstruction = exports.ResourceLoadContext = exports.ElementEvents = exports.CompositionTransaction = exports.Animator = exports.animationEvent = undefined;
  exports._hyphenate = _hyphenate;
  exports.children = children;
  exports.child = child;
  exports.resource = resource;
  exports.behavior = behavior;
  exports.customElement = customElement;
  exports.customAttribute = customAttribute;
  exports.templateController = templateController;
  exports.bindable = bindable;
  exports.dynamicOptions = dynamicOptions;
  exports.useShadowDOM = useShadowDOM;
  exports.processAttributes = processAttributes;
  exports.processContent = processContent;
  exports.containerless = containerless;
  exports.useViewStrategy = useViewStrategy;
  exports.useView = useView;
  exports.inlineView = inlineView;
  exports.noView = noView;
  exports.elementConfig = elementConfig;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _class3, _temp, _dec, _class4, _dec2, _class5, _dec3, _class6, _dec4, _class7, _dec5, _class8, _class9, _temp2, _class11, _dec6, _class13, _dec7, _class14, _dec8, _class16, _dec9, _class17, _dec10, _class18;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var animationEvent = exports.animationEvent = {
    enterBegin: 'animation:enter:begin',
    enterActive: 'animation:enter:active',
    enterDone: 'animation:enter:done',
    enterTimeout: 'animation:enter:timeout',

    leaveBegin: 'animation:leave:begin',
    leaveActive: 'animation:leave:active',
    leaveDone: 'animation:leave:done',
    leaveTimeout: 'animation:leave:timeout',

    staggerNext: 'animation:stagger:next',

    removeClassBegin: 'animation:remove-class:begin',
    removeClassActive: 'animation:remove-class:active',
    removeClassDone: 'animation:remove-class:done',
    removeClassTimeout: 'animation:remove-class:timeout',

    addClassBegin: 'animation:add-class:begin',
    addClassActive: 'animation:add-class:active',
    addClassDone: 'animation:add-class:done',
    addClassTimeout: 'animation:add-class:timeout',

    animateBegin: 'animation:animate:begin',
    animateActive: 'animation:animate:active',
    animateDone: 'animation:animate:done',
    animateTimeout: 'animation:animate:timeout',

    sequenceBegin: 'animation:sequence:begin',
    sequenceDone: 'animation:sequence:done'
  };

  var Animator = exports.Animator = function () {
    function Animator() {
      _classCallCheck(this, Animator);
    }

    Animator.prototype.enter = function enter(element) {
      return Promise.resolve(false);
    };

    Animator.prototype.leave = function leave(element) {
      return Promise.resolve(false);
    };

    Animator.prototype.removeClass = function removeClass(element, className) {
      element.classList.remove(className);
      return Promise.resolve(false);
    };

    Animator.prototype.addClass = function addClass(element, className) {
      element.classList.add(className);
      return Promise.resolve(false);
    };

    Animator.prototype.animate = function animate(element, className) {
      return Promise.resolve(false);
    };

    Animator.prototype.runSequence = function runSequence(animations) {};

    Animator.prototype.registerEffect = function registerEffect(effectName, properties) {};

    Animator.prototype.unregisterEffect = function unregisterEffect(effectName) {};

    return Animator;
  }();

  var CompositionTransaction = exports.CompositionTransaction = function () {
    function CompositionTransaction() {
      _classCallCheck(this, CompositionTransaction);

      this._ownershipToken = null;
      this._compositionCount = 0;
    }

    CompositionTransaction.prototype.tryCapture = function tryCapture() {
      if (this._ownershipToken !== null) {
        return null;
      }

      return this._ownershipToken = this._createOwnershipToken();
    };

    CompositionTransaction.prototype.enlist = function enlist() {
      var that = this;

      that._compositionCount++;

      return {
        done: function done() {
          that._compositionCount--;
          that._tryCompleteTransaction();
        }
      };
    };

    CompositionTransaction.prototype._tryCompleteTransaction = function _tryCompleteTransaction() {
      if (this._compositionCount <= 0) {
        this._compositionCount = 0;

        if (this._ownershipToken !== null) {
          var capture = this._ownershipToken;
          this._ownershipToken = null;
          capture._resolve();
        }
      }
    };

    CompositionTransaction.prototype._createOwnershipToken = function _createOwnershipToken() {
      var _this = this;

      var token = {};
      var promise = new Promise(function (resolve, reject) {
        token._resolve = resolve;
      });

      token.waitForCompositionComplete = function () {
        _this._tryCompleteTransaction();
        return promise;
      };

      return token;
    };

    return CompositionTransaction;
  }();

  var capitalMatcher = /([A-Z])/g;

  function addHyphenAndLower(char) {
    return '-' + char.toLowerCase();
  }

  function _hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
  }

  var ElementEvents = exports.ElementEvents = function () {
    function ElementEvents(element) {
      _classCallCheck(this, ElementEvents);

      this.element = element;
      this.subscriptions = {};
    }

    ElementEvents.prototype._enqueueHandler = function _enqueueHandler(handler) {
      this.subscriptions[handler.eventName] = this.subscriptions[handler.eventName] || [];
      this.subscriptions[handler.eventName].push(handler);
    };

    ElementEvents.prototype._dequeueHandler = function _dequeueHandler(handler) {
      var index = void 0;
      var subscriptions = this.subscriptions[handler.eventName];
      if (subscriptions) {
        index = subscriptions.indexOf(handler);
        if (index > -1) {
          subscriptions.splice(index, 1);
        }
      }
      return handler;
    };

    ElementEvents.prototype.publish = function publish(eventName) {
      var detail = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
      var cancelable = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

      var event = _aureliaPal.DOM.createCustomEvent(eventName, { cancelable: cancelable, bubbles: bubbles, detail: detail });
      this.element.dispatchEvent(event);
    };

    ElementEvents.prototype.subscribe = function subscribe(eventName, handler) {
      var _this2 = this;

      var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

      if (handler && typeof handler === 'function') {
        handler.eventName = eventName;
        handler.handler = handler;
        handler.bubbles = bubbles;
        handler.dispose = function () {
          _this2.element.removeEventListener(eventName, handler, bubbles);
          _this2._dequeueHandler(handler);
        };
        this.element.addEventListener(eventName, handler, bubbles);
        this._enqueueHandler(handler);
        return handler;
      }
    };

    ElementEvents.prototype.subscribeOnce = function subscribeOnce(eventName, handler) {
      var _this3 = this;

      var bubbles = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

      if (handler && typeof handler === 'function') {
        var _ret = function () {
          var _handler = function _handler(event) {
            handler(event);
            _handler.dispose();
          };
          return {
            v: _this3.subscribe(eventName, _handler, bubbles)
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    };

    ElementEvents.prototype.dispose = function dispose(eventName) {
      if (eventName && typeof eventName === 'string') {
        var subscriptions = this.subscriptions[eventName];
        if (subscriptions) {
          while (subscriptions.length) {
            var subscription = subscriptions.pop();
            if (subscription) {
              subscription.dispose();
            }
          }
        }
      } else {
        this.disposeAll();
      }
    };

    ElementEvents.prototype.disposeAll = function disposeAll() {
      for (var key in this.subscriptions) {
        this.dispose(key);
      }
    };

    return ElementEvents;
  }();

  var ResourceLoadContext = exports.ResourceLoadContext = function () {
    function ResourceLoadContext() {
      _classCallCheck(this, ResourceLoadContext);

      this.dependencies = {};
    }

    ResourceLoadContext.prototype.addDependency = function addDependency(url) {
      this.dependencies[url] = true;
    };

    ResourceLoadContext.prototype.hasDependency = function hasDependency(url) {
      return url in this.dependencies;
    };

    return ResourceLoadContext;
  }();

  var ViewCompileInstruction = exports.ViewCompileInstruction = function ViewCompileInstruction() {
    var targetShadowDOM = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var compileSurrogate = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    _classCallCheck(this, ViewCompileInstruction);

    this.targetShadowDOM = targetShadowDOM;
    this.compileSurrogate = compileSurrogate;
    this.associatedModuleId = null;
  };

  ViewCompileInstruction.normal = new ViewCompileInstruction();

  var BehaviorInstruction = exports.BehaviorInstruction = function () {
    BehaviorInstruction.enhance = function enhance() {
      var instruction = new BehaviorInstruction();
      instruction.enhance = true;
      return instruction;
    };

    BehaviorInstruction.unitTest = function unitTest(type, attributes) {
      var instruction = new BehaviorInstruction();
      instruction.type = type;
      instruction.attributes = attributes || {};
      return instruction;
    };

    BehaviorInstruction.element = function element(node, type) {
      var instruction = new BehaviorInstruction();
      instruction.type = type;
      instruction.attributes = {};
      instruction.anchorIsContainer = !(node.hasAttribute('containerless') || type.containerless);
      instruction.initiatedByBehavior = true;
      return instruction;
    };

    BehaviorInstruction.attribute = function attribute(attrName, type) {
      var instruction = new BehaviorInstruction();
      instruction.attrName = attrName;
      instruction.type = type || null;
      instruction.attributes = {};
      return instruction;
    };

    BehaviorInstruction.dynamic = function dynamic(host, viewModel, viewFactory) {
      var instruction = new BehaviorInstruction();
      instruction.host = host;
      instruction.viewModel = viewModel;
      instruction.viewFactory = viewFactory;
      instruction.inheritBindingContext = true;
      return instruction;
    };

    function BehaviorInstruction() {
      _classCallCheck(this, BehaviorInstruction);

      this.initiatedByBehavior = false;
      this.enhance = false;
      this.partReplacements = null;
      this.viewFactory = null;
      this.originalAttrName = null;
      this.skipContentProcessing = false;
      this.contentFactory = null;
      this.viewModel = null;
      this.anchorIsContainer = false;
      this.host = null;
      this.attributes = null;
      this.type = null;
      this.attrName = null;
      this.inheritBindingContext = false;
    }

    return BehaviorInstruction;
  }();

  BehaviorInstruction.normal = new BehaviorInstruction();

  var TargetInstruction = exports.TargetInstruction = (_temp = _class3 = function () {
    TargetInstruction.contentSelector = function contentSelector(node, parentInjectorId) {
      var instruction = new TargetInstruction();
      instruction.parentInjectorId = parentInjectorId;
      instruction.contentSelector = true;
      instruction.selector = node.getAttribute('select');
      return instruction;
    };

    TargetInstruction.contentExpression = function contentExpression(expression) {
      var instruction = new TargetInstruction();
      instruction.contentExpression = expression;
      return instruction;
    };

    TargetInstruction.lifting = function lifting(parentInjectorId, liftingInstruction) {
      var instruction = new TargetInstruction();
      instruction.parentInjectorId = parentInjectorId;
      instruction.expressions = TargetInstruction.noExpressions;
      instruction.behaviorInstructions = [liftingInstruction];
      instruction.viewFactory = liftingInstruction.viewFactory;
      instruction.providers = [liftingInstruction.type.target];
      instruction.lifting = true;
      return instruction;
    };

    TargetInstruction.normal = function normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction) {
      var instruction = new TargetInstruction();
      instruction.injectorId = injectorId;
      instruction.parentInjectorId = parentInjectorId;
      instruction.providers = providers;
      instruction.behaviorInstructions = behaviorInstructions;
      instruction.expressions = expressions;
      instruction.anchorIsContainer = elementInstruction ? elementInstruction.anchorIsContainer : true;
      instruction.elementInstruction = elementInstruction;
      return instruction;
    };

    TargetInstruction.surrogate = function surrogate(providers, behaviorInstructions, expressions, values) {
      var instruction = new TargetInstruction();
      instruction.expressions = expressions;
      instruction.behaviorInstructions = behaviorInstructions;
      instruction.providers = providers;
      instruction.values = values;
      return instruction;
    };

    function TargetInstruction() {
      _classCallCheck(this, TargetInstruction);

      this.injectorId = null;
      this.parentInjectorId = null;

      this.contentSelector = false;
      this.selector = null;

      this.contentExpression = null;

      this.expressions = null;
      this.behaviorInstructions = null;
      this.providers = null;

      this.viewFactory = null;

      this.anchorIsContainer = false;
      this.elementInstruction = null;
      this.lifting = false;

      this.values = null;
    }

    return TargetInstruction;
  }(), _class3.noExpressions = Object.freeze([]), _temp);
  var viewStrategy = exports.viewStrategy = _aureliaMetadata.protocol.create('aurelia:view-strategy', {
    validate: function validate(target) {
      if (!(typeof target.loadViewFactory === 'function')) {
        return 'View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>';
      }

      return true;
    },
    compose: function compose(target) {
      if (!(typeof target.makeRelativeTo === 'function')) {
        target.makeRelativeTo = _aureliaPal.PLATFORM.noop;
      }
    }
  });

  var RelativeViewStrategy = exports.RelativeViewStrategy = (_dec = viewStrategy(), _dec(_class4 = function () {
    function RelativeViewStrategy(path) {
      _classCallCheck(this, RelativeViewStrategy);

      this.path = path;
      this.absolutePath = null;
    }

    RelativeViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
      if (this.absolutePath === null && this.moduleId) {
        this.absolutePath = (0, _aureliaPath.relativeToFile)(this.path, this.moduleId);
      }

      compileInstruction.associatedModuleId = this.moduleId;
      return viewEngine.loadViewFactory(this.absolutePath || this.path, compileInstruction, loadContext);
    };

    RelativeViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(file) {
      if (this.absolutePath === null) {
        this.absolutePath = (0, _aureliaPath.relativeToFile)(this.path, file);
      }
    };

    return RelativeViewStrategy;
  }()) || _class4);
  var ConventionalViewStrategy = exports.ConventionalViewStrategy = (_dec2 = viewStrategy(), _dec2(_class5 = function () {
    function ConventionalViewStrategy(viewLocator, origin) {
      _classCallCheck(this, ConventionalViewStrategy);

      this.moduleId = origin.moduleId;
      this.viewUrl = viewLocator.convertOriginToViewUrl(origin);
    }

    ConventionalViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
      compileInstruction.associatedModuleId = this.moduleId;
      return viewEngine.loadViewFactory(this.viewUrl, compileInstruction, loadContext);
    };

    return ConventionalViewStrategy;
  }()) || _class5);
  var NoViewStrategy = exports.NoViewStrategy = (_dec3 = viewStrategy(), _dec3(_class6 = function () {
    function NoViewStrategy() {
      _classCallCheck(this, NoViewStrategy);
    }

    NoViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
      return Promise.resolve(null);
    };

    return NoViewStrategy;
  }()) || _class6);
  var TemplateRegistryViewStrategy = exports.TemplateRegistryViewStrategy = (_dec4 = viewStrategy(), _dec4(_class7 = function () {
    function TemplateRegistryViewStrategy(moduleId, entry) {
      _classCallCheck(this, TemplateRegistryViewStrategy);

      this.moduleId = moduleId;
      this.entry = entry;
    }

    TemplateRegistryViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
      var entry = this.entry;

      if (entry.factoryIsReady) {
        return Promise.resolve(entry.factory);
      }

      compileInstruction.associatedModuleId = this.moduleId;
      return viewEngine.loadViewFactory(entry, compileInstruction, loadContext);
    };

    return TemplateRegistryViewStrategy;
  }()) || _class7);
  var InlineViewStrategy = exports.InlineViewStrategy = (_dec5 = viewStrategy(), _dec5(_class8 = function () {
    function InlineViewStrategy(markup, dependencies, dependencyBaseUrl) {
      _classCallCheck(this, InlineViewStrategy);

      this.markup = markup;
      this.dependencies = dependencies || null;
      this.dependencyBaseUrl = dependencyBaseUrl || '';
    }

    InlineViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext) {
      var entry = this.entry;
      var dependencies = this.dependencies;

      if (entry && entry.factoryIsReady) {
        return Promise.resolve(entry.factory);
      }

      this.entry = entry = new _aureliaLoader.TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl);
      entry.template = _aureliaPal.DOM.createTemplateFromMarkup(this.markup);

      if (dependencies !== null) {
        for (var i = 0, ii = dependencies.length; i < ii; ++i) {
          var current = dependencies[i];

          if (typeof current === 'string' || typeof current === 'function') {
            entry.addDependency(current);
          } else {
            entry.addDependency(current.from, current.as);
          }
        }
      }

      compileInstruction.associatedModuleId = this.moduleId;
      return viewEngine.loadViewFactory(entry, compileInstruction, loadContext);
    };

    return InlineViewStrategy;
  }()) || _class8);
  var ViewLocator = exports.ViewLocator = (_temp2 = _class9 = function () {
    function ViewLocator() {
      _classCallCheck(this, ViewLocator);
    }

    ViewLocator.prototype.getViewStrategy = function getViewStrategy(value) {
      if (!value) {
        return null;
      }

      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && 'getViewStrategy' in value) {
        var _origin = _aureliaMetadata.Origin.get(value.constructor);

        value = value.getViewStrategy();

        if (typeof value === 'string') {
          value = new RelativeViewStrategy(value);
        }

        viewStrategy.assert(value);

        if (_origin) {
          value.makeRelativeTo(_origin.moduleId);
        }

        return value;
      }

      if (typeof value === 'string') {
        value = new RelativeViewStrategy(value);
      }

      if (viewStrategy.validate(value)) {
        return value;
      }

      if (typeof value !== 'function') {
        value = value.constructor;
      }

      var origin = _aureliaMetadata.Origin.get(value);
      var strategy = _aureliaMetadata.metadata.get(ViewLocator.viewStrategyMetadataKey, value);

      if (!strategy) {
        if (!origin) {
          throw new Error('Cannot determinte default view strategy for object.', value);
        }

        strategy = this.createFallbackViewStrategy(origin);
      } else if (origin) {
        strategy.moduleId = origin.moduleId;
      }

      return strategy;
    };

    ViewLocator.prototype.createFallbackViewStrategy = function createFallbackViewStrategy(origin) {
      return new ConventionalViewStrategy(this, origin);
    };

    ViewLocator.prototype.convertOriginToViewUrl = function convertOriginToViewUrl(origin) {
      var moduleId = origin.moduleId;
      var id = moduleId.endsWith('.js') || moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
      return id + '.html';
    };

    return ViewLocator;
  }(), _class9.viewStrategyMetadataKey = 'aurelia:view-strategy', _temp2);

  var BindingLanguage = exports.BindingLanguage = function () {
    function BindingLanguage() {
      _classCallCheck(this, BindingLanguage);
    }

    BindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, attrName, attrValue) {
      throw new Error('A BindingLanguage must implement inspectAttribute(...)');
    };

    BindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
      throw new Error('A BindingLanguage must implement createAttributeInstruction(...)');
    };

    BindingLanguage.prototype.parseText = function parseText(resources, value) {
      throw new Error('A BindingLanguage must implement parseText(...)');
    };

    return BindingLanguage;
  }();

  function register(lookup, name, resource, type) {
    if (!name) {
      return;
    }

    var existing = lookup[name];
    if (existing) {
      if (existing !== resource) {
        throw new Error('Attempted to register ' + type + ' when one with the same name already exists. Name: ' + name + '.');
      }

      return;
    }

    lookup[name] = resource;
  }

  var ViewResources = exports.ViewResources = function () {
    function ViewResources(parent, viewUrl) {
      _classCallCheck(this, ViewResources);

      this.bindingLanguage = null;

      this.parent = parent || null;
      this.hasParent = this.parent !== null;
      this.viewUrl = viewUrl || '';
      this.lookupFunctions = {
        valueConverters: this.getValueConverter.bind(this),
        bindingBehaviors: this.getBindingBehavior.bind(this)
      };
      this.attributes = {};
      this.elements = {};
      this.valueConverters = {};
      this.bindingBehaviors = {};
      this.attributeMap = {};
      this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = false;
    }

    ViewResources.prototype._tryAddHook = function _tryAddHook(obj, name) {
      if (typeof obj[name] === 'function') {
        var func = obj[name].bind(obj);
        var counter = 1;
        var callbackName = void 0;

        while (this[callbackName = name + counter.toString()] !== undefined) {
          counter++;
        }

        this[name] = true;
        this[callbackName] = func;
      }
    };

    ViewResources.prototype._invokeHook = function _invokeHook(name, one, two, three, four) {
      if (this.hasParent) {
        this.parent._invokeHook(name, one, two, three, four);
      }

      if (this[name]) {
        this[name + '1'](one, two, three, four);

        var callbackName = name + '2';
        if (this[callbackName]) {
          this[callbackName](one, two, three, four);

          callbackName = name + '3';
          if (this[callbackName]) {
            this[callbackName](one, two, three, four);

            var counter = 4;

            while (this[callbackName = name + counter.toString()] !== undefined) {
              this[callbackName](one, two, three, four);
              counter++;
            }
          }
        }
      }
    };

    ViewResources.prototype.registerViewEngineHooks = function registerViewEngineHooks(hooks) {
      this._tryAddHook(hooks, 'beforeCompile');
      this._tryAddHook(hooks, 'afterCompile');
      this._tryAddHook(hooks, 'beforeCreate');
      this._tryAddHook(hooks, 'afterCreate');
      this._tryAddHook(hooks, 'beforeBind');
      this._tryAddHook(hooks, 'beforeUnbind');
    };

    ViewResources.prototype.getBindingLanguage = function getBindingLanguage(bindingLanguageFallback) {
      return this.bindingLanguage || (this.bindingLanguage = bindingLanguageFallback);
    };

    ViewResources.prototype.patchInParent = function patchInParent(newParent) {
      var originalParent = this.parent;

      this.parent = newParent || null;
      this.hasParent = this.parent !== null;

      if (newParent.parent === null) {
        newParent.parent = originalParent;
        newParent.hasParent = originalParent !== null;
      }
    };

    ViewResources.prototype.relativeToView = function relativeToView(path) {
      return (0, _aureliaPath.relativeToFile)(path, this.viewUrl);
    };

    ViewResources.prototype.registerElement = function registerElement(tagName, behavior) {
      register(this.elements, tagName, behavior, 'an Element');
    };

    ViewResources.prototype.getElement = function getElement(tagName) {
      return this.elements[tagName] || (this.hasParent ? this.parent.getElement(tagName) : null);
    };

    ViewResources.prototype.mapAttribute = function mapAttribute(attribute) {
      return this.attributeMap[attribute] || (this.hasParent ? this.parent.mapAttribute(attribute) : null);
    };

    ViewResources.prototype.registerAttribute = function registerAttribute(attribute, behavior, knownAttribute) {
      this.attributeMap[attribute] = knownAttribute;
      register(this.attributes, attribute, behavior, 'an Attribute');
    };

    ViewResources.prototype.getAttribute = function getAttribute(attribute) {
      return this.attributes[attribute] || (this.hasParent ? this.parent.getAttribute(attribute) : null);
    };

    ViewResources.prototype.registerValueConverter = function registerValueConverter(name, valueConverter) {
      register(this.valueConverters, name, valueConverter, 'a ValueConverter');
    };

    ViewResources.prototype.getValueConverter = function getValueConverter(name) {
      return this.valueConverters[name] || (this.hasParent ? this.parent.getValueConverter(name) : null);
    };

    ViewResources.prototype.registerBindingBehavior = function registerBindingBehavior(name, bindingBehavior) {
      register(this.bindingBehaviors, name, bindingBehavior, 'a BindingBehavior');
    };

    ViewResources.prototype.getBindingBehavior = function getBindingBehavior(name) {
      return this.bindingBehaviors[name] || (this.hasParent ? this.parent.getBindingBehavior(name) : null);
    };

    return ViewResources;
  }();

  var View = exports.View = function () {
    function View(viewFactory, fragment, controllers, bindings, children, contentSelectors) {
      _classCallCheck(this, View);

      this.viewFactory = viewFactory;
      this.resources = viewFactory.resources;
      this.fragment = fragment;
      this.controllers = controllers;
      this.bindings = bindings;
      this.children = children;
      this.contentSelectors = contentSelectors;
      this.firstChild = fragment.firstChild;
      this.lastChild = fragment.lastChild;
      this.fromCache = false;
      this.isBound = false;
      this.isAttached = false;
      this.fromCache = false;
      this.bindingContext = null;
      this.overrideContext = null;
      this.controller = null;
      this.viewModelScope = null;
      this._isUserControlled = false;
    }

    View.prototype.returnToCache = function returnToCache() {
      this.viewFactory.returnViewToCache(this);
    };

    View.prototype.created = function created() {
      var i = void 0;
      var ii = void 0;
      var controllers = this.controllers;

      for (i = 0, ii = controllers.length; i < ii; ++i) {
        controllers[i].created(this);
      }
    };

    View.prototype.bind = function bind(bindingContext, overrideContext, _systemUpdate) {
      var controllers = void 0;
      var bindings = void 0;
      var children = void 0;
      var i = void 0;
      var ii = void 0;

      if (_systemUpdate && this._isUserControlled) {
        return;
      }

      if (this.isBound) {
        if (this.bindingContext === bindingContext) {
          return;
        }

        this.unbind();
      }

      this.isBound = true;
      this.bindingContext = bindingContext;
      this.overrideContext = overrideContext || (0, _aureliaBinding.createOverrideContext)(bindingContext);

      this.resources._invokeHook('beforeBind', this);

      bindings = this.bindings;
      for (i = 0, ii = bindings.length; i < ii; ++i) {
        bindings[i].bind(this);
      }

      if (this.viewModelScope !== null) {
        bindingContext.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext);
        this.viewModelScope = null;
      }

      controllers = this.controllers;
      for (i = 0, ii = controllers.length; i < ii; ++i) {
        controllers[i].bind(this);
      }

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].bind(bindingContext, overrideContext, true);
      }
    };

    View.prototype.addBinding = function addBinding(binding) {
      this.bindings.push(binding);

      if (this.isBound) {
        binding.bind(this);
      }
    };

    View.prototype.unbind = function unbind() {
      var controllers = void 0;
      var bindings = void 0;
      var children = void 0;
      var i = void 0;
      var ii = void 0;

      if (this.isBound) {
        this.isBound = false;
        this.resources._invokeHook('beforeUnbind', this);

        if (this.controller !== null) {
          this.controller.unbind();
        }

        bindings = this.bindings;
        for (i = 0, ii = bindings.length; i < ii; ++i) {
          bindings[i].unbind();
        }

        controllers = this.controllers;
        for (i = 0, ii = controllers.length; i < ii; ++i) {
          controllers[i].unbind();
        }

        children = this.children;
        for (i = 0, ii = children.length; i < ii; ++i) {
          children[i].unbind();
        }

        this.bindingContext = null;
        this.overrideContext = null;
      }
    };

    View.prototype.insertNodesBefore = function insertNodesBefore(refNode) {
      var parent = refNode.parentNode;
      parent.insertBefore(this.fragment, refNode);
    };

    View.prototype.appendNodesTo = function appendNodesTo(parent) {
      parent.appendChild(this.fragment);
    };

    View.prototype.removeNodes = function removeNodes() {
      var start = this.firstChild;
      var end = this.lastChild;
      var fragment = this.fragment;
      var next = void 0;
      var current = start;
      var loop = true;

      while (loop) {
        if (current === end) {
          loop = false;
        }

        next = current.nextSibling;
        fragment.appendChild(current);
        current = next;
      }
    };

    View.prototype.attached = function attached() {
      var controllers = void 0;
      var children = void 0;
      var i = void 0;
      var ii = void 0;

      if (this.isAttached) {
        return;
      }

      this.isAttached = true;

      if (this.controller !== null) {
        this.controller.attached();
      }

      controllers = this.controllers;
      for (i = 0, ii = controllers.length; i < ii; ++i) {
        controllers[i].attached();
      }

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].attached();
      }
    };

    View.prototype.detached = function detached() {
      var controllers = void 0;
      var children = void 0;
      var i = void 0;
      var ii = void 0;

      if (this.isAttached) {
        this.isAttached = false;

        if (this.controller !== null) {
          this.controller.detached();
        }

        controllers = this.controllers;
        for (i = 0, ii = controllers.length; i < ii; ++i) {
          controllers[i].detached();
        }

        children = this.children;
        for (i = 0, ii = children.length; i < ii; ++i) {
          children[i].detached();
        }
      }
    };

    return View;
  }();

  var placeholder = [];

  function findInsertionPoint(groups, index) {
    var insertionPoint = void 0;

    while (!insertionPoint && index >= 0) {
      insertionPoint = groups[index][0];
      index--;
    }

    return insertionPoint;
  }

  var _ContentSelector = exports._ContentSelector = function () {
    _ContentSelector.applySelectors = function applySelectors(view, contentSelectors, callback) {
      var currentChild = view.fragment.firstChild;
      var contentMap = new Map();
      var nextSibling = void 0;
      var i = void 0;
      var ii = void 0;
      var contentSelector = void 0;

      while (currentChild) {
        nextSibling = currentChild.nextSibling;

        if (currentChild.isContentProjectionSource) {
          var viewSlotSelectors = contentSelectors.map(function (x) {
            return x.copyForViewSlot();
          });
          currentChild.viewSlot._installContentSelectors(viewSlotSelectors);
        } else {
          for (i = 0, ii = contentSelectors.length; i < ii; i++) {
            contentSelector = contentSelectors[i];
            if (contentSelector.matches(currentChild)) {
              var elements = contentMap.get(contentSelector);
              if (!elements) {
                elements = [];
                contentMap.set(contentSelector, elements);
              }

              elements.push(currentChild);
              break;
            }
          }
        }

        currentChild = nextSibling;
      }

      for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
        contentSelector = contentSelectors[i];
        callback(contentSelector, contentMap.get(contentSelector) || placeholder);
      }
    };

    function _ContentSelector(anchor, selector) {
      _classCallCheck(this, _ContentSelector);

      this.anchor = anchor;
      this.selector = selector;
      this.all = !this.selector;
      this.groups = [];
    }

    _ContentSelector.prototype.copyForViewSlot = function copyForViewSlot() {
      return new _ContentSelector(this.anchor, this.selector);
    };

    _ContentSelector.prototype.matches = function matches(node) {
      return this.all || node.nodeType === 1 && node.matches(this.selector);
    };

    _ContentSelector.prototype.add = function add(group) {
      var anchor = this.anchor;
      var parent = anchor.parentNode;
      var i = void 0;
      var ii = void 0;

      for (i = 0, ii = group.length; i < ii; ++i) {
        parent.insertBefore(group[i], anchor);
      }

      this.groups.push(group);
    };

    _ContentSelector.prototype.insert = function insert(index, group) {
      if (group.length) {
        var anchor = findInsertionPoint(this.groups, index) || this.anchor;
        var parent = anchor.parentNode;
        var i = void 0;
        var ii = void 0;

        for (i = 0, ii = group.length; i < ii; ++i) {
          parent.insertBefore(group[i], anchor);
        }
      }

      this.groups.splice(index, 0, group);
    };

    _ContentSelector.prototype.removeAt = function removeAt(index, fragment) {
      var group = this.groups[index];
      var i = void 0;
      var ii = void 0;

      for (i = 0, ii = group.length; i < ii; ++i) {
        fragment.appendChild(group[i]);
      }

      this.groups.splice(index, 1);
    };

    return _ContentSelector;
  }();

  function getAnimatableElement(view) {
    var firstChild = view.firstChild;

    if (firstChild !== null && firstChild !== undefined && firstChild.nodeType === 8) {
      var _element = _aureliaPal.DOM.nextElementSibling(firstChild);

      if (_element !== null && _element !== undefined && _element.nodeType === 1 && _element.classList.contains('au-animate')) {
        return _element;
      }
    }

    return null;
  }

  var ViewSlot = exports.ViewSlot = function () {
    function ViewSlot(anchor, anchorIsContainer) {
      var animator = arguments.length <= 2 || arguments[2] === undefined ? Animator.instance : arguments[2];

      _classCallCheck(this, ViewSlot);

      this.anchor = anchor;
      this.viewAddMethod = anchorIsContainer ? 'appendNodesTo' : 'insertNodesBefore';
      this.bindingContext = null;
      this.overrideContext = null;
      this.animator = animator;
      this.children = [];
      this.isBound = false;
      this.isAttached = false;
      this.contentSelectors = null;
      anchor.viewSlot = this;
      anchor.isContentProjectionSource = false;
    }

    ViewSlot.prototype.transformChildNodesIntoView = function transformChildNodesIntoView() {
      var parent = this.anchor;

      this.children.push({
        fragment: parent,
        firstChild: parent.firstChild,
        lastChild: parent.lastChild,
        returnToCache: function returnToCache() {},
        removeNodes: function removeNodes() {
          var last = void 0;

          while (last = parent.lastChild) {
            parent.removeChild(last);
          }
        },
        created: function created() {},
        bind: function bind() {},
        unbind: function unbind() {},
        attached: function attached() {},
        detached: function detached() {}
      });
    };

    ViewSlot.prototype.bind = function bind(bindingContext, overrideContext) {
      var i = void 0;
      var ii = void 0;
      var children = void 0;

      if (this.isBound) {
        if (this.bindingContext === bindingContext) {
          return;
        }

        this.unbind();
      }

      this.isBound = true;
      this.bindingContext = bindingContext = bindingContext || this.bindingContext;
      this.overrideContext = overrideContext = overrideContext || this.overrideContext;

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].bind(bindingContext, overrideContext, true);
      }
    };

    ViewSlot.prototype.unbind = function unbind() {
      if (this.isBound) {
        var i = void 0;
        var ii = void 0;
        var _children = this.children;

        this.isBound = false;
        this.bindingContext = null;
        this.overrideContext = null;

        for (i = 0, ii = _children.length; i < ii; ++i) {
          _children[i].unbind();
        }
      }
    };

    ViewSlot.prototype.add = function add(view) {
      view[this.viewAddMethod](this.anchor);
      this.children.push(view);

      if (this.isAttached) {
        view.attached();

        var animatableElement = getAnimatableElement(view);
        if (animatableElement !== null) {
          return this.animator.enter(animatableElement);
        }
      }
    };

    ViewSlot.prototype.insert = function insert(index, view) {
      var children = this.children;
      var length = children.length;

      if (index === 0 && length === 0 || index >= length) {
        return this.add(view);
      }

      view.insertNodesBefore(children[index].firstChild);
      children.splice(index, 0, view);

      if (this.isAttached) {
        view.attached();

        var animatableElement = getAnimatableElement(view);
        if (animatableElement !== null) {
          return this.animator.enter(animatableElement);
        }
      }
    };

    ViewSlot.prototype.remove = function remove(view, returnToCache, skipAnimation) {
      return this.removeAt(this.children.indexOf(view), returnToCache, skipAnimation);
    };

    ViewSlot.prototype.removeAt = function removeAt(index, returnToCache, skipAnimation) {
      var _this4 = this;

      var view = this.children[index];

      var removeAction = function removeAction() {
        index = _this4.children.indexOf(view);
        view.removeNodes();
        _this4.children.splice(index, 1);

        if (_this4.isAttached) {
          view.detached();
        }

        if (returnToCache) {
          view.returnToCache();
        }

        return view;
      };

      if (!skipAnimation) {
        var animatableElement = getAnimatableElement(view);
        if (animatableElement !== null) {
          return this.animator.leave(animatableElement).then(function () {
            return removeAction();
          });
        }
      }

      return removeAction();
    };

    ViewSlot.prototype.removeAll = function removeAll(returnToCache, skipAnimation) {
      var _this5 = this;

      var children = this.children;
      var ii = children.length;
      var i = void 0;
      var rmPromises = [];

      children.forEach(function (child) {
        if (skipAnimation) {
          child.removeNodes();
          return;
        }

        var animatableElement = getAnimatableElement(child);
        if (animatableElement !== null) {
          rmPromises.push(_this5.animator.leave(animatableElement).then(function () {
            return child.removeNodes();
          }));
        } else {
          child.removeNodes();
        }
      });

      var removeAction = function removeAction() {
        if (_this5.isAttached) {
          for (i = 0; i < ii; ++i) {
            children[i].detached();
          }
        }

        if (returnToCache) {
          for (i = 0; i < ii; ++i) {
            children[i].returnToCache();
          }
        }

        _this5.children = [];
      };

      if (rmPromises.length > 0) {
        return Promise.all(rmPromises).then(function () {
          return removeAction();
        });
      }

      removeAction();
    };

    ViewSlot.prototype.attached = function attached() {
      var i = void 0;
      var ii = void 0;
      var children = void 0;
      var child = void 0;

      if (this.isAttached) {
        return;
      }

      this.isAttached = true;

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        child = children[i];
        child.attached();

        var _element2 = child.firstChild ? _aureliaPal.DOM.nextElementSibling(child.firstChild) : null;
        if (child.firstChild && child.firstChild.nodeType === 8 && _element2 && _element2.nodeType === 1 && _element2.classList.contains('au-animate')) {
          this.animator.enter(_element2);
        }
      }
    };

    ViewSlot.prototype.detached = function detached() {
      var i = void 0;
      var ii = void 0;
      var children = void 0;

      if (this.isAttached) {
        this.isAttached = false;
        children = this.children;
        for (i = 0, ii = children.length; i < ii; ++i) {
          children[i].detached();
        }
      }
    };

    ViewSlot.prototype._installContentSelectors = function _installContentSelectors(contentSelectors) {
      this.contentSelectors = contentSelectors;
      this.add = this._contentSelectorAdd;
      this.insert = this._contentSelectorInsert;
      this.remove = this._contentSelectorRemove;
      this.removeAt = this._contentSelectorRemoveAt;
      this.removeAll = this._contentSelectorRemoveAll;
    };

    ViewSlot.prototype._contentSelectorAdd = function _contentSelectorAdd(view) {
      _ContentSelector.applySelectors(view, this.contentSelectors, function (contentSelector, group) {
        return contentSelector.add(group);
      });

      this.children.push(view);

      if (this.isAttached) {
        view.attached();
      }
    };

    ViewSlot.prototype._contentSelectorInsert = function _contentSelectorInsert(index, view) {
      if (index === 0 && !this.children.length || index >= this.children.length) {
        this.add(view);
      } else {
        _ContentSelector.applySelectors(view, this.contentSelectors, function (contentSelector, group) {
          return contentSelector.insert(index, group);
        });

        this.children.splice(index, 0, view);

        if (this.isAttached) {
          view.attached();
        }
      }
    };

    ViewSlot.prototype._contentSelectorRemove = function _contentSelectorRemove(view) {
      var index = this.children.indexOf(view);
      var contentSelectors = this.contentSelectors;
      var i = void 0;
      var ii = void 0;

      for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
        contentSelectors[i].removeAt(index, view.fragment);
      }

      this.children.splice(index, 1);

      if (this.isAttached) {
        view.detached();
      }
    };

    ViewSlot.prototype._contentSelectorRemoveAt = function _contentSelectorRemoveAt(index) {
      var view = this.children[index];
      var contentSelectors = this.contentSelectors;
      var i = void 0;
      var ii = void 0;

      for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
        contentSelectors[i].removeAt(index, view.fragment);
      }

      this.children.splice(index, 1);

      if (this.isAttached) {
        view.detached();
      }

      return view;
    };

    ViewSlot.prototype._contentSelectorRemoveAll = function _contentSelectorRemoveAll() {
      var children = this.children;
      var contentSelectors = this.contentSelectors;
      var ii = children.length;
      var jj = contentSelectors.length;
      var i = void 0;
      var j = void 0;
      var view = void 0;

      for (i = 0; i < ii; ++i) {
        view = children[i];

        for (j = 0; j < jj; ++j) {
          contentSelectors[j].removeAt(0, view.fragment);
        }
      }

      if (this.isAttached) {
        for (i = 0; i < ii; ++i) {
          children[i].detached();
        }
      }

      this.children = [];
    };

    return ViewSlot;
  }();

  var ProviderResolver = (0, _aureliaDependencyInjection.resolver)(_class11 = function () {
    function ProviderResolver() {
      _classCallCheck(this, ProviderResolver);
    }

    ProviderResolver.prototype.get = function get(container, key) {
      var id = key.__providerId__;
      return id in container ? container[id] : container[id] = container.invoke(key);
    };

    return ProviderResolver;
  }()) || _class11;

  var providerResolverInstance = new ProviderResolver();

  function elementContainerGet(key) {
    if (key === _aureliaPal.DOM.Element) {
      return this.element;
    }

    if (key === BoundViewFactory) {
      if (this.boundViewFactory) {
        return this.boundViewFactory;
      }

      var factory = this.instruction.viewFactory;
      var _partReplacements = this.partReplacements;

      if (_partReplacements) {
        factory = _partReplacements[factory.part] || factory;
      }

      this.boundViewFactory = new BoundViewFactory(this, factory, _partReplacements);
      return this.boundViewFactory;
    }

    if (key === ViewSlot) {
      if (this.viewSlot === undefined) {
        this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer);
        this.element.isContentProjectionSource = this.instruction.lifting;
        this.children.push(this.viewSlot);
      }

      return this.viewSlot;
    }

    if (key === ElementEvents) {
      return this.elementEvents || (this.elementEvents = new ElementEvents(this.element));
    }

    if (key === CompositionTransaction) {
      return this.compositionTransaction || (this.compositionTransaction = this.parent.get(key));
    }

    if (key === ViewResources) {
      return this.viewResources;
    }

    if (key === TargetInstruction) {
      return this.instruction;
    }

    return this.superGet(key);
  }

  function createElementContainer(parent, element, instruction, children, partReplacements, resources) {
    var container = parent.createChild();
    var providers = void 0;
    var i = void 0;

    container.element = element;
    container.instruction = instruction;
    container.children = children;
    container.viewResources = resources;
    container.partReplacements = partReplacements;

    providers = instruction.providers;
    i = providers.length;

    while (i--) {
      container._resolvers.set(providers[i], providerResolverInstance);
    }

    container.superGet = container.get;
    container.get = elementContainerGet;

    return container;
  }

  function makeElementIntoAnchor(element, elementInstruction) {
    var anchor = _aureliaPal.DOM.createComment('anchor');

    if (elementInstruction) {
      anchor.hasAttribute = function (name) {
        return element.hasAttribute(name);
      };
      anchor.getAttribute = function (name) {
        return element.getAttribute(name);
      };
      anchor.setAttribute = function (name, value) {
        element.setAttribute(name, value);
      };
    }

    _aureliaPal.DOM.replaceNode(anchor, element);

    return anchor;
  }

  function applyInstructions(containers, element, instruction, controllers, bindings, children, contentSelectors, partReplacements, resources) {
    var behaviorInstructions = instruction.behaviorInstructions;
    var expressions = instruction.expressions;
    var elementContainer = void 0;
    var i = void 0;
    var ii = void 0;
    var current = void 0;
    var instance = void 0;

    if (instruction.contentExpression) {
      bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
      element.parentNode.removeChild(element);
      return;
    }

    if (instruction.contentSelector) {
      var commentAnchor = _aureliaPal.DOM.createComment('anchor');
      _aureliaPal.DOM.replaceNode(commentAnchor, element);
      contentSelectors.push(new _ContentSelector(commentAnchor, instruction.selector));
      return;
    }

    if (behaviorInstructions.length) {
      if (!instruction.anchorIsContainer) {
        element = makeElementIntoAnchor(element, instruction.elementInstruction);
      }

      containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, children, partReplacements, resources);

      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        current = behaviorInstructions[i];
        instance = current.type.create(elementContainer, current, element, bindings);

        if (instance.contentView) {
          children.push(instance.contentView);
        }

        controllers.push(instance);
      }
    }

    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding(element));
    }
  }

  function styleStringToObject(style, target) {
    var attributes = style.split(';');
    var firstIndexOfColon = void 0;
    var i = void 0;
    var current = void 0;
    var key = void 0;
    var value = void 0;

    target = target || {};

    for (i = 0; i < attributes.length; i++) {
      current = attributes[i];
      firstIndexOfColon = current.indexOf(':');
      key = current.substring(0, firstIndexOfColon).trim();
      value = current.substring(firstIndexOfColon + 1).trim();
      target[key] = value;
    }

    return target;
  }

  function styleObjectToString(obj) {
    var result = '';

    for (var key in obj) {
      result += key + ':' + obj[key] + ';';
    }

    return result;
  }

  function applySurrogateInstruction(container, element, instruction, controllers, bindings, children) {
    var behaviorInstructions = instruction.behaviorInstructions;
    var expressions = instruction.expressions;
    var providers = instruction.providers;
    var values = instruction.values;
    var i = void 0;
    var ii = void 0;
    var current = void 0;
    var instance = void 0;
    var currentAttributeValue = void 0;

    i = providers.length;
    while (i--) {
      container._resolvers.set(providers[i], providerResolverInstance);
    }

    for (var key in values) {
      currentAttributeValue = element.getAttribute(key);

      if (currentAttributeValue) {
        if (key === 'class') {
          element.setAttribute('class', currentAttributeValue + ' ' + values[key]);
        } else if (key === 'style') {
          var styleObject = styleStringToObject(values[key]);
          styleStringToObject(currentAttributeValue, styleObject);
          element.setAttribute('style', styleObjectToString(styleObject));
        }
      } else {
          element.setAttribute(key, values[key]);
        }
    }

    if (behaviorInstructions.length) {
      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        current = behaviorInstructions[i];
        instance = current.type.create(container, current, element, bindings);

        if (instance.contentView) {
          children.push(instance.contentView);
        }

        controllers.push(instance);
      }
    }

    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding(element));
    }
  }

  var BoundViewFactory = exports.BoundViewFactory = function () {
    function BoundViewFactory(parentContainer, viewFactory, partReplacements) {
      _classCallCheck(this, BoundViewFactory);

      this.parentContainer = parentContainer;
      this.viewFactory = viewFactory;
      this.factoryCreateInstruction = { partReplacements: partReplacements };
    }

    BoundViewFactory.prototype.create = function create() {
      var view = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
      view._isUserControlled = true;
      return view;
    };

    BoundViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
      this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
    };

    BoundViewFactory.prototype.getCachedView = function getCachedView() {
      return this.viewFactory.getCachedView();
    };

    BoundViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
      this.viewFactory.returnViewToCache(view);
    };

    _createClass(BoundViewFactory, [{
      key: 'isCaching',
      get: function get() {
        return this.viewFactory.isCaching;
      }
    }]);

    return BoundViewFactory;
  }();

  var ViewFactory = exports.ViewFactory = function () {
    function ViewFactory(template, instructions, resources) {
      _classCallCheck(this, ViewFactory);

      this.isCaching = false;

      this.template = template;
      this.instructions = instructions;
      this.resources = resources;
      this.cacheSize = -1;
      this.cache = null;
    }

    ViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
      if (size) {
        if (size === '*') {
          size = Number.MAX_VALUE;
        } else if (typeof size === 'string') {
          size = parseInt(size, 10);
        }
      }

      if (this.cacheSize === -1 || !doNotOverrideIfAlreadySet) {
        this.cacheSize = size;
      }

      if (this.cacheSize > 0) {
        this.cache = [];
      } else {
        this.cache = null;
      }

      this.isCaching = this.cacheSize > 0;
    };

    ViewFactory.prototype.getCachedView = function getCachedView() {
      return this.cache !== null ? this.cache.pop() || null : null;
    };

    ViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
      if (view.isAttached) {
        view.detached();
      }

      if (view.isBound) {
        view.unbind();
      }

      if (this.cache !== null && this.cache.length < this.cacheSize) {
        view.fromCache = true;
        this.cache.push(view);
      }
    };

    ViewFactory.prototype.create = function create(container, createInstruction, element) {
      createInstruction = createInstruction || BehaviorInstruction.normal;
      element = element || null;

      var cachedView = this.getCachedView();
      if (cachedView !== null) {
        return cachedView;
      }

      var fragment = createInstruction.enhance ? this.template : this.template.cloneNode(true);
      var instructables = fragment.querySelectorAll('.au-target');
      var instructions = this.instructions;
      var resources = this.resources;
      var controllers = [];
      var bindings = [];
      var children = [];
      var contentSelectors = [];
      var containers = { root: container };
      var partReplacements = createInstruction.partReplacements;
      var i = void 0;
      var ii = void 0;
      var view = void 0;
      var instructable = void 0;
      var instruction = void 0;

      this.resources._invokeHook('beforeCreate', this, container, fragment, createInstruction);

      if (element !== null && this.surrogateInstruction !== null) {
        applySurrogateInstruction(container, element, this.surrogateInstruction, controllers, bindings, children);
      }

      for (i = 0, ii = instructables.length; i < ii; ++i) {
        instructable = instructables[i];
        instruction = instructions[instructable.getAttribute('au-target-id')];

        applyInstructions(containers, instructable, instruction, controllers, bindings, children, contentSelectors, partReplacements, resources);
      }

      view = new View(this, fragment, controllers, bindings, children, contentSelectors);

      if (!createInstruction.initiatedByBehavior) {
        view.created();
      }

      this.resources._invokeHook('afterCreate', view);

      return view;
    };

    return ViewFactory;
  }();

  var nextInjectorId = 0;
  function getNextInjectorId() {
    return ++nextInjectorId;
  }

  function configureProperties(instruction, resources) {
    var type = instruction.type;
    var attrName = instruction.attrName;
    var attributes = instruction.attributes;
    var property = void 0;
    var key = void 0;
    var value = void 0;

    var knownAttribute = resources.mapAttribute(attrName);
    if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
      attributes[knownAttribute] = attributes[attrName];
      delete attributes[attrName];
    }

    for (key in attributes) {
      value = attributes[key];

      if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        property = type.attributes[key];

        if (property !== undefined) {
          value.targetProperty = property.name;
        } else {
          value.targetProperty = key;
        }
      }
    }
  }

  var lastAUTargetID = 0;
  function getNextAUTargetID() {
    return (++lastAUTargetID).toString();
  }

  function makeIntoInstructionTarget(element) {
    var value = element.getAttribute('class');
    var auTargetID = getNextAUTargetID();

    element.setAttribute('class', value ? value += ' au-target' : 'au-target');
    element.setAttribute('au-target-id', auTargetID);

    return auTargetID;
  }

  var ViewCompiler = exports.ViewCompiler = (_dec6 = (0, _aureliaDependencyInjection.inject)(BindingLanguage, ViewResources), _dec6(_class13 = function () {
    function ViewCompiler(bindingLanguage, resources) {
      _classCallCheck(this, ViewCompiler);

      this.bindingLanguage = bindingLanguage;
      this.resources = resources;
    }

    ViewCompiler.prototype.compile = function compile(source, resources, compileInstruction) {
      resources = resources || this.resources;
      compileInstruction = compileInstruction || ViewCompileInstruction.normal;
      source = typeof source === 'string' ? _aureliaPal.DOM.createTemplateFromMarkup(source) : source;

      var content = void 0;
      var part = void 0;
      var cacheSize = void 0;

      if (source.content) {
        part = source.getAttribute('part');
        cacheSize = source.getAttribute('view-cache');
        content = _aureliaPal.DOM.adoptNode(source.content);
      } else {
        content = source;
      }

      compileInstruction.targetShadowDOM = compileInstruction.targetShadowDOM && _aureliaPal.FEATURE.shadowDOM;
      resources._invokeHook('beforeCompile', content, resources, compileInstruction);

      var instructions = {};
      this._compileNode(content, resources, instructions, source, 'root', !compileInstruction.targetShadowDOM);
      content.insertBefore(_aureliaPal.DOM.createComment('<view>'), content.firstChild);
      content.appendChild(_aureliaPal.DOM.createComment('</view>'));

      var factory = new ViewFactory(content, instructions, resources);

      factory.surrogateInstruction = compileInstruction.compileSurrogate ? this._compileSurrogate(source, resources) : null;
      factory.part = part;

      if (cacheSize) {
        factory.setCacheSize(cacheSize);
      }

      resources._invokeHook('afterCompile', factory);

      return factory;
    };

    ViewCompiler.prototype._compileNode = function _compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
      switch (node.nodeType) {
        case 1:
          return this._compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
        case 3:
          var expression = resources.getBindingLanguage(this.bindingLanguage).parseText(resources, node.wholeText);
          if (expression) {
            var marker = _aureliaPal.DOM.createElement('au-marker');
            var auTargetID = makeIntoInstructionTarget(marker);
            (node.parentNode || parentNode).insertBefore(marker, node);
            node.textContent = ' ';
            instructions[auTargetID] = TargetInstruction.contentExpression(expression);

            while (node.nextSibling && node.nextSibling.nodeType === 3) {
              (node.parentNode || parentNode).removeChild(node.nextSibling);
            }
          } else {
            while (node.nextSibling && node.nextSibling.nodeType === 3) {
              node = node.nextSibling;
            }
          }
          return node.nextSibling;
        case 11:
          var currentChild = node.firstChild;
          while (currentChild) {
            currentChild = this._compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
          }
          break;
        default:
          break;
      }

      return node.nextSibling;
    };

    ViewCompiler.prototype._compileSurrogate = function _compileSurrogate(node, resources) {
      var attributes = node.attributes;
      var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
      var knownAttribute = void 0;
      var property = void 0;
      var instruction = void 0;
      var i = void 0;
      var ii = void 0;
      var attr = void 0;
      var attrName = void 0;
      var attrValue = void 0;
      var info = void 0;
      var type = void 0;
      var expressions = [];
      var expression = void 0;
      var behaviorInstructions = [];
      var values = {};
      var hasValues = false;
      var providers = [];

      for (i = 0, ii = attributes.length; i < ii; ++i) {
        attr = attributes[i];
        attrName = attr.name;
        attrValue = attr.value;

        info = bindingLanguage.inspectAttribute(resources, attrName, attrValue);
        type = resources.getAttribute(info.attrName);

        if (type) {
          knownAttribute = resources.mapAttribute(info.attrName);
          if (knownAttribute) {
            property = type.attributes[knownAttribute];

            if (property) {
              info.defaultBindingMode = property.defaultBindingMode;

              if (!info.command && !info.expression) {
                info.command = property.hasOptions ? 'options' : null;
              }
            }
          }
        }

        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);

        if (instruction) {
          if (instruction.alteredAttr) {
            type = resources.getAttribute(instruction.attrName);
          }

          if (instruction.discrete) {
            expressions.push(instruction);
          } else {
            if (type) {
              instruction.type = type;
              configureProperties(instruction, resources);

              if (type.liftsContent) {
                throw new Error('You cannot place a template controller on a surrogate element.');
              } else {
                behaviorInstructions.push(instruction);
              }
            } else {
              expressions.push(instruction.attributes[instruction.attrName]);
            }
          }
        } else {
          if (type) {
            instruction = BehaviorInstruction.attribute(attrName, type);
            instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

            if (type.liftsContent) {
              throw new Error('You cannot place a template controller on a surrogate element.');
            } else {
              behaviorInstructions.push(instruction);
            }
          } else if (attrName !== 'id' && attrName !== 'part' && attrName !== 'replace-part') {
            hasValues = true;
            values[attrName] = attrValue;
          }
        }
      }

      if (expressions.length || behaviorInstructions.length || hasValues) {
        for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
          instruction = behaviorInstructions[i];
          instruction.type.compile(this, resources, node, instruction);
          providers.push(instruction.type.target);
        }

        for (i = 0, ii = expressions.length; i < ii; ++i) {
          expression = expressions[i];
          if (expression.attrToRemove !== undefined) {
            node.removeAttribute(expression.attrToRemove);
          }
        }

        return TargetInstruction.surrogate(providers, behaviorInstructions, expressions, values);
      }

      return null;
    };

    ViewCompiler.prototype._compileElement = function _compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
      var tagName = node.tagName.toLowerCase();
      var attributes = node.attributes;
      var expressions = [];
      var expression = void 0;
      var behaviorInstructions = [];
      var providers = [];
      var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
      var liftingInstruction = void 0;
      var viewFactory = void 0;
      var type = void 0;
      var elementInstruction = void 0;
      var elementProperty = void 0;
      var i = void 0;
      var ii = void 0;
      var attr = void 0;
      var attrName = void 0;
      var attrValue = void 0;
      var instruction = void 0;
      var info = void 0;
      var property = void 0;
      var knownAttribute = void 0;
      var auTargetID = void 0;
      var injectorId = void 0;

      if (tagName === 'content') {
        if (targetLightDOM) {
          auTargetID = makeIntoInstructionTarget(node);
          instructions[auTargetID] = TargetInstruction.contentSelector(node, parentInjectorId);
        }
        return node.nextSibling;
      } else if (tagName === 'template') {
        viewFactory = this.compile(node, resources);
        viewFactory.part = node.getAttribute('part');
      } else {
        type = resources.getElement(node.getAttribute('as-element') || tagName);
        if (type) {
          elementInstruction = BehaviorInstruction.element(node, type);
          type.processAttributes(this, resources, attributes, elementInstruction);
          behaviorInstructions.push(elementInstruction);
        }
      }

      for (i = 0, ii = attributes.length; i < ii; ++i) {
        attr = attributes[i];
        attrName = attr.name;
        attrValue = attr.value;
        info = bindingLanguage.inspectAttribute(resources, attrName, attrValue);
        type = resources.getAttribute(info.attrName);
        elementProperty = null;

        if (type) {
          knownAttribute = resources.mapAttribute(info.attrName);
          if (knownAttribute) {
            property = type.attributes[knownAttribute];

            if (property) {
              info.defaultBindingMode = property.defaultBindingMode;

              if (!info.command && !info.expression) {
                info.command = property.hasOptions ? 'options' : null;
              }
            }
          }
        } else if (elementInstruction) {
            elementProperty = elementInstruction.type.attributes[info.attrName];
            if (elementProperty) {
              info.defaultBindingMode = elementProperty.defaultBindingMode;
            }
          }

        if (elementProperty) {
          instruction = bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction);
        } else {
          instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);
        }

        if (instruction) {
          if (instruction.alteredAttr) {
            type = resources.getAttribute(instruction.attrName);
          }

          if (instruction.discrete) {
            expressions.push(instruction);
          } else {
            if (type) {
              instruction.type = type;
              configureProperties(instruction, resources);

              if (type.liftsContent) {
                instruction.originalAttrName = attrName;
                liftingInstruction = instruction;
                break;
              } else {
                behaviorInstructions.push(instruction);
              }
            } else if (elementProperty) {
              elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name;
            } else {
              expressions.push(instruction.attributes[instruction.attrName]);
            }
          }
        } else {
          if (type) {
            instruction = BehaviorInstruction.attribute(attrName, type);
            instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

            if (type.liftsContent) {
              instruction.originalAttrName = attrName;
              liftingInstruction = instruction;
              break;
            } else {
              behaviorInstructions.push(instruction);
            }
          } else if (elementProperty) {
            elementInstruction.attributes[attrName] = attrValue;
          }
        }
      }

      if (liftingInstruction) {
        liftingInstruction.viewFactory = viewFactory;
        node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
        auTargetID = makeIntoInstructionTarget(node);
        instructions[auTargetID] = TargetInstruction.lifting(parentInjectorId, liftingInstruction);
      } else {
        if (expressions.length || behaviorInstructions.length) {
          injectorId = behaviorInstructions.length ? getNextInjectorId() : false;

          for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
            instruction = behaviorInstructions[i];
            instruction.type.compile(this, resources, node, instruction, parentNode);
            providers.push(instruction.type.target);
          }

          for (i = 0, ii = expressions.length; i < ii; ++i) {
            expression = expressions[i];
            if (expression.attrToRemove !== undefined) {
              node.removeAttribute(expression.attrToRemove);
            }
          }

          auTargetID = makeIntoInstructionTarget(node);
          instructions[auTargetID] = TargetInstruction.normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction);
        }

        if (elementInstruction && elementInstruction.skipContentProcessing) {
          return node.nextSibling;
        }

        var currentChild = node.firstChild;
        while (currentChild) {
          currentChild = this._compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
        }
      }

      return node.nextSibling;
    };

    return ViewCompiler;
  }()) || _class13);

  var ResourceModule = exports.ResourceModule = function () {
    function ResourceModule(moduleId) {
      _classCallCheck(this, ResourceModule);

      this.id = moduleId;
      this.moduleInstance = null;
      this.mainResource = null;
      this.resources = null;
      this.viewStrategy = null;
      this.isInitialized = false;
      this.onLoaded = null;
    }

    ResourceModule.prototype.initialize = function initialize(container) {
      var current = this.mainResource;
      var resources = this.resources;
      var vs = this.viewStrategy;

      if (this.isInitialized) {
        return;
      }

      this.isInitialized = true;

      if (current !== undefined) {
        current.metadata.viewStrategy = vs;
        current.initialize(container);
      }

      for (var i = 0, ii = resources.length; i < ii; ++i) {
        current = resources[i];
        current.metadata.viewStrategy = vs;
        current.initialize(container);
      }
    };

    ResourceModule.prototype.register = function register(registry, name) {
      var main = this.mainResource;
      var resources = this.resources;

      if (main !== undefined) {
        main.register(registry, name);
        name = null;
      }

      for (var i = 0, ii = resources.length; i < ii; ++i) {
        resources[i].register(registry, name);
        name = null;
      }
    };

    ResourceModule.prototype.load = function load(container, loadContext) {
      if (this.onLoaded !== null) {
        return this.onLoaded;
      }

      var main = this.mainResource;
      var resources = this.resources;
      var loads = void 0;

      if (main !== undefined) {
        loads = new Array(resources.length + 1);
        loads[0] = main.load(container, loadContext);
        for (var i = 0, ii = resources.length; i < ii; ++i) {
          loads[i + 1] = resources[i].load(container, loadContext);
        }
      } else {
        loads = new Array(resources.length);
        for (var _i = 0, _ii = resources.length; _i < _ii; ++_i) {
          loads[_i] = resources[_i].load(container, loadContext);
        }
      }

      this.onLoaded = Promise.all(loads);
      return this.onLoaded;
    };

    return ResourceModule;
  }();

  var ResourceDescription = exports.ResourceDescription = function () {
    function ResourceDescription(key, exportedValue, resourceTypeMeta) {
      _classCallCheck(this, ResourceDescription);

      if (!resourceTypeMeta) {
        resourceTypeMeta = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.resource, exportedValue);

        if (!resourceTypeMeta) {
          resourceTypeMeta = new HtmlBehaviorResource();
          resourceTypeMeta.elementName = _hyphenate(key);
          _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, resourceTypeMeta, exportedValue);
        }
      }

      if (resourceTypeMeta instanceof HtmlBehaviorResource) {
        if (resourceTypeMeta.elementName === undefined) {
          resourceTypeMeta.elementName = _hyphenate(key);
        } else if (resourceTypeMeta.attributeName === undefined) {
          resourceTypeMeta.attributeName = _hyphenate(key);
        } else if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
          HtmlBehaviorResource.convention(key, resourceTypeMeta);
        }
      } else if (!resourceTypeMeta.name) {
        resourceTypeMeta.name = _hyphenate(key);
      }

      this.metadata = resourceTypeMeta;
      this.value = exportedValue;
    }

    ResourceDescription.prototype.initialize = function initialize(container) {
      this.metadata.initialize(container, this.value);
    };

    ResourceDescription.prototype.register = function register(registry, name) {
      this.metadata.register(registry, name);
    };

    ResourceDescription.prototype.load = function load(container, loadContext) {
      return this.metadata.load(container, this.value, loadContext);
    };

    return ResourceDescription;
  }();

  var ModuleAnalyzer = exports.ModuleAnalyzer = function () {
    function ModuleAnalyzer() {
      _classCallCheck(this, ModuleAnalyzer);

      this.cache = {};
    }

    ModuleAnalyzer.prototype.getAnalysis = function getAnalysis(moduleId) {
      return this.cache[moduleId];
    };

    ModuleAnalyzer.prototype.analyze = function analyze(moduleId, moduleInstance, mainResourceKey) {
      var mainResource = void 0;
      var fallbackValue = void 0;
      var fallbackKey = void 0;
      var resourceTypeMeta = void 0;
      var key = void 0;
      var exportedValue = void 0;
      var resources = [];
      var conventional = void 0;
      var vs = void 0;
      var resourceModule = void 0;

      resourceModule = this.cache[moduleId];
      if (resourceModule) {
        return resourceModule;
      }

      resourceModule = new ResourceModule(moduleId);
      this.cache[moduleId] = resourceModule;

      if (typeof moduleInstance === 'function') {
        moduleInstance = { 'default': moduleInstance };
      }

      if (mainResourceKey) {
        mainResource = new ResourceDescription(mainResourceKey, moduleInstance[mainResourceKey]);
      }

      for (key in moduleInstance) {
        exportedValue = moduleInstance[key];

        if (key === mainResourceKey || typeof exportedValue !== 'function') {
          continue;
        }

        resourceTypeMeta = _aureliaMetadata.metadata.get(_aureliaMetadata.metadata.resource, exportedValue);

        if (resourceTypeMeta) {
          if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
            HtmlBehaviorResource.convention(key, resourceTypeMeta);
          }

          if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
            resourceTypeMeta.elementName = _hyphenate(key);
          }

          if (!mainResource && resourceTypeMeta instanceof HtmlBehaviorResource && resourceTypeMeta.elementName !== null) {
            mainResource = new ResourceDescription(key, exportedValue, resourceTypeMeta);
          } else {
            resources.push(new ResourceDescription(key, exportedValue, resourceTypeMeta));
          }
        } else if (viewStrategy.decorates(exportedValue)) {
          vs = exportedValue;
        } else if (exportedValue instanceof _aureliaLoader.TemplateRegistryEntry) {
          vs = new TemplateRegistryViewStrategy(moduleId, exportedValue);
        } else {
          if (conventional = HtmlBehaviorResource.convention(key)) {
            if (conventional.elementName !== null && !mainResource) {
              mainResource = new ResourceDescription(key, exportedValue, conventional);
            } else {
              resources.push(new ResourceDescription(key, exportedValue, conventional));
            }

            _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue);
          } else if (conventional = _aureliaBinding.ValueConverterResource.convention(key)) {
            resources.push(new ResourceDescription(key, exportedValue, conventional));
            _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue);
          } else if (conventional = _aureliaBinding.BindingBehaviorResource.convention(key)) {
            resources.push(new ResourceDescription(key, exportedValue, conventional));
            _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, conventional, exportedValue);
          } else if (!fallbackValue) {
            fallbackValue = exportedValue;
            fallbackKey = key;
          }
        }
      }

      if (!mainResource && fallbackValue) {
        mainResource = new ResourceDescription(fallbackKey, fallbackValue);
      }

      resourceModule.moduleInstance = moduleInstance;
      resourceModule.mainResource = mainResource;
      resourceModule.resources = resources;
      resourceModule.viewStrategy = vs;

      return resourceModule;
    };

    return ModuleAnalyzer;
  }();

  var logger = LogManager.getLogger('templating');

  function ensureRegistryEntry(loader, urlOrRegistryEntry) {
    if (urlOrRegistryEntry instanceof _aureliaLoader.TemplateRegistryEntry) {
      return Promise.resolve(urlOrRegistryEntry);
    }

    return loader.loadTemplate(urlOrRegistryEntry);
  }

  var ProxyViewFactory = function () {
    function ProxyViewFactory(promise) {
      var _this6 = this;

      _classCallCheck(this, ProxyViewFactory);

      promise.then(function (x) {
        return _this6.viewFactory = x;
      });
    }

    ProxyViewFactory.prototype.create = function create(container, bindingContext, createInstruction, element) {
      return this.viewFactory.create(container, bindingContext, createInstruction, element);
    };

    ProxyViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
      this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
    };

    ProxyViewFactory.prototype.getCachedView = function getCachedView() {
      return this.viewFactory.getCachedView();
    };

    ProxyViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
      this.viewFactory.returnViewToCache(view);
    };

    _createClass(ProxyViewFactory, [{
      key: 'isCaching',
      get: function get() {
        return this.viewFactory.isCaching;
      }
    }]);

    return ProxyViewFactory;
  }();

  var ViewEngine = exports.ViewEngine = (_dec7 = (0, _aureliaDependencyInjection.inject)(_aureliaLoader.Loader, _aureliaDependencyInjection.Container, ViewCompiler, ModuleAnalyzer, ViewResources), _dec7(_class14 = function () {
    function ViewEngine(loader, container, viewCompiler, moduleAnalyzer, appResources) {
      _classCallCheck(this, ViewEngine);

      this.loader = loader;
      this.container = container;
      this.viewCompiler = viewCompiler;
      this.moduleAnalyzer = moduleAnalyzer;
      this.appResources = appResources;
      this._pluginMap = {};
    }

    ViewEngine.prototype.addResourcePlugin = function addResourcePlugin(extension, implementation) {
      var name = extension.replace('.', '') + '-resource-plugin';
      this._pluginMap[extension] = name;
      this.loader.addPlugin(name, implementation);
    };

    ViewEngine.prototype.loadViewFactory = function loadViewFactory(urlOrRegistryEntry, compileInstruction, loadContext) {
      var _this7 = this;

      loadContext = loadContext || new ResourceLoadContext();

      return ensureRegistryEntry(this.loader, urlOrRegistryEntry).then(function (registryEntry) {
        if (registryEntry.onReady) {
          if (!loadContext.hasDependency(urlOrRegistryEntry)) {
            loadContext.addDependency(urlOrRegistryEntry);
            return registryEntry.onReady;
          }

          return Promise.resolve(new ProxyViewFactory(registryEntry.onReady));
        }

        loadContext.addDependency(urlOrRegistryEntry);

        registryEntry.onReady = _this7.loadTemplateResources(registryEntry, compileInstruction, loadContext).then(function (resources) {
          registryEntry.resources = resources;
          var viewFactory = _this7.viewCompiler.compile(registryEntry.template, resources, compileInstruction);
          registryEntry.factory = viewFactory;
          return viewFactory;
        });

        return registryEntry.onReady;
      });
    };

    ViewEngine.prototype.loadTemplateResources = function loadTemplateResources(registryEntry, compileInstruction, loadContext) {
      var resources = new ViewResources(this.appResources, registryEntry.address);
      var dependencies = registryEntry.dependencies;
      var importIds = void 0;
      var names = void 0;

      compileInstruction = compileInstruction || ViewCompileInstruction.normal;

      if (dependencies.length === 0 && !compileInstruction.associatedModuleId) {
        return Promise.resolve(resources);
      }

      importIds = dependencies.map(function (x) {
        return x.src;
      });
      names = dependencies.map(function (x) {
        return x.name;
      });
      logger.debug('importing resources for ' + registryEntry.address, importIds);

      return this.importViewResources(importIds, names, resources, compileInstruction, loadContext);
    };

    ViewEngine.prototype.importViewModelResource = function importViewModelResource(moduleImport, moduleMember) {
      var _this8 = this;

      return this.loader.loadModule(moduleImport).then(function (viewModelModule) {
        var normalizedId = _aureliaMetadata.Origin.get(viewModelModule).moduleId;
        var resourceModule = _this8.moduleAnalyzer.analyze(normalizedId, viewModelModule, moduleMember);

        if (!resourceModule.mainResource) {
          throw new Error('No view model found in module "' + moduleImport + '".');
        }

        resourceModule.initialize(_this8.container);

        return resourceModule.mainResource;
      });
    };

    ViewEngine.prototype.importViewResources = function importViewResources(moduleIds, names, resources, compileInstruction, loadContext) {
      var _this9 = this;

      loadContext = loadContext || new ResourceLoadContext();
      compileInstruction = compileInstruction || ViewCompileInstruction.normal;

      moduleIds = moduleIds.map(function (x) {
        return _this9._applyLoaderPlugin(x);
      });

      return this.loader.loadAllModules(moduleIds).then(function (imports) {
        var i = void 0;
        var ii = void 0;
        var analysis = void 0;
        var normalizedId = void 0;
        var current = void 0;
        var associatedModule = void 0;
        var container = _this9.container;
        var moduleAnalyzer = _this9.moduleAnalyzer;
        var allAnalysis = new Array(imports.length);

        for (i = 0, ii = imports.length; i < ii; ++i) {
          current = imports[i];
          normalizedId = _aureliaMetadata.Origin.get(current).moduleId;

          analysis = moduleAnalyzer.analyze(normalizedId, current);
          analysis.initialize(container);
          analysis.register(resources, names[i]);

          allAnalysis[i] = analysis;
        }

        if (compileInstruction.associatedModuleId) {
          associatedModule = moduleAnalyzer.getAnalysis(compileInstruction.associatedModuleId);

          if (associatedModule) {
            associatedModule.register(resources);
          }
        }

        for (i = 0, ii = allAnalysis.length; i < ii; ++i) {
          allAnalysis[i] = allAnalysis[i].load(container, loadContext);
        }

        return Promise.all(allAnalysis).then(function () {
          return resources;
        });
      });
    };

    ViewEngine.prototype._applyLoaderPlugin = function _applyLoaderPlugin(id) {
      var index = id.lastIndexOf('.');
      if (index !== -1) {
        var ext = id.substring(index);
        var pluginName = this._pluginMap[ext];

        if (pluginName === undefined) {
          return id;
        }

        return this.loader.applyPluginToUrl(id, pluginName);
      }

      return id;
    };

    return ViewEngine;
  }()) || _class14);

  var Controller = exports.Controller = function () {
    function Controller(behavior, instruction, viewModel, elementEvents) {
      _classCallCheck(this, Controller);

      this.behavior = behavior;
      this.instruction = instruction;
      this.viewModel = viewModel;
      this.isAttached = false;
      this.view = null;
      this.isBound = false;
      this.scope = null;
      this.elementEvents = elementEvents || null;

      var observerLookup = behavior.observerLocator.getOrCreateObserversLookup(viewModel);
      var handlesBind = behavior.handlesBind;
      var attributes = instruction.attributes;
      var boundProperties = this.boundProperties = [];
      var properties = behavior.properties;
      var i = void 0;
      var ii = void 0;

      behavior._ensurePropertiesDefined(viewModel, observerLookup);

      for (i = 0, ii = properties.length; i < ii; ++i) {
        properties[i]._initialize(viewModel, observerLookup, attributes, handlesBind, boundProperties);
      }
    }

    Controller.prototype.created = function created(owningView) {
      if (this.behavior.handlesCreated) {
        this.viewModel.created(owningView, this.view);
      }
    };

    Controller.prototype.automate = function automate(overrideContext, owningView) {
      this.view.bindingContext = this.viewModel;
      this.view.overrideContext = overrideContext || (0, _aureliaBinding.createOverrideContext)(this.viewModel);
      this.view._isUserControlled = true;

      if (this.behavior.handlesCreated) {
        this.viewModel.created(owningView || null, this.view);
      }

      this.bind(this.view);
    };

    Controller.prototype.bind = function bind(scope) {
      var skipSelfSubscriber = this.behavior.handlesBind;
      var boundProperties = this.boundProperties;
      var i = void 0;
      var ii = void 0;
      var x = void 0;
      var observer = void 0;
      var selfSubscriber = void 0;

      if (this.isBound) {
        if (this.scope === scope) {
          return;
        }

        this.unbind();
      }

      this.isBound = true;
      this.scope = scope;

      for (i = 0, ii = boundProperties.length; i < ii; ++i) {
        x = boundProperties[i];
        observer = x.observer;
        selfSubscriber = observer.selfSubscriber;
        observer.publishing = false;

        if (skipSelfSubscriber) {
          observer.selfSubscriber = null;
        }

        x.binding.bind(scope);
        observer.call();

        observer.publishing = true;
        observer.selfSubscriber = selfSubscriber;
      }

      var overrideContext = void 0;
      if (this.view !== null) {
        if (skipSelfSubscriber) {
          this.view.viewModelScope = scope;
        }

        if (this.viewModel === scope.overrideContext.bindingContext) {
          overrideContext = scope.overrideContext;
        } else if (this.instruction.inheritBindingContext) {
            overrideContext = (0, _aureliaBinding.createOverrideContext)(this.viewModel, scope.overrideContext);
          } else {
              overrideContext = (0, _aureliaBinding.createOverrideContext)(this.viewModel);
              overrideContext.__parentOverrideContext = scope.overrideContext;
            }
        this.view.bind(this.viewModel, overrideContext);
      } else if (skipSelfSubscriber) {
        overrideContext = scope.overrideContext;

        if (scope.overrideContext.__parentOverrideContext !== undefined && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements) {
          overrideContext = Object.assign({}, scope.overrideContext);
          overrideContext.parentOverrideContext = scope.overrideContext.__parentOverrideContext;
        }
        this.viewModel.bind(scope.bindingContext, overrideContext);
      }
    };

    Controller.prototype.unbind = function unbind() {
      if (this.isBound) {
        var boundProperties = this.boundProperties;
        var i = void 0;
        var ii = void 0;

        this.isBound = false;
        this.scope = null;

        if (this.view !== null) {
          this.view.unbind();
        }

        if (this.behavior.handlesUnbind) {
          this.viewModel.unbind();
        }

        if (this.elementEvents !== null) {
          this.elementEvents.disposeAll();
        }

        for (i = 0, ii = boundProperties.length; i < ii; ++i) {
          boundProperties[i].binding.unbind();
        }
      }
    };

    Controller.prototype.attached = function attached() {
      if (this.isAttached) {
        return;
      }

      this.isAttached = true;

      if (this.behavior.handlesAttached) {
        this.viewModel.attached();
      }

      if (this.view !== null) {
        this.view.attached();
      }
    };

    Controller.prototype.detached = function detached() {
      if (this.isAttached) {
        this.isAttached = false;

        if (this.view !== null) {
          this.view.detached();
        }

        if (this.behavior.handlesDetached) {
          this.viewModel.detached();
        }
      }
    };

    return Controller;
  }();

  var BehaviorPropertyObserver = exports.BehaviorPropertyObserver = (_dec8 = (0, _aureliaBinding.subscriberCollection)(), _dec8(_class16 = function () {
    function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber, initialValue) {
      _classCallCheck(this, BehaviorPropertyObserver);

      this.taskQueue = taskQueue;
      this.obj = obj;
      this.propertyName = propertyName;
      this.notqueued = true;
      this.publishing = false;
      this.selfSubscriber = selfSubscriber;
      this.currentValue = this.oldValue = initialValue;
    }

    BehaviorPropertyObserver.prototype.getValue = function getValue() {
      return this.currentValue;
    };

    BehaviorPropertyObserver.prototype.setValue = function setValue(newValue) {
      var oldValue = this.currentValue;

      if (oldValue !== newValue) {
        if (this.publishing && this.notqueued) {
          this.notqueued = false;
          this.taskQueue.queueMicroTask(this);
        }

        this.oldValue = oldValue;
        this.currentValue = newValue;
      }
    };

    BehaviorPropertyObserver.prototype.call = function call() {
      var oldValue = this.oldValue;
      var newValue = this.currentValue;

      this.notqueued = true;

      if (newValue === oldValue) {
        return;
      }

      if (this.selfSubscriber) {
        this.selfSubscriber(newValue, oldValue);
      }

      this.callSubscribers(newValue, oldValue);
      this.oldValue = newValue;
    };

    BehaviorPropertyObserver.prototype.subscribe = function subscribe(context, callable) {
      this.addSubscriber(context, callable);
    };

    BehaviorPropertyObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
      this.removeSubscriber(context, callable);
    };

    return BehaviorPropertyObserver;
  }()) || _class16);


  function getObserver(behavior, instance, name) {
    var lookup = instance.__observers__;

    if (lookup === undefined) {
      if (!behavior.isInitialized) {
        behavior.initialize(_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container(), instance.constructor);
      }

      lookup = behavior.observerLocator.getOrCreateObserversLookup(instance);
      behavior._ensurePropertiesDefined(instance, lookup);
    }

    return lookup[name];
  }

  var BindableProperty = exports.BindableProperty = function () {
    function BindableProperty(nameOrConfig) {
      _classCallCheck(this, BindableProperty);

      if (typeof nameOrConfig === 'string') {
        this.name = nameOrConfig;
      } else {
        Object.assign(this, nameOrConfig);
      }

      this.attribute = this.attribute || _hyphenate(this.name);
      if (this.defaultBindingMode === null || this.defaultBindingMode === undefined) {
        this.defaultBindingMode = _aureliaBinding.bindingMode.oneWay;
      }
      this.changeHandler = this.changeHandler || null;
      this.owner = null;
      this.descriptor = null;
    }

    BindableProperty.prototype.registerWith = function registerWith(target, behavior, descriptor) {
      behavior.properties.push(this);
      behavior.attributes[this.attribute] = this;
      this.owner = behavior;

      if (descriptor) {
        this.descriptor = descriptor;
        return this._configureDescriptor(behavior, descriptor);
      }
    };

    BindableProperty.prototype._configureDescriptor = function _configureDescriptor(behavior, descriptor) {
      var name = this.name;

      descriptor.configurable = true;
      descriptor.enumerable = true;

      if ('initializer' in descriptor) {
        this.defaultValue = descriptor.initializer;
        delete descriptor.initializer;
        delete descriptor.writable;
      }

      if ('value' in descriptor) {
        this.defaultValue = descriptor.value;
        delete descriptor.value;
        delete descriptor.writable;
      }

      descriptor.get = function () {
        return getObserver(behavior, this, name).getValue();
      };

      descriptor.set = function (value) {
        getObserver(behavior, this, name).setValue(value);
      };

      descriptor.get.getObserver = function (obj) {
        return getObserver(behavior, obj, name);
      };

      return descriptor;
    };

    BindableProperty.prototype.defineOn = function defineOn(target, behavior) {
      var name = this.name;
      var handlerName = void 0;

      if (this.changeHandler === null) {
        handlerName = name + 'Changed';
        if (handlerName in target.prototype) {
          this.changeHandler = handlerName;
        }
      }

      if (this.descriptor === null) {
        Object.defineProperty(target.prototype, name, this._configureDescriptor(behavior, {}));
      }
    };

    BindableProperty.prototype.createObserver = function createObserver(viewModel) {
      var selfSubscriber = null;
      var defaultValue = this.defaultValue;
      var changeHandlerName = this.changeHandler;
      var name = this.name;
      var initialValue = void 0;

      if (this.hasOptions) {
        return undefined;
      }

      if (changeHandlerName in viewModel) {
        if ('propertyChanged' in viewModel) {
          selfSubscriber = function selfSubscriber(newValue, oldValue) {
            viewModel[changeHandlerName](newValue, oldValue);
            viewModel.propertyChanged(name, newValue, oldValue);
          };
        } else {
          selfSubscriber = function selfSubscriber(newValue, oldValue) {
            return viewModel[changeHandlerName](newValue, oldValue);
          };
        }
      } else if ('propertyChanged' in viewModel) {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          return viewModel.propertyChanged(name, newValue, oldValue);
        };
      } else if (changeHandlerName !== null) {
        throw new Error('Change handler ' + changeHandlerName + ' was specified but not declared on the class.');
      }

      if (defaultValue !== undefined) {
        initialValue = typeof defaultValue === 'function' ? defaultValue.call(viewModel) : defaultValue;
      }

      return new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, this.name, selfSubscriber, initialValue);
    };

    BindableProperty.prototype._initialize = function _initialize(viewModel, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
      var selfSubscriber = void 0;
      var observer = void 0;
      var attribute = void 0;
      var defaultValue = this.defaultValue;

      if (this.isDynamic) {
        for (var key in attributes) {
          this._createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, key, attributes[key], boundProperties);
        }
      } else if (!this.hasOptions) {
        observer = observerLookup[this.name];

        if (attributes !== null) {
          selfSubscriber = observer.selfSubscriber;
          attribute = attributes[this.attribute];

          if (behaviorHandlesBind) {
            observer.selfSubscriber = null;
          }

          if (typeof attribute === 'string') {
            viewModel[this.name] = attribute;
            observer.call();
          } else if (attribute) {
            boundProperties.push({ observer: observer, binding: attribute.createBinding(viewModel) });
          } else if (defaultValue !== undefined) {
            observer.call();
          }

          observer.selfSubscriber = selfSubscriber;
        }

        observer.publishing = true;
      }
    };

    BindableProperty.prototype._createDynamicProperty = function _createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
      var changeHandlerName = name + 'Changed';
      var selfSubscriber = null;
      var observer = void 0;
      var info = void 0;

      if (changeHandlerName in viewModel) {
        if ('propertyChanged' in viewModel) {
          selfSubscriber = function selfSubscriber(newValue, oldValue) {
            viewModel[changeHandlerName](newValue, oldValue);
            viewModel.propertyChanged(name, newValue, oldValue);
          };
        } else {
          selfSubscriber = function selfSubscriber(newValue, oldValue) {
            return viewModel[changeHandlerName](newValue, oldValue);
          };
        }
      } else if ('propertyChanged' in viewModel) {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          return viewModel.propertyChanged(name, newValue, oldValue);
        };
      }

      observer = observerLookup[name] = new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, name, selfSubscriber);

      Object.defineProperty(viewModel, name, {
        configurable: true,
        enumerable: true,
        get: observer.getValue.bind(observer),
        set: observer.setValue.bind(observer)
      });

      if (behaviorHandlesBind) {
        observer.selfSubscriber = null;
      }

      if (typeof attribute === 'string') {
        viewModel[name] = attribute;
        observer.call();
      } else if (attribute) {
        info = { observer: observer, binding: attribute.createBinding(viewModel) };
        boundProperties.push(info);
      }

      observer.publishing = true;
      observer.selfSubscriber = selfSubscriber;
    };

    return BindableProperty;
  }();

  var contentSelectorViewCreateInstruction = { enhance: false };
  var lastProviderId = 0;

  function nextProviderId() {
    return ++lastProviderId;
  }

  function doProcessContent() {
    return true;
  }
  function doProcessAttributes() {}

  var HtmlBehaviorResource = exports.HtmlBehaviorResource = function () {
    function HtmlBehaviorResource() {
      _classCallCheck(this, HtmlBehaviorResource);

      this.elementName = null;
      this.attributeName = null;
      this.attributeDefaultBindingMode = undefined;
      this.liftsContent = false;
      this.targetShadowDOM = false;
      this.processAttributes = doProcessAttributes;
      this.processContent = doProcessContent;
      this.usesShadowDOM = false;
      this.childBindings = null;
      this.hasDynamicOptions = false;
      this.containerless = false;
      this.properties = [];
      this.attributes = {};
      this.isInitialized = false;
    }

    HtmlBehaviorResource.convention = function convention(name, existing) {
      var behavior = void 0;

      if (name.endsWith('CustomAttribute')) {
        behavior = existing || new HtmlBehaviorResource();
        behavior.attributeName = _hyphenate(name.substring(0, name.length - 15));
      }

      if (name.endsWith('CustomElement')) {
        behavior = existing || new HtmlBehaviorResource();
        behavior.elementName = _hyphenate(name.substring(0, name.length - 13));
      }

      return behavior;
    };

    HtmlBehaviorResource.prototype.addChildBinding = function addChildBinding(behavior) {
      if (this.childBindings === null) {
        this.childBindings = [];
      }

      this.childBindings.push(behavior);
    };

    HtmlBehaviorResource.prototype.initialize = function initialize(container, target) {
      var proto = target.prototype;
      var properties = this.properties;
      var attributeName = this.attributeName;
      var attributeDefaultBindingMode = this.attributeDefaultBindingMode;
      var i = void 0;
      var ii = void 0;
      var current = void 0;

      if (this.isInitialized) {
        return;
      }

      this.isInitialized = true;
      target.__providerId__ = nextProviderId();

      this.observerLocator = container.get(_aureliaBinding.ObserverLocator);
      this.taskQueue = container.get(_aureliaTaskQueue.TaskQueue);

      this.target = target;
      this.usesShadowDOM = this.targetShadowDOM && _aureliaPal.FEATURE.shadowDOM;
      this.handlesCreated = 'created' in proto;
      this.handlesBind = 'bind' in proto;
      this.handlesUnbind = 'unbind' in proto;
      this.handlesAttached = 'attached' in proto;
      this.handlesDetached = 'detached' in proto;
      this.htmlName = this.elementName || this.attributeName;

      if (attributeName !== null) {
        if (properties.length === 0) {
          new BindableProperty({
            name: 'value',
            changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
            attribute: attributeName,
            defaultBindingMode: attributeDefaultBindingMode
          }).registerWith(target, this);
        }

        current = properties[0];

        if (properties.length === 1 && current.name === 'value') {
          current.isDynamic = current.hasOptions = this.hasDynamicOptions;
          current.defineOn(target, this);
        } else {
          for (i = 0, ii = properties.length; i < ii; ++i) {
            properties[i].defineOn(target, this);
          }

          current = new BindableProperty({
            name: 'value',
            changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
            attribute: attributeName,
            defaultBindingMode: attributeDefaultBindingMode
          });

          current.hasOptions = true;
          current.registerWith(target, this);
        }
      } else {
        for (i = 0, ii = properties.length; i < ii; ++i) {
          properties[i].defineOn(target, this);
        }
      }
    };

    HtmlBehaviorResource.prototype.register = function register(registry, name) {
      if (this.attributeName !== null) {
        registry.registerAttribute(name || this.attributeName, this, this.attributeName);
      }

      if (this.elementName !== null) {
        registry.registerElement(name || this.elementName, this);
      }
    };

    HtmlBehaviorResource.prototype.load = function load(container, target, loadContext, viewStrategy, transientView) {
      var _this10 = this;

      var options = void 0;

      if (this.elementName !== null) {
        viewStrategy = container.get(ViewLocator).getViewStrategy(viewStrategy || this.viewStrategy || target);
        options = new ViewCompileInstruction(this.targetShadowDOM, true);

        if (!viewStrategy.moduleId) {
          viewStrategy.moduleId = _aureliaMetadata.Origin.get(target).moduleId;
        }

        return viewStrategy.loadViewFactory(container.get(ViewEngine), options, loadContext).then(function (viewFactory) {
          if (!transientView || !_this10.viewFactory) {
            _this10.viewFactory = viewFactory;
          }

          return viewFactory;
        });
      }

      return Promise.resolve(this);
    };

    HtmlBehaviorResource.prototype.compile = function compile(compiler, resources, node, instruction, parentNode) {
      if (this.liftsContent) {
        if (!instruction.viewFactory) {
          var template = _aureliaPal.DOM.createElement('template');
          var fragment = _aureliaPal.DOM.createDocumentFragment();
          var cacheSize = node.getAttribute('view-cache');
          var part = node.getAttribute('part');

          node.removeAttribute(instruction.originalAttrName);
          _aureliaPal.DOM.replaceNode(template, node, parentNode);
          fragment.appendChild(node);
          instruction.viewFactory = compiler.compile(fragment, resources);

          if (part) {
            instruction.viewFactory.part = part;
            node.removeAttribute('part');
          }

          if (cacheSize) {
            instruction.viewFactory.setCacheSize(cacheSize);
            node.removeAttribute('view-cache');
          }

          node = template;
        }
      } else if (this.elementName !== null) {
        var _partReplacements2 = {};

        if (this.processContent(compiler, resources, node, instruction) && node.hasChildNodes()) {
          if (this.usesShadowDOM) {
            var currentChild = node.firstChild;
            var nextSibling = void 0;
            var toReplace = void 0;

            while (currentChild) {
              nextSibling = currentChild.nextSibling;

              if (currentChild.tagName === 'TEMPLATE' && (toReplace = currentChild.getAttribute('replace-part'))) {
                _partReplacements2[toReplace] = compiler.compile(currentChild, resources);
                _aureliaPal.DOM.removeNode(currentChild, parentNode);
                instruction.partReplacements = _partReplacements2;
              }

              currentChild = nextSibling;
            }

            instruction.skipContentProcessing = false;
          } else {
            var _fragment = _aureliaPal.DOM.createDocumentFragment();
            var _currentChild = node.firstChild;
            var _nextSibling = void 0;
            var _toReplace = void 0;

            while (_currentChild) {
              _nextSibling = _currentChild.nextSibling;

              if (_currentChild.tagName === 'TEMPLATE' && (_toReplace = _currentChild.getAttribute('replace-part'))) {
                _partReplacements2[_toReplace] = compiler.compile(_currentChild, resources);
                _aureliaPal.DOM.removeNode(_currentChild, parentNode);
                instruction.partReplacements = _partReplacements2;
              } else {
                _fragment.appendChild(_currentChild);
              }

              _currentChild = _nextSibling;
            }

            instruction.contentFactory = compiler.compile(_fragment, resources);
            instruction.skipContentProcessing = true;
          }
        } else {
          instruction.skipContentProcessing = true;
        }
      }

      return node;
    };

    HtmlBehaviorResource.prototype.create = function create(container, instruction, element, bindings) {
      var host = void 0;
      var au = null;

      instruction = instruction || BehaviorInstruction.normal;
      element = element || null;
      bindings = bindings || null;

      if (this.elementName !== null && element) {
        if (this.usesShadowDOM) {
          host = element.createShadowRoot();
          container.registerInstance(_aureliaPal.DOM.boundary, host);
        } else {
          host = element;

          if (this.targetShadowDOM) {
            container.registerInstance(_aureliaPal.DOM.boundary, host);
          }
        }
      }

      if (element !== null) {
        element.au = au = element.au || {};
      }

      var viewModel = instruction.viewModel || container.get(this.target);
      var controller = new Controller(this, instruction, viewModel, container.elementEvents);
      var childBindings = this.childBindings;
      var viewFactory = void 0;

      if (this.liftsContent) {
        au.controller = controller;
      } else if (this.elementName !== null) {
        viewFactory = instruction.viewFactory || this.viewFactory;
        container.viewModel = viewModel;

        if (viewFactory) {
          controller.view = viewFactory.create(container, instruction, element);
        }

        if (element !== null) {
          au.controller = controller;

          if (controller.view) {
            if (!this.usesShadowDOM) {
              if (instruction.contentFactory) {
                var contentView = instruction.contentFactory.create(container, contentSelectorViewCreateInstruction);

                _ContentSelector.applySelectors(contentView, controller.view.contentSelectors, function (contentSelector, group) {
                  return contentSelector.add(group);
                });

                controller.contentView = contentView;
              }
            }

            if (instruction.anchorIsContainer) {
              if (childBindings !== null) {
                for (var i = 0, ii = childBindings.length; i < ii; ++i) {
                  controller.view.addBinding(childBindings[i].create(element, viewModel));
                }
              }

              controller.view.appendNodesTo(host);
            } else {
              controller.view.insertNodesBefore(host);
            }
          } else if (childBindings !== null) {
            for (var _i2 = 0, _ii2 = childBindings.length; _i2 < _ii2; ++_i2) {
              bindings.push(childBindings[_i2].create(element, viewModel));
            }
          }
        } else if (controller.view) {
          controller.view.controller = controller;

          if (childBindings !== null) {
            for (var _i3 = 0, _ii3 = childBindings.length; _i3 < _ii3; ++_i3) {
              controller.view.addBinding(childBindings[_i3].create(instruction.host, viewModel));
            }
          }
        } else if (childBindings !== null) {
          for (var _i4 = 0, _ii4 = childBindings.length; _i4 < _ii4; ++_i4) {
            bindings.push(childBindings[_i4].create(instruction.host, viewModel));
          }
        }
      } else if (childBindings !== null) {
        for (var _i5 = 0, _ii5 = childBindings.length; _i5 < _ii5; ++_i5) {
          bindings.push(childBindings[_i5].create(element, viewModel));
        }
      }

      if (au !== null) {
        au[this.htmlName] = controller;
      }

      if (instruction.initiatedByBehavior && viewFactory) {
        controller.view.created();
      }

      return controller;
    };

    HtmlBehaviorResource.prototype._ensurePropertiesDefined = function _ensurePropertiesDefined(instance, lookup) {
      var properties = void 0;
      var i = void 0;
      var ii = void 0;
      var observer = void 0;

      if ('__propertiesDefined__' in lookup) {
        return;
      }

      lookup.__propertiesDefined__ = true;
      properties = this.properties;

      for (i = 0, ii = properties.length; i < ii; ++i) {
        observer = properties[i].createObserver(instance);

        if (observer !== undefined) {
          lookup[observer.propertyName] = observer;
        }
      }
    };

    return HtmlBehaviorResource;
  }();

  function createChildObserverDecorator(selectorOrConfig, all) {
    return function (target, key, descriptor) {
      var actualTarget = typeof key === 'string' ? target.constructor : target;
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, actualTarget);

      if (typeof selectorOrConfig === 'string') {
        selectorOrConfig = {
          selector: selectorOrConfig,
          name: key
        };
      }

      if (descriptor) {
        descriptor.writable = true;
      }

      selectorOrConfig.all = all;
      r.addChildBinding(new ChildObserver(selectorOrConfig));
    };
  }

  function children(selectorOrConfig) {
    return createChildObserverDecorator(selectorOrConfig, true);
  }

  function child(selectorOrConfig) {
    return createChildObserverDecorator(selectorOrConfig, false);
  }

  var ChildObserver = function () {
    function ChildObserver(config) {
      _classCallCheck(this, ChildObserver);

      this.name = config.name;
      this.changeHandler = config.changeHandler || this.name + 'Changed';
      this.selector = config.selector;
      this.all = config.all;
    }

    ChildObserver.prototype.create = function create(target, viewModel) {
      return new ChildObserverBinder(this.selector, target, this.name, viewModel, this.changeHandler, this.all);
    };

    return ChildObserver;
  }();

  var noMutations = [];

  function trackMutation(groupedMutations, binder, record) {
    var mutations = groupedMutations.get(binder);

    if (!mutations) {
      mutations = [];
      groupedMutations.set(binder, mutations);
    }

    mutations.push(record);
  }

  function onChildChange(mutations, observer) {
    var binders = observer.binders;
    var bindersLength = binders.length;
    var groupedMutations = new Map();

    for (var i = 0, ii = mutations.length; i < ii; ++i) {
      var record = mutations[i];
      var added = record.addedNodes;
      var removed = record.removedNodes;

      for (var j = 0, jj = removed.length; j < jj; ++j) {
        var node = removed[j];
        if (node.nodeType === 1) {
          for (var k = 0; k < bindersLength; ++k) {
            var binder = binders[k];
            if (binder.onRemove(node)) {
              trackMutation(groupedMutations, binder, record);
            }
          }
        }
      }

      for (var _j = 0, _jj = added.length; _j < _jj; ++_j) {
        var _node = added[_j];
        if (_node.nodeType === 1) {
          for (var _k = 0; _k < bindersLength; ++_k) {
            var _binder = binders[_k];
            if (_binder.onAdd(_node)) {
              trackMutation(groupedMutations, _binder, record);
            }
          }
        }
      }
    }

    groupedMutations.forEach(function (value, key) {
      if (key.changeHandler !== null) {
        key.viewModel[key.changeHandler](value);
      }
    });
  }

  var ChildObserverBinder = function () {
    function ChildObserverBinder(selector, target, property, viewModel, changeHandler, all) {
      _classCallCheck(this, ChildObserverBinder);

      this.selector = selector;
      this.target = target;
      this.property = property;
      this.viewModel = viewModel;
      this.changeHandler = changeHandler in viewModel ? changeHandler : null;
      this.all = all;
    }

    ChildObserverBinder.prototype.bind = function bind(source) {
      var target = this.target;
      var viewModel = this.viewModel;
      var selector = this.selector;
      var current = target.firstElementChild;
      var observer = target.__childObserver__;

      if (!observer) {
        observer = target.__childObserver__ = _aureliaPal.DOM.createMutationObserver(onChildChange);
        observer.observe(target, { childList: true });
        observer.binders = [];
      }

      observer.binders.push(this);

      if (this.all) {
        var items = viewModel[this.property];
        if (!items) {
          items = viewModel[this.property] = [];
        } else {
          items.length = 0;
        }

        while (current) {
          if (current.matches(selector)) {
            items.push(current.au && current.au.controller ? current.au.controller.viewModel : current);
          }

          current = current.nextElementSibling;
        }

        if (this.changeHandler !== null) {
          this.viewModel[this.changeHandler](noMutations);
        }
      } else {
        while (current) {
          if (current.matches(selector)) {
            var value = current.au && current.au.controller ? current.au.controller.viewModel : current;
            this.viewModel[this.property] = value;

            if (this.changeHandler !== null) {
              this.viewModel[this.changeHandler](value);
            }

            break;
          }

          current = current.nextElementSibling;
        }
      }
    };

    ChildObserverBinder.prototype.onRemove = function onRemove(element) {
      if (element.matches(this.selector)) {
        var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

        if (this.all) {
          var items = this.viewModel[this.property];
          var index = items.indexOf(value);

          if (index !== -1) {
            items.splice(index, 1);
          }

          return true;
        }

        return false;
      }
    };

    ChildObserverBinder.prototype.onAdd = function onAdd(element) {
      var selector = this.selector;

      if (element.matches(selector)) {
        var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

        if (this.all) {
          var items = this.viewModel[this.property];
          var index = 0;
          var prev = element.previousElementSibling;

          while (prev) {
            if (prev.matches(selector)) {
              index++;
            }

            prev = prev.previousElementSibling;
          }

          items.splice(index, 0, value);
          return true;
        }

        this.viewModel[this.property] = value;

        if (this.changeHandler !== null) {
          this.viewModel[this.changeHandler](value);
        }
      }

      return false;
    };

    ChildObserverBinder.prototype.unbind = function unbind() {
      if (this.target.__childObserver__) {
        this.target.__childObserver__.disconnect();
        this.target.__childObserver__ = null;
      }
    };

    return ChildObserverBinder;
  }();

  function tryActivateViewModel(context) {
    if (context.skipActivation || typeof context.viewModel.activate !== 'function') {
      return Promise.resolve();
    }

    return context.viewModel.activate(context.model) || Promise.resolve();
  }

  var CompositionEngine = exports.CompositionEngine = (_dec9 = (0, _aureliaDependencyInjection.inject)(ViewEngine, ViewLocator), _dec9(_class17 = function () {
    function CompositionEngine(viewEngine, viewLocator) {
      _classCallCheck(this, CompositionEngine);

      this.viewEngine = viewEngine;
      this.viewLocator = viewLocator;
    }

    CompositionEngine.prototype._createControllerAndSwap = function _createControllerAndSwap(context) {
      function swap(controller) {
        return Promise.resolve(context.viewSlot.removeAll(true)).then(function () {
          if (context.currentController) {
            context.currentController.unbind();
          }

          context.viewSlot.add(controller.view);

          if (context.compositionTransactionNotifier) {
            context.compositionTransactionNotifier.done();
          }

          return controller;
        });
      }

      return this.createController(context).then(function (controller) {
        controller.automate(context.overrideContext, context.owningView);

        if (context.compositionTransactionOwnershipToken) {
          return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
            return swap(controller);
          });
        }

        return swap(controller);
      });
    };

    CompositionEngine.prototype.createController = function createController(context) {
      var _this11 = this;

      var childContainer = void 0;
      var viewModel = void 0;
      var viewModelResource = void 0;
      var m = void 0;

      return this.ensureViewModel(context).then(tryActivateViewModel).then(function () {
        childContainer = context.childContainer;
        viewModel = context.viewModel;
        viewModelResource = context.viewModelResource;
        m = viewModelResource.metadata;

        var viewStrategy = _this11.viewLocator.getViewStrategy(context.view || viewModel);

        if (context.viewResources) {
          viewStrategy.makeRelativeTo(context.viewResources.viewUrl);
        }

        return m.load(childContainer, viewModelResource.value, null, viewStrategy, true);
      }).then(function (viewFactory) {
        return m.create(childContainer, BehaviorInstruction.dynamic(context.host, viewModel, viewFactory));
      });
    };

    CompositionEngine.prototype.ensureViewModel = function ensureViewModel(context) {
      var childContainer = context.childContainer = context.childContainer || context.container.createChild();

      if (typeof context.viewModel === 'string') {
        context.viewModel = context.viewResources ? context.viewResources.relativeToView(context.viewModel) : context.viewModel;

        return this.viewEngine.importViewModelResource(context.viewModel).then(function (viewModelResource) {
          childContainer.autoRegister(viewModelResource.value);

          if (context.host) {
            childContainer.registerInstance(_aureliaPal.DOM.Element, context.host);
          }

          context.viewModel = childContainer.viewModel = childContainer.get(viewModelResource.value);
          context.viewModelResource = viewModelResource;
          return context;
        });
      }

      var m = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, context.viewModel.constructor);
      m.elementName = m.elementName || 'dynamic-element';
      m.initialize(context.container || childContainer, context.viewModel.constructor);
      context.viewModelResource = { metadata: m, value: context.viewModel.constructor };
      childContainer.viewModel = context.viewModel;
      return Promise.resolve(context);
    };

    CompositionEngine.prototype.compose = function compose(context) {
      context.childContainer = context.childContainer || context.container.createChild();
      context.view = this.viewLocator.getViewStrategy(context.view);

      var transaction = context.childContainer.get(CompositionTransaction);
      var compositionTransactionOwnershipToken = transaction.tryCapture();

      if (compositionTransactionOwnershipToken) {
        context.compositionTransactionOwnershipToken = compositionTransactionOwnershipToken;
      } else {
        context.compositionTransactionNotifier = transaction.enlist();
      }

      if (context.viewModel) {
        return this._createControllerAndSwap(context);
      } else if (context.view) {
        if (context.viewResources) {
          context.view.makeRelativeTo(context.viewResources.viewUrl);
        }

        return context.view.loadViewFactory(this.viewEngine, new ViewCompileInstruction()).then(function (viewFactory) {
          var result = viewFactory.create(context.childContainer);
          result.bind(context.bindingContext, context.overrideContext);

          var work = function work() {
            return Promise.resolve(context.viewSlot.removeAll(true)).then(function () {
              context.viewSlot.add(result);

              if (context.compositionTransactionNotifier) {
                context.compositionTransactionNotifier.done();
              }

              return result;
            });
          };

          if (context.compositionTransactionOwnershipToken) {
            return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(work);
          }

          return work();
        });
      } else if (context.viewSlot) {
        context.viewSlot.removeAll();

        if (context.compositionTransactionNotifier) {
          context.compositionTransactionNotifier.done();
        }

        return Promise.resolve(null);
      }
    };

    return CompositionEngine;
  }()) || _class17);

  var ElementConfigResource = exports.ElementConfigResource = function () {
    function ElementConfigResource() {
      _classCallCheck(this, ElementConfigResource);
    }

    ElementConfigResource.prototype.initialize = function initialize(container, target) {};

    ElementConfigResource.prototype.register = function register(registry, name) {};

    ElementConfigResource.prototype.load = function load(container, target) {
      var config = new target();
      var eventManager = container.get(_aureliaBinding.EventManager);
      eventManager.registerElementConfig(config);
    };

    return ElementConfigResource;
  }();

  function validateBehaviorName(name, type) {
    if (/[A-Z]/.test(name)) {
      var newName = _hyphenate(name);
      LogManager.getLogger('templating').warn('\'' + name + '\' is not a valid ' + type + ' name and has been converted to \'' + newName + '\'. Upper-case letters are not allowed because the DOM is not case-sensitive.');
      return newName;
    }
    return name;
  }

  function resource(instance) {
    return function (target) {
      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, instance, target);
    };
  }

  function behavior(override) {
    return function (target) {
      if (override instanceof HtmlBehaviorResource) {
        _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, override, target);
      } else {
        var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
        Object.assign(r, override);
      }
    };
  }

  function customElement(name) {
    return function (target) {
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
      r.elementName = validateBehaviorName(name, 'custom element');
    };
  }

  function customAttribute(name, defaultBindingMode) {
    return function (target) {
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, target);
      r.attributeName = validateBehaviorName(name, 'custom attribute');
      r.attributeDefaultBindingMode = defaultBindingMode;
    };
  }

  function templateController(target) {
    var deco = function deco(t) {
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
      r.liftsContent = true;
    };

    return target ? deco(target) : deco;
  }

  function bindable(nameOrConfigOrTarget, key, descriptor) {
    var deco = function deco(target, key2, descriptor2) {
      var actualTarget = key2 ? target.constructor : target;
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, actualTarget);
      var prop = void 0;

      if (key2) {
        nameOrConfigOrTarget = nameOrConfigOrTarget || {};
        nameOrConfigOrTarget.name = key2;
      }

      prop = new BindableProperty(nameOrConfigOrTarget);
      return prop.registerWith(actualTarget, r, descriptor2);
    };

    if (!nameOrConfigOrTarget) {
      return deco;
    }

    if (key) {
      var target = nameOrConfigOrTarget;
      nameOrConfigOrTarget = null;
      return deco(target, key, descriptor);
    }

    return deco;
  }

  function dynamicOptions(target) {
    var deco = function deco(t) {
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
      r.hasDynamicOptions = true;
    };

    return target ? deco(target) : deco;
  }

  function useShadowDOM(target) {
    var deco = function deco(t) {
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
      r.targetShadowDOM = true;
    };

    return target ? deco(target) : deco;
  }

  function processAttributes(processor) {
    return function (t) {
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
      r.processAttributes = processor;
    };
  }

  function doNotProcessContent() {
    return false;
  }

  function processContent(processor) {
    return function (t) {
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
      r.processContent = processor || doNotProcessContent;
    };
  }

  function containerless(target) {
    var deco = function deco(t) {
      var r = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, HtmlBehaviorResource, t);
      r.containerless = true;
    };

    return target ? deco(target) : deco;
  }

  function useViewStrategy(strategy) {
    return function (target) {
      _aureliaMetadata.metadata.define(ViewLocator.viewStrategyMetadataKey, strategy, target);
    };
  }

  function useView(path) {
    return useViewStrategy(new RelativeViewStrategy(path));
  }

  function inlineView(markup, dependencies, dependencyBaseUrl) {
    return useViewStrategy(new InlineViewStrategy(markup, dependencies, dependencyBaseUrl));
  }

  function noView(target) {
    var deco = function deco(t) {
      _aureliaMetadata.metadata.define(ViewLocator.viewStrategyMetadataKey, new NoViewStrategy(), t);
    };

    return target ? deco(target) : deco;
  }

  function elementConfig(target) {
    var deco = function deco(t) {
      _aureliaMetadata.metadata.define(_aureliaMetadata.metadata.resource, new ElementConfigResource(), t);
    };

    return target ? deco(target) : deco;
  }

  var TemplatingEngine = exports.TemplatingEngine = (_dec10 = (0, _aureliaDependencyInjection.inject)(_aureliaDependencyInjection.Container, ModuleAnalyzer, ViewCompiler, CompositionEngine), _dec10(_class18 = function () {
    function TemplatingEngine(container, moduleAnalyzer, viewCompiler, compositionEngine) {
      _classCallCheck(this, TemplatingEngine);

      this._container = container;
      this._moduleAnalyzer = moduleAnalyzer;
      this._viewCompiler = viewCompiler;
      this._compositionEngine = compositionEngine;
      container.registerInstance(Animator, Animator.instance = new Animator());
    }

    TemplatingEngine.prototype.configureAnimator = function configureAnimator(animator) {
      this._container.unregister(Animator);
      this._container.registerInstance(Animator, Animator.instance = animator);
    };

    TemplatingEngine.prototype.compose = function compose(context) {
      return this._compositionEngine.compose(context);
    };

    TemplatingEngine.prototype.enhance = function enhance(instruction) {
      if (instruction instanceof _aureliaPal.DOM.Element) {
        instruction = { element: instruction };
      }

      var compilerInstructions = {};
      var resources = instruction.resources || this._container.get(ViewResources);

      this._viewCompiler._compileNode(instruction.element, resources, compilerInstructions, instruction.element.parentNode, 'root', true);

      var factory = new ViewFactory(instruction.element, compilerInstructions, resources);
      var container = instruction.container || this._container.createChild();
      var view = factory.create(container, BehaviorInstruction.enhance());

      view.bind(instruction.bindingContext || {});

      return view;
    };

    TemplatingEngine.prototype.createControllerForUnitTest = function createControllerForUnitTest(viewModelType, attributesFromHTML) {
      var _moduleAnalyzer$analy;

      var exportName = viewModelType.name;
      var resourceModule = this._moduleAnalyzer.analyze('test-module', (_moduleAnalyzer$analy = {}, _moduleAnalyzer$analy[exportName] = viewModelType, _moduleAnalyzer$analy), exportName);
      var description = resourceModule.mainResource;

      description.initialize(this._container);

      var viewModel = this._container.get(viewModelType);
      var instruction = BehaviorInstruction.unitTest(description, attributesFromHTML);

      return new Controller(description.metadata, instruction, viewModel);
    };

    TemplatingEngine.prototype.createViewModelForUnitTest = function createViewModelForUnitTest(viewModelType, attributesFromHTML, bindingContext) {
      var controller = this.createControllerForUnitTest(viewModelType, attributesFromHTML);
      controller.bind((0, _aureliaBinding.createScopeForTest)(bindingContext));
      return controller.viewModel;
    };

    return TemplatingEngine;
  }()) || _class18);
});
define('aurelia-framework',['exports', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-metadata', 'aurelia-templating', 'aurelia-loader', 'aurelia-task-queue', 'aurelia-path', 'aurelia-pal', 'aurelia-logging'], function (exports, _aureliaDependencyInjection, _aureliaBinding, _aureliaMetadata, _aureliaTemplating, _aureliaLoader, _aureliaTaskQueue, _aureliaPath, _aureliaPal, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LogManager = exports.FrameworkConfiguration = exports.Aurelia = undefined;
  Object.keys(_aureliaDependencyInjection).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaDependencyInjection[key];
      }
    });
  });
  Object.keys(_aureliaBinding).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaBinding[key];
      }
    });
  });
  Object.keys(_aureliaMetadata).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaMetadata[key];
      }
    });
  });
  Object.keys(_aureliaTemplating).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaTemplating[key];
      }
    });
  });
  Object.keys(_aureliaLoader).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaLoader[key];
      }
    });
  });
  Object.keys(_aureliaTaskQueue).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaTaskQueue[key];
      }
    });
  });
  Object.keys(_aureliaPath).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPath[key];
      }
    });
  });
  Object.keys(_aureliaPal).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPal[key];
      }
    });
  });

  var TheLogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function preventActionlessFormSubmit() {
    _aureliaPal.DOM.addEventListener('submit', function (evt) {
      var target = evt.target;
      var action = target.action;

      if (target.tagName.toLowerCase() === 'form' && !action) {
        evt.preventDefault();
      }
    });
  }

  var Aurelia = exports.Aurelia = function () {
    function Aurelia(loader, container, resources) {
      _classCallCheck(this, Aurelia);

      this.loader = loader || new _aureliaPal.PLATFORM.Loader();
      this.container = container || new _aureliaDependencyInjection.Container().makeGlobal();
      this.resources = resources || new _aureliaTemplating.ViewResources();
      this.use = new FrameworkConfiguration(this);
      this.logger = TheLogManager.getLogger('aurelia');
      this.hostConfigured = false;
      this.host = null;

      this.use.instance(Aurelia, this);
      this.use.instance(_aureliaLoader.Loader, this.loader);
      this.use.instance(_aureliaTemplating.ViewResources, this.resources);
    }

    Aurelia.prototype.start = function start() {
      var _this = this;

      if (this.started) {
        return Promise.resolve(this);
      }

      this.started = true;
      this.logger.info('Aurelia Starting');

      return this.use.apply().then(function () {
        preventActionlessFormSubmit();

        if (!_this.container.hasResolver(_aureliaTemplating.BindingLanguage)) {
          var message = 'You must configure Aurelia with a BindingLanguage implementation.';
          _this.logger.error(message);
          throw new Error(message);
        }

        _this.logger.info('Aurelia Started');
        var evt = _aureliaPal.DOM.createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
        _aureliaPal.DOM.dispatchEvent(evt);
        return _this;
      });
    };

    Aurelia.prototype.enhance = function enhance() {
      var _this2 = this;

      var bindingContext = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      this._configureHost(applicationHost || _aureliaPal.DOM.querySelectorAll('body')[0]);

      return new Promise(function (resolve) {
        var engine = _this2.container.get(_aureliaTemplating.TemplatingEngine);
        _this2.root = engine.enhance({ container: _this2.container, element: _this2.host, resources: _this2.resources, bindingContext: bindingContext });
        _this2.root.attached();
        _this2._onAureliaComposed();
        return _this2;
      });
    };

    Aurelia.prototype.setRoot = function setRoot() {
      var _this3 = this;

      var root = arguments.length <= 0 || arguments[0] === undefined ? 'app' : arguments[0];
      var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      var instruction = {};

      if (this.root && this.root.viewModel && this.root.viewModel.router) {
        this.root.viewModel.router.deactivate();
        this.root.viewModel.router.reset();
      }

      this._configureHost(applicationHost);

      var engine = this.container.get(_aureliaTemplating.TemplatingEngine);
      var transaction = this.container.get(_aureliaTemplating.CompositionTransaction);
      delete transaction.initialComposition;

      instruction.viewModel = root;
      instruction.container = instruction.childContainer = this.container;
      instruction.viewSlot = this.hostSlot;
      instruction.host = this.host;

      return engine.compose(instruction).then(function (r) {
        _this3.root = r;
        instruction.viewSlot.attached();
        _this3._onAureliaComposed();
        return _this3;
      });
    };

    Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
      if (this.hostConfigured) {
        return;
      }
      applicationHost = applicationHost || this.host;

      if (!applicationHost || typeof applicationHost === 'string') {
        this.host = _aureliaPal.DOM.getElementById(applicationHost || 'applicationHost');
      } else {
        this.host = applicationHost;
      }

      if (!this.host) {
        throw new Error('No applicationHost was specified.');
      }

      this.hostConfigured = true;
      this.host.aurelia = this;
      this.hostSlot = new _aureliaTemplating.ViewSlot(this.host, true);
      this.hostSlot.transformChildNodesIntoView();
      this.container.registerInstance(_aureliaPal.DOM.boundary, this.host);
    };

    Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
      var evt = _aureliaPal.DOM.createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
      setTimeout(function () {
        return _aureliaPal.DOM.dispatchEvent(evt);
      }, 1);
    };

    return Aurelia;
  }();

  var logger = TheLogManager.getLogger('aurelia');
  var extPattern = /\.[^/.]+$/;

  function runTasks(config, tasks) {
    var current = void 0;
    var next = function next() {
      if (current = tasks.shift()) {
        return Promise.resolve(current(config)).then(next);
      }

      return Promise.resolve();
    };

    return next();
  }

  function loadPlugin(config, loader, info) {
    logger.debug('Loading plugin ' + info.moduleId + '.');
    config.resourcesRelativeTo = info.resourcesRelativeTo;

    var id = info.moduleId;

    if (info.resourcesRelativeTo.length > 1) {
      return loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(function (normalizedId) {
        return _loadPlugin(normalizedId);
      });
    }

    return _loadPlugin(id);

    function _loadPlugin(moduleId) {
      return loader.loadModule(moduleId).then(function (m) {
        if ('configure' in m) {
          return Promise.resolve(m.configure(config, info.config || {})).then(function () {
            config.resourcesRelativeTo = null;
            logger.debug('Configured plugin ' + info.moduleId + '.');
          });
        }

        config.resourcesRelativeTo = null;
        logger.debug('Loaded plugin ' + info.moduleId + '.');
      });
    }
  }

  function loadResources(aurelia, resourcesToLoad, appResources) {
    var viewEngine = aurelia.container.get(_aureliaTemplating.ViewEngine);

    return Promise.all(Object.keys(resourcesToLoad).map(function (n) {
      return _normalize(resourcesToLoad[n]);
    })).then(function (loads) {
      var names = [];
      var importIds = [];

      loads.forEach(function (l) {
        names.push(undefined);
        importIds.push(l.importId);
      });

      return viewEngine.importViewResources(importIds, names, appResources);
    });

    function _normalize(load) {
      var moduleId = load.moduleId;
      var ext = getExt(moduleId);

      if (isOtherResource(moduleId)) {
        moduleId = removeExt(moduleId);
      }

      return aurelia.loader.normalize(moduleId, load.relativeTo).then(function (normalized) {
        return {
          name: load.moduleId,
          importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
        };
      });
    }

    function isOtherResource(name) {
      var ext = getExt(name);
      if (!ext) return false;
      if (ext === '') return false;
      if (ext === '.js' || ext === '.ts') return false;
      return true;
    }

    function removeExt(name) {
      return name.replace(extPattern, '');
    }

    function addOriginalExt(normalized, ext) {
      return removeExt(normalized) + '.' + ext;
    }
  }

  function getExt(name) {
    var match = name.match(extPattern);
    if (match && match.length > 0) {
      return match[0].split('.')[1];
    }
  }

  function assertProcessed(plugins) {
    if (plugins.processed) {
      throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
    }
  }

  var FrameworkConfiguration = function () {
    function FrameworkConfiguration(aurelia) {
      var _this4 = this;

      _classCallCheck(this, FrameworkConfiguration);

      this.aurelia = aurelia;
      this.container = aurelia.container;
      this.info = [];
      this.processed = false;
      this.preTasks = [];
      this.postTasks = [];
      this.resourcesToLoad = {};
      this.preTask(function () {
        return aurelia.loader.normalize('aurelia-bootstrapper').then(function (name) {
          return _this4.bootstrapperName = name;
        });
      });
      this.postTask(function () {
        return loadResources(aurelia, _this4.resourcesToLoad, aurelia.resources);
      });
    }

    FrameworkConfiguration.prototype.instance = function instance(type, _instance) {
      this.container.registerInstance(type, _instance);
      return this;
    };

    FrameworkConfiguration.prototype.singleton = function singleton(type, implementation) {
      this.container.registerSingleton(type, implementation);
      return this;
    };

    FrameworkConfiguration.prototype.transient = function transient(type, implementation) {
      this.container.registerTransient(type, implementation);
      return this;
    };

    FrameworkConfiguration.prototype.preTask = function preTask(task) {
      assertProcessed(this);
      this.preTasks.push(task);
      return this;
    };

    FrameworkConfiguration.prototype.postTask = function postTask(task) {
      assertProcessed(this);
      this.postTasks.push(task);
      return this;
    };

    FrameworkConfiguration.prototype.feature = function feature(plugin, config) {
      if (getExt(plugin)) {
        return this.plugin({ moduleId: plugin, resourcesRelativeTo: [plugin, ''], config: config || {} });
      }

      return this.plugin({ moduleId: plugin + '/index', resourcesRelativeTo: [plugin, ''], config: config || {} });
    };

    FrameworkConfiguration.prototype.globalResources = function globalResources(resources) {
      assertProcessed(this);

      var toAdd = Array.isArray(resources) ? resources : arguments;
      var resource = void 0;
      var path = void 0;
      var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];

      for (var i = 0, ii = toAdd.length; i < ii; ++i) {
        resource = toAdd[i];
        if (typeof resource !== 'string') {
          throw new Error('Invalid resource path [' + resource + ']. Resources must be specified as relative module IDs.');
        }

        var parent = resourcesRelativeTo[0];
        var grandParent = resourcesRelativeTo[1];
        var name = resource;

        if (resource.startsWith('./') && parent !== '') {
          name = parent + resource.substr(1);
        }

        this.resourcesToLoad[name] = { moduleId: name, relativeTo: grandParent };
      }

      return this;
    };

    FrameworkConfiguration.prototype.globalName = function globalName(resourcePath, newName) {
      assertProcessed(this);
      this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
      return this;
    };

    FrameworkConfiguration.prototype.plugin = function plugin(_plugin, config) {
      assertProcessed(this);

      if (typeof _plugin === 'string') {
        return this.plugin({ moduleId: _plugin, resourcesRelativeTo: [_plugin, ''], config: config || {} });
      }

      this.info.push(_plugin);
      return this;
    };

    FrameworkConfiguration.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
      var _this5 = this;

      var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
      this.plugin(plugin);

      this.preTask(function () {
        var relativeTo = [name, _this5.bootstrapperName];
        plugin.moduleId = name;
        plugin.resourcesRelativeTo = relativeTo;
        return Promise.resolve();
      });

      return this;
    };

    FrameworkConfiguration.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
      return this._addNormalizedPlugin('aurelia-templating-binding');
    };

    FrameworkConfiguration.prototype.router = function router() {
      return this._addNormalizedPlugin('aurelia-templating-router');
    };

    FrameworkConfiguration.prototype.history = function history() {
      return this._addNormalizedPlugin('aurelia-history-browser');
    };

    FrameworkConfiguration.prototype.defaultResources = function defaultResources() {
      return this._addNormalizedPlugin('aurelia-templating-resources');
    };

    FrameworkConfiguration.prototype.eventAggregator = function eventAggregator() {
      return this._addNormalizedPlugin('aurelia-event-aggregator');
    };

    FrameworkConfiguration.prototype.standardConfiguration = function standardConfiguration() {
      return this.defaultBindingLanguage().defaultResources().history().router().eventAggregator();
    };

    FrameworkConfiguration.prototype.developmentLogging = function developmentLogging() {
      var _this6 = this;

      this.preTask(function () {
        return _this6.aurelia.loader.normalize('aurelia-logging-console', _this6.bootstrapperName).then(function (name) {
          return _this6.aurelia.loader.loadModule(name).then(function (m) {
            TheLogManager.addAppender(new m.ConsoleAppender());
            TheLogManager.setLevel(TheLogManager.logLevel.debug);
          });
        });
      });

      return this;
    };

    FrameworkConfiguration.prototype.apply = function apply() {
      var _this7 = this;

      if (this.processed) {
        return Promise.resolve();
      }

      return runTasks(this, this.preTasks).then(function () {
        var loader = _this7.aurelia.loader;
        var info = _this7.info;
        var current = void 0;

        var next = function next() {
          if (current = info.shift()) {
            return loadPlugin(_this7, loader, current).then(next);
          }

          _this7.processed = true;
          return Promise.resolve();
        };

        return next().then(function () {
          return runTasks(_this7, _this7.postTasks);
        });
      });
    };

    return FrameworkConfiguration;
  }();

  exports.FrameworkConfiguration = FrameworkConfiguration;
  var LogManager = exports.LogManager = TheLogManager;
});

define('github/access-token',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var storageKey = 'github-oauth-token';

  var AccessToken = (function () {
    function AccessToken() {
      _classCallCheck(this, AccessToken);

      this._token = null;

      var json = localStorage.getItem(storageKey);
      if (json) {
        this._token = JSON.parse(json);
      }
    }

    _createClass(AccessToken, [{
      key: 'setToken',
      value: function setToken(token) {
        this._token = token;
        if (token) {
          localStorage.setItem(storageKey, JSON.stringify(token));
        } else {
          localStorage.removeItem(storageKey);
        }
      }
    }, {
      key: 'value',
      get: function get() {
        return this._token ? this._token.access_token : null;
      }
    }, {
      key: 'scope',
      get: function get() {
        return this._token ? this._token.scope : null;
      }
    }]);

    return AccessToken;
  })();

  exports.AccessToken = AccessToken;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9hY2Nlc3MtdG9rZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQzs7TUFFM0IsV0FBVztBQUdYLGFBSEEsV0FBVyxHQUdSOzRCQUhILFdBQVc7O1dBQ3RCLE1BQU0sR0FBRyxJQUFJOztBQUdYLFVBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUMsVUFBSSxJQUFJLEVBQUU7QUFDUixZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDaEM7S0FDRjs7aUJBUlUsV0FBVzs7YUFrQmQsa0JBQUMsS0FBSyxFQUFFO0FBQ2QsWUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDcEIsWUFBSSxLQUFLLEVBQUU7QUFDVCxzQkFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pELE1BQU07QUFDTCxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUNwQztPQUNGOzs7V0FmUSxlQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztPQUN0RDs7O1dBRVEsZUFBRztBQUNWLGVBQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7T0FDL0M7OztXQWhCVSxXQUFXIiwiZmlsZSI6ImdpdGh1Yi9hY2Nlc3MtdG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdG9yYWdlS2V5ID0gJ2dpdGh1Yi1vYXV0aC10b2tlbic7XHJcblxyXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW4ge1xyXG4gIF90b2tlbiA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KTtcclxuICAgIGlmIChqc29uKSB7XHJcbiAgICAgIHRoaXMuX3Rva2VuID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90b2tlbiA/IHRoaXMuX3Rva2VuLmFjY2Vzc190b2tlbiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgc2NvcGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9rZW4gPyB0aGlzLl90b2tlbi5zY29wZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy5fdG9rZW4gPSB0b2tlbjtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh0b2tlbikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUtleSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('github/rate-limit',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var RateLimit = (function () {
    function RateLimit() {
      _classCallCheck(this, RateLimit);

      this.limit = 99999;
      this.remaining = 99999;
      this.reset = null;
    }

    _createClass(RateLimit, [{
      key: 'readHeaders',
      value: function readHeaders(response) {
        this.limit = parseInt(response.headers.get('X-RateLimit-Limit'), 10), this.remaining = parseInt(response.headers.get('X-RateLimit-Remaining'), 10), this.reset = new Date(parseInt(response.headers.get('X-RateLimit-Reset'), 10) * 1000);
      }
    }]);

    return RateLimit;
  })();

  exports.RateLimit = RateLimit;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9yYXRlLWxpbWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BQWEsU0FBUzthQUFULFNBQVM7NEJBQVQsU0FBUzs7V0FDcEIsS0FBSyxHQUFHLEtBQUs7V0FDYixTQUFTLEdBQUcsS0FBSztXQUNqQixLQUFLLEdBQUcsSUFBSTs7O2lCQUhELFNBQVM7O2FBS1QscUJBQUMsUUFBUSxFQUFFO0FBQ3BCLFlBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQzVFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7T0FDdEY7OztXQVRVLFNBQVMiLCJmaWxlIjoiZ2l0aHViL3JhdGUtbGltaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmF0ZUxpbWl0IHtcclxuICBsaW1pdCA9IDk5OTk5O1xyXG4gIHJlbWFpbmluZyA9IDk5OTk5O1xyXG4gIHJlc2V0ID0gbnVsbDtcclxuXHJcbiAgcmVhZEhlYWRlcnMocmVzcG9uc2UpIHtcclxuICAgIHRoaXMubGltaXQgPSBwYXJzZUludChyZXNwb25zZS5oZWFkZXJzLmdldCgnWC1SYXRlTGltaXQtTGltaXQnKSwgMTApLFxyXG4gICAgdGhpcy5yZW1haW5pbmcgPSBwYXJzZUludChyZXNwb25zZS5oZWFkZXJzLmdldCgnWC1SYXRlTGltaXQtUmVtYWluaW5nJyksIDEwKSxcclxuICAgIHRoaXMucmVzZXQgPSBuZXcgRGF0ZShwYXJzZUludChyZXNwb25zZS5oZWFkZXJzLmdldCgnWC1SYXRlTGltaXQtUmVzZXQnKSwgMTApICogMTAwMClcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('github/api-client',['exports', 'aurelia-framework', './access-token', './rate-limit'], function (exports, _aureliaFramework, _accessToken, _rateLimit) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var base = 'https://api.github.com';

  var ApiClient = (function () {
    function ApiClient(accessToken, rateLimit) {
      _classCallCheck(this, _ApiClient);

      this.accessToken = accessToken;
      this.rateLimit = rateLimit;
    }

    _createClass(ApiClient, [{
      key: 'fetch',
      value: (function (_fetch) {
        function fetch(_x, _x2) {
          return _fetch.apply(this, arguments);
        }

        fetch.toString = function () {
          return _fetch.toString();
        };

        return fetch;
      })(function (path, init) {
        var _this = this;

        var url = base + '/' + path;
        init = init || {};
        init.headers = init.headers || {};
        if (this.accessToken.value) {
          init.headers.Authorization = 'token ' + this.accessToken.value;
        }
        return fetch(url, init).then(function (response) {
          _this.rateLimit.readHeaders(response);
          return response;
        });
      })
    }]);

    var _ApiClient = ApiClient;
    ApiClient = (0, _aureliaFramework.inject)(_accessToken.AccessToken, _rateLimit.RateLimit)(ApiClient) || ApiClient;
    return ApiClient;
  })();

  exports.ApiClient = ApiClient;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9hcGktY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsTUFBTSxJQUFJLEdBQUcsd0JBQXdCLENBQUM7O01BR3pCLFNBQVM7QUFDVCxhQURBLFNBQVMsQ0FDUixXQUFXLEVBQUUsU0FBUyxFQUFFOzs7QUFDbEMsVUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsVUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDNUI7O2lCQUpVLFNBQVM7Ozs7Ozs7Ozs7OztTQU1mLFVBQUMsSUFBSSxFQUFFLElBQUksRUFBRTs7O0FBQ2hCLFlBQUksR0FBRyxHQUFNLElBQUksU0FBSSxJQUFJLEFBQUUsQ0FBQztBQUM1QixZQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNsQixZQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xDLFlBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7QUFDMUIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLGNBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEFBQUUsQ0FBQztTQUNoRTtBQUNELGVBQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FDcEIsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLGdCQUFLLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsaUJBQU8sUUFBUSxDQUFDO1NBQ2pCLENBQUMsQ0FBQztPQUNOOzs7cUJBbEJVLFNBQVM7QUFBVCxhQUFTLEdBRHJCLHNCQU5PLE1BQU0sZUFDTixXQUFXLGFBQ1gsU0FBUyxDQUljLENBQ2xCLFNBQVMsS0FBVCxTQUFTO1dBQVQsU0FBUyIsImZpbGUiOiJnaXRodWIvYXBpLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7QWNjZXNzVG9rZW59IGZyb20gJy4vYWNjZXNzLXRva2VuJztcclxuaW1wb3J0IHtSYXRlTGltaXR9IGZyb20gJy4vcmF0ZS1saW1pdCc7XHJcblxyXG5jb25zdCBiYXNlID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20nO1xyXG5cclxuQGluamVjdChBY2Nlc3NUb2tlbiwgUmF0ZUxpbWl0KVxyXG5leHBvcnQgY2xhc3MgQXBpQ2xpZW50IHtcclxuICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbiwgcmF0ZUxpbWl0KSB7XHJcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgICB0aGlzLnJhdGVMaW1pdCA9IHJhdGVMaW1pdDtcclxuICB9XHJcblxyXG4gIGZldGNoKHBhdGgsIGluaXQpIHtcclxuICAgIGxldCB1cmwgPSBgJHtiYXNlfS8ke3BhdGh9YDtcclxuICAgIGluaXQgPSBpbml0IHx8IHt9O1xyXG4gICAgaW5pdC5oZWFkZXJzID0gaW5pdC5oZWFkZXJzIHx8IHt9O1xyXG4gICAgaWYgKHRoaXMuYWNjZXNzVG9rZW4udmFsdWUpIHtcclxuICAgICAgaW5pdC5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgdG9rZW4gJHt0aGlzLmFjY2Vzc1Rva2VuLnZhbHVlfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCBpbml0KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5yYXRlTGltaXQucmVhZEhlYWRlcnMocmVzcG9uc2UpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define('util',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.deparam = deparam;
  exports.param = param;
  exports.stringComparisonOrdinalIgnoreCase = stringComparisonOrdinalIgnoreCase;
  exports.getExtension = getExtension;
  exports.getContentType = getContentType;
  exports.copyTextToClipboard = copyTextToClipboard;

  function deparam(query) {
    var match = undefined,
        plus = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function decode(s) {
      return decodeURIComponent(s.replace(plus, ' '));
    },
        params = {};
    while (match = search.exec(query)) {
      params[decode(match[1])] = decode(match[2]);
    }
    return params;
  }

  function param(obj) {
    var parts = [];
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        parts.push(encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]));
      }
    }
    return parts.join('&');
  }

  function stringComparisonOrdinalIgnoreCase(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }

  var contentTypeMap = {
    css: 'text/css',
    js: 'application/javascript',
    json: 'application/json',
    html: 'text/html'
  };

  function getExtension(name) {
    var parts = name.split('.');
    var extension = undefined;
    if (parts.length === 1) {
      return '';
    }
    return parts[parts.length - 1];
  }

  function getContentType(name) {
    var extension = getExtension(name);
    if (extension === '') {
      return 'text/plain';
    }
    return contentTypeMap[extension] || 'text/plain';
  }

  function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    textArea.style.width = '2em';
    textArea.style.height = '2em';

    textArea.style.padding = 0;

    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    textArea.style.background = 'transparent';

    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLFdBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUM3QixRQUFJLEtBQUssWUFBQTtRQUNMLElBQUksR0FBRyxLQUFLO1FBQ1osTUFBTSxHQUFHLG9CQUFvQjtRQUM3QixNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUcsQ0FBQzthQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQUE7UUFDdEQsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixXQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2pDLFlBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0M7QUFDRCxXQUFPLE1BQU0sQ0FBQztHQUNmOztBQUVNLFdBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRTtBQUN6QixRQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixTQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUNwQixVQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDNUIsYUFBSyxDQUFDLElBQUksQ0FBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRyxDQUFDO09BQzVFO0tBQ0Y7QUFDRCxXQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDeEI7O0FBRU0sV0FBUyxpQ0FBaUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RELEtBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDcEIsS0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNwQixRQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDVCxhQUFPLENBQUMsQ0FBQztLQUNWO0FBQ0QsUUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ1QsYUFBTyxDQUFDLENBQUMsQ0FBQztLQUNYO0FBQ0QsV0FBTyxDQUFDLENBQUM7R0FDVjs7QUFFRCxNQUFNLGNBQWMsR0FBRztBQUNyQixPQUFHLEVBQUUsVUFBVTtBQUNmLE1BQUUsRUFBRSx3QkFBd0I7QUFDNUIsUUFBSSxFQUFFLGtCQUFrQjtBQUN4QixRQUFJLEVBQUUsV0FBVztHQUNsQixDQUFDOztBQUVLLFdBQVMsWUFBWSxDQUFDLElBQUksRUFBRTtBQUNqQyxRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLFFBQUksU0FBUyxZQUFBLENBQUM7QUFDZCxRQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3RCLGFBQU8sRUFBRSxDQUFDO0tBQ1g7QUFDRCxXQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQ2hDOztBQUVNLFdBQVMsY0FBYyxDQUFDLElBQUksRUFBRTtBQUNuQyxRQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsUUFBSSxTQUFTLEtBQUssRUFBRSxFQUFFO0FBQ3BCLGFBQU8sWUFBWSxDQUFDO0tBQ3JCO0FBQ0QsV0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksWUFBWSxDQUFDO0dBQ2xEOztBQUdNLFdBQVMsbUJBQW1CLENBQUMsSUFBSSxFQUFFO0FBQ3hDLFFBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBa0JsRCxZQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDbEMsWUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLFlBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzs7QUFJeEIsWUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzdCLFlBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7QUFHOUIsWUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztBQUczQixZQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDL0IsWUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLFlBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQzs7QUFHbEMsWUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDOztBQUcxQyxZQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFdEIsWUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRXBDLFlBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7QUFFbEIsUUFBSTtBQUNGLFVBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUMsVUFBSSxHQUFHLEdBQUcsVUFBVSxHQUFHLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDckQsYUFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUNoRCxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ1osYUFBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3JDOztBQUVELFlBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQ3JDIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVwYXJhbShxdWVyeSkge1xyXG4gIGxldCBtYXRjaCxcclxuICAgICAgcGx1cyA9IC9cXCsvZyxcclxuICAgICAgc2VhcmNoID0gLyhbXiY9XSspPT8oW14mXSopL2csXHJcbiAgICAgIGRlY29kZSA9IHMgPT4gZGVjb2RlVVJJQ29tcG9uZW50KHMucmVwbGFjZShwbHVzLCAnICcpKSxcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgd2hpbGUgKG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpKSB7XHJcbiAgICBwYXJhbXNbZGVjb2RlKG1hdGNoWzFdKV0gPSBkZWNvZGUobWF0Y2hbMl0pO1xyXG4gIH1cclxuICByZXR1cm4gcGFyYW1zO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyYW0ob2JqKSB7XHJcbiAgbGV0IHBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgcGFydHMucHVzaChgJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9ialtuYW1lXSl9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYXJ0cy5qb2luKCcmJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdDb21wYXJpc29uT3JkaW5hbElnbm9yZUNhc2UoYSwgYikge1xyXG4gIGEgPSBhLnRvTG93ZXJDYXNlKCk7XHJcbiAgYiA9IGIudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoYSA+IGIpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuICBpZiAoYSA8IGIpIHtcclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcbiAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRlbnRUeXBlTWFwID0ge1xyXG4gIGNzczogJ3RleHQvY3NzJyxcclxuICBqczogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxyXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICBodG1sOiAndGV4dC9odG1sJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVuc2lvbihuYW1lKSB7XHJcbiAgbGV0IHBhcnRzID0gbmFtZS5zcGxpdCgnLicpO1xyXG4gIGxldCBleHRlbnNpb247XHJcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuICByZXR1cm4gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50VHlwZShuYW1lKSB7XHJcbiAgbGV0IGV4dGVuc2lvbiA9IGdldEV4dGVuc2lvbihuYW1lKTtcclxuICBpZiAoZXh0ZW5zaW9uID09PSAnJykge1xyXG4gICAgcmV0dXJuICd0ZXh0L3BsYWluJztcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRlbnRUeXBlTWFwW2V4dGVuc2lvbl0gfHwgJ3RleHQvcGxhaW4nO1xyXG59XHJcblxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMDgxMDMyMi83MjU4NjZcclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUZXh0VG9DbGlwYm9hcmQodGV4dCkge1xyXG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuXHJcbiAgLy9cclxuICAvLyAqKiogVGhpcyBzdHlsaW5nIGlzIGFuIGV4dHJhIHN0ZXAgd2hpY2ggaXMgbGlrZWx5IG5vdCByZXF1aXJlZC4gKioqXHJcbiAgLy9cclxuICAvLyBXaHkgaXMgaXQgaGVyZT8gVG8gZW5zdXJlOlxyXG4gIC8vIDEuIHRoZSBlbGVtZW50IGlzIGFibGUgdG8gaGF2ZSBmb2N1cyBhbmQgc2VsZWN0aW9uLlxyXG4gIC8vIDIuIGlmIGVsZW1lbnQgd2FzIHRvIGZsYXNoIHJlbmRlciBpdCBoYXMgbWluaW1hbCB2aXN1YWwgaW1wYWN0LlxyXG4gIC8vIDMuIGxlc3MgZmxha3luZXNzIHdpdGggc2VsZWN0aW9uIGFuZCBjb3B5aW5nIHdoaWNoICoqbWlnaHQqKiBvY2N1ciBpZlxyXG4gIC8vICAgIHRoZSB0ZXh0YXJlYSBlbGVtZW50IGlzIG5vdCB2aXNpYmxlLlxyXG4gIC8vXHJcbiAgLy8gVGhlIGxpa2VsaWhvb2QgaXMgdGhlIGVsZW1lbnQgd29uJ3QgZXZlbiByZW5kZXIsIG5vdCBldmVuIGEgZmxhc2gsXHJcbiAgLy8gc28gc29tZSBvZiB0aGVzZSBhcmUganVzdCBwcmVjYXV0aW9ucy4gSG93ZXZlciBpbiBJRSB0aGUgZWxlbWVudFxyXG4gIC8vIGlzIHZpc2libGUgd2hpbHN0IHRoZSBwb3B1cCBib3ggYXNraW5nIHRoZSB1c2VyIGZvciBwZXJtaXNzaW9uIGZvclxyXG4gIC8vIHRoZSB3ZWIgcGFnZSB0byBjb3B5IHRvIHRoZSBjbGlwYm9hcmQuXHJcbiAgLy9cclxuXHJcbiAgLy8gUGxhY2UgaW4gdG9wLWxlZnQgY29ybmVyIG9mIHNjcmVlbiByZWdhcmRsZXNzIG9mIHNjcm9sbCBwb3NpdGlvbi5cclxuICB0ZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgdGV4dEFyZWEuc3R5bGUudG9wID0gMDtcclxuICB0ZXh0QXJlYS5zdHlsZS5sZWZ0ID0gMDtcclxuXHJcbiAgLy8gRW5zdXJlIGl0IGhhcyBhIHNtYWxsIHdpZHRoIGFuZCBoZWlnaHQuIFNldHRpbmcgdG8gMXB4IC8gMWVtXHJcbiAgLy8gZG9lc24ndCB3b3JrIGFzIHRoaXMgZ2l2ZXMgYSBuZWdhdGl2ZSB3L2ggb24gc29tZSBicm93c2Vycy5cclxuICB0ZXh0QXJlYS5zdHlsZS53aWR0aCA9ICcyZW0nO1xyXG4gIHRleHRBcmVhLnN0eWxlLmhlaWdodCA9ICcyZW0nO1xyXG5cclxuICAvLyBXZSBkb24ndCBuZWVkIHBhZGRpbmcsIHJlZHVjaW5nIHRoZSBzaXplIGlmIGl0IGRvZXMgZmxhc2ggcmVuZGVyLlxyXG4gIHRleHRBcmVhLnN0eWxlLnBhZGRpbmcgPSAwO1xyXG5cclxuICAvLyBDbGVhbiB1cCBhbnkgYm9yZGVycy5cclxuICB0ZXh0QXJlYS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgdGV4dEFyZWEuc3R5bGUub3V0bGluZSA9ICdub25lJztcclxuICB0ZXh0QXJlYS5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XHJcblxyXG4gIC8vIEF2b2lkIGZsYXNoIG9mIHdoaXRlIGJveCBpZiByZW5kZXJlZCBmb3IgYW55IHJlYXNvbi5cclxuICB0ZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcclxuXHJcblxyXG4gIHRleHRBcmVhLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XHJcblxyXG4gIHRleHRBcmVhLnNlbGVjdCgpO1xyXG5cclxuICB0cnkge1xyXG4gICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgdmFyIG1zZyA9IHN1Y2Nlc3NmdWwgPyAnc3VjY2Vzc2Z1bCcgOiAndW5zdWNjZXNzZnVsJztcclxuICAgIGNvbnNvbGUubG9nKCdDb3B5aW5nIHRleHQgY29tbWFuZCB3YXMgJyArIG1zZyk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnT29wcywgdW5hYmxlIHRvIGNvcHknKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define('github/gists',['exports', 'aurelia-framework', './api-client', '../util'], function (exports, _aureliaFramework, _apiClient, _util) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Gists = (function () {
    function Gists(api) {
      _classCallCheck(this, _Gists);

      this.api = api;
    }

    _createClass(Gists, [{
      key: 'load',
      value: function load(id, sha) {
        var url = undefined;
        if (sha) {
          url = 'gists/' + id + '/' + sha;
        } else {
          url = 'gists/' + id;
        }
        return this.api.fetch(url).then(function (response) {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 404) {
            return Promise.reject('Gist not found.');
          }
          return Promise.reject('Error loading Gist.');
        });
      }
    }, {
      key: 'update',
      value: function update(id, gist) {
        var init = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(gist)
        };
        return this.api.fetch('gists/' + id, init).then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw new Error('unable to patch gist');
        });
      }
    }, {
      key: 'create',
      value: function create(gist) {
        var init = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(gist)
        };
        return this.api.fetch('gists', init).then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw new Error('unable to create gist');
        });
      }
    }, {
      key: 'fork',
      value: function fork(id) {
        var _this = this;

        return this.api.fetch('gists/' + id + '/forks', { method: 'POST' }).then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw new Error('unable to fork gist');
        }).then(function (fork) {
          return _this.load(fork.id);
        });
      }
    }]);

    var _Gists = Gists;
    Gists = (0, _aureliaFramework.inject)(_apiClient.ApiClient)(Gists) || Gists;
    return Gists;
  })();

  exports.Gists = Gists;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9naXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQUthLEtBQUs7QUFDTCxhQURBLEtBQUssQ0FDSixHQUFHLEVBQUU7OztBQUNmLFVBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2hCOztpQkFIVSxLQUFLOzthQUtaLGNBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRTtBQUNaLFlBQUksR0FBRyxZQUFBLENBQUM7QUFDUixZQUFJLEdBQUcsRUFBRTtBQUNQLGFBQUcsY0FBWSxFQUFFLFNBQUksR0FBRyxBQUFFLENBQUM7U0FDNUIsTUFBTTtBQUNMLGFBQUcsY0FBWSxFQUFFLEFBQUUsQ0FBQztTQUNyQjtBQUNELGVBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ3ZCLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoQixjQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7QUFFZixtQkFBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7V0FDeEI7QUFDRCxjQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO0FBQzNCLG1CQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztXQUMxQztBQUNELGlCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUM5QyxDQUFDLENBQUM7T0FDTjs7O2FBRUssZ0JBQUMsRUFBRSxFQUFFLElBQUksRUFBRTtBQUNmLFlBQUksSUFBSSxHQUFHO0FBQ1QsZ0JBQU0sRUFBRSxPQUFPO0FBQ2YsaUJBQU8sRUFBRTtBQUNQLDBCQUFjLEVBQUUsa0JBQWtCO1dBQ25DO0FBQ0QsY0FBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzNCLENBQUM7QUFDRixlQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxZQUFVLEVBQUUsRUFBSSxJQUFJLENBQUMsQ0FDdkMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLGNBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtBQUNmLG1CQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztXQUN4Qjs7QUFFRCxnQkFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3pDLENBQUMsQ0FBQztPQUNOOzs7YUFFSyxnQkFBQyxJQUFJLEVBQUU7QUFDWCxZQUFJLElBQUksR0FBRztBQUNULGdCQUFNLEVBQUUsTUFBTTtBQUNkLGlCQUFPLEVBQUU7QUFDUCwwQkFBYyxFQUFFLGtCQUFrQjtXQUNuQztBQUNELGNBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUMzQixDQUFDO0FBQ0YsZUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FDakMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLGNBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtBQUNmLG1CQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztXQUN4Qjs7QUFFRCxnQkFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzFDLENBQUMsQ0FBQztPQUNOOzs7YUFFRyxjQUFDLEVBQUUsRUFBRTs7O0FBQ1AsZUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssWUFBVSxFQUFFLGFBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FDM0QsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLGNBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtBQUNmLG1CQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztXQUN4Qjs7QUFFRCxnQkFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3hDLENBQUMsQ0FDRCxJQUFJLENBQUMsVUFBQSxJQUFJO2lCQUFJLE1BQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FBQSxDQUFDLENBQUM7T0FDckM7OztpQkF2RVUsS0FBSztBQUFMLFNBQUssR0FEakIsc0JBSk8sTUFBTSxhQUNOLFNBQVMsQ0FHQyxDQUNMLEtBQUssS0FBTCxLQUFLO1dBQUwsS0FBSyIsImZpbGUiOiJnaXRodWIvZ2lzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0FwaUNsaWVudH0gZnJvbSAnLi9hcGktY2xpZW50JztcclxuaW1wb3J0IHtwYXJhbSwgZGVwYXJhbX0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5AaW5qZWN0KEFwaUNsaWVudClcclxuZXhwb3J0IGNsYXNzIEdpc3RzIHtcclxuICBjb25zdHJ1Y3RvcihhcGkpIHtcclxuICAgIHRoaXMuYXBpID0gYXBpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChpZCwgc2hhKSB7XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgaWYgKHNoYSkge1xyXG4gICAgICB1cmwgPSBgZ2lzdHMvJHtpZH0vJHtzaGF9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IGBnaXN0cy8ke2lkfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hcGkuZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAvLyB0b2RvOiBoYW5kbGUgdHJ1bmNhdGVkIGZpbGVzXHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnR2lzdCBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnRXJyb3IgbG9hZGluZyBHaXN0LicpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShpZCwgZ2lzdCkge1xyXG4gICAgbGV0IGluaXQgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ2lzdClcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5hcGkuZmV0Y2goYGdpc3RzLyR7aWR9YCwgaW5pdClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdG9kbzogaGFuZGxlIHJhdGUgbGltaXQsIGV0Y1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIHBhdGNoIGdpc3QnKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoZ2lzdCkge1xyXG4gICAgbGV0IGluaXQgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShnaXN0KVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmFwaS5mZXRjaChgZ2lzdHNgLCBpbml0KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0b2RvOiBoYW5kbGUgcmF0ZSBsaW1pdCwgZXRjXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gY3JlYXRlIGdpc3QnKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb3JrKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcGkuZmV0Y2goYGdpc3RzLyR7aWR9L2ZvcmtzYCwgeyBtZXRob2Q6ICdQT1NUJyB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0b2RvOiBoYW5kbGUgcmF0ZSBsaW1pdCwgZXRjXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gZm9yayBnaXN0Jyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZvcmsgPT4gdGhpcy5sb2FkKGZvcmsuaWQpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('github/oauth',['exports', 'aurelia-framework', '../util', './access-token', '../config'], function (exports, _aureliaFramework, _util, _accessToken, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function popup(url) {
    var resolve = null;
    window.resolveOpenWindow = function (query) {
      window.resolveOpenWindow = null;
      resolve((0, _util.deparam)(query));
    };
    var promise = new Promise(function (r) {
      return resolve = r;
    });
    window.open(url);
    return promise;
  }

  var OAuth = (function () {
    function OAuth(accessToken) {
      _classCallCheck(this, _OAuth);

      this.accessToken = accessToken;
    }

    _createClass(OAuth, [{
      key: 'requestAuthorizationCode',
      value: function requestAuthorizationCode() {
        var args = {
          client_id: _config.client_id,
          redirect_uri: _config.redirect_uri,
          scope: 'gist',
          state: Math.floor(Math.random() * 100000).toString()
        };
        var url = _config.authorizationCodeUri + '?' + (0, _util.param)(args);
        return popup(url).then(function (result) {
          if (!(result.code && result.state)) {
            throw new Error('Redirect did not include code and state parameters.');
          }
          if (result.state !== args.state) {
            throw new Error('State mismatch.');
          }
          return result;
        });
      }
    }, {
      key: 'requestAccessToken',
      value: function requestAccessToken(_ref) {
        var code = _ref.code;
        var state = _ref.state;

        var args = { code: code, state: state };
        var url = _config.accessTokenUri + '?' + (0, _util.param)(args);
        return fetch(url).then(function (response) {
          return response.text();
        }).then(function (body) {
          return (0, _util.deparam)(body);
        });
      }
    }, {
      key: 'login',
      value: function login() {
        var _this = this;

        return this.requestAuthorizationCode().then(this.requestAccessToken.bind(this)).then(function (token) {
          return _this.accessToken.setToken(token);
        })['catch'](function (reason) {
          _this.accessToken.setToken(null);
          throw reason;
        });
      }
    }]);

    var _OAuth = OAuth;
    OAuth = (0, _aureliaFramework.inject)(_accessToken.AccessToken)(OAuth) || OAuth;
    return OAuth;
  })();

  exports.OAuth = OAuth;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9vYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLFdBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRTtBQUNsQixRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsVUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQUEsS0FBSyxFQUFJO0FBQ2xDLFlBQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7QUFDaEMsYUFBTyxDQUFDLFVBYkcsT0FBTyxFQWFGLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDekIsQ0FBQztBQUNGLFFBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUEsQ0FBQzthQUFJLE9BQU8sR0FBRyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBQzVDLFVBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsV0FBTyxPQUFPLENBQUM7R0FDaEI7O01BR1ksS0FBSztBQUNMLGFBREEsS0FBSyxDQUNKLFdBQVcsRUFBRTs7O0FBQ3ZCLFVBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ2hDOztpQkFIVSxLQUFLOzthQUtRLG9DQUFHO0FBQ3pCLFlBQUksSUFBSSxHQUFHO0FBQ1QsbUJBQVMsVUF0QmIsU0FBUyxBQXNCSTtBQUNULHNCQUFZLFVBeEJoQixZQUFZLEFBd0JJO0FBQ1osZUFBSyxFQUFFLE1BQU07QUFDYixlQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFO1NBQ3JELENBQUM7QUFDRixZQUFJLEdBQUcsV0E5QlQsb0JBQW9CLFNBOEJtQixVQWpDakMsS0FBSyxFQWlDa0MsSUFBSSxDQUFDLEFBQUUsQ0FBQztBQUNuRCxlQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDZCxJQUFJLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDZCxjQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFBLEFBQUMsRUFBRTtBQUNsQyxrQkFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1dBQ3hFO0FBQ0QsY0FBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDL0Isa0JBQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztXQUNwQztBQUNELGlCQUFPLE1BQU0sQ0FBQztTQUNmLENBQUMsQ0FBQztPQUNOOzs7YUFFaUIsNEJBQUMsSUFBZSxFQUFFO1lBQWYsSUFBSSxHQUFOLElBQWUsQ0FBYixJQUFJO1lBQUUsS0FBSyxHQUFiLElBQWUsQ0FBUCxLQUFLOztBQUM5QixZQUFJLElBQUksR0FBRyxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxDQUFDO0FBQzNCLFlBQUksR0FBRyxXQTVDVCxjQUFjLFNBNENtQixVQWhEM0IsS0FBSyxFQWdENEIsSUFBSSxDQUFDLEFBQUUsQ0FBQztBQUM3QyxlQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDZCxJQUFJLENBQUMsVUFBQSxRQUFRO2lCQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLElBQUk7aUJBQUksVUFuREwsT0FBTyxFQW1ETSxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7T0FDaEM7OzthQUVJLGlCQUFHOzs7QUFDTixlQUFPLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUNuQyxJQUFJLENBQUcsSUFBSSxDQUFDLGtCQUFrQixNQUF2QixJQUFJLEVBQW9CLENBQy9CLElBQUksQ0FBQyxVQUFBLEtBQUs7aUJBQUksTUFBSyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUFBLENBQUMsU0FDMUMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUNmLGdCQUFLLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsZ0JBQU0sTUFBTSxDQUFDO1NBQ2QsQ0FBQyxDQUFDO09BQ047OztpQkF6Q1UsS0FBSztBQUFMLFNBQUssR0FEakIsc0JBckJPLE1BQU0sZUFFTixXQUFXLENBbUJDLENBQ1AsS0FBSyxLQUFMLEtBQUs7V0FBTCxLQUFLIiwiZmlsZSI6ImdpdGh1Yi9vYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7cGFyYW0sIGRlcGFyYW19IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQge0FjY2Vzc1Rva2VufSBmcm9tICcuL2FjY2Vzcy10b2tlbic7XHJcbmltcG9ydCB7XHJcbiAgYXV0aG9yaXphdGlvbkNvZGVVcmksXHJcbiAgYWNjZXNzVG9rZW5VcmksXHJcbiAgcmVkaXJlY3RfdXJpLFxyXG4gIGNsaWVudF9pZFxyXG59IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBwb3B1cCh1cmwpIHtcclxuICBsZXQgcmVzb2x2ZSA9IG51bGw7XHJcbiAgd2luZG93LnJlc29sdmVPcGVuV2luZG93ID0gcXVlcnkgPT4ge1xyXG4gICAgd2luZG93LnJlc29sdmVPcGVuV2luZG93ID0gbnVsbDtcclxuICAgIHJlc29sdmUoZGVwYXJhbShxdWVyeSkpO1xyXG4gIH07XHJcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyID0+IHJlc29sdmUgPSByKTtcclxuICB3aW5kb3cub3Blbih1cmwpO1xyXG4gIHJldHVybiBwcm9taXNlO1xyXG59XHJcblxyXG5AaW5qZWN0KEFjY2Vzc1Rva2VuKVxyXG5leHBvcnQgY2xhc3MgT0F1dGgge1xyXG4gIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QXV0aG9yaXphdGlvbkNvZGUoKSB7XHJcbiAgICBsZXQgYXJncyA9IHtcclxuICAgICAgY2xpZW50X2lkLFxyXG4gICAgICByZWRpcmVjdF91cmksXHJcbiAgICAgIHNjb3BlOiAnZ2lzdCcsXHJcbiAgICAgIHN0YXRlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApLnRvU3RyaW5nKClcclxuICAgIH07XHJcbiAgICBsZXQgdXJsID0gYCR7YXV0aG9yaXphdGlvbkNvZGVVcml9PyR7cGFyYW0oYXJncyl9YDtcclxuICAgIHJldHVybiBwb3B1cCh1cmwpXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgaWYgKCEocmVzdWx0LmNvZGUgJiYgcmVzdWx0LnN0YXRlKSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWRpcmVjdCBkaWQgbm90IGluY2x1ZGUgY29kZSBhbmQgc3RhdGUgcGFyYW1ldGVycy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0ZSAhPT0gYXJncy5zdGF0ZSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdGF0ZSBtaXNtYXRjaC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QWNjZXNzVG9rZW4oeyBjb2RlLCBzdGF0ZSB9KSB7XHJcbiAgICBsZXQgYXJncyA9IHsgY29kZSwgc3RhdGUgfTtcclxuICAgIGxldCB1cmwgPSBgJHthY2Nlc3NUb2tlblVyaX0/JHtwYXJhbShhcmdzKX1gO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAudGhlbihib2R5ID0+IGRlcGFyYW0oYm9keSkpO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXV0aG9yaXphdGlvbkNvZGUoKVxyXG4gICAgICAudGhlbig6OnRoaXMucmVxdWVzdEFjY2Vzc1Rva2VuKVxyXG4gICAgICAudGhlbih0b2tlbiA9PiB0aGlzLmFjY2Vzc1Rva2VuLnNldFRva2VuKHRva2VuKSlcclxuICAgICAgLmNhdGNoKHJlYXNvbiA9PiB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbi5zZXRUb2tlbihudWxsKTtcclxuICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
define('github/user',['exports', 'aurelia-framework', './access-token', './api-client', '../github/oauth'], function (exports, _aureliaFramework, _accessToken, _apiClient, _githubOauth) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var User = (function () {
    function User(accessToken, api, oauth) {
      _classCallCheck(this, _User);

      this.loading = false;

      this.accessToken = accessToken;
      this.api = api;
      this.oauth = oauth;
      this.load();
    }

    _createClass(User, [{
      key: 'setAnonymous',
      value: function setAnonymous() {
        this.authenticated = false;
        this.login = null;
        this.gists_url = null;
        this.avatar_url = null;
      }
    }, {
      key: 'load',
      value: function load() {
        var _this = this;

        if (this.accessToken.value) {
          this.loading = true;
          return this.api.fetch('user').then(function (response) {
            if (response.ok) {
              return response.json();
            }
            return null;
          }).then(function (user) {
            if (user) {
              _this.authenticated = true;
              _this.login = user.login;
              _this.gists_url = user.gists_url;
              _this.avatar_url = user.avatar_url;
            } else {
              _this.setAnonymous();
            }
          })['catch']().then(function () {
            return _this.loading = false;
          });
        }
        this.setAnonymous();
        return Promise.resolve(null);
      }
    }, {
      key: 'signIn',
      value: function signIn() {
        var _this2 = this;

        this.loading = true;
        this.oauth.login().then(function () {
          return _this2.load();
        })['catch']().then(function () {
          return _this2.loading = false;
        });
      }
    }]);

    var _User = User;
    User = (0, _aureliaFramework.inject)(_accessToken.AccessToken, _apiClient.ApiClient, _githubOauth.OAuth)(User) || User;
    return User;
  })();

  exports.User = User;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BTWEsSUFBSTtBQUdKLGFBSEEsSUFBSSxDQUdILFdBQVcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFOzs7V0FGckMsT0FBTyxHQUFHLEtBQUs7O0FBR2IsVUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsVUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDYjs7aUJBUlUsSUFBSTs7YUFVSCx3QkFBRztBQUNiLFlBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO09BQ3hCOzs7YUFFRyxnQkFBRzs7O0FBQ0wsWUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUMxQixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNwQixpQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDMUIsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLGdCQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7QUFDZixxQkFBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEI7QUFDRCxtQkFBTyxJQUFJLENBQUM7V0FDYixDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ1osZ0JBQUksSUFBSSxFQUFFO0FBQ1Isb0JBQUssYUFBYSxHQUFHLElBQUksQ0FBQztBQUMxQixvQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN4QixvQkFBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNoQyxvQkFBSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNuQyxNQUFNO0FBQ0wsb0JBQUssWUFBWSxFQUFFLENBQUM7YUFDckI7V0FDRixDQUFDLFNBQ0ksRUFBRSxDQUNQLElBQUksQ0FBQzttQkFBTSxNQUFLLE9BQU8sR0FBRyxLQUFLO1dBQUEsQ0FBQyxDQUFDO1NBQ3JDO0FBQ0QsWUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3BCLGVBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUM5Qjs7O2FBRUssa0JBQUc7OztBQUNQLFlBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQ2YsSUFBSSxDQUFDO2lCQUFNLE9BQUssSUFBSSxFQUFFO1NBQUEsQ0FBQyxTQUNsQixFQUFFLENBQ1AsSUFBSSxDQUFDO2lCQUFNLE9BQUssT0FBTyxHQUFHLEtBQUs7U0FBQSxDQUFDLENBQUM7T0FDckM7OztnQkFsRFUsSUFBSTtBQUFKLFFBQUksR0FEaEIsc0JBTE8sTUFBTSxlQUNOLFdBQVcsYUFDWCxTQUFTLGVBQ1QsS0FBSyxDQUV5QixDQUN6QixJQUFJLEtBQUosSUFBSTtXQUFKLElBQUkiLCJmaWxlIjoiZ2l0aHViL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0FjY2Vzc1Rva2VufSBmcm9tICcuL2FjY2Vzcy10b2tlbic7XHJcbmltcG9ydCB7QXBpQ2xpZW50fSBmcm9tICcuL2FwaS1jbGllbnQnXHJcbmltcG9ydCB7T0F1dGh9IGZyb20gJy4uL2dpdGh1Yi9vYXV0aCc7XHJcblxyXG5AaW5qZWN0KEFjY2Vzc1Rva2VuLCBBcGlDbGllbnQsIE9BdXRoKVxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbiwgYXBpLCBvYXV0aCkge1xyXG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xyXG4gICAgdGhpcy5hcGkgPSBhcGk7XHJcbiAgICB0aGlzLm9hdXRoID0gb2F1dGg7XHJcbiAgICB0aGlzLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHNldEFub255bW91cygpIHtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2dpbiA9IG51bGw7XHJcbiAgICB0aGlzLmdpc3RzX3VybCA9IG51bGw7XHJcbiAgICB0aGlzLmF2YXRhcl91cmwgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIGlmICh0aGlzLmFjY2Vzc1Rva2VuLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLmFwaS5mZXRjaCgndXNlcicpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbiA9IHVzZXIubG9naW47XHJcbiAgICAgICAgICAgIHRoaXMuZ2lzdHNfdXJsID0gdXNlci5naXN0c191cmw7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyX3VybCA9IHVzZXIuYXZhdGFyX3VybDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5vbnltb3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0QW5vbnltb3VzKCk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgc2lnbkluKCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMub2F1dGgubG9naW4oKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxvYWQoKSlcclxuICAgICAgLmNhdGNoKClcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
define('github/default-gist',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var defaultGist = {
    description: '',
    files: {
      'index.html': {
        type: 'text/html',
        content: '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>GistRun</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <h1>Hello world!</h1>\n  <script src="script.js"></script>\n</body>\n</html>'
      },
      'script.js': {
        type: 'application/javascript',
        content: 'console.log(\'Hello World!\');'
      },
      'styles.css': {
        contentType: 'text/css',
        content: '/* todo: add styles */'
      }
    }
  };

  exports.defaultGist = defaultGist;
  var defaultIndexHtml = '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>GistRun</title>\n  <!--<link rel="stylesheet" href="styles.css">-->\n</head>\n<body>\n  <h1>Hello world!</h1>\n  <!--<script src="script.js"></script>-->\n</body>\n</html>';
  exports.defaultIndexHtml = defaultIndexHtml;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9kZWZhdWx0LWdpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTSxXQUFXLEdBQUc7QUFDekIsZUFBVyxFQUFFLEVBQUU7QUFDZixTQUFLLEVBQUU7QUFDTCxrQkFBWSxFQUFFO0FBQ1osWUFBSSxFQUFFLFdBQVc7QUFDakIsZUFBTyxFQUFFLDZPQUE2TztPQUN2UDtBQUNELGlCQUFXLEVBQUU7QUFDWCxZQUFJLEVBQUUsd0JBQXdCO0FBQzlCLGVBQU8sRUFBRSxnQ0FBZ0M7T0FDMUM7QUFDRCxrQkFBWSxFQUFFO0FBQ1osbUJBQVcsRUFBRSxVQUFVO0FBQ3ZCLGVBQU8sRUFBRSx3QkFBd0I7T0FDbEM7S0FDRjtHQUNGLENBQUE7OztBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsMlBBQTJQLENBQUMiLCJmaWxlIjoiZ2l0aHViL2RlZmF1bHQtZ2lzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkZWZhdWx0R2lzdCA9IHtcclxuICBkZXNjcmlwdGlvbjogJycsXHJcbiAgZmlsZXM6IHtcclxuICAgICdpbmRleC5odG1sJzoge1xyXG4gICAgICB0eXBlOiAndGV4dC9odG1sJyxcclxuICAgICAgY29udGVudDogJzwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XCJlblwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XFxuICA8dGl0bGU+R2lzdFJ1bjwvdGl0bGU+XFxuICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInN0eWxlcy5jc3NcIj5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8aDE+SGVsbG8gd29ybGQhPC9oMT5cXG4gIDxzY3JpcHQgc3JjPVwic2NyaXB0LmpzXCI+PC9zY3JpcHQ+XFxuPC9ib2R5PlxcbjwvaHRtbD4nXHJcbiAgICB9LFxyXG4gICAgJ3NjcmlwdC5qcyc6IHtcclxuICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxyXG4gICAgICBjb250ZW50OiAnY29uc29sZS5sb2coXFwnSGVsbG8gV29ybGQhXFwnKTsnXHJcbiAgICB9LFxyXG4gICAgJ3N0eWxlcy5jc3MnOiB7XHJcbiAgICAgIGNvbnRlbnRUeXBlOiAndGV4dC9jc3MnLFxyXG4gICAgICBjb250ZW50OiAnLyogdG9kbzogYWRkIHN0eWxlcyAqLydcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SW5kZXhIdG1sID0gJzwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XCJlblwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XFxuICA8dGl0bGU+R2lzdFJ1bjwvdGl0bGU+XFxuICA8IS0tPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJzdHlsZXMuY3NzXCI+LS0+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGgxPkhlbGxvIHdvcmxkITwvaDE+XFxuICA8IS0tPHNjcmlwdCBzcmM9XCJzY3JpcHQuanNcIj48L3NjcmlwdD4tLT5cXG48L2JvZHk+XFxuPC9odG1sPic7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define("ace/ext/modelist",["require","exports","module"],function(e,t,n){"use strict";function i(e){var t=a.text,n=e.split(/[\/\\]/).pop();for(var i=0;i<r.length;i++)if(r[i].supportsFile(n)){t=r[i];break}return t}var r=[],s=function(e,t,n){this.name=e,this.caption=t,this.mode="ace/mode/"+e,this.extensions=n;var r;/\^/.test(n)?r=n.replace(/\|(\^)?/g,function(e,t){return"$|"+(t?"^":"^.*\\.")})+"$":r="^.*\\.("+n+")$",this.extRe=new RegExp(r,"gi")};s.prototype.supportsFile=function(e){return e.match(this.extRe)};var o={ABAP:["abap"],ABC:["abc"],ActionScript:["as"],ADA:["ada|adb"],Apache_Conf:["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],AsciiDoc:["asciidoc|adoc"],Assembly_x86:["asm|a"],AutoHotKey:["ahk"],BatchFile:["bat|cmd"],C_Cpp:["cpp|c|cc|cxx|h|hh|hpp|ino"],C9Search:["c9search_results"],Cirru:["cirru|cr"],Clojure:["clj|cljs"],Cobol:["CBL|COB"],coffee:["coffee|cf|cson|^Cakefile"],ColdFusion:["cfm"],CSharp:["cs"],CSS:["css"],Curly:["curly"],D:["d|di"],Dart:["dart"],Diff:["diff|patch"],Dockerfile:["^Dockerfile"],Dot:["dot"],Dummy:["dummy"],DummySyntax:["dummy"],Eiffel:["e|ge"],EJS:["ejs"],Elixir:["ex|exs"],Elm:["elm"],Erlang:["erl|hrl"],Forth:["frt|fs|ldr"],Fortran:["f|f90"],FTL:["ftl"],Gcode:["gcode"],Gherkin:["feature"],Gitignore:["^.gitignore"],Glsl:["glsl|frag|vert"],Gobstones:["gbs"],golang:["go"],Groovy:["groovy"],HAML:["haml"],Handlebars:["hbs|handlebars|tpl|mustache"],Haskell:["hs"],haXe:["hx"],HTML:["html|htm|xhtml"],HTML_Elixir:["eex|html.eex"],HTML_Ruby:["erb|rhtml|html.erb"],INI:["ini|conf|cfg|prefs"],Io:["io"],Jack:["jack"],Jade:["jade"],Java:["java"],JavaScript:["js|jsm|jsx"],JSON:["json"],JSONiq:["jq"],JSP:["jsp"],JSX:["jsx"],Julia:["jl"],LaTeX:["tex|latex|ltx|bib"],Lean:["lean|hlean"],LESS:["less"],Liquid:["liquid"],Lisp:["lisp"],LiveScript:["ls"],LogiQL:["logic|lql"],LSL:["lsl"],Lua:["lua"],LuaPage:["lp"],Lucene:["lucene"],Makefile:["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],Markdown:["md|markdown"],Mask:["mask"],MATLAB:["matlab"],Maze:["mz"],MEL:["mel"],MUSHCode:["mc|mush"],MySQL:["mysql"],Nix:["nix"],NSIS:["nsi|nsh"],ObjectiveC:["m|mm"],OCaml:["ml|mli"],Pascal:["pas|p"],Perl:["pl|pm"],pgSQL:["pgsql"],PHP:["php|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module"],Powershell:["ps1"],Praat:["praat|praatscript|psc|proc"],Prolog:["plg|prolog"],Properties:["properties"],Protobuf:["proto"],Python:["py"],R:["r"],Razor:["cshtml"],RDoc:["Rd"],RHTML:["Rhtml"],RST:["rst"],Ruby:["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],Rust:["rs"],SASS:["sass"],SCAD:["scad"],Scala:["scala"],Scheme:["scm|sm|rkt|oak|scheme"],SCSS:["scss"],SH:["sh|bash|^.bashrc"],SJS:["sjs"],Smarty:["smarty|tpl"],snippets:["snippets"],Soy_Template:["soy"],Space:["space"],SQL:["sql"],SQLServer:["sqlserver"],Stylus:["styl|stylus"],SVG:["svg"],Swift:["swift"],Tcl:["tcl"],Tex:["tex"],Text:["txt"],Textile:["textile"],Toml:["toml"],Twig:["twig|swig"],Typescript:["ts|typescript|str"],Vala:["vala"],VBScript:["vbs|vb"],Velocity:["vm"],Verilog:["v|vh|sv|svh"],VHDL:["vhd|vhdl"],Wollok:["wlk|wpgm|wtest"],XML:["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],XQuery:["xq"],YAML:["yaml|yml"],Django:["html"]},u={ObjectiveC:"Objective-C",CSharp:"C#",golang:"Go",C_Cpp:"C and C++",coffee:"CoffeeScript",HTML_Ruby:"HTML (Ruby)",HTML_Elixir:"HTML (Elixir)",FTL:"FreeMarker"},a={};for(var f in o){var l=o[f],c=(u[f]||f).replace(/_/g," "),h=f.toLowerCase(),p=new s(h,c,l[0]);a[h]=p,r.push(p)}n.exports={getModeForPath:i,modes:r,modesByName:a}});
                (function() {
                    window.require(["ace/ext/modelist"], function() {});
                })();
            
define("ace/ext-modelist", function(){});

define('editing/editor-mode',['exports', 'ace', 'ace/ext-modelist'], function (exports, _ace, _aceExtModelist) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.getEditorMode = getEditorMode;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _ace2 = _interopRequireDefault(_ace);

  var modelist = _ace2['default'].require('ace/ext/modelist');

  function getEditorMode(name) {
    return modelist.getModeForPath(name).name;
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbmcvZWRpdG9yLW1vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxRQUFRLEdBQUcsaUJBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7O0FBRTFDLFdBQVMsYUFBYSxDQUFDLElBQUksRUFBRTtBQUNsQyxXQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO0dBQzNDIiwiZmlsZSI6ImVkaXRpbmcvZWRpdG9yLW1vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWNlIGZyb20gJ2FjZSc7XHJcbmltcG9ydCAnYWNlL2V4dC1tb2RlbGlzdCc7XHJcblxyXG5jb25zdCBtb2RlbGlzdCA9IGFjZS5yZXF1aXJlKCdhY2UvZXh0L21vZGVsaXN0Jyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWRpdG9yTW9kZShuYW1lKSB7XHJcbiAgcmV0dXJuIG1vZGVsaXN0LmdldE1vZGVGb3JQYXRoKG5hbWUpLm5hbWU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('editing/file',['exports', '../util', './editor-mode'], function (exports, _util, _editorMode) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var File = (function () {
    function File(name) {
      var type = arguments.length <= 1 || arguments[1] === undefined ? (0, _util.getContentType)(name) : arguments[1];
      var content = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
      return (function () {
        _classCallCheck(this, File);

        this.name = name;
        this.originalName = name;
        this.type = type;
        this.content = content;
        this.editorMode = (0, _editorMode.getEditorMode)(name);
      }).apply(this, arguments);
    }

    _createClass(File, [{
      key: 'rename',
      value: function rename(name) {
        this.name = name;
        this.type = (0, _util.getContentType)(name);
        this.editorMode = (0, _editorMode.getEditorMode)(name);
      }
    }, {
      key: 'clone',
      value: function clone() {
        return {
          name: this.name,
          type: this.type,
          content: this.content
        };
      }
    }]);

    return File;
  })();

  exports.File = File;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbmcvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQUdhLElBQUk7QUFDSixhQURBLElBQUksQ0FDSCxJQUFJO1VBQUUsSUFBSSx5REFBRyxVQUpuQixjQUFjLEVBSW9CLElBQUksQ0FBQztVQUFFLE9BQU8seURBQUcsRUFBRTswQkFBRTs4QkFEbEQsSUFBSTs7QUFFYixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsVUFBVSxHQUFHLGdCQVJkLGFBQWEsRUFRZSxJQUFJLENBQUMsQ0FBQztPQUN2QztLQUFBOztpQkFQVSxJQUFJOzthQVNULGdCQUFDLElBQUksRUFBRTtBQUNYLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsVUFkUixjQUFjLEVBY1MsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFkZCxhQUFhLEVBY2UsSUFBSSxDQUFDLENBQUM7T0FDdkM7OzthQUVJLGlCQUFHO0FBQ04sZUFBTztBQUNMLGNBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtBQUNmLGNBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtBQUNmLGlCQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQztPQUNIOzs7V0FyQlUsSUFBSSIsImZpbGUiOiJlZGl0aW5nL2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldENvbnRlbnRUeXBlfSBmcm9tICcuLi91dGlsJztcclxuaW1wb3J0IHtnZXRFZGl0b3JNb2RlfSBmcm9tICcuL2VkaXRvci1tb2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlID0gZ2V0Q29udGVudFR5cGUobmFtZSksIGNvbnRlbnQgPSAnJykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMub3JpZ2luYWxOYW1lID0gbmFtZTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgdGhpcy5lZGl0b3JNb2RlID0gZ2V0RWRpdG9yTW9kZShuYW1lKTtcclxuICB9XHJcblxyXG4gIHJlbmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50eXBlID0gZ2V0Q29udGVudFR5cGUobmFtZSk7XHJcbiAgICB0aGlzLmVkaXRvck1vZGUgPSBnZXRFZGl0b3JNb2RlKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY29udGVudDogdGhpcy5jb250ZW50XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
define('editing/gist-adapter',['exports', 'aurelia-framework', '../github/gists', '../github/user', '../github/default-gist', './file'], function (exports, _aureliaFramework, _githubGists, _githubUser, _githubDefaultGist, _file) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function toFilename(name) {
    return name.replace(/\//g, '\\');
  }

  function toUrl(name) {
    return name.replace(/\\/g, '/');
  }

  var saveAction = {
    fork: 'Fork',
    create: 'Create',
    update: 'Update'
  };

  exports.saveAction = saveAction;

  var GistAdapter = (function () {
    function GistAdapter(gists, user) {
      _classCallCheck(this, _GistAdapter);

      this.gists = gists;
      this.user = user;
    }

    _createClass(GistAdapter, [{
      key: 'filesMapToArray',
      value: function filesMapToArray(filesMap) {
        var files = [];
        for (var _name in filesMap) {
          var gistFile = filesMap[_name];
          var file = new _file.File(toUrl(_name), gistFile.type, gistFile.content);
          files.push(file);
        }
        if (!files.find(function (f) {
          return f.name === 'index.html';
        })) {
          files.push(new _file.File('index.html', 'text/html', _githubDefaultGist.defaultIndexHtml));
        }
        return files;
      }
    }, {
      key: 'getCreateFiles',
      value: function getCreateFiles(filesArray) {
        var files = filesArray.filter(function (f) {
          return f.content !== '';
        });
        var map = {};
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var filename = toFilename(file.name);
          map[filename] = { content: file.content };
        }
        return map;
      }
    }, {
      key: 'getUpdateFiles',
      value: function getUpdateFiles(filesMap, filesArray) {
        var files = filesArray.filter(function (f) {
          return f.content !== '';
        });
        var map = {};

        var _loop = function (_name2) {
          var index = files.findIndex(function (f) {
            return f.originalName === _name2;
          });
          var filename = toFilename(_name2);
          if (index === -1) {
            map[filename] = null;
          } else {
            var file = files.splice(index, 1)[0];
            map[filename] = { content: file.content };

            if (file.name !== file.originalName) {
              map[filename].filename = toFilename(file.name);
            }
          }
        };

        for (var _name2 in filesMap) {
          _loop(_name2);
        }
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var filename = toFilename(file.name);
          if (map[filename]) {
            map[map[filename].filename] = { content: map[filename].content };
          }
          map[filename] = { content: file.content };
        }
        return map;
      }
    }, {
      key: 'getSaveAction',
      value: function getSaveAction(gist, forceFork) {
        var existingGist = !!gist.id;

        if (this.user.authenticated && existingGist && gist.owner) {
          if (gist.owner.login === this.user.login) {
            if (forceFork) {
              return saveAction.create;
            }
            return saveAction.update;
          } else {
            return saveAction.fork;
          }
        } else {
          return saveAction.create;
        }
      }
    }, {
      key: 'save',
      value: function save(gist, filesArray, forceFork, secret) {
        var _this = this;

        var files = undefined;
        var description = gist.description;
        switch (this.getSaveAction(gist, forceFork)) {
          case saveAction.update:
            files = this.getUpdateFiles(gist.files, filesArray);
            return this.gists.update(gist.id, { description: description, files: files });
          case saveAction.fork:
            return this.gists.fork(gist.id).then(function (gist) {
              files = _this.getUpdateFiles(gist.files, filesArray);
              return _this.gists.update(gist.id, { 'public': !secret, description: description, files: files });
            });
          case saveAction.create:
            files = this.getCreateFiles(filesArray);
            return this.gists.create({ 'public': !secret, description: description, files: files });
          default:
            return Promise.reject('Unexpected save action.');
        }
      }
    }]);

    var _GistAdapter = GistAdapter;
    GistAdapter = (0, _aureliaFramework.inject)(_githubGists.Gists, _githubUser.User)(GistAdapter) || GistAdapter;
    return GistAdapter;
  })();

  exports.GistAdapter = GistAdapter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbmcvZ2lzdC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBTUEsV0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ3hCLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDbEM7O0FBRUQsV0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ25CLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDakM7O0FBRU0sTUFBTSxVQUFVLEdBQUc7QUFDeEIsUUFBSSxFQUFFLE1BQU07QUFDWixVQUFNLEVBQUUsUUFBUTtBQUNoQixVQUFNLEVBQUUsUUFBUTtHQUNqQixDQUFDOzs7O01BR1csV0FBVztBQUNYLGFBREEsV0FBVyxDQUNWLEtBQUssRUFBRSxJQUFJLEVBQUU7OztBQUN2QixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7aUJBSlUsV0FBVzs7YUFNUCx5QkFBQyxRQUFRLEVBQUU7QUFDeEIsWUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsYUFBSyxJQUFJLEtBQUksSUFBSSxRQUFRLEVBQUU7QUFDekIsY0FBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDO0FBQzlCLGNBQUksSUFBSSxHQUFHLFVBM0JULElBQUksQ0EyQmMsS0FBSyxDQUFDLEtBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xFLGVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7QUFDRCxZQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7aUJBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxZQUFZO1NBQUEsQ0FBQyxFQUFFO0FBQzdDLGVBQUssQ0FBQyxJQUFJLENBQUMsVUEvQlQsSUFBSSxDQStCYyxZQUFZLEVBQUUsV0FBVyxxQkFoQzNDLGdCQUFnQixDQWdDOEMsQ0FBQyxDQUFDO1NBQ25FO0FBQ0QsZUFBTyxLQUFLLENBQUM7T0FDZDs7O2FBRWEsd0JBQUMsVUFBVSxFQUFFO0FBQ3pCLFlBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2lCQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRTtTQUFBLENBQUMsQ0FBQztBQUNyRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQyxjQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsY0FBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxhQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzNDO0FBQ0QsZUFBTyxHQUFHLENBQUM7T0FDWjs7O2FBRWEsd0JBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUNuQyxZQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztpQkFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUU7U0FBQSxDQUFDLENBQUM7QUFDckQsWUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDOzs4QkFDSixNQUFJO0FBQ1gsY0FBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7bUJBQUksQ0FBQyxDQUFDLFlBQVksS0FBSyxNQUFJO1dBQUEsQ0FBQyxDQUFDO0FBQzFELGNBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFJLENBQUMsQ0FBQztBQUNoQyxjQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtBQUVoQixlQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1dBQ3RCLE1BQU07QUFFTCxnQkFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsZUFBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFFMUMsZ0JBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ25DLGlCQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEQ7V0FDRjs7O0FBZEgsYUFBSyxJQUFJLE1BQUksSUFBSSxRQUFRLEVBQUU7Z0JBQWxCLE1BQUk7U0FlWjtBQUNELGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3JDLGNBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixjQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLGNBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBR2pCLGVBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1dBQ2xFO0FBQ0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQztBQUNELGVBQU8sR0FBRyxDQUFDO09BQ1o7OzthQUVZLHVCQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDN0IsWUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7O0FBRS9CLFlBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFFekQsY0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUN4QyxnQkFBSSxTQUFTLEVBQUU7QUFDYixxQkFBTyxVQUFVLENBQUMsTUFBTSxDQUFDO2FBQzFCO0FBQ0QsbUJBQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQztXQUMxQixNQUFNO0FBQ0wsbUJBQU8sVUFBVSxDQUFDLElBQUksQ0FBQztXQUN4QjtTQUNGLE1BQU07QUFDTCxpQkFBTyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzFCO09BQ0Y7OzthQUVHLGNBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFOzs7QUFDeEMsWUFBSSxLQUFLLFlBQUEsQ0FBQztBQUNWLFlBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDbkMsZ0JBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0FBQ3pDLGVBQUssVUFBVSxDQUFDLE1BQU07QUFDcEIsaUJBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDcEQsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBWCxXQUFXLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBQSxBQUM1RCxlQUFLLFVBQVUsQ0FBQyxJQUFJO0FBQ2xCLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDNUIsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ1osbUJBQUssR0FBRyxNQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELHFCQUFPLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQVgsV0FBVyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQzVFLENBQUMsQ0FBQztBQUFBLEFBQ1AsZUFBSyxVQUFVLENBQUMsTUFBTTtBQUNwQixpQkFBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFRLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBWCxXQUFXLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBQSxBQUNwRTtBQUNFLG1CQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUFBLFNBQ3BEO09BQ0Y7Ozt1QkFuR1UsV0FBVztBQUFYLGVBQVcsR0FEdkIsc0JBcEJPLE1BQU0sZUFDTixLQUFLLGNBQ0wsSUFBSSxDQWtCUSxDQUNQLFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVyIsImZpbGUiOiJlZGl0aW5nL2dpc3QtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7R2lzdHN9IGZyb20gJy4uL2dpdGh1Yi9naXN0cyc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vZ2l0aHViL3VzZXInO1xyXG5pbXBvcnQge2RlZmF1bHRJbmRleEh0bWx9IGZyb20gJy4uL2dpdGh1Yi9kZWZhdWx0LWdpc3QnO1xyXG5pbXBvcnQge0ZpbGV9IGZyb20gJy4vZmlsZSc7XHJcblxyXG5mdW5jdGlvbiB0b0ZpbGVuYW1lKG5hbWUpIHtcclxuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9VcmwobmFtZSkge1xyXG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVBY3Rpb24gPSB7XHJcbiAgZm9yazogJ0ZvcmsnLFxyXG4gIGNyZWF0ZTogJ0NyZWF0ZScsXHJcbiAgdXBkYXRlOiAnVXBkYXRlJ1xyXG59O1xyXG5cclxuQGluamVjdChHaXN0cywgVXNlcilcclxuZXhwb3J0IGNsYXNzIEdpc3RBZGFwdGVyIHtcclxuICBjb25zdHJ1Y3RvcihnaXN0cywgdXNlcikge1xyXG4gICAgdGhpcy5naXN0cyA9IGdpc3RzO1xyXG4gICAgdGhpcy51c2VyID0gdXNlcjtcclxuICB9XHJcblxyXG4gIGZpbGVzTWFwVG9BcnJheShmaWxlc01hcCkge1xyXG4gICAgbGV0IGZpbGVzID0gW107XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGZpbGVzTWFwKSB7XHJcbiAgICAgIGxldCBnaXN0RmlsZSA9IGZpbGVzTWFwW25hbWVdO1xyXG4gICAgICBsZXQgZmlsZSA9IG5ldyBGaWxlKHRvVXJsKG5hbWUpLCBnaXN0RmlsZS50eXBlLCBnaXN0RmlsZS5jb250ZW50KTtcclxuICAgICAgZmlsZXMucHVzaChmaWxlKTtcclxuICAgIH1cclxuICAgIGlmICghZmlsZXMuZmluZChmID0+IGYubmFtZSA9PT0gJ2luZGV4Lmh0bWwnKSkge1xyXG4gICAgICBmaWxlcy5wdXNoKG5ldyBGaWxlKCdpbmRleC5odG1sJywgJ3RleHQvaHRtbCcsIGRlZmF1bHRJbmRleEh0bWwpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaWxlcztcclxuICB9XHJcblxyXG4gIGdldENyZWF0ZUZpbGVzKGZpbGVzQXJyYXkpIHtcclxuICAgIGxldCBmaWxlcyA9IGZpbGVzQXJyYXkuZmlsdGVyKGYgPT4gZi5jb250ZW50ICE9PSAnJyk7XHJcbiAgICBsZXQgbWFwID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBmaWxlID0gZmlsZXNbaV07XHJcbiAgICAgIGxldCBmaWxlbmFtZSA9IHRvRmlsZW5hbWUoZmlsZS5uYW1lKTtcclxuICAgICAgbWFwW2ZpbGVuYW1lXSA9IHsgY29udGVudDogZmlsZS5jb250ZW50IH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFwO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXBkYXRlRmlsZXMoZmlsZXNNYXAsIGZpbGVzQXJyYXkpIHtcclxuICAgIGxldCBmaWxlcyA9IGZpbGVzQXJyYXkuZmlsdGVyKGYgPT4gZi5jb250ZW50ICE9PSAnJyk7XHJcbiAgICBsZXQgbWFwID0ge307XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGZpbGVzTWFwKSB7XHJcbiAgICAgIGxldCBpbmRleCA9IGZpbGVzLmZpbmRJbmRleChmID0+IGYub3JpZ2luYWxOYW1lID09PSBuYW1lKTtcclxuICAgICAgbGV0IGZpbGVuYW1lID0gdG9GaWxlbmFtZShuYW1lKTtcclxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIC8vIGRlbGV0ZVxyXG4gICAgICAgIG1hcFtmaWxlbmFtZV0gPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHVwZGF0ZVxyXG4gICAgICAgIGxldCBmaWxlID0gZmlsZXMuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgICAgICBtYXBbZmlsZW5hbWVdID0geyBjb250ZW50OiBmaWxlLmNvbnRlbnQgfTtcclxuICAgICAgICAvLyByZW5hbWU/XHJcbiAgICAgICAgaWYgKGZpbGUubmFtZSAhPT0gZmlsZS5vcmlnaW5hbE5hbWUpIHtcclxuICAgICAgICAgIG1hcFtmaWxlbmFtZV0uZmlsZW5hbWUgPSB0b0ZpbGVuYW1lKGZpbGUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBmaWxlID0gZmlsZXNbaV07XHJcbiAgICAgIGxldCBmaWxlbmFtZSA9IHRvRmlsZW5hbWUoZmlsZS5uYW1lKTtcclxuICAgICAgaWYgKG1hcFtmaWxlbmFtZV0pIHtcclxuICAgICAgICAvLyBhIGZpbGUgd2FzIHJlbmFtZWQsIHRoZW4gYSBmaWxlIHdhcyBhZGRlZCB3aXRoIHRoZSByZW5hbWVkIGZpbGUncyBvcmlnaW5hbCBuYW1lLlxyXG4gICAgICAgIC8vIGhhbmRsZSB0aGUgY29sbGlzaW9uLCBsb3NpbmcgdGhlIHJlbmFtZSBvcGVyYXRpb24uXHJcbiAgICAgICAgbWFwW21hcFtmaWxlbmFtZV0uZmlsZW5hbWVdID0geyBjb250ZW50OiBtYXBbZmlsZW5hbWVdLmNvbnRlbnQgfTtcclxuICAgICAgfVxyXG4gICAgICBtYXBbZmlsZW5hbWVdID0geyBjb250ZW50OiBmaWxlLmNvbnRlbnQgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXA7XHJcbiAgfVxyXG5cclxuICBnZXRTYXZlQWN0aW9uKGdpc3QsIGZvcmNlRm9yaykge1xyXG4gICAgY29uc3QgZXhpc3RpbmdHaXN0ID0gISFnaXN0LmlkO1xyXG4gICAgLy8gZXhpc3RpbmcgZ2lzdCB0aGF0IGlzbid0IGFub255bW91cz8gKGFub255bW91cyBnaXN0cyBjYW4ndCBiZSBmb3JrZWQpXHJcbiAgICBpZiAodGhpcy51c2VyLmF1dGhlbnRpY2F0ZWQgJiYgZXhpc3RpbmdHaXN0ICYmIGdpc3Qub3duZXIpIHtcclxuICAgICAgLy8gdXNlciBpcyBvd25lcj9cclxuICAgICAgaWYgKGdpc3Qub3duZXIubG9naW4gPT09IHRoaXMudXNlci5sb2dpbikge1xyXG4gICAgICAgIGlmIChmb3JjZUZvcmspIHtcclxuICAgICAgICAgIHJldHVybiBzYXZlQWN0aW9uLmNyZWF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNhdmVBY3Rpb24udXBkYXRlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzYXZlQWN0aW9uLmZvcms7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzYXZlQWN0aW9uLmNyZWF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmUoZ2lzdCwgZmlsZXNBcnJheSwgZm9yY2VGb3JrLCBzZWNyZXQpIHtcclxuICAgIGxldCBmaWxlcztcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGdpc3QuZGVzY3JpcHRpb247XHJcbiAgICBzd2l0Y2ggKHRoaXMuZ2V0U2F2ZUFjdGlvbihnaXN0LCBmb3JjZUZvcmspKSB7XHJcbiAgICAgIGNhc2Ugc2F2ZUFjdGlvbi51cGRhdGU6XHJcbiAgICAgICAgZmlsZXMgPSB0aGlzLmdldFVwZGF0ZUZpbGVzKGdpc3QuZmlsZXMsIGZpbGVzQXJyYXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdpc3RzLnVwZGF0ZShnaXN0LmlkLCB7IGRlc2NyaXB0aW9uLCBmaWxlcyB9KTtcclxuICAgICAgY2FzZSBzYXZlQWN0aW9uLmZvcms6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2lzdHMuZm9yayhnaXN0LmlkKVxyXG4gICAgICAgICAgLnRoZW4oZ2lzdCA9PiB7XHJcbiAgICAgICAgICAgIGZpbGVzID0gdGhpcy5nZXRVcGRhdGVGaWxlcyhnaXN0LmZpbGVzLCBmaWxlc0FycmF5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2lzdHMudXBkYXRlKGdpc3QuaWQsIHsgcHVibGljOiAhc2VjcmV0LCBkZXNjcmlwdGlvbiwgZmlsZXMgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgY2FzZSBzYXZlQWN0aW9uLmNyZWF0ZTpcclxuICAgICAgICBmaWxlcyA9IHRoaXMuZ2V0Q3JlYXRlRmlsZXMoZmlsZXNBcnJheSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2lzdHMuY3JlYXRlKHsgcHVibGljOiAhc2VjcmV0LCBkZXNjcmlwdGlvbiwgZmlsZXMgfSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdVbmV4cGVjdGVkIHNhdmUgYWN0aW9uLicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
define('worker/worker-activator',['exports', '../config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.activate = activate;
  exports.postMessageToWorker = postMessageToWorker;

  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', _config.workerPage);
  iframe.setAttribute('style', 'display: none');

  function activate() {
    document.body.appendChild(iframe);
  }

  var resolveWorkerPage = null;
  var workerPageReady = new Promise(function (resolve) {
    return resolveWorkerPage = resolve;
  });

  function handleMessage(event) {
    if (event.origin !== _config.workerOrigin || event.data !== 'worker page ready') {
      return;
    }
    removeEventListener('message', handleMessage);
    resolveWorkerPage();
  }
  addEventListener('message', handleMessage);

  function postMessageToWorker(message, responsePort) {
    workerPageReady.then(function () {
      return iframe.contentWindow.postMessage(message, _config.workerOrigin, [responsePort]);
    });
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci93b3JrZXItYWN0aXZhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsUUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBSEgsVUFBVSxDQUdNLENBQUM7QUFDdkMsUUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7O0FBRXZDLFdBQVMsUUFBUSxHQUFHO0FBQ3pCLFlBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQ25DOztBQUVELE1BQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0FBQzdCLE1BQU0sZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztXQUFJLGlCQUFpQixHQUFHLE9BQU87R0FBQSxDQUFDLENBQUM7O0FBRTVFLFdBQVMsYUFBYSxDQUFDLEtBQUssRUFBRTtBQUM1QixRQUFJLEtBQUssQ0FBQyxNQUFNLGFBZFYsWUFBWSxBQWNlLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtBQUN2RSxhQUFPO0tBQ1I7QUFDRCx1QkFBbUIsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDOUMscUJBQWlCLEVBQUUsQ0FBQztHQUNyQjtBQUNELGtCQUFnQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQzs7QUFFcEMsV0FBUyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQ3pELG1CQUFlLENBQUMsSUFBSSxDQUFDO2FBQU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxVQXZCN0QsWUFBWSxFQXVCaUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUFBLENBQUMsQ0FBQztHQUNyRyIsImZpbGUiOiJ3b3JrZXIvd29ya2VyLWFjdGl2YXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7d29ya2VyT3JpZ2luLCB3b3JrZXJQYWdlfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbmlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHdvcmtlclBhZ2UpO1xyXG5pZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG59XHJcblxyXG5sZXQgcmVzb2x2ZVdvcmtlclBhZ2UgPSBudWxsO1xyXG5jb25zdCB3b3JrZXJQYWdlUmVhZHkgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHJlc29sdmVXb3JrZXJQYWdlID0gcmVzb2x2ZSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50Lm9yaWdpbiAhPT0gd29ya2VyT3JpZ2luIHx8IGV2ZW50LmRhdGEgIT09ICd3b3JrZXIgcGFnZSByZWFkeScpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xyXG4gIHJlc29sdmVXb3JrZXJQYWdlKCk7XHJcbn1cclxuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RNZXNzYWdlVG9Xb3JrZXIobWVzc2FnZSwgcmVzcG9uc2VQb3J0KSB7XHJcbiAgd29ya2VyUGFnZVJlYWR5LnRoZW4oKCkgPT4gaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgd29ya2VyT3JpZ2luLCBbcmVzcG9uc2VQb3J0XSkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define('worker/worker-client',['exports', './worker-activator', '../config'], function (exports, _workerActivator, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var clientID = +new Date();

  var runUrl = _config.workerPage + 'run/' + clientID + '/index.html';

  exports.runUrl = runUrl;

  var WorkerClient = (function () {
    function WorkerClient() {
      _classCallCheck(this, WorkerClient);
    }

    _createClass(WorkerClient, [{
      key: 'sendMessage',
      value: function sendMessage(message) {
        message.clientID = clientID;
        return new Promise(function (resolve, reject) {
          var channel = new MessageChannel();
          channel.port1.onmessage = function (event) {
            if (event.data.error) {
              reject(event.data.error);
              return;
            }
            resolve(event.data);
          };
          (0, _workerActivator.postMessageToWorker)(message, channel.port2);
        });
      }
    }, {
      key: 'updateFile',
      value: function updateFile(file) {
        return this.sendMessage({ action: 'updateFile', file: file });
      }
    }, {
      key: 'deleteFile',
      value: function deleteFile(file) {
        return this.sendMessage({ action: 'deleteFile', file: file });
      }
    }, {
      key: 'resetFiles',
      value: function resetFiles(files) {
        return this.sendMessage({ action: 'resetFiles', files: files });
      }
    }]);

    return WorkerClient;
  })();

  exports.WorkerClient = WorkerClient;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci93b3JrZXItY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUV0QixNQUFNLE1BQU0sV0FKWCxVQUFVLFlBSXdCLFFBQVEsZ0JBQWEsQ0FBQzs7OztNQUVuRCxZQUFZO2FBQVosWUFBWTs0QkFBWixZQUFZOzs7aUJBQVosWUFBWTs7YUFDWixxQkFBQyxPQUFPLEVBQUU7QUFDbkIsZUFBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDNUIsZUFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsY0FBSSxPQUFPLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUNuQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBQSxLQUFLLEVBQUk7QUFDakMsZ0JBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLHFCQUFPO2FBQ1I7QUFDRCxtQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUNyQixDQUFDO0FBQ0YsK0JBbkJFLG1CQUFtQixFQW1CRCxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FBQztPQUNKOzs7YUFFUyxvQkFBQyxJQUFJLEVBQUU7QUFDZixlQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsQ0FBQyxDQUFDO09BQ3pEOzs7YUFFUyxvQkFBQyxJQUFJLEVBQUU7QUFDZixlQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsQ0FBQyxDQUFDO09BQ3pEOzs7YUFFUyxvQkFBQyxLQUFLLEVBQUU7QUFDaEIsZUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFFLENBQUMsQ0FBQztPQUMxRDs7O1dBMUJVLFlBQVkiLCJmaWxlIjoid29ya2VyL3dvcmtlci1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Bvc3RNZXNzYWdlVG9Xb3JrZXJ9IGZyb20gJy4vd29ya2VyLWFjdGl2YXRvcic7XHJcbmltcG9ydCB7d29ya2VyUGFnZX0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IGNsaWVudElEID0gK25ldyBEYXRlKCk7XHJcblxyXG5leHBvcnQgY29uc3QgcnVuVXJsID0gYCR7d29ya2VyUGFnZX1ydW4vJHtjbGllbnRJRH0vaW5kZXguaHRtbGA7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ya2VyQ2xpZW50IHtcclxuICBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBtZXNzYWdlLmNsaWVudElEID0gY2xpZW50SUQ7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xyXG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgcmVqZWN0KGV2ZW50LmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKGV2ZW50LmRhdGEpO1xyXG4gICAgICB9O1xyXG4gICAgICBwb3N0TWVzc2FnZVRvV29ya2VyKG1lc3NhZ2UsIGNoYW5uZWwucG9ydDIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWxlKGZpbGUpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAndXBkYXRlRmlsZScsIGZpbGUgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVGaWxlKGZpbGUpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnZGVsZXRlRmlsZScsIGZpbGUgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldEZpbGVzKGZpbGVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3Jlc2V0RmlsZXMnLCBmaWxlcyB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('aurelia-event-aggregator',['exports', 'aurelia-logging'], function (exports, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EventAggregator = undefined;
  exports.includeEventsIn = includeEventsIn;
  exports.configure = configure;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var logger = LogManager.getLogger('event-aggregator');

  var Handler = function () {
    function Handler(messageType, callback) {
      _classCallCheck(this, Handler);

      this.messageType = messageType;
      this.callback = callback;
    }

    Handler.prototype.handle = function handle(message) {
      if (message instanceof this.messageType) {
        this.callback.call(null, message);
      }
    };

    return Handler;
  }();

  var EventAggregator = exports.EventAggregator = function () {
    function EventAggregator() {
      _classCallCheck(this, EventAggregator);

      this.eventLookup = {};
      this.messageHandlers = [];
    }

    EventAggregator.prototype.publish = function publish(event, data) {
      var subscribers = void 0;
      var i = void 0;

      if (!event) {
        throw new Error('Event was invalid.');
      }

      if (typeof event === 'string') {
        subscribers = this.eventLookup[event];
        if (subscribers) {
          subscribers = subscribers.slice();
          i = subscribers.length;

          try {
            while (i--) {
              subscribers[i](data, event);
            }
          } catch (e) {
            logger.error(e);
          }
        }
      } else {
        subscribers = this.messageHandlers.slice();
        i = subscribers.length;

        try {
          while (i--) {
            subscribers[i].handle(event);
          }
        } catch (e) {
          logger.error(e);
        }
      }
    };

    EventAggregator.prototype.subscribe = function subscribe(event, callback) {
      var handler = void 0;
      var subscribers = void 0;

      if (!event) {
        throw new Error('Event channel/type was invalid.');
      }

      if (typeof event === 'string') {
        handler = callback;
        subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
      } else {
        handler = new Handler(event, callback);
        subscribers = this.messageHandlers;
      }

      subscribers.push(handler);

      return {
        dispose: function dispose() {
          var idx = subscribers.indexOf(handler);
          if (idx !== -1) {
            subscribers.splice(idx, 1);
          }
        }
      };
    };

    EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
      var sub = this.subscribe(event, function (a, b) {
        sub.dispose();
        return callback(a, b);
      });

      return sub;
    };

    return EventAggregator;
  }();

  function includeEventsIn(obj) {
    var ea = new EventAggregator();

    obj.subscribeOnce = function (event, callback) {
      return ea.subscribeOnce(event, callback);
    };

    obj.subscribe = function (event, callback) {
      return ea.subscribe(event, callback);
    };

    obj.publish = function (event, data) {
      ea.publish(event, data);
    };

    return ea;
  }

  function configure(config) {
    config.instance(EventAggregator, includeEventsIn(config.aurelia));
  }
});
define('editing/run-event',['exports', 'aurelia-event-aggregator'], function (exports, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var bus = new _aureliaEventAggregator.EventAggregator();

  var RunEvent = {
    publish: function publish() {
      return bus.publish('run');
    },
    subscribe: function subscribe(callback) {
      return bus.subscribe('run', callback);
    }
  };
  exports.RunEvent = RunEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbmcvcnVuLWV2ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxNQUFNLEdBQUcsR0FBRyw0QkFGSixlQUFlLEVBRVUsQ0FBQzs7QUFFM0IsTUFBTSxRQUFRLEdBQUc7QUFDdEIsV0FBTyxFQUFFO2FBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FBQTtBQUNqQyxhQUFTLEVBQUUsbUJBQUEsUUFBUTthQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztLQUFBO0dBQ3RELENBQUMiLCJmaWxlIjoiZWRpdGluZy9ydW4tZXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuXHJcbmNvbnN0IGJ1cyA9IG5ldyBFdmVudEFnZ3JlZ2F0b3IoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSdW5FdmVudCA9IHtcclxuICBwdWJsaXNoOiAoKSA9PiBidXMucHVibGlzaCgncnVuJyksXHJcbiAgc3Vic2NyaWJlOiBjYWxsYmFjayA9PiBidXMuc3Vic2NyaWJlKCdydW4nLCBjYWxsYmFjaylcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('editing/edit-session',['exports', 'aurelia-framework', 'aurelia-event-aggregator', './run-event', './current-file-changed-event', './file', '../util'], function (exports, _aureliaFramework, _aureliaEventAggregator, _runEvent, _currentFileChangedEvent, _file, _util) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var EditSession = (function () {
    function EditSession(gist, worker, gistAdapter, queryString) {
      _classCallCheck(this, EditSession);

      this._currentFile = null;

      (0, _aureliaEventAggregator.includeEventsIn)(this);
      this.gist = gist;
      this.worker = worker;
      this.gistAdapter = gistAdapter;
      this.queryString = queryString;
      this.autoRun = true;
      this.files = gistAdapter.filesMapToArray(gist.files);
      this.sortFiles();
      this._currentFile = this.files[0];
      this.dirty = false;
    }

    _createDecoratedClass(EditSession, [{
      key: 'sortFiles',
      value: function sortFiles() {
        this.files.sort(function (a, b) {
          return (0, _util.stringComparisonOrdinalIgnoreCase)(a.name, b.name);
        });
      }
    }, {
      key: 'run',
      value: function run() {
        if (this.autoRun) {
          _runEvent.RunEvent.publish();
        }
      }
    }, {
      key: 'toggleAutoRun',
      value: function toggleAutoRun() {
        this.autoRun = !this.autoRun;
        if (this.autoRun) {
          this.run();
        }
      }
    }, {
      key: 'addFile',
      value: function addFile(name) {
        var file = new _file.File(name);
        this.files.push(file);
        this.currentFile = file;
        this.worker.updateFile(file.clone()).then(this.run.bind(this));
      }
    }, {
      key: 'deleteFile',
      value: function deleteFile(file) {
        if (this.currentFile === file) {
          this.currentFile = this.files[0];
        }
        this.files.splice(this.files.indexOf(file), 1);
        this.worker.deleteFile(file.clone()).then(this.run.bind(this));
      }
    }, {
      key: 'renameFile',
      value: function renameFile(file, name) {
        var _this = this;

        this.worker.deleteFile(file.clone()).then(function () {
          return file.rename(name);
        }).then(function () {
          return _this.sortFiles();
        }).then(function () {
          return _this.worker.updateFile(file.clone());
        }).then(this.run.bind(this));
      }
    }, {
      key: 'updateFile',
      value: function updateFile(file, content) {
        if (file.content === content) {
          return;
        }
        file.content = content;
        this.dirty = true;
        this.worker.updateFile(file.clone()).then(this.run.bind(this));
      }
    }, {
      key: 'resetWorker',
      value: function resetWorker() {
        return this.worker.resetFiles(this.files.map(function (f) {
          return f.clone();
        })).then(this.run.bind(this));
      }
    }, {
      key: 'save',
      value: function save(forceFork, secret) {
        var _this2 = this;

        var selected = this.currentFile.name;
        return this.gistAdapter.save(this.gist, this.files, forceFork, secret).then(function (gist) {
          _this2.dirty = false;
          _this2.gist = gist;
          _this2.files = _this2.gistAdapter.filesMapToArray(gist.files);
          _this2.queryString.write(gist, false);
          return _this2.resetWorker();
        }).then(function () {
          return _this2.currentFile = _this2.files.find(function (f) {
            return f.name === selected;
          }) || _this2.files[0];
        });
      }
    }, {
      key: 'currentFile',
      decorators: [(0, _aureliaFramework.computedFrom)('_currentFile')],
      get: function get() {
        return this._currentFile;
      },
      set: function set(file) {
        this._currentFile = file;
        this.publish(new _currentFileChangedEvent.CurrentFileChangedEvent(file));
      }
    }, {
      key: 'description',
      get: function get() {
        return this.gist.description;
      },
      set: function set(newValue) {
        this.gist.description = newValue;
      }
    }, {
      key: 'saveAction',
      get: function get() {
        return this.gistAdapter.getSaveAction(this.gist, false);
      }
    }]);

    return EditSession;
  })();

  exports.EditSession = EditSession;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbmcvZWRpdC1zZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BT2EsV0FBVztBQUNYLGFBREEsV0FBVyxDQUNWLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTs0QkFEekMsV0FBVzs7V0FrQnRCLFlBQVksR0FBRyxJQUFJOztBQWhCakIsa0NBUkksZUFBZSxFQVFILElBQUksQ0FBQyxDQUFDO0FBQ3RCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFVBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLFVBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckQsVUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQjs7MEJBWlUsV0FBVzs7YUFjYixxQkFBRztBQUNWLFlBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQUssVUFqQnRCLGlDQUFpQyxFQWlCdUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQUEsQ0FBQyxDQUFDO09BQzlFOzs7YUFZRSxlQUFHO0FBQ0osWUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLG9CQW5DRSxRQUFRLENBbUNELE9BQU8sRUFBRSxDQUFDO1NBQ3BCO09BQ0Y7OzthQUVZLHlCQUFHO0FBQ2QsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDN0IsWUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLGNBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaO09BQ0Y7OzthQUVNLGlCQUFDLElBQUksRUFBRTtBQUNaLFlBQUksSUFBSSxHQUFHLFVBN0NQLElBQUksQ0E2Q1ksSUFBSSxDQUFDLENBQUM7QUFDMUIsWUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsWUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQ2pDLElBQUksQ0FBRyxJQUFJLENBQUMsR0FBRyxNQUFSLElBQUksRUFBSyxDQUFDO09BQ3JCOzs7YUFFUyxvQkFBQyxJQUFJLEVBQUU7QUFDZixZQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO0FBQzdCLGNBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztBQUNELFlBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUNqQyxJQUFJLENBQUcsSUFBSSxDQUFDLEdBQUcsTUFBUixJQUFJLEVBQUssQ0FBQztPQUNyQjs7O2FBRVMsb0JBQUMsSUFBSSxFQUFFLElBQUksRUFBRTs7O0FBQ3JCLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUNqQyxJQUFJLENBQUM7aUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQzdCLElBQUksQ0FBQztpQkFBTSxNQUFLLFNBQVMsRUFBRTtTQUFBLENBQUMsQ0FDNUIsSUFBSSxDQUFDO2lCQUFNLE1BQUssTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FBQSxDQUFDLENBQ2hELElBQUksQ0FBRyxJQUFJLENBQUMsR0FBRyxNQUFSLElBQUksRUFBSyxDQUFDO09BQ3JCOzs7YUFFUyxvQkFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3hCLFlBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7QUFDNUIsaUJBQU87U0FDUjtBQUNELFlBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUNqQyxJQUFJLENBQUcsSUFBSSxDQUFDLEdBQUcsTUFBUixJQUFJLEVBQUssQ0FBQztPQUNyQjs7O2FBU1UsdUJBQUc7QUFDWixlQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztpQkFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQUEsQ0FBQyxDQUFDLENBQzFELElBQUksQ0FBRyxJQUFJLENBQUMsR0FBRyxNQUFSLElBQUksRUFBSyxDQUFDO09BQ3JCOzs7YUFNRyxjQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUU7OztBQUN0QixZQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztBQUNyQyxlQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQ25FLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNaLGlCQUFLLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsaUJBQUssSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixpQkFBSyxLQUFLLEdBQUcsT0FBSyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxpQkFBSyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxpQkFBTyxPQUFLLFdBQVcsRUFBRSxDQUFDO1NBQzNCLENBQUMsQ0FDRCxJQUFJLENBQUM7aUJBQU0sT0FBSyxXQUFXLEdBQUcsT0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzttQkFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVE7V0FBQSxDQUFDLElBQUksT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQUEsQ0FBQyxDQUFDO09BQzlGOzs7bUJBcEZBLHNCQTFCSyxZQUFZLEVBMEJKLGNBQWMsQ0FBQztXQUNkLGVBQUc7QUFDaEIsZUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDO09BQzFCO1dBQ2MsYUFBQyxJQUFJLEVBQUU7QUFDcEIsWUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsWUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkE3QlQsdUJBQXVCLENBNkJjLElBQUksQ0FBQyxDQUFDLENBQUM7T0FDakQ7OztXQWtEYyxlQUFHO0FBQ2hCLGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7T0FDOUI7V0FDYyxhQUFDLFFBQVEsRUFBRTtBQUN4QixZQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7T0FDbEM7OztXQU9hLGVBQUc7QUFDZixlQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7T0FDekQ7OztXQTFGVSxXQUFXIiwiZmlsZSI6ImVkaXRpbmcvZWRpdC1zZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtpbmNsdWRlRXZlbnRzSW59IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7UnVuRXZlbnR9IGZyb20gJy4vcnVuLWV2ZW50JztcclxuaW1wb3J0IHtDdXJyZW50RmlsZUNoYW5nZWRFdmVudH0gZnJvbSAnLi9jdXJyZW50LWZpbGUtY2hhbmdlZC1ldmVudCc7XHJcbmltcG9ydCB7RmlsZX0gZnJvbSAnLi9maWxlJztcclxuaW1wb3J0IHtzdHJpbmdDb21wYXJpc29uT3JkaW5hbElnbm9yZUNhc2V9IGZyb20gJy4uL3V0aWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRTZXNzaW9uIHtcclxuICBjb25zdHJ1Y3RvcihnaXN0LCB3b3JrZXIsIGdpc3RBZGFwdGVyLCBxdWVyeVN0cmluZykge1xyXG4gICAgaW5jbHVkZUV2ZW50c0luKHRoaXMpO1xyXG4gICAgdGhpcy5naXN0ID0gZ2lzdDtcclxuICAgIHRoaXMud29ya2VyID0gd29ya2VyO1xyXG4gICAgdGhpcy5naXN0QWRhcHRlciA9IGdpc3RBZGFwdGVyO1xyXG4gICAgdGhpcy5xdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nO1xyXG4gICAgdGhpcy5hdXRvUnVuID0gdHJ1ZTtcclxuICAgIHRoaXMuZmlsZXMgPSBnaXN0QWRhcHRlci5maWxlc01hcFRvQXJyYXkoZ2lzdC5maWxlcyk7XHJcbiAgICB0aGlzLnNvcnRGaWxlcygpO1xyXG4gICAgdGhpcy5fY3VycmVudEZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG4gICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc29ydEZpbGVzKCkge1xyXG4gICAgdGhpcy5maWxlcy5zb3J0KChhLCBiKSA9PiBzdHJpbmdDb21wYXJpc29uT3JkaW5hbElnbm9yZUNhc2UoYS5uYW1lLCBiLm5hbWUpKTtcclxuICB9XHJcblxyXG4gIF9jdXJyZW50RmlsZSA9IG51bGw7XHJcbiAgQGNvbXB1dGVkRnJvbSgnX2N1cnJlbnRGaWxlJylcclxuICBnZXQgY3VycmVudEZpbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEZpbGU7XHJcbiAgfVxyXG4gIHNldCBjdXJyZW50RmlsZShmaWxlKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50RmlsZSA9IGZpbGU7XHJcbiAgICB0aGlzLnB1Ymxpc2gobmV3IEN1cnJlbnRGaWxlQ2hhbmdlZEV2ZW50KGZpbGUpKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIGlmICh0aGlzLmF1dG9SdW4pIHtcclxuICAgICAgUnVuRXZlbnQucHVibGlzaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQXV0b1J1bigpIHtcclxuICAgIHRoaXMuYXV0b1J1biA9ICF0aGlzLmF1dG9SdW47XHJcbiAgICBpZiAodGhpcy5hdXRvUnVuKSB7XHJcbiAgICAgIHRoaXMucnVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRGaWxlKG5hbWUpIHtcclxuICAgIGxldCBmaWxlID0gbmV3IEZpbGUobmFtZSk7XHJcbiAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRGaWxlID0gZmlsZTtcclxuICAgIHRoaXMud29ya2VyLnVwZGF0ZUZpbGUoZmlsZS5jbG9uZSgpKVxyXG4gICAgICAudGhlbig6OnRoaXMucnVuKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUZpbGUoZmlsZSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEZpbGUgPT09IGZpbGUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbGVzLnNwbGljZSh0aGlzLmZpbGVzLmluZGV4T2YoZmlsZSksIDEpO1xyXG4gICAgdGhpcy53b3JrZXIuZGVsZXRlRmlsZShmaWxlLmNsb25lKCkpXHJcbiAgICAgIC50aGVuKDo6dGhpcy5ydW4pO1xyXG4gIH1cclxuXHJcbiAgcmVuYW1lRmlsZShmaWxlLCBuYW1lKSB7XHJcbiAgICB0aGlzLndvcmtlci5kZWxldGVGaWxlKGZpbGUuY2xvbmUoKSlcclxuICAgICAgLnRoZW4oKCkgPT4gZmlsZS5yZW5hbWUobmFtZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc29ydEZpbGVzKCkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMud29ya2VyLnVwZGF0ZUZpbGUoZmlsZS5jbG9uZSgpKSlcclxuICAgICAgLnRoZW4oOjp0aGlzLnJ1bik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWxlKGZpbGUsIGNvbnRlbnQpIHtcclxuICAgIGlmIChmaWxlLmNvbnRlbnQgPT09IGNvbnRlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZmlsZS5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy53b3JrZXIudXBkYXRlRmlsZShmaWxlLmNsb25lKCkpXHJcbiAgICAgIC50aGVuKDo6dGhpcy5ydW4pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2lzdC5kZXNjcmlwdGlvbjtcclxuICB9XHJcbiAgc2V0IGRlc2NyaXB0aW9uKG5ld1ZhbHVlKSB7XHJcbiAgICB0aGlzLmdpc3QuZGVzY3JpcHRpb24gPSBuZXdWYWx1ZTtcclxuICB9XHJcblxyXG4gIHJlc2V0V29ya2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud29ya2VyLnJlc2V0RmlsZXModGhpcy5maWxlcy5tYXAoZiA9PiBmLmNsb25lKCkpKVxyXG4gICAgICAudGhlbig6OnRoaXMucnVuKTtcclxuICB9XHJcblxyXG4gIGdldCBzYXZlQWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2lzdEFkYXB0ZXIuZ2V0U2F2ZUFjdGlvbih0aGlzLmdpc3QsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHNhdmUoZm9yY2VGb3JrLCBzZWNyZXQpIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuY3VycmVudEZpbGUubmFtZTtcclxuICAgIHJldHVybiB0aGlzLmdpc3RBZGFwdGVyLnNhdmUodGhpcy5naXN0LCB0aGlzLmZpbGVzLCBmb3JjZUZvcmssIHNlY3JldClcclxuICAgICAgLnRoZW4oZ2lzdCA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2lzdCA9IGdpc3Q7XHJcbiAgICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZ2lzdEFkYXB0ZXIuZmlsZXNNYXBUb0FycmF5KGdpc3QuZmlsZXMpO1xyXG4gICAgICAgIHRoaXMucXVlcnlTdHJpbmcud3JpdGUoZ2lzdCwgZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc2V0V29ya2VyKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuY3VycmVudEZpbGUgPSB0aGlzLmZpbGVzLmZpbmQoZiA9PiBmLm5hbWUgPT09IHNlbGVjdGVkKSB8fCB0aGlzLmZpbGVzWzBdKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('editing/query-string',['exports', 'aurelia-framework', '../util', '../github/gists', '../github/default-gist'], function (exports, _aureliaFramework, _util, _githubGists, _githubDefaultGist) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var QueryString = (function () {
    function QueryString(gists) {
      _classCallCheck(this, _QueryString);

      this.gists = gists;
    }

    _createClass(QueryString, [{
      key: 'clear',
      value: function clear() {
        history.replaceState(null, document.title, '/');
      }
    }, {
      key: 'read',
      value: function read() {
        var _this = this;

        var query = location.search;
        if (query.length) {
          var args = (0, _util.deparam)(query.substring(1));
          if (args.id) {
            return this.gists.load(args.id, args.sha)['catch'](function (reason) {
              _this.clear();
              return _githubDefaultGist.defaultGist;
            });
          } else {
            this.clear();
          }
        }
        return Promise.resolve(_githubDefaultGist.defaultGist);
      }
    }, {
      key: 'write',
      value: function write(gist, withSha) {
        if (!gist.id || !gist.history) {
          this.clear();
          return;
        }
        var query = undefined;
        if (withSha) {
          query = (0, _util.param)({ id: gist.id, sha: gist.history[0].version });
        } else {
          query = (0, _util.param)({ id: gist.id });
        }
        history.pushState(null, window.title, '?' + query);
      }
    }]);

    var _QueryString = QueryString;
    QueryString = (0, _aureliaFramework.inject)(_githubGists.Gists)(QueryString) || QueryString;
    return QueryString;
  })();

  exports.QueryString = QueryString;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbmcvcXVlcnktc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BTWEsV0FBVztBQUNYLGFBREEsV0FBVyxDQUNWLEtBQUssRUFBRTs7O0FBQ2pCLFVBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOztpQkFIVSxXQUFXOzthQUtqQixpQkFBRztBQUNOLGVBQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7T0FDakQ7OzthQUVHLGdCQUFHOzs7QUFDTCxZQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQzVCLFlBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNoQixjQUFJLElBQUksR0FBRyxVQWpCRixPQUFPLEVBaUJHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxjQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDWCxtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBTSxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ3hELG9CQUFLLEtBQUssRUFBRSxDQUFDO0FBQ2Isd0NBbkJGLFdBQVcsQ0FtQlU7YUFDcEIsQ0FBQyxDQUFDO1dBQ0osTUFBTTtBQUNMLGdCQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7V0FDZDtTQUNGO0FBQ0QsZUFBTyxPQUFPLENBQUMsT0FBTyxvQkF6QmxCLFdBQVcsQ0F5Qm9CLENBQUM7T0FDckM7OzthQUVJLGVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNuQixZQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDN0IsY0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2IsaUJBQU87U0FDUjtBQUNELFlBQUksS0FBSyxZQUFBLENBQUM7QUFDVixZQUFJLE9BQU8sRUFBRTtBQUNYLGVBQUssR0FBRyxVQXJDTixLQUFLLEVBcUNPLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM5RCxNQUFNO0FBQ0wsZUFBSyxHQUFHLFVBdkNOLEtBQUssRUF1Q08sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDaEM7QUFDRCxlQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztPQUNwRDs7O3VCQXJDVSxXQUFXO0FBQVgsZUFBVyxHQUR2QixzQkFMTyxNQUFNLGVBRU4sS0FBSyxDQUdDLENBQ0QsV0FBVyxLQUFYLFdBQVc7V0FBWCxXQUFXIiwiZmlsZSI6ImVkaXRpbmcvcXVlcnktc3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtwYXJhbSwgZGVwYXJhbX0gZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7R2lzdHN9IGZyb20gJy4uL2dpdGh1Yi9naXN0cyc7XHJcbmltcG9ydCB7ZGVmYXVsdEdpc3R9IGZyb20gJy4uL2dpdGh1Yi9kZWZhdWx0LWdpc3QnO1xyXG5cclxuQGluamVjdChHaXN0cylcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5U3RyaW5nIHtcclxuICBjb25zdHJ1Y3RvcihnaXN0cykge1xyXG4gICAgdGhpcy5naXN0cyA9IGdpc3RzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgJy8nKTtcclxuICB9XHJcblxyXG4gIHJlYWQoKSB7XHJcbiAgICBsZXQgcXVlcnkgPSBsb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBpZiAocXVlcnkubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBhcmdzID0gZGVwYXJhbShxdWVyeS5zdWJzdHJpbmcoMSkpO1xyXG4gICAgICBpZiAoYXJncy5pZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdpc3RzLmxvYWQoYXJncy5pZCwgYXJncy5zaGEpLmNhdGNoKHJlYXNvbiA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdEdpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlZmF1bHRHaXN0KTtcclxuICB9XHJcblxyXG4gIHdyaXRlKGdpc3QsIHdpdGhTaGEpIHtcclxuICAgIGlmICghZ2lzdC5pZCB8fCAhZ2lzdC5oaXN0b3J5KSB7XHJcbiAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHF1ZXJ5O1xyXG4gICAgaWYgKHdpdGhTaGEpIHtcclxuICAgICAgcXVlcnkgPSBwYXJhbSh7IGlkOiBnaXN0LmlkLCBzaGE6IGdpc3QuaGlzdG9yeVswXS52ZXJzaW9uIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcXVlcnkgPSBwYXJhbSh7IGlkOiBnaXN0LmlkIH0pO1xyXG4gICAgfVxyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgd2luZG93LnRpdGxlLCAnPycgKyBxdWVyeSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define('editing/edit-session-factory',['exports', 'aurelia-framework', './gist-adapter', '../worker/worker-client', './edit-session', './query-string'], function (exports, _aureliaFramework, _gistAdapter, _workerWorkerClient, _editSession, _queryString) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var EditSessionFactory = (function () {
    function EditSessionFactory(worker, gistAdapter, queryString) {
      _classCallCheck(this, _EditSessionFactory);

      this.worker = worker;
      this.gistAdapter = gistAdapter;
      this.queryString = queryString;
    }

    _createClass(EditSessionFactory, [{
      key: 'create',
      value: function create(gist) {
        var editSesson = new _editSession.EditSession(gist, this.worker, this.gistAdapter, this.queryString);
        return editSesson;
      }
    }]);

    var _EditSessionFactory = EditSessionFactory;
    EditSessionFactory = (0, _aureliaFramework.inject)(_workerWorkerClient.WorkerClient, _gistAdapter.GistAdapter, _queryString.QueryString)(EditSessionFactory) || EditSessionFactory;
    return EditSessionFactory;
  })();

  exports.EditSessionFactory = EditSessionFactory;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbmcvZWRpdC1zZXNzaW9uLWZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFPYSxrQkFBa0I7QUFDbEIsYUFEQSxrQkFBa0IsQ0FDakIsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUU7OztBQUM1QyxVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixVQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixVQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUNoQzs7aUJBTFUsa0JBQWtCOzthQU92QixnQkFBQyxJQUFJLEVBQUU7QUFDWCxZQUFJLFVBQVUsR0FBRyxpQkFaYixXQUFXLENBYWIsSUFBSSxFQUNKLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BCLGVBQU8sVUFBVSxDQUFDO09BQ25COzs7OEJBZFUsa0JBQWtCO0FBQWxCLHNCQUFrQixHQUQ5QixzQkFOTyxNQUFNLHNCQUVOLFlBQVksZUFEWixXQUFXLGVBR1gsV0FBVyxDQUU0QixDQUNsQyxrQkFBa0IsS0FBbEIsa0JBQWtCO1dBQWxCLGtCQUFrQiIsImZpbGUiOiJlZGl0aW5nL2VkaXQtc2Vzc2lvbi1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtHaXN0QWRhcHRlcn0gZnJvbSAnLi9naXN0LWFkYXB0ZXInO1xyXG5pbXBvcnQge1dvcmtlckNsaWVudH0gZnJvbSAnLi4vd29ya2VyL3dvcmtlci1jbGllbnQnO1xyXG5pbXBvcnQge0VkaXRTZXNzaW9ufSBmcm9tICcuL2VkaXQtc2Vzc2lvbic7XHJcbmltcG9ydCB7UXVlcnlTdHJpbmd9IGZyb20gJy4vcXVlcnktc3RyaW5nJztcclxuXHJcbkBpbmplY3QoV29ya2VyQ2xpZW50LCBHaXN0QWRhcHRlciwgUXVlcnlTdHJpbmcpXHJcbmV4cG9ydCBjbGFzcyBFZGl0U2Vzc2lvbkZhY3Rvcnkge1xyXG4gIGNvbnN0cnVjdG9yKHdvcmtlciwgZ2lzdEFkYXB0ZXIsIHF1ZXJ5U3RyaW5nKSB7XHJcbiAgICB0aGlzLndvcmtlciA9IHdvcmtlcjtcclxuICAgIHRoaXMuZ2lzdEFkYXB0ZXIgPSBnaXN0QWRhcHRlcjtcclxuICAgIHRoaXMucXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZztcclxuICB9XHJcblxyXG4gIGNyZWF0ZShnaXN0KSB7XHJcbiAgICBsZXQgZWRpdFNlc3NvbiA9IG5ldyBFZGl0U2Vzc2lvbihcclxuICAgICAgZ2lzdCxcclxuICAgICAgdGhpcy53b3JrZXIsXHJcbiAgICAgIHRoaXMuZ2lzdEFkYXB0ZXIsXHJcbiAgICAgIHRoaXMucXVlcnlTdHJpbmcpOyAgICBcclxuICAgIHJldHVybiBlZGl0U2Vzc29uO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
define('import/gist',['exports', 'aurelia-framework', '../github/gists'], function (exports, _aureliaFramework, _githubGists) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var gistUrlRegex = /^https:\/\/gist\.github\.com(?:\/[^\/]+)?\/([\da-f]+)(?:\/([\da-f]{40}))?$/;

  var GistImporter = (function () {
    function GistImporter(gists) {
      _classCallCheck(this, _GistImporter);

      this.gists = gists;
    }

    _createClass(GistImporter, [{
      key: 'canImport',
      value: function canImport(urlOrId) {
        return gistUrlRegex.test(urlOrId);
      }
    }, {
      key: 'import',
      value: function _import(urlOrId) {
        var match = gistUrlRegex.exec(urlOrId);
        var id = match[1];
        var sha = match[2];

        return this.gists.load(id, sha);
      }
    }]);

    var _GistImporter = GistImporter;
    GistImporter = (0, _aureliaFramework.inject)(_githubGists.Gists)(GistImporter) || GistImporter;
    return GistImporter;
  })();

  exports.GistImporter = GistImporter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC9naXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxZQUFZLEdBQUcsNEVBQTRFLENBQUM7O01BR3JGLFlBQVk7QUFDWixhQURBLFlBQVksQ0FDWCxLQUFLLEVBQUU7OztBQUNqQixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQjs7aUJBSFUsWUFBWTs7YUFLZCxtQkFBQyxPQUFPLEVBQUU7QUFDakIsZUFBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ25DOzs7YUFFSyxpQkFBQyxPQUFPLEVBQUU7QUFDZCxZQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZDLFlBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixZQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5CLGVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO09BQ2pDOzs7d0JBZlUsWUFBWTtBQUFaLGdCQUFZLEdBRHhCLHNCQUxPLE1BQU0sZUFDTixLQUFLLENBSUMsQ0FDRCxZQUFZLEtBQVosWUFBWTtXQUFaLFlBQVkiLCJmaWxlIjoiaW1wb3J0L2dpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0dpc3RzfSBmcm9tICcuLi9naXRodWIvZ2lzdHMnO1xyXG5cclxuY29uc3QgZ2lzdFVybFJlZ2V4ID0gL15odHRwczpcXC9cXC9naXN0XFwuZ2l0aHViXFwuY29tKD86XFwvW15cXC9dKyk/XFwvKFtcXGRhLWZdKykoPzpcXC8oW1xcZGEtZl17NDB9KSk/JC87XHJcblxyXG5AaW5qZWN0KEdpc3RzKVxyXG5leHBvcnQgY2xhc3MgR2lzdEltcG9ydGVyIHtcclxuICBjb25zdHJ1Y3RvcihnaXN0cykge1xyXG4gICAgdGhpcy5naXN0cyA9IGdpc3RzO1xyXG4gIH1cclxuXHJcbiAgY2FuSW1wb3J0KHVybE9ySWQpIHtcclxuICAgIHJldHVybiBnaXN0VXJsUmVnZXgudGVzdCh1cmxPcklkKTtcclxuICB9XHJcblxyXG4gIGltcG9ydCh1cmxPcklkKSB7XHJcbiAgICBsZXQgbWF0Y2ggPSBnaXN0VXJsUmVnZXguZXhlYyh1cmxPcklkKTtcclxuICAgIGxldCBpZCA9IG1hdGNoWzFdO1xyXG4gICAgbGV0IHNoYSA9IG1hdGNoWzJdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdpc3RzLmxvYWQoaWQsIHNoYSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define('import/jsfiddle',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var JSFiddleImporter = (function () {
    function JSFiddleImporter() {
      _classCallCheck(this, JSFiddleImporter);
    }

    _createClass(JSFiddleImporter, [{
      key: 'fiddleHtmlToGist',
      value: function fiddleHtmlToGist(page) {
        var div = document.createElement('div');
        div.innerHTML = /<input id="id_title".*\/>/.exec(page)[0];
        var title = div.firstElementChild.value;
        div.innerHTML = /<textarea id="id_description".*<\/textarea>/.exec(page)[0];
        var description = div.firstElementChild.value;
        div.innerHTML = /<fieldset class="column left">(.|\n)*<\/fieldset>/.exec(page)[0];
        var html = div.querySelector('#id_code_html').value;
        var css = div.querySelector('#id_code_css').value;
        var js = div.querySelector('#id_code_js').value;

        return {
          description: (title + ' - ' + description).replace(/(^ - )|( - )$/, ''),
          files: {
            'index.html': {
              type: 'text/html',
              content: '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>GistRun</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n' + html + '\n  <script src="script.js"></script>\n</body>\n</html>'
            },
            'script.js': {
              type: 'application/javascript',
              content: js
            },
            'styles.css': {
              contentType: 'text/css',
              content: css
            }
          }
        };
      }
    }, {
      key: 'canImport',
      value: function canImport(urlOrId) {
        return (/^http(?:s)?:\/\/jsfiddle.net(?:\/[^\\]+)/.test(urlOrId)
        );
      }
    }, {
      key: 'import',
      value: function _import(urlOrId) {
        var _this = this;

        return fetch('https://crossorigin.me/' + urlOrId).then(function (response) {
          if (response.ok) {
            return response.text();
          }
          if (response.status === 404) {
            return Promise.reject('jsFiddle not found.');
          }
          return Promise.reject('Error loading jsFiddle.');
        }).then(function (page) {
          return _this.fiddleHtmlToGist(page);
        });
      }
    }]);

    return JSFiddleImporter;
  })();

  exports.JSFiddleImporter = JSFiddleImporter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC9qc2ZpZGRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQUFhLGdCQUFnQjthQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQjs7O2lCQUFoQixnQkFBZ0I7O2FBQ1gsMEJBQUMsSUFBSSxFQUFFO0FBQ3JCLFlBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsV0FBRyxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDekQsWUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztBQUN4QyxXQUFHLENBQUMsU0FBUyxHQUFHLDZDQUE2QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RSxZQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0FBQzlDLFdBQUcsQ0FBQyxTQUFTLEdBQUcsbURBQW1ELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLFlBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3BELFlBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2xELFlBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUloRCxlQUFRO0FBQ04scUJBQVcsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFBLENBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7QUFDdkUsZUFBSyxFQUFFO0FBQ0wsd0JBQVksRUFBRTtBQUNaLGtCQUFJLEVBQUUsV0FBVztBQUNqQixxQkFBTyxvS0FBa0ssSUFBSSw0REFBeUQ7YUFDdk87QUFDRCx1QkFBVyxFQUFFO0FBQ1gsa0JBQUksRUFBRSx3QkFBd0I7QUFDOUIscUJBQU8sRUFBRSxFQUFFO2FBQ1o7QUFDRCx3QkFBWSxFQUFFO0FBQ1oseUJBQVcsRUFBRSxVQUFVO0FBQ3ZCLHFCQUFPLEVBQUUsR0FBRzthQUNiO1dBQ0Y7U0FDRixDQUFDO09BQ0g7OzthQUVRLG1CQUFDLE9BQU8sRUFBRTtBQUNqQixlQUFPLDJDQUEwQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7VUFBQztPQUNqRTs7O2FBRUssaUJBQUMsT0FBTyxFQUFFOzs7QUFDZCxlQUFPLEtBQUssNkJBQTJCLE9BQU8sQ0FBRyxDQUM5QyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsY0FBSSxRQUFRLENBQUMsRUFBRSxFQUFFO0FBQ2YsbUJBQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1dBQ3hCO0FBQ0QsY0FBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtBQUMzQixtQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7V0FDOUM7QUFDRCxpQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDbEQsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLElBQUk7aUJBQUksTUFBSyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7T0FDOUM7OztXQWpEVSxnQkFBZ0IiLCJmaWxlIjoiaW1wb3J0L2pzZmlkZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEpTRmlkZGxlSW1wb3J0ZXIge1xyXG4gIGZpZGRsZUh0bWxUb0dpc3QocGFnZSkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IC88aW5wdXQgaWQ9XCJpZF90aXRsZVwiLipcXC8+Ly5leGVjKHBhZ2UpWzBdXHJcbiAgICBsZXQgdGl0bGUgPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWU7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gLzx0ZXh0YXJlYSBpZD1cImlkX2Rlc2NyaXB0aW9uXCIuKjxcXC90ZXh0YXJlYT4vLmV4ZWMocGFnZSlbMF07XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWU7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gLzxmaWVsZHNldCBjbGFzcz1cImNvbHVtbiBsZWZ0XCI+KC58XFxuKSo8XFwvZmllbGRzZXQ+Ly5leGVjKHBhZ2UpWzBdO1xyXG4gICAgbGV0IGh0bWwgPSBkaXYucXVlcnlTZWxlY3RvcignI2lkX2NvZGVfaHRtbCcpLnZhbHVlO1xyXG4gICAgbGV0IGNzcyA9IGRpdi5xdWVyeVNlbGVjdG9yKCcjaWRfY29kZV9jc3MnKS52YWx1ZTtcclxuICAgIGxldCBqcyA9IGRpdi5xdWVyeVNlbGVjdG9yKCcjaWRfY29kZV9qcycpLnZhbHVlO1xyXG5cclxuICAgIC8vIHRvZG86IGV4dGVybmFsIHJlc291cmNlcyBhbmQgZnJhbWV3b3Jrcy4uLlxyXG5cclxuICAgIHJldHVybiAge1xyXG4gICAgICBkZXNjcmlwdGlvbjogKHRpdGxlICsgJyAtICcgKyBkZXNjcmlwdGlvbikucmVwbGFjZSgvKF4gLSApfCggLSApJC8sICcnKSxcclxuICAgICAgZmlsZXM6IHtcclxuICAgICAgICAnaW5kZXguaHRtbCc6IHtcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0L2h0bWwnLFxyXG4gICAgICAgICAgY29udGVudDogYDwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XCJlblwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XFxuICA8dGl0bGU+R2lzdFJ1bjwvdGl0bGU+XFxuICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInN0eWxlcy5jc3NcIj5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuJHtodG1sfVxcbiAgPHNjcmlwdCBzcmM9XCJzY3JpcHQuanNcIj48L3NjcmlwdD5cXG48L2JvZHk+XFxuPC9odG1sPmBcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzY3JpcHQuanMnOiB7XHJcbiAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXHJcbiAgICAgICAgICBjb250ZW50OiBqc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N0eWxlcy5jc3MnOiB7XHJcbiAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvY3NzJyxcclxuICAgICAgICAgIGNvbnRlbnQ6IGNzc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNhbkltcG9ydCh1cmxPcklkKSB7XHJcbiAgICByZXR1cm4gL15odHRwKD86cyk/OlxcL1xcL2pzZmlkZGxlLm5ldCg/OlxcL1teXFxcXF0rKS8udGVzdCh1cmxPcklkKTtcclxuICB9XHJcblxyXG4gIGltcG9ydCh1cmxPcklkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vY3Jvc3NvcmlnaW4ubWUvJHt1cmxPcklkfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdqc0ZpZGRsZSBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnRXJyb3IgbG9hZGluZyBqc0ZpZGRsZS4nKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocGFnZSA9PiB0aGlzLmZpZGRsZUh0bWxUb0dpc3QocGFnZSkpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
define('import/plunker',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var urlRegex = /^http(?:s)?:\/\/(?:embed.)?plnkr.co\/(?:edit\/)?([\da-zA-Z]+)/;

  var PlunkerImporter = (function () {
    function PlunkerImporter() {
      _classCallCheck(this, PlunkerImporter);
    }

    _createClass(PlunkerImporter, [{
      key: 'canImport',
      value: function canImport(urlOrId) {
        return urlRegex.test(urlOrId);
      }
    }, {
      key: 'import',
      value: function _import(urlOrId) {
        var plunkerID = urlRegex.exec(urlOrId)[1];
        return fetch('https://api.plnkr.co/plunks/' + plunkerID).then(function (response) {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 404) {
            return Promise.reject('Plunk not found.');
          }
          return Promise.reject('Error loading plunk.');
        }).then(function (plunk) {
          var gist = { description: plunk.description, files: {} };
          for (var _name in plunk.files) {
            gist.files[_name] = { content: plunk.files[_name].content };
          }
          return gist;
        });
      }
    }]);

    return PlunkerImporter;
  })();

  exports.PlunkerImporter = PlunkerImporter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC9wbHVua2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxRQUFRLEdBQUcsK0RBQStELENBQUM7O01BRXBFLGVBQWU7YUFBZixlQUFlOzRCQUFmLGVBQWU7OztpQkFBZixlQUFlOzthQUNqQixtQkFBQyxPQUFPLEVBQUU7QUFDakIsZUFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQy9COzs7YUFFSyxpQkFBQyxPQUFPLEVBQUU7QUFDZCxZQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLGVBQU8sS0FBSyxrQ0FBZ0MsU0FBUyxDQUFHLENBQ3JELElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoQixjQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7QUFDZixtQkFBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7V0FDeEI7QUFDRCxjQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO0FBQzNCLG1CQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztXQUMzQztBQUNELGlCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUMvQyxDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsS0FBSyxFQUFJO0FBQ2IsY0FBSSxJQUFJLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDekQsZUFBSyxJQUFJLEtBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQzVCLGdCQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDM0Q7QUFDRCxpQkFBTyxJQUFJLENBQUM7U0FDYixDQUFDLENBQUM7T0FDTjs7O1dBeEJVLGVBQWUiLCJmaWxlIjoiaW1wb3J0L3BsdW5rZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1cmxSZWdleCA9IC9eaHR0cCg/OnMpPzpcXC9cXC8oPzplbWJlZC4pP3BsbmtyLmNvXFwvKD86ZWRpdFxcLyk/KFtcXGRhLXpBLVpdKykvO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsdW5rZXJJbXBvcnRlciB7XHJcbiAgY2FuSW1wb3J0KHVybE9ySWQpIHtcclxuICAgIHJldHVybiB1cmxSZWdleC50ZXN0KHVybE9ySWQpO1xyXG4gIH1cclxuXHJcbiAgaW1wb3J0KHVybE9ySWQpIHtcclxuICAgIGxldCBwbHVua2VySUQgPSB1cmxSZWdleC5leGVjKHVybE9ySWQpWzFdO1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5wbG5rci5jby9wbHVua3MvJHtwbHVua2VySUR9YClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1BsdW5rIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdFcnJvciBsb2FkaW5nIHBsdW5rLicpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihwbHVuayA9PiB7XHJcbiAgICAgICAgbGV0IGdpc3QgPSB7IGRlc2NyaXB0aW9uOiBwbHVuay5kZXNjcmlwdGlvbiwgZmlsZXM6IHt9IH07XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBwbHVuay5maWxlcykge1xyXG4gICAgICAgICAgZ2lzdC5maWxlc1tuYW1lXSA9IHsgY29udGVudDogcGx1bmsuZmlsZXNbbmFtZV0uY29udGVudCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2lzdDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define('import/importer',['exports', 'aurelia-framework', './gist', './jsfiddle', './plunker'], function (exports, _aureliaFramework, _gist, _jsfiddle, _plunker) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Importer = (function () {
    function Importer() {
      _classCallCheck(this, _Importer);

      for (var _len = arguments.length, importers = Array(_len), _key = 0; _key < _len; _key++) {
        importers[_key] = arguments[_key];
      }

      this.importers = importers;
    }

    _createClass(Importer, [{
      key: 'import',
      value: function _import(urlOrId) {
        var importer = this.importers.find(function (x) {
          return x.canImport(urlOrId);
        });
        if (importer) {
          return importer['import'](urlOrId);
        }
        return Promise.reject('Unrecognized URL or ID');
      }
    }]);

    var _Importer = Importer;
    Importer = (0, _aureliaFramework.inject)(_gist.GistImporter, _jsfiddle.JSFiddleImporter, _plunker.PlunkerImporter)(Importer) || Importer;
    return Importer;
  })();

  exports.Importer = Importer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC9pbXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQU1hLFFBQVE7QUFDUixhQURBLFFBQVEsR0FDTzs7O3dDQUFYLFNBQVM7QUFBVCxpQkFBUzs7O0FBQ3RCLFVBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzVCOztpQkFIVSxRQUFROzthQUtiLGlCQUFDLE9BQU8sRUFBRTtBQUNkLFlBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztpQkFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUFBLENBQUMsQ0FBQztBQUM5RCxZQUFJLFFBQVEsRUFBRTtBQUNaLGlCQUFPLFFBQVEsVUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO0FBQ0QsZUFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7T0FDakQ7OztvQkFYVSxRQUFRO0FBQVIsWUFBUSxHQURwQixzQkFMTyxNQUFNLFFBQ04sWUFBWSxZQUNaLGdCQUFnQixXQUNoQixlQUFlLENBRWlDLENBQzNDLFFBQVEsS0FBUixRQUFRO1dBQVIsUUFBUSIsImZpbGUiOiJpbXBvcnQvaW1wb3J0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0dpc3RJbXBvcnRlcn0gZnJvbSAnLi9naXN0JztcclxuaW1wb3J0IHtKU0ZpZGRsZUltcG9ydGVyfSBmcm9tICcuL2pzZmlkZGxlJztcclxuaW1wb3J0IHtQbHVua2VySW1wb3J0ZXJ9IGZyb20gJy4vcGx1bmtlcic7XHJcblxyXG5AaW5qZWN0KEdpc3RJbXBvcnRlciwgSlNGaWRkbGVJbXBvcnRlciwgUGx1bmtlckltcG9ydGVyKVxyXG5leHBvcnQgY2xhc3MgSW1wb3J0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmltcG9ydGVycykge1xyXG4gICAgdGhpcy5pbXBvcnRlcnMgPSBpbXBvcnRlcnM7XHJcbiAgfVxyXG5cclxuICBpbXBvcnQodXJsT3JJZCkge1xyXG4gICAgbGV0IGltcG9ydGVyID0gdGhpcy5pbXBvcnRlcnMuZmluZCh4ID0+IHguY2FuSW1wb3J0KHVybE9ySWQpKTtcclxuICAgIGlmIChpbXBvcnRlcikge1xyXG4gICAgICByZXR1cm4gaW1wb3J0ZXIuaW1wb3J0KHVybE9ySWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdVbnJlY29nbml6ZWQgVVJMIG9yIElEJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define('main',['exports', './worker/worker-activator'], function (exports, _workerWorkerActivator) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(aurelia) {
    aurelia.use.standardConfiguration();

    aurelia.start().then(function () {
      if ('serviceWorker' in navigator) {
        var root = /\/embed/.test(location.href) ? 'ui/embed/app' : 'ui/app';
        return aurelia.setRoot(root).then(_workerWorkerActivator.activate);
      }
      return aurelia.setRoot('ui/fallback');
    });
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztBQUVwQyxXQUFPLENBQUMsS0FBSyxFQUFFLENBQ1osSUFBSSxDQUFDLFlBQU07QUFDVixVQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7QUFDaEMsWUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLFFBQVEsQ0FBQztBQUNyRSxlQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSx3QkFUakMsUUFBUSxDQVN5QyxDQUFDO09BQ25EO0FBQ0QsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3ZDLENBQUMsQ0FBQztHQUNOIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FjdGl2YXRlIGFzIGFjdGl2YXRlV29ya2VyfSBmcm9tICcuL3dvcmtlci93b3JrZXItYWN0aXZhdG9yJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpO1xyXG5cclxuICBhdXJlbGlhLnN0YXJ0KClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBsZXQgcm9vdCA9IC9cXC9lbWJlZC8udGVzdChsb2NhdGlvbi5ocmVmKSA/ICd1aS9lbWJlZC9hcHAnIDogJ3VpL2FwcCc7XHJcbiAgICAgICAgcmV0dXJuIGF1cmVsaWEuc2V0Um9vdChyb290KS50aGVuKGFjdGl2YXRlV29ya2VyKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXVyZWxpYS5zZXRSb290KCd1aS9mYWxsYmFjaycpOyAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('ui/ace-editor',['exports', 'ace', 'aurelia-framework', 'aurelia-pal'], function (exports, _ace, _aureliaFramework, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _ace2 = _interopRequireDefault(_ace);

  var AceEditor = (function () {
    function AceEditor(element) {
      _classCallCheck(this, _AceEditor);

      this.element = element;
      element.focus = this.focus.bind(this);
    }

    _createClass(AceEditor, [{
      key: 'themeChanged',
      value: function themeChanged() {
        if (this.editor) {
          this.editor.setTheme('ace/theme/' + this.theme);
        }
      }
    }, {
      key: 'modeChanged',
      value: function modeChanged() {
        if (this.editor) {
          this.editor.getSession().setMode('ace/mode/' + this.mode);
        }
      }
    }, {
      key: 'resetUndo',
      value: function resetUndo() {
        this.editor.getSession().setUndoManager(new _ace2['default'].UndoManager());
      }
    }, {
      key: 'valueChanged',
      value: function valueChanged() {
        if (this.editor && this.editor.getValue() !== this.value) {
          this.editor.setValue(this.value, -1);
          this.resetUndo();
        }
      }
    }, {
      key: 'resize',
      value: function resize() {
        if (this.editor) {
          this.editor.resize();
        }
      }
    }, {
      key: 'attached',
      value: function attached() {
        var _this = this;

        this.editor = _ace2['default'].edit(this.element);

        this.editor.renderer.setPadding(5);

        this.editor.$blockScrolling = Infinity;

        this.editor.setOptions({
          showPrintMargin: false,
          showGutter: false,
          cursorStyle: 'slim',
          useSoftTabs: true,
          tabSize: 2,
          displayIndentGuides: false,
          showInvisibles: false
        });

        this.themeChanged();
        this.modeChanged();
        this.valueChanged();

        this.editor.getSession().on('change', function (e) {
          _this.value = _this.editor.getValue();
          var changeEvent = _aureliaPal.DOM.createCustomEvent('change', { bubbles: true, detail: _this.value });
          _this.element.dispatchEvent(changeEvent);
        });
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.editor.getSession().off('change');
        this.editor.destroy();
        this.editor = null;
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (this.editor) {
          this.editor.focus();
        }
      }
    }]);

    var _AceEditor = AceEditor;
    AceEditor = (0, _aureliaFramework.bindable)({ name: 'value', defaultValue: '', defaultBindingMode: _aureliaFramework.bindingMode.twoWay })(AceEditor) || AceEditor;
    AceEditor = (0, _aureliaFramework.bindable)({ name: 'mode', defaultValue: 'javascript' })(AceEditor) || AceEditor;
    AceEditor = (0, _aureliaFramework.bindable)({ name: 'theme', defaultValue: 'chrome' })(AceEditor) || AceEditor;
    AceEditor = (0, _aureliaFramework.inlineView)('<template></template>')(AceEditor) || AceEditor;
    AceEditor = (0, _aureliaFramework.inject)(Element)(AceEditor) || AceEditor;
    return AceEditor;
  })();

  exports.AceEditor = AceEditor;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2FjZS1lZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BbUJhLFNBQVM7QUFDVCxhQURBLFNBQVMsQ0FDUixPQUFPLEVBQUU7OztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixhQUFPLENBQUMsS0FBSyxHQUFLLElBQUksQ0FBQyxLQUFLLE1BQVYsSUFBSSxDQUFNLENBQUM7S0FDOUI7O2lCQUpVLFNBQVM7O2FBTVIsd0JBQUc7QUFDYixZQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDZixjQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsZ0JBQWMsSUFBSSxDQUFDLEtBQUssQ0FBRyxDQUFDO1NBQ2pEO09BQ0Y7OzthQUVVLHVCQUFHO0FBQ1osWUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2YsY0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLGVBQWEsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFDO1NBQzNEO09BQ0Y7OzthQUVRLHFCQUFHO0FBQ1YsWUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxpQkFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDO09BQ2hFOzs7YUFFVyx3QkFBRztBQUNiLFlBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDeEQsY0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLGNBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtPQUNGOzs7YUFFSyxrQkFBRztBQUNQLFlBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNmLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdEI7T0FDRjs7O2FBRU8sb0JBQUc7OztBQUNULFlBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFHckMsWUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUduQyxZQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUE7O0FBR3RDLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3JCLHlCQUFlLEVBQUUsS0FBSztBQUN0QixvQkFBVSxFQUFFLEtBQUs7QUFDakIscUJBQVcsRUFBRSxNQUFNO0FBQ25CLHFCQUFXLEVBQUUsSUFBSTtBQUNqQixpQkFBTyxFQUFFLENBQUM7QUFDViw2QkFBbUIsRUFBRSxLQUFLO0FBQzFCLHdCQUFjLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUM7O0FBR0gsWUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQixZQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O0FBR3BCLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBLENBQUMsRUFBSTtBQUN6QyxnQkFBSyxLQUFLLEdBQUcsTUFBSyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEMsY0FBSSxXQUFXLEdBQUcsWUEzRWhCLEdBQUcsQ0EyRWlCLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQUssS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN6RixnQkFBSyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDLENBQUMsQ0FBQztPQUNKOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLFlBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7T0FDcEI7OzthQUVJLGlCQUFHO0FBQ04sWUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2YsY0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtPQUNGOzs7cUJBOUVVLFNBQVM7QUFBVCxhQUFTLEdBRHJCLHNCQWRDLFFBQVEsRUFjQSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxrQkFiL0QsV0FBVyxDQWFnRSxNQUFNLEVBQUUsQ0FBQyxDQUN6RSxTQUFTLEtBQVQsU0FBUztBQUFULGFBQVMsR0FGckIsc0JBYkMsUUFBUSxFQWFBLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FFMUMsU0FBUyxLQUFULFNBQVM7QUFBVCxhQUFTLEdBSHJCLHNCQVpDLFFBQVEsRUFZQSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBR3ZDLFNBQVMsS0FBVCxTQUFTO0FBQVQsYUFBUyxHQUpyQixzQkFaQyxVQUFVLEVBWUEsdUJBQXVCLENBQUMsQ0FJdkIsU0FBUyxLQUFULFNBQVM7QUFBVCxhQUFTLEdBTHJCLHNCQVpDLE1BQU0sRUFZQSxPQUFPLENBQUMsQ0FLSCxTQUFTLEtBQVQsU0FBUztXQUFULFNBQVMiLCJmaWxlIjoidWkvYWNlLWVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhY2UgZnJvbSAnYWNlJztcclxuaW1wb3J0IHtcclxuICBpbmplY3QsXHJcbiAgaW5saW5lVmlldyxcclxuICBiaW5kYWJsZSxcclxuICBiaW5kaW5nTW9kZVxyXG59IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcclxuXHJcbi8vIC8vIHJldHJpZXZlIGFjZSdzIGJhc2UgcGF0aCBmcm9tIHRoZSBTeXN0ZW0gY29uZmlnXHJcbi8vIGxldCBiYXNlID0gU3lzdGVtLm5vcm1hbGl6ZVN5bmMoJ2FjZScpO1xyXG4vLyBiYXNlID0gYmFzZS5zdWJzdHIoMCwgYmFzZS5sZW5ndGggLSAzKTtcclxuLy8gYWNlLmNvbmZpZy5zZXQoJ2Jhc2VQYXRoJywgYmFzZSk7XHJcblxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBpbmxpbmVWaWV3KCc8dGVtcGxhdGU+PC90ZW1wbGF0ZT4nKVxyXG5AYmluZGFibGUoeyBuYW1lOiAndGhlbWUnLCBkZWZhdWx0VmFsdWU6ICdjaHJvbWUnIH0pXHJcbkBiaW5kYWJsZSh7IG5hbWU6ICdtb2RlJywgZGVmYXVsdFZhbHVlOiAnamF2YXNjcmlwdCcgfSlcclxuQGJpbmRhYmxlKHsgbmFtZTogJ3ZhbHVlJywgZGVmYXVsdFZhbHVlOiAnJywgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSlcclxuZXhwb3J0IGNsYXNzIEFjZUVkaXRvciB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIGVsZW1lbnQuZm9jdXMgPSA6OnRoaXMuZm9jdXM7XHJcbiAgfVxyXG5cclxuICB0aGVtZUNoYW5nZWQoKSB7XHJcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcclxuICAgICAgdGhpcy5lZGl0b3Iuc2V0VGhlbWUoYGFjZS90aGVtZS8ke3RoaXMudGhlbWV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb2RlQ2hhbmdlZCgpIHtcclxuICAgIGlmICh0aGlzLmVkaXRvcikge1xyXG4gICAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShgYWNlL21vZGUvJHt0aGlzLm1vZGV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldFVuZG8oKSB7XHJcbiAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0VW5kb01hbmFnZXIobmV3IGFjZS5VbmRvTWFuYWdlcigpKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZCgpIHtcclxuICAgIGlmICh0aGlzLmVkaXRvciAmJiB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMudmFsdWUsIC0xKTtcclxuICAgICAgdGhpcy5yZXNldFVuZG8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmVkaXRvcikge1xyXG4gICAgICB0aGlzLmVkaXRvci5yZXNpemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5lZGl0b3IgPSBhY2UuZWRpdCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIC8vIGluY3JlYXNlIGhvcml6b250YWwgcGFkZGluZ1xyXG4gICAgdGhpcy5lZGl0b3IucmVuZGVyZXIuc2V0UGFkZGluZyg1KTtcclxuXHJcbiAgICAvLyBhdm9pZCB3YXJuaW5nIG1lc3NhZ2UgaW4gY29uc29sZVxyXG4gICAgdGhpcy5lZGl0b3IuJGJsb2NrU2Nyb2xsaW5nID0gSW5maW5pdHlcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYWpheG9yZy9hY2Uvd2lraS9Db25maWd1cmluZy1BY2VcclxuICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMoe1xyXG4gICAgICBzaG93UHJpbnRNYXJnaW46IGZhbHNlLFxyXG4gICAgICBzaG93R3V0dGVyOiBmYWxzZSxcclxuICAgICAgY3Vyc29yU3R5bGU6ICdzbGltJyxcclxuICAgICAgdXNlU29mdFRhYnM6IHRydWUsXHJcbiAgICAgIHRhYlNpemU6IDIsXHJcbiAgICAgIGRpc3BsYXlJbmRlbnRHdWlkZXM6IGZhbHNlLFxyXG4gICAgICBzaG93SW52aXNpYmxlczogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNldCBpbml0aWFsIHZhbHVlcy5cclxuICAgIHRoaXMudGhlbWVDaGFuZ2VkKCk7XHJcbiAgICB0aGlzLm1vZGVDaGFuZ2VkKCk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xyXG5cclxuICAgIC8vIHdoZW4gcHJvcGFnYXRlIGVkaXRvciBjaGFuZ2VzIHRvIHRoZSB2YWx1ZSBiaW5kYWJsZS5cclxuICAgIHRoaXMuZWRpdG9yLmdldFNlc3Npb24oKS5vbignY2hhbmdlJywgZSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpO1xyXG4gICAgICBsZXQgY2hhbmdlRXZlbnQgPSBET00uY3JlYXRlQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHsgYnViYmxlczogdHJ1ZSwgZGV0YWlsOiB0aGlzLnZhbHVlIH0pO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRldGFjaGVkKCkge1xyXG4gICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLm9mZignY2hhbmdlJyk7XHJcbiAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmVkaXRvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLmVkaXRvcikge1xyXG4gICAgICB0aGlzLmVkaXRvci5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

define('text',['module'], function (module) {
    'use strict';

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.12',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.indexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1, name.length);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file.indexOf('\uFEFF') === 0) {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});


define('text!ui/app.html',[],function () { return '<template>\r\n  <require from="./header"></require>\r\n  <require from="./rate-alert"></require>\r\n  <require from="./edit-session-commands.html"></require>\r\n  <require from="./split-panel"></require>\r\n  <require from="./nav-panel"></require>\r\n  <require from="./edit-file-panel.html"></require>\r\n  <require from="./result-panel"></require>\r\n\r\n  <header import.call="import(urlOrId)" new.call="newGist()"></header>\r\n\r\n  <rate-alert></rate-alert>\r\n\r\n  <edit-session-commands edit-session.bind="editSession"></edit-session-commands>\r\n\r\n  <split-panel>\r\n    <template replace-part="left">\r\n      <nav-panel edit-session.bind="editSession"></nav-panel>\r\n    </template>\r\n\r\n    <template replace-part="center">\r\n      <edit-file-panel edit-session.bind="editSession"></edit-file-panel>\r\n    </template>\r\n\r\n    <template replace-part="right">\r\n      <result-panel></result-panel>\r\n    </template>\r\n  </split-panel>\r\n</template>\r\n';});

define('ui/focus',['exports', 'aurelia-framework', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Focus = (function () {
    function Focus(eventAggregator) {
      _classCallCheck(this, _Focus);

      this.eventAggregator = eventAggregator;
    }

    _createClass(Focus, [{
      key: 'set',
      value: function set(name) {
        var e = new SetFocusEvent(name);
        this.eventAggregator.publish(e);
        return e.handled;
      }
    }]);

    var _Focus = Focus;
    Focus = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(Focus) || Focus;
    return Focus;
  })();

  exports.Focus = Focus;

  var SetFocusEvent = function SetFocusEvent(name) {
    _classCallCheck(this, SetFocusEvent);

    this.name = name;
    this.handled = false;
  };

  exports.SetFocusEvent = SetFocusEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2ZvY3VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BSWEsS0FBSztBQUNMLGFBREEsS0FBSyxDQUNKLGVBQWUsRUFBRTs7O0FBQzNCLFVBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0tBQ3hDOztpQkFIVSxLQUFLOzthQUtiLGFBQUMsSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsWUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsZUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDO09BQ2xCOzs7aUJBVFUsS0FBSztBQUFMLFNBQUssR0FEakIsc0JBSE8sTUFBTSwwQkFDTixlQUFlLENBRUMsQ0FDWCxLQUFLLEtBQUwsS0FBSztXQUFMLEtBQUs7Ozs7O01BWUwsYUFBYSxHQUNiLFNBREEsYUFBYSxDQUNaLElBQUksRUFBRTswQkFEUCxhQUFhOztBQUV0QixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixRQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztHQUN0QiIsImZpbGUiOiJ1aS9mb2N1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBGb2N1cyB7XHJcbiAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuICB9XHJcblxyXG4gIHNldChuYW1lKSB7XHJcbiAgICBsZXQgZSA9IG5ldyBTZXRGb2N1c0V2ZW50KG5hbWUpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChlKTtcclxuICAgIHJldHVybiBlLmhhbmRsZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0Rm9jdXNFdmVudCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaGFuZGxlZCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
!function(){"use strict";function t(){var t={parent:document.body,version:"1.0.10",defaultOkLabel:"Ok",okLabel:"Ok",defaultCancelLabel:"Cancel",cancelLabel:"Cancel",defaultMaxLogItems:2,maxLogItems:2,promptValue:"",promptPlaceholder:"",closeLogOnClick:!1,closeLogOnClickDefault:!1,delay:5e3,defaultDelay:5e3,logContainerClass:"alertify-logs",logContainerDefaultClass:"alertify-logs",dialogs:{buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='1'>{{ok}}</button>",cancel:"<button class='cancel' tabindex='2'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"},defaultDialogs:{buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='1'>{{ok}}</button>",cancel:"<button class='cancel' tabindex='2'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"},build:function(t){var e=this.dialogs.buttons.ok,o="<div class='dialog'><div>"+this.dialogs.message.replace("{{message}}",t.message);return"confirm"!==t.type&&"prompt"!==t.type||(e=this.dialogs.buttons.cancel+this.dialogs.buttons.ok),"prompt"===t.type&&(o+=this.dialogs.input),o=(o+this.dialogs.buttons.holder+"</div></div>").replace("{{buttons}}",e).replace("{{ok}}",this.okLabel).replace("{{cancel}}",this.cancelLabel)},setCloseLogOnClick:function(t){this.closeLogOnClick=!!t},close:function(t,e){this.closeLogOnClick&&t.addEventListener("click",function(t){o(t.srcElement)}),e=e&&!isNaN(+e)?+e:this.delay,0>e?o(t):e>0&&setTimeout(function(){o(t)},e)},dialog:function(t,e,o,n){return this.setup({type:e,message:t,onOkay:o,onCancel:n})},log:function(t,e,o){var n=document.querySelectorAll(".alertify-logs > div");if(n){var i=n.length-this.maxLogItems;if(i>=0)for(var a=0,l=i+1;l>a;a++)this.close(n[a],-1)}this.notify(t,e,o)},setLogPosition:function(t){this.logContainerClass="alertify-logs "+t},setupLogContainer:function(){var t=document.querySelector(".alertify-logs"),e=this.logContainerClass;return t||(t=document.createElement("div"),t.className=e,this.parent.appendChild(t)),t.className!==e&&(t.className=e),t},notify:function(e,o,n){var i=this.setupLogContainer(),a=document.createElement("div");a.className=o||"default",t.logTemplateMethod?a.innerHTML=t.logTemplateMethod(e):a.innerHTML=e,"function"==typeof n&&a.addEventListener("click",n),i.appendChild(a),setTimeout(function(){a.className+=" show"},10),this.close(a,this.delay)},setup:function(t){function e(e){"function"!=typeof e&&(e=function(){}),i&&i.addEventListener("click",function(i){t.onOkay&&"function"==typeof t.onOkay&&(l?t.onOkay(l.value,i):t.onOkay(i)),e(l?{buttonClicked:"ok",inputValue:l.value,event:i}:{buttonClicked:"ok",event:i}),o(n)}),a&&a.addEventListener("click",function(i){t.onCancel&&"function"==typeof t.onCancel&&t.onCancel(i),e({buttonClicked:"cancel",event:i}),o(n)})}var n=document.createElement("div");n.className="alertify hide",n.innerHTML=this.build(t);var i=n.querySelector(".ok"),a=n.querySelector(".cancel"),l=n.querySelector("input"),s=n.querySelector("label");l&&("string"==typeof this.promptPlaceholder&&(s?s.textContent=this.promptPlaceholder:l.placeholder=this.promptPlaceholder),"string"==typeof this.promptValue&&(l.value=this.promptValue));var r;return"function"==typeof Promise?r=new Promise(e):e(),this.parent.appendChild(n),setTimeout(function(){n.classList.remove("hide"),l&&t.type&&"prompt"===t.type?(l.select(),l.focus()):i&&i.focus()},100),r},okBtn:function(t){return this.okLabel=t,this},setDelay:function(t){return t=t||0,this.delay=isNaN(t)?this.defaultDelay:parseInt(t,10),this},cancelBtn:function(t){return this.cancelLabel=t,this},setMaxLogItems:function(t){this.maxLogItems=parseInt(t||this.defaultMaxLogItems)},theme:function(t){switch(t.toLowerCase()){case"bootstrap":this.dialogs.buttons.ok="<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>",this.dialogs.buttons.cancel="<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>",this.dialogs.input="<input type='text' class='form-control'>";break;case"purecss":this.dialogs.buttons.ok="<button class='ok pure-button' tabindex='1'>{{ok}}</button>",this.dialogs.buttons.cancel="<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>";break;case"mdl":case"material-design-light":this.dialogs.buttons.ok="<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>",this.dialogs.buttons.cancel="<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>",this.dialogs.input="<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>";break;case"angular-material":this.dialogs.buttons.ok="<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>",this.dialogs.buttons.cancel="<button class='cancel md-button' tabindex='2'>{{cancel}}</button>",this.dialogs.input="<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>";break;case"default":default:this.dialogs.buttons.ok=this.defaultDialogs.buttons.ok,this.dialogs.buttons.cancel=this.defaultDialogs.buttons.cancel,this.dialogs.input=this.defaultDialogs.input}},reset:function(){this.parent=document.body,this.theme("default"),this.okBtn(this.defaultOkLabel),this.cancelBtn(this.defaultCancelLabel),this.setMaxLogItems(),this.promptValue="",this.promptPlaceholder="",this.delay=this.defaultDelay,this.setCloseLogOnClick(this.closeLogOnClickDefault),this.setLogPosition("bottom left"),this.logTemplateMethod=null},injectCSS:function(){if(!document.querySelector("#alertifyCSS")){var t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.id="alertifyCSS",e.innerHTML=".alertify-logs>*{padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:2}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.show{box-sizing:border-box;transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *{box-sizing:border-box}.alertify .dialog{padding:12px}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin-bottom:12px;margin:0;text-align:left}.alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:12px}.alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:transparent;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-webkit-align-items:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid transparent;border-radius:2px}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}.alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}.alertify-logs{position:fixed;z-index:1}.alertify-logs.bottom,.alertify-logs:not(.top){bottom:16px}.alertify-logs.left,.alertify-logs:not(.right){left:16px}.alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;-webkit-transform:translateZ(0);transform:translateZ(0);height:auto}.alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}.alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}.alertify-logs.right{right:16px}.alertify-logs.right>*{float:right;-webkit-transform:translateZ(0);transform:translateZ(0)}.alertify-logs.right>.show{right:0;opacity:1}.alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}.alertify-logs.top{top:0}.alertify-logs>*{box-sizing:border-box;transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;perspective:1000;max-height:0;margin:0;padding:0;overflow:hidden;opacity:0;pointer-events:none}.alertify-logs>.show{margin-top:12px;opacity:1;max-height:1000px;padding:12px;pointer-events:auto}",t.insertBefore(e,t.firstChild)}},removeCSS:function(){var t=document.querySelector("#alertifyCSS");t&&t.parentNode&&t.parentNode.removeChild(t)}};return t.injectCSS(),{_$$alertify:t,parent:function(e){t.parent=e},reset:function(){return t.reset(),this},alert:function(e,o,n){return t.dialog(e,"alert",o,n)||this},confirm:function(e,o,n){return t.dialog(e,"confirm",o,n)||this},prompt:function(e,o,n){return t.dialog(e,"prompt",o,n)||this},log:function(e,o){return t.log(e,"default",o),this},theme:function(e){return t.theme(e),this},success:function(e,o){return t.log(e,"success",o),this},error:function(e,o){return t.log(e,"error",o),this},cancelBtn:function(e){return t.cancelBtn(e),this},okBtn:function(e){return t.okBtn(e),this},delay:function(e){return t.setDelay(e),this},placeholder:function(e){return t.promptPlaceholder=e,this},defaultValue:function(e){return t.promptValue=e,this},maxLogItems:function(e){return t.setMaxLogItems(e),this},closeLogOnClick:function(e){return t.setCloseLogOnClick(!!e),this},logPosition:function(e){return t.setLogPosition(e||""),this},setLogTemplate:function(e){return t.logTemplateMethod=e,this},clearLogs:function(){return t.setupLogContainer().innerHTML="",this},version:t.version}}var e=500,o=function(t){if(t){var o=function(){t&&t.parentNode&&t.parentNode.removeChild(t)};t.classList.remove("show"),t.classList.add("hide"),t.addEventListener("transitionend",o),setTimeout(o,e)}};if("undefined"!=typeof module&&module&&module.exports){module.exports=function(){return new t};var n=new t;for(var i in n)module.exports[i]=n[i]}else"function"==typeof define&&define.amd?define('alertify',[],function(){return new t}):window.alertify=new t}();
define('ui/app',['exports', 'aurelia-framework', '../editing/edit-session-factory', '../editing/current-file-changed-event', '../editing/query-string', '../github/default-gist', '../import/importer', './focus', 'alertify'], function (exports, _aureliaFramework, _editingEditSessionFactory, _editingCurrentFileChangedEvent, _editingQueryString, _githubDefaultGist, _importImporter, _focus, _alertify) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _alertify2 = _interopRequireDefault(_alertify);

  var App = (function () {
    function App(editSessionFactory, importer, queryString, focus) {
      _classCallCheck(this, _App);

      this.editSession = null;

      this.editSessionFactory = editSessionFactory;
      this.importer = importer;
      this.queryString = queryString;
      this.focus = focus;
      addEventListener('beforeunload', this.beforeUnload.bind(this));
    }

    _createClass(App, [{
      key: 'beforeUnload',
      value: function beforeUnload(event) {
        if (this.editSession && this.editSession.dirty) {
          event.returnValue = 'You have unsaved work in this Gist.';
        }
      }
    }, {
      key: 'currentFileChanged',
      value: function currentFileChanged(event) {
        if (event.file.name === '') {
          this.focus.set('filename');
        } else {
          this.focus.set('editor');
        }
      }
    }, {
      key: 'setEditSession',
      value: function setEditSession(editSession) {
        var _context;

        if (this.fileChangedSub) {
          this.fileChangedSub.dispose();
        }
        this.editSession = editSession;
        this.fileChangedSub = editSession.subscribe(_editingCurrentFileChangedEvent.CurrentFileChangedEvent, this.currentFileChanged.bind(this));
        this.editSession.resetWorker().then((_context = this.editSession).run.bind(_context));
      }
    }, {
      key: 'activate',
      value: function activate() {
        var _this = this;

        return this.queryString.read().then(function (gist) {
          return _this.setEditSession(_this.editSessionFactory.create(gist));
        });
      }
    }, {
      key: 'newGist',
      value: function newGist() {
        this.queryString.clear();
        this.setEditSession(this.editSessionFactory.create(_githubDefaultGist.defaultGist));
      }
    }, {
      key: 'import',
      value: function _import(urlOrId) {
        var _this2 = this;

        this.importer['import'](urlOrId).then(function (gist) {
          _this2.queryString.write(gist, true);
          return _this2.editSessionFactory.create(gist);
        }).then(this.setEditSession.bind(this)).then(function () {
          return _alertify2['default'].success('Import successful.');
        }, function (reason) {
          return _alertify2['default'].error(reason);
        });
      }
    }]);

    var _App = App;
    App = (0, _aureliaFramework.inject)(_editingEditSessionFactory.EditSessionFactory, _importImporter.Importer, _editingQueryString.QueryString, _focus.Focus)(App) || App;
    return App;
  })();

  exports.App = App;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFVYSxHQUFHO0FBR0gsYUFIQSxHQUFHLENBR0Ysa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7OztXQUY5RCxXQUFXLEdBQUcsSUFBSTs7QUFHaEIsVUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLFVBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFVBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLHNCQUFnQixDQUFDLGNBQWMsRUFBSSxJQUFJLENBQUMsWUFBWSxNQUFqQixJQUFJLEVBQWMsQ0FBQztLQUN2RDs7aUJBVFUsR0FBRzs7YUFXRixzQkFBQyxLQUFLLEVBQUU7QUFDbEIsWUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQzlDLGVBQUssQ0FBQyxXQUFXLEdBQUcscUNBQXFDLENBQUM7U0FDM0Q7T0FDRjs7O2FBRWlCLDRCQUFDLEtBQUssRUFBRTtBQUN4QixZQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUMxQixjQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QixNQUFNO0FBQ0wsY0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUI7T0FDRjs7O2FBRWEsd0JBQUMsV0FBVyxFQUFFOzs7QUFDMUIsWUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQ3ZCLGNBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDL0I7QUFDRCxZQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixZQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxTQUFTLGlDQXRDdkMsdUJBQXVCLEVBc0M0QyxJQUFJLENBQUMsa0JBQWtCLE1BQXZCLElBQUksRUFBb0IsQ0FBQztBQUNoRyxZQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBRyxZQUFBLElBQUksQ0FBQyxXQUFXLEVBQUMsR0FBRyxnQkFBQyxDQUFDO09BQzdEOzs7YUFFTyxvQkFBRzs7O0FBQ1QsZUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUMzQixJQUFJLENBQUMsVUFBQSxJQUFJO2lCQUFJLE1BQUssY0FBYyxDQUFDLE1BQUssa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUEsQ0FBQyxDQUFDO09BQzVFOzs7YUFFTSxtQkFBRztBQUNSLFlBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekIsWUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxvQkEvQzlDLFdBQVcsQ0ErQ2dELENBQUMsQ0FBQztPQUNsRTs7O2FBRUssaUJBQUMsT0FBTyxFQUFFOzs7QUFDZCxZQUFJLENBQUMsUUFBUSxVQUFPLENBQUMsT0FBTyxDQUFDLENBQzFCLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNaLGlCQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25DLGlCQUFPLE9BQUssa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FDRCxJQUFJLENBQUcsSUFBSSxDQUFDLGNBQWMsTUFBbkIsSUFBSSxFQUFnQixDQUMzQixJQUFJLENBQUM7aUJBQU0sc0JBQVMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1NBQUEsRUFBRSxVQUFBLE1BQU07aUJBQUksc0JBQVMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUFBLENBQUMsQ0FBQztPQUN6Rjs7O2VBcERVLEdBQUc7QUFBSCxPQUFHLEdBRGYsc0JBVE8sTUFBTSw2QkFDTixrQkFBa0Isa0JBSWxCLFFBQVEsc0JBRlIsV0FBVyxTQUdYLEtBQUssQ0FHNEMsQ0FDNUMsR0FBRyxLQUFILEdBQUc7V0FBSCxHQUFHIiwiZmlsZSI6InVpL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RWRpdFNlc3Npb25GYWN0b3J5fSBmcm9tICcuLi9lZGl0aW5nL2VkaXQtc2Vzc2lvbi1mYWN0b3J5JztcclxuaW1wb3J0IHtDdXJyZW50RmlsZUNoYW5nZWRFdmVudH0gZnJvbSAnLi4vZWRpdGluZy9jdXJyZW50LWZpbGUtY2hhbmdlZC1ldmVudCc7XHJcbmltcG9ydCB7UXVlcnlTdHJpbmd9IGZyb20gJy4uL2VkaXRpbmcvcXVlcnktc3RyaW5nJztcclxuaW1wb3J0IHtkZWZhdWx0R2lzdH0gZnJvbSAnLi4vZ2l0aHViL2RlZmF1bHQtZ2lzdCc7XHJcbmltcG9ydCB7SW1wb3J0ZXJ9IGZyb20gJy4uL2ltcG9ydC9pbXBvcnRlcic7XHJcbmltcG9ydCB7Rm9jdXN9IGZyb20gJy4vZm9jdXMnO1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnknO1xyXG5cclxuQGluamVjdChFZGl0U2Vzc2lvbkZhY3RvcnksIEltcG9ydGVyLCBRdWVyeVN0cmluZywgRm9jdXMpXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIGVkaXRTZXNzaW9uID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWRpdFNlc3Npb25GYWN0b3J5LCBpbXBvcnRlciwgcXVlcnlTdHJpbmcsIGZvY3VzKSB7XHJcbiAgICB0aGlzLmVkaXRTZXNzaW9uRmFjdG9yeSA9IGVkaXRTZXNzaW9uRmFjdG9yeTtcclxuICAgIHRoaXMuaW1wb3J0ZXIgPSBpbXBvcnRlcjtcclxuICAgIHRoaXMucXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZztcclxuICAgIHRoaXMuZm9jdXMgPSBmb2N1cztcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIDo6dGhpcy5iZWZvcmVVbmxvYWQpO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlVW5sb2FkKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5lZGl0U2Vzc2lvbiAmJiB0aGlzLmVkaXRTZXNzaW9uLmRpcnR5KSB7XHJcbiAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gJ1lvdSBoYXZlIHVuc2F2ZWQgd29yayBpbiB0aGlzIEdpc3QuJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1cnJlbnRGaWxlQ2hhbmdlZChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmZpbGUubmFtZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5mb2N1cy5zZXQoJ2ZpbGVuYW1lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvY3VzLnNldCgnZWRpdG9yJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFZGl0U2Vzc2lvbihlZGl0U2Vzc2lvbikge1xyXG4gICAgaWYgKHRoaXMuZmlsZUNoYW5nZWRTdWIpIHtcclxuICAgICAgdGhpcy5maWxlQ2hhbmdlZFN1Yi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVkaXRTZXNzaW9uID0gZWRpdFNlc3Npb247XHJcbiAgICB0aGlzLmZpbGVDaGFuZ2VkU3ViID0gZWRpdFNlc3Npb24uc3Vic2NyaWJlKEN1cnJlbnRGaWxlQ2hhbmdlZEV2ZW50LCA6OnRoaXMuY3VycmVudEZpbGVDaGFuZ2VkKTtcclxuICAgIHRoaXMuZWRpdFNlc3Npb24ucmVzZXRXb3JrZXIoKS50aGVuKDo6dGhpcy5lZGl0U2Vzc2lvbi5ydW4pO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeVN0cmluZy5yZWFkKClcclxuICAgICAgLnRoZW4oZ2lzdCA9PiB0aGlzLnNldEVkaXRTZXNzaW9uKHRoaXMuZWRpdFNlc3Npb25GYWN0b3J5LmNyZWF0ZShnaXN0KSkpO1xyXG4gIH1cclxuXHJcbiAgbmV3R2lzdCgpIHtcclxuICAgIHRoaXMucXVlcnlTdHJpbmcuY2xlYXIoKTtcclxuICAgIHRoaXMuc2V0RWRpdFNlc3Npb24odGhpcy5lZGl0U2Vzc2lvbkZhY3RvcnkuY3JlYXRlKGRlZmF1bHRHaXN0KSk7XHJcbiAgfVxyXG5cclxuICBpbXBvcnQodXJsT3JJZCkge1xyXG4gICAgdGhpcy5pbXBvcnRlci5pbXBvcnQodXJsT3JJZClcclxuICAgICAgLnRoZW4oZ2lzdCA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWVyeVN0cmluZy53cml0ZShnaXN0LCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0U2Vzc2lvbkZhY3RvcnkuY3JlYXRlKGdpc3QpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbig6OnRoaXMuc2V0RWRpdFNlc3Npb24pXHJcbiAgICAgIC50aGVuKCgpID0+IGFsZXJ0aWZ5LnN1Y2Nlc3MoJ0ltcG9ydCBzdWNjZXNzZnVsLicpLCByZWFzb24gPT4gYWxlcnRpZnkuZXJyb3IocmVhc29uKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;

define('text!ui/edit-file-panel.html',[],function () { return '<template bindable="editSession">\r\n  <require from="./ace-editor"></require>\r\n  <require from="./focus-target"></require>\r\n  <require from="./ga"></require>\r\n\r\n  <div class="file-header" with.bind="editSession">\r\n    <form submit.trigger="aceEditor.focus()">\r\n      <div class="input-group filename" show.bind="currentFile.name !== \'index.html\'">\r\n        <input class="form-control" type="text" placeholder="Filename including extension..."\r\n               focus-target="filename"\r\n               value.one-way="currentFile.name"\r\n               input.delegate="renameFile(currentFile, $event.target.value) & debounce:500">\r\n        <span class="input-group-button">\r\n          <button type="button" class="btn" click.delegate="deleteFile(currentFile)"\r\n                  ga ga-category="editor" ga-action="delete-file">\r\n            <span class="octicon octicon-trashcan text-closed"></span>\r\n          </button>\r\n        </span>\r\n      </div>\r\n      <input class="form-control" type="text" disabled value="index.html" show.bind="currentFile.name === \'index.html\'">\r\n\r\n      <!-- need a submit button to make enter-key submit form -->\r\n      <button type="submit" style="display:none">Submit</button>\r\n    </form>\r\n  </div>\r\n  <ace-editor view-model.ref="aceEditor"\r\n              focus-target="editor"\r\n              value.one-way="editSession.currentFile.content"\r\n              change.delegate="editSession.updateFile(editSession.currentFile, $event.detail) & debounce:800"\r\n              mode.bind="editSession.currentFile.editorMode">\r\n  </ace-editor>\r\n</template>\r\n';});


define('text!ui/edit-session-commands.html',[],function () { return '<template bindable="editSession">\r\n  <require from="./save-buttons"></require>\r\n  <require from="./ga"></require>\r\n\r\n  <button class="btn" click.delegate="editSession.addFile(\'\')"\r\n          ga ga-category="editor-commands" ga-action="new-file">\r\n    Add File\r\n  </button>\r\n\r\n  <button class="btn ${editSession.autoRun ? \'btn-danger\' : \'btn-primary\'} m-l-5"\r\n          click.delegate="editSession.toggleAutoRun()"\r\n          ga ga-category="editor-commands" ga-action="run-stop">\r\n    ${editSession.autoRun ? \'Stop\' : \'Run\'}\r\n  </button>\r\n\r\n  <input class="gist-description form-control input-contrast" type="text" placeholder="Gist description..."\r\n         value.bind="editSession.description">\r\n\r\n  <save-buttons save.call="editSession.save(fork, secret)"\r\n                public.bind="editSession.gist.public"\r\n                save-action.bind="editSession.saveAction">\r\n  </save-buttons>\r\n</template>\r\n';});


define('text!ui/embed/app.html',[],function () { return '<template>\r\n  <require from="../rate-alert"></require>\r\n  <require from="../ace-editor"></require>\r\n  <require from="../focus-target"></require>\r\n  <require from="../result-panel"></require>\r\n  <require from="../ga"></require>\r\n\r\n  <div class="embed-header" with.bind="editSession">\r\n    <img class="header-logo" src="img/logo.png">\r\n\r\n    <a class="header-title" href="https://gist.run?id=${gist.id}" target="_blank"\r\n       ga ga-category="embed-header" ga-action="link">\r\n      ${gist.description.length ? gist.description : \'untitled gist\'}\r\n    </a>\r\n\r\n    <div class="right">\r\n      <select class="form-select select-sm" value.bind="currentItem"\r\n              ga ga-category="embed-header" ga-action="picker">\r\n        <option model.bind="null">Result</option>\r\n        <optgroup label="Files:">\r\n          <option repeat.for="file of files" model.bind="file">${file.name}</option>\r\n        </optgroup>\r\n      </select>\r\n\r\n      <button class="btn btn-sm" click.delegate="reset()"\r\n              ga ga-category="embed-header" ga-action="reset">\r\n        Reset\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ace-editor with.bind="editSession"\r\n              show.bind="!showResult"\r\n              focus-target="editor"\r\n              value.one-way="currentFile.content"\r\n              change.delegate="updateFile(currentFile, $event.detail) & debounce:500"\r\n              mode.bind="currentFile.editorMode">\r\n  </ace-editor>\r\n\r\n  <result-panel show.bind="showResult"></result-panel>\r\n</template>\r\n';});

define('ui/embed/app',['exports', 'aurelia-framework', '../../editing/edit-session-factory', '../../editing/query-string', '../focus'], function (exports, _aureliaFramework, _editingEditSessionFactory, _editingQueryString, _focus) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var App = (function () {
    function App(editSessionFactory, queryString, focus) {
      _classCallCheck(this, _App);

      this.editSession = null;
      this.showResult = true;
      this._currentItem = null;

      this.editSessionFactory = editSessionFactory;
      this.queryString = queryString;
      this.focus = focus;
    }

    _createClass(App, [{
      key: 'activate',
      value: function activate() {
        var _this = this;

        return this.queryString.read().then(function (gist) {
          _this.gist = gist;
          return _this.editSessionFactory.create(gist);
        }).then(function (editSession) {
          return _this.editSession = editSession;
        });
      }
    }, {
      key: 'attached',
      value: function attached() {
        var _context;

        this.editSession.resetWorker().then((_context = this.editSession).run.bind(_context));
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.editSession = this.editSessionFactory.create(this.gist);
        this.attached();
      }
    }, {
      key: 'currentItem',
      get: function get() {
        return this._currentItem;
      },
      set: function set(item) {
        this._currentItem = item;
        if (item === null) {
          this.showResult = true;
        } else {
          this.showResult = false;
          this.editSession.currentFile = item;
          this.focus.set('editor');
        }
      }
    }]);

    var _App = App;
    App = (0, _aureliaFramework.inject)(_editingEditSessionFactory.EditSessionFactory, _editingQueryString.QueryString, _focus.Focus)(App) || App;
    return App;
  })();

  exports.App = App;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2VtYmVkL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQU1hLEdBQUc7QUFJSCxhQUpBLEdBQUcsQ0FJRixrQkFBa0IsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFOzs7V0FIcEQsV0FBVyxHQUFHLElBQUk7V0FDbEIsVUFBVSxHQUFHLElBQUk7V0FRakIsWUFBWSxHQUFHLElBQUk7O0FBTGpCLFVBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztBQUM3QyxVQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQjs7aUJBUlUsR0FBRzs7YUF5Qk4sb0JBQUc7OztBQUNULGVBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FDM0IsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ1osZ0JBQUssSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixpQkFBTyxNQUFLLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QyxDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsV0FBVztpQkFBSSxNQUFLLFdBQVcsR0FBRyxXQUFXO1NBQUEsQ0FBQyxDQUFDO09BQ3hEOzs7YUFFTyxvQkFBRzs7O0FBQ1QsWUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FDM0IsSUFBSSxDQUFHLFlBQUEsSUFBSSxDQUFDLFdBQVcsRUFBQyxHQUFHLGdCQUFDLENBQUM7T0FDakM7OzthQUVJLGlCQUFHO0FBQ04sWUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3RCxZQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7T0FDakI7OztXQS9CYyxlQUFHO0FBQ2hCLGVBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztPQUMxQjtXQUNjLGFBQUMsSUFBSSxFQUFFO0FBQ3BCLFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFlBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUNqQixjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QixNQUFNO0FBQ0wsY0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDeEIsY0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLGNBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFCO09BQ0Y7OztlQXZCVSxHQUFHO0FBQUgsT0FBRyxHQURmLHNCQUxPLE1BQU0sNkJBQ04sa0JBQWtCLHNCQUNsQixXQUFXLFNBQ1gsS0FBSyxDQUVrQyxDQUNsQyxHQUFHLEtBQUgsR0FBRztXQUFILEdBQUciLCJmaWxlIjoidWkvZW1iZWQvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFZGl0U2Vzc2lvbkZhY3Rvcnl9IGZyb20gJy4uLy4uL2VkaXRpbmcvZWRpdC1zZXNzaW9uLWZhY3RvcnknO1xyXG5pbXBvcnQge1F1ZXJ5U3RyaW5nfSBmcm9tICcuLi8uLi9lZGl0aW5nL3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCB7Rm9jdXN9IGZyb20gJy4uL2ZvY3VzJztcclxuXHJcbkBpbmplY3QoRWRpdFNlc3Npb25GYWN0b3J5LCBRdWVyeVN0cmluZywgRm9jdXMpXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIGVkaXRTZXNzaW9uID0gbnVsbDtcclxuICBzaG93UmVzdWx0ID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWRpdFNlc3Npb25GYWN0b3J5LCBxdWVyeVN0cmluZywgZm9jdXMpIHtcclxuICAgIHRoaXMuZWRpdFNlc3Npb25GYWN0b3J5ID0gZWRpdFNlc3Npb25GYWN0b3J5O1xyXG4gICAgdGhpcy5xdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nO1xyXG4gICAgdGhpcy5mb2N1cyA9IGZvY3VzO1xyXG4gIH1cclxuXHJcbiAgX2N1cnJlbnRJdGVtID0gbnVsbDtcclxuICBnZXQgY3VycmVudEl0ZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEl0ZW07XHJcbiAgfVxyXG4gIHNldCBjdXJyZW50SXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50SXRlbSA9IGl0ZW07XHJcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNob3dSZXN1bHQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93UmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZWRpdFNlc3Npb24uY3VycmVudEZpbGUgPSBpdGVtO1xyXG4gICAgICB0aGlzLmZvY3VzLnNldCgnZWRpdG9yJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5U3RyaW5nLnJlYWQoKVxyXG4gICAgICAudGhlbihnaXN0ID0+IHtcclxuICAgICAgICB0aGlzLmdpc3QgPSBnaXN0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRTZXNzaW9uRmFjdG9yeS5jcmVhdGUoZ2lzdCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGVkaXRTZXNzaW9uID0+IHRoaXMuZWRpdFNlc3Npb24gPSBlZGl0U2Vzc2lvbik7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMuZWRpdFNlc3Npb24ucmVzZXRXb3JrZXIoKVxyXG4gICAgICAudGhlbig6OnRoaXMuZWRpdFNlc3Npb24ucnVuKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lZGl0U2Vzc2lvbiA9IHRoaXMuZWRpdFNlc3Npb25GYWN0b3J5LmNyZWF0ZSh0aGlzLmdpc3QpO1xyXG4gICAgdGhpcy5hdHRhY2hlZCgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;

define('text!ui/fallback.html',[],function () { return '<template>\r\n  <section class="fallback-container">\r\n    <img alt="GistRun" src="img/logo.png">\r\n    <p>\r\n      <strong>GistRun</strong> runs and edits\r\n      <a href="https://gist.github.com/" target="_blank">GitHub Gists</a>. GistRun is\r\n      built with <a href="http://aurelia.io" target="_blank">Aurelia</a>, uses the\r\n      <a href="https://developer.github.com/v3/" target="_blank">GitHub API</a> and is hosted on\r\n      <a href="https://pages.github.com/" target="_blank">GitHub pages</a>.\r\n      <a href="https://www.cloudflare.com/" target="_blank">CloudFlare</a> provides DNS and\r\n      <a href="https://www.heroku.com/" target="_blank">Heruku</a> hosts GistRun\'s integration\r\n      with GitHub\'s OAuth <a href="https://developer.github.com/v3/oauth/#web-application-flow" target="_blank">\r\n      web application flow</a>. <em>Many thanks to the providers of these free\r\n      libraries and services!</em>\r\n    </p>\r\n    <div class="flash flash-error">\r\n      <span class="octicon octicon-alert"></span> Bummer... Your browser doesn\'t\r\n      support service workers.  Check\r\n      <a href="http://caniuse.com/#feat=serviceworkers" target="_blank">here</a> for a list of\r\n      browsers that support service workers.\r\n    </div>\r\n  </section>\r\n</template>\r\n';});

define('ui/fallback',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var UnsupportedBrowser = function UnsupportedBrowser() {
    _classCallCheck(this, UnsupportedBrowser);
  };

  exports.UnsupportedBrowser = UnsupportedBrowser;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2ZhbGxiYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztNQUFhLGtCQUFrQixZQUFsQixrQkFBa0I7MEJBQWxCLGtCQUFrQiIsImZpbGUiOiJ1aS9mYWxsYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVbnN1cHBvcnRlZEJyb3dzZXIge1xyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
;
define('ui/focus-target',['exports', 'aurelia-framework', 'aurelia-event-aggregator', './focus'], function (exports, _aureliaFramework, _aureliaEventAggregator, _focus) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var FocusTarget = (function () {
    function FocusTarget(element, eventAggregator) {
      _classCallCheck(this, _FocusTarget);

      this.element = element;
      this.eventAggregator = eventAggregator;
    }

    _createClass(FocusTarget, [{
      key: 'handleEvent',
      value: function handleEvent(e) {
        var _this = this;

        if (!e.handled && e.name === this.value) {
          e.handled = true;
          setTimeout(function () {
            return _this.element.focus();
          });
        }
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.subscription = this.eventAggregator.subscribe(_focus.SetFocusEvent, this.handleEvent.bind(this));
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.subscription.dispose();
      }
    }]);

    var _FocusTarget = FocusTarget;
    FocusTarget = (0, _aureliaFramework.inject)(Element, _aureliaEventAggregator.EventAggregator)(FocusTarget) || FocusTarget;
    FocusTarget = (0, _aureliaFramework.customAttribute)('focus-target')(FocusTarget) || FocusTarget;
    return FocusTarget;
  })();

  exports.FocusTarget = FocusTarget;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2ZvY3VzLXRhcmdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQU1hLFdBQVc7QUFDWCxhQURBLFdBQVcsQ0FDVixPQUFPLEVBQUUsZUFBZSxFQUFFOzs7QUFDcEMsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7S0FDeEM7O2lCQUpVLFdBQVc7O2FBTVgscUJBQUMsQ0FBQyxFQUFFOzs7QUFDYixZQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDdkMsV0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDakIsb0JBQVUsQ0FBQzttQkFBTSxNQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUU7V0FBQSxDQUFDLENBQUM7U0FDeEM7T0FDRjs7O2FBRU8sb0JBQUc7QUFDVCxZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxRQWxCOUMsYUFBYSxFQWtCbUQsSUFBSSxDQUFDLFdBQVcsTUFBaEIsSUFBSSxFQUFhLENBQUM7T0FDdkY7OzthQUVPLG9CQUFHO0FBQ1QsWUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztPQUM3Qjs7O3VCQW5CVSxXQUFXO0FBQVgsZUFBVyxHQUR2QixzQkFMTyxNQUFNLEVBS04sT0FBTywwQkFKUCxlQUFlLENBSVUsQ0FDcEIsV0FBVyxLQUFYLFdBQVc7QUFBWCxlQUFXLEdBRnZCLHNCQUplLGVBQWUsRUFJZCxjQUFjLENBQUMsQ0FFbkIsV0FBVyxLQUFYLFdBQVc7V0FBWCxXQUFXIiwiZmlsZSI6InVpL2ZvY3VzLXRhcmdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7U2V0Rm9jdXNFdmVudH0gZnJvbSAnLi9mb2N1cyc7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKCdmb2N1cy10YXJnZXQnKVxyXG5AaW5qZWN0KEVsZW1lbnQsIEV2ZW50QWdncmVnYXRvcilcclxuZXhwb3J0IGNsYXNzIEZvY3VzVGFyZ2V0IHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuICB9XHJcblxyXG4gIGhhbmRsZUV2ZW50KGUpIHtcclxuICAgIGlmICghZS5oYW5kbGVkICYmIGUubmFtZSA9PT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICBlLmhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5mb2N1cygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoU2V0Rm9jdXNFdmVudCwgOjp0aGlzLmhhbmRsZUV2ZW50KTtcclxuICB9XHJcblxyXG4gIGRldGFjaGVkKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
define('ui/ga',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var GaCustomAttribute = (function () {
    function GaCustomAttribute(element) {
      _classCallCheck(this, _GaCustomAttribute);

      this.element = element;
      this.boundClick = this.click.bind(this);
      this.event = element instanceof HTMLFormElement ? 'submit' : 'click';
    }

    _createClass(GaCustomAttribute, [{
      key: 'click',
      value: function click(event) {
        ga('send', 'event', this.element.getAttribute('ga-category'), this.element.getAttribute('ga-action'));
        return true;
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.element.addEventListener(this.event, this.boundClick);
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.element.removeEventListener(this.event, this.boundClick);
      }
    }]);

    var _GaCustomAttribute = GaCustomAttribute;
    GaCustomAttribute = (0, _aureliaFramework.inject)(Element)(GaCustomAttribute) || GaCustomAttribute;
    return GaCustomAttribute;
  })();

  exports.GaCustomAttribute = GaCustomAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2dhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BR2EsaUJBQWlCO0FBQ2pCLGFBREEsaUJBQWlCLENBQ2hCLE9BQU8sRUFBRTs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsVUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLFlBQVksZUFBZSxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUM7S0FDdEU7O2lCQUxVLGlCQUFpQjs7YUFPdkIsZUFBQyxLQUFLLEVBQUU7QUFDWCxVQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ3RHLGVBQU8sSUFBSSxDQUFDO09BQ2I7OzthQUVPLG9CQUFHO0FBQ1QsWUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUM1RDs7O2FBRU8sb0JBQUc7QUFDVCxZQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO09BQy9EOzs7NkJBbEJVLGlCQUFpQjtBQUFqQixxQkFBaUIsR0FEN0Isc0JBRk8sTUFBTSxFQUVOLE9BQU8sQ0FBQyxDQUNILGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCIiwiZmlsZSI6InVpL2dhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEdhQ3VzdG9tQXR0cmlidXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5ib3VuZENsaWNrID0gdGhpcy5jbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5ldmVudCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgPyAnc3VibWl0JyA6ICdjbGljayc7XHJcbiAgfVxyXG5cclxuICBjbGljayhldmVudCkge1xyXG4gICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdnYS1jYXRlZ29yeScpLCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdnYS1hY3Rpb24nKSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5ib3VuZENsaWNrKTtcclxuICB9XHJcblxyXG4gIGRldGFjaGVkKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5ib3VuZENsaWNrKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;

define('text!ui/header.html',[],function () { return '<template>\r\n  <require from="./ga"></require>\r\n\r\n  <img class="header-logo" src="img/logo.png">\r\n\r\n  <form class="header-load-gist" submit.delegate="import({ urlOrId: urlOrIdInput.value})"\r\n        ga ga-category="header" ga-action="import">\r\n    <div class="input-group">\r\n      <input class="form-control input-sm" type="text" placeholder="Gist/Plunker/jsFiddle URL..." ref="urlOrIdInput">\r\n      <span class="input-group-button">\r\n        <button class="btn btn-sm" type="submit">\r\n          <span class="octicon octicon-repo-pull"></span>\r\n        </button>\r\n      </span>\r\n    </div>\r\n  </form>\r\n\r\n  <a class="tooltipped tooltipped-sw right"\r\n     href="https://gist.github.com/${user.login}" target="_blank"\r\n     show.bind="user.authenticated"\r\n     aria-label="Signed in as ${user.login}"\r\n     ga ga-category="header" ga-action="avatar">\r\n    <img class="avatar avatar-small"\r\n         src.bind="user.avatar_url + \'?v=3&s=32\'"\r\n         width="26" height="26">\r\n  </a>\r\n\r\n  <button class="btn btn-sm right" type="button"\r\n          show.bind="!user.authenticated"\r\n          disabled.bind="user.loading"\r\n          click.delegate="user.signIn()"\r\n          ga ga-category="header" ga-action="sign-in">\r\n    Sign In\r\n  </button>\r\n\r\n  <button class="btn btn-sm right" type="button"\r\n          click.delegate="new()"\r\n          ga ga-category="nav-panel" ga-action="new">\r\n    New Gist\r\n  </button>\r\n</template>\r\n';});

define('ui/header',['exports', 'aurelia-framework', '../github/user'], function (exports, _aureliaFramework, _githubUser) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var Header = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Header, [{
      key: 'import',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'new',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function Header(user) {
      _classCallCheck(this, _Header);

      _defineDecoratedPropertyDescriptor(this, 'import', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'new', _instanceInitializers);

      this.user = user;
    }

    var _Header = Header;
    Header = (0, _aureliaFramework.inject)(_githubUser.User)(Header) || Header;
    return Header;
  })();

  exports.Header = Header;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BSWEsTUFBTTs7OzBCQUFOLE1BQU07O3FDQUpILFFBQVE7Ozs7O3FDQUFSLFFBQVE7Ozs7O0FBUVgsYUFKQSxNQUFNLENBSUwsSUFBSSxFQUFFOzs7Ozs7O0FBQ2hCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOztrQkFOVSxNQUFNO0FBQU4sVUFBTSxHQURsQixzQkFITyxNQUFNLGNBQ04sSUFBSSxDQUVDLENBQ0EsTUFBTSxLQUFOLE1BQU07V0FBTixNQUFNIiwiZmlsZSI6InVpL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL2dpdGh1Yi91c2VyJztcclxuXHJcbkBpbmplY3QoVXNlcilcclxuZXhwb3J0IGNsYXNzIEhlYWRlciB7XHJcbiAgQGJpbmRhYmxlIGltcG9ydDtcclxuICBAYmluZGFibGUgbmV3O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1c2VyKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;

define('text!ui/nav-panel.html',[],function () { return '<template>\r\n  <require from="./ga"></require>\r\n\r\n  <nav class="menu">\r\n    <a repeat.for="file of editSession.files"\r\n       class="menu-item ${editSession.currentFile === file ? \'selected\' : \'\'}"\r\n       href="#"\r\n       click.delegate="editSession.currentFile = file"\r\n       ga ga-category="nav-panel" ga-action="file">\r\n       <span class="unnamed-file" show.bind="file.name === \'\'">unnamed</span>\r\n       <span show.bind="file.name !== \'\'">${file.name}</span>\r\n   </a>\r\n  </nav>\r\n\r\n  <nav class="menu">\r\n    <a class="menu-item" href="${editSession.gist.html_url}" target="_blank"\r\n       show.bind="editSession.gist.html_url"\r\n       ga ga-category="nav-panel" ga-action="gist">\r\n      <span class="octicon octicon-gist"></span>\r\n      Gist\r\n    </a>\r\n    <a class="menu-item" href="${editSession.gist.html_url}/revisions" target="_blank"\r\n       show.bind="editSession.gist.html_url"\r\n       ga ga-category="nav-panel" ga-action="revisions">\r\n      <span class="octicon octicon-git-commit"></span>\r\n      <span class="counter">${editSession.gist.history.length || 0}</span>\r\n      Revisions\r\n    </a>\r\n    <a class="menu-item" href="${editSession.gist.html_url}/forks" target="_blank"\r\n       show.bind="editSession.gist.html_url"\r\n       ga ga-category="nav-panel" ga-action="forks">\r\n      <span class="octicon octicon-repo-forked"></span>\r\n      <span class="counter">${editSession.gist.forks.length || 0}</span>\r\n      Forks\r\n    </a>\r\n    <a class="menu-item" href="#" click.delegate="copyForStackOverflow()"\r\n       show.bind="editSession.gist.html_url"\r\n       ga ga-category="nav-panel" ga-action="stack-overflow-copy">\r\n      <img class="octicon" style="margin-bottom: -3px" src="img/stack-overflow-icon.png" height="16" width="16">\r\n      Copy\r\n    </a>\r\n    <a class="menu-item" href="embed.html?id=${editSession.gist.id}" target="_blank"\r\n       show.bind="editSession.gist.html_url"\r\n       ga ga-category="nav-panel" ga-action="embed">\r\n      <span class="octicon octicon-code"></span>\r\n      Embed\r\n    </a>\r\n    <!-- <a class="menu-item" href.bind="runUrl" target="_blank">\r\n      <span class="octicon octicon-link-external"></span>\r\n      Run Outside\r\n    </a> -->\r\n    <a class="menu-item" href="https://github.com/gist-run/gist-run/blob/master/README.md" target="_blank"\r\n       ga ga-category="nav-panel" ga-action="about">\r\n      <span class="octicon octicon-info"></span>\r\n      About\r\n    </a>\r\n  </nav>\r\n</template>\r\n';});

define('ui/stack-overflow-markdown',['exports', '../util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.getStackOverflowMarkdown = getStackOverflowMarkdown;

  function indentCode(code) {
    return code.replace(/^/mg, '    ');
  }

  function formatFile(file) {
    var name = file.name;
    var extension = (0, _util.getExtension)(name);
    var content = indentCode(file.content.trim());
    return '**' + name + '**\n\n<!-- language: lang-' + extension + ' -->\n\n' + content;
  }

  function getStackOverflowMarkdown(editSession) {
    return '**Here\'s an example: https://gist.run?id=' + editSession.gist.id + '**\n\n' + editSession.files.map(function (file) {
      return formatFile(file);
    }).join('\n\n');
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3N0YWNrLW92ZXJmbG93LW1hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsV0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ3hCLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDcEM7O0FBRUQsV0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ3hCLFFBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDdkIsUUFBTSxTQUFTLEdBQUcsVUFSWixZQUFZLEVBUWEsSUFBSSxDQUFDLENBQUM7QUFDckMsUUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoRCxrQkFBWSxJQUFJLGtDQUE2QixTQUFTLGdCQUFXLE9BQU8sQ0FBRztHQUM1RTs7QUFFTSxXQUFTLHdCQUF3QixDQUFDLFdBQVcsRUFBRTtBQUNwRCxXQUFPLCtDQUE0QyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBVyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7YUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDO0tBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUMvSSIsImZpbGUiOiJ1aS9zdGFjay1vdmVyZmxvdy1tYXJrZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0RXh0ZW5zaW9ufSBmcm9tICcuLi91dGlsJztcclxuXHJcbmZ1bmN0aW9uIGluZGVudENvZGUoY29kZSkge1xyXG4gIHJldHVybiBjb2RlLnJlcGxhY2UoL14vbWcsICcgICAgJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdEZpbGUoZmlsZSkge1xyXG4gIGNvbnN0IG5hbWUgPSBmaWxlLm5hbWU7XHJcbiAgY29uc3QgZXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uKG5hbWUpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBpbmRlbnRDb2RlKGZpbGUuY29udGVudC50cmltKCkpO1xyXG4gIHJldHVybiBgKioke25hbWV9KipcXG5cXG48IS0tIGxhbmd1YWdlOiBsYW5nLSR7ZXh0ZW5zaW9ufSAtLT5cXG5cXG4ke2NvbnRlbnR9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YWNrT3ZlcmZsb3dNYXJrZG93bihlZGl0U2Vzc2lvbikge1xyXG4gIHJldHVybiBgKipIZXJlJ3MgYW4gZXhhbXBsZTogaHR0cHM6Ly9naXN0LnJ1bj9pZD0ke2VkaXRTZXNzaW9uLmdpc3QuaWR9KipcXG5cXG5gICsgZWRpdFNlc3Npb24uZmlsZXMubWFwKGZpbGUgPT4gZm9ybWF0RmlsZShmaWxlKSkuam9pbignXFxuXFxuJyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;
define('ui/nav-panel',['exports', 'aurelia-framework', './stack-overflow-markdown', '../util', '../worker/worker-client', 'alertify'], function (exports, _aureliaFramework, _stackOverflowMarkdown, _util, _workerWorkerClient, _alertify) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _alertify2 = _interopRequireDefault(_alertify);

  var successHtml = '<img class="octicon" style="margin-bottom: -3px" src="img/stack-overflow-icon.png" height="16" width="16"> Stack Overflow markdown copied.';

  var NavPanel = (function () {
    var _instanceInitializers = {};

    function NavPanel() {
      _classCallCheck(this, NavPanel);

      _defineDecoratedPropertyDescriptor(this, 'editSession', _instanceInitializers);

      this.runUrl = _workerWorkerClient.runUrl;
    }

    _createDecoratedClass(NavPanel, [{
      key: 'copyForStackOverflow',
      value: function copyForStackOverflow() {
        var markdown = (0, _stackOverflowMarkdown.getStackOverflowMarkdown)(this.editSession);
        (0, _util.copyTextToClipboard)(markdown);
        _alertify2['default'].success(successHtml);
      }
    }, {
      key: 'editSession',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    return NavPanel;
  })();

  exports.NavPanel = NavPanel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL25hdi1wYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLE1BQU0sV0FBVywrSUFBK0ksQ0FBQzs7TUFFcEosUUFBUTs7O2FBQVIsUUFBUTs0QkFBUixRQUFROzs7O1dBRW5CLE1BQU0sdUJBUEEsTUFBTTs7OzBCQUtELFFBQVE7O2FBSUMsZ0NBQUc7QUFDckIsWUFBSSxRQUFRLEdBQUcsMkJBWlgsd0JBQXdCLEVBWVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELGtCQVpJLG1CQUFtQixFQVlILFFBQVEsQ0FBQyxDQUFDO0FBQzlCLDhCQUFTLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUMvQjs7O3FDQWhCSyxRQUFROzs7OztXQVFILFFBQVEiLCJmaWxlIjoidWkvbmF2LXBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2dldFN0YWNrT3ZlcmZsb3dNYXJrZG93bn0gZnJvbSAnLi9zdGFjay1vdmVyZmxvdy1tYXJrZG93bic7XHJcbmltcG9ydCB7Y29weVRleHRUb0NsaXBib2FyZH0gZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7cnVuVXJsfSBmcm9tICcuLi93b3JrZXIvd29ya2VyLWNsaWVudCc7XHJcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeSc7XHJcblxyXG5jb25zdCBzdWNjZXNzSHRtbCA9IGA8aW1nIGNsYXNzPVwib2N0aWNvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogLTNweFwiIHNyYz1cImltZy9zdGFjay1vdmVyZmxvdy1pY29uLnBuZ1wiIGhlaWdodD1cIjE2XCIgd2lkdGg9XCIxNlwiPiBTdGFjayBPdmVyZmxvdyBtYXJrZG93biBjb3BpZWQuYDtcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZQYW5lbCB7XHJcbiAgQGJpbmRhYmxlIGVkaXRTZXNzaW9uO1xyXG4gIHJ1blVybCA9IHJ1blVybDtcclxuXHJcbiAgY29weUZvclN0YWNrT3ZlcmZsb3coKSB7XHJcbiAgICBsZXQgbWFya2Rvd24gPSBnZXRTdGFja092ZXJmbG93TWFya2Rvd24odGhpcy5lZGl0U2Vzc2lvbik7XHJcbiAgICBjb3B5VGV4dFRvQ2xpcGJvYXJkKG1hcmtkb3duKTtcclxuICAgIGFsZXJ0aWZ5LnN1Y2Nlc3Moc3VjY2Vzc0h0bWwpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;

define('text!ui/rate-alert.html',[],function () { return '<template>\r\n  <div class="flash text-center"\r\n       if.bind="!user.loading && !user.authenticated && !rateInfoDismissed && rateLimit.remaining > 10">\r\n    <span class="octicon octicon-x flash-close js-flash-close" click.delegate="rateInfoDismissed = true"></span>\r\n    <span class="octicon octicon-info"></span> Pro Tip: <a href="#" click.delegate="user.signIn()">Sign in</a> to save gists to your GitHub account.\r\n  </div>\r\n  <div class="flash flash-warn text-center"\r\n       if.bind="!user.loading && !user.authenticated && !rateWarningDismissed && rateLimit.remaining <= 10 && rateLimit.remaining !== 0">\r\n    <span class="octicon octicon-x flash-close js-flash-close" click.delegate="rateWarningDismissed = true"></span>\r\n    <span class="octicon octicon-alert"></span> Uh oh... you\'re about to hit GitHub\'s rate limit for unauthenticated requests. <a href="#" click.delegate="user.signIn()">Sign in</a> to increase your rate limit.&nbsp;&nbsp;<em>${rateLimit.remaining} requests remaining.</em>\r\n  </div>\r\n  <div class="flash flash-error text-center"\r\n       if.bind="!user.loading && !user.authenticated && !rateErrorDismissed && rateLimit.remaining === 0">\r\n    <span class="octicon octicon-x flash-close js-flash-close" click.delegate="rateErrorDismissed = true"></span>\r\n    <span class="octicon octicon-alert"></span> On snap! You\'ve hit GitHub\'s rate limit for unauthenticated requests. <a href="#" click.delegate="user.signIn()">Sign in</a> to increase your rate limit.&nbsp;&nbsp;<em>Resets at ${rateLimit.reset}.</em>\r\n  </div>\r\n</template>\r\n';});

define('ui/rate-alert',['exports', 'aurelia-framework', '../github/rate-limit', '../github/user'], function (exports, _aureliaFramework, _githubRateLimit, _githubUser) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var RateAlert = (function () {
    function RateAlert(rateLimit, user) {
      _classCallCheck(this, _RateAlert);

      this.rateLimit = rateLimit;
      this.user = user;
    }

    var _RateAlert = RateAlert;
    RateAlert = (0, _aureliaFramework.inject)(_githubRateLimit.RateLimit, _githubUser.User)(RateAlert) || RateAlert;
    return RateAlert;
  })();

  exports.RateAlert = RateAlert;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3JhdGUtYWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O01BS2EsU0FBUztBQUNULGFBREEsU0FBUyxDQUNSLFNBQVMsRUFBRSxJQUFJLEVBQUU7OztBQUMzQixVQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7cUJBSlUsU0FBUztBQUFULGFBQVMsR0FEckIsc0JBSk8sTUFBTSxtQkFDTixTQUFTLGNBQ1QsSUFBSSxDQUVZLENBQ1gsU0FBUyxLQUFULFNBQVM7V0FBVCxTQUFTIiwiZmlsZSI6InVpL3JhdGUtYWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JhdGVMaW1pdH0gZnJvbSAnLi4vZ2l0aHViL3JhdGUtbGltaXQnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL2dpdGh1Yi91c2VyJztcclxuXHJcbkBpbmplY3QoUmF0ZUxpbWl0LCBVc2VyKVxyXG5leHBvcnQgY2xhc3MgUmF0ZUFsZXJ0IHtcclxuICBjb25zdHJ1Y3RvcihyYXRlTGltaXQsIHVzZXIpIHtcclxuICAgIHRoaXMucmF0ZUxpbWl0ID0gcmF0ZUxpbWl0O1xyXG4gICAgdGhpcy51c2VyID0gdXNlcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;

define('text!ui/result-panel.html',[],function () { return '<template>  \r\n  <iframe ref="iframe" frameborder="0"></iframe>\r\n</template>\r\n';});

define('ui/result-panel',['exports', '../worker/worker-client', '../editing/run-event'], function (exports, _workerWorkerClient, _editingRunEvent) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ResultPanel = (function () {
    function ResultPanel() {
      _classCallCheck(this, ResultPanel);
    }

    _createClass(ResultPanel, [{
      key: 'run',
      value: function run() {
        this.iframe.src = _workerWorkerClient.runUrl;
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.subscription = _editingRunEvent.RunEvent.subscribe(this.run.bind(this));
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.subscription.dispose();
      }
    }]);

    return ResultPanel;
  })();

  exports.ResultPanel = ResultPanel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3Jlc3VsdC1wYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQUdhLFdBQVc7YUFBWCxXQUFXOzRCQUFYLFdBQVc7OztpQkFBWCxXQUFXOzthQUNuQixlQUFHO0FBQ0osWUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLHVCQUxYLE1BQU0sQUFLYyxDQUFDO09BQzFCOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxZQUFZLEdBQUcsaUJBUmhCLFFBQVEsQ0FRaUIsU0FBUyxDQUFHLElBQUksQ0FBQyxHQUFHLE1BQVIsSUFBSSxFQUFLLENBQUM7T0FDcEQ7OzthQUVPLG9CQUFHO0FBQ1QsWUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztPQUM3Qjs7O1dBWFUsV0FBVyIsImZpbGUiOiJ1aS9yZXN1bHQtcGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3J1blVybH0gZnJvbSAnLi4vd29ya2VyL3dvcmtlci1jbGllbnQnO1xyXG5pbXBvcnQge1J1bkV2ZW50fSBmcm9tICcuLi9lZGl0aW5nL3J1bi1ldmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0UGFuZWwge1xyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuaWZyYW1lLnNyYyA9IHJ1blVybDtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBSdW5FdmVudC5zdWJzY3JpYmUoOjp0aGlzLnJ1bik7XHJcbiAgfVxyXG5cclxuICBkZXRhY2hlZCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
;

define('text!ui/save-buttons.html',[],function () { return '<template>\r\n  <require from="./ga"></require>\r\n\r\n  <button class="btn btn-secret tooltipped tooltipped-s" aria-label="Secret gists are hidden from search engines but visible to anyone you give the URL."\r\n          click.delegate="saveClick($event, { fork: false, secret: true })"\r\n          show.bind="saveAction !== \'Update\'"\r\n          ga ga-category="editor-commands" ga-action="fork-secret">\r\n    ${saveAction === \'Fork\' ? \'Fork to\' : \'Create\'} Secret Gist\r\n  </button>\r\n  <button class="btn m-l-5" click.delegate="saveClick($event, { fork: false, secret: false })"\r\n          show.bind="saveAction !== \'Update\'"\r\n          ga ga-category="editor-commands" ga-action="fork-public">\r\n    ${saveAction === \'Fork\' ? \'Fork to\' : \'Create\'} Public Gist\r\n  </button>\r\n\r\n  <button class="btn btn-primary" click.delegate="saveClick($event, { fork: false })"\r\n          show.bind="saveAction === \'Update\'"\r\n          ga ga-category="editor-commands" ga-action="update">\r\n    Update${public ? \' \' : \' Secret \'}Gist\r\n  </button>\r\n  <button class="btn m-l-5" click.delegate="saveClick($event, { fork: true })"\r\n          show.bind="saveAction === \'Update\'"\r\n          ga ga-category="editor-commands" ga-action="fork">\r\n    Fork${public ? \' \' : \' Secret \'}Gist\r\n  </button>\r\n</template>\r\n';});

define('ui/save-buttons',['exports', 'aurelia-framework', 'alertify'], function (exports, _aureliaFramework, _alertify) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _alertify2 = _interopRequireDefault(_alertify);

  var SaveButtons = (function () {
    var _instanceInitializers = {};

    function SaveButtons() {
      _classCallCheck(this, _SaveButtons);

      _defineDecoratedPropertyDescriptor(this, 'save', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'public', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'saveAction', _instanceInitializers);
    }

    _createDecoratedClass(SaveButtons, [{
      key: 'saveClick',
      value: function saveClick(event, instruction) {
        var message = event.target.textContent;
        this.save(instruction).then(function () {
          return _alertify2['default'].success(message + ' succeeded.');
        }, function () {
          return _alertify2['default'].error(message + ' failed.');
        });
      }
    }, {
      key: 'save',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'public',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'saveAction',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    var _SaveButtons = SaveButtons;
    SaveButtons = (0, _aureliaFramework.containerless)()(SaveButtons) || SaveButtons;
    return SaveButtons;
  })();

  exports.SaveButtons = SaveButtons;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3NhdmUtYnV0dG9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQUlhLFdBQVc7OzthQUFYLFdBQVc7Ozs7Ozs7Ozs7MEJBQVgsV0FBVzs7YUFLYixtQkFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFO0FBQzVCLFlBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3ZDLFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQ25CLElBQUksQ0FDSDtpQkFBTSxzQkFBUyxPQUFPLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUFBLEVBQy9DO2lCQUFNLHNCQUFTLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQUEsQ0FBQyxDQUFDO09BQ2pEOzs7cUNBZm9CLFFBQVE7Ozs7O3FDQUFSLFFBQVE7Ozs7O3FDQUFSLFFBQVE7Ozs7O3VCQUlsQixXQUFXO0FBQVgsZUFBVyxHQUR2QixzQkFITyxhQUFhLEdBR0wsQ0FDSCxXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoidWkvc2F2ZS1idXR0b25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnknO1xyXG5cclxuQGNvbnRhaW5lcmxlc3MoKVxyXG5leHBvcnQgY2xhc3MgU2F2ZUJ1dHRvbnMge1xyXG4gIEBiaW5kYWJsZSBzYXZlO1xyXG4gIEBiaW5kYWJsZSBwdWJsaWM7XHJcbiAgQGJpbmRhYmxlIHNhdmVBY3Rpb247XHJcblxyXG4gIHNhdmVDbGljayhldmVudCwgaW5zdHJ1Y3Rpb24pIHtcclxuICAgIGxldCBtZXNzYWdlID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgdGhpcy5zYXZlKGluc3RydWN0aW9uKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAoKSA9PiBhbGVydGlmeS5zdWNjZXNzKG1lc3NhZ2UgKyAnIHN1Y2NlZWRlZC4nKSxcclxuICAgICAgICAoKSA9PiBhbGVydGlmeS5lcnJvcihtZXNzYWdlICsgJyBmYWlsZWQuJykpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;

define('text!ui/split-panel.html',[],function () { return '<template>\r\n  <div class="split">\r\n    <template replaceable part="left">\r\n      [Left]\r\n    </template>\r\n  </div>\r\n  <div class="split">\r\n    <template replaceable part="center">\r\n      [Center]\r\n    </template>\r\n  </div>\r\n  <div class="split">\r\n    <template replaceable part="right">\r\n      [Right]\r\n    </template>\r\n  </div>\r\n</template>\r\n';});




(function() {

var global = this
  , addEventListener = 'addEventListener'
  , removeEventListener = 'removeEventListener'
  , getBoundingClientRect = 'getBoundingClientRect'
  , isIE8 = global.attachEvent && !global[addEventListener]
  , document = global.document

  , calc = (function () {
        var el
          , prefixes = ["", "-webkit-", "-moz-", "-o-"]

        for (var i = 0; i < prefixes.length; i++) {
            el = document.createElement('div')
            el.style.cssText = "width:" + prefixes[i] + "calc(9px)"

            if (el.style.length) {
                return prefixes[i] + "calc"
            }
        }
    })()
  , elementOrSelector = function (el) {
        if (typeof el === 'string' || el instanceof String) {
            return document.querySelector(el)
        } else {
            return el
        }
    }

  , Split = function (ids, options) {
    var dimension
      , i
      , clientDimension
      , clientAxis
      , position
      , gutterClass
      , paddingA
      , paddingB
      , pairs = []

    // Set defaults

    options = typeof options !== 'undefined' ?  options : {}

    if (!options.gutterSize) options.gutterSize = 10
    if (!options.minSize) options.minSize = 100
    if (!options.snapOffset) options.snapOffset = 30
    if (!options.direction) options.direction = 'horizontal'

    if (options.direction == 'horizontal') {
        dimension = 'width'
        clientDimension = 'clientWidth'
        clientAxis = 'clientX'
        position = 'left'
        gutterClass = 'gutter gutter-horizontal'
        paddingA = 'paddingLeft'
        paddingB = 'paddingRight'
        if (!options.cursor) options.cursor = 'ew-resize'
    } else if (options.direction == 'vertical') {
        dimension = 'height'
        clientDimension = 'clientHeight'
        clientAxis = 'clientY'
        position = 'top'
        gutterClass = 'gutter gutter-vertical'
        paddingA = 'paddingTop'
        paddingB = 'paddingBottom'
        if (!options.cursor) options.cursor = 'ns-resize'
    }

    // Event listeners for drag events, bound to a pair object.
    // Calculate the pair's position and size when dragging starts.
    // Prevent selection on start and re-enable it when done.

    var startDragging = function (e) {
            var self = this
              , a = self.a
              , b = self.b

            if (!self.dragging && options.onDragStart) {
                options.onDragStart()
            }

            e.preventDefault()

            self.dragging = true
            self.move = drag.bind(self)
            self.stop = stopDragging.bind(self)

            global[addEventListener]('mouseup', self.stop)
            global[addEventListener]('touchend', self.stop)
            global[addEventListener]('touchcancel', self.stop)

            self.parent[addEventListener]('mousemove', self.move)
            self.parent[addEventListener]('touchmove', self.move)

            a[addEventListener]('selectstart', preventSelection)
            a[addEventListener]('dragstart', preventSelection)
            b[addEventListener]('selectstart', preventSelection)
            b[addEventListener]('dragstart', preventSelection)

            a.style.userSelect = 'none'
            a.style.webkitUserSelect = 'none'
            a.style.MozUserSelect = 'none'
            a.style.pointerEvents = 'none'

            b.style.userSelect = 'none'
            b.style.webkitUserSelect = 'none'
            b.style.MozUserSelect = 'none'
            b.style.pointerEvents = 'none'

            self.gutter.style.cursor = options.cursor
            self.parent.style.cursor = options.cursor

            calculateSizes.call(self)
        }
      , stopDragging = function () {
            var self = this
              , a = self.a
              , b = self.b

            if (self.dragging && options.onDragEnd) {
                options.onDragEnd()
            }

            self.dragging = false

            global[removeEventListener]('mouseup', self.stop)
            global[removeEventListener]('touchend', self.stop)
            global[removeEventListener]('touchcancel', self.stop)

            self.parent[removeEventListener]('mousemove', self.move)
            self.parent[removeEventListener]('touchmove', self.move)

            delete self.stop
            delete self.move

            a[removeEventListener]('selectstart', preventSelection)
            a[removeEventListener]('dragstart', preventSelection)
            b[removeEventListener]('selectstart', preventSelection)
            b[removeEventListener]('dragstart', preventSelection)

            a.style.userSelect = ''
            a.style.webkitUserSelect = ''
            a.style.MozUserSelect = ''
            a.style.pointerEvents = ''

            b.style.userSelect = ''
            b.style.webkitUserSelect = ''
            b.style.MozUserSelect = ''
            b.style.pointerEvents = ''

            self.gutter.style.cursor = ''
            self.parent.style.cursor = ''
        }
      , drag = function (e) {
            var offset

            if (!this.dragging) return

            // Get the relative position of the event from the first side of the
            // pair.

            if ('touches' in e) {
                offset = e.touches[0][clientAxis] - this.start
            } else {
                offset = e[clientAxis] - this.start
            }

            // If within snapOffset of min or max, set offset to min or max

            if (offset <=  this.aMin + options.snapOffset) {
                offset = this.aMin
            } else if (offset >= this.size - this.bMin - options.snapOffset) {
                offset = this.size - this.bMin
            }

            adjust.call(this, offset)

            if (options.onDrag) {
                options.onDrag()
            }
        }
      , calculateSizes = function () {
            // Calculate the pairs size, and percentage of the parent size
            var computedStyle = global.getComputedStyle(this.parent)
              , parentSize = this.parent[clientDimension] - parseFloat(computedStyle[paddingA]) - parseFloat(computedStyle[paddingB])

            this.size = this.a[getBoundingClientRect]()[dimension] + this.b[getBoundingClientRect]()[dimension] + this.aGutterSize + this.bGutterSize
            this.percentage = Math.min(this.size / parentSize * 100, 100)
            this.start = this.a[getBoundingClientRect]()[position]
        }
      , adjust = function (offset) {
            // A size is the same as offset. B size is total size - A size.
            // Both sizes are calculated from the initial parent percentage.

            this.a.style[dimension] = calc + '(' + (offset / this.size * this.percentage) + '% - ' + this.aGutterSize + 'px)'
            this.b.style[dimension] = calc + '(' + (this.percentage - (offset / this.size * this.percentage)) + '% - ' + this.bGutterSize + 'px)'
        }
      , fitMin = function () {
            var self = this
              , a = self.a
              , b = self.b

            if (a[getBoundingClientRect]()[dimension] < self.aMin) {
                a.style[dimension] = (self.aMin - self.aGutterSize) + 'px'
                b.style[dimension] = (self.size - self.aMin - self.aGutterSize) + 'px'
            } else if (b[getBoundingClientRect]()[dimension] < self.bMin) {
                a.style[dimension] = (self.size - self.bMin - self.bGutterSize) + 'px'
                b.style[dimension] = (self.bMin - self.bGutterSize) + 'px'
            }
        }
      , fitMinReverse = function () {
            var self = this
              , a = self.a
              , b = self.b

            if (b[getBoundingClientRect]()[dimension] < self.bMin) {
                a.style[dimension] = (self.size - self.bMin - self.bGutterSize) + 'px'
                b.style[dimension] = (self.bMin - self.bGutterSize) + 'px'
            } else if (a[getBoundingClientRect]()[dimension] < self.aMin) {
                a.style[dimension] = (self.aMin - self.aGutterSize) + 'px'
                b.style[dimension] = (self.size - self.aMin - self.aGutterSize) + 'px'
            }
        }
      , balancePairs = function (pairs) {
            for (var i = 0; i < pairs.length; i++) {
                calculateSizes.call(pairs[i])
                fitMin.call(pairs[i])
            }

            for (i = pairs.length - 1; i >= 0; i--) {
                calculateSizes.call(pairs[i])
                fitMinReverse.call(pairs[i])
            }
        }
      , preventSelection = function () { return false }
      , parent = elementOrSelector(ids[0]).parentNode

    if (!options.sizes) {
        var percent = 100 / ids.length

        options.sizes = []

        for (i = 0; i < ids.length; i++) {
            options.sizes.push(percent)
        }
    }

    if (!Array.isArray(options.minSize)) {
        var minSizes = []

        for (i = 0; i < ids.length; i++) {
            minSizes.push(options.minSize)
        }

        options.minSize = minSizes
    }

    for (i = 0; i < ids.length; i++) {
        var el = elementOrSelector(ids[i])
          , isFirst = (i == 1)
          , isLast = (i == ids.length - 1)
          , size
          , gutterSize = options.gutterSize
          , pair

        if (i > 0) {
            pair = {
                a: elementOrSelector(ids[i - 1]),
                b: el,
                aMin: options.minSize[i - 1],
                bMin: options.minSize[i],
                dragging: false,
                parent: parent,
                isFirst: isFirst,
                isLast: isLast,
                direction: options.direction
            }

            // For first and last pairs, first and last gutter width is half.

            pair.aGutterSize = options.gutterSize
            pair.bGutterSize = options.gutterSize

            if (isFirst) {
                pair.aGutterSize = options.gutterSize / 2
            }

            if (isLast) {
                pair.bGutterSize = options.gutterSize / 2
            }
        }

        // IE9 and above
        if (!isIE8) {
            if (i > 0) {
                var gutter = document.createElement('div')

                gutter.className = gutterClass
                gutter.style[dimension] = options.gutterSize + 'px'

                gutter[addEventListener]('mousedown', startDragging.bind(pair))
                gutter[addEventListener]('touchstart', startDragging.bind(pair))

                parent.insertBefore(gutter, el)

                pair.gutter = gutter
            }

            if (i === 0 || i == ids.length - 1) {
                gutterSize = options.gutterSize / 2
            }

            if (typeof options.sizes[i] === 'string' || options.sizes[i] instanceof String) {
                size = options.sizes[i]
            } else {
                size = calc + '(' + options.sizes[i] + '% - ' + gutterSize + 'px)'
            }

        // IE8 and below
        } else {
            if (typeof options.sizes[i] === 'string' || options.sizes[i] instanceof String) {
                size = options.sizes[i]
            } else {
                size = options.sizes[i] + '%'
            }
        }

        el.style[dimension] = size

        if (i > 0) {
            pairs.push(pair)
        }
    }

    balancePairs(pairs)
}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = Split
    }
    exports.Split = Split
} else {
    global.Split = Split
}

}).call(window)
;
define("split", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Split;
    };
}(this)));

define('ui/split-panel',['exports', 'split', 'aurelia-framework', 'aurelia-pal'], function (exports, _split, _aureliaFramework, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Split = _interopRequireDefault(_split);

  var SplitPanel = (function () {
    function SplitPanel(element) {
      _classCallCheck(this, _SplitPanel);

      this.element = element;
    }

    _createClass(SplitPanel, [{
      key: 'attached',
      value: function attached() {
        var _this = this;

        var panels = Array.prototype.slice.call(this.element.querySelectorAll('.split'));

        (0, _Split['default'])(panels, {
          sizes: [10, 50, 40],
          gutterSize: 15,
          minSize: 200,
          snapOffset: 1,
          onDrag: function onDrag() {
            var event = _aureliaPal.DOM.createCustomEvent('resize', { bubbles: true });
            _this.element.dispatchEvent(event);
          }
        });

        panels[2].style.cssText = panels[2].style.cssText.replace('2px', '6px');
      }
    }]);

    var _SplitPanel = SplitPanel;
    SplitPanel = (0, _aureliaFramework.inject)(Element)(SplitPanel) || SplitPanel;
    return SplitPanel;
  })();

  exports.SplitPanel = SplitPanel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3NwbGl0LXBhbmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUthLFVBQVU7QUFDVixhQURBLFVBQVUsQ0FDVCxPQUFPLEVBQUU7OztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7aUJBSFUsVUFBVTs7YUFLYixvQkFBRzs7O0FBQ1QsWUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7QUFHakYsK0JBQU0sTUFBTSxFQUFFO0FBQ1osZUFBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDbkIsb0JBQVUsRUFBRSxFQUFFO0FBQ2QsaUJBQU8sRUFBRSxHQUFHO0FBQ1osb0JBQVUsRUFBRSxDQUFDO0FBQ2IsZ0JBQU0sRUFBRSxrQkFBTTtBQUNaLGdCQUFJLEtBQUssR0FBRyxZQWxCWixHQUFHLENBa0JhLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELGtCQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDbkM7U0FDRixDQUFDLENBQUM7O0FBR0gsY0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztPQUN6RTs7O3NCQXRCVSxVQUFVO0FBQVYsY0FBVSxHQUR0QixzQkFITyxNQUFNLEVBR04sT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7V0FBVixVQUFVIiwiZmlsZSI6InVpL3NwbGl0LXBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwbGl0IGZyb20gJ3NwbGl0JztcclxuaW1wb3J0IHtpbmplY3QsIGNvbnRhaW5lcmxlc3N9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFNwbGl0UGFuZWwge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIGxldCBwYW5lbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwbGl0JykpO1xyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uYXRoYW5jYWhpbGwvU3BsaXQuanMvYmxvYi9tYXN0ZXIvUkVBRE1FLm1kI2RvY3VtZW50YXRpb25cclxuICAgIFNwbGl0KHBhbmVscywge1xyXG4gICAgICBzaXplczogWzEwLCA1MCwgNDBdLFxyXG4gICAgICBndXR0ZXJTaXplOiAxNSxcclxuICAgICAgbWluU2l6ZTogMjAwLFxyXG4gICAgICBzbmFwT2Zmc2V0OiAxLFxyXG4gICAgICBvbkRyYWc6ICgpID0+IHtcclxuICAgICAgICBsZXQgZXZlbnQgPSBET00uY3JlYXRlQ3VzdG9tRXZlbnQoJ3Jlc2l6ZScsIHsgYnViYmxlczogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGhhY2sgZm9yIGNocm9tZS9zcGxpdHRlci5qcyBidWdcclxuICAgIHBhbmVsc1syXS5zdHlsZS5jc3NUZXh0ID0gcGFuZWxzWzJdLnN0eWxlLmNzc1RleHQucmVwbGFjZSgnMnB4JywgJzZweCcpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
;
define('aurelia-pal-browser',['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._PLATFORM = exports._DOM = exports._FEATURE = undefined;
  exports._ensureFunctionName = _ensureFunctionName;
  exports._ensureClassList = _ensureClassList;
  exports._ensurePerformance = _ensurePerformance;
  exports._ensureCustomEvent = _ensureCustomEvent;
  exports._ensureElementMatches = _ensureElementMatches;
  exports._ensureHTMLTemplateElement = _ensureHTMLTemplateElement;
  exports.initialize = initialize;
  function _ensureFunctionName() {
    function test() {}

    if (!test.name) {
      Object.defineProperty(Function.prototype, 'name', {
        get: function get() {
          var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

          Object.defineProperty(this, 'name', { value: name });
          return name;
        }
      });
    }
  }

  function _ensureClassList() {
    if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
      (function () {
        var protoProp = 'prototype';
        var strTrim = String.prototype.trim;
        var arrIndexOf = Array.prototype.indexOf;
        var emptyArray = [];

        var DOMEx = function DOMEx(type, message) {
          this.name = type;
          this.code = DOMException[type];
          this.message = message;
        };

        var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
          if (token === '') {
            throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
          }

          if (/\s/.test(token)) {
            throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
          }

          return arrIndexOf.call(classList, token);
        };

        var ClassList = function ClassList(elem) {
          var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
          var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

          for (var i = 0, ii = classes.length; i < ii; ++i) {
            this.push(classes[i]);
          }

          this._updateClassName = function () {
            elem.setAttribute('class', this.toString());
          };
        };

        var classListProto = ClassList[protoProp] = [];

        DOMEx[protoProp] = Error[protoProp];

        classListProto.item = function (i) {
          return this[i] || null;
        };

        classListProto.contains = function (token) {
          token += '';
          return checkTokenAndGetIndex(this, token) !== -1;
        };

        classListProto.add = function () {
          var tokens = arguments;
          var i = 0;
          var ii = tokens.length;
          var token = void 0;
          var updated = false;

          do {
            token = tokens[i] + '';
            if (checkTokenAndGetIndex(this, token) === -1) {
              this.push(token);
              updated = true;
            }
          } while (++i < ii);

          if (updated) {
            this._updateClassName();
          }
        };

        classListProto.remove = function () {
          var tokens = arguments;
          var i = 0;
          var ii = tokens.length;
          var token = void 0;
          var updated = false;
          var index = void 0;

          do {
            token = tokens[i] + '';
            index = checkTokenAndGetIndex(this, token);
            while (index !== -1) {
              this.splice(index, 1);
              updated = true;
              index = checkTokenAndGetIndex(this, token);
            }
          } while (++i < ii);

          if (updated) {
            this._updateClassName();
          }
        };

        classListProto.toggle = function (token, force) {
          token += '';

          var result = this.contains(token);
          var method = result ? force !== true && 'remove' : force !== false && 'add';

          if (method) {
            this[method](token);
          }

          if (force === true || force === false) {
            return force;
          }

          return !result;
        };

        classListProto.toString = function () {
          return this.join(' ');
        };

        Object.defineProperty(Element.prototype, 'classList', {
          get: function get() {
            return new ClassList(this);
          },
          enumerable: true,
          configurable: true
        });
      })();
    } else {
      var testElement = document.createElement('_');
      testElement.classList.add('c1', 'c2');

      if (!testElement.classList.contains('c2')) {
        var createMethod = function createMethod(method) {
          var original = DOMTokenList.prototype[method];

          DOMTokenList.prototype[method] = function (token) {
            for (var i = 0, ii = arguments.length; i < ii; ++i) {
              token = arguments[i];
              original.call(this, token);
            }
          };
        };

        createMethod('add');
        createMethod('remove');
      }

      testElement.classList.toggle('c3', false);

      if (testElement.classList.contains('c3')) {
        (function () {
          var _toggle = DOMTokenList.prototype.toggle;

          DOMTokenList.prototype.toggle = function (token, force) {
            if (1 in arguments && !this.contains(token) === !force) {
              return force;
            }

            return _toggle.call(this, token);
          };
        })();
      }

      testElement = null;
    }
  }

  function _ensurePerformance() {
    // @license http://opensource.org/licenses/MIT


    if ('performance' in window === false) {
      window.performance = {};
    }

    Date.now = Date.now || function () {
      return new Date().getTime();
    };

    if ('now' in window.performance === false) {
      (function () {
        var nowOffset = Date.now();

        if (performance.timing && performance.timing.navigationStart) {
          nowOffset = performance.timing.navigationStart;
        }

        window.performance.now = function now() {
          return Date.now() - nowOffset;
        };
      })();
    }
  }

  function _ensureCustomEvent() {
    if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
      var _CustomEvent = function _CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: undefined
        };

        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      };

      _CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent = _CustomEvent;
    }
  }

  function _ensureElementMatches() {
    if (Element && !Element.prototype.matches) {
      var proto = Element.prototype;
      proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
    }
  }

  var _FEATURE = exports._FEATURE = {};

  _FEATURE.shadowDOM = function () {
    return !!HTMLElement.prototype.createShadowRoot;
  }();

  _FEATURE.scopedCSS = function () {
    return 'scoped' in document.createElement('style');
  }();

  _FEATURE.htmlTemplateElement = function () {
    return 'content' in document.createElement('template');
  }();

  _FEATURE.mutationObserver = function () {
    return !!(window.MutationObserver || window.WebKitMutationObserver);
  }();

  function _ensureHTMLTemplateElement() {
    function isSVGTemplate(el) {
      return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
    }

    function fixSVGTemplateElement(el) {
      var template = el.ownerDocument.createElement('template');
      var attrs = el.attributes;
      var length = attrs.length;
      var attr = void 0;

      el.parentNode.insertBefore(template, el);

      while (length-- > 0) {
        attr = attrs[length];
        template.setAttribute(attr.name, attr.value);
        el.removeAttribute(attr.name);
      }

      el.parentNode.removeChild(el);

      return fixHTMLTemplateElement(template);
    }

    function fixHTMLTemplateElement(template) {
      var content = template.content = document.createDocumentFragment();
      var child = void 0;

      while (child = template.firstChild) {
        content.appendChild(child);
      }

      return template;
    }

    function fixHTMLTemplateElementRoot(template) {
      var content = fixHTMLTemplateElement(template).content;
      var childTemplates = content.querySelectorAll('template');

      for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
        var child = childTemplates[i];

        if (isSVGTemplate(child)) {
          fixSVGTemplateElement(child);
        } else {
          fixHTMLTemplateElement(child);
        }
      }

      return template;
    }

    if (_FEATURE.htmlTemplateElement) {
      _FEATURE.ensureHTMLTemplateElement = function (template) {
        return template;
      };
    } else {
      _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
    }
  }

  var shadowPoly = window.ShadowDOMPolyfill || null;

  var _DOM = exports._DOM = {
    Element: Element,
    SVGElement: SVGElement,
    boundary: 'aurelia-dom-boundary',
    addEventListener: function addEventListener(eventName, callback, capture) {
      document.addEventListener(eventName, callback, capture);
    },
    removeEventListener: function removeEventListener(eventName, callback, capture) {
      document.removeEventListener(eventName, callback, capture);
    },
    adoptNode: function adoptNode(node) {
      return document.adoptNode(node, true);
    },
    createElement: function createElement(tagName) {
      return document.createElement(tagName);
    },
    createTextNode: function createTextNode(text) {
      return document.createTextNode(text);
    },
    createComment: function createComment(text) {
      return document.createComment(text);
    },
    createDocumentFragment: function createDocumentFragment() {
      return document.createDocumentFragment();
    },
    createMutationObserver: function createMutationObserver(callback) {
      return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
    },
    createCustomEvent: function createCustomEvent(eventType, options) {
      return new window.CustomEvent(eventType, options);
    },
    dispatchEvent: function dispatchEvent(evt) {
      document.dispatchEvent(evt);
    },
    getComputedStyle: function getComputedStyle(element) {
      return window.getComputedStyle(element);
    },
    getElementById: function getElementById(id) {
      return document.getElementById(id);
    },
    querySelectorAll: function querySelectorAll(query) {
      return document.querySelectorAll(query);
    },
    nextElementSibling: function nextElementSibling(element) {
      if (element.nextElementSibling) {
        return element.nextElementSibling;
      }
      do {
        element = element.nextSibling;
      } while (element && element.nodeType !== 1);
      return element;
    },
    createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
      var parser = document.createElement('div');
      parser.innerHTML = markup;

      var temp = parser.firstElementChild;
      if (!temp || temp.nodeName !== 'TEMPLATE') {
        throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
      }

      return _FEATURE.ensureHTMLTemplateElement(temp);
    },
    appendNode: function appendNode(newNode, parentNode) {
      (parentNode || document.body).appendChild(newNode);
    },
    replaceNode: function replaceNode(newNode, node, parentNode) {
      if (node.parentNode) {
        node.parentNode.replaceChild(newNode, node);
      } else if (shadowPoly !== null) {
        shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
      } else {
        parentNode.replaceChild(newNode, node);
      }
    },
    removeNode: function removeNode(node, parentNode) {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      } else if (shadowPoly !== null) {
        shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
      } else {
        parentNode.removeChild(node);
      }
    },
    injectStyles: function injectStyles(styles, destination, prepend) {
      var node = document.createElement('style');
      node.innerHTML = styles;
      node.type = 'text/css';

      destination = destination || document.head;

      if (prepend && destination.childNodes.length > 0) {
        destination.insertBefore(node, destination.childNodes[0]);
      } else {
        destination.appendChild(node);
      }

      return node;
    }
  };

  var _PLATFORM = exports._PLATFORM = {
    location: window.location,
    history: window.history,
    addEventListener: function addEventListener(eventName, callback, capture) {
      this.global.addEventListener(eventName, callback, capture);
    },
    removeEventListener: function removeEventListener(eventName, callback, capture) {
      this.global.removeEventListener(eventName, callback, capture);
    },

    performance: window.performance,
    requestAnimationFrame: function requestAnimationFrame(callback) {
      return this.global.requestAnimationFrame(callback);
    }
  };

  var isInitialized = false;

  function initialize() {
    if (isInitialized) {
      return;
    }

    isInitialized = true;

    _ensureCustomEvent();
    _ensureFunctionName();
    _ensureHTMLTemplateElement();
    _ensureElementMatches();
    _ensureClassList();
    _ensurePerformance();

    (0, _aureliaPal.initializePAL)(function (platform, feature, dom) {
      Object.assign(platform, _PLATFORM);
      Object.assign(feature, _FEATURE);
      Object.assign(dom, _DOM);

      Object.defineProperty(dom, 'title', {
        get: function get() {
          return document.title;
        },
        set: function set(value) {
          document.title = value;
        }
      });

      Object.defineProperty(dom, 'activeElement', {
        get: function get() {
          return document.activeElement;
        }
      });

      Object.defineProperty(platform, 'XMLHttpRequest', {
        get: function get() {
          return platform.global.XMLHttpRequest;
        }
      });
    });
  }
});
define('aurelia-polyfills',['aurelia-pal'], function (_aureliaPal) {
  'use strict';

  (function (Object, GOPS) {
    'use strict';

    if (GOPS in Object) return;

    var setDescriptor,
        G = _aureliaPal.PLATFORM.global,
        id = 0,
        random = '' + Math.random(),
        prefix = '__\x01symbol:',
        prefixLength = prefix.length,
        internalSymbol = '__\x01symbol@@' + random,
        DP = 'defineProperty',
        DPies = 'defineProperties',
        GOPN = 'getOwnPropertyNames',
        GOPD = 'getOwnPropertyDescriptor',
        PIE = 'propertyIsEnumerable',
        gOPN = Object[GOPN],
        gOPD = Object[GOPD],
        create = Object.create,
        keys = Object.keys,
        defineProperty = Object[DP],
        $defineProperties = Object[DPies],
        descriptor = gOPD(Object, GOPN),
        ObjectProto = Object.prototype,
        hOP = ObjectProto.hasOwnProperty,
        pIE = ObjectProto[PIE],
        toString = ObjectProto.toString,
        indexOf = Array.prototype.indexOf || function (v) {
      for (var i = this.length; i-- && this[i] !== v;) {}
      return i;
    },
        addInternalIfNeeded = function addInternalIfNeeded(o, uid, enumerable) {
      if (!hOP.call(o, internalSymbol)) {
        defineProperty(o, internalSymbol, {
          enumerable: false,
          configurable: false,
          writable: false,
          value: {}
        });
      }
      o[internalSymbol]['@@' + uid] = enumerable;
    },
        createWithSymbols = function createWithSymbols(proto, descriptors) {
      var self = create(proto);
      gOPN(descriptors).forEach(function (key) {
        if (propertyIsEnumerable.call(descriptors, key)) {
          $defineProperty(self, key, descriptors[key]);
        }
      });
      return self;
    },
        copyAsNonEnumerable = function copyAsNonEnumerable(descriptor) {
      var newDescriptor = create(descriptor);
      newDescriptor.enumerable = false;
      return newDescriptor;
    },
        get = function get() {},
        onlyNonSymbols = function onlyNonSymbols(name) {
      return name != internalSymbol && !hOP.call(source, name);
    },
        onlySymbols = function onlySymbols(name) {
      return name != internalSymbol && hOP.call(source, name);
    },
        propertyIsEnumerable = function propertyIsEnumerable(key) {
      var uid = '' + key;
      return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]['@@' + uid] : pIE.call(this, key);
    },
        setAndGetSymbol = function setAndGetSymbol(uid) {
      var descriptor = {
        enumerable: false,
        configurable: true,
        get: get,
        set: function set(value) {
          setDescriptor(this, uid, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
          });
          addInternalIfNeeded(this, uid, true);
        }
      };
      defineProperty(ObjectProto, uid, descriptor);
      return source[uid] = defineProperty(Object(uid), 'constructor', sourceConstructor);
    },
        _Symbol = function _Symbol2(description) {
      if (this && this !== G) {
        throw new TypeError('Symbol is not a constructor');
      }
      return setAndGetSymbol(prefix.concat(description || '', random, ++id));
    },
        source = create(null),
        sourceConstructor = { value: _Symbol },
        sourceMap = function sourceMap(uid) {
      return source[uid];
    },
        $defineProperty = function defineProp(o, key, descriptor) {
      var uid = '' + key;
      if (onlySymbols(uid)) {
        setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor);
        addInternalIfNeeded(o, uid, !!descriptor.enumerable);
      } else {
        defineProperty(o, key, descriptor);
      }
      return o;
    },
        $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
      return gOPN(o).filter(onlySymbols).map(sourceMap);
    };

    descriptor.value = $defineProperty;
    defineProperty(Object, DP, descriptor);

    descriptor.value = $getOwnPropertySymbols;
    defineProperty(Object, GOPS, descriptor);

    descriptor.value = function getOwnPropertyNames(o) {
      return gOPN(o).filter(onlyNonSymbols);
    };
    defineProperty(Object, GOPN, descriptor);

    descriptor.value = function defineProperties(o, descriptors) {
      var symbols = $getOwnPropertySymbols(descriptors);
      if (symbols.length) {
        keys(descriptors).concat(symbols).forEach(function (uid) {
          if (propertyIsEnumerable.call(descriptors, uid)) {
            $defineProperty(o, uid, descriptors[uid]);
          }
        });
      } else {
        $defineProperties(o, descriptors);
      }
      return o;
    };
    defineProperty(Object, DPies, descriptor);

    descriptor.value = propertyIsEnumerable;
    defineProperty(ObjectProto, PIE, descriptor);

    descriptor.value = _Symbol;
    defineProperty(G, 'Symbol', descriptor);

    descriptor.value = function (key) {
      var uid = prefix.concat(prefix, key, random);
      return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
    };
    defineProperty(_Symbol, 'for', descriptor);

    descriptor.value = function (symbol) {
      return hOP.call(source, symbol) ? symbol.slice(prefixLength * 2, -random.length) : void 0;
    };
    defineProperty(_Symbol, 'keyFor', descriptor);

    descriptor.value = function getOwnPropertyDescriptor(o, key) {
      var descriptor = gOPD(o, key);
      if (descriptor && onlySymbols(key)) {
        descriptor.enumerable = propertyIsEnumerable.call(o, key);
      }
      return descriptor;
    };
    defineProperty(Object, GOPD, descriptor);

    descriptor.value = function (proto, descriptors) {
      return arguments.length === 1 ? create(proto) : createWithSymbols(proto, descriptors);
    };
    defineProperty(Object, 'create', descriptor);

    descriptor.value = function () {
      var str = toString.call(this);
      return str === '[object String]' && onlySymbols(this) ? '[object Symbol]' : str;
    };
    defineProperty(ObjectProto, 'toString', descriptor);

    try {
      setDescriptor = create(defineProperty({}, prefix, {
        get: function get() {
          return defineProperty(this, prefix, { value: false })[prefix];
        }
      }))[prefix] || defineProperty;
    } catch (o_O) {
      setDescriptor = function setDescriptor(o, key, descriptor) {
        var protoDescriptor = gOPD(ObjectProto, key);
        delete ObjectProto[key];
        defineProperty(o, key, descriptor);
        defineProperty(ObjectProto, key, protoDescriptor);
      };
    }
  })(Object, 'getOwnPropertySymbols');

  (function (O, S) {
    var dP = O.defineProperty,
        ObjectProto = O.prototype,
        toString = ObjectProto.toString,
        toStringTag = 'toStringTag',
        descriptor;
    ['iterator', 'match', 'replace', 'search', 'split', 'hasInstance', 'isConcatSpreadable', 'unscopables', 'species', 'toPrimitive', toStringTag].forEach(function (name) {
      if (!(name in Symbol)) {
        dP(Symbol, name, { value: Symbol(name) });
        switch (name) {
          case toStringTag:
            descriptor = O.getOwnPropertyDescriptor(ObjectProto, 'toString');
            descriptor.value = function () {
              var str = toString.call(this),
                  tst = typeof this === 'undefined' || this === null ? undefined : this[Symbol.toStringTag];
              return typeof tst === 'undefined' ? str : '[object ' + tst + ']';
            };
            dP(ObjectProto, 'toString', descriptor);
            break;
        }
      }
    });
  })(Object, Symbol);

  (function (Si, AP, SP) {

    function returnThis() {
      return this;
    }

    if (!AP[Si]) AP[Si] = function () {
      var i = 0,
          self = this,
          iterator = {
        next: function next() {
          var done = self.length <= i;
          return done ? { done: done } : { done: done, value: self[i++] };
        }
      };
      iterator[Si] = returnThis;
      return iterator;
    };

    if (!SP[Si]) SP[Si] = function () {
      var fromCodePoint = String.fromCodePoint,
          self = this,
          i = 0,
          length = self.length,
          iterator = {
        next: function next() {
          var done = length <= i,
              c = done ? '' : fromCodePoint(self.codePointAt(i));
          i += c.length;
          return done ? { done: done } : { done: done, value: c };
        }
      };
      iterator[Si] = returnThis;
      return iterator;
    };
  })(Symbol.iterator, Array.prototype, String.prototype);

  Number.isNaN = Number.isNaN || function (value) {
    return value !== value;
  };

  Number.isFinite = Number.isFinite || function (value) {
    return typeof value === "number" && isFinite(value);
  };
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
    };
  }
  if (!Array.from) {
    Array.from = function () {
      var toInteger = function toInteger(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? Math.floor : Math.ceil)(it);
      };
      var toLength = function toLength(it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
      };
      var iterCall = function iterCall(iter, fn, a1, a2) {
        try {
          fn(a1, a2);
        } catch (E) {
          if (typeof iter.return == 'function') iter.return();
          throw E;
        }
      };

      return function from(arrayLike) {
        var O = Object(arrayLike),
            C = typeof this == 'function' ? this : Array,
            aLen = arguments.length,
            mapfn = aLen > 1 ? arguments[1] : undefined,
            mapping = mapfn !== undefined,
            index = 0,
            iterFn = O[Symbol.iterator],
            length,
            result,
            step,
            iterator;
        if (mapping) mapfn = mapfn.bind(aLen > 2 ? arguments[2] : undefined);
        if (iterFn != undefined && !Array.isArray(arrayLike)) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            result[index] = mapping ? iterCall(mapfn, step.value, index) : step.value;
          }
        } else {
          length = toLength(O.length);
          for (result = new C(length); length > index; index++) {
            result[index] = mapping ? mapfn(O[index], index) : O[index];
          }
        }
        result.length = index;
        return result;
      };
    }();
  }

  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(predicate) {
        if (this === null) {
          throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
        return undefined;
      }
    });
  }

  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(predicate) {
        if (this === null) {
          throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return i;
          }
        }
        return -1;
      }
    });
  }

  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(searchElement) {
        var O = Object(this);
        var len = parseInt(O.length) || 0;
        if (len === 0) {
          return false;
        }
        var n = parseInt(arguments[1]) || 0;
        var k;
        if (n >= 0) {
          k = n;
        } else {
          k = len + n;
          if (k < 0) {
            k = 0;
          }
        }
        var currentElement;
        while (k < len) {
          currentElement = O[k];
          if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
            return true;
          }
          k++;
        }
        return false;
      }
    });
  }

  (function () {
    var needsFix = false;

    try {
      var s = Object.keys('a');
      needsFix = s.length !== 1 || s[0] !== '0';
    } catch (e) {
      needsFix = true;
    }

    if (needsFix) {
      Object.keys = function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
            dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
            dontEnumsLength = dontEnums.length;

        return function (obj) {
          if (obj === undefined || obj === null) {
            throw TypeError('Cannot convert undefined or null to object');
          }

          obj = Object(obj);

          var result = [],
              prop,
              i;

          for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
              result.push(prop);
            }
          }

          if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
              if (hasOwnProperty.call(obj, dontEnums[i])) {
                result.push(dontEnums[i]);
              }
            }
          }

          return result;
        };
      }();
    }
  })();

  (function (O) {
    if ('assign' in O) {
      return;
    }

    O.defineProperty(O, 'assign', {
      configurable: true,
      writable: true,
      value: function () {
        var gOPS = O.getOwnPropertySymbols,
            pIE = O.propertyIsEnumerable,
            filterOS = gOPS ? function (self) {
          return gOPS(self).filter(pIE, self);
        } : function () {
          return Array.prototype;
        };

        return function assign(where) {
          if (gOPS && !(where instanceof O)) {
            console.warn('problematic Symbols', where);
          }

          function set(keyOrSymbol) {
            where[keyOrSymbol] = arg[keyOrSymbol];
          }

          for (var i = 1, ii = arguments.length; i < ii; ++i) {
            var arg = arguments[i];

            if (arg === null || arg === undefined) {
              continue;
            }

            O.keys(arg).concat(filterOS(arg)).forEach(set);
          }

          return where;
        };
      }()
    });
  })(Object);

  (function (global) {
    var i;

    var defineProperty = Object.defineProperty,
        is = function is(a, b) {
      return a === b || a !== a && b !== b;
    };

    if (typeof WeakMap == 'undefined') {
      global.WeakMap = createCollection({
        'delete': sharedDelete,

        clear: sharedClear,

        get: sharedGet,

        has: mapHas,

        set: sharedSet
      }, true);
    }

    if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
      var _createCollection;

      global.Map = createCollection((_createCollection = {
        'delete': sharedDelete,

        has: mapHas,

        get: sharedGet,

        set: sharedSet,

        keys: sharedKeys,

        values: sharedValues,

        entries: mapEntries,

        forEach: sharedForEach,

        clear: sharedClear
      }, _createCollection[Symbol.iterator] = mapEntries, _createCollection));
    }

    if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
      var _createCollection2;

      global.Set = createCollection((_createCollection2 = {
        has: setHas,

        add: sharedAdd,

        'delete': sharedDelete,

        clear: sharedClear,

        keys: sharedValues,
        values: sharedValues,

        entries: setEntries,

        forEach: sharedForEach
      }, _createCollection2[Symbol.iterator] = sharedValues, _createCollection2));
    }

    if (typeof WeakSet == 'undefined') {
      global.WeakSet = createCollection({
        'delete': sharedDelete,

        add: sharedAdd,

        clear: sharedClear,

        has: setHas
      }, true);
    }

    function createCollection(proto, objectOnly) {
      function Collection(a) {
        if (!this || this.constructor !== Collection) return new Collection(a);
        this._keys = [];
        this._values = [];
        this._itp = [];
        this.objectOnly = objectOnly;

        if (a) init.call(this, a);
      }

      if (!objectOnly) {
        defineProperty(proto, 'size', {
          get: sharedSize
        });
      }

      proto.constructor = Collection;
      Collection.prototype = proto;

      return Collection;
    }

    function init(a) {
      var i;

      if (this.add) a.forEach(this.add, this);else a.forEach(function (a) {
          this.set(a[0], a[1]);
        }, this);
    }

    function sharedDelete(key) {
      if (this.has(key)) {
        this._keys.splice(i, 1);
        this._values.splice(i, 1);

        this._itp.forEach(function (p) {
          if (i < p[0]) p[0]--;
        });
      }

      return -1 < i;
    };

    function sharedGet(key) {
      return this.has(key) ? this._values[i] : undefined;
    }

    function has(list, key) {
      if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");

      if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);) {} else i = list.indexOf(key);
      return -1 < i;
    }

    function setHas(value) {
      return has.call(this, this._values, value);
    }

    function mapHas(value) {
      return has.call(this, this._keys, value);
    }

    function sharedSet(key, value) {
      this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value;
      return this;
    }

    function sharedAdd(value) {
      if (!this.has(value)) this._values.push(value);
      return this;
    }

    function sharedClear() {
      (this._keys || 0).length = this._values.length = 0;
    }

    function sharedKeys() {
      return sharedIterator(this._itp, this._keys);
    }

    function sharedValues() {
      return sharedIterator(this._itp, this._values);
    }

    function mapEntries() {
      return sharedIterator(this._itp, this._keys, this._values);
    }

    function setEntries() {
      return sharedIterator(this._itp, this._values, this._values);
    }

    function sharedIterator(itp, array, array2) {
      var _ref;

      var p = [0],
          done = false;
      itp.push(p);
      return _ref = {}, _ref[Symbol.iterator] = function () {
        return this;
      }, _ref.next = function next() {
        var v,
            k = p[0];
        if (!done && k < array.length) {
          v = array2 ? [array[k], array2[k]] : array[k];
          p[0]++;
        } else {
          done = true;
          itp.splice(itp.indexOf(p), 1);
        }
        return { done: done, value: v };
      }, _ref;
    }

    function sharedSize() {
      return this._values.length;
    }

    function sharedForEach(callback, context) {
      var it = this.entries();
      for (;;) {
        var r = it.next();
        if (r.done) break;
        callback.call(context, r.value[1], r.value[0], this);
      }
    }
  })(_aureliaPal.PLATFORM.global);

  var emptyMetadata = Object.freeze({});
  var metadataContainerKey = '__metadata__';
  var bind = Function.prototype.bind;

  if (typeof _aureliaPal.PLATFORM.global.Reflect === 'undefined') {
    _aureliaPal.PLATFORM.global.Reflect = {};
  }

  if (typeof Reflect.getOwnMetadata !== 'function') {
    Reflect.getOwnMetadata = function (metadataKey, target, targetKey) {
      if (target.hasOwnProperty(metadataContainerKey)) {
        return (target[metadataContainerKey][targetKey] || emptyMetadata)[metadataKey];
      }
    };
  }

  if (typeof Reflect.defineMetadata !== 'function') {
    Reflect.defineMetadata = function (metadataKey, metadataValue, target, targetKey) {
      var metadataContainer = target.hasOwnProperty(metadataContainerKey) ? target[metadataContainerKey] : target[metadataContainerKey] = {};
      var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
      targetContainer[metadataKey] = metadataValue;
    };
  }

  if (typeof Reflect.metadata !== 'function') {
    Reflect.metadata = function (metadataKey, metadataValue) {
      return function (target, targetKey) {
        Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
      };
    };
  }

  if (typeof Reflect.construct !== 'function') {
    Reflect.construct = function (Target, args) {
      if (args) {
        switch (args.length) {
          case 0:
            return new Target();
          case 1:
            return new Target(args[0]);
          case 2:
            return new Target(args[0], args[1]);
          case 3:
            return new Target(args[0], args[1], args[2]);
          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        }
      }

      var a = [null];
      a.push.apply(a, args);
      return new (bind.apply(Target, a))();
    };
  }
});
define('aurelia-bootstrapper',['exports', 'aurelia-pal', 'aurelia-pal-browser', 'aurelia-polyfills'], function (exports, _aureliaPal, _aureliaPalBrowser) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bootstrap = bootstrap;


  var bootstrapQueue = [];
  var sharedLoader = null;
  var Aurelia = null;

  function onBootstrap(callback) {
    return new Promise(function (resolve, reject) {
      if (sharedLoader) {
        resolve(callback(sharedLoader));
      } else {
        bootstrapQueue.push(function () {
          try {
            resolve(callback(sharedLoader));
          } catch (e) {
            reject(e);
          }
        });
      }
    });
  }

  function ready(global) {
    return new Promise(function (resolve, reject) {
      if (global.document.readyState === 'complete') {
        resolve(global.document);
      } else {
        global.document.addEventListener('DOMContentLoaded', completed);
        global.addEventListener('load', completed);
      }

      function completed() {
        global.document.removeEventListener('DOMContentLoaded', completed);
        global.removeEventListener('load', completed);
        resolve(global.document);
      }
    });
  }

  function createLoader() {
    if (_aureliaPal.PLATFORM.Loader) {
      return Promise.resolve(new _aureliaPal.PLATFORM.Loader());
    }

    if (window.System && typeof window.System.import === 'function') {
      return System.normalize('aurelia-bootstrapper').then(function (bootstrapperName) {
        return System.normalize('aurelia-loader-default', bootstrapperName);
      }).then(function (loaderName) {
        return System.import(loaderName).then(function (m) {
          return new m.DefaultLoader();
        });
      });
    }

    if (typeof window.require === 'function') {
      return new Promise(function (resolve, reject) {
        return require(['aurelia-loader-default'], function (m) {
          return resolve(new m.DefaultLoader());
        }, reject);
      });
    }

    return Promise.reject('No PLATFORM.Loader is defined and there is neither a System API (ES6) or a Require API (AMD) globally available to load your app.');
  }

  function preparePlatform(loader) {
    return loader.normalize('aurelia-bootstrapper').then(function (bootstrapperName) {
      return loader.normalize('aurelia-framework', bootstrapperName).then(function (frameworkName) {
        loader.map('aurelia-framework', frameworkName);

        return Promise.all([loader.normalize('aurelia-dependency-injection', frameworkName).then(function (diName) {
          return loader.map('aurelia-dependency-injection', diName);
        }), loader.normalize('aurelia-router', bootstrapperName).then(function (routerName) {
          return loader.map('aurelia-router', routerName);
        }), loader.normalize('aurelia-logging-console', bootstrapperName).then(function (loggingConsoleName) {
          return loader.map('aurelia-logging-console', loggingConsoleName);
        })]).then(function () {
          return loader.loadModule(frameworkName).then(function (m) {
            return Aurelia = m.Aurelia;
          });
        });
      });
    });
  }

  function handleApp(loader, appHost) {
    return config(loader, appHost, appHost.getAttribute('aurelia-app'));
  }

  function config(loader, appHost, configModuleId) {
    var aurelia = new Aurelia(loader);
    aurelia.host = appHost;

    if (configModuleId) {
      return loader.loadModule(configModuleId).then(function (customConfig) {
        return customConfig.configure(aurelia);
      });
    }

    aurelia.use.standardConfiguration().developmentLogging();

    return aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }

  function run() {
    return ready(window).then(function (doc) {
      (0, _aureliaPalBrowser.initialize)();

      var appHost = doc.querySelectorAll('[aurelia-app]');
      return createLoader().then(function (loader) {
        return preparePlatform(loader).then(function () {
          for (var i = 0, ii = appHost.length; i < ii; ++i) {
            handleApp(loader, appHost[i]).catch(console.error.bind(console));
          }

          sharedLoader = loader;
          for (var _i = 0, _ii = bootstrapQueue.length; _i < _ii; ++_i) {
            bootstrapQueue[_i]();
          }
          bootstrapQueue = null;
        });
      });
    });
  }

  function bootstrap(configure) {
    return onBootstrap(function (loader) {
      var aurelia = new Aurelia(loader);
      return configure(aurelia);
    });
  }

  run();
});
define('aurelia-history',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var History = exports.History = function () {
    function History() {
      _classCallCheck(this, History);
    }

    History.prototype.activate = function activate(options) {
      throw new Error('History must implement activate().');
    };

    History.prototype.deactivate = function deactivate() {
      throw new Error('History must implement deactivate().');
    };

    History.prototype.navigate = function navigate(fragment, options) {
      throw new Error('History must implement navigate().');
    };

    History.prototype.navigateBack = function navigateBack() {
      throw new Error('History must implement navigateBack().');
    };

    History.prototype.setTitle = function setTitle(title) {
      throw new Error('History must implement setTitle().');
    };

    return History;
  }();
});
define('aurelia-history-browser',['exports', 'aurelia-pal', 'aurelia-history'], function (exports, _aureliaPal, _aureliaHistory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BrowserHistory = exports.DefaultLinkHandler = exports.LinkHandler = undefined;
  exports.configure = configure;

  var _class, _temp;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LinkHandler = exports.LinkHandler = function () {
    function LinkHandler() {
      _classCallCheck(this, LinkHandler);
    }

    LinkHandler.prototype.activate = function activate(history) {};

    LinkHandler.prototype.deactivate = function deactivate() {};

    return LinkHandler;
  }();

  var DefaultLinkHandler = exports.DefaultLinkHandler = function (_LinkHandler) {
    _inherits(DefaultLinkHandler, _LinkHandler);

    function DefaultLinkHandler() {
      _classCallCheck(this, DefaultLinkHandler);

      var _this = _possibleConstructorReturn(this, _LinkHandler.call(this));

      _this.handler = function (e) {
        var _DefaultLinkHandler$g = DefaultLinkHandler.getEventInfo(e);

        var shouldHandleEvent = _DefaultLinkHandler$g.shouldHandleEvent;
        var href = _DefaultLinkHandler$g.href;


        if (shouldHandleEvent) {
          e.preventDefault();
          _this.history.navigate(href);
        }
      };
      return _this;
    }

    DefaultLinkHandler.prototype.activate = function activate(history) {
      if (history._hasPushState) {
        this.history = history;
        _aureliaPal.DOM.addEventListener('click', this.handler, true);
      }
    };

    DefaultLinkHandler.prototype.deactivate = function deactivate() {
      _aureliaPal.DOM.removeEventListener('click', this.handler);
    };

    DefaultLinkHandler.getEventInfo = function getEventInfo(event) {
      var info = {
        shouldHandleEvent: false,
        href: null,
        anchor: null
      };

      var target = DefaultLinkHandler.findClosestAnchor(event.target);
      if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
        return info;
      }

      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return info;
      }

      var href = target.getAttribute('href');
      info.anchor = target;
      info.href = href;

      var leftButtonClicked = event.which === 1;
      var isRelative = href && !(href.charAt(0) === '#' || /^[a-z]+:/i.test(href));

      info.shouldHandleEvent = leftButtonClicked && isRelative;
      return info;
    };

    DefaultLinkHandler.findClosestAnchor = function findClosestAnchor(el) {
      while (el) {
        if (el.tagName === 'A') {
          return el;
        }

        el = el.parentNode;
      }
    };

    DefaultLinkHandler.targetIsThisWindow = function targetIsThisWindow(target) {
      var targetWindow = target.getAttribute('target');
      var win = _aureliaPal.PLATFORM.global;

      return !targetWindow || targetWindow === win.name || targetWindow === '_self' || targetWindow === 'top' && win === win.top;
    };

    return DefaultLinkHandler;
  }(LinkHandler);

  function configure(config) {
    config.singleton(_aureliaHistory.History, BrowserHistory);
    config.transient(LinkHandler, DefaultLinkHandler);
  }

  var BrowserHistory = exports.BrowserHistory = (_temp = _class = function (_History) {
    _inherits(BrowserHistory, _History);

    function BrowserHistory(linkHandler) {
      _classCallCheck(this, BrowserHistory);

      var _this2 = _possibleConstructorReturn(this, _History.call(this));

      _this2._isActive = false;
      _this2._checkUrlCallback = _this2._checkUrl.bind(_this2);

      _this2.location = _aureliaPal.PLATFORM.location;
      _this2.history = _aureliaPal.PLATFORM.history;
      _this2.linkHandler = linkHandler;
      return _this2;
    }

    BrowserHistory.prototype.activate = function activate(options) {
      if (this._isActive) {
        throw new Error('History has already been activated.');
      }

      var wantsPushState = !!options.pushState;

      this._isActive = true;
      this.options = Object.assign({}, { root: '/' }, this.options, options);

      this.root = ('/' + this.options.root + '/').replace(rootStripper, '/');

      this._wantsHashChange = this.options.hashChange !== false;
      this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);

      var eventName = void 0;
      if (this._hasPushState) {
        eventName = 'popstate';
      } else if (this._wantsHashChange) {
        eventName = 'hashchange';
      }

      _aureliaPal.PLATFORM.addEventListener(eventName, this._checkUrlCallback);

      if (this._wantsHashChange && wantsPushState) {
        var loc = this.location;
        var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

        if (!this._hasPushState && !atRoot) {
          this.fragment = this._getFragment(null, true);
          this.location.replace(this.root + this.location.search + '#' + this.fragment);

          return true;
        } else if (this._hasPushState && atRoot && loc.hash) {
            this.fragment = this._getHash().replace(routeStripper, '');
            this.history.replaceState({}, _aureliaPal.DOM.title, this.root + this.fragment + loc.search);
          }
      }

      if (!this.fragment) {
        this.fragment = this._getFragment();
      }

      this.linkHandler.activate(this);

      if (!this.options.silent) {
        return this._loadUrl();
      }
    };

    BrowserHistory.prototype.deactivate = function deactivate() {
      _aureliaPal.PLATFORM.removeEventListener('popstate', this._checkUrlCallback);
      _aureliaPal.PLATFORM.removeEventListener('hashchange', this._checkUrlCallback);
      this._isActive = false;
      this.linkHandler.deactivate();
    };

    BrowserHistory.prototype.navigate = function navigate(fragment) {
      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ref$trigger = _ref.trigger;
      var trigger = _ref$trigger === undefined ? true : _ref$trigger;
      var _ref$replace = _ref.replace;
      var replace = _ref$replace === undefined ? false : _ref$replace;

      if (fragment && absoluteUrl.test(fragment)) {
        this.location.href = fragment;
        return true;
      }

      if (!this._isActive) {
        return false;
      }

      fragment = this._getFragment(fragment || '');

      if (this.fragment === fragment && !replace) {
        return false;
      }

      this.fragment = fragment;

      var url = this.root + fragment;

      if (fragment === '' && url !== '/') {
        url = url.slice(0, -1);
      }

      if (this._hasPushState) {
        url = url.replace('//', '/');
        this.history[replace ? 'replaceState' : 'pushState']({}, _aureliaPal.DOM.title, url);
      } else if (this._wantsHashChange) {
        updateHash(this.location, fragment, replace);
      } else {
        return this.location.assign(url);
      }

      if (trigger) {
        return this._loadUrl(fragment);
      }
    };

    BrowserHistory.prototype.navigateBack = function navigateBack() {
      this.history.back();
    };

    BrowserHistory.prototype.setTitle = function setTitle(title) {
      _aureliaPal.DOM.title = title;
    };

    BrowserHistory.prototype._getHash = function _getHash() {
      return this.location.hash.substr(1);
    };

    BrowserHistory.prototype._getFragment = function _getFragment(fragment, forcePushState) {
      var root = void 0;

      if (!fragment) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname + this.location.search;
          root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) {
            fragment = fragment.substr(root.length);
          }
        } else {
          fragment = this._getHash();
        }
      }

      return '/' + fragment.replace(routeStripper, '');
    };

    BrowserHistory.prototype._checkUrl = function _checkUrl() {
      var current = this._getFragment();
      if (current !== this.fragment) {
        this._loadUrl();
      }
    };

    BrowserHistory.prototype._loadUrl = function _loadUrl(fragmentOverride) {
      var fragment = this.fragment = this._getFragment(fragmentOverride);

      return this.options.routeHandler ? this.options.routeHandler(fragment) : false;
    };

    return BrowserHistory;
  }(_aureliaHistory.History), _class.inject = [LinkHandler], _temp);

  var routeStripper = /^#?\/*|\s+$/g;

  var rootStripper = /^\/+|\/+$/g;

  var trailingSlash = /\/$/;

  var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

  function updateHash(location, fragment, replace) {
    if (replace) {
      var href = location.href.replace(/(javascript:|#).*$/, '');
      location.replace(href + '#' + fragment);
    } else {
      location.hash = '#' + fragment;
    }
  }
});
define('aurelia-loader-default',['exports', 'aurelia-loader', 'aurelia-pal', 'aurelia-metadata'], function (exports, _aureliaLoader, _aureliaPal, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DefaultLoader = exports.TextTemplateLoader = undefined;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TextTemplateLoader = exports.TextTemplateLoader = function () {
    function TextTemplateLoader() {
      _classCallCheck(this, TextTemplateLoader);
    }

    TextTemplateLoader.prototype.loadTemplate = function loadTemplate(loader, entry) {
      return loader.loadText(entry.address).then(function (text) {
        entry.template = _aureliaPal.DOM.createTemplateFromMarkup(text);
      });
    };

    return TextTemplateLoader;
  }();

  function ensureOriginOnExports(executed, name) {
    var target = executed;
    var key = void 0;
    var exportedValue = void 0;

    if (target.__useDefault) {
      target = target['default'];
    }

    _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(name, 'default'));

    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(name, key));
      }
    }

    return executed;
  }

  var DefaultLoader = exports.DefaultLoader = function (_Loader) {
    _inherits(DefaultLoader, _Loader);

    function DefaultLoader() {
      _classCallCheck(this, DefaultLoader);

      var _this = _possibleConstructorReturn(this, _Loader.call(this));

      _this.textPluginName = 'text';


      _this.moduleRegistry = {};
      _this.useTemplateLoader(new TextTemplateLoader());

      var that = _this;

      _this.addPlugin('template-registry-entry', {
        'fetch': function fetch(address) {
          var entry = that.getOrCreateTemplateRegistryEntry(address);
          return entry.templateIsLoaded ? entry : that.templateLoader.loadTemplate(that, entry).then(function (x) {
            return entry;
          });
        }
      });
      return _this;
    }

    DefaultLoader.prototype.useTemplateLoader = function useTemplateLoader(templateLoader) {
      this.templateLoader = templateLoader;
    };

    DefaultLoader.prototype.loadAllModules = function loadAllModules(ids) {
      var loads = [];

      for (var i = 0, ii = ids.length; i < ii; ++i) {
        loads.push(this.loadModule(ids[i]));
      }

      return Promise.all(loads);
    };

    DefaultLoader.prototype.loadTemplate = function loadTemplate(url) {
      return this._import(this.applyPluginToUrl(url, 'template-registry-entry'));
    };

    DefaultLoader.prototype.loadText = function loadText(url) {
      return this._import(this.applyPluginToUrl(url, this.textPluginName));
    };

    return DefaultLoader;
  }(_aureliaLoader.Loader);

  _aureliaPal.PLATFORM.Loader = DefaultLoader;

  if (!_aureliaPal.PLATFORM.global.System || !_aureliaPal.PLATFORM.global.System.import) {
    if (_aureliaPal.PLATFORM.global.requirejs && requirejs.s && requirejs.s.contexts && requirejs.s.contexts._ && requirejs.s.contexts._.defined) {
      _aureliaPal.PLATFORM.eachModule = function (callback) {
        var defined = requirejs.s.contexts._.defined;
        for (var key in defined) {
          try {
            if (callback(key, defined[key])) return;
          } catch (e) {}
        }
      };
    } else {
      _aureliaPal.PLATFORM.eachModule = function (callback) {};
    }

    DefaultLoader.prototype._import = function (moduleId) {
      return new Promise(function (resolve, reject) {
        require([moduleId], resolve, reject);
      });
    };

    DefaultLoader.prototype.loadModule = function (id) {
      var _this2 = this;

      var existing = this.moduleRegistry[id];
      if (existing !== undefined) {
        return Promise.resolve(existing);
      }

      return new Promise(function (resolve, reject) {
        require([id], function (m) {
          _this2.moduleRegistry[id] = m;
          resolve(ensureOriginOnExports(m, id));
        }, reject);
      });
    };

    DefaultLoader.prototype.map = function (id, source) {};

    DefaultLoader.prototype.normalize = function (moduleId, relativeTo) {
      return Promise.resolve(moduleId);
    };

    DefaultLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
      return moduleId;
    };

    DefaultLoader.prototype.applyPluginToUrl = function (url, pluginName) {
      return pluginName + '!' + url;
    };

    DefaultLoader.prototype.addPlugin = function (pluginName, implementation) {
      var nonAnonDefine = define;
      nonAnonDefine(pluginName, [], {
        'load': function load(name, req, onload) {
          var result = implementation.fetch(name);
          Promise.resolve(result).then(onload);
        }
      });
    };
  } else {
    _aureliaPal.PLATFORM.eachModule = function (callback) {
      var modules = System._loader.modules;

      for (var key in modules) {
        try {
          if (callback(key, modules[key].module)) return;
        } catch (e) {}
      }
    };

    System.set('text', System.newModule({
      'translate': function translate(load) {
        return 'module.exports = "' + load.source.replace(/(["\\])/g, '\\$1').replace(/[\f]/g, '\\f').replace(/[\b]/g, '\\b').replace(/[\n]/g, '\\n').replace(/[\t]/g, '\\t').replace(/[\r]/g, '\\r').replace(/[\u2028]/g, '\\u2028').replace(/[\u2029]/g, '\\u2029') + '";';
      }
    }));

    DefaultLoader.prototype._import = function (moduleId) {
      return System.import(moduleId);
    };

    DefaultLoader.prototype.loadModule = function (id) {
      var _this3 = this;

      return System.normalize(id).then(function (newId) {
        var existing = _this3.moduleRegistry[newId];
        if (existing !== undefined) {
          return Promise.resolve(existing);
        }

        return System.import(newId).then(function (m) {
          _this3.moduleRegistry[newId] = m;
          return ensureOriginOnExports(m, newId);
        });
      });
    };

    DefaultLoader.prototype.map = function (id, source) {
      System.map[id] = source;
    };

    DefaultLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
      return System.normalizeSync(moduleId, relativeTo);
    };

    DefaultLoader.prototype.normalize = function (moduleId, relativeTo) {
      return System.normalize(moduleId, relativeTo);
    };

    DefaultLoader.prototype.applyPluginToUrl = function (url, pluginName) {
      return url + '!' + pluginName;
    };

    DefaultLoader.prototype.addPlugin = function (pluginName, implementation) {
      System.set(pluginName, System.newModule({
        'fetch': function fetch(load, _fetch) {
          var result = implementation.fetch(load.address);
          return Promise.resolve(result).then(function (x) {
            load.metadata.result = x;
            return '';
          });
        },
        'instantiate': function instantiate(load) {
          return load.metadata.result;
        }
      }));
    };
  }
});
define('aurelia-logging-console',['exports', 'aurelia-pal', 'aurelia-logging'], function (exports, _aureliaPal, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ConsoleAppender = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  (function (global) {
    global.console = global.console || {};
    var con = global.console;
    var prop = void 0;
    var method = void 0;
    var empty = {};
    var dummy = function dummy() {};
    var properties = 'memory'.split(',');
    var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
    while (prop = properties.pop()) {
      if (!con[prop]) con[prop] = empty;
    }while (method = methods.pop()) {
      if (!con[method]) con[method] = dummy;
    }
  })(_aureliaPal.PLATFORM.global);

  if (_aureliaPal.PLATFORM.global.console && _typeof(console.log) === 'object') {
    ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(function (method) {
      console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
  }

  var ConsoleAppender = exports.ConsoleAppender = function () {
    function ConsoleAppender() {
      _classCallCheck(this, ConsoleAppender);
    }

    ConsoleAppender.prototype.debug = function debug(logger) {
      var _console;

      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      (_console = console).debug.apply(_console, ['DEBUG [' + logger.id + ']'].concat(rest));
    };

    ConsoleAppender.prototype.info = function info(logger) {
      var _console2;

      for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      (_console2 = console).info.apply(_console2, ['INFO [' + logger.id + ']'].concat(rest));
    };

    ConsoleAppender.prototype.warn = function warn(logger) {
      var _console3;

      for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
      }

      (_console3 = console).warn.apply(_console3, ['WARN [' + logger.id + ']'].concat(rest));
    };

    ConsoleAppender.prototype.error = function error(logger) {
      var _console4;

      for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      (_console4 = console).error.apply(_console4, ['ERROR [' + logger.id + ']'].concat(rest));
    };

    return ConsoleAppender;
  }();
});
define('aurelia-route-recognizer',['exports', 'aurelia-path'], function (exports, _aureliaPath) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RouteRecognizer = exports.EpsilonSegment = exports.StarSegment = exports.DynamicSegment = exports.StaticSegment = exports.State = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var State = exports.State = function () {
    function State(charSpec) {
      _classCallCheck(this, State);

      this.charSpec = charSpec;
      this.nextStates = [];
    }

    State.prototype.get = function get(charSpec) {
      for (var _iterator = this.nextStates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var child = _ref;

        var isEqual = child.charSpec.validChars === charSpec.validChars && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          return child;
        }
      }
    };

    State.prototype.put = function put(charSpec) {
      var state = this.get(charSpec);

      if (state) {
        return state;
      }

      state = new State(charSpec);

      this.nextStates.push(state);

      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      return state;
    };

    State.prototype.match = function match(ch) {
      var nextStates = this.nextStates;
      var results = [];

      for (var i = 0, l = nextStates.length; i < l; i++) {
        var child = nextStates[i];
        var charSpec = child.charSpec;

        if (charSpec.validChars !== undefined) {
          if (charSpec.validChars.indexOf(ch) !== -1) {
            results.push(child);
          }
        } else if (charSpec.invalidChars !== undefined) {
          if (charSpec.invalidChars.indexOf(ch) === -1) {
            results.push(child);
          }
        }
      }

      return results;
    };

    return State;
  }();

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  var StaticSegment = exports.StaticSegment = function () {
    function StaticSegment(string) {
      _classCallCheck(this, StaticSegment);

      this.string = string;
    }

    StaticSegment.prototype.eachChar = function eachChar(callback) {
      var s = this.string;
      for (var i = 0, ii = s.length; i < ii; ++i) {
        var ch = s[i];
        callback({ validChars: ch });
      }
    };

    StaticSegment.prototype.regex = function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    };

    StaticSegment.prototype.generate = function generate() {
      return this.string;
    };

    return StaticSegment;
  }();

  var DynamicSegment = exports.DynamicSegment = function () {
    function DynamicSegment(name) {
      _classCallCheck(this, DynamicSegment);

      this.name = name;
    }

    DynamicSegment.prototype.eachChar = function eachChar(callback) {
      callback({ invalidChars: '/', repeat: true });
    };

    DynamicSegment.prototype.regex = function regex() {
      return '([^/]+)';
    };

    DynamicSegment.prototype.generate = function generate(params, consumed) {
      consumed[this.name] = true;
      return params[this.name];
    };

    return DynamicSegment;
  }();

  var StarSegment = exports.StarSegment = function () {
    function StarSegment(name) {
      _classCallCheck(this, StarSegment);

      this.name = name;
    }

    StarSegment.prototype.eachChar = function eachChar(callback) {
      callback({ invalidChars: '', repeat: true });
    };

    StarSegment.prototype.regex = function regex() {
      return '(.+)';
    };

    StarSegment.prototype.generate = function generate(params, consumed) {
      consumed[this.name] = true;
      return params[this.name];
    };

    return StarSegment;
  }();

  var EpsilonSegment = exports.EpsilonSegment = function () {
    function EpsilonSegment() {
      _classCallCheck(this, EpsilonSegment);
    }

    EpsilonSegment.prototype.eachChar = function eachChar() {};

    EpsilonSegment.prototype.regex = function regex() {
      return '';
    };

    EpsilonSegment.prototype.generate = function generate() {
      return '';
    };

    return EpsilonSegment;
  }();

  var RouteRecognizer = exports.RouteRecognizer = function () {
    function RouteRecognizer() {
      _classCallCheck(this, RouteRecognizer);

      this.rootState = new State();
      this.names = {};
    }

    RouteRecognizer.prototype.add = function add(route) {
      var _this = this;

      if (Array.isArray(route)) {
        route.forEach(function (r) {
          return _this.add(r);
        });
        return undefined;
      }

      var currentState = this.rootState;
      var regex = '^';
      var types = { statics: 0, dynamics: 0, stars: 0 };
      var names = [];
      var routeName = route.handler.name;
      var isEmpty = true;
      var segments = parse(route.path, names, types);

      for (var i = 0, ii = segments.length; i < ii; i++) {
        var segment = segments[i];
        if (segment instanceof EpsilonSegment) {
          continue;
        }

        isEmpty = false;

        currentState = currentState.put({ validChars: '/' });
        regex += '/';

        currentState = addSegment(currentState, segment);
        regex += segment.regex();
      }

      if (isEmpty) {
        currentState = currentState.put({ validChars: '/' });
        regex += '/';
      }

      var handlers = [{ handler: route.handler, names: names }];

      if (routeName) {
        var routeNames = Array.isArray(routeName) ? routeName : [routeName];
        for (var _i2 = 0; _i2 < routeNames.length; _i2++) {
          this.names[routeNames[_i2]] = {
            segments: segments,
            handlers: handlers
          };
        }
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + '$');
      currentState.types = types;

      return currentState;
    };

    RouteRecognizer.prototype.handlersFor = function handlersFor(name) {
      var route = this.names[name];
      if (!route) {
        throw new Error('There is no route named ' + name);
      }

      return [].concat(route.handlers);
    };

    RouteRecognizer.prototype.hasRoute = function hasRoute(name) {
      return !!this.names[name];
    };

    RouteRecognizer.prototype.generate = function generate(name, params) {
      var routeParams = Object.assign({}, params);

      var route = this.names[name];
      if (!route) {
        throw new Error('There is no route named ' + name);
      }

      var segments = route.segments;
      var consumed = {};
      var output = '';

      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += '/';
        var segmentValue = segment.generate(routeParams, consumed);
        if (segmentValue === null || segmentValue === undefined) {
          throw new Error('A value is required for route parameter \'' + segment.name + '\' in route \'' + name + '\'.');
        }

        output += segmentValue;
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      for (var param in consumed) {
        delete routeParams[param];
      }

      var queryString = (0, _aureliaPath.buildQueryString)(routeParams);
      output += queryString ? '?' + queryString : '';

      return output;
    };

    RouteRecognizer.prototype.recognize = function recognize(path) {
      var states = [this.rootState];
      var queryParams = {};
      var isSlashDropped = false;
      var normalizedPath = path;

      var queryStart = normalizedPath.indexOf('?');
      if (queryStart !== -1) {
        var queryString = normalizedPath.substr(queryStart + 1, normalizedPath.length);
        normalizedPath = normalizedPath.substr(0, queryStart);
        queryParams = (0, _aureliaPath.parseQueryString)(queryString);
      }

      normalizedPath = decodeURI(normalizedPath);

      if (normalizedPath.charAt(0) !== '/') {
        normalizedPath = '/' + normalizedPath;
      }

      var pathLen = normalizedPath.length;
      if (pathLen > 1 && normalizedPath.charAt(pathLen - 1) === '/') {
        normalizedPath = normalizedPath.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (var i = 0, l = normalizedPath.length; i < l; i++) {
        states = recognizeChar(states, normalizedPath.charAt(i));
        if (!states.length) {
          break;
        }
      }

      var solutions = [];
      for (var _i3 = 0, _l = states.length; _i3 < _l; _i3++) {
        if (states[_i3].handlers) {
          solutions.push(states[_i3]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];
      if (state && state.handlers) {
        if (isSlashDropped && state.regex.source.slice(-5) === '(.+)$') {
          normalizedPath = normalizedPath + '/';
        }

        return findHandler(state, normalizedPath, queryParams);
      }
    };

    return RouteRecognizer;
  }();

  var RecognizeResults = function RecognizeResults(queryParams) {
    _classCallCheck(this, RecognizeResults);

    this.splice = Array.prototype.splice;
    this.slice = Array.prototype.slice;
    this.push = Array.prototype.push;
    this.length = 0;
    this.queryParams = queryParams || {};
  };

  function parse(route, names, types) {
    var normalizedRoute = route;
    if (route.charAt(0) === '/') {
      normalizedRoute = route.substr(1);
    }

    var results = [];

    var splitRoute = normalizedRoute.split('/');
    for (var i = 0, ii = splitRoute.length; i < ii; ++i) {
      var segment = splitRoute[i];
      var match = segment.match(/^:([^\/]+)$/);
      if (match) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        types.dynamics++;
        continue;
      }

      match = segment.match(/^\*([^\/]+)$/);
      if (match) {
        results.push(new StarSegment(match[1]));
        names.push(match[1]);
        types.stars++;
      } else if (segment === '') {
        results.push(new EpsilonSegment());
      } else {
        results.push(new StaticSegment(segment));
        types.statics++;
      }
    }

    return results;
  }

  function sortSolutions(states) {
    return states.sort(function (a, b) {
      if (a.types.stars !== b.types.stars) {
        return a.types.stars - b.types.stars;
      }

      if (a.types.stars) {
        if (a.types.statics !== b.types.statics) {
          return b.types.statics - a.types.statics;
        }
        if (a.types.dynamics !== b.types.dynamics) {
          return b.types.dynamics - a.types.dynamics;
        }
      }

      if (a.types.dynamics !== b.types.dynamics) {
        return a.types.dynamics - b.types.dynamics;
      }

      if (a.types.statics !== b.types.statics) {
        return b.types.statics - a.types.statics;
      }

      return 0;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];
      nextStates.push.apply(nextStates, state.match(ch));
    }

    return nextStates;
  }

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers;
    var regex = state.regex;
    var captures = path.match(regex);
    var currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var _handler = handlers[i];
      var _names = _handler.names;
      var _params = {};

      for (var j = 0, m = _names.length; j < m; j++) {
        _params[_names[j]] = captures[currentCapture++];
      }

      result.push({ handler: _handler.handler, params: _params, isDynamic: !!_names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    var state = currentState;
    segment.eachChar(function (ch) {
      state = state.put(ch);
    });

    return state;
  }
});
define('aurelia-router',['exports', 'aurelia-logging', 'aurelia-route-recognizer', 'aurelia-dependency-injection', 'aurelia-history', 'aurelia-event-aggregator'], function (exports, _aureliaLogging, _aureliaRouteRecognizer, _aureliaDependencyInjection, _aureliaHistory, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AppRouter = exports.PipelineProvider = exports.LoadRouteStep = exports.RouteLoader = exports.ActivateNextStep = exports.DeactivatePreviousStep = exports.CanActivateNextStep = exports.CanDeactivatePreviousStep = exports.Router = exports.BuildNavigationPlanStep = exports.activationStrategy = exports.RouterConfiguration = exports.Redirect = exports.NavModel = exports.NavigationInstruction = exports.CommitChangesStep = exports.Pipeline = exports.pipelineStatus = undefined;
  exports._normalizeAbsolutePath = _normalizeAbsolutePath;
  exports._createRootedPath = _createRootedPath;
  exports._resolveUrl = _resolveUrl;
  exports.isNavigationCommand = isNavigationCommand;
  exports._buildNavigationPlan = _buildNavigationPlan;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _normalizeAbsolutePath(path, hasPushState) {
    if (!hasPushState && path[0] !== '#') {
      path = '#' + path;
    }

    return path;
  }

  function _createRootedPath(fragment, baseUrl, hasPushState) {
    if (isAbsoluteUrl.test(fragment)) {
      return fragment;
    }

    var path = '';

    if (baseUrl.length && baseUrl[0] !== '/') {
      path += '/';
    }

    path += baseUrl;

    if ((!path.length || path[path.length - 1] !== '/') && fragment[0] !== '/') {
      path += '/';
    }

    if (path.length && path[path.length - 1] === '/' && fragment[0] === '/') {
      path = path.substring(0, path.length - 1);
    }

    return _normalizeAbsolutePath(path + fragment, hasPushState);
  }

  function _resolveUrl(fragment, baseUrl, hasPushState) {
    if (isRootedPath.test(fragment)) {
      return _normalizeAbsolutePath(fragment, hasPushState);
    }

    return _createRootedPath(fragment, baseUrl, hasPushState);
  }

  var isRootedPath = /^#?\//;
  var isAbsoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

  var pipelineStatus = exports.pipelineStatus = {
    completed: 'completed',
    canceled: 'canceled',
    rejected: 'rejected',
    running: 'running'
  };

  var Pipeline = exports.Pipeline = function () {
    function Pipeline() {
      _classCallCheck(this, Pipeline);

      this.steps = [];
    }

    Pipeline.prototype.addStep = function addStep(step) {
      var run = void 0;

      if (typeof step === 'function') {
        run = step;
      } else if (typeof step.getSteps === 'function') {
        var steps = step.getSteps();
        for (var i = 0, l = steps.length; i < l; i++) {
          this.addStep(steps[i]);
        }

        return this;
      } else {
        run = step.run.bind(step);
      }

      this.steps.push(run);

      return this;
    };

    Pipeline.prototype.run = function run(instruction) {
      var index = -1;
      var steps = this.steps;

      function next() {
        index++;

        if (index < steps.length) {
          var currentStep = steps[index];

          try {
            return currentStep(instruction, next);
          } catch (e) {
            return next.reject(e);
          }
        } else {
          return next.complete();
        }
      }

      next.complete = createCompletionHandler(next, pipelineStatus.completed);
      next.cancel = createCompletionHandler(next, pipelineStatus.canceled);
      next.reject = createCompletionHandler(next, pipelineStatus.rejected);

      return next();
    };

    return Pipeline;
  }();

  function createCompletionHandler(next, status) {
    return function (output) {
      return Promise.resolve({ status: status, output: output, completed: status === pipelineStatus.completed });
    };
  }

  var CommitChangesStep = exports.CommitChangesStep = function () {
    function CommitChangesStep() {
      _classCallCheck(this, CommitChangesStep);
    }

    CommitChangesStep.prototype.run = function run(navigationInstruction, next) {
      return navigationInstruction._commitChanges(true).then(function () {
        navigationInstruction._updateTitle();
        return next();
      });
    };

    return CommitChangesStep;
  }();

  var NavigationInstruction = exports.NavigationInstruction = function () {
    function NavigationInstruction(init) {
      _classCallCheck(this, NavigationInstruction);

      this.plan = null;
      this.options = {};

      Object.assign(this, init);

      this.params = this.params || {};
      this.viewPortInstructions = {};

      var ancestorParams = [];
      var current = this;
      do {
        var currentParams = Object.assign({}, current.params);
        if (current.config && current.config.hasChildRouter) {
          delete currentParams[current.getWildCardName()];
        }

        ancestorParams.unshift(currentParams);
        current = current.parentInstruction;
      } while (current);

      var allParams = Object.assign.apply(Object, [{}, this.queryParams].concat(ancestorParams));
      this.lifecycleArgs = [allParams, this.config, this];
    }

    NavigationInstruction.prototype.getAllInstructions = function getAllInstructions() {
      var instructions = [this];
      for (var key in this.viewPortInstructions) {
        var childInstruction = this.viewPortInstructions[key].childNavigationInstruction;
        if (childInstruction) {
          instructions.push.apply(instructions, childInstruction.getAllInstructions());
        }
      }

      return instructions;
    };

    NavigationInstruction.prototype.getAllPreviousInstructions = function getAllPreviousInstructions() {
      return this.getAllInstructions().map(function (c) {
        return c.previousInstruction;
      }).filter(function (c) {
        return c;
      });
    };

    NavigationInstruction.prototype.addViewPortInstruction = function addViewPortInstruction(viewPortName, strategy, moduleId, component) {
      var viewportInstruction = this.viewPortInstructions[viewPortName] = {
        name: viewPortName,
        strategy: strategy,
        moduleId: moduleId,
        component: component,
        childRouter: component.childRouter,
        lifecycleArgs: this.lifecycleArgs.slice()
      };

      return viewportInstruction;
    };

    NavigationInstruction.prototype.getWildCardName = function getWildCardName() {
      var wildcardIndex = this.config.route.lastIndexOf('*');
      return this.config.route.substr(wildcardIndex + 1);
    };

    NavigationInstruction.prototype.getWildcardPath = function getWildcardPath() {
      var wildcardName = this.getWildCardName();
      var path = this.params[wildcardName] || '';

      if (this.queryString) {
        path += '?' + this.queryString;
      }

      return path;
    };

    NavigationInstruction.prototype.getBaseUrl = function getBaseUrl() {
      if (!this.params) {
        return this.fragment;
      }

      var wildcardName = this.getWildCardName();
      var path = this.params[wildcardName] || '';

      if (!path) {
        return this.fragment;
      }

      return this.fragment.substr(0, this.fragment.lastIndexOf(path));
    };

    NavigationInstruction.prototype._commitChanges = function _commitChanges(waitToSwap) {
      var _this = this;

      var router = this.router;
      router.currentInstruction = this;

      if (this.previousInstruction) {
        this.previousInstruction.config.navModel.isActive = false;
      }

      this.config.navModel.isActive = true;

      router._refreshBaseUrl();
      router.refreshNavigation();

      var loads = [];
      var delaySwaps = [];

      var _loop = function _loop(viewPortName) {
        var viewPortInstruction = _this.viewPortInstructions[viewPortName];
        var viewPort = router.viewPorts[viewPortName];

        if (!viewPort) {
          throw new Error('There was no router-view found in the view for ' + viewPortInstruction.moduleId + '.');
        }

        if (viewPortInstruction.strategy === activationStrategy.replace) {
          if (waitToSwap) {
            delaySwaps.push({ viewPort: viewPort, viewPortInstruction: viewPortInstruction });
          }

          loads.push(viewPort.process(viewPortInstruction, waitToSwap).then(function (x) {
            if (viewPortInstruction.childNavigationInstruction) {
              return viewPortInstruction.childNavigationInstruction._commitChanges();
            }
          }));
        } else {
          if (viewPortInstruction.childNavigationInstruction) {
            loads.push(viewPortInstruction.childNavigationInstruction._commitChanges(waitToSwap));
          }
        }
      };

      for (var viewPortName in this.viewPortInstructions) {
        _loop(viewPortName);
      }

      return Promise.all(loads).then(function () {
        delaySwaps.forEach(function (x) {
          return x.viewPort.swap(x.viewPortInstruction);
        });
        return null;
      }).then(function () {
        return prune(_this);
      });
    };

    NavigationInstruction.prototype._updateTitle = function _updateTitle() {
      var title = this._buildTitle();
      if (title) {
        this.router.history.setTitle(title);
      }
    };

    NavigationInstruction.prototype._buildTitle = function _buildTitle() {
      var separator = arguments.length <= 0 || arguments[0] === undefined ? ' | ' : arguments[0];

      var title = this.config.navModel.title || '';
      var childTitles = [];

      for (var viewPortName in this.viewPortInstructions) {
        var _viewPortInstruction = this.viewPortInstructions[viewPortName];

        if (_viewPortInstruction.childNavigationInstruction) {
          var childTitle = _viewPortInstruction.childNavigationInstruction._buildTitle(separator);
          if (childTitle) {
            childTitles.push(childTitle);
          }
        }
      }

      if (childTitles.length) {
        title = childTitles.join(separator) + (title ? separator : '') + title;
      }

      if (this.router.title) {
        title += (title ? separator : '') + this.router.title;
      }

      return title;
    };

    return NavigationInstruction;
  }();

  function prune(instruction) {
    instruction.previousInstruction = null;
    instruction.plan = null;
  }

  var NavModel = exports.NavModel = function () {
    function NavModel(router, relativeHref) {
      _classCallCheck(this, NavModel);

      this.isActive = false;
      this.title = null;
      this.href = null;
      this.relativeHref = null;
      this.settings = {};
      this.config = null;

      this.router = router;
      this.relativeHref = relativeHref;
    }

    NavModel.prototype.setTitle = function setTitle(title) {
      this.title = title;

      if (this.isActive) {
        this.router.updateTitle();
      }
    };

    return NavModel;
  }();

  function isNavigationCommand(obj) {
    return obj && typeof obj.navigate === 'function';
  }

  var Redirect = exports.Redirect = function () {
    function Redirect(url) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _classCallCheck(this, Redirect);

      this.url = url;
      this.options = Object.assign({ trigger: true, replace: true }, options);
      this.shouldContinueProcessing = false;
    }

    Redirect.prototype.setRouter = function setRouter(router) {
      this.router = router;
    };

    Redirect.prototype.navigate = function navigate(appRouter) {
      var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
      navigatingRouter.navigate(this.url, this.options);
    };

    return Redirect;
  }();

  var RouterConfiguration = exports.RouterConfiguration = function () {
    function RouterConfiguration() {
      _classCallCheck(this, RouterConfiguration);

      this.instructions = [];
      this.options = {};
      this.pipelineSteps = [];
    }

    RouterConfiguration.prototype.addPipelineStep = function addPipelineStep(name, step) {
      this.pipelineSteps.push({ name: name, step: step });
      return this;
    };

    RouterConfiguration.prototype.addAuthorizeStep = function addAuthorizeStep(step) {
      return this.addPipelineStep('authorize', step);
    };

    RouterConfiguration.prototype.addPreActivateStep = function addPreActivateStep(step) {
      return this.addPipelineStep('preActivate', step);
    };

    RouterConfiguration.prototype.addPreRenderStep = function addPreRenderStep(step) {
      return this.addPipelineStep('preRender', step);
    };

    RouterConfiguration.prototype.addPostRenderStep = function addPostRenderStep(step) {
      return this.addPipelineStep('postRender', step);
    };

    RouterConfiguration.prototype.map = function map(route) {
      if (Array.isArray(route)) {
        route.forEach(this.map.bind(this));
        return this;
      }

      return this.mapRoute(route);
    };

    RouterConfiguration.prototype.mapRoute = function mapRoute(config) {
      this.instructions.push(function (router) {
        var routeConfigs = [];

        if (Array.isArray(config.route)) {
          for (var i = 0, ii = config.route.length; i < ii; ++i) {
            var _current = Object.assign({}, config);
            _current.route = config.route[i];
            routeConfigs.push(_current);
          }
        } else {
          routeConfigs.push(Object.assign({}, config));
        }

        var navModel = void 0;
        for (var _i = 0, _ii = routeConfigs.length; _i < _ii; ++_i) {
          var routeConfig = routeConfigs[_i];
          routeConfig.settings = routeConfig.settings || {};
          if (!navModel) {
            navModel = router.createNavModel(routeConfig);
          }

          router.addRoute(routeConfig, navModel);
        }
      });

      return this;
    };

    RouterConfiguration.prototype.mapUnknownRoutes = function mapUnknownRoutes(config) {
      this.unknownRouteConfig = config;
      return this;
    };

    RouterConfiguration.prototype.exportToRouter = function exportToRouter(router) {
      var instructions = this.instructions;
      for (var i = 0, ii = instructions.length; i < ii; ++i) {
        instructions[i](router);
      }

      if (this.title) {
        router.title = this.title;
      }

      if (this.unknownRouteConfig) {
        router.handleUnknownRoutes(this.unknownRouteConfig);
      }

      router.options = this.options;

      var pipelineSteps = this.pipelineSteps;
      if (pipelineSteps.length) {
        if (!router.isRoot) {
          throw new Error('Pipeline steps can only be added to the root router');
        }

        var pipelineProvider = router.pipelineProvider;
        for (var _i2 = 0, _ii2 = pipelineSteps.length; _i2 < _ii2; ++_i2) {
          var _pipelineSteps$_i = pipelineSteps[_i2];
          var _name = _pipelineSteps$_i.name;
          var step = _pipelineSteps$_i.step;

          pipelineProvider.addStep(_name, step);
        }
      }
    };

    return RouterConfiguration;
  }();

  var activationStrategy = exports.activationStrategy = {
    noChange: 'no-change',
    invokeLifecycle: 'invoke-lifecycle',
    replace: 'replace'
  };

  var BuildNavigationPlanStep = exports.BuildNavigationPlanStep = function () {
    function BuildNavigationPlanStep() {
      _classCallCheck(this, BuildNavigationPlanStep);
    }

    BuildNavigationPlanStep.prototype.run = function run(navigationInstruction, next) {
      return _buildNavigationPlan(navigationInstruction).then(function (plan) {
        navigationInstruction.plan = plan;
        return next();
      }).catch(next.cancel);
    };

    return BuildNavigationPlanStep;
  }();

  function _buildNavigationPlan(instruction, forceLifecycleMinimum) {
    var prev = instruction.previousInstruction;
    var config = instruction.config;
    var plan = {};

    if ('redirect' in config) {
      var redirectLocation = _resolveUrl(config.redirect, getInstructionBaseUrl(instruction));
      if (instruction.queryString) {
        redirectLocation += '?' + instruction.queryString;
      }

      return Promise.reject(new Redirect(redirectLocation));
    }

    if (prev) {
      var newParams = hasDifferentParameterValues(prev, instruction);
      var pending = [];

      var _loop2 = function _loop2(viewPortName) {
        var prevViewPortInstruction = prev.viewPortInstructions[viewPortName];
        var nextViewPortConfig = config.viewPorts[viewPortName];

        if (!nextViewPortConfig) throw new Error('Invalid Route Config: Configuration for viewPort "' + viewPortName + '" was not found for route: "' + instruction.config.route + '."');

        var viewPortPlan = plan[viewPortName] = {
          name: viewPortName,
          config: nextViewPortConfig,
          prevComponent: prevViewPortInstruction.component,
          prevModuleId: prevViewPortInstruction.moduleId
        };

        if (prevViewPortInstruction.moduleId !== nextViewPortConfig.moduleId) {
          viewPortPlan.strategy = activationStrategy.replace;
        } else if ('determineActivationStrategy' in prevViewPortInstruction.component.viewModel) {
          var _prevViewPortInstruct;

          viewPortPlan.strategy = (_prevViewPortInstruct = prevViewPortInstruction.component.viewModel).determineActivationStrategy.apply(_prevViewPortInstruct, instruction.lifecycleArgs);
        } else if (config.activationStrategy) {
          viewPortPlan.strategy = config.activationStrategy;
        } else if (newParams || forceLifecycleMinimum) {
          viewPortPlan.strategy = activationStrategy.invokeLifecycle;
        } else {
          viewPortPlan.strategy = activationStrategy.noChange;
        }

        if (viewPortPlan.strategy !== activationStrategy.replace && prevViewPortInstruction.childRouter) {
          var path = instruction.getWildcardPath();
          var task = prevViewPortInstruction.childRouter._createNavigationInstruction(path, instruction).then(function (childInstruction) {
            viewPortPlan.childNavigationInstruction = childInstruction;

            return _buildNavigationPlan(childInstruction, viewPortPlan.strategy === activationStrategy.invokeLifecycle).then(function (childPlan) {
              childInstruction.plan = childPlan;
            });
          });

          pending.push(task);
        }
      };

      for (var viewPortName in prev.viewPortInstructions) {
        _loop2(viewPortName);
      }

      return Promise.all(pending).then(function () {
        return plan;
      });
    }

    for (var _viewPortName in config.viewPorts) {
      plan[_viewPortName] = {
        name: _viewPortName,
        strategy: activationStrategy.replace,
        config: instruction.config.viewPorts[_viewPortName]
      };
    }

    return Promise.resolve(plan);
  }

  function hasDifferentParameterValues(prev, next) {
    var prevParams = prev.params;
    var nextParams = next.params;
    var nextWildCardName = next.config.hasChildRouter ? next.getWildCardName() : null;

    for (var key in nextParams) {
      if (key === nextWildCardName) {
        continue;
      }

      if (prevParams[key] !== nextParams[key]) {
        return true;
      }
    }

    for (var _key in prevParams) {
      if (_key === nextWildCardName) {
        continue;
      }

      if (prevParams[_key] !== nextParams[_key]) {
        return true;
      }
    }

    if (!next.options.compareQueryParams) {
      return false;
    }

    var prevQueryParams = prev.queryParams;
    var nextQueryParams = next.queryParams;
    for (var _key2 in nextQueryParams) {
      if (prevQueryParams[_key2] !== nextQueryParams[_key2]) {
        return true;
      }
    }

    for (var _key3 in prevQueryParams) {
      if (prevQueryParams[_key3] !== nextQueryParams[_key3]) {
        return true;
      }
    }

    return false;
  }

  function getInstructionBaseUrl(instruction) {
    var instructionBaseUrlParts = [];
    instruction = instruction.parentInstruction;

    while (instruction) {
      instructionBaseUrlParts.unshift(instruction.getBaseUrl());
      instruction = instruction.parentInstruction;
    }

    instructionBaseUrlParts.unshift('/');
    return instructionBaseUrlParts.join('');
  }

  var Router = exports.Router = function () {
    function Router(container, history) {
      _classCallCheck(this, Router);

      this.parent = null;
      this.options = {};

      this.container = container;
      this.history = history;
      this.reset();
    }

    Router.prototype.reset = function reset() {
      var _this2 = this;

      this.viewPorts = {};
      this.routes = [];
      this.baseUrl = '';
      this.isConfigured = false;
      this.isNavigating = false;
      this.navigation = [];
      this.currentInstruction = null;
      this._fallbackOrder = 100;
      this._recognizer = new _aureliaRouteRecognizer.RouteRecognizer();
      this._childRecognizer = new _aureliaRouteRecognizer.RouteRecognizer();
      this._configuredPromise = new Promise(function (resolve) {
        _this2._resolveConfiguredPromise = resolve;
      });
    };

    Router.prototype.registerViewPort = function registerViewPort(viewPort, name) {
      name = name || 'default';
      this.viewPorts[name] = viewPort;
    };

    Router.prototype.ensureConfigured = function ensureConfigured() {
      return this._configuredPromise;
    };

    Router.prototype.configure = function configure(callbackOrConfig) {
      var _this3 = this;

      this.isConfigured = true;

      var result = callbackOrConfig;
      var config = void 0;
      if (typeof callbackOrConfig === 'function') {
        config = new RouterConfiguration();
        result = callbackOrConfig(config);
      }

      return Promise.resolve(result).then(function (c) {
        if (c && c.exportToRouter) {
          config = c;
        }

        config.exportToRouter(_this3);
        _this3.isConfigured = true;
        _this3._resolveConfiguredPromise();
      });
    };

    Router.prototype.navigate = function navigate(fragment, options) {
      if (!this.isConfigured && this.parent) {
        return this.parent.navigate(fragment, options);
      }

      return this.history.navigate(_resolveUrl(fragment, this.baseUrl, this.history._hasPushState), options);
    };

    Router.prototype.navigateToRoute = function navigateToRoute(route, params, options) {
      var path = this.generate(route, params);
      return this.navigate(path, options);
    };

    Router.prototype.navigateBack = function navigateBack() {
      this.history.navigateBack();
    };

    Router.prototype.createChild = function createChild(container) {
      var childRouter = new Router(container || this.container.createChild(), this.history);
      childRouter.parent = this;
      return childRouter;
    };

    Router.prototype.generate = function generate(name, params) {
      var hasRoute = this._recognizer.hasRoute(name);
      if ((!this.isConfigured || !hasRoute) && this.parent) {
        return this.parent.generate(name, params);
      }

      if (!hasRoute) {
        throw new Error('A route with name \'' + name + '\' could not be found. Check that `name: \'' + name + '\'` was specified in the route\'s config.');
      }

      var path = this._recognizer.generate(name, params);
      return _createRootedPath(path, this.baseUrl, this.history._hasPushState);
    };

    Router.prototype.createNavModel = function createNavModel(config) {
      var navModel = new NavModel(this, 'href' in config ? config.href : config.route);
      navModel.title = config.title;
      navModel.order = config.nav;
      navModel.href = config.href;
      navModel.settings = config.settings;
      navModel.config = config;

      return navModel;
    };

    Router.prototype.addRoute = function addRoute(config, navModel) {
      validateRouteConfig(config);

      if (!('viewPorts' in config) && !config.navigationStrategy) {
        config.viewPorts = {
          'default': {
            moduleId: config.moduleId,
            view: config.view
          }
        };
      }

      if (!navModel) {
        navModel = this.createNavModel(config);
      }

      this.routes.push(config);

      var path = config.route;
      if (path.charAt(0) === '/') {
        path = path.substr(1);
      }

      var state = this._recognizer.add({ path: path, handler: config });

      if (path) {
        var _settings = config.settings;
        delete config.settings;
        var withChild = JSON.parse(JSON.stringify(config));
        config.settings = _settings;
        withChild.route = path + '/*childRoute';
        withChild.hasChildRouter = true;
        this._childRecognizer.add({
          path: withChild.route,
          handler: withChild
        });

        withChild.navModel = navModel;
        withChild.settings = config.settings;
      }

      config.navModel = navModel;

      if ((navModel.order || navModel.order === 0) && this.navigation.indexOf(navModel) === -1) {
        if (!navModel.href && navModel.href !== '' && (state.types.dynamics || state.types.stars)) {
          throw new Error('Invalid route config: dynamic routes must specify an href to be included in the navigation model.');
        }

        if (typeof navModel.order !== 'number') {
          navModel.order = ++this._fallbackOrder;
        }

        this.navigation.push(navModel);
        this.navigation = this.navigation.sort(function (a, b) {
          return a.order - b.order;
        });
      }
    };

    Router.prototype.hasRoute = function hasRoute(name) {
      return !!(this._recognizer.hasRoute(name) || this.parent && this.parent.hasRoute(name));
    };

    Router.prototype.hasOwnRoute = function hasOwnRoute(name) {
      return this._recognizer.hasRoute(name);
    };

    Router.prototype.handleUnknownRoutes = function handleUnknownRoutes(config) {
      var _this4 = this;

      if (!config) {
        throw new Error('Invalid unknown route handler');
      }

      this.catchAllHandler = function (instruction) {
        return _this4._createRouteConfig(config, instruction).then(function (c) {
          instruction.config = c;
          return instruction;
        });
      };
    };

    Router.prototype.updateTitle = function updateTitle() {
      if (this.parent) {
        return this.parent.updateTitle();
      }

      this.currentInstruction._updateTitle();
    };

    Router.prototype.refreshNavigation = function refreshNavigation() {
      var nav = this.navigation;

      for (var i = 0, length = nav.length; i < length; i++) {
        var _current2 = nav[i];
        if (!_current2.href) {
          _current2.href = _createRootedPath(_current2.relativeHref, this.baseUrl, this.history._hasPushState);
        }
      }
    };

    Router.prototype._refreshBaseUrl = function _refreshBaseUrl() {
      if (this.parent) {
        var baseUrl = this.parent.currentInstruction.getBaseUrl();
        this.baseUrl = this.parent.baseUrl + baseUrl;
      }
    };

    Router.prototype._createNavigationInstruction = function _createNavigationInstruction() {
      var url = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var parentInstruction = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      var fragment = url;
      var queryString = '';

      var queryIndex = url.indexOf('?');
      if (queryIndex !== -1) {
        fragment = url.substr(0, queryIndex);
        queryString = url.substr(queryIndex + 1);
      }

      var results = this._recognizer.recognize(url);
      if (!results || !results.length) {
        results = this._childRecognizer.recognize(url);
      }

      var instructionInit = {
        fragment: fragment,
        queryString: queryString,
        config: null,
        parentInstruction: parentInstruction,
        previousInstruction: this.currentInstruction,
        router: this,
        options: {
          compareQueryParams: this.options.compareQueryParams
        }
      };

      if (results && results.length) {
        var first = results[0];
        var _instruction = new NavigationInstruction(Object.assign({}, instructionInit, {
          params: first.params,
          queryParams: first.queryParams || results.queryParams,
          config: first.config || first.handler
        }));

        if (typeof first.handler === 'function') {
          return evaluateNavigationStrategy(_instruction, first.handler, first);
        } else if (first.handler && 'navigationStrategy' in first.handler) {
          return evaluateNavigationStrategy(_instruction, first.handler.navigationStrategy, first.handler);
        }

        return Promise.resolve(_instruction);
      } else if (this.catchAllHandler) {
        var _instruction2 = new NavigationInstruction(Object.assign({}, instructionInit, {
          params: { path: fragment },
          queryParams: results && results.queryParams,
          config: null }));

        return evaluateNavigationStrategy(_instruction2, this.catchAllHandler);
      }

      return Promise.reject(new Error('Route not found: ' + url));
    };

    Router.prototype._createRouteConfig = function _createRouteConfig(config, instruction) {
      var _this5 = this;

      return Promise.resolve(config).then(function (c) {
        if (typeof c === 'string') {
          return { moduleId: c };
        } else if (typeof c === 'function') {
          return c(instruction);
        }

        return c;
      }).then(function (c) {
        return typeof c === 'string' ? { moduleId: c } : c;
      }).then(function (c) {
        c.route = instruction.params.path;
        validateRouteConfig(c);

        if (!c.navModel) {
          c.navModel = _this5.createNavModel(c);
        }

        return c;
      });
    };

    _createClass(Router, [{
      key: 'isRoot',
      get: function get() {
        return !this.parent;
      }
    }]);

    return Router;
  }();

  function validateRouteConfig(config) {
    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
      throw new Error('Invalid Route Config');
    }

    if (typeof config.route !== 'string') {
      throw new Error('Invalid Route Config: You must specify a route pattern.');
    }

    if (!('redirect' in config || config.moduleId || config.navigationStrategy || config.viewPorts)) {
      throw new Error('Invalid Route Config: You must specify a moduleId, redirect, navigationStrategy, or viewPorts.');
    }
  }

  function evaluateNavigationStrategy(instruction, evaluator, context) {
    return Promise.resolve(evaluator.call(context, instruction)).then(function () {
      if (!('viewPorts' in instruction.config)) {
        instruction.config.viewPorts = {
          'default': {
            moduleId: instruction.config.moduleId
          }
        };
      }

      return instruction;
    });
  }

  var CanDeactivatePreviousStep = exports.CanDeactivatePreviousStep = function () {
    function CanDeactivatePreviousStep() {
      _classCallCheck(this, CanDeactivatePreviousStep);
    }

    CanDeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
      return processDeactivatable(navigationInstruction.plan, 'canDeactivate', next);
    };

    return CanDeactivatePreviousStep;
  }();

  var CanActivateNextStep = exports.CanActivateNextStep = function () {
    function CanActivateNextStep() {
      _classCallCheck(this, CanActivateNextStep);
    }

    CanActivateNextStep.prototype.run = function run(navigationInstruction, next) {
      return processActivatable(navigationInstruction, 'canActivate', next);
    };

    return CanActivateNextStep;
  }();

  var DeactivatePreviousStep = exports.DeactivatePreviousStep = function () {
    function DeactivatePreviousStep() {
      _classCallCheck(this, DeactivatePreviousStep);
    }

    DeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
      return processDeactivatable(navigationInstruction.plan, 'deactivate', next, true);
    };

    return DeactivatePreviousStep;
  }();

  var ActivateNextStep = exports.ActivateNextStep = function () {
    function ActivateNextStep() {
      _classCallCheck(this, ActivateNextStep);
    }

    ActivateNextStep.prototype.run = function run(navigationInstruction, next) {
      return processActivatable(navigationInstruction, 'activate', next, true);
    };

    return ActivateNextStep;
  }();

  function processDeactivatable(plan, callbackName, next, ignoreResult) {
    var infos = findDeactivatable(plan, callbackName);
    var i = infos.length;

    function inspect(val) {
      if (ignoreResult || shouldContinue(val)) {
        return iterate();
      }

      return next.cancel(val);
    }

    function iterate() {
      if (i--) {
        try {
          var viewModel = infos[i];
          var _result = viewModel[callbackName]();
          return processPotential(_result, inspect, next.cancel);
        } catch (error) {
          return next.cancel(error);
        }
      }

      return next();
    }

    return iterate();
  }

  function findDeactivatable(plan, callbackName) {
    var list = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    for (var viewPortName in plan) {
      var _viewPortPlan = plan[viewPortName];
      var prevComponent = _viewPortPlan.prevComponent;

      if ((_viewPortPlan.strategy === activationStrategy.invokeLifecycle || _viewPortPlan.strategy === activationStrategy.replace) && prevComponent) {
        var viewModel = prevComponent.viewModel;

        if (callbackName in viewModel) {
          list.push(viewModel);
        }
      }

      if (_viewPortPlan.childNavigationInstruction) {
        findDeactivatable(_viewPortPlan.childNavigationInstruction.plan, callbackName, list);
      } else if (prevComponent) {
        addPreviousDeactivatable(prevComponent, callbackName, list);
      }
    }

    return list;
  }

  function addPreviousDeactivatable(component, callbackName, list) {
    var childRouter = component.childRouter;

    if (childRouter && childRouter.currentInstruction) {
      var viewPortInstructions = childRouter.currentInstruction.viewPortInstructions;

      for (var viewPortName in viewPortInstructions) {
        var _viewPortInstruction2 = viewPortInstructions[viewPortName];
        var prevComponent = _viewPortInstruction2.component;
        var prevViewModel = prevComponent.viewModel;

        if (callbackName in prevViewModel) {
          list.push(prevViewModel);
        }

        addPreviousDeactivatable(prevComponent, callbackName, list);
      }
    }
  }

  function processActivatable(navigationInstruction, callbackName, next, ignoreResult) {
    var infos = findActivatable(navigationInstruction, callbackName);
    var length = infos.length;
    var i = -1;

    function inspect(val, router) {
      if (ignoreResult || shouldContinue(val, router)) {
        return iterate();
      }

      return next.cancel(val);
    }

    function iterate() {
      i++;

      if (i < length) {
        try {
          var _ret3 = function () {
            var _current$viewModel;

            var current = infos[i];
            var result = (_current$viewModel = current.viewModel)[callbackName].apply(_current$viewModel, current.lifecycleArgs);
            return {
              v: processPotential(result, function (val) {
                return inspect(val, current.router);
              }, next.cancel)
            };
          }();

          if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
        } catch (error) {
          return next.cancel(error);
        }
      }

      return next();
    }

    return iterate();
  }

  function findActivatable(navigationInstruction, callbackName) {
    var list = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
    var router = arguments[3];

    var plan = navigationInstruction.plan;

    Object.keys(plan).filter(function (viewPortName) {
      var viewPortPlan = plan[viewPortName];
      var viewPortInstruction = navigationInstruction.viewPortInstructions[viewPortName];
      var viewModel = viewPortInstruction.component.viewModel;

      if ((viewPortPlan.strategy === activationStrategy.invokeLifecycle || viewPortPlan.strategy === activationStrategy.replace) && callbackName in viewModel) {
        list.push({
          viewModel: viewModel,
          lifecycleArgs: viewPortInstruction.lifecycleArgs,
          router: router
        });
      }

      if (viewPortPlan.childNavigationInstruction) {
        findActivatable(viewPortPlan.childNavigationInstruction, callbackName, list, viewPortInstruction.component.childRouter || router);
      }
    });

    return list;
  }

  function shouldContinue(output, router) {
    if (output instanceof Error) {
      return false;
    }

    if (isNavigationCommand(output)) {
      if (typeof output.setRouter === 'function') {
        output.setRouter(router);
      }

      return !!output.shouldContinueProcessing;
    }

    if (output === undefined) {
      return true;
    }

    return output;
  }

  function processPotential(obj, resolve, reject) {
    if (obj && typeof obj.then === 'function') {
      return Promise.resolve(obj).then(resolve).catch(reject);
    }

    try {
      return resolve(obj);
    } catch (error) {
      return reject(error);
    }
  }

  var RouteLoader = exports.RouteLoader = function () {
    function RouteLoader() {
      _classCallCheck(this, RouteLoader);
    }

    RouteLoader.prototype.loadRoute = function loadRoute(router, config, navigationInstruction) {
      throw Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".');
    };

    return RouteLoader;
  }();

  var LoadRouteStep = exports.LoadRouteStep = function () {
    LoadRouteStep.inject = function inject() {
      return [RouteLoader];
    };

    function LoadRouteStep(routeLoader) {
      _classCallCheck(this, LoadRouteStep);

      this.routeLoader = routeLoader;
    }

    LoadRouteStep.prototype.run = function run(navigationInstruction, next) {
      return loadNewRoute(this.routeLoader, navigationInstruction).then(next).catch(next.cancel);
    };

    return LoadRouteStep;
  }();

  function loadNewRoute(routeLoader, navigationInstruction) {
    var toLoad = determineWhatToLoad(navigationInstruction);
    var loadPromises = toLoad.map(function (current) {
      return loadRoute(routeLoader, current.navigationInstruction, current.viewPortPlan);
    });

    return Promise.all(loadPromises);
  }

  function determineWhatToLoad(navigationInstruction) {
    var toLoad = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    var plan = navigationInstruction.plan;

    for (var viewPortName in plan) {
      var _viewPortPlan2 = plan[viewPortName];

      if (_viewPortPlan2.strategy === activationStrategy.replace) {
        toLoad.push({ viewPortPlan: _viewPortPlan2, navigationInstruction: navigationInstruction });

        if (_viewPortPlan2.childNavigationInstruction) {
          determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad);
        }
      } else {
        var _viewPortInstruction3 = navigationInstruction.addViewPortInstruction(viewPortName, _viewPortPlan2.strategy, _viewPortPlan2.prevModuleId, _viewPortPlan2.prevComponent);

        if (_viewPortPlan2.childNavigationInstruction) {
          _viewPortInstruction3.childNavigationInstruction = _viewPortPlan2.childNavigationInstruction;
          determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad);
        }
      }
    }

    return toLoad;
  }

  function loadRoute(routeLoader, navigationInstruction, viewPortPlan) {
    var moduleId = viewPortPlan.config.moduleId;

    return loadComponent(routeLoader, navigationInstruction, viewPortPlan.config).then(function (component) {
      var viewPortInstruction = navigationInstruction.addViewPortInstruction(viewPortPlan.name, viewPortPlan.strategy, moduleId, component);

      var childRouter = component.childRouter;
      if (childRouter) {
        var path = navigationInstruction.getWildcardPath();

        return childRouter._createNavigationInstruction(path, navigationInstruction).then(function (childInstruction) {
          viewPortPlan.childNavigationInstruction = childInstruction;

          return _buildNavigationPlan(childInstruction).then(function (childPlan) {
            childInstruction.plan = childPlan;
            viewPortInstruction.childNavigationInstruction = childInstruction;

            return loadNewRoute(routeLoader, childInstruction);
          });
        });
      }
    });
  }

  function loadComponent(routeLoader, navigationInstruction, config) {
    var router = navigationInstruction.router;
    var lifecycleArgs = navigationInstruction.lifecycleArgs;

    return routeLoader.loadRoute(router, config, navigationInstruction).then(function (component) {
      var viewModel = component.viewModel;
      var childContainer = component.childContainer;

      component.router = router;
      component.config = config;

      if ('configureRouter' in viewModel) {
        var _ret4 = function () {
          var childRouter = childContainer.getChildRouter();
          component.childRouter = childRouter;

          return {
            v: childRouter.configure(function (c) {
              return viewModel.configureRouter.apply(viewModel, [c, childRouter].concat(lifecycleArgs));
            }).then(function () {
              return component;
            })
          };
        }();

        if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
      }

      return component;
    });
  }

  var PipelineProvider = exports.PipelineProvider = function () {
    PipelineProvider.inject = function inject() {
      return [_aureliaDependencyInjection.Container];
    };

    function PipelineProvider(container) {
      _classCallCheck(this, PipelineProvider);

      this.container = container;
      this.steps = [BuildNavigationPlanStep, CanDeactivatePreviousStep, LoadRouteStep, this._createPipelineSlot('authorize'), CanActivateNextStep, this._createPipelineSlot('preActivate', 'modelbind'), DeactivatePreviousStep, ActivateNextStep, this._createPipelineSlot('preRender', 'precommit'), CommitChangesStep, this._createPipelineSlot('postRender', 'postcomplete')];
    }

    PipelineProvider.prototype.createPipeline = function createPipeline() {
      var _this6 = this;

      var pipeline = new Pipeline();
      this.steps.forEach(function (step) {
        return pipeline.addStep(_this6.container.get(step));
      });
      return pipeline;
    };

    PipelineProvider.prototype.addStep = function addStep(name, step) {
      var found = this.steps.find(function (x) {
        return x.slotName === name || x.slotAlias === name;
      });
      if (found) {
        found.steps.push(step);
      } else {
        throw new Error('Invalid pipeline slot name: ' + name + '.');
      }
    };

    PipelineProvider.prototype._createPipelineSlot = function _createPipelineSlot(name, alias) {
      var _class6, _temp;

      var PipelineSlot = (_temp = _class6 = function () {
        function PipelineSlot(container) {
          _classCallCheck(this, PipelineSlot);

          this.container = container;
        }

        PipelineSlot.prototype.getSteps = function getSteps() {
          var _this7 = this;

          return PipelineSlot.steps.map(function (x) {
            return _this7.container.get(x);
          });
        };

        return PipelineSlot;
      }(), _class6.inject = [_aureliaDependencyInjection.Container], _class6.slotName = name, _class6.slotAlias = alias, _class6.steps = [], _temp);


      return PipelineSlot;
    };

    return PipelineProvider;
  }();

  var logger = LogManager.getLogger('app-router');

  var AppRouter = exports.AppRouter = function (_Router) {
    _inherits(AppRouter, _Router);

    AppRouter.inject = function inject() {
      return [_aureliaDependencyInjection.Container, _aureliaHistory.History, PipelineProvider, _aureliaEventAggregator.EventAggregator];
    };

    function AppRouter(container, history, pipelineProvider, events) {
      _classCallCheck(this, AppRouter);

      var _this8 = _possibleConstructorReturn(this, _Router.call(this, container, history));

      _this8.pipelineProvider = pipelineProvider;
      _this8.events = events;
      return _this8;
    }

    AppRouter.prototype.reset = function reset() {
      _Router.prototype.reset.call(this);
      this.maxInstructionCount = 10;
      if (!this._queue) {
        this._queue = [];
      } else {
        this._queue.length = 0;
      }
    };

    AppRouter.prototype.loadUrl = function loadUrl(url) {
      var _this9 = this;

      return this._createNavigationInstruction(url).then(function (instruction) {
        return _this9._queueInstruction(instruction);
      }).catch(function (error) {
        logger.error(error);
        restorePreviousLocation(_this9);
      });
    };

    AppRouter.prototype.registerViewPort = function registerViewPort(viewPort, name) {
      var _this10 = this;

      _Router.prototype.registerViewPort.call(this, viewPort, name);

      if (!this.isActive) {
        var _ret5 = function () {
          var viewModel = _this10._findViewModel(viewPort);
          if ('configureRouter' in viewModel) {
            if (!_this10.isConfigured) {
              var _ret6 = function () {
                var resolveConfiguredPromise = _this10._resolveConfiguredPromise;
                _this10._resolveConfiguredPromise = function () {};
                return {
                  v: {
                    v: _this10.configure(function (config) {
                      return viewModel.configureRouter(config, _this10);
                    }).then(function () {
                      _this10.activate();
                      resolveConfiguredPromise();
                    })
                  }
                };
              }();

              if ((typeof _ret6 === 'undefined' ? 'undefined' : _typeof(_ret6)) === "object") return _ret6.v;
            }
          } else {
            _this10.activate();
          }
        }();

        if ((typeof _ret5 === 'undefined' ? 'undefined' : _typeof(_ret5)) === "object") return _ret5.v;
      } else {
        this._dequeueInstruction();
      }

      return Promise.resolve();
    };

    AppRouter.prototype.activate = function activate(options) {
      if (this.isActive) {
        return;
      }

      this.isActive = true;
      this.options = Object.assign({ routeHandler: this.loadUrl.bind(this) }, this.options, options);
      this.history.activate(this.options);
      this._dequeueInstruction();
    };

    AppRouter.prototype.deactivate = function deactivate() {
      this.isActive = false;
      this.history.deactivate();
    };

    AppRouter.prototype._queueInstruction = function _queueInstruction(instruction) {
      var _this11 = this;

      return new Promise(function (resolve) {
        instruction.resolve = resolve;
        _this11._queue.unshift(instruction);
        _this11._dequeueInstruction();
      });
    };

    AppRouter.prototype._dequeueInstruction = function _dequeueInstruction() {
      var _this12 = this;

      var instructionCount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return Promise.resolve().then(function () {
        if (_this12.isNavigating && !instructionCount) {
          return undefined;
        }

        var instruction = _this12._queue.shift();
        _this12._queue.length = 0;

        if (!instruction) {
          return undefined;
        }

        _this12.isNavigating = true;
        instruction.previousInstruction = _this12.currentInstruction;

        if (!instructionCount) {
          _this12.events.publish('router:navigation:processing', { instruction: instruction });
        } else if (instructionCount === _this12.maxInstructionCount - 1) {
          logger.error(instructionCount + 1 + ' navigation instructions have been attempted without success. Restoring last known good location.');
          restorePreviousLocation(_this12);
          return _this12._dequeueInstruction(instructionCount + 1);
        } else if (instructionCount > _this12.maxInstructionCount) {
          throw new Error('Maximum navigation attempts exceeded. Giving up.');
        }

        var pipeline = _this12.pipelineProvider.createPipeline();

        return pipeline.run(instruction).then(function (result) {
          return processResult(instruction, result, instructionCount, _this12);
        }).catch(function (error) {
          return { output: error instanceof Error ? error : new Error(error) };
        }).then(function (result) {
          return resolveInstruction(instruction, result, !!instructionCount, _this12);
        });
      });
    };

    AppRouter.prototype._findViewModel = function _findViewModel(viewPort) {
      if (this.container.viewModel) {
        return this.container.viewModel;
      }

      if (viewPort.container) {
        var container = viewPort.container;

        while (container) {
          if (container.viewModel) {
            this.container.viewModel = container.viewModel;
            return container.viewModel;
          }

          container = container.parent;
        }
      }
    };

    return AppRouter;
  }(Router);

  function processResult(instruction, result, instructionCount, router) {
    if (!(result && 'completed' in result && 'output' in result)) {
      result = result || {};
      result.output = new Error('Expected router pipeline to return a navigation result, but got [' + JSON.stringify(result) + '] instead.');
    }

    var finalResult = null;
    if (isNavigationCommand(result.output)) {
      result.output.navigate(router);
    } else {
      finalResult = result;

      if (!result.completed) {
        if (result.output instanceof Error) {
          logger.error(result.output);
        }

        restorePreviousLocation(router);
      }
    }

    return router._dequeueInstruction(instructionCount + 1).then(function (innerResult) {
      return finalResult || innerResult || result;
    });
  }

  function resolveInstruction(instruction, result, isInnerInstruction, router) {
    instruction.resolve(result);

    if (!isInnerInstruction) {
      router.isNavigating = false;
      var eventArgs = { instruction: instruction, result: result };
      var eventName = void 0;

      if (result.output instanceof Error) {
        eventName = 'error';
      } else if (!result.completed) {
        eventName = 'canceled';
      } else {
        var _queryString = instruction.queryString ? '?' + instruction.queryString : '';
        router.history.previousLocation = instruction.fragment + _queryString;
        eventName = 'success';
      }

      router.events.publish('router:navigation:' + eventName, eventArgs);
      router.events.publish('router:navigation:complete', eventArgs);
    }

    return result;
  }

  function restorePreviousLocation(router) {
    var previousLocation = router.history.previousLocation;
    if (previousLocation) {
      router.navigate(router.history.previousLocation, { trigger: false, replace: true });
    } else {
      logger.error('Router navigation failed, and no previous location could be restored.');
    }
  }
});
define('aurelia-templating-binding',['exports', 'aurelia-logging', 'aurelia-binding', 'aurelia-templating'], function (exports, _aureliaLogging, _aureliaBinding, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TemplatingBindingLanguage = exports.SyntaxInterpreter = exports.ChildInterpolationBinding = exports.InterpolationBinding = exports.InterpolationBindingExpression = undefined;
  exports.configure = configure;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _dec, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var InterpolationBindingExpression = exports.InterpolationBindingExpression = function () {
    function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, lookupFunctions, attribute) {
      _classCallCheck(this, InterpolationBindingExpression);

      this.observerLocator = observerLocator;
      this.targetProperty = targetProperty;
      this.parts = parts;
      this.mode = mode;
      this.lookupFunctions = lookupFunctions;
      this.attribute = this.attrToRemove = attribute;
      this.discrete = false;
    }

    InterpolationBindingExpression.prototype.createBinding = function createBinding(target) {
      if (this.parts.length === 3) {
        return new ChildInterpolationBinding(target, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]);
      }
      return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.lookupFunctions);
    };

    return InterpolationBindingExpression;
  }();

  function validateTarget(target, propertyName) {
    if (propertyName === 'style') {
      LogManager.getLogger('templating-binding').info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');
    } else if (target.parentElement && target.parentElement.nodeName === 'TEXTAREA' && propertyName === 'textContent') {
      throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.');
    }
  }

  var InterpolationBinding = exports.InterpolationBinding = function () {
    function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, lookupFunctions) {
      _classCallCheck(this, InterpolationBinding);

      validateTarget(target, targetProperty);
      this.observerLocator = observerLocator;
      this.parts = parts;
      this.target = target;
      this.targetProperty = targetProperty;
      this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
      this.mode = mode;
      this.lookupFunctions = lookupFunctions;
    }

    InterpolationBinding.prototype.interpolate = function interpolate() {
      if (this.isBound) {
        var value = '';
        var parts = this.parts;
        for (var i = 0, ii = parts.length; i < ii; i++) {
          value += i % 2 === 0 ? parts[i] : this['childBinding' + i].value;
        }
        this.targetAccessor.setValue(value, this.target, this.targetProperty);
      }
    };

    InterpolationBinding.prototype.updateOneTimeBindings = function updateOneTimeBindings() {
      for (var i = 1, ii = this.parts.length; i < ii; i += 2) {
        var child = this['childBinding' + i];
        if (child.mode === _aureliaBinding.bindingMode.oneTime) {
          child.call();
        }
      }
    };

    InterpolationBinding.prototype.bind = function bind(source) {
      if (this.isBound) {
        if (this.source === source) {
          return;
        }
        this.unbind();
      }
      this.source = source;

      var parts = this.parts;
      for (var i = 1, ii = parts.length; i < ii; i += 2) {
        var binding = new ChildInterpolationBinding(this, this.observerLocator, parts[i], this.mode, this.lookupFunctions);
        binding.bind(source);
        this['childBinding' + i] = binding;
      }

      this.isBound = true;
      this.interpolate();
    };

    InterpolationBinding.prototype.unbind = function unbind() {
      if (!this.isBound) {
        return;
      }
      this.isBound = false;
      this.source = null;
      var parts = this.parts;
      for (var i = 1, ii = parts.length; i < ii; i += 2) {
        var name = 'childBinding' + i;
        this[name].unbind();
      }
    };

    return InterpolationBinding;
  }();

  var ChildInterpolationBinding = exports.ChildInterpolationBinding = (_dec = (0, _aureliaBinding.connectable)(), _dec(_class = function () {
    function ChildInterpolationBinding(target, observerLocator, sourceExpression, mode, lookupFunctions, targetProperty, left, right) {
      _classCallCheck(this, ChildInterpolationBinding);

      if (target instanceof InterpolationBinding) {
        this.parent = target;
      } else {
        validateTarget(target, targetProperty);
        this.target = target;
        this.targetProperty = targetProperty;
        this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
      }
      this.observerLocator = observerLocator;
      this.sourceExpression = sourceExpression;
      this.mode = mode;
      this.lookupFunctions = lookupFunctions;
      this.left = left;
      this.right = right;
    }

    ChildInterpolationBinding.prototype.updateTarget = function updateTarget(value) {
      value = value === null || value === undefined ? '' : value.toString();
      if (value !== this.value) {
        this.value = value;
        if (this.parent) {
          this.parent.interpolate();
        } else {
          this.targetAccessor.setValue(this.left + value + this.right, this.target, this.targetProperty);
        }
      }
    };

    ChildInterpolationBinding.prototype.call = function call() {
      if (!this.isBound) {
        return;
      }

      var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
      this.updateTarget(value);

      if (this.mode !== _aureliaBinding.bindingMode.oneTime) {
        this._version++;
        this.sourceExpression.connect(this, this.source);
        if (value instanceof Array) {
          this.observeArray(value);
        }
        this.unobserve(false);
      }
    };

    ChildInterpolationBinding.prototype.bind = function bind(source) {
      if (this.isBound) {
        if (this.source === source) {
          return;
        }
        this.unbind();
      }
      this.isBound = true;
      this.source = source;

      var sourceExpression = this.sourceExpression;
      if (sourceExpression.bind) {
        sourceExpression.bind(this, source, this.lookupFunctions);
      }

      var value = sourceExpression.evaluate(source, this.lookupFunctions);
      this.updateTarget(value);

      if (this.mode === _aureliaBinding.bindingMode.oneWay) {
        (0, _aureliaBinding.enqueueBindingConnect)(this);
      }
    };

    ChildInterpolationBinding.prototype.unbind = function unbind() {
      if (!this.isBound) {
        return;
      }
      this.isBound = false;
      var sourceExpression = this.sourceExpression;
      if (sourceExpression.unbind) {
        sourceExpression.unbind(this, this.source);
      }
      this.source = null;
      this.unobserve(true);
    };

    ChildInterpolationBinding.prototype.connect = function connect(evaluate) {
      if (!this.isBound) {
        return;
      }
      if (evaluate) {
        var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
        this.updateTarget(value);
      }
      this.sourceExpression.connect(this, this.source);
      if (this.value instanceof Array) {
        this.observeArray(this.value);
      }
    };

    return ChildInterpolationBinding;
  }()) || _class);

  var SyntaxInterpreter = exports.SyntaxInterpreter = function () {
    SyntaxInterpreter.inject = function inject() {
      return [_aureliaBinding.Parser, _aureliaBinding.ObserverLocator, _aureliaBinding.EventManager];
    };

    function SyntaxInterpreter(parser, observerLocator, eventManager) {
      _classCallCheck(this, SyntaxInterpreter);

      this.parser = parser;
      this.observerLocator = observerLocator;
      this.eventManager = eventManager;
    }

    SyntaxInterpreter.prototype.interpret = function interpret(resources, element, info, existingInstruction, context) {
      if (info.command in this) {
        return this[info.command](resources, element, info, existingInstruction, context);
      }

      return this.handleUnknownCommand(resources, element, info, existingInstruction, context);
    };

    SyntaxInterpreter.prototype.handleUnknownCommand = function handleUnknownCommand(resources, element, info, existingInstruction, context) {
      LogManager.getLogger('templating-binding').warn('Unknown binding command.', info);
      return existingInstruction;
    };

    SyntaxInterpreter.prototype.determineDefaultBindingMode = function determineDefaultBindingMode(element, attrName, context) {
      var tagName = element.tagName.toLowerCase();

      if (tagName === 'input' && (attrName === 'value' || attrName === 'checked' || attrName === 'files') || (tagName === 'textarea' || tagName === 'select') && attrName === 'value' || (attrName === 'textcontent' || attrName === 'innerhtml') && element.contentEditable === 'true' || attrName === 'scrolltop' || attrName === 'scrollleft') {
        return _aureliaBinding.bindingMode.twoWay;
      }

      if (context && attrName in context.attributes && context.attributes[attrName] && context.attributes[attrName].defaultBindingMode >= _aureliaBinding.bindingMode.oneTime) {
        return context.attributes[attrName].defaultBindingMode;
      }

      return _aureliaBinding.bindingMode.oneWay;
    };

    SyntaxInterpreter.prototype.bind = function bind(resources, element, info, existingInstruction, context) {
      var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

      instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), info.defaultBindingMode || this.determineDefaultBindingMode(element, info.attrName, context), resources.lookupFunctions);

      return instruction;
    };

    SyntaxInterpreter.prototype.trigger = function trigger(resources, element, info) {
      return new _aureliaBinding.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), false, true, resources.lookupFunctions);
    };

    SyntaxInterpreter.prototype.delegate = function delegate(resources, element, info) {
      return new _aureliaBinding.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), true, true, resources.lookupFunctions);
    };

    SyntaxInterpreter.prototype.call = function call(resources, element, info, existingInstruction) {
      var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

      instruction.attributes[info.attrName] = new _aureliaBinding.CallExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.lookupFunctions);

      return instruction;
    };

    SyntaxInterpreter.prototype.options = function options(resources, element, info, existingInstruction, context) {
      var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);
      var attrValue = info.attrValue;
      var language = this.language;
      var name = null;
      var target = '';
      var current = void 0;
      var i = void 0;
      var ii = void 0;
      var inString = false;
      var inEscape = false;

      for (i = 0, ii = attrValue.length; i < ii; ++i) {
        current = attrValue[i];

        if (current === ';' && !inString) {
          info = language.inspectAttribute(resources, name, target.trim());
          language.createAttributeInstruction(resources, element, info, instruction, context);

          if (!instruction.attributes[info.attrName]) {
            instruction.attributes[info.attrName] = info.attrValue;
          }

          target = '';
          name = null;
        } else if (current === ':' && name === null) {
          name = target.trim();
          target = '';
        } else if (current === '\\') {
          target += current;
          inEscape = true;
          continue;
        } else {
          target += current;

          if (name !== null && inEscape === false && current === '\'') {
            inString = !inString;
          }
        }

        inEscape = false;
      }

      if (name !== null) {
        info = language.inspectAttribute(resources, name, target.trim());
        language.createAttributeInstruction(resources, element, info, instruction, context);

        if (!instruction.attributes[info.attrName]) {
          instruction.attributes[info.attrName] = info.attrValue;
        }
      }

      return instruction;
    };

    SyntaxInterpreter.prototype['for'] = function _for(resources, element, info, existingInstruction) {
      var parts = void 0;
      var keyValue = void 0;
      var instruction = void 0;
      var attrValue = void 0;
      var isDestructuring = void 0;

      attrValue = info.attrValue;
      isDestructuring = attrValue.match(/^ *[[].+[\]]/);
      parts = isDestructuring ? attrValue.split('of ') : attrValue.split(' of ');

      if (parts.length !== 2) {
        throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
      }

      instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

      if (isDestructuring) {
        keyValue = parts[0].replace(/[[\]]/g, '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
        instruction.attributes.key = keyValue[0];
        instruction.attributes.value = keyValue[1];
      } else {
        instruction.attributes.local = parts[0];
      }

      instruction.attributes.items = new _aureliaBinding.BindingExpression(this.observerLocator, 'items', this.parser.parse(parts[1]), _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions);

      return instruction;
    };

    SyntaxInterpreter.prototype['two-way'] = function twoWay(resources, element, info, existingInstruction) {
      var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

      instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.twoWay, resources.lookupFunctions);

      return instruction;
    };

    SyntaxInterpreter.prototype['one-way'] = function oneWay(resources, element, info, existingInstruction) {
      var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

      instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions);

      return instruction;
    };

    SyntaxInterpreter.prototype['one-time'] = function oneTime(resources, element, info, existingInstruction) {
      var instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(info.attrName);

      instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.oneTime, resources.lookupFunctions);

      return instruction;
    };

    return SyntaxInterpreter;
  }();

  var info = {};

  var TemplatingBindingLanguage = exports.TemplatingBindingLanguage = function (_BindingLanguage) {
    _inherits(TemplatingBindingLanguage, _BindingLanguage);

    TemplatingBindingLanguage.inject = function inject() {
      return [_aureliaBinding.Parser, _aureliaBinding.ObserverLocator, SyntaxInterpreter];
    };

    function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter) {
      _classCallCheck(this, TemplatingBindingLanguage);

      var _this = _possibleConstructorReturn(this, _BindingLanguage.call(this));

      _this.parser = parser;
      _this.observerLocator = observerLocator;
      _this.syntaxInterpreter = syntaxInterpreter;
      _this.emptyStringExpression = _this.parser.parse('\'\'');
      syntaxInterpreter.language = _this;
      _this.attributeMap = syntaxInterpreter.attributeMap = {
        'accesskey': 'accessKey',
        'contenteditable': 'contentEditable',
        'for': 'htmlFor',
        'tabindex': 'tabIndex',
        'textcontent': 'textContent',
        'innerhtml': 'innerHTML',

        'maxlength': 'maxLength',
        'minlength': 'minLength',
        'formaction': 'formAction',
        'formenctype': 'formEncType',
        'formmethod': 'formMethod',
        'formnovalidate': 'formNoValidate',
        'formtarget': 'formTarget',
        'rowspan': 'rowSpan',
        'colspan': 'colSpan',
        'scrolltop': 'scrollTop',
        'scrollleft': 'scrollLeft',
        'readonly': 'readOnly'
      };
      return _this;
    }

    TemplatingBindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, attrName, attrValue) {
      var parts = attrName.split('.');

      info.defaultBindingMode = null;

      if (parts.length === 2) {
        info.attrName = parts[0].trim();
        info.attrValue = attrValue;
        info.command = parts[1].trim();

        if (info.command === 'ref') {
          info.expression = new _aureliaBinding.NameExpression(this.parser.parse(attrValue), info.attrName);
          info.command = null;
          info.attrName = 'ref';
        } else {
          info.expression = null;
        }
      } else if (attrName === 'ref') {
        info.attrName = attrName;
        info.attrValue = attrValue;
        info.command = null;
        info.expression = new _aureliaBinding.NameExpression(this.parser.parse(attrValue), 'element');
      } else {
        info.attrName = attrName;
        info.attrValue = attrValue;
        info.command = null;
        info.expression = this.parseContent(resources, attrName, attrValue);
      }

      return info;
    };

    TemplatingBindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, theInfo, existingInstruction, context) {
      var instruction = void 0;

      if (theInfo.expression) {
        if (theInfo.attrName === 'ref') {
          return theInfo.expression;
        }

        instruction = existingInstruction || _aureliaTemplating.BehaviorInstruction.attribute(theInfo.attrName);
        instruction.attributes[theInfo.attrName] = theInfo.expression;
      } else if (theInfo.command) {
        instruction = this.syntaxInterpreter.interpret(resources, element, theInfo, existingInstruction, context);
      }

      return instruction;
    };

    TemplatingBindingLanguage.prototype.parseText = function parseText(resources, value) {
      return this.parseContent(resources, 'textContent', value);
    };

    TemplatingBindingLanguage.prototype.parseContent = function parseContent(resources, attrName, attrValue) {
      var i = attrValue.indexOf('${', 0);
      var ii = attrValue.length;
      var char = void 0;
      var pos = 0;
      var open = 0;
      var quote = null;
      var interpolationStart = void 0;
      var parts = void 0;
      var partIndex = 0;

      while (i >= 0 && i < ii - 2) {
        open = 1;
        interpolationStart = i;
        i += 2;

        do {
          char = attrValue[i];
          i++;

          if (char === "'" || char === '"') {
            if (quote === null) {
              quote = char;
            } else if (quote === char) {
              quote = null;
            }
            continue;
          }

          if (char === '\\') {
            i++;
            continue;
          }

          if (quote !== null) {
            continue;
          }

          if (char === '{') {
            open++;
          } else if (char === '}') {
            open--;
          }
        } while (open > 0 && i < ii);

        if (open === 0) {
          parts = parts || [];
          if (attrValue[interpolationStart - 1] === '\\' && attrValue[interpolationStart - 2] !== '\\') {
            parts[partIndex] = attrValue.substring(pos, interpolationStart - 1) + attrValue.substring(interpolationStart, i);
            partIndex++;
            parts[partIndex] = this.emptyStringExpression;
            partIndex++;
          } else {
            parts[partIndex] = attrValue.substring(pos, interpolationStart);
            partIndex++;
            parts[partIndex] = this.parser.parse(attrValue.substring(interpolationStart + 2, i - 1));
            partIndex++;
          }
          pos = i;
          i = attrValue.indexOf('${', i);
        } else {
          break;
        }
      }

      if (partIndex === 0) {
        return null;
      }

      parts[partIndex] = attrValue.substr(pos);

      return new InterpolationBindingExpression(this.observerLocator, this.attributeMap[attrName] || attrName, parts, _aureliaBinding.bindingMode.oneWay, resources.lookupFunctions, attrName);
    };

    return TemplatingBindingLanguage;
  }(_aureliaTemplating.BindingLanguage);

  function configure(config) {
    config.container.registerSingleton(_aureliaTemplating.BindingLanguage, TemplatingBindingLanguage);
    config.container.registerAlias(_aureliaTemplating.BindingLanguage, TemplatingBindingLanguage);
  }
});
define('aurelia-templating-router/route-loader',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router', 'aurelia-path', 'aurelia-metadata'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaRouter, _aureliaPath, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TemplatingRouteLoader = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _dec, _class;

  var TemplatingRouteLoader = exports.TemplatingRouteLoader = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.CompositionEngine), _dec(_class = function (_RouteLoader) {
    _inherits(TemplatingRouteLoader, _RouteLoader);

    function TemplatingRouteLoader(compositionEngine) {
      _classCallCheck(this, TemplatingRouteLoader);

      var _this = _possibleConstructorReturn(this, _RouteLoader.call(this));

      _this.compositionEngine = compositionEngine;
      return _this;
    }

    TemplatingRouteLoader.prototype.loadRoute = function loadRoute(router, config) {
      var childContainer = router.container.createChild();
      var instruction = {
        viewModel: (0, _aureliaPath.relativeToFile)(config.moduleId, _aureliaMetadata.Origin.get(router.container.viewModel.constructor).moduleId),
        childContainer: childContainer,
        view: config.view || config.viewStrategy,
        router: router
      };

      childContainer.getChildRouter = function () {
        var childRouter = void 0;

        childContainer.registerHandler(_aureliaRouter.Router, function (c) {
          return childRouter || (childRouter = router.createChild(childContainer));
        });

        return childContainer.get(_aureliaRouter.Router);
      };

      return this.compositionEngine.ensureViewModel(instruction);
    };

    return TemplatingRouteLoader;
  }(_aureliaRouter.RouteLoader)) || _class);
});
define('aurelia-templating-router/router-view',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router', 'aurelia-metadata', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaRouter, _aureliaMetadata, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RouterView = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SwapStrategies = function () {
    function SwapStrategies() {
      _classCallCheck(this, SwapStrategies);
    }

    SwapStrategies.prototype.before = function before(viewSlot, previousView, callback) {
      var promise = Promise.resolve(callback());

      if (previousView !== undefined) {
        return promise.then(function () {
          return viewSlot.remove(previousView, true);
        });
      }

      return promise;
    };

    SwapStrategies.prototype.with = function _with(viewSlot, previousView, callback) {
      var promise = Promise.resolve(callback());

      if (previousView !== undefined) {
        return Promise.all([viewSlot.remove(previousView, true), promise]);
      }

      return promise;
    };

    SwapStrategies.prototype.after = function after(viewSlot, previousView, callback) {
      return Promise.resolve(viewSlot.removeAll(true)).then(callback);
    };

    return SwapStrategies;
  }();

  var swapStrategies = new SwapStrategies();

  var RouterView = exports.RouterView = (_dec = (0, _aureliaTemplating.customElement)('router-view'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.ViewSlot, _aureliaRouter.Router, _aureliaTemplating.ViewLocator, _aureliaTemplating.CompositionTransaction), _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2(_class = (_class2 = function () {
    function RouterView(element, container, viewSlot, router, viewLocator, compositionTransaction) {
      _classCallCheck(this, RouterView);

      _initDefineProp(this, 'swapOrder', _descriptor, this);

      this.element = element;
      this.container = container;
      this.viewSlot = viewSlot;
      this.router = router;
      this.viewLocator = viewLocator;
      this.compositionTransaction = compositionTransaction;
      this.router.registerViewPort(this, this.element.getAttribute('name'));

      if (!('initialComposition' in compositionTransaction)) {
        compositionTransaction.initialComposition = true;
        this.compositionTransactionNotifier = compositionTransaction.enlist();
      }
    }

    RouterView.prototype.created = function created(owningView) {
      this.owningView = owningView;
    };

    RouterView.prototype.bind = function bind(bindingContext, overrideContext) {
      this.container.viewModel = bindingContext;
      this.overrideContext = overrideContext;
    };

    RouterView.prototype.process = function process(viewPortInstruction, waitToSwap) {
      var _this = this;

      var component = viewPortInstruction.component;
      var childContainer = component.childContainer;
      var viewModel = component.viewModel;
      var viewModelResource = component.viewModelResource;
      var metadata = viewModelResource.metadata;

      var viewStrategy = this.viewLocator.getViewStrategy(component.view || viewModel);
      if (viewStrategy) {
        viewStrategy.makeRelativeTo(_aureliaMetadata.Origin.get(component.router.container.viewModel.constructor).moduleId);
      }

      return metadata.load(childContainer, viewModelResource.value, null, viewStrategy, true).then(function (viewFactory) {
        if (!_this.compositionTransactionNotifier) {
          _this.compositionTransactionOwnershipToken = _this.compositionTransaction.tryCapture();
        }

        viewPortInstruction.controller = metadata.create(childContainer, _aureliaTemplating.BehaviorInstruction.dynamic(_this.element, viewModel, viewFactory));

        if (waitToSwap) {
          return;
        }

        _this.swap(viewPortInstruction);
      });
    };

    RouterView.prototype.swap = function swap(viewPortInstruction) {
      var _this2 = this;

      var work = function work() {
        var previousView = _this2.view;
        var viewSlot = _this2.viewSlot;
        var swapStrategy = void 0;

        swapStrategy = _this2.swapOrder in swapStrategies ? swapStrategies[_this2.swapOrder] : swapStrategies.after;

        swapStrategy(viewSlot, previousView, function () {
          return Promise.resolve(viewSlot.add(viewPortInstruction.controller.view)).then(function () {
            if (_this2.compositionTransactionNotifier) {
              _this2.compositionTransactionNotifier.done();
              _this2.compositionTransactionNotifier = null;
            }
          });
        });

        _this2.view = viewPortInstruction.controller.view;
      };

      viewPortInstruction.controller.automate(this.overrideContext, this.owningView);

      if (this.compositionTransactionOwnershipToken) {
        return this.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
          _this2.compositionTransactionOwnershipToken = null;
          work();
        });
      }

      work();
    };

    return RouterView;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'swapOrder', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
});
define('aurelia-templating-router/route-href',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router', 'aurelia-pal', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaRouter, _aureliaPal, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RouteHref = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _dec4, _dec5, _class;

  var logger = LogManager.getLogger('route-href');

  var RouteHref = exports.RouteHref = (_dec = (0, _aureliaTemplating.customAttribute)('route-href'), _dec2 = (0, _aureliaTemplating.bindable)({ name: 'route', changeHandler: 'processChange' }), _dec3 = (0, _aureliaTemplating.bindable)({ name: 'params', changeHandler: 'processChange' }), _dec4 = (0, _aureliaTemplating.bindable)({ name: 'attribute', defaultValue: 'href' }), _dec5 = (0, _aureliaDependencyInjection.inject)(_aureliaRouter.Router, _aureliaPal.DOM.Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = function () {
    function RouteHref(router, element) {
      _classCallCheck(this, RouteHref);

      this.router = router;
      this.element = element;
    }

    RouteHref.prototype.bind = function bind() {
      this.isActive = true;
      this.processChange();
    };

    RouteHref.prototype.unbind = function unbind() {
      this.isActive = false;
    };

    RouteHref.prototype.attributeChanged = function attributeChanged(value, previous) {
      if (previous) {
        this.element.removeAttribute(previous);
      }

      this.processChange();
    };

    RouteHref.prototype.processChange = function processChange() {
      var _this = this;

      return this.router.ensureConfigured().then(function () {
        if (!_this.isActive) {
          return;
        }

        var href = _this.router.generate(_this.route, _this.params);
        _this.element.setAttribute(_this.attribute, href);
      }).catch(function (reason) {
        logger.error(reason);
      });
    };

    return RouteHref;
  }()) || _class) || _class) || _class) || _class) || _class);
});
define('aurelia-templating-router/aurelia-templating-router',['exports', 'aurelia-router', './route-loader', './router-view', './route-href'], function (exports, _aureliaRouter, _routeLoader, _routerView, _routeHref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = exports.RouteHref = exports.RouterView = exports.TemplatingRouteLoader = undefined;


  function configure(config) {
    config.singleton(_aureliaRouter.RouteLoader, _routeLoader.TemplatingRouteLoader).singleton(_aureliaRouter.Router, _aureliaRouter.AppRouter).globalResources('./router-view', './route-href');

    config.container.registerAlias(_aureliaRouter.Router, _aureliaRouter.AppRouter);
  }

  exports.TemplatingRouteLoader = _routeLoader.TemplatingRouteLoader;
  exports.RouterView = _routerView.RouterView;
  exports.RouteHref = _routeHref.RouteHref;
  exports.configure = configure;
});
define('aurelia-templating-router', ['aurelia-templating-router/aurelia-templating-router'], function (main) { return main; });

define('aurelia-templating-resources/compose',['exports', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-templating', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaTemplating, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Compose = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var Compose = exports.Compose = (_dec = (0, _aureliaTemplating.customElement)('compose'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaTaskQueue.TaskQueue), _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2(_class = (_class2 = function () {
    function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
      _classCallCheck(this, Compose);

      _initDefineProp(this, 'model', _descriptor, this);

      _initDefineProp(this, 'view', _descriptor2, this);

      _initDefineProp(this, 'viewModel', _descriptor3, this);

      this.element = element;
      this.container = container;
      this.compositionEngine = compositionEngine;
      this.viewSlot = viewSlot;
      this.viewResources = viewResources;
      this.taskQueue = taskQueue;
      this.currentController = null;
      this.currentViewModel = null;
    }

    Compose.prototype.created = function created(owningView) {
      this.owningView = owningView;
    };

    Compose.prototype.bind = function bind(bindingContext, overrideContext) {
      this.bindingContext = bindingContext;
      this.overrideContext = overrideContext;
      processInstruction(this, createInstruction(this, {
        view: this.view,
        viewModel: this.viewModel,
        model: this.model
      }));
    };

    Compose.prototype.unbind = function unbind(bindingContext, overrideContext) {
      this.bindingContext = null;
      this.overrideContext = null;
      var returnToCache = true;
      var skipAnimation = true;
      this.viewSlot.removeAll(returnToCache, skipAnimation);
    };

    Compose.prototype.modelChanged = function modelChanged(newValue, oldValue) {
      var _this = this;

      if (this.currentInstruction) {
        this.currentInstruction.model = newValue;
        return;
      }

      this.taskQueue.queueMicroTask(function () {
        if (_this.currentInstruction) {
          _this.currentInstruction.model = newValue;
          return;
        }

        var vm = _this.currentViewModel;

        if (vm && typeof vm.activate === 'function') {
          vm.activate(newValue);
        }
      });
    };

    Compose.prototype.viewChanged = function viewChanged(newValue, oldValue) {
      var _this2 = this;

      var instruction = createInstruction(this, {
        view: newValue,
        viewModel: this.currentViewModel || this.viewModel,
        model: this.model
      });

      if (this.currentInstruction) {
        this.currentInstruction = instruction;
        return;
      }

      this.currentInstruction = instruction;
      this.taskQueue.queueMicroTask(function () {
        return processInstruction(_this2, _this2.currentInstruction);
      });
    };

    Compose.prototype.viewModelChanged = function viewModelChanged(newValue, oldValue) {
      var _this3 = this;

      var instruction = createInstruction(this, {
        viewModel: newValue,
        view: this.view,
        model: this.model
      });

      if (this.currentInstruction) {
        this.currentInstruction = instruction;
        return;
      }

      this.currentInstruction = instruction;
      this.taskQueue.queueMicroTask(function () {
        return processInstruction(_this3, _this3.currentInstruction);
      });
    };

    return Compose;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'view', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'viewModel', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);


  function createInstruction(composer, instruction) {
    return Object.assign(instruction, {
      bindingContext: composer.bindingContext,
      overrideContext: composer.overrideContext,
      owningView: composer.owningView,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentController: composer.currentController,
      host: composer.element
    });
  }

  function processInstruction(composer, instruction) {
    composer.currentInstruction = null;
    composer.compositionEngine.compose(instruction).then(function (controller) {
      composer.currentController = controller;
      composer.currentViewModel = controller ? controller.viewModel : null;
    });
  }
});
define('aurelia-templating-resources/if',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.If = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var If = exports.If = (_dec = (0, _aureliaTemplating.customAttribute)('if'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function If(viewFactory, viewSlot) {
      _classCallCheck(this, If);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.showing = false;
      this.view = null;
      this.bindingContext = null;
      this.overrideContext = null;
    }

    If.prototype.bind = function bind(bindingContext, overrideContext) {
      this.bindingContext = bindingContext;
      this.overrideContext = overrideContext;
      this.valueChanged(this.value);
    };

    If.prototype.valueChanged = function valueChanged(newValue) {
      var _this = this;

      if (this.__queuedChanges) {
        this.__queuedChanges.push(newValue);
        return;
      }

      var maybePromise = this._runValueChanged(newValue);
      if (maybePromise instanceof Promise) {
        (function () {
          var queuedChanges = _this.__queuedChanges = [];

          var runQueuedChanges = function runQueuedChanges() {
            if (!queuedChanges.length) {
              _this.__queuedChanges = undefined;
              return;
            }

            var nextPromise = _this._runValueChanged(queuedChanges.shift()) || Promise.resolve();
            nextPromise.then(runQueuedChanges);
          };

          maybePromise.then(runQueuedChanges);
        })();
      }
    };

    If.prototype._runValueChanged = function _runValueChanged(newValue) {
      var _this2 = this;

      if (!newValue) {
        var viewOrPromise = void 0;
        if (this.view !== null && this.showing) {
          viewOrPromise = this.viewSlot.remove(this.view);
          if (viewOrPromise instanceof Promise) {
            viewOrPromise.then(function () {
              return _this2.view.unbind();
            });
          } else {
            this.view.unbind();
          }
        }

        this.showing = false;
        return viewOrPromise;
      }

      if (this.view === null) {
        this.view = this.viewFactory.create();
      }

      if (!this.view.isBound) {
        this.view.bind(this.bindingContext, this.overrideContext);
      }

      if (!this.showing) {
        this.showing = true;
        return this.viewSlot.add(this.view);
      }
    };

    If.prototype.unbind = function unbind() {
      if (this.view === null) {
        return;
      }

      this.view.unbind();

      if (!this.viewFactory.isCaching) {
        return;
      }

      if (this.showing) {
        this.showing = false;
        this.viewSlot.remove(this.view, true, true);
      }
      this.view.returnToCache();
      this.view = null;
    };

    return If;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/with',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-binding'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.With = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var With = exports.With = (_dec = (0, _aureliaTemplating.customAttribute)('with'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function With(viewFactory, viewSlot) {
      _classCallCheck(this, With);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.parentOverrideContext = null;
      this.view = null;
    }

    With.prototype.bind = function bind(bindingContext, overrideContext) {
      this.parentOverrideContext = overrideContext;
      this.valueChanged(this.value);
    };

    With.prototype.valueChanged = function valueChanged(newValue) {
      var overrideContext = (0, _aureliaBinding.createOverrideContext)(newValue, this.parentOverrideContext);
      if (!this.view) {
        this.view = this.viewFactory.create();
        this.view.bind(newValue, overrideContext);
        this.viewSlot.add(this.view);
      } else {
        this.view.bind(newValue, overrideContext);
      }
    };

    With.prototype.unbind = function unbind() {
      this.parentOverrideContext = null;

      if (this.view) {
        this.view.unbind();
      }
    };

    return With;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/null-repeat-strategy',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NullRepeatStrategy = exports.NullRepeatStrategy = function () {
    function NullRepeatStrategy() {
      _classCallCheck(this, NullRepeatStrategy);
    }

    NullRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      repeat.removeAllViews(true);
    };

    NullRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {};

    return NullRepeatStrategy;
  }();
});
define('aurelia-templating-resources/repeat-utilities',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.updateOverrideContexts = updateOverrideContexts;
  exports.createFullOverrideContext = createFullOverrideContext;
  exports.updateOverrideContext = updateOverrideContext;
  exports.getItemsSourceExpression = getItemsSourceExpression;
  exports.unwrapExpression = unwrapExpression;
  exports.isOneTime = isOneTime;
  exports.updateOneTimeBinding = updateOneTimeBinding;


  var oneTime = _aureliaBinding.bindingMode.oneTime;

  function updateOverrideContexts(views, startIndex) {
    var length = views.length;

    if (startIndex > 0) {
      startIndex = startIndex - 1;
    }

    for (; startIndex < length; ++startIndex) {
      updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
    }
  }

  function createFullOverrideContext(repeat, data, index, length, key) {
    var bindingContext = {};
    var overrideContext = (0, _aureliaBinding.createOverrideContext)(bindingContext, repeat.scope.overrideContext);

    if (typeof key !== 'undefined') {
      bindingContext[repeat.key] = key;
      bindingContext[repeat.value] = data;
    } else {
      bindingContext[repeat.local] = data;
    }
    updateOverrideContext(overrideContext, index, length);
    return overrideContext;
  }

  function updateOverrideContext(overrideContext, index, length) {
    var first = index === 0;
    var last = index === length - 1;
    var even = index % 2 === 0;

    overrideContext.$index = index;
    overrideContext.$first = first;
    overrideContext.$last = last;
    overrideContext.$middle = !(first || last);
    overrideContext.$odd = !even;
    overrideContext.$even = even;
  }

  function getItemsSourceExpression(instruction, attrName) {
    return instruction.behaviorInstructions.filter(function (bi) {
      return bi.originalAttrName === attrName;
    })[0].attributes.items.sourceExpression;
  }

  function unwrapExpression(expression) {
    var unwrapped = false;
    while (expression instanceof _aureliaBinding.BindingBehavior) {
      expression = expression.expression;
    }
    while (expression instanceof _aureliaBinding.ValueConverter) {
      expression = expression.expression;
      unwrapped = true;
    }
    return unwrapped ? expression : null;
  }

  function isOneTime(expression) {
    while (expression instanceof _aureliaBinding.BindingBehavior) {
      if (expression.name === 'oneTime') {
        return true;
      }
      expression = expression.expression;
    }
    return false;
  }

  function updateOneTimeBinding(binding) {
    if (binding.call && binding.mode === oneTime) {
      binding.call(_aureliaBinding.sourceContext);
    } else if (binding.updateOneTimeBindings) {
      binding.updateOneTimeBindings();
    }
  }
});
define('aurelia-templating-resources/array-repeat-strategy',['exports', './repeat-utilities', 'aurelia-binding'], function (exports, _repeatUtilities, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ArrayRepeatStrategy = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ArrayRepeatStrategy = exports.ArrayRepeatStrategy = function () {
    function ArrayRepeatStrategy() {
      _classCallCheck(this, ArrayRepeatStrategy);
    }

    ArrayRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getArrayObserver(items);
    };

    ArrayRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      if (repeat.viewsRequireLifecycle) {
        var removePromise = repeat.removeAllViews(true);
        if (removePromise instanceof Promise) {
          removePromise.then(function () {
            return _this._standardProcessInstanceChanged(repeat, items);
          });
          return;
        }
        this._standardProcessInstanceChanged(repeat, items);
        return;
      }
      this._inPlaceProcessItems(repeat, items);
    };

    ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function _standardProcessInstanceChanged(repeat, items) {
      for (var i = 0, ii = items.length; i < ii; i++) {
        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[i], i, ii);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }
    };

    ArrayRepeatStrategy.prototype._inPlaceProcessItems = function _inPlaceProcessItems(repeat, items) {
      var itemsLength = items.length;
      var viewsLength = repeat.viewCount();

      while (viewsLength > itemsLength) {
        viewsLength--;
        repeat.removeView(viewsLength, true);
      }

      var local = repeat.local;

      for (var i = 0; i < viewsLength; i++) {
        var view = repeat.view(i);
        var last = i === itemsLength - 1;
        var middle = i !== 0 && !last;

        if (view.bindingContext[local] === items[i] && view.overrideContext.$middle === middle && view.overrideContext.$last === last) {
          continue;
        }

        view.bindingContext[local] = items[i];
        view.overrideContext.$middle = middle;
        view.overrideContext.$last = last;
        repeat.updateBindings(view);
      }

      for (var _i = viewsLength; _i < itemsLength; _i++) {
        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_i], _i, itemsLength);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }
    };

    ArrayRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, array, splices) {
      if (repeat.viewsRequireLifecycle) {
        this._standardProcessInstanceMutated(repeat, array, splices);
        return;
      }
      this._inPlaceProcessItems(repeat, array);
    };

    ArrayRepeatStrategy.prototype._standardProcessInstanceMutated = function _standardProcessInstanceMutated(repeat, array, splices) {
      var _this2 = this;

      if (repeat.__queuedSplices) {
        for (var i = 0, ii = splices.length; i < ii; ++i) {
          var _splices$i = splices[i];
          var index = _splices$i.index;
          var removed = _splices$i.removed;
          var addedCount = _splices$i.addedCount;

          (0, _aureliaBinding.mergeSplice)(repeat.__queuedSplices, index, removed, addedCount);
        }

        repeat.__array = array.slice(0);
        return;
      }

      var maybePromise = this._runSplices(repeat, array.slice(0), splices);
      if (maybePromise instanceof Promise) {
        (function () {
          var queuedSplices = repeat.__queuedSplices = [];

          var runQueuedSplices = function runQueuedSplices() {
            if (!queuedSplices.length) {
              repeat.__queuedSplices = undefined;
              repeat.__array = undefined;
              return;
            }

            var nextPromise = _this2._runSplices(repeat, repeat.__array, queuedSplices) || Promise.resolve();
            queuedSplices = repeat.__queuedSplices = [];
            nextPromise.then(runQueuedSplices);
          };

          maybePromise.then(runQueuedSplices);
        })();
      }
    };

    ArrayRepeatStrategy.prototype._runSplices = function _runSplices(repeat, array, splices) {
      var _this3 = this;

      var removeDelta = 0;
      var rmPromises = [];

      for (var i = 0, ii = splices.length; i < ii; ++i) {
        var splice = splices[i];
        var removed = splice.removed;

        for (var j = 0, jj = removed.length; j < jj; ++j) {
          var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, true);
          if (viewOrPromise instanceof Promise) {
            rmPromises.push(viewOrPromise);
          }
        }
        removeDelta -= splice.addedCount;
      }

      if (rmPromises.length > 0) {
        return Promise.all(rmPromises).then(function () {
          var spliceIndexLow = _this3._handleAddedSplices(repeat, array, splices);
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);
        });
      }

      var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
      (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);
    };

    ArrayRepeatStrategy.prototype._handleAddedSplices = function _handleAddedSplices(repeat, array, splices) {
      var spliceIndex = void 0;
      var spliceIndexLow = void 0;
      var arrayLength = array.length;
      for (var i = 0, ii = splices.length; i < ii; ++i) {
        var splice = splices[i];
        var addIndex = spliceIndex = splice.index;
        var end = splice.index + splice.addedCount;

        if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
          spliceIndexLow = spliceIndex;
        }

        for (; addIndex < end; ++addIndex) {
          var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, array[addIndex], addIndex, arrayLength);
          repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
        }
      }

      return spliceIndexLow;
    };

    return ArrayRepeatStrategy;
  }();
});
define('aurelia-templating-resources/map-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MapRepeatStrategy = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MapRepeatStrategy = exports.MapRepeatStrategy = function () {
    function MapRepeatStrategy() {
      _classCallCheck(this, MapRepeatStrategy);
    }

    MapRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getMapObserver(items);
    };

    MapRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, items);
        });
        return;
      }
      this._standardProcessItems(repeat, items);
    };

    MapRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
      var index = 0;
      var overrideContext = void 0;

      items.forEach(function (value, key) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size, key);
        repeat.addView(overrideContext.bindingContext, overrideContext);
        ++index;
      });
    };

    MapRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, map, records) {
      var key = void 0;
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var removeIndex = void 0;
      var record = void 0;
      var rmPromises = [];
      var viewOrPromise = void 0;

      for (i = 0, ii = records.length; i < ii; ++i) {
        record = records[i];
        key = record.key;
        switch (record.type) {
          case 'update':
            removeIndex = this._getViewIndexByKey(repeat, key);
            viewOrPromise = repeat.removeView(removeIndex, true);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), removeIndex, map.size, key);
            repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
            break;
          case 'add':
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), map.size - 1, map.size, key);
            repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
            break;
          case 'delete':
            if (record.oldValue === undefined) {
              return;
            }
            removeIndex = this._getViewIndexByKey(repeat, key);
            viewOrPromise = repeat.removeView(removeIndex, true);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            break;
          case 'clear':
            repeat.removeAllViews(true);
            break;
          default:
            continue;
        }
      }

      if (rmPromises.length > 0) {
        Promise.all(rmPromises).then(function () {
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
        });
      } else {
        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
      }
    };

    MapRepeatStrategy.prototype._getViewIndexByKey = function _getViewIndexByKey(repeat, key) {
      var i = void 0;
      var ii = void 0;
      var child = void 0;

      for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
        child = repeat.view(i);
        if (child.bindingContext[repeat.key] === key) {
          return i;
        }
      }
    };

    return MapRepeatStrategy;
  }();
});
define('aurelia-templating-resources/set-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SetRepeatStrategy = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SetRepeatStrategy = exports.SetRepeatStrategy = function () {
    function SetRepeatStrategy() {
      _classCallCheck(this, SetRepeatStrategy);
    }

    SetRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getSetObserver(items);
    };

    SetRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, items);
        });
        return;
      }
      this._standardProcessItems(repeat, items);
    };

    SetRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
      var index = 0;
      var overrideContext = void 0;

      items.forEach(function (value) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size);
        repeat.addView(overrideContext.bindingContext, overrideContext);
        ++index;
      });
    };

    SetRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, set, records) {
      var value = void 0;
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var removeIndex = void 0;
      var record = void 0;
      var rmPromises = [];
      var viewOrPromise = void 0;

      for (i = 0, ii = records.length; i < ii; ++i) {
        record = records[i];
        value = record.value;
        switch (record.type) {
          case 'add':
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, set.size - 1, set.size);
            repeat.insertView(set.size - 1, overrideContext.bindingContext, overrideContext);
            break;
          case 'delete':
            removeIndex = this._getViewIndexByValue(repeat, value);
            viewOrPromise = repeat.removeView(removeIndex, true);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            break;
          case 'clear':
            repeat.removeAllViews(true);
            break;
          default:
            continue;
        }
      }

      if (rmPromises.length > 0) {
        Promise.all(rmPromises).then(function () {
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
        });
      } else {
        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
      }
    };

    SetRepeatStrategy.prototype._getViewIndexByValue = function _getViewIndexByValue(repeat, value) {
      var i = void 0;
      var ii = void 0;
      var child = void 0;

      for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
        child = repeat.view(i);
        if (child.bindingContext[repeat.local] === value) {
          return i;
        }
      }
    };

    return SetRepeatStrategy;
  }();
});
define('aurelia-templating-resources/number-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NumberRepeatStrategy = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NumberRepeatStrategy = exports.NumberRepeatStrategy = function () {
    function NumberRepeatStrategy() {
      _classCallCheck(this, NumberRepeatStrategy);
    }

    NumberRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver() {
      return null;
    };

    NumberRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, value) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, value);
        });
        return;
      }
      this._standardProcessItems(repeat, value);
    };

    NumberRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, value) {
      var childrenLength = repeat.viewCount();
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var viewsToRemove = void 0;

      value = Math.floor(value);
      viewsToRemove = childrenLength - value;

      if (viewsToRemove > 0) {
        if (viewsToRemove > childrenLength) {
          viewsToRemove = childrenLength;
        }

        for (i = 0, ii = viewsToRemove; i < ii; ++i) {
          repeat.removeView(childrenLength - (i + 1), true);
        }

        return;
      }

      for (i = childrenLength, ii = value; i < ii; ++i) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, i, i, ii);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }

      (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
    };

    return NumberRepeatStrategy;
  }();
});
define('aurelia-templating-resources/repeat-strategy-locator',['exports', './null-repeat-strategy', './array-repeat-strategy', './map-repeat-strategy', './set-repeat-strategy', './number-repeat-strategy'], function (exports, _nullRepeatStrategy, _arrayRepeatStrategy, _mapRepeatStrategy, _setRepeatStrategy, _numberRepeatStrategy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RepeatStrategyLocator = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var RepeatStrategyLocator = exports.RepeatStrategyLocator = function () {
    function RepeatStrategyLocator() {
      _classCallCheck(this, RepeatStrategyLocator);

      this.matchers = [];
      this.strategies = [];

      this.addStrategy(function (items) {
        return items === null || items === undefined;
      }, new _nullRepeatStrategy.NullRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Array;
      }, new _arrayRepeatStrategy.ArrayRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Map;
      }, new _mapRepeatStrategy.MapRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Set;
      }, new _setRepeatStrategy.SetRepeatStrategy());
      this.addStrategy(function (items) {
        return typeof items === 'number';
      }, new _numberRepeatStrategy.NumberRepeatStrategy());
    }

    RepeatStrategyLocator.prototype.addStrategy = function addStrategy(matcher, strategy) {
      this.matchers.push(matcher);
      this.strategies.push(strategy);
    };

    RepeatStrategyLocator.prototype.getStrategy = function getStrategy(items) {
      var matchers = this.matchers;

      for (var i = 0, ii = matchers.length; i < ii; ++i) {
        if (matchers[i](items)) {
          return this.strategies[i];
        }
      }

      return null;
    };

    return RepeatStrategyLocator;
  }();
});
define('aurelia-templating-resources/analyze-view-factory',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.viewsRequireLifecycle = viewsRequireLifecycle;
  var lifecycleOptionalBehaviors = exports.lifecycleOptionalBehaviors = ['focus', 'if', 'repeat', 'show', 'with'];

  function behaviorRequiresLifecycle(instruction) {
    var t = instruction.type;
    var name = t.elementName !== null ? t.elementName : t.attributeName;
    if (lifecycleOptionalBehaviors.indexOf(name) === -1) {
      return t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind;
    }
    return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
  }

  function targetRequiresLifecycle(instruction) {
    var behaviors = instruction.behaviorInstructions;
    if (behaviors) {
      var i = behaviors.length;
      while (i--) {
        if (behaviorRequiresLifecycle(behaviors[i])) {
          return true;
        }
      }
    }

    return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
  }

  function viewsRequireLifecycle(viewFactory) {
    if ('_viewsRequireLifecycle' in viewFactory) {
      return viewFactory._viewsRequireLifecycle;
    }

    if (viewFactory.viewFactory) {
      viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory);
      return viewFactory._viewsRequireLifecycle;
    }

    if (viewFactory.template.querySelector('.au-animate')) {
      viewFactory._viewsRequireLifecycle = true;
      return true;
    }

    for (var id in viewFactory.instructions) {
      if (targetRequiresLifecycle(viewFactory.instructions[id])) {
        viewFactory._viewsRequireLifecycle = true;
        return true;
      }
    }

    viewFactory._viewsRequireLifecycle = false;
    return false;
  }
});
define('aurelia-templating-resources/abstract-repeater',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AbstractRepeater = exports.AbstractRepeater = function () {
    function AbstractRepeater(options) {
      _classCallCheck(this, AbstractRepeater);

      Object.assign(this, {
        local: 'items',
        viewsRequireLifecycle: true
      }, options);
    }

    AbstractRepeater.prototype.viewCount = function viewCount() {
      throw new Error('subclass must implement `viewCount`');
    };

    AbstractRepeater.prototype.views = function views() {
      throw new Error('subclass must implement `views`');
    };

    AbstractRepeater.prototype.view = function view(index) {
      throw new Error('subclass must implement `view`');
    };

    AbstractRepeater.prototype.addView = function addView(bindingContext, overrideContext) {
      throw new Error('subclass must implement `addView`');
    };

    AbstractRepeater.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
      throw new Error('subclass must implement `insertView`');
    };

    AbstractRepeater.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
      throw new Error('subclass must implement `removeAllViews`');
    };

    AbstractRepeater.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
      throw new Error('subclass must implement `removeView`');
    };

    AbstractRepeater.prototype.updateBindings = function updateBindings(view) {
      throw new Error('subclass must implement `updateBindings`');
    };

    return AbstractRepeater;
  }();
});
define('aurelia-templating-resources/repeat',['exports', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', './repeat-strategy-locator', './repeat-utilities', './analyze-view-factory', './abstract-repeater'], function (exports, _aureliaDependencyInjection, _aureliaBinding, _aureliaTemplating, _repeatStrategyLocator, _repeatUtilities, _analyzeViewFactory, _abstractRepeater) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Repeat = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Repeat = exports.Repeat = (_dec = (0, _aureliaTemplating.customAttribute)('repeat'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.TargetInstruction, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaBinding.ObserverLocator, _repeatStrategyLocator.RepeatStrategyLocator), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = (_class2 = function (_AbstractRepeater) {
    _inherits(Repeat, _AbstractRepeater);

    function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {
      _classCallCheck(this, Repeat);

      var _this = _possibleConstructorReturn(this, _AbstractRepeater.call(this, {
        local: 'item',
        viewsRequireLifecycle: (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory)
      }));

      _initDefineProp(_this, 'items', _descriptor, _this);

      _initDefineProp(_this, 'local', _descriptor2, _this);

      _initDefineProp(_this, 'key', _descriptor3, _this);

      _initDefineProp(_this, 'value', _descriptor4, _this);

      _this.viewFactory = viewFactory;
      _this.instruction = instruction;
      _this.viewSlot = viewSlot;
      _this.lookupFunctions = viewResources.lookupFunctions;
      _this.observerLocator = observerLocator;
      _this.key = 'key';
      _this.value = 'value';
      _this.strategyLocator = strategyLocator;
      _this.ignoreMutation = false;
      _this.sourceExpression = (0, _repeatUtilities.getItemsSourceExpression)(_this.instruction, 'repeat.for');
      _this.isOneTime = (0, _repeatUtilities.isOneTime)(_this.sourceExpression);
      _this.viewsRequireLifecycle = (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory);
      return _this;
    }

    Repeat.prototype.call = function call(context, changes) {
      this[context](this.items, changes);
    };

    Repeat.prototype.bind = function bind(bindingContext, overrideContext) {
      this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };
      this.itemsChanged();
    };

    Repeat.prototype.unbind = function unbind() {
      this.scope = null;
      this.items = null;
      this.viewSlot.removeAll(true);
      this._unsubscribeCollection();
    };

    Repeat.prototype._unsubscribeCollection = function _unsubscribeCollection() {
      if (this.collectionObserver) {
        this.collectionObserver.unsubscribe(this.callContext, this);
        this.collectionObserver = null;
        this.callContext = null;
      }
    };

    Repeat.prototype.itemsChanged = function itemsChanged() {
      this._unsubscribeCollection();

      if (!this.scope) {
        return;
      }

      var items = this.items;
      this.strategy = this.strategyLocator.getStrategy(items);
      if (!this.strategy) {
        throw new Error('Value for \'' + this.sourceExpression + '\' is non-repeatable');
      }

      if (!this.isOneTime && !this._observeInnerCollection()) {
        this._observeCollection();
      }
      this.strategy.instanceChanged(this, items);
    };

    Repeat.prototype._getInnerCollection = function _getInnerCollection() {
      var expression = (0, _repeatUtilities.unwrapExpression)(this.sourceExpression);
      if (!expression) {
        return null;
      }
      return expression.evaluate(this.scope, null);
    };

    Repeat.prototype.handleCollectionMutated = function handleCollectionMutated(collection, changes) {
      this.strategy.instanceMutated(this, collection, changes);
    };

    Repeat.prototype.handleInnerCollectionMutated = function handleInnerCollectionMutated(collection, changes) {
      var _this2 = this;

      if (this.ignoreMutation) {
        return;
      }
      this.ignoreMutation = true;
      var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
      this.observerLocator.taskQueue.queueMicroTask(function () {
        return _this2.ignoreMutation = false;
      });

      if (newItems === this.items) {
        this.itemsChanged();
      } else {
        this.items = newItems;
      }
    };

    Repeat.prototype._observeInnerCollection = function _observeInnerCollection() {
      var items = this._getInnerCollection();
      var strategy = this.strategyLocator.getStrategy(items);
      if (!strategy) {
        return false;
      }
      this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
      if (!this.collectionObserver) {
        return false;
      }
      this.callContext = 'handleInnerCollectionMutated';
      this.collectionObserver.subscribe(this.callContext, this);
      return true;
    };

    Repeat.prototype._observeCollection = function _observeCollection() {
      var items = this.items;
      this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
      if (this.collectionObserver) {
        this.callContext = 'handleCollectionMutated';
        this.collectionObserver.subscribe(this.callContext, this);
      }
    };

    Repeat.prototype.viewCount = function viewCount() {
      return this.viewSlot.children.length;
    };

    Repeat.prototype.views = function views() {
      return this.viewSlot.children;
    };

    Repeat.prototype.view = function view(index) {
      return this.viewSlot.children[index];
    };

    Repeat.prototype.addView = function addView(bindingContext, overrideContext) {
      var view = this.viewFactory.create();
      view.bind(bindingContext, overrideContext);
      this.viewSlot.add(view);
    };

    Repeat.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
      var view = this.viewFactory.create();
      view.bind(bindingContext, overrideContext);
      this.viewSlot.insert(index, view);
    };

    Repeat.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
      return this.viewSlot.removeAll(returnToCache, skipAnimation);
    };

    Repeat.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
      return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
    };

    Repeat.prototype.updateBindings = function updateBindings(view) {
      var j = view.bindings.length;
      while (j--) {
        (0, _repeatUtilities.updateOneTimeBinding)(view.bindings[j]);
      }
      j = view.controllers.length;
      while (j--) {
        var k = view.controllers[j].boundProperties.length;
        while (k--) {
          var binding = view.controllers[j].boundProperties[k].binding;
          (0, _repeatUtilities.updateOneTimeBinding)(binding);
        }
      }
    };

    return Repeat;
  }(_abstractRepeater.AbstractRepeater), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'items', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'local', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
});
define('aurelia-templating-resources/show',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Show = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Show = exports.Show = (_dec = (0, _aureliaTemplating.customAttribute)('show'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator), _dec(_class = _dec2(_class = function () {
    function Show(element, animator) {
      _classCallCheck(this, Show);

      this.element = element;
      this.animator = animator;
    }

    Show.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.animator.removeClass(this.element, 'aurelia-hide');
      } else {
        this.animator.addClass(this.element, 'aurelia-hide');
      }
    };

    Show.prototype.bind = function bind(bindingContext) {
      this.valueChanged(this.value);
    };

    return Show;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/hide',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hide = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Hide = exports.Hide = (_dec = (0, _aureliaTemplating.customAttribute)('hide'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator), _dec(_class = _dec2(_class = function () {
    function Hide(element, animator) {
      _classCallCheck(this, Hide);

      this.element = element;
      this.animator = animator;
    }

    Hide.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.animator.addClass(this.element, 'aurelia-hide');
      } else {
        this.animator.removeClass(this.element, 'aurelia-hide');
      }
    };

    Hide.prototype.bind = function bind(bindingContext) {
      this.valueChanged(this.value);
    };

    return Hide;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/html-sanitizer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  var HTMLSanitizer = exports.HTMLSanitizer = function () {
    function HTMLSanitizer() {
      _classCallCheck(this, HTMLSanitizer);
    }

    HTMLSanitizer.prototype.sanitize = function sanitize(input) {
      return input.replace(SCRIPT_REGEX, '');
    };

    return HTMLSanitizer;
  }();
});
define('aurelia-templating-resources/sanitize-html',['exports', 'aurelia-binding', 'aurelia-dependency-injection', './html-sanitizer'], function (exports, _aureliaBinding, _aureliaDependencyInjection, _htmlSanitizer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SanitizeHTMLValueConverter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var SanitizeHTMLValueConverter = exports.SanitizeHTMLValueConverter = (_dec = (0, _aureliaBinding.valueConverter)('sanitizeHTML'), _dec2 = (0, _aureliaDependencyInjection.inject)(_htmlSanitizer.HTMLSanitizer), _dec(_class = _dec2(_class = function () {
    function SanitizeHTMLValueConverter(sanitizer) {
      _classCallCheck(this, SanitizeHTMLValueConverter);

      this.sanitizer = sanitizer;
    }

    SanitizeHTMLValueConverter.prototype.toView = function toView(untrustedMarkup) {
      if (untrustedMarkup === null || untrustedMarkup === undefined) {
        return null;
      }

      return this.sanitizer.sanitize(untrustedMarkup);
    };

    return SanitizeHTMLValueConverter;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/replaceable',['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Replaceable = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Replaceable = exports.Replaceable = (_dec = (0, _aureliaTemplating.customAttribute)('replaceable'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function Replaceable(viewFactory, viewSlot) {
      _classCallCheck(this, Replaceable);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.view = null;
    }

    Replaceable.prototype.bind = function bind(bindingContext, overrideContext) {
      if (this.view === null) {
        this.view = this.viewFactory.create();
        this.viewSlot.add(this.view);
      }

      this.view.bind(bindingContext, overrideContext);
    };

    Replaceable.prototype.unbind = function unbind() {
      this.view.unbind();
    };

    return Replaceable;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/focus',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Focus = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Focus = exports.Focus = (_dec = (0, _aureliaTemplating.customAttribute)('focus', _aureliaBinding.bindingMode.twoWay), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTaskQueue.TaskQueue), _dec(_class = _dec2(_class = function () {
    function Focus(element, taskQueue) {
      var _this = this;

      _classCallCheck(this, Focus);

      this.element = element;
      this.taskQueue = taskQueue;

      this.focusListener = function (e) {
        _this.value = true;
      };
      this.blurListener = function (e) {
        if (_aureliaPal.DOM.activeElement !== _this.element) {
          _this.value = false;
        }
      };
    }

    Focus.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this._giveFocus();
      } else {
        this.element.blur();
      }
    };

    Focus.prototype._giveFocus = function _giveFocus() {
      var _this2 = this;

      this.taskQueue.queueMicroTask(function () {
        if (_this2.value) {
          _this2.element.focus();
        }
      });
    };

    Focus.prototype.attached = function attached() {
      this.element.addEventListener('focus', this.focusListener);
      this.element.addEventListener('blur', this.blurListener);
    };

    Focus.prototype.detached = function detached() {
      this.element.removeEventListener('focus', this.focusListener);
      this.element.removeEventListener('blur', this.blurListener);
    };

    return Focus;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/compile-spy',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaLogging, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CompileSpy = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var CompileSpy = exports.CompileSpy = (_dec = (0, _aureliaTemplating.customAttribute)('compile-spy'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.TargetInstruction), _dec(_class = _dec2(_class = function CompileSpy(element, instruction) {
    _classCallCheck(this, CompileSpy);

    LogManager.getLogger('compile-spy').info(element, instruction);
  }) || _class) || _class);
});
define('aurelia-templating-resources/view-spy',['exports', 'aurelia-templating', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ViewSpy = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var ViewSpy = exports.ViewSpy = (_dec = (0, _aureliaTemplating.customAttribute)('view-spy'), _dec(_class = function () {
    function ViewSpy() {
      _classCallCheck(this, ViewSpy);

      this.logger = LogManager.getLogger('view-spy');
    }

    ViewSpy.prototype._log = function _log(lifecycleName, context) {
      if (!this.value && lifecycleName === 'created') {
        this.logger.info(lifecycleName, this.view);
      } else if (this.value && this.value.indexOf(lifecycleName) !== -1) {
        this.logger.info(lifecycleName, this.view, context);
      }
    };

    ViewSpy.prototype.created = function created(view) {
      this.view = view;
      this._log('created');
    };

    ViewSpy.prototype.bind = function bind(bindingContext) {
      this._log('bind', bindingContext);
    };

    ViewSpy.prototype.attached = function attached() {
      this._log('attached');
    };

    ViewSpy.prototype.detached = function detached() {
      this._log('detached');
    };

    ViewSpy.prototype.unbind = function unbind() {
      this._log('unbind');
    };

    return ViewSpy;
  }()) || _class);
});
define('aurelia-templating-resources/css-resource',['exports', 'aurelia-templating', 'aurelia-loader', 'aurelia-dependency-injection', 'aurelia-path', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaLoader, _aureliaDependencyInjection, _aureliaPath, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._createCSSResource = _createCSSResource;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;

  function fixupCSSUrls(address, css) {
    if (typeof css !== 'string') {
      throw new Error('Failed loading required CSS file: ' + address);
    }
    return css.replace(cssUrlMatcher, function (match, p1) {
      var quote = p1.charAt(0);
      if (quote === '\'' || quote === '"') {
        p1 = p1.substr(1, p1.length - 2);
      }
      return 'url(\'' + (0, _aureliaPath.relativeToFile)(p1, address) + '\')';
    });
  }

  var CSSResource = function () {
    function CSSResource(address) {
      _classCallCheck(this, CSSResource);

      this.address = address;
      this._global = null;
      this._scoped = null;
    }

    CSSResource.prototype.initialize = function initialize(container, target) {
      this._global = new target('global');
      this._scoped = new target('scoped');
    };

    CSSResource.prototype.register = function register(registry, name) {
      registry.registerViewEngineHooks(name === 'scoped' ? this._scoped : this._global);
    };

    CSSResource.prototype.load = function load(container) {
      var _this = this;

      return container.get(_aureliaLoader.Loader).loadText(this.address).catch(function (err) {
        return null;
      }).then(function (text) {
        text = fixupCSSUrls(_this.address, text);
        _this._global.css = text;
        _this._scoped.css = text;
      });
    };

    return CSSResource;
  }();

  var CSSViewEngineHooks = function () {
    function CSSViewEngineHooks(mode) {
      _classCallCheck(this, CSSViewEngineHooks);

      this.mode = mode;
      this.css = null;
      this._alreadyGloballyInjected = false;
    }

    CSSViewEngineHooks.prototype.beforeCompile = function beforeCompile(content, resources, instruction) {
      if (this.mode === 'scoped') {
        if (instruction.targetShadowDOM) {
          _aureliaPal.DOM.injectStyles(this.css, content, true);
        } else if (_aureliaPal.FEATURE.scopedCSS) {
          var styleNode = _aureliaPal.DOM.injectStyles(this.css, content, true);
          styleNode.setAttribute('scoped', 'scoped');
        } else if (!this._alreadyGloballyInjected) {
          _aureliaPal.DOM.injectStyles(this.css);
          this._alreadyGloballyInjected = true;
        }
      } else if (!this._alreadyGloballyInjected) {
        _aureliaPal.DOM.injectStyles(this.css);
        this._alreadyGloballyInjected = true;
      }
    };

    return CSSViewEngineHooks;
  }();

  function _createCSSResource(address) {
    var _dec, _class;

    var ViewCSS = (_dec = (0, _aureliaTemplating.resource)(new CSSResource(address)), _dec(_class = function (_CSSViewEngineHooks) {
      _inherits(ViewCSS, _CSSViewEngineHooks);

      function ViewCSS() {
        _classCallCheck(this, ViewCSS);

        return _possibleConstructorReturn(this, _CSSViewEngineHooks.apply(this, arguments));
      }

      return ViewCSS;
    }(CSSViewEngineHooks)) || _class);

    return ViewCSS;
  }
});
define('aurelia-templating-resources/binding-mode-behaviors',['exports', 'aurelia-binding', 'aurelia-metadata'], function (exports, _aureliaBinding, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TwoWayBindingBehavior = exports.OneWayBindingBehavior = exports.OneTimeBindingBehavior = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class, _dec2, _class2, _dec3, _class3;

  var modeBindingBehavior = {
    bind: function bind(binding, source, lookupFunctions) {
      binding.originalMode = binding.mode;
      binding.mode = this.mode;
    },
    unbind: function unbind(binding, source) {
      binding.mode = binding.originalMode;
      binding.originalMode = null;
    }
  };

  var OneTimeBindingBehavior = exports.OneTimeBindingBehavior = (_dec = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec(_class = function OneTimeBindingBehavior() {
    _classCallCheck(this, OneTimeBindingBehavior);

    this.mode = _aureliaBinding.bindingMode.oneTime;
  }) || _class);
  var OneWayBindingBehavior = exports.OneWayBindingBehavior = (_dec2 = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec2(_class2 = function OneWayBindingBehavior() {
    _classCallCheck(this, OneWayBindingBehavior);

    this.mode = _aureliaBinding.bindingMode.oneWay;
  }) || _class2);
  var TwoWayBindingBehavior = exports.TwoWayBindingBehavior = (_dec3 = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec3(_class3 = function TwoWayBindingBehavior() {
    _classCallCheck(this, TwoWayBindingBehavior);

    this.mode = _aureliaBinding.bindingMode.twoWay;
  }) || _class3);
});
define('aurelia-templating-resources/throttle-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ThrottleBindingBehavior = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function throttle(newValue) {
    var _this = this;

    var state = this.throttleState;
    var elapsed = +new Date() - state.last;
    if (elapsed >= state.delay) {
      clearTimeout(state.timeoutId);
      state.timeoutId = null;
      state.last = +new Date();
      this.throttledMethod(newValue);
      return;
    }
    state.newValue = newValue;
    if (state.timeoutId === null) {
      state.timeoutId = setTimeout(function () {
        state.timeoutId = null;
        state.last = +new Date();
        _this.throttledMethod(state.newValue);
      }, state.delay - elapsed);
    }
  }

  var ThrottleBindingBehavior = exports.ThrottleBindingBehavior = function () {
    function ThrottleBindingBehavior() {
      _classCallCheck(this, ThrottleBindingBehavior);
    }

    ThrottleBindingBehavior.prototype.bind = function bind(binding, source) {
      var delay = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

      var methodToThrottle = 'updateTarget';
      if (binding.callSource) {
        methodToThrottle = 'callSource';
      } else if (binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay) {
          methodToThrottle = 'updateSource';
        }

      binding.throttledMethod = binding[methodToThrottle];
      binding.throttledMethod.originalName = methodToThrottle;

      binding[methodToThrottle] = throttle;

      binding.throttleState = {
        delay: delay,
        last: 0,
        timeoutId: null
      };
    };

    ThrottleBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var methodToRestore = binding.throttledMethod.originalName;
      binding[methodToRestore] = binding.throttledMethod;
      binding.throttledMethod = null;
      clearTimeout(binding.throttleState.timeoutId);
      binding.throttleState = null;
    };

    return ThrottleBindingBehavior;
  }();
});
define('aurelia-templating-resources/debounce-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DebounceBindingBehavior = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function debounce(newValue) {
    var _this = this;

    var state = this.debounceState;
    if (state.immediate) {
      state.immediate = false;
      this.debouncedMethod(newValue);
      return;
    }
    clearTimeout(state.timeoutId);
    state.timeoutId = setTimeout(function () {
      return _this.debouncedMethod(newValue);
    }, state.delay);
  }

  var DebounceBindingBehavior = exports.DebounceBindingBehavior = function () {
    function DebounceBindingBehavior() {
      _classCallCheck(this, DebounceBindingBehavior);
    }

    DebounceBindingBehavior.prototype.bind = function bind(binding, source) {
      var delay = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

      var methodToDebounce = 'updateTarget';
      if (binding.callSource) {
        methodToDebounce = 'callSource';
      } else if (binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay) {
          methodToDebounce = 'updateSource';
        }

      binding.debouncedMethod = binding[methodToDebounce];
      binding.debouncedMethod.originalName = methodToDebounce;

      binding[methodToDebounce] = debounce;

      binding.debounceState = {
        delay: delay,
        timeoutId: null,
        immediate: methodToDebounce === 'updateTarget' };
    };

    DebounceBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var methodToRestore = binding.debouncedMethod.originalName;
      binding[methodToRestore] = binding.debouncedMethod;
      binding.debouncedMethod = null;
      clearTimeout(binding.debounceState.timeoutId);
      binding.debounceState = null;
    };

    return DebounceBindingBehavior;
  }();
});
define('aurelia-templating-resources/binding-signaler',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BindingSignaler = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var BindingSignaler = exports.BindingSignaler = function () {
    function BindingSignaler() {
      _classCallCheck(this, BindingSignaler);

      this.signals = {};
    }

    BindingSignaler.prototype.signal = function signal(name) {
      var bindings = this.signals[name];
      if (!bindings) {
        return;
      }
      var i = bindings.length;
      while (i--) {
        bindings[i].call(_aureliaBinding.sourceContext);
      }
    };

    return BindingSignaler;
  }();
});
define('aurelia-templating-resources/signal-binding-behavior',['exports', './binding-signaler'], function (exports, _bindingSignaler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SignalBindingBehavior = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SignalBindingBehavior = exports.SignalBindingBehavior = function () {
    SignalBindingBehavior.inject = function inject() {
      return [_bindingSignaler.BindingSignaler];
    };

    function SignalBindingBehavior(bindingSignaler) {
      _classCallCheck(this, SignalBindingBehavior);

      this.signals = bindingSignaler.signals;
    }

    SignalBindingBehavior.prototype.bind = function bind(binding, source) {
      if (!binding.updateTarget) {
        throw new Error('Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.');
      }
      if (arguments.length === 3) {
        var name = arguments[2];
        var bindings = this.signals[name] || (this.signals[name] = []);
        bindings.push(binding);
        binding.signalName = name;
      } else if (arguments.length > 3) {
        var names = Array.prototype.slice.call(arguments, 2);
        var i = names.length;
        while (i--) {
          var _name = names[i];
          var _bindings = this.signals[_name] || (this.signals[_name] = []);
          _bindings.push(binding);
        }
        binding.signalName = names;
      } else {
        throw new Error('Signal name is required.');
      }
    };

    SignalBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var name = binding.signalName;
      binding.signalName = null;
      if (Array.isArray(name)) {
        var names = name;
        var i = names.length;
        while (i--) {
          var n = names[i];
          var bindings = this.signals[n];
          bindings.splice(bindings.indexOf(binding), 1);
        }
      } else {
        var _bindings2 = this.signals[name];
        _bindings2.splice(_bindings2.indexOf(binding), 1);
      }
    };

    return SignalBindingBehavior;
  }();
});
define('aurelia-templating-resources/update-trigger-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UpdateTriggerBindingBehavior = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var eventNamesRequired = 'The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:\'blur\'">';
  var notApplicableMessage = 'The updateTrigger binding behavior can only be applied to two-way bindings on input/select elements.';

  var UpdateTriggerBindingBehavior = exports.UpdateTriggerBindingBehavior = (_temp = _class = function () {
    function UpdateTriggerBindingBehavior(eventManager) {
      _classCallCheck(this, UpdateTriggerBindingBehavior);

      this.eventManager = eventManager;
    }

    UpdateTriggerBindingBehavior.prototype.bind = function bind(binding, source) {
      for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        events[_key - 2] = arguments[_key];
      }

      if (events.length === 0) {
        throw new Error(eventNamesRequired);
      }
      if (binding.mode !== _aureliaBinding.bindingMode.twoWay) {
        throw new Error(notApplicableMessage);
      }

      var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
      if (!targetObserver.handler) {
        throw new Error(notApplicableMessage);
      }
      binding.targetObserver = targetObserver;

      targetObserver.originalHandler = binding.targetObserver.handler;

      var handler = this.eventManager.createElementHandler(events);
      targetObserver.handler = handler;
    };

    UpdateTriggerBindingBehavior.prototype.unbind = function unbind(binding, source) {
      binding.targetObserver.handler = binding.targetObserver.originalHandler;
      binding.targetObserver.originalHandler = null;
    };

    return UpdateTriggerBindingBehavior;
  }(), _class.inject = [_aureliaBinding.EventManager], _temp);
});
define('aurelia-templating-resources/dynamic-element',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._createDynamicElement = _createDynamicElement;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _createDynamicElement(name, viewUrl, bindableNames) {
    var _dec, _dec2, _class;

    var DynamicElement = (_dec = (0, _aureliaTemplating.customElement)(name), _dec2 = (0, _aureliaTemplating.useView)(viewUrl), _dec(_class = _dec2(_class = function () {
      function DynamicElement() {
        _classCallCheck(this, DynamicElement);
      }

      DynamicElement.prototype.bind = function bind(bindingContext) {
        this.$parent = bindingContext;
      };

      return DynamicElement;
    }()) || _class) || _class);

    for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
      (0, _aureliaTemplating.bindable)(bindableNames[i])(DynamicElement);
    }
    return DynamicElement;
  }
});
define('aurelia-templating-resources/html-resource-plugin',['exports', 'aurelia-templating', './dynamic-element'], function (exports, _aureliaTemplating, _dynamicElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getElementName = getElementName;
  exports.configure = configure;
  function getElementName(address) {
    return (/([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase()
    );
  }

  function configure(config) {
    var viewEngine = config.container.get(_aureliaTemplating.ViewEngine);
    var loader = config.aurelia.loader;

    viewEngine.addResourcePlugin('.html', {
      'fetch': function fetch(address) {
        return loader.loadTemplate(address).then(function (registryEntry) {
          var _ref;

          var bindable = registryEntry.template.getAttribute('bindable');
          var elementName = getElementName(address);

          if (bindable) {
            bindable = bindable.split(',').map(function (x) {
              return x.trim();
            });
            registryEntry.template.removeAttribute('bindable');
          } else {
            bindable = [];
          }

          return _ref = {}, _ref[elementName] = (0, _dynamicElement._createDynamicElement)(elementName, address, bindable), _ref;
        });
      }
    });
  }
});
define('aurelia-templating-resources/aurelia-templating-resources',['exports', './compose', './if', './with', './repeat', './show', './hide', './sanitize-html', './replaceable', './focus', './compile-spy', './view-spy', 'aurelia-templating', './css-resource', 'aurelia-pal', './html-sanitizer', './binding-mode-behaviors', './throttle-binding-behavior', './debounce-binding-behavior', './signal-binding-behavior', './binding-signaler', './update-trigger-binding-behavior', './abstract-repeater', './repeat-strategy-locator', './html-resource-plugin'], function (exports, _compose, _if, _with, _repeat, _show, _hide, _sanitizeHtml, _replaceable, _focus, _compileSpy, _viewSpy, _aureliaTemplating, _cssResource, _aureliaPal, _htmlSanitizer, _bindingModeBehaviors, _throttleBindingBehavior, _debounceBindingBehavior, _signalBindingBehavior, _bindingSignaler, _updateTriggerBindingBehavior, _abstractRepeater, _repeatStrategyLocator, _htmlResourcePlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RepeatStrategyLocator = exports.AbstractRepeater = exports.UpdateTriggerBindingBehavior = exports.BindingSignaler = exports.SignalBindingBehavior = exports.DebounceBindingBehavior = exports.ThrottleBindingBehavior = exports.TwoWayBindingBehavior = exports.OneWayBindingBehavior = exports.OneTimeBindingBehavior = exports.configure = exports.ViewSpy = exports.CompileSpy = exports.Focus = exports.Replaceable = exports.SanitizeHTMLValueConverter = exports.HTMLSanitizer = exports.Hide = exports.Show = exports.Repeat = exports.With = exports.If = exports.Compose = undefined;


  function configure(config) {
    if (_aureliaPal.FEATURE.shadowDOM) {
      _aureliaPal.DOM.injectStyles('body /deep/ .aurelia-hide { display:none !important; }');
    } else {
      _aureliaPal.DOM.injectStyles('.aurelia-hide { display:none !important; }');
    }

    config.globalResources('./compose', './if', './with', './repeat', './show', './hide', './replaceable', './sanitize-html', './focus', './compile-spy', './view-spy', './binding-mode-behaviors', './throttle-binding-behavior', './debounce-binding-behavior', './signal-binding-behavior', './update-trigger-binding-behavior');

    (0, _htmlResourcePlugin.configure)(config);

    var viewEngine = config.container.get(_aureliaTemplating.ViewEngine);
    viewEngine.addResourcePlugin('.css', {
      'fetch': function fetch(address) {
        var _ref;

        return _ref = {}, _ref[address] = (0, _cssResource._createCSSResource)(address), _ref;
      }
    });
  }

  exports.Compose = _compose.Compose;
  exports.If = _if.If;
  exports.With = _with.With;
  exports.Repeat = _repeat.Repeat;
  exports.Show = _show.Show;
  exports.Hide = _hide.Hide;
  exports.HTMLSanitizer = _htmlSanitizer.HTMLSanitizer;
  exports.SanitizeHTMLValueConverter = _sanitizeHtml.SanitizeHTMLValueConverter;
  exports.Replaceable = _replaceable.Replaceable;
  exports.Focus = _focus.Focus;
  exports.CompileSpy = _compileSpy.CompileSpy;
  exports.ViewSpy = _viewSpy.ViewSpy;
  exports.configure = configure;
  exports.OneTimeBindingBehavior = _bindingModeBehaviors.OneTimeBindingBehavior;
  exports.OneWayBindingBehavior = _bindingModeBehaviors.OneWayBindingBehavior;
  exports.TwoWayBindingBehavior = _bindingModeBehaviors.TwoWayBindingBehavior;
  exports.ThrottleBindingBehavior = _throttleBindingBehavior.ThrottleBindingBehavior;
  exports.DebounceBindingBehavior = _debounceBindingBehavior.DebounceBindingBehavior;
  exports.SignalBindingBehavior = _signalBindingBehavior.SignalBindingBehavior;
  exports.BindingSignaler = _bindingSignaler.BindingSignaler;
  exports.UpdateTriggerBindingBehavior = _updateTriggerBindingBehavior.UpdateTriggerBindingBehavior;
  exports.AbstractRepeater = _abstractRepeater.AbstractRepeater;
  exports.RepeatStrategyLocator = _repeatStrategyLocator.RepeatStrategyLocator;
});
define('aurelia-templating-resources', ['aurelia-templating-resources/aurelia-templating-resources'], function (main) { return main; });

define('bundle-manifest',["config","editing/current-file-changed-event","editing/edit-session-factory","editing/edit-session","editing/editor-mode","editing/file","editing/gist-adapter","editing/query-string","editing/run-event","github/access-token","github/api-client","github/default-gist","github/gists","github/oauth","github/rate-limit","github/user","import/gist","import/importer","import/jsfiddle","import/plunker","main","ui/ace-editor","text!ui/app.html","ui/app","text!ui/edit-file-panel.html","text!ui/edit-session-commands.html","text!ui/embed/app.html","ui/embed/app","text!ui/fallback.html","ui/fallback","ui/focus-target","ui/focus","ui/ga","text!ui/header.html","ui/header","text!ui/nav-panel.html","ui/nav-panel","text!ui/rate-alert.html","ui/rate-alert","text!ui/result-panel.html","ui/result-panel","text!ui/save-buttons.html","ui/save-buttons","text!ui/split-panel.html","ui/split-panel","ui/stack-overflow-markdown","util","worker/worker-activator","worker/worker-client",
    "aurelia-binding",
    "aurelia-bootstrapper",
    "aurelia-dependency-injection",
    "aurelia-event-aggregator",
    "aurelia-framework",
    "aurelia-history",
    "aurelia-history-browser",
    "aurelia-loader",
    "aurelia-loader-default",
    "aurelia-logging",
    "aurelia-logging-console",
    "aurelia-metadata",
    "aurelia-pal",
    "aurelia-pal-browser",
    "aurelia-path",
    "aurelia-polyfills",
    "aurelia-router",
    "aurelia-route-recognizer",
    "aurelia-task-queue",
    "aurelia-templating",
    "aurelia-templating-binding",

    "aurelia-templating-router",
    "aurelia-templating-resources",

    "split",
    "alertify",
    "text"], function() {});

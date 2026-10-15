import { createRequire as nodeCreateRequire } from "node:module"; const require = nodeCreateRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports, module) {
    try {
      util = __require("util");
      if (typeof util.inherits !== "function") throw "";
      module.exports = util.inherits;
    } catch (e) {
      module.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = __require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/isarray/index.js"(exports, module) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    module.exports = TypeError;
  }
});

// node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "node_modules/es-object-atoms/index.js"(exports, module) {
    "use strict";
    module.exports = Object;
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    module.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    module.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    module.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    module.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    module.exports = SyntaxError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    module.exports = URIError;
  }
});

// node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "node_modules/math-intrinsics/abs.js"(exports, module) {
    "use strict";
    module.exports = Math.abs;
  }
});

// node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "node_modules/math-intrinsics/floor.js"(exports, module) {
    "use strict";
    module.exports = Math.floor;
  }
});

// node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "node_modules/math-intrinsics/max.js"(exports, module) {
    "use strict";
    module.exports = Math.max;
  }
});

// node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "node_modules/math-intrinsics/min.js"(exports, module) {
    "use strict";
    module.exports = Math.min;
  }
});

// node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "node_modules/math-intrinsics/pow.js"(exports, module) {
    "use strict";
    module.exports = Math.pow;
  }
});

// node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "node_modules/math-intrinsics/round.js"(exports, module) {
    "use strict";
    module.exports = Math.round;
  }
});

// node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/math-intrinsics/isNaN.js"(exports, module) {
    "use strict";
    module.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "node_modules/math-intrinsics/sign.js"(exports, module) {
    "use strict";
    var $isNaN = require_isNaN();
    module.exports = function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
  }
});

// node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "node_modules/gopd/gOPD.js"(exports, module) {
    "use strict";
    module.exports = Object.getOwnPropertyDescriptor;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
    "use strict";
    module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
    "use strict";
    var $Object = require_es_object_atoms();
    module.exports = $Object.getPrototypeOf || null;
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
    "use strict";
    module.exports = Function.prototype.call;
  }
});

// node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
    "use strict";
    module.exports = Function.prototype.apply;
  }
});

// node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
    "use strict";
    module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module.exports = $reflectApply || bind.call($call, $apply);
  }
});

// node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "node_modules/call-bind-apply-helpers/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
  }
});

// node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "node_modules/dunder-proto/get.js"(exports, module) {
    "use strict";
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
    ) : false;
  }
});

// node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "node_modules/get-proto/index.js"(exports, module) {
    "use strict";
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? (function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    })() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void undefined2;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "node_modules/call-bound/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    };
  }
});

// node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module.exports = reflectApply ? function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// node_modules/for-each/index.js
var require_for_each = __commonJS({
  "node_modules/for-each/index.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object2, iterator, receiver) {
      for (var k in object2) {
        if (hasOwnProperty.call(object2, k)) {
          if (receiver == null) {
            iterator(object2[k], k, object2);
          } else {
            iterator.call(receiver, object2[k], k, object2);
          }
        }
      }
    };
    function isArray(x) {
      return toStr.call(x) === "[object Array]";
    }
    module.exports = function forEach(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (isArray(list)) {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
  }
});

// node_modules/possible-typed-array-names/index.js
var require_possible_typed_array_names = __commonJS({
  "node_modules/possible-typed-array-names/index.js"(exports, module) {
    "use strict";
    module.exports = [
      "Float16Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array"
    ];
  }
});

// node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "node_modules/available-typed-arrays/index.js"(exports, module) {
    "use strict";
    var possibleNames = require_possible_typed_array_names();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    module.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "node_modules/define-data-property/index.js"(exports, module) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "node_modules/set-function-length/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define2 = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define2(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define2(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// node_modules/call-bind-apply-helpers/applyBind.js
var require_applyBind = __commonJS({
  "node_modules/call-bind-apply-helpers/applyBind.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var actualApply = require_actualApply();
    module.exports = function applyBind() {
      return actualApply(bind, $apply, arguments);
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var setFunctionLength = require_set_function_length();
    var $defineProperty = require_es_define_property();
    var callBindBasic = require_call_bind_apply_helpers();
    var applyBind = require_applyBind();
    module.exports = function callBind(originalFunction) {
      var func = callBindBasic(arguments);
      var adjustedLength = 1 + originalFunction.length - (arguments.length - 1);
      return setFunctionLength(
        func,
        adjustedLength > 0 ? adjustedLength : 0,
        true
      );
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "node_modules/which-typed-array/index.js"(exports, module) {
    "use strict";
    var forEach = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBind = require_call_bind();
    var callBound = require_call_bound();
    var gOPD = require_gopd();
    var getProto = require_get_proto();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var cache = { __proto__: null };
    if (hasToStringTag && gOPD && getProto) {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr && getProto) {
          var proto = getProto(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor && proto) {
            var superProto = getProto(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          if (descriptor && descriptor.get) {
            var bound = callBind(descriptor.get);
            cache[
              /** @type {`$${TypedArrayName}`} */
              "$" + typedArray
            ] = bound;
          }
        }
      });
    } else {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        var fn = arr.slice || arr.set;
        if (fn) {
          var bound = (
            /** @type {typeof BoundSlice | typeof BoundSet} */
            // @ts-expect-error TODO FIXME
            callBind(fn)
          );
          cache[
            /** @type {`$${TypedArrayName}`} */
            "$" + typedArray
          ] = bound;
        }
      });
    }
    function tryTypedArrays(value) {
      var found = false;
      forEach(
        /** @type {Record<`$${TypedArrayName}`, Getter>} */
        cache,
        /** @param {Getter} getter @param {`$${TypedArrayName}`} typedArray */
        function(getter, typedArray) {
          if (!found) {
            try {
              if ("$" + getter(value) === typedArray) {
                found = /** @type {TypedArrayName} */
                $slice(typedArray, 1);
              }
            } catch (e) {
            }
          }
        }
      );
      return found;
    }
    function trySlices(value) {
      var found = false;
      forEach(
        /** @type {Record<`$${TypedArrayName}`, Getter>} */
        cache,
        /** @param {Getter} getter @param {`$${TypedArrayName}`} name */
        function(getter, name) {
          if (!found) {
            try {
              getter(value);
              found = /** @type {TypedArrayName} */
              $slice(name, 1);
            } catch (e) {
            }
          }
        }
      );
      return found;
    }
    function isTATag(tag) {
      return $indexOf(typedArrays, tag) > -1;
    }
    function whichTypedArray(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag) {
        var tag = $slice($toString(value), 8, -1);
        if (isTATag(tag)) {
          return tag;
        }
        if (tag !== "Object") {
          return false;
        }
        return trySlices(value);
      }
      if (!gOPD) {
        return null;
      }
      return tryTypedArrays(value);
    }
    module.exports = whichTypedArray;
  }
});

// node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "node_modules/is-typed-array/index.js"(exports, module) {
    "use strict";
    var whichTypedArray = require_which_typed_array();
    module.exports = function isTypedArray(value) {
      return !!whichTypedArray(value);
    };
  }
});

// node_modules/typed-array-buffer/index.js
var require_typed_array_buffer = __commonJS({
  "node_modules/typed-array-buffer/index.js"(exports, module) {
    "use strict";
    var $TypeError = require_type();
    var callBound = require_call_bound();
    var $typedArrayBuffer = callBound("TypedArray.prototype.buffer", true);
    var isTypedArray = require_is_typed_array();
    module.exports = $typedArrayBuffer || function typedArrayBuffer(x) {
      if (!isTypedArray(x)) {
        throw new $TypeError("Not a Typed Array");
      }
      return x.buffer;
    };
  }
});

// node_modules/to-buffer/index.js
var require_to_buffer = __commonJS({
  "node_modules/to-buffer/index.js"(exports, module) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isArray = require_isarray();
    var typedArrayBuffer = require_typed_array_buffer();
    var isView = ArrayBuffer.isView || function isView2(obj) {
      try {
        typedArrayBuffer(obj);
        return true;
      } catch (e) {
        return false;
      }
    };
    var useUint8Array = typeof Uint8Array !== "undefined";
    var useArrayBuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
    var useFromArrayBuffer = useArrayBuffer && (Buffer2.prototype instanceof Uint8Array || Buffer2.TYPED_ARRAY_SUPPORT);
    module.exports = function toBuffer(data, encoding) {
      if (Buffer2.isBuffer(data)) {
        if (data.constructor && !("isBuffer" in data)) {
          return Buffer2.from(data);
        }
        return data;
      }
      if (typeof data === "string") {
        return Buffer2.from(data, encoding);
      }
      if (useArrayBuffer && isView(data)) {
        if (data.byteLength === 0) {
          return Buffer2.alloc(0);
        }
        if (useFromArrayBuffer) {
          var res = Buffer2.from(data.buffer, data.byteOffset, data.byteLength);
          if (res.byteLength === data.byteLength) {
            return res;
          }
        }
        var uint8 = data instanceof Uint8Array ? data : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        var result = Buffer2.from(uint8);
        if (result.length === data.byteLength) {
          return result;
        }
      }
      if (useUint8Array && data instanceof Uint8Array) {
        return Buffer2.from(data);
      }
      var isArr = isArray(data);
      if (isArr) {
        for (var i = 0; i < data.length; i += 1) {
          var x = data[i];
          if (typeof x !== "number" || x < 0 || x > 255 || ~~x !== x) {
            throw new RangeError("Array items must be numbers in the range 0-255.");
          }
        }
      }
      if (isArr || Buffer2.isBuffer(data) && data.constructor && typeof data.constructor.isBuffer === "function" && data.constructor.isBuffer(data)) {
        return Buffer2.from(data);
      }
      throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.');
    };
  }
});

// node_modules/sha.js/hash.js
var require_hash = __commonJS({
  "node_modules/sha.js/hash.js"(exports, module) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var toBuffer = require_to_buffer();
    function Hash2(blockSize, finalSize) {
      this._block = Buffer2.alloc(blockSize);
      this._finalSize = finalSize;
      this._blockSize = blockSize;
      this._len = 0;
    }
    Hash2.prototype.update = function(data, enc) {
      data = toBuffer(data, enc || "utf8");
      var block = this._block;
      var blockSize = this._blockSize;
      var length = data.length;
      var accum = this._len;
      for (var offset = 0; offset < length; ) {
        var assigned = accum % blockSize;
        var remainder = Math.min(length - offset, blockSize - assigned);
        for (var i = 0; i < remainder; i++) {
          block[assigned + i] = data[offset + i];
        }
        accum += remainder;
        offset += remainder;
        if (accum % blockSize === 0) {
          this._update(block);
        }
      }
      this._len += length;
      return this;
    };
    Hash2.prototype.digest = function(enc) {
      var rem = this._len % this._blockSize;
      this._block[rem] = 128;
      this._block.fill(0, rem + 1);
      if (rem >= this._finalSize) {
        this._update(this._block);
        this._block.fill(0);
      }
      var bits = this._len * 8;
      if (bits <= 4294967295) {
        this._block.writeUInt32BE(bits, this._blockSize - 4);
      } else {
        var lowBits = (bits & 4294967295) >>> 0;
        var highBits = (bits - lowBits) / 4294967296;
        this._block.writeUInt32BE(highBits, this._blockSize - 8);
        this._block.writeUInt32BE(lowBits, this._blockSize - 4);
      }
      this._update(this._block);
      var hash = this._hash();
      return enc ? hash.toString(enc) : hash;
    };
    Hash2.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    };
    module.exports = Hash2;
  }
});

// node_modules/sha.js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/sha.js/sha1.js"(exports, module) {
    "use strict";
    var inherits = require_inherits();
    var Hash2 = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1518500249,
      1859775393,
      2400959708 | 0,
      3395469782 | 0
    ];
    var W = new Array(80);
    function Sha1() {
      this.init();
      this._w = W;
      Hash2.call(this, 64, 56);
    }
    inherits(Sha1, Hash2);
    Sha1.prototype.init = function() {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    function rotl1(num) {
      return num << 1 | num >>> 31;
    }
    function rotl5(num) {
      return num << 5 | num >>> 27;
    }
    function rotl30(num) {
      return num << 30 | num >>> 2;
    }
    function ft(s, b, c, d) {
      if (s === 0) {
        return b & c | ~b & d;
      }
      if (s === 2) {
        return b & c | b & d | c & d;
      }
      return b ^ c ^ d;
    }
    Sha1.prototype._update = function(M) {
      var w = this._w;
      var a = this._a | 0;
      var b = this._b | 0;
      var c = this._c | 0;
      var d = this._d | 0;
      var e = this._e | 0;
      for (var i = 0; i < 16; ++i) {
        w[i] = M.readInt32BE(i * 4);
      }
      for (; i < 80; ++i) {
        w[i] = rotl1(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16]);
      }
      for (var j = 0; j < 80; ++j) {
        var s = ~~(j / 20);
        var t = rotl5(a) + ft(s, b, c, d) + e + w[j] + K[s] | 0;
        e = d;
        d = c;
        c = rotl30(b);
        b = a;
        a = t;
      }
      this._a = a + this._a | 0;
      this._b = b + this._b | 0;
      this._c = c + this._c | 0;
      this._d = d + this._d | 0;
      this._e = e + this._e | 0;
    };
    Sha1.prototype._hash = function() {
      var H = Buffer2.allocUnsafe(20);
      H.writeInt32BE(this._a | 0, 0);
      H.writeInt32BE(this._b | 0, 4);
      H.writeInt32BE(this._c | 0, 8);
      H.writeInt32BE(this._d | 0, 12);
      H.writeInt32BE(this._e | 0, 16);
      return H;
    };
    module.exports = Sha1;
  }
});

// node_modules/async-lock/lib/index.js
var require_lib = __commonJS({
  "node_modules/async-lock/lib/index.js"(exports, module) {
    "use strict";
    var AsyncLock2 = function(opts) {
      opts = opts || {};
      this.Promise = opts.Promise || Promise;
      this.queues = /* @__PURE__ */ Object.create(null);
      this.domainReentrant = opts.domainReentrant || false;
      if (this.domainReentrant) {
        if (typeof process === "undefined" || typeof process.domain === "undefined") {
          throw new Error(
            "Domain-reentrant locks require `process.domain` to exist. Please flip `opts.domainReentrant = false`, use a NodeJS version that still implements Domain, or install a browser polyfill."
          );
        }
        this.domains = /* @__PURE__ */ Object.create(null);
      }
      this.timeout = opts.timeout || AsyncLock2.DEFAULT_TIMEOUT;
      this.maxOccupationTime = opts.maxOccupationTime || AsyncLock2.DEFAULT_MAX_OCCUPATION_TIME;
      this.maxExecutionTime = opts.maxExecutionTime || AsyncLock2.DEFAULT_MAX_EXECUTION_TIME;
      if (opts.maxPending === Infinity || Number.isInteger(opts.maxPending) && opts.maxPending >= 0) {
        this.maxPending = opts.maxPending;
      } else {
        this.maxPending = AsyncLock2.DEFAULT_MAX_PENDING;
      }
    };
    AsyncLock2.DEFAULT_TIMEOUT = 0;
    AsyncLock2.DEFAULT_MAX_OCCUPATION_TIME = 0;
    AsyncLock2.DEFAULT_MAX_EXECUTION_TIME = 0;
    AsyncLock2.DEFAULT_MAX_PENDING = 1e3;
    AsyncLock2.prototype.acquire = function(key, fn, cb, opts) {
      if (Array.isArray(key)) {
        return this._acquireBatch(key, fn, cb, opts);
      }
      if (typeof fn !== "function") {
        throw new Error("You must pass a function to execute");
      }
      var deferredResolve = null;
      var deferredReject = null;
      var deferred = null;
      if (typeof cb !== "function") {
        opts = cb;
        cb = null;
        deferred = new this.Promise(function(resolve, reject) {
          deferredResolve = resolve;
          deferredReject = reject;
        });
      }
      opts = opts || {};
      var resolved = false;
      var timer = null;
      var occupationTimer = null;
      var executionTimer = null;
      var self = this;
      var done = function(locked, err, ret) {
        if (occupationTimer) {
          clearTimeout(occupationTimer);
          occupationTimer = null;
        }
        if (executionTimer) {
          clearTimeout(executionTimer);
          executionTimer = null;
        }
        if (locked) {
          if (!!self.queues[key] && self.queues[key].length === 0) {
            delete self.queues[key];
          }
          if (self.domainReentrant) {
            delete self.domains[key];
          }
        }
        if (!resolved) {
          if (!deferred) {
            if (typeof cb === "function") {
              cb(err, ret);
            }
          } else {
            if (err) {
              deferredReject(err);
            } else {
              deferredResolve(ret);
            }
          }
          resolved = true;
        }
        if (locked) {
          if (!!self.queues[key] && self.queues[key].length > 0) {
            self.queues[key].shift()();
          }
        }
      };
      var exec = function(locked) {
        if (resolved) {
          return done(locked);
        }
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        if (self.domainReentrant && locked) {
          self.domains[key] = process.domain;
        }
        var maxExecutionTime = opts.maxExecutionTime || self.maxExecutionTime;
        if (maxExecutionTime) {
          executionTimer = setTimeout(function() {
            if (!!self.queues[key]) {
              done(locked, new Error("Maximum execution time is exceeded " + key));
            }
          }, maxExecutionTime);
        }
        if (fn.length === 1) {
          var called = false;
          try {
            fn(function(err, ret) {
              if (!called) {
                called = true;
                done(locked, err, ret);
              }
            });
          } catch (err) {
            if (!called) {
              called = true;
              done(locked, err);
            }
          }
        } else {
          self._promiseTry(function() {
            return fn();
          }).then(function(ret) {
            done(locked, void 0, ret);
          }, function(error) {
            done(locked, error);
          });
        }
      };
      if (self.domainReentrant && !!process.domain) {
        exec = process.domain.bind(exec);
      }
      var maxPending = opts.maxPending || self.maxPending;
      if (!self.queues[key]) {
        self.queues[key] = [];
        exec(true);
      } else if (self.domainReentrant && !!process.domain && process.domain === self.domains[key]) {
        exec(false);
      } else if (self.queues[key].length >= maxPending) {
        done(false, new Error("Too many pending tasks in queue " + key));
      } else {
        var taskFn = function() {
          exec(true);
        };
        if (opts.skipQueue) {
          self.queues[key].unshift(taskFn);
        } else {
          self.queues[key].push(taskFn);
        }
        var timeout = opts.timeout || self.timeout;
        if (timeout) {
          timer = setTimeout(function() {
            timer = null;
            done(false, new Error("async-lock timed out in queue " + key));
          }, timeout);
        }
      }
      var maxOccupationTime = opts.maxOccupationTime || self.maxOccupationTime;
      if (maxOccupationTime) {
        occupationTimer = setTimeout(function() {
          if (!!self.queues[key]) {
            done(false, new Error("Maximum occupation time is exceeded in queue " + key));
          }
        }, maxOccupationTime);
      }
      if (deferred) {
        return deferred;
      }
    };
    AsyncLock2.prototype._acquireBatch = function(keys, fn, cb, opts) {
      if (typeof cb !== "function") {
        opts = cb;
        cb = null;
      }
      var self = this;
      var getFn = function(key, fn2) {
        return function(cb2) {
          self.acquire(key, fn2, cb2, opts);
        };
      };
      var fnx = keys.reduceRight(function(prev, key) {
        return getFn(key, prev);
      }, fn);
      if (typeof cb === "function") {
        fnx(cb);
      } else {
        return new this.Promise(function(resolve, reject) {
          if (fnx.length === 1) {
            fnx(function(err, ret) {
              if (err) {
                reject(err);
              } else {
                resolve(ret);
              }
            });
          } else {
            resolve(fnx());
          }
        });
      }
    };
    AsyncLock2.prototype.isBusy = function(key) {
      if (!key) {
        return Object.keys(this.queues).length > 0;
      } else {
        return !!this.queues[key];
      }
    };
    AsyncLock2.prototype._promiseTry = function(fn) {
      try {
        return this.Promise.resolve(fn());
      } catch (e) {
        return this.Promise.reject(e);
      }
    };
    module.exports = AsyncLock2;
  }
});

// node_modules/async-lock/index.js
var require_async_lock = __commonJS({
  "node_modules/async-lock/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib();
  }
});

// node_modules/clean-git-ref/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/clean-git-ref/lib/index.js"(exports, module) {
    "use strict";
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function replaceAll(str, search, replacement) {
      search = search instanceof RegExp ? search : new RegExp(escapeRegExp(search), "g");
      return str.replace(search, replacement);
    }
    var CleanGitRef = {
      clean: function clean(value) {
        if (typeof value !== "string") {
          throw new Error("Expected a string, received: " + value);
        }
        value = replaceAll(value, "./", "/");
        value = replaceAll(value, "..", ".");
        value = replaceAll(value, " ", "-");
        value = replaceAll(value, /^[~^:?*\\\-]/g, "");
        value = replaceAll(value, /[~^:?*\\]/g, "-");
        value = replaceAll(value, /[~^:?*\\\-]$/g, "");
        value = replaceAll(value, "@{", "-");
        value = replaceAll(value, /\.$/g, "");
        value = replaceAll(value, /\/$/g, "");
        value = replaceAll(value, /\.lock$/g, "");
        return value;
      }
    };
    module.exports = CleanGitRef;
  }
});

// node_modules/crc-32/crc32.js
var require_crc32 = __commonJS({
  "node_modules/crc-32/crc32.js"(exports) {
    var CRC32;
    (function(factory) {
      if (typeof DO_NOT_EXPORT_CRC === "undefined") {
        if ("object" === typeof exports) {
          factory(exports);
        } else if ("function" === typeof define && define.amd) {
          define(function() {
            var module2 = {};
            factory(module2);
            return module2;
          });
        } else {
          factory(CRC32 = {});
        }
      } else {
        factory(CRC32 = {});
      }
    })(function(CRC322) {
      CRC322.version = "1.2.2";
      function signed_crc_table() {
        var c = 0, table = new Array(256);
        for (var n = 0; n != 256; ++n) {
          c = n;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          table[n] = c;
        }
        return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
      }
      var T0 = signed_crc_table();
      function slice_by_16_tables(T) {
        var c = 0, v = 0, n = 0, table = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
        for (n = 0; n != 256; ++n) table[n] = T[n];
        for (n = 0; n != 256; ++n) {
          v = T[n];
          for (c = 256 + n; c < 4096; c += 256) v = table[c] = v >>> 8 ^ T[v & 255];
        }
        var out = [];
        for (n = 1; n != 16; ++n) out[n - 1] = typeof Int32Array !== "undefined" ? table.subarray(n * 256, n * 256 + 256) : table.slice(n * 256, n * 256 + 256);
        return out;
      }
      var TT = slice_by_16_tables(T0);
      var T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4];
      var T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta = TT[9];
      var Tb = TT[10], Tc = TT[11], Td = TT[12], Te = TT[13], Tf = TT[14];
      function crc32_bstr(bstr, seed) {
        var C = seed ^ -1;
        for (var i = 0, L = bstr.length; i < L; ) C = C >>> 8 ^ T0[(C ^ bstr.charCodeAt(i++)) & 255];
        return ~C;
      }
      function crc32_buf(B, seed) {
        var C = seed ^ -1, L = B.length - 15, i = 0;
        for (; i < L; ) C = Tf[B[i++] ^ C & 255] ^ Te[B[i++] ^ C >> 8 & 255] ^ Td[B[i++] ^ C >> 16 & 255] ^ Tc[B[i++] ^ C >>> 24] ^ Tb[B[i++]] ^ Ta[B[i++]] ^ T9[B[i++]] ^ T8[B[i++]] ^ T7[B[i++]] ^ T6[B[i++]] ^ T5[B[i++]] ^ T4[B[i++]] ^ T3[B[i++]] ^ T2[B[i++]] ^ T1[B[i++]] ^ T0[B[i++]];
        L += 15;
        while (i < L) C = C >>> 8 ^ T0[(C ^ B[i++]) & 255];
        return ~C;
      }
      function crc32_str(str, seed) {
        var C = seed ^ -1;
        for (var i = 0, L = str.length, c = 0, d = 0; i < L; ) {
          c = str.charCodeAt(i++);
          if (c < 128) {
            C = C >>> 8 ^ T0[(C ^ c) & 255];
          } else if (c < 2048) {
            C = C >>> 8 ^ T0[(C ^ (192 | c >> 6 & 31)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255];
          } else if (c >= 55296 && c < 57344) {
            c = (c & 1023) + 64;
            d = str.charCodeAt(i++) & 1023;
            C = C >>> 8 ^ T0[(C ^ (240 | c >> 8 & 7)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c >> 2 & 63)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | d & 63)) & 255];
          } else {
            C = C >>> 8 ^ T0[(C ^ (224 | c >> 12 & 15)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c >> 6 & 63)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255];
          }
        }
        return ~C;
      }
      CRC322.table = T0;
      CRC322.bstr = crc32_bstr;
      CRC322.buf = crc32_buf;
      CRC322.str = crc32_str;
    });
  }
});

// node_modules/pako/lib/utils/common.js
var require_common = __commonJS({
  "node_modules/pako/lib/utils/common.js"(exports) {
    "use strict";
    var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
    function _has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    exports.assign = function(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }
      return obj;
    };
    exports.shrinkBuf = function(buf, size) {
      if (buf.length === size) {
        return buf;
      }
      if (buf.subarray) {
        return buf.subarray(0, size);
      }
      buf.length = size;
      return buf;
    };
    var fnTyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
          return;
        }
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        len = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        }
        result = new Uint8Array(len);
        pos = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }
        return result;
      }
    };
    var fnUntyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
      }
    };
    exports.setTyped = function(on) {
      if (on) {
        exports.Buf8 = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
      } else {
        exports.Buf8 = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
      }
    };
    exports.setTyped(TYPED_OK);
  }
});

// node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS({
  "node_modules/pako/lib/zlib/trees.js"(exports) {
    "use strict";
    var utils = require_common();
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero2(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = (
      /* extra bits for each length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
    );
    var extra_dbits = (
      /* extra bits for each distance code */
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
    );
    var extra_blbits = (
      /* extra bits for each bit length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
    );
    var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var DIST_CODE_LEN = 512;
    var static_ltree = new Array((L_CODES + 2) * 2);
    zero2(static_ltree);
    var static_dtree = new Array(D_CODES * 2);
    zero2(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero2(_dist_code);
    var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero2(_length_code);
    var base_length = new Array(LENGTH_CODES);
    zero2(base_length);
    var base_dist = new Array(D_CODES);
    zero2(base_dist);
    function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
      this.static_tree = static_tree;
      this.extra_bits = extra_bits;
      this.extra_base = extra_base;
      this.elems = elems;
      this.max_length = max_length;
      this.has_stree = static_tree && static_tree.length;
    }
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    function TreeDesc(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;
      this.max_code = 0;
      this.stat_desc = stat_desc;
    }
    function d_code(dist) {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    }
    function put_short(s, w) {
      s.pending_buf[s.pending++] = w & 255;
      s.pending_buf[s.pending++] = w >>> 8 & 255;
    }
    function send_bits(s, value, length) {
      if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 65535;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
      } else {
        s.bi_buf |= value << s.bi_valid & 65535;
        s.bi_valid += length;
      }
    }
    function send_code(s, c, tree) {
      send_bits(
        s,
        tree[c * 2],
        tree[c * 2 + 1]
        /*.Len*/
      );
    }
    function bi_reverse(code, len) {
      var res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    }
    function bi_flush(s) {
      if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
      } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 255;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
      }
    }
    function gen_bitlen(s, desc) {
      var tree = desc.dyn_tree;
      var max_code = desc.max_code;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var extra = desc.stat_desc.extra_bits;
      var base = desc.stat_desc.extra_base;
      var max_length = desc.stat_desc.max_length;
      var h;
      var n, m;
      var bits;
      var xbits;
      var f;
      var overflow = 0;
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s.bl_count[bits] = 0;
      }
      tree[s.heap[s.heap_max] * 2 + 1] = 0;
      for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n * 2 + 1] = bits;
        if (n > max_code) {
          continue;
        }
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) {
          xbits = extra[n - base];
        }
        f = tree[n * 2];
        s.opt_len += f * (bits + xbits);
        if (has_stree) {
          s.static_len += f * (stree[n * 2 + 1] + xbits);
        }
      }
      if (overflow === 0) {
        return;
      }
      do {
        bits = max_length - 1;
        while (s.bl_count[bits] === 0) {
          bits--;
        }
        s.bl_count[bits]--;
        s.bl_count[bits + 1] += 2;
        s.bl_count[max_length]--;
        overflow -= 2;
      } while (overflow > 0);
      for (bits = max_length; bits !== 0; bits--) {
        n = s.bl_count[bits];
        while (n !== 0) {
          m = s.heap[--h];
          if (m > max_code) {
            continue;
          }
          if (tree[m * 2 + 1] !== bits) {
            s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
            tree[m * 2 + 1] = bits;
          }
          n--;
        }
      }
    }
    function gen_codes(tree, max_code, bl_count) {
      var next_code = new Array(MAX_BITS + 1);
      var code = 0;
      var bits;
      var n;
      for (bits = 1; bits <= MAX_BITS; bits++) {
        next_code[bits] = code = code + bl_count[bits - 1] << 1;
      }
      for (n = 0; n <= max_code; n++) {
        var len = tree[n * 2 + 1];
        if (len === 0) {
          continue;
        }
        tree[n * 2] = bi_reverse(next_code[len]++, len);
      }
    }
    function tr_static_init() {
      var n;
      var bits;
      var length;
      var code;
      var dist;
      var bl_count = new Array(MAX_BITS + 1);
      length = 0;
      for (code = 0; code < LENGTH_CODES - 1; code++) {
        base_length[code] = length;
        for (n = 0; n < 1 << extra_lbits[code]; n++) {
          _length_code[length++] = code;
        }
      }
      _length_code[length - 1] = code;
      dist = 0;
      for (code = 0; code < 16; code++) {
        base_dist[code] = dist;
        for (n = 0; n < 1 << extra_dbits[code]; n++) {
          _dist_code[dist++] = code;
        }
      }
      dist >>= 7;
      for (; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
          _dist_code[256 + dist++] = code;
        }
      }
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
      n = 0;
      while (n <= 143) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      while (n <= 255) {
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
      }
      while (n <= 279) {
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
      }
      while (n <= 287) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      gen_codes(static_ltree, L_CODES + 1, bl_count);
      for (n = 0; n < D_CODES; n++) {
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
      }
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
      static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
    }
    function init_block(s) {
      var n;
      for (n = 0; n < L_CODES; n++) {
        s.dyn_ltree[n * 2] = 0;
      }
      for (n = 0; n < D_CODES; n++) {
        s.dyn_dtree[n * 2] = 0;
      }
      for (n = 0; n < BL_CODES; n++) {
        s.bl_tree[n * 2] = 0;
      }
      s.dyn_ltree[END_BLOCK * 2] = 1;
      s.opt_len = s.static_len = 0;
      s.last_lit = s.matches = 0;
    }
    function bi_windup(s) {
      if (s.bi_valid > 8) {
        put_short(s, s.bi_buf);
      } else if (s.bi_valid > 0) {
        s.pending_buf[s.pending++] = s.bi_buf;
      }
      s.bi_buf = 0;
      s.bi_valid = 0;
    }
    function copy_block(s, buf, len, header) {
      bi_windup(s);
      if (header) {
        put_short(s, len);
        put_short(s, ~len);
      }
      utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
      s.pending += len;
    }
    function smaller(tree, n, m, depth) {
      var _n2 = n * 2;
      var _m2 = m * 2;
      return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
    }
    function pqdownheap(s, tree, k) {
      var v = s.heap[k];
      var j = k << 1;
      while (j <= s.heap_len) {
        if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
          j++;
        }
        if (smaller(tree, v, s.heap[j], s.depth)) {
          break;
        }
        s.heap[k] = s.heap[j];
        k = j;
        j <<= 1;
      }
      s.heap[k] = v;
    }
    function compress_block(s, ltree, dtree) {
      var dist;
      var lc;
      var lx = 0;
      var code;
      var extra;
      if (s.last_lit !== 0) {
        do {
          dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
          lc = s.pending_buf[s.l_buf + lx];
          lx++;
          if (dist === 0) {
            send_code(s, lc, ltree);
          } else {
            code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree);
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s, lc, extra);
            }
            dist--;
            code = d_code(dist);
            send_code(s, code, dtree);
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s, dist, extra);
            }
          }
        } while (lx < s.last_lit);
      }
      send_code(s, END_BLOCK, ltree);
    }
    function build_tree(s, desc) {
      var tree = desc.dyn_tree;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var elems = desc.stat_desc.elems;
      var n, m;
      var max_code = -1;
      var node;
      s.heap_len = 0;
      s.heap_max = HEAP_SIZE;
      for (n = 0; n < elems; n++) {
        if (tree[n * 2] !== 0) {
          s.heap[++s.heap_len] = max_code = n;
          s.depth[n] = 0;
        } else {
          tree[n * 2 + 1] = 0;
        }
      }
      while (s.heap_len < 2) {
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) {
          s.static_len -= stree[node * 2 + 1];
        }
      }
      desc.max_code = max_code;
      for (n = s.heap_len >> 1; n >= 1; n--) {
        pqdownheap(s, tree, n);
      }
      node = elems;
      do {
        n = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[
          1
          /*SMALLEST*/
        ] = s.heap[s.heap_len--];
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
        m = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[--s.heap_max] = n;
        s.heap[--s.heap_max] = m;
        tree[node * 2] = tree[n * 2] + tree[m * 2];
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        s.heap[
          1
          /*SMALLEST*/
        ] = node++;
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
      } while (s.heap_len >= 2);
      s.heap[--s.heap_max] = s.heap[
        1
        /*SMALLEST*/
      ];
      gen_bitlen(s, desc);
      gen_codes(tree, max_code, s.bl_count);
    }
    function scan_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count2 = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code + 1) * 2 + 1] = 65535;
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count2 < max_count && curlen === nextlen) {
          continue;
        } else if (count2 < min_count) {
          s.bl_tree[curlen * 2] += count2;
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            s.bl_tree[curlen * 2]++;
          }
          s.bl_tree[REP_3_6 * 2]++;
        } else if (count2 <= 10) {
          s.bl_tree[REPZ_3_10 * 2]++;
        } else {
          s.bl_tree[REPZ_11_138 * 2]++;
        }
        count2 = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function send_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count2 = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count2 < max_count && curlen === nextlen) {
          continue;
        } else if (count2 < min_count) {
          do {
            send_code(s, curlen, s.bl_tree);
          } while (--count2 !== 0);
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s, curlen, s.bl_tree);
            count2--;
          }
          send_code(s, REP_3_6, s.bl_tree);
          send_bits(s, count2 - 3, 2);
        } else if (count2 <= 10) {
          send_code(s, REPZ_3_10, s.bl_tree);
          send_bits(s, count2 - 3, 3);
        } else {
          send_code(s, REPZ_11_138, s.bl_tree);
          send_bits(s, count2 - 11, 7);
        }
        count2 = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function build_bl_tree(s) {
      var max_blindex;
      scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
      scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
      build_tree(s, s.bl_desc);
      for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
          break;
        }
      }
      s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
      return max_blindex;
    }
    function send_all_trees(s, lcodes, dcodes, blcodes) {
      var rank;
      send_bits(s, lcodes - 257, 5);
      send_bits(s, dcodes - 1, 5);
      send_bits(s, blcodes - 4, 4);
      for (rank = 0; rank < blcodes; rank++) {
        send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
      }
      send_tree(s, s.dyn_ltree, lcodes - 1);
      send_tree(s, s.dyn_dtree, dcodes - 1);
    }
    function detect_data_type(s) {
      var black_mask = 4093624447;
      var n;
      for (n = 0; n <= 31; n++, black_mask >>>= 1) {
        if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
          return Z_BINARY;
        }
      }
      if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
      }
      for (n = 32; n < LITERALS; n++) {
        if (s.dyn_ltree[n * 2] !== 0) {
          return Z_TEXT;
        }
      }
      return Z_BINARY;
    }
    var static_init_done = false;
    function _tr_init(s) {
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
      s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
      s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
      s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
      s.bi_buf = 0;
      s.bi_valid = 0;
      init_block(s);
    }
    function _tr_stored_block(s, buf, stored_len, last) {
      send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
      copy_block(s, buf, stored_len, true);
    }
    function _tr_align(s) {
      send_bits(s, STATIC_TREES << 1, 3);
      send_code(s, END_BLOCK, static_ltree);
      bi_flush(s);
    }
    function _tr_flush_block(s, buf, stored_len, last) {
      var opt_lenb, static_lenb;
      var max_blindex = 0;
      if (s.level > 0) {
        if (s.strm.data_type === Z_UNKNOWN) {
          s.strm.data_type = detect_data_type(s);
        }
        build_tree(s, s.l_desc);
        build_tree(s, s.d_desc);
        max_blindex = build_bl_tree(s);
        opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        if (static_lenb <= opt_lenb) {
          opt_lenb = static_lenb;
        }
      } else {
        opt_lenb = static_lenb = stored_len + 5;
      }
      if (stored_len + 4 <= opt_lenb && buf !== -1) {
        _tr_stored_block(s, buf, stored_len, last);
      } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
      } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
      }
      init_block(s);
      if (last) {
        bi_windup(s);
      }
    }
    function _tr_tally(s, dist, lc) {
      s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
      s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
      s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
      s.last_lit++;
      if (dist === 0) {
        s.dyn_ltree[lc * 2]++;
      } else {
        s.matches++;
        dist--;
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
      }
      return s.last_lit === s.lit_bufsize - 1;
    }
    exports._tr_init = _tr_init;
    exports._tr_stored_block = _tr_stored_block;
    exports._tr_flush_block = _tr_flush_block;
    exports._tr_tally = _tr_tally;
    exports._tr_align = _tr_align;
  }
});

// node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS({
  "node_modules/pako/lib/zlib/adler32.js"(exports, module) {
    "use strict";
    function adler32(adler, buf, len, pos) {
      var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
      while (len !== 0) {
        n = len > 2e3 ? 2e3 : len;
        len -= n;
        do {
          s1 = s1 + buf[pos++] | 0;
          s2 = s2 + s1 | 0;
        } while (--n);
        s1 %= 65521;
        s2 %= 65521;
      }
      return s1 | s2 << 16 | 0;
    }
    module.exports = adler32;
  }
});

// node_modules/pako/lib/zlib/crc32.js
var require_crc322 = __commonJS({
  "node_modules/pako/lib/zlib/crc32.js"(exports, module) {
    "use strict";
    function makeTable() {
      var c, table = [];
      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table[n] = c;
      }
      return table;
    }
    var crcTable = makeTable();
    function crc322(crc, buf, len, pos) {
      var t = crcTable, end = pos + len;
      crc ^= -1;
      for (var i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
      }
      return crc ^ -1;
    }
    module.exports = crc322;
  }
});

// node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS({
  "node_modules/pako/lib/zlib/messages.js"(exports, module) {
    "use strict";
    module.exports = {
      2: "need dictionary",
      /* Z_NEED_DICT       2  */
      1: "stream end",
      /* Z_STREAM_END      1  */
      0: "",
      /* Z_OK              0  */
      "-1": "file error",
      /* Z_ERRNO         (-1) */
      "-2": "stream error",
      /* Z_STREAM_ERROR  (-2) */
      "-3": "data error",
      /* Z_DATA_ERROR    (-3) */
      "-4": "insufficient memory",
      /* Z_MEM_ERROR     (-4) */
      "-5": "buffer error",
      /* Z_BUF_ERROR     (-5) */
      "-6": "incompatible version"
      /* Z_VERSION_ERROR (-6) */
    };
  }
});

// node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS({
  "node_modules/pako/lib/zlib/deflate.js"(exports) {
    "use strict";
    var utils = require_common();
    var trees = require_trees();
    var adler32 = require_adler32();
    var crc322 = require_crc322();
    var msg = require_messages();
    var Z_NO_FLUSH = 0;
    var Z_PARTIAL_FLUSH = 1;
    var Z_FULL_FLUSH = 3;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_BUF_ERROR = -5;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_FILTERED = 1;
    var Z_HUFFMAN_ONLY = 2;
    var Z_RLE = 3;
    var Z_FIXED = 4;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_UNKNOWN = 2;
    var Z_DEFLATED = 8;
    var MAX_MEM_LEVEL = 9;
    var MAX_WBITS = 15;
    var DEF_MEM_LEVEL = 8;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
    var PRESET_DICT = 32;
    var INIT_STATE = 42;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    var BS_NEED_MORE = 1;
    var BS_BLOCK_DONE = 2;
    var BS_FINISH_STARTED = 3;
    var BS_FINISH_DONE = 4;
    var OS_CODE = 3;
    function err(strm, errorCode) {
      strm.msg = msg[errorCode];
      return errorCode;
    }
    function rank(f) {
      return (f << 1) - (f > 4 ? 9 : 0);
    }
    function zero2(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    function flush_pending(strm) {
      var s = strm.state;
      var len = s.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) {
        return;
      }
      utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
      strm.next_out += len;
      s.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s.pending -= len;
      if (s.pending === 0) {
        s.pending_out = 0;
      }
    }
    function flush_block_only(s, last) {
      trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
      s.block_start = s.strstart;
      flush_pending(s.strm);
    }
    function put_byte(s, b) {
      s.pending_buf[s.pending++] = b;
    }
    function putShortMSB(s, b) {
      s.pending_buf[s.pending++] = b >>> 8 & 255;
      s.pending_buf[s.pending++] = b & 255;
    }
    function read_buf(strm, buf, start, size) {
      var len = strm.avail_in;
      if (len > size) {
        len = size;
      }
      if (len === 0) {
        return 0;
      }
      strm.avail_in -= len;
      utils.arraySet(buf, strm.input, strm.next_in, len, start);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
      } else if (strm.state.wrap === 2) {
        strm.adler = crc322(strm.adler, buf, len, start);
      }
      strm.next_in += len;
      strm.total_in += len;
      return len;
    }
    function longest_match(s, cur_match) {
      var chain_length = s.max_chain_length;
      var scan = s.strstart;
      var match;
      var len;
      var best_len = s.prev_length;
      var nice_match = s.nice_match;
      var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
      var _win = s.window;
      var wmask = s.w_mask;
      var prev = s.prev;
      var strend = s.strstart + MAX_MATCH;
      var scan_end1 = _win[scan + best_len - 1];
      var scan_end = _win[scan + best_len];
      if (s.prev_length >= s.good_match) {
        chain_length >>= 2;
      }
      if (nice_match > s.lookahead) {
        nice_match = s.lookahead;
      }
      do {
        match = cur_match;
        if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
          continue;
        }
        scan += 2;
        match++;
        do {
        } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
          s.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1 = _win[scan + best_len - 1];
          scan_end = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
      if (best_len <= s.lookahead) {
        return best_len;
      }
      return s.lookahead;
    }
    function fill_window(s) {
      var _w_size = s.w_size;
      var p, n, m, more, str;
      do {
        more = s.window_size - s.lookahead - s.strstart;
        if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
          utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
          s.match_start -= _w_size;
          s.strstart -= _w_size;
          s.block_start -= _w_size;
          n = s.hash_size;
          p = n;
          do {
            m = s.head[--p];
            s.head[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n);
          n = _w_size;
          p = n;
          do {
            m = s.prev[--p];
            s.prev[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n);
          more += _w_size;
        }
        if (s.strm.avail_in === 0) {
          break;
        }
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        if (s.lookahead + s.insert >= MIN_MATCH) {
          str = s.strstart - s.insert;
          s.ins_h = s.window[str];
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
          while (s.insert) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
            s.insert--;
            if (s.lookahead + s.insert < MIN_MATCH) {
              break;
            }
          }
        }
      } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    }
    function deflate_stored(s, flush) {
      var max_block_size = 65535;
      if (max_block_size > s.pending_buf_size - 5) {
        max_block_size = s.pending_buf_size - 5;
      }
      for (; ; ) {
        if (s.lookahead <= 1) {
          fill_window(s);
          if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.strstart += s.lookahead;
        s.lookahead = 0;
        var max_start = s.block_start + max_block_size;
        if (s.strstart === 0 || s.strstart >= max_start) {
          s.lookahead = s.strstart - max_start;
          s.strstart = max_start;
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.strstart > s.block_start) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_NEED_MORE;
    }
    function deflate_fast(s, flush) {
      var hash_head;
      var bflush;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
            s.match_length--;
            do {
              s.strstart++;
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            } while (--s.match_length !== 0);
            s.strstart++;
          } else {
            s.strstart += s.match_length;
            s.match_length = 0;
            s.ins_h = s.window[s.strstart];
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
          }
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_slow(s, flush) {
      var hash_head;
      var bflush;
      var max_insert;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
            s.match_length = MIN_MATCH - 1;
          }
        }
        if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
          max_insert = s.strstart + s.lookahead - MIN_MATCH;
          bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
          s.lookahead -= s.prev_length - 1;
          s.prev_length -= 2;
          do {
            if (++s.strstart <= max_insert) {
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            }
          } while (--s.prev_length !== 0);
          s.match_available = 0;
          s.match_length = MIN_MATCH - 1;
          s.strstart++;
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        } else if (s.match_available) {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
          if (bflush) {
            flush_block_only(s, false);
          }
          s.strstart++;
          s.lookahead--;
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          s.match_available = 1;
          s.strstart++;
          s.lookahead--;
        }
      }
      if (s.match_available) {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_rle(s, flush) {
      var bflush;
      var prev;
      var scan, strend;
      var _win = s.window;
      for (; ; ) {
        if (s.lookahead <= MAX_MATCH) {
          fill_window(s);
          if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
          scan = s.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s.strstart + MAX_MATCH;
            do {
            } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
            s.match_length = MAX_MATCH - (strend - scan);
            if (s.match_length > s.lookahead) {
              s.match_length = s.lookahead;
            }
          }
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          s.strstart += s.match_length;
          s.match_length = 0;
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_huff(s, flush) {
      var bflush;
      for (; ; ) {
        if (s.lookahead === 0) {
          fill_window(s);
          if (s.lookahead === 0) {
            if (flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;
          }
        }
        s.match_length = 0;
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function Config(good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    }
    var configuration_table;
    configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),
      /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),
      /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),
      /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),
      /* 3 */
      new Config(4, 4, 16, 16, deflate_slow),
      /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),
      /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),
      /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),
      /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),
      /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)
      /* 9 max compression */
    ];
    function lm_init(s) {
      s.window_size = 2 * s.w_size;
      zero2(s.head);
      s.max_lazy_match = configuration_table[s.level].max_lazy;
      s.good_match = configuration_table[s.level].good_length;
      s.nice_match = configuration_table[s.level].nice_length;
      s.max_chain_length = configuration_table[s.level].max_chain;
      s.strstart = 0;
      s.block_start = 0;
      s.lookahead = 0;
      s.insert = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      s.ins_h = 0;
    }
    function DeflateState() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Z_DEFLATED;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
      this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
      this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
      zero2(this.dyn_ltree);
      zero2(this.dyn_dtree);
      zero2(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new utils.Buf16(MAX_BITS + 1);
      this.heap = new utils.Buf16(2 * L_CODES + 1);
      zero2(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new utils.Buf16(2 * L_CODES + 1);
      zero2(this.depth);
      this.l_buf = 0;
      this.lit_bufsize = 0;
      this.last_lit = 0;
      this.d_buf = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    function deflateResetKeep(strm) {
      var s;
      if (!strm || !strm.state) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
      s = strm.state;
      s.pending = 0;
      s.pending_out = 0;
      if (s.wrap < 0) {
        s.wrap = -s.wrap;
      }
      s.status = s.wrap ? INIT_STATE : BUSY_STATE;
      strm.adler = s.wrap === 2 ? 0 : 1;
      s.last_flush = Z_NO_FLUSH;
      trees._tr_init(s);
      return Z_OK;
    }
    function deflateReset(strm) {
      var ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    }
    function deflateSetHeader(strm, head) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      if (strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
      }
      strm.state.gzhead = head;
      return Z_OK;
    }
    function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      var wrap = 1;
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else if (windowBits > 15) {
        wrap = 2;
        windowBits -= 16;
      }
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
        return err(strm, Z_STREAM_ERROR);
      }
      if (windowBits === 8) {
        windowBits = 9;
      }
      var s = new DeflateState();
      strm.state = s;
      s.strm = strm;
      s.wrap = wrap;
      s.gzhead = null;
      s.w_bits = windowBits;
      s.w_size = 1 << s.w_bits;
      s.w_mask = s.w_size - 1;
      s.hash_bits = memLevel + 7;
      s.hash_size = 1 << s.hash_bits;
      s.hash_mask = s.hash_size - 1;
      s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
      s.window = new utils.Buf8(s.w_size * 2);
      s.head = new utils.Buf16(s.hash_size);
      s.prev = new utils.Buf16(s.w_size);
      s.lit_bufsize = 1 << memLevel + 6;
      s.pending_buf_size = s.lit_bufsize * 4;
      s.pending_buf = new utils.Buf8(s.pending_buf_size);
      s.d_buf = 1 * s.lit_bufsize;
      s.l_buf = (1 + 2) * s.lit_bufsize;
      s.level = level;
      s.strategy = strategy;
      s.method = method;
      return deflateReset(strm);
    }
    function deflateInit(strm, level) {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    }
    function deflate(strm, flush) {
      var old_flush, s;
      var beg, val;
      if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
      s = strm.state;
      if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
        return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
      s.strm = strm;
      old_flush = s.last_flush;
      s.last_flush = flush;
      if (s.status === INIT_STATE) {
        if (s.wrap === 2) {
          strm.adler = 0;
          put_byte(s, 31);
          put_byte(s, 139);
          put_byte(s, 8);
          if (!s.gzhead) {
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
          } else {
            put_byte(
              s,
              (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
            );
            put_byte(s, s.gzhead.time & 255);
            put_byte(s, s.gzhead.time >> 8 & 255);
            put_byte(s, s.gzhead.time >> 16 & 255);
            put_byte(s, s.gzhead.time >> 24 & 255);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, s.gzhead.os & 255);
            if (s.gzhead.extra && s.gzhead.extra.length) {
              put_byte(s, s.gzhead.extra.length & 255);
              put_byte(s, s.gzhead.extra.length >> 8 & 255);
            }
            if (s.gzhead.hcrc) {
              strm.adler = crc322(strm.adler, s.pending_buf, s.pending, 0);
            }
            s.gzindex = 0;
            s.status = EXTRA_STATE;
          }
        } else {
          var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
          var level_flags = -1;
          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }
          header |= level_flags << 6;
          if (s.strstart !== 0) {
            header |= PRESET_DICT;
          }
          header += 31 - header % 31;
          s.status = BUSY_STATE;
          putShortMSB(s, header);
          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 65535);
          }
          strm.adler = 1;
        }
      }
      if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra) {
          beg = s.pending;
          while (s.gzindex < (s.gzhead.extra.length & 65535)) {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                break;
              }
            }
            put_byte(s, s.gzhead.extra[s.gzindex] & 255);
            s.gzindex++;
          }
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (s.gzindex === s.gzhead.extra.length) {
            s.gzindex = 0;
            s.status = NAME_STATE;
          }
        } else {
          s.status = NAME_STATE;
        }
      }
      if (s.status === NAME_STATE) {
        if (s.gzhead.name) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.gzindex = 0;
            s.status = COMMENT_STATE;
          }
        } else {
          s.status = COMMENT_STATE;
        }
      }
      if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.status = HCRC_STATE;
          }
        } else {
          s.status = HCRC_STATE;
        }
      }
      if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
          if (s.pending + 2 > s.pending_buf_size) {
            flush_pending(strm);
          }
          if (s.pending + 2 <= s.pending_buf_size) {
            put_byte(s, strm.adler & 255);
            put_byte(s, strm.adler >> 8 & 255);
            strm.adler = 0;
            s.status = BUSY_STATE;
          }
        } else {
          s.status = BUSY_STATE;
        }
      }
      if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
      if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
        var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s.last_flush = -1;
          }
          return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush === Z_PARTIAL_FLUSH) {
            trees._tr_align(s);
          } else if (flush !== Z_BLOCK) {
            trees._tr_stored_block(s, 0, 0, false);
            if (flush === Z_FULL_FLUSH) {
              zero2(s.head);
              if (s.lookahead === 0) {
                s.strstart = 0;
                s.block_start = 0;
                s.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        }
      }
      if (flush !== Z_FINISH) {
        return Z_OK;
      }
      if (s.wrap <= 0) {
        return Z_STREAM_END;
      }
      if (s.wrap === 2) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        put_byte(s, strm.adler >> 16 & 255);
        put_byte(s, strm.adler >> 24 & 255);
        put_byte(s, strm.total_in & 255);
        put_byte(s, strm.total_in >> 8 & 255);
        put_byte(s, strm.total_in >> 16 & 255);
        put_byte(s, strm.total_in >> 24 & 255);
      } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      flush_pending(strm);
      if (s.wrap > 0) {
        s.wrap = -s.wrap;
      }
      return s.pending !== 0 ? Z_OK : Z_STREAM_END;
    }
    function deflateEnd(strm) {
      var status;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      status = strm.state.status;
      if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.state = null;
      return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    }
    function deflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var s;
      var str, n;
      var wrap;
      var avail;
      var next;
      var input;
      var tmpDict;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      s = strm.state;
      wrap = s.wrap;
      if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
        return Z_STREAM_ERROR;
      }
      if (wrap === 1) {
        strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
      }
      s.wrap = 0;
      if (dictLength >= s.w_size) {
        if (wrap === 0) {
          zero2(s.head);
          s.strstart = 0;
          s.block_start = 0;
          s.insert = 0;
        }
        tmpDict = new utils.Buf8(s.w_size);
        utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
      }
      avail = strm.avail_in;
      next = strm.next_in;
      input = strm.input;
      strm.avail_in = dictLength;
      strm.next_in = 0;
      strm.input = dictionary;
      fill_window(s);
      while (s.lookahead >= MIN_MATCH) {
        str = s.strstart;
        n = s.lookahead - (MIN_MATCH - 1);
        do {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
        } while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
      }
      s.strstart += s.lookahead;
      s.block_start = s.strstart;
      s.insert = s.lookahead;
      s.lookahead = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      strm.next_in = next;
      strm.input = input;
      strm.avail_in = avail;
      s.wrap = wrap;
      return Z_OK;
    }
    exports.deflateInit = deflateInit;
    exports.deflateInit2 = deflateInit2;
    exports.deflateReset = deflateReset;
    exports.deflateResetKeep = deflateResetKeep;
    exports.deflateSetHeader = deflateSetHeader;
    exports.deflate = deflate;
    exports.deflateEnd = deflateEnd;
    exports.deflateSetDictionary = deflateSetDictionary;
    exports.deflateInfo = "pako deflate (from Nodeca project)";
  }
});

// node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS({
  "node_modules/pako/lib/utils/strings.js"(exports) {
    "use strict";
    var utils = require_common();
    var STR_APPLY_OK = true;
    var STR_APPLY_UIA_OK = true;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch (__) {
      STR_APPLY_OK = false;
    }
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (__) {
      STR_APPLY_UIA_OK = false;
    }
    var _utf8len = new utils.Buf8(256);
    for (q = 0; q < 256; q++) {
      _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
    }
    var q;
    _utf8len[254] = _utf8len[254] = 1;
    exports.string2buf = function(str) {
      var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      buf = new utils.Buf8(buf_len);
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        if (c < 128) {
          buf[i++] = c;
        } else if (c < 2048) {
          buf[i++] = 192 | c >>> 6;
          buf[i++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i++] = 224 | c >>> 12;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        } else {
          buf[i++] = 240 | c >>> 18;
          buf[i++] = 128 | c >>> 12 & 63;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        }
      }
      return buf;
    };
    function buf2binstring(buf, len) {
      if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
          return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
        }
      }
      var result = "";
      for (var i = 0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    }
    exports.buf2binstring = function(buf) {
      return buf2binstring(buf, buf.length);
    };
    exports.binstring2buf = function(str) {
      var buf = new utils.Buf8(str.length);
      for (var i = 0, len = buf.length; i < len; i++) {
        buf[i] = str.charCodeAt(i);
      }
      return buf;
    };
    exports.buf2string = function(buf, max) {
      var i, out, c, c_len;
      var len = max || buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i = 0; i < len; ) {
        c = buf[i++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i < len) {
          c = c << 6 | buf[i++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      return buf2binstring(utf16buf, out);
    };
    exports.utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
  }
});

// node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS({
  "node_modules/pako/lib/zlib/zstream.js"(exports, module) {
    "use strict";
    function ZStream() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    module.exports = ZStream;
  }
});

// node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS({
  "node_modules/pako/lib/deflate.js"(exports) {
    "use strict";
    var zlib_deflate = require_deflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var toString = Object.prototype.toString;
    var Z_NO_FLUSH = 0;
    var Z_FINISH = 4;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_SYNC_FLUSH = 2;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_DEFLATED = 8;
    function Deflate(options) {
      if (!(this instanceof Deflate)) return new Deflate(options);
      this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY,
        to: ""
      }, options || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits > 0) {
        opt.windowBits = -opt.windowBits;
      } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
        opt.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy
      );
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      if (opt.header) {
        zlib_deflate.deflateSetHeader(this.strm, opt.header);
      }
      if (opt.dictionary) {
        var dict;
        if (typeof opt.dictionary === "string") {
          dict = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          dict = new Uint8Array(opt.dictionary);
        } else {
          dict = opt.dictionary;
        }
        status = zlib_deflate.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }
        this._dict_set = true;
      }
    }
    Deflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var status, _mode;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.string2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_deflate.deflate(strm, _mode);
        if (status !== Z_STREAM_END && status !== Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
          if (this.options.to === "string") {
            this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
          } else {
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
          }
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
      if (_mode === Z_FINISH) {
        status = zlib_deflate.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK;
      }
      if (_mode === Z_SYNC_FLUSH) {
        this.onEnd(Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Deflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Deflate.prototype.onEnd = function(status) {
      if (status === Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function deflate(input, options) {
      var deflator = new Deflate(options);
      deflator.push(input, true);
      if (deflator.err) {
        throw deflator.msg || msg[deflator.err];
      }
      return deflator.result;
    }
    function deflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return deflate(input, options);
    }
    function gzip(input, options) {
      options = options || {};
      options.gzip = true;
      return deflate(input, options);
    }
    exports.Deflate = Deflate;
    exports.deflate = deflate;
    exports.deflateRaw = deflateRaw;
    exports.gzip = gzip;
  }
});

// node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS({
  "node_modules/pako/lib/zlib/inffast.js"(exports, module) {
    "use strict";
    var BAD = 30;
    var TYPE = 12;
    module.exports = function inflate_fast(strm, start) {
      var state;
      var _in;
      var last;
      var _out;
      var beg;
      var end;
      var dmax;
      var wsize;
      var whave;
      var wnext;
      var s_window;
      var hold;
      var bits;
      var lcode;
      var dcode;
      var lmask;
      var dmask;
      var here;
      var op;
      var len;
      var dist;
      var from;
      var from_source;
      var input, output;
      state = strm.state;
      _in = strm.next_in;
      input = strm.input;
      last = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start - strm.avail_out);
      end = _out + (strm.avail_out - 257);
      dmax = state.dmax;
      wsize = state.wsize;
      whave = state.whave;
      wnext = state.wnext;
      s_window = state.window;
      hold = state.hold;
      bits = state.bits;
      lcode = state.lencode;
      dcode = state.distcode;
      lmask = (1 << state.lenbits) - 1;
      dmask = (1 << state.distbits) - 1;
      top:
        do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = lcode[hold & lmask];
          dolen:
            for (; ; ) {
              op = here >>> 24;
              hold >>>= op;
              bits -= op;
              op = here >>> 16 & 255;
              if (op === 0) {
                output[_out++] = here & 65535;
              } else if (op & 16) {
                len = here & 65535;
                op &= 15;
                if (op) {
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  len += hold & (1 << op) - 1;
                  hold >>>= op;
                  bits -= op;
                }
                if (bits < 15) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                here = dcode[hold & dmask];
                dodist:
                  for (; ; ) {
                    op = here >>> 24;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 255;
                    if (op & 16) {
                      dist = here & 65535;
                      op &= 15;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                        }
                      }
                      dist += hold & (1 << op) - 1;
                      if (dist > dmax) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                      hold >>>= op;
                      bits -= op;
                      op = _out - beg;
                      if (dist > op) {
                        op = dist - op;
                        if (op > whave) {
                          if (state.sane) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD;
                            break top;
                          }
                        }
                        from = 0;
                        from_source = s_window;
                        if (wnext === 0) {
                          from += wsize - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        } else if (wnext < op) {
                          from += wsize + wnext - op;
                          op -= wnext;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = 0;
                            if (wnext < len) {
                              op = wnext;
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = _out - dist;
                              from_source = output;
                            }
                          }
                        } else {
                          from += wnext - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                        while (len > 2) {
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          len -= 3;
                        }
                        if (len) {
                          output[_out++] = from_source[from++];
                          if (len > 1) {
                            output[_out++] = from_source[from++];
                          }
                        }
                      } else {
                        from = _out - dist;
                        do {
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          len -= 3;
                        } while (len > 2);
                        if (len) {
                          output[_out++] = output[from++];
                          if (len > 1) {
                            output[_out++] = output[from++];
                          }
                        }
                      }
                    } else if ((op & 64) === 0) {
                      here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                      continue dodist;
                    } else {
                      strm.msg = "invalid distance code";
                      state.mode = BAD;
                      break top;
                    }
                    break;
                  }
              } else if ((op & 64) === 0) {
                here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                continue dolen;
              } else if (op & 32) {
                state.mode = TYPE;
                break top;
              } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break top;
              }
              break;
            }
        } while (_in < last && _out < end);
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
      strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
      state.hold = hold;
      state.bits = bits;
      return;
    };
  }
});

// node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS({
  "node_modules/pako/lib/zlib/inftrees.js"(exports, module) {
    "use strict";
    var utils = require_common();
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var lbase = [
      /* Length codes 257..285 base */
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ];
    var lext = [
      /* Length codes 257..285 extra */
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ];
    var dbase = [
      /* Distance codes 0..29 base */
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ];
    var dext = [
      /* Distance codes 0..29 extra */
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ];
    module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
      var bits = opts.bits;
      var len = 0;
      var sym = 0;
      var min = 0, max = 0;
      var root = 0;
      var curr = 0;
      var drop = 0;
      var left = 0;
      var used = 0;
      var huff = 0;
      var incr;
      var fill;
      var low;
      var mask;
      var next;
      var base = null;
      var base_index = 0;
      var end;
      var count2 = new utils.Buf16(MAXBITS + 1);
      var offs = new utils.Buf16(MAXBITS + 1);
      var extra = null;
      var extra_index = 0;
      var here_bits, here_op, here_val;
      for (len = 0; len <= MAXBITS; len++) {
        count2[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count2[lens[lens_index + sym]]++;
      }
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count2[max] !== 0) {
          break;
        }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        opts.bits = 1;
        return 0;
      }
      for (min = 1; min < max; min++) {
        if (count2[min] !== 0) {
          break;
        }
      }
      if (root < min) {
        root = min;
      }
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count2[len];
        if (left < 0) {
          return -1;
        }
      }
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;
      }
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count2[len];
      }
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }
      if (type === CODES) {
        base = extra = work;
        end = 19;
      } else if (type === LENS) {
        base = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;
      } else {
        base = dbase;
        extra = dext;
        end = -1;
      }
      huff = 0;
      sym = 0;
      len = min;
      next = table_index;
      curr = root;
      drop = 0;
      low = -1;
      used = 1 << root;
      mask = used - 1;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      for (; ; ) {
        here_bits = len - drop;
        if (work[sym] < end) {
          here_op = 0;
          here_val = work[sym];
        } else if (work[sym] > end) {
          here_op = extra[extra_index + work[sym]];
          here_val = base[base_index + work[sym]];
        } else {
          here_op = 32 + 64;
          here_val = 0;
        }
        incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill;
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        } while (fill !== 0);
        incr = 1 << len - 1;
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
        sym++;
        if (--count2[len] === 0) {
          if (len === max) {
            break;
          }
          len = lens[lens_index + work[sym]];
        }
        if (len > root && (huff & mask) !== low) {
          if (drop === 0) {
            drop = root;
          }
          next += min;
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count2[curr + drop];
            if (left <= 0) {
              break;
            }
            curr++;
            left <<= 1;
          }
          used += 1 << curr;
          if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
            return 1;
          }
          low = huff & mask;
          table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
      }
      if (huff !== 0) {
        table[next + huff] = len - drop << 24 | 64 << 16 | 0;
      }
      opts.bits = root;
      return 0;
    };
  }
});

// node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS({
  "node_modules/pako/lib/zlib/inflate.js"(exports) {
    "use strict";
    var utils = require_common();
    var adler32 = require_adler32();
    var crc322 = require_crc322();
    var inflate_fast = require_inffast();
    var inflate_table = require_inftrees();
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_TREES = 6;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_NEED_DICT = 2;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_MEM_ERROR = -4;
    var Z_BUF_ERROR = -5;
    var Z_DEFLATED = 8;
    var HEAD = 1;
    var FLAGS = 2;
    var TIME = 3;
    var OS = 4;
    var EXLEN = 5;
    var EXTRA = 6;
    var NAME = 7;
    var COMMENT = 8;
    var HCRC = 9;
    var DICTID = 10;
    var DICT = 11;
    var TYPE = 12;
    var TYPEDO = 13;
    var STORED = 14;
    var COPY_ = 15;
    var COPY = 16;
    var TABLE = 17;
    var LENLENS = 18;
    var CODELENS = 19;
    var LEN_ = 20;
    var LEN = 21;
    var LENEXT = 22;
    var DIST = 23;
    var DISTEXT = 24;
    var MATCH = 25;
    var LIT = 26;
    var CHECK = 27;
    var LENGTH = 28;
    var DONE = 29;
    var BAD = 30;
    var MEM = 31;
    var SYNC = 32;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var MAX_WBITS = 15;
    var DEF_WBITS = MAX_WBITS;
    function zswap32(q) {
      return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
    }
    function InflateState() {
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new utils.Buf16(320);
      this.work = new utils.Buf16(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    function inflateResetKeep(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = "";
      if (state.wrap) {
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
      state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
      state.sane = 1;
      state.back = -1;
      return Z_OK;
    }
    function inflateReset(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);
    }
    function inflateReset2(strm, windowBits) {
      var wrap;
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    }
    function inflateInit2(strm, windowBits) {
      var ret;
      var state;
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      state = new InflateState();
      strm.state = state;
      state.window = null;
      ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null;
      }
      return ret;
    }
    function inflateInit(strm) {
      return inflateInit2(strm, DEF_WBITS);
    }
    var virgin = true;
    var lenfix;
    var distfix;
    function fixedtables(state) {
      if (virgin) {
        var sym;
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
        sym = 0;
        while (sym < 144) {
          state.lens[sym++] = 8;
        }
        while (sym < 256) {
          state.lens[sym++] = 9;
        }
        while (sym < 280) {
          state.lens[sym++] = 7;
        }
        while (sym < 288) {
          state.lens[sym++] = 8;
        }
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
        sym = 0;
        while (sym < 32) {
          state.lens[sym++] = 5;
        }
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
        virgin = false;
      }
      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    }
    function updatewindow(strm, src, end, copy) {
      var dist;
      var state = strm.state;
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new utils.Buf8(state.wsize);
      }
      if (copy >= state.wsize) {
        utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
      } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) {
          dist = copy;
        }
        utils.arraySet(state.window, src, end - copy, dist, state.wnext);
        copy -= dist;
        if (copy) {
          utils.arraySet(state.window, src, end - copy, copy, 0);
          state.wnext = copy;
          state.whave = state.wsize;
        } else {
          state.wnext += dist;
          if (state.wnext === state.wsize) {
            state.wnext = 0;
          }
          if (state.whave < state.wsize) {
            state.whave += dist;
          }
        }
      }
      return 0;
    }
    function inflate2(strm, flush) {
      var state;
      var input, output;
      var next;
      var put;
      var have, left;
      var hold;
      var bits;
      var _in, _out;
      var copy;
      var from;
      var from_source;
      var here = 0;
      var here_bits, here_op, here_val;
      var last_bits, last_op, last_val;
      var len;
      var ret;
      var hbuf = new utils.Buf8(4);
      var opts;
      var n;
      var order = (
        /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      );
      if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.mode === TYPE) {
        state.mode = TYPEDO;
      }
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      _in = have;
      _out = left;
      ret = Z_OK;
      inf_leave:
        for (; ; ) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              }
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.wrap & 2 && hold === 35615) {
                state.check = 0;
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc322(state.check, hbuf, 2, 0);
                hold = 0;
                bits = 0;
                state.mode = FLAGS;
                break;
              }
              state.flags = 0;
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || /* check if zlib header allowed */
              (((hold & 255) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
              }
              if ((hold & 15) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              hold >>>= 4;
              bits -= 4;
              len = (hold & 15) + 8;
              if (state.wbits === 0) {
                state.wbits = len;
              } else if (len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
              }
              state.dmax = 1 << len;
              strm.adler = state.check = 1;
              state.mode = hold & 512 ? DICTID : TYPE;
              hold = 0;
              bits = 0;
              break;
            case FLAGS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.flags = hold;
              if ((state.flags & 255) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              if (state.flags & 57344) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc322(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = TIME;
            /* falls through */
            case TIME:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.time = hold;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                hbuf[2] = hold >>> 16 & 255;
                hbuf[3] = hold >>> 24 & 255;
                state.check = crc322(state.check, hbuf, 4, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = OS;
            /* falls through */
            case OS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.xflags = hold & 255;
                state.head.os = hold >> 8;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc322(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = EXLEN;
            /* falls through */
            case EXLEN:
              if (state.flags & 1024) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 512) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc322(state.check, hbuf, 2, 0);
                }
                hold = 0;
                bits = 0;
              } else if (state.head) {
                state.head.extra = null;
              }
              state.mode = EXTRA;
            /* falls through */
            case EXTRA:
              if (state.flags & 1024) {
                copy = state.length;
                if (copy > have) {
                  copy = have;
                }
                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      state.head.extra = new Array(state.head.extra_len);
                    }
                    utils.arraySet(
                      state.head.extra,
                      input,
                      next,
                      // extra field is limited to 65536 bytes
                      // - no need for additional size check
                      copy,
                      /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                      len
                    );
                  }
                  if (state.flags & 512) {
                    state.check = crc322(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }
                if (state.length) {
                  break inf_leave;
                }
              }
              state.length = 0;
              state.mode = NAME;
            /* falls through */
            case NAME:
              if (state.flags & 2048) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512) {
                  state.check = crc322(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }
              state.length = 0;
              state.mode = COMMENT;
            /* falls through */
            case COMMENT:
              if (state.flags & 4096) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512) {
                  state.check = crc322(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }
              state.mode = HCRC;
            /* falls through */
            case HCRC:
              if (state.flags & 512) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state.check & 65535)) {
                  strm.msg = "header crc mismatch";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              strm.adler = state.check = zswap32(hold);
              hold = 0;
              bits = 0;
              state.mode = DICT;
            /* falls through */
            case DICT:
              if (state.havedict === 0) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                return Z_NEED_DICT;
              }
              strm.adler = state.check = 1;
              state.mode = TYPE;
            /* falls through */
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case TYPEDO:
              if (state.last) {
                hold >>>= bits & 7;
                bits -= bits & 7;
                state.mode = CHECK;
                break;
              }
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.last = hold & 1;
              hold >>>= 1;
              bits -= 1;
              switch (hold & 3) {
                case 0:
                  state.mode = STORED;
                  break;
                case 1:
                  fixedtables(state);
                  state.mode = LEN_;
                  if (flush === Z_TREES) {
                    hold >>>= 2;
                    bits -= 2;
                    break inf_leave;
                  }
                  break;
                case 2:
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = "invalid block type";
                  state.mode = BAD;
              }
              hold >>>= 2;
              bits -= 2;
              break;
            case STORED:
              hold >>>= bits & 7;
              bits -= bits & 7;
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
              }
              state.length = hold & 65535;
              hold = 0;
              bits = 0;
              state.mode = COPY_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case COPY_:
              state.mode = COPY;
            /* falls through */
            case COPY:
              copy = state.length;
              if (copy) {
                if (copy > have) {
                  copy = have;
                }
                if (copy > left) {
                  copy = left;
                }
                if (copy === 0) {
                  break inf_leave;
                }
                utils.arraySet(output, input, next, copy, put);
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              }
              state.mode = TYPE;
              break;
            case TABLE:
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.nlen = (hold & 31) + 257;
              hold >>>= 5;
              bits -= 5;
              state.ndist = (hold & 31) + 1;
              hold >>>= 5;
              bits -= 5;
              state.ncode = (hold & 15) + 4;
              hold >>>= 4;
              bits -= 4;
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = LENLENS;
            /* falls through */
            case LENLENS:
              while (state.have < state.ncode) {
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.lens[order[state.have++]] = hold & 7;
                hold >>>= 3;
                bits -= 3;
              }
              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              }
              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = { bits: state.lenbits };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = CODELENS;
            /* falls through */
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (; ; ) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (here_val < 16) {
                  hold >>>= here_bits;
                  bits -= here_bits;
                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    if (state.have === 0) {
                      strm.msg = "invalid bit length repeat";
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 3);
                    hold >>>= 2;
                    bits -= 2;
                  } else if (here_val === 17) {
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 3 + (hold & 7);
                    hold >>>= 3;
                    bits -= 3;
                  } else {
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 11 + (hold & 127);
                    hold >>>= 7;
                    bits -= 7;
                  }
                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }
              if (state.mode === BAD) {
                break;
              }
              if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
              }
              state.lenbits = 9;
              opts = { bits: state.lenbits };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
              }
              state.distbits = 6;
              state.distcode = state.distdyn;
              opts = { bits: state.distbits };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              state.distbits = opts.bits;
              if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
              }
              state.mode = LEN_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case LEN_:
              state.mode = LEN;
            /* falls through */
            case LEN:
              if (have >= 6 && left >= 258) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                inflate_fast(strm, _out);
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                if (state.mode === TYPE) {
                  state.back = -1;
                }
                break;
              }
              state.back = 0;
              for (; ; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_op && (here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            /* falls through */
            case LENEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              state.was = state.length;
              state.mode = DIST;
            /* falls through */
            case DIST:
              for (; ; ) {
                here = state.distcode[hold & (1 << state.distbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            /* falls through */
            case DISTEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.offset += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
              state.mode = MATCH;
            /* falls through */
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy = _out - left;
              if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                    break;
                  }
                }
                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else {
                  from = state.wnext - copy;
                }
                if (copy > state.length) {
                  copy = state.length;
                }
                from_source = state.window;
              } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }
              if (copy > left) {
                copy = left;
              }
              left -= copy;
              state.length -= copy;
              do {
                output[put++] = from_source[from++];
              } while (--copy);
              if (state.length === 0) {
                state.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (_out) {
                  strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/
                  state.flags ? crc322(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }
                _out = left;
                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = "incorrect data check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = LENGTH;
            /* falls through */
            case LENGTH:
              if (state.wrap && state.flags) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state.total & 4294967295)) {
                  strm.msg = "incorrect length check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = DONE;
            /* falls through */
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            /* falls through */
            default:
              return Z_STREAM_ERROR;
          }
        }
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap && _out) {
        strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
        state.flags ? crc322(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }
    function inflateEnd(strm) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      var state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    }
    function inflateGetHeader(strm, head) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if ((state.wrap & 2) === 0) {
        return Z_STREAM_ERROR;
      }
      state.head = head;
      head.done = false;
      return Z_OK;
    }
    function inflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var state;
      var dictid;
      var ret;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.wrap !== 0 && state.mode !== DICT) {
        return Z_STREAM_ERROR;
      }
      if (state.mode === DICT) {
        dictid = 1;
        dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) {
          return Z_DATA_ERROR;
        }
      }
      ret = updatewindow(strm, dictionary, dictLength, dictLength);
      if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
      state.havedict = 1;
      return Z_OK;
    }
    exports.inflateReset = inflateReset;
    exports.inflateReset2 = inflateReset2;
    exports.inflateResetKeep = inflateResetKeep;
    exports.inflateInit = inflateInit;
    exports.inflateInit2 = inflateInit2;
    exports.inflate = inflate2;
    exports.inflateEnd = inflateEnd;
    exports.inflateGetHeader = inflateGetHeader;
    exports.inflateSetDictionary = inflateSetDictionary;
    exports.inflateInfo = "pako inflate (from Nodeca project)";
  }
});

// node_modules/pako/lib/zlib/constants.js
var require_constants = __commonJS({
  "node_modules/pako/lib/zlib/constants.js"(exports, module) {
    "use strict";
    module.exports = {
      /* Allowed flush values; see deflate() and inflate() below for details */
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      /* Return codes for the compression/decompression functions. Negative values
      * are errors, positive values are used for special but normal events.
      */
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      //Z_MEM_ERROR:     -4,
      Z_BUF_ERROR: -5,
      //Z_VERSION_ERROR: -6,
      /* compression levels */
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      /* Possible values of the data_type field (though see inflate()) */
      Z_BINARY: 0,
      Z_TEXT: 1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN: 2,
      /* The deflate compression method */
      Z_DEFLATED: 8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };
  }
});

// node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS({
  "node_modules/pako/lib/zlib/gzheader.js"(exports, module) {
    "use strict";
    function GZheader() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    module.exports = GZheader;
  }
});

// node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS({
  "node_modules/pako/lib/inflate.js"(exports) {
    "use strict";
    var zlib_inflate = require_inflate();
    var utils = require_common();
    var strings = require_strings();
    var c = require_constants();
    var msg = require_messages();
    var ZStream = require_zstream();
    var GZheader = require_gzheader();
    var toString = Object.prototype.toString;
    function Inflate(options) {
      if (!(this instanceof Inflate)) return new Inflate(options);
      this.options = utils.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
      }, options || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
          opt.windowBits = -15;
        }
      }
      if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
        opt.windowBits += 32;
      }
      if (opt.windowBits > 15 && opt.windowBits < 48) {
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits
      );
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
      this.header = new GZheader();
      zlib_inflate.inflateGetHeader(this.strm, this.header);
      if (opt.dictionary) {
        if (typeof opt.dictionary === "string") {
          opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          opt.dictionary = new Uint8Array(opt.dictionary);
        }
        if (opt.raw) {
          status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
          if (status !== c.Z_OK) {
            throw new Error(msg[status]);
          }
        }
      }
    }
    Inflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var dictionary = this.options.dictionary;
      var status, _mode;
      var next_out_utf8, tail, utf8str;
      var allowBufError = false;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.binstring2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
        if (status === c.Z_NEED_DICT && dictionary) {
          status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
        }
        if (status === c.Z_BUF_ERROR && allowBufError === true) {
          status = c.Z_OK;
          allowBufError = false;
        }
        if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.next_out) {
          if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
            if (this.options.to === "string") {
              next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
              tail = strm.next_out - next_out_utf8;
              utf8str = strings.buf2string(strm.output, next_out_utf8);
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail) {
                utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
              }
              this.onData(utf8str);
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }
        if (strm.avail_in === 0 && strm.avail_out === 0) {
          allowBufError = true;
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
      if (status === c.Z_STREAM_END) {
        _mode = c.Z_FINISH;
      }
      if (_mode === c.Z_FINISH) {
        status = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === c.Z_OK;
      }
      if (_mode === c.Z_SYNC_FLUSH) {
        this.onEnd(c.Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Inflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Inflate.prototype.onEnd = function(status) {
      if (status === c.Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function inflate2(input, options) {
      var inflator = new Inflate(options);
      inflator.push(input, true);
      if (inflator.err) {
        throw inflator.msg || msg[inflator.err];
      }
      return inflator.result;
    }
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate2(input, options);
    }
    exports.Inflate = Inflate;
    exports.inflate = inflate2;
    exports.inflateRaw = inflateRaw;
    exports.ungzip = inflate2;
  }
});

// node_modules/pako/index.js
var require_pako = __commonJS({
  "node_modules/pako/index.js"(exports, module) {
    "use strict";
    var assign = require_common().assign;
    var deflate = require_deflate2();
    var inflate2 = require_inflate2();
    var constants = require_constants();
    var pako2 = {};
    assign(pako2, deflate, inflate2, constants);
    module.exports = pako2;
  }
});

// node_modules/pify/index.js
var require_pify = __commonJS({
  "node_modules/pify/index.js"(exports, module) {
    "use strict";
    var processFn = (fn, options) => function(...args) {
      const P = options.promiseModule;
      return new P((resolve, reject) => {
        if (options.multiArgs) {
          args.push((...result) => {
            if (options.errorFirst) {
              if (result[0]) {
                reject(result);
              } else {
                result.shift();
                resolve(result);
              }
            } else {
              resolve(result);
            }
          });
        } else if (options.errorFirst) {
          args.push((error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        } else {
          args.push(resolve);
        }
        fn.apply(this, args);
      });
    };
    module.exports = (input, options) => {
      options = Object.assign({
        exclude: [/.+(Sync|Stream)$/],
        errorFirst: true,
        promiseModule: Promise
      }, options);
      const objType = typeof input;
      if (!(input !== null && (objType === "object" || objType === "function"))) {
        throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objType}\``);
      }
      const filter = (key) => {
        const match = (pattern) => typeof pattern === "string" ? key === pattern : pattern.test(key);
        return options.include ? options.include.some(match) : !options.exclude.some(match);
      };
      let ret;
      if (objType === "function") {
        ret = function(...args) {
          return options.excludeMain ? input(...args) : processFn(input, options).apply(this, args);
        };
      } else {
        ret = Object.create(Object.getPrototypeOf(input));
      }
      for (const key in input) {
        const property = input[key];
        ret[key] = typeof property === "function" && filter(key) ? processFn(property, options) : property;
      }
      return ret;
    };
  }
});

// node_modules/ignore/index.js
var require_ignore = __commonJS({
  "node_modules/ignore/index.js"(exports, module) {
    function makeArray(subject) {
      return Array.isArray(subject) ? subject : [subject];
    }
    var EMPTY = "";
    var SPACE = " ";
    var ESCAPE = "\\";
    var REGEX_TEST_BLANK_LINE = /^\s+$/;
    var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
    var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
    var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
    var REGEX_SPLITALL_CRLF = /\r?\n/g;
    var REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
    var SLASH = "/";
    var TMP_KEY_IGNORE = "node-ignore";
    if (typeof Symbol !== "undefined") {
      TMP_KEY_IGNORE = Symbol.for("node-ignore");
    }
    var KEY_IGNORE = TMP_KEY_IGNORE;
    var define2 = (object2, key, value) => Object.defineProperty(object2, key, { value });
    var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
    var RETURN_FALSE = () => false;
    var sanitizeRange = (range) => range.replace(
      REGEX_REGEXP_RANGE,
      (match, from, to) => from.charCodeAt(0) <= to.charCodeAt(0) ? match : EMPTY
    );
    var cleanRangeBackSlash = (slashes) => {
      const { length } = slashes;
      return slashes.slice(0, length - length % 2);
    };
    var REPLACERS = [
      [
        // remove BOM
        // TODO:
        // Other similar zero-width characters?
        /^\uFEFF/,
        () => EMPTY
      ],
      // > Trailing spaces are ignored unless they are quoted with backslash ("\")
      [
        // (a\ ) -> (a )
        // (a  ) -> (a)
        // (a ) -> (a)
        // (a \ ) -> (a  )
        /((?:\\\\)*?)(\\?\s+)$/,
        (_, m1, m2) => m1 + (m2.indexOf("\\") === 0 ? SPACE : EMPTY)
      ],
      // replace (\ ) with ' '
      // (\ ) -> ' '
      // (\\ ) -> '\\ '
      // (\\\ ) -> '\\ '
      [
        /(\\+?)\s/g,
        (_, m1) => {
          const { length } = m1;
          return m1.slice(0, length - length % 2) + SPACE;
        }
      ],
      // Escape metacharacters
      // which is written down by users but means special for regular expressions.
      // > There are 12 characters with special meanings:
      // > - the backslash \,
      // > - the caret ^,
      // > - the dollar sign $,
      // > - the period or dot .,
      // > - the vertical bar or pipe symbol |,
      // > - the question mark ?,
      // > - the asterisk or star *,
      // > - the plus sign +,
      // > - the opening parenthesis (,
      // > - the closing parenthesis ),
      // > - and the opening square bracket [,
      // > - the opening curly brace {,
      // > These special characters are often called "metacharacters".
      [
        /[\\$.|*+(){^]/g,
        (match) => `\\${match}`
      ],
      [
        // > a question mark (?) matches a single character
        /(?!\\)\?/g,
        () => "[^/]"
      ],
      // leading slash
      [
        // > A leading slash matches the beginning of the pathname.
        // > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
        // A leading slash matches the beginning of the pathname
        /^\//,
        () => "^"
      ],
      // replace special metacharacter slash after the leading slash
      [
        /\//g,
        () => "\\/"
      ],
      [
        // > A leading "**" followed by a slash means match in all directories.
        // > For example, "**/foo" matches file or directory "foo" anywhere,
        // > the same as pattern "foo".
        // > "**/foo/bar" matches file or directory "bar" anywhere that is directly
        // >   under directory "foo".
        // Notice that the '*'s have been replaced as '\\*'
        /^\^*\\\*\\\*\\\//,
        // '**/foo' <-> 'foo'
        () => "^(?:.*\\/)?"
      ],
      // starting
      [
        // there will be no leading '/'
        //   (which has been replaced by section "leading slash")
        // If starts with '**', adding a '^' to the regular expression also works
        /^(?=[^^])/,
        function startingReplacer() {
          return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
        }
      ],
      // two globstars
      [
        // Use lookahead assertions so that we could match more than one `'/**'`
        /\\\/\\\*\\\*(?=\\\/|$)/g,
        // Zero, one or several directories
        // should not use '*', or it will be replaced by the next replacer
        // Check if it is not the last `'/**'`
        (_, index, str) => index + 6 < str.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
      ],
      // normal intermediate wildcards
      [
        // Never replace escaped '*'
        // ignore rule '\*' will match the path '*'
        // 'abc.*/' -> go
        // 'abc.*'  -> skip this rule,
        //    coz trailing single wildcard will be handed by [trailing wildcard]
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        // '*.js' matches '.js'
        // '*.js' doesn't match 'abc'
        (_, p1, p2) => {
          const unescaped = p2.replace(/\\\*/g, "[^\\/]*");
          return p1 + unescaped;
        }
      ],
      [
        // unescape, revert step 3 except for back slash
        // For example, if a user escape a '\\*',
        // after step 3, the result will be '\\\\\\*'
        /\\\\\\(?=[$.|*+(){^])/g,
        () => ESCAPE
      ],
      [
        // '\\\\' -> '\\'
        /\\\\/g,
        () => ESCAPE
      ],
      [
        // > The range notation, e.g. [a-zA-Z],
        // > can be used to match one of the characters in a range.
        // `\` is escaped by step 3
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (match, leadEscape, range, endEscape, close) => leadEscape === ESCAPE ? `\\[${range}${cleanRangeBackSlash(endEscape)}${close}` : close === "]" ? endEscape.length % 2 === 0 ? `[${sanitizeRange(range)}${endEscape}]` : "[]" : "[]"
      ],
      // ending
      [
        // 'js' will not match 'js.'
        // 'ab' will not match 'abc'
        /(?:[^*])$/,
        // WTF!
        // https://git-scm.com/docs/gitignore
        // changes in [2.22.1](https://git-scm.com/docs/gitignore/2.22.1)
        // which re-fixes #24, #38
        // > If there is a separator at the end of the pattern then the pattern
        // > will only match directories, otherwise the pattern can match both
        // > files and directories.
        // 'js*' will not match 'a.js'
        // 'js/' will not match 'a.js'
        // 'js' will match 'a.js' and 'a.js/'
        (match) => /\/$/.test(match) ? `${match}$` : `${match}(?=$|\\/$)`
      ],
      // trailing wildcard
      [
        /(\^|\\\/)?\\\*$/,
        (_, p1) => {
          const prefix = p1 ? `${p1}[^/]+` : "[^/]*";
          return `${prefix}(?=$|\\/$)`;
        }
      ]
    ];
    var regexCache = /* @__PURE__ */ Object.create(null);
    var makeRegex = (pattern, ignoreCase) => {
      let source = regexCache[pattern];
      if (!source) {
        source = REPLACERS.reduce(
          (prev, [matcher, replacer]) => prev.replace(matcher, replacer.bind(pattern)),
          pattern
        );
        regexCache[pattern] = source;
      }
      return ignoreCase ? new RegExp(source, "i") : new RegExp(source);
    };
    var isString = (subject) => typeof subject === "string";
    var checkPattern = (pattern) => pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern) && pattern.indexOf("#") !== 0;
    var splitPattern = (pattern) => pattern.split(REGEX_SPLITALL_CRLF);
    var IgnoreRule = class {
      constructor(origin, pattern, negative, regex) {
        this.origin = origin;
        this.pattern = pattern;
        this.negative = negative;
        this.regex = regex;
      }
    };
    var createRule = (pattern, ignoreCase) => {
      const origin = pattern;
      let negative = false;
      if (pattern.indexOf("!") === 0) {
        negative = true;
        pattern = pattern.substr(1);
      }
      pattern = pattern.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
      const regex = makeRegex(pattern, ignoreCase);
      return new IgnoreRule(
        origin,
        pattern,
        negative,
        regex
      );
    };
    var throwError = (message, Ctor) => {
      throw new Ctor(message);
    };
    var checkPath = (path4, originalPath, doThrow) => {
      if (!isString(path4)) {
        return doThrow(
          `path must be a string, but got \`${originalPath}\``,
          TypeError
        );
      }
      if (!path4) {
        return doThrow(`path must not be empty`, TypeError);
      }
      if (checkPath.isNotRelative(path4)) {
        const r = "`path.relative()`d";
        return doThrow(
          `path should be a ${r} string, but got "${originalPath}"`,
          RangeError
        );
      }
      return true;
    };
    var isNotRelative = (path4) => REGEX_TEST_INVALID_PATH.test(path4);
    checkPath.isNotRelative = isNotRelative;
    checkPath.convert = (p) => p;
    var Ignore = class {
      constructor({
        ignorecase = true,
        ignoreCase = ignorecase,
        allowRelativePaths = false
      } = {}) {
        define2(this, KEY_IGNORE, true);
        this._rules = [];
        this._ignoreCase = ignoreCase;
        this._allowRelativePaths = allowRelativePaths;
        this._initCache();
      }
      _initCache() {
        this._ignoreCache = /* @__PURE__ */ Object.create(null);
        this._testCache = /* @__PURE__ */ Object.create(null);
      }
      _addPattern(pattern) {
        if (pattern && pattern[KEY_IGNORE]) {
          this._rules = this._rules.concat(pattern._rules);
          this._added = true;
          return;
        }
        if (checkPattern(pattern)) {
          const rule = createRule(pattern, this._ignoreCase);
          this._added = true;
          this._rules.push(rule);
        }
      }
      // @param {Array<string> | string | Ignore} pattern
      add(pattern) {
        this._added = false;
        makeArray(
          isString(pattern) ? splitPattern(pattern) : pattern
        ).forEach(this._addPattern, this);
        if (this._added) {
          this._initCache();
        }
        return this;
      }
      // legacy
      addPattern(pattern) {
        return this.add(pattern);
      }
      //          |           ignored : unignored
      // negative |   0:0   |   0:1   |   1:0   |   1:1
      // -------- | ------- | ------- | ------- | --------
      //     0    |  TEST   |  TEST   |  SKIP   |    X
      //     1    |  TESTIF |  SKIP   |  TEST   |    X
      // - SKIP: always skip
      // - TEST: always test
      // - TESTIF: only test if checkUnignored
      // - X: that never happen
      // @param {boolean} whether should check if the path is unignored,
      //   setting `checkUnignored` to `false` could reduce additional
      //   path matching.
      // @returns {TestResult} true if a file is ignored
      _testOne(path4, checkUnignored) {
        let ignored = false;
        let unignored = false;
        this._rules.forEach((rule) => {
          const { negative } = rule;
          if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
            return;
          }
          const matched = rule.regex.test(path4);
          if (matched) {
            ignored = !negative;
            unignored = negative;
          }
        });
        return {
          ignored,
          unignored
        };
      }
      // @returns {TestResult}
      _test(originalPath, cache, checkUnignored, slices) {
        const path4 = originalPath && checkPath.convert(originalPath);
        checkPath(
          path4,
          originalPath,
          this._allowRelativePaths ? RETURN_FALSE : throwError
        );
        return this._t(path4, cache, checkUnignored, slices);
      }
      _t(path4, cache, checkUnignored, slices) {
        if (path4 in cache) {
          return cache[path4];
        }
        if (!slices) {
          slices = path4.split(SLASH);
        }
        slices.pop();
        if (!slices.length) {
          return cache[path4] = this._testOne(path4, checkUnignored);
        }
        const parent = this._t(
          slices.join(SLASH) + SLASH,
          cache,
          checkUnignored,
          slices
        );
        return cache[path4] = parent.ignored ? parent : this._testOne(path4, checkUnignored);
      }
      ignores(path4) {
        return this._test(path4, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (path4) => !this.ignores(path4);
      }
      filter(paths) {
        return makeArray(paths).filter(this.createFilter());
      }
      // @returns {TestResult}
      test(path4) {
        return this._test(path4, this._testCache, true);
      }
    };
    var factory = (options) => new Ignore(options);
    var isPathValid = (path4) => checkPath(path4 && checkPath.convert(path4), path4, RETURN_FALSE);
    factory.isPathValid = isPathValid;
    factory.default = factory;
    module.exports = factory;
    if (
      // Detect `process` so that it can run in browsers.
      typeof process !== "undefined" && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === "win32")
    ) {
      const makePosix = (str) => /^\\\\\?\\/.test(str) || /["<>|\u0000-\u001F]+/u.test(str) ? str : str.replace(/\\/g, "/");
      checkPath.convert = makePosix;
      const REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
      checkPath.isNotRelative = (path4) => REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path4) || isNotRelative(path4);
    }
  }
});

// node_modules/diff3/onp.js
var require_onp = __commonJS({
  "node_modules/diff3/onp.js"(exports, module) {
    module.exports = function(a_, b_) {
      var a = a_, b = b_, m = a.length, n = b.length, reverse = false, ed = null, offset = m + 1, path4 = [], pathposi = [], ses = [], lcs = "", SES_DELETE = -1, SES_COMMON = 0, SES_ADD = 1;
      var tmp1, tmp2;
      var init = function() {
        if (m >= n) {
          tmp1 = a;
          tmp2 = m;
          a = b;
          b = tmp1;
          m = n;
          n = tmp2;
          reverse = true;
          offset = m + 1;
        }
      };
      var P = function(x, y, k) {
        return {
          "x": x,
          "y": y,
          "k": k
        };
      };
      var seselem = function(elem, t) {
        return {
          "elem": elem,
          "t": t
        };
      };
      var snake = function(k, p, pp) {
        var r, x, y;
        if (p > pp) {
          r = path4[k - 1 + offset];
        } else {
          r = path4[k + 1 + offset];
        }
        y = Math.max(p, pp);
        x = y - k;
        while (x < m && y < n && a[x] === b[y]) {
          ++x;
          ++y;
        }
        path4[k + offset] = pathposi.length;
        pathposi[pathposi.length] = new P(x, y, r);
        return y;
      };
      var recordseq = function(epc) {
        var x_idx, y_idx, px_idx, py_idx, i;
        x_idx = y_idx = 1;
        px_idx = py_idx = 0;
        for (i = epc.length - 1; i >= 0; --i) {
          while (px_idx < epc[i].x || py_idx < epc[i].y) {
            if (epc[i].y - epc[i].x > py_idx - px_idx) {
              if (reverse) {
                ses[ses.length] = new seselem(b[py_idx], SES_DELETE);
              } else {
                ses[ses.length] = new seselem(b[py_idx], SES_ADD);
              }
              ++y_idx;
              ++py_idx;
            } else if (epc[i].y - epc[i].x < py_idx - px_idx) {
              if (reverse) {
                ses[ses.length] = new seselem(a[px_idx], SES_ADD);
              } else {
                ses[ses.length] = new seselem(a[px_idx], SES_DELETE);
              }
              ++x_idx;
              ++px_idx;
            } else {
              ses[ses.length] = new seselem(a[px_idx], SES_COMMON);
              lcs += a[px_idx];
              ++x_idx;
              ++y_idx;
              ++px_idx;
              ++py_idx;
            }
          }
        }
      };
      init();
      return {
        SES_DELETE: -1,
        SES_COMMON: 0,
        SES_ADD: 1,
        editdistance: function() {
          return ed;
        },
        getlcs: function() {
          return lcs;
        },
        getses: function() {
          return ses;
        },
        compose: function() {
          var delta, size, fp, p, r, epc, i, k;
          delta = n - m;
          size = m + n + 3;
          fp = {};
          for (i = 0; i < size; ++i) {
            fp[i] = -1;
            path4[i] = -1;
          }
          p = -1;
          do {
            ++p;
            for (k = -p; k <= delta - 1; ++k) {
              fp[k + offset] = snake(k, fp[k - 1 + offset] + 1, fp[k + 1 + offset]);
            }
            for (k = delta + p; k >= delta + 1; --k) {
              fp[k + offset] = snake(k, fp[k - 1 + offset] + 1, fp[k + 1 + offset]);
            }
            fp[delta + offset] = snake(delta, fp[delta - 1 + offset] + 1, fp[delta + 1 + offset]);
          } while (fp[delta + offset] !== n);
          ed = delta + 2 * p;
          r = path4[delta + offset];
          epc = [];
          while (r !== -1) {
            epc[epc.length] = new P(pathposi[r].x, pathposi[r].y, null);
            r = pathposi[r].k;
          }
          recordseq(epc);
        }
      };
    };
  }
});

// node_modules/diff3/diff3.js
var require_diff3 = __commonJS({
  "node_modules/diff3/diff3.js"(exports, module) {
    var onp = require_onp();
    function longestCommonSubsequence(file1, file2) {
      var diff = new onp(file1, file2);
      diff.compose();
      var ses = diff.getses();
      var root;
      var prev;
      var file1RevIdx = file1.length - 1, file2RevIdx = file2.length - 1;
      for (var i = ses.length - 1; i >= 0; --i) {
        if (ses[i].t === diff.SES_COMMON) {
          if (prev) {
            prev.chain = {
              file1index: file1RevIdx,
              file2index: file2RevIdx,
              chain: null
            };
            prev = prev.chain;
          } else {
            root = {
              file1index: file1RevIdx,
              file2index: file2RevIdx,
              chain: null
            };
            prev = root;
          }
          file1RevIdx--;
          file2RevIdx--;
        } else if (ses[i].t === diff.SES_DELETE) {
          file1RevIdx--;
        } else if (ses[i].t === diff.SES_ADD) {
          file2RevIdx--;
        }
      }
      var tail = {
        file1index: -1,
        file2index: -1,
        chain: null
      };
      if (!prev) {
        return tail;
      }
      prev.chain = tail;
      return root;
    }
    function diffIndices(file1, file2) {
      var result = [];
      var tail1 = file1.length;
      var tail2 = file2.length;
      for (var candidate = longestCommonSubsequence(file1, file2); candidate !== null; candidate = candidate.chain) {
        var mismatchLength1 = tail1 - candidate.file1index - 1;
        var mismatchLength2 = tail2 - candidate.file2index - 1;
        tail1 = candidate.file1index;
        tail2 = candidate.file2index;
        if (mismatchLength1 || mismatchLength2) {
          result.push({
            file1: [tail1 + 1, mismatchLength1],
            file2: [tail2 + 1, mismatchLength2]
          });
        }
      }
      result.reverse();
      return result;
    }
    function diff3MergeIndices(a, o, b) {
      var i;
      var m1 = diffIndices(o, a);
      var m2 = diffIndices(o, b);
      var hunks = [];
      function addHunk(h, side2) {
        hunks.push([h.file1[0], side2, h.file1[1], h.file2[0], h.file2[1]]);
      }
      for (i = 0; i < m1.length; i++) {
        addHunk(m1[i], 0);
      }
      for (i = 0; i < m2.length; i++) {
        addHunk(m2[i], 2);
      }
      hunks.sort(function(x, y) {
        return x[0] - y[0];
      });
      var result = [];
      var commonOffset = 0;
      function copyCommon(targetOffset) {
        if (targetOffset > commonOffset) {
          result.push([1, commonOffset, targetOffset - commonOffset]);
          commonOffset = targetOffset;
        }
      }
      for (var hunkIndex = 0; hunkIndex < hunks.length; hunkIndex++) {
        var firstHunkIndex = hunkIndex;
        var hunk = hunks[hunkIndex];
        var regionLhs = hunk[0];
        var regionRhs = regionLhs + hunk[2];
        while (hunkIndex < hunks.length - 1) {
          var maybeOverlapping = hunks[hunkIndex + 1];
          var maybeLhs = maybeOverlapping[0];
          if (maybeLhs > regionRhs) break;
          regionRhs = Math.max(regionRhs, maybeLhs + maybeOverlapping[2]);
          hunkIndex++;
        }
        copyCommon(regionLhs);
        if (firstHunkIndex == hunkIndex) {
          if (hunk[4] > 0) {
            result.push([hunk[1], hunk[3], hunk[4]]);
          }
        } else {
          var regions = {
            0: [a.length, -1, o.length, -1],
            2: [b.length, -1, o.length, -1]
          };
          for (i = firstHunkIndex; i <= hunkIndex; i++) {
            hunk = hunks[i];
            var side = hunk[1];
            var r = regions[side];
            var oLhs = hunk[0];
            var oRhs = oLhs + hunk[2];
            var abLhs = hunk[3];
            var abRhs = abLhs + hunk[4];
            r[0] = Math.min(abLhs, r[0]);
            r[1] = Math.max(abRhs, r[1]);
            r[2] = Math.min(oLhs, r[2]);
            r[3] = Math.max(oRhs, r[3]);
          }
          var aLhs = regions[0][0] + (regionLhs - regions[0][2]);
          var aRhs = regions[0][1] + (regionRhs - regions[0][3]);
          var bLhs = regions[2][0] + (regionLhs - regions[2][2]);
          var bRhs = regions[2][1] + (regionRhs - regions[2][3]);
          result.push([
            -1,
            aLhs,
            aRhs - aLhs,
            regionLhs,
            regionRhs - regionLhs,
            bLhs,
            bRhs - bLhs
          ]);
        }
        commonOffset = regionRhs;
      }
      copyCommon(o.length);
      return result;
    }
    function diff3Merge2(a, o, b) {
      var result = [];
      var files = [a, o, b];
      var indices = diff3MergeIndices(a, o, b);
      var okLines = [];
      function flushOk() {
        if (okLines.length) {
          result.push({
            ok: okLines
          });
        }
        okLines = [];
      }
      function pushOk(xs) {
        for (var j = 0; j < xs.length; j++) {
          okLines.push(xs[j]);
        }
      }
      function isTrueConflict(rec) {
        if (rec[2] != rec[6]) return true;
        var aoff = rec[1];
        var boff = rec[5];
        for (var j = 0; j < rec[2]; j++) {
          if (a[j + aoff] != b[j + boff]) return true;
        }
        return false;
      }
      for (var i = 0; i < indices.length; i++) {
        var x = indices[i];
        var side = x[0];
        if (side == -1) {
          if (!isTrueConflict(x)) {
            pushOk(files[0].slice(x[1], x[1] + x[2]));
          } else {
            flushOk();
            result.push({
              conflict: {
                a: a.slice(x[1], x[1] + x[2]),
                aIndex: x[1],
                o: o.slice(x[3], x[3] + x[4]),
                oIndex: x[3],
                b: b.slice(x[5], x[5] + x[6]),
                bIndex: x[5]
              }
            });
          }
        } else {
          pushOk(files[side].slice(x[1], x[1] + x[2]));
        }
      }
      flushOk();
      return result;
    }
    module.exports = diff3Merge2;
  }
});

// src/backend.ts
import path3 from "node:path";

// src/reader.ts
import { open, readdir, realpath, lstat } from "node:fs/promises";
import path from "node:path";

// src/model.ts
var object = (v) => v && typeof v === "object" && !Array.isArray(v) ? v : {};
var words = (v, max = 180) => typeof v === "string" ? v.replace(/[\u0000-\u001f]/g, " ").slice(0, max) : "";
var zero = () => ({
  input: 0,
  output: 0,
  read: 0,
  write: 0,
  reasoning: 0
});
var count = (v) => typeof v === "number" && Number.isSafeInteger(v) && v >= 0 ? v : 0;
function normalize(u, engine, modelRow = false) {
  const read = count(u.cache_read_tokens), output = count(u.output_tokens);
  return {
    input: Math.max(
      0,
      count(u.input_tokens) - (engine === "codex" && !modelRow ? read : 0)
    ),
    output,
    read,
    write: count(u.cache_write_tokens),
    reasoning: Math.min(output, count(u.reasoning_tokens))
  };
}
var total = (u) => u.input + u.output + u.read + u.write;
function add(a, b) {
  return {
    input: a.input + b.input,
    output: a.output + b.output,
    read: a.read + b.read,
    write: a.write + b.write,
    reasoning: a.reasoning + b.reasoning
  };
}
var USAGE_KINDS = /* @__PURE__ */ new Set([
  "messages",
  "build_observation",
  "completion_call"
]);
function cleanUsage(value) {
  const raw = object(value), out = {};
  for (const key of [
    "input_tokens",
    "output_tokens",
    "cache_read_tokens",
    "cache_write_tokens",
    "reasoning_tokens"
  ])
    if (Object.hasOwn(raw, key))
      out[key] = typeof raw[key] === "number" ? raw[key] : null;
  for (const key of ["model", "engine"])
    if (typeof raw[key] === "string") out[key] = words(raw[key], 100);
  const rows = Object.entries(object(raw.by_model));
  if (rows.length)
    out.by_model = Object.fromEntries(
      rows.slice(0, 64).map(([name, row]) => [
        words(name, 100),
        cleanUsage({ ...object(row), by_model: void 0 })
      ])
    );
  return out;
}
function projectEvent(raw, project) {
  const e = object(raw), d = object(e.data), p = d.type === "custom" ? object(d.payload) : d;
  if (typeof e.id !== "string" || typeof e.created_at !== "string" || !Number.isFinite(Date.parse(e.created_at)))
    return null;
  const kind = words(d.type === "custom" ? d.event_type : d.type, 80), engine = words(p.engine || object(p.usage).engine, 80);
  const request = object(d.request), args = object(request.arguments);
  const tool = words(request.name, 100), edit = /^(?:write_file|edit_file|apply_patch|Write|Edit)$/.test(tool);
  const files = edit ? [words(args.path || args.file_path, 240)].filter(Boolean) : [];
  const parts = object(p.data).parts;
  if (kind.startsWith("delegated_") && Array.isArray(parts))
    for (const value of parts) {
      const part = object(value), input = object(part.input);
      if (part.type === "tool_use" && /^(?:write_file|edit_file|Write|Edit)$/.test(part.name))
        files.push(words(input.path || input.file_path, 240));
    }
  const ref = words(object(d.git).game, 64), snapshot = kind === "snapshot_created" && /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i.test(ref) ? { id: words(d.snapshot_id, 100), ref } : void 0;
  return {
    id: e.id,
    thread: words(e.thread_id || e.conversation_id, 100),
    turn: words(e.turn_id, 100),
    at: e.created_at,
    project,
    kind,
    engine,
    model: words(p.model || object(p.usage).model, 100) || "Unreported model",
    usage: USAGE_KINDS.has(kind) && p.usage && typeof p.usage === "object" ? cleanUsage(p.usage) : null,
    delegated: d.usage_source === "delegation",
    run: words(p.runId, 100),
    worker: words(p.workerId, 100),
    label: tool || words(p.title, 100) || kind.replace(/_/g, " "),
    summary: [
      "worker_finished",
      "build_observation",
      "facet_iteration"
    ].includes(kind) ? words(p.summary, 300) : "",
    files,
    status: typeof p.ok === "boolean" ? p.ok ? "ok" : "failed" : words(p.state || d.status, 40),
    ...snapshot ? { snapshot } : {}
  };
}
var tokenKeys = [
  "input_tokens",
  "output_tokens",
  "cache_read_tokens",
  "cache_write_tokens",
  "reasoning_tokens"
];
function repeated(events) {
  const turns = /* @__PURE__ */ new Map();
  for (const e of events)
    if (e.turn && e.kind === "messages" && e.usage) {
      const key = e.thread + "\0" + e.turn;
      turns.set(key, [...turns.get(key) || [], e]);
    }
  return new Set(
    events.filter(
      (e) => e.kind === "build_observation" && e.usage && e.turn && (turns.get(e.thread + "\0" + e.turn) || []).some(
        (m) => m.delegated || tokenKeys.every((k) => m.usage[k] === e.usage[k])
      )
    ).map((e) => e.thread + "\0" + e.id)
  );
}
function callsOf(events) {
  const skip = repeated(events), seen = /* @__PURE__ */ new Set(), result = [];
  for (const e of events) {
    const key = e.thread + "\0" + e.id;
    if (seen.has(key) || skip.has(key) || !e.usage) continue;
    seen.add(key);
    const u = e.usage, rows = Object.entries(object(u.by_model));
    const parts = rows.length ? rows.map(([model, row]) => ({ model, usage: object(row), row: true })) : [{ model: e.model, usage: u, row: false }];
    for (const p of parts)
      result.push({
        id: key + "\0" + p.model,
        at: e.at,
        project: e.project,
        model: p.model,
        engine: e.engine || "Unreported engine",
        counts: normalize(p.usage, e.engine, p.row),
        partial: ![
          "input_tokens",
          "output_tokens",
          "cache_read_tokens",
          "cache_write_tokens"
        ].every(
          (k) => typeof p.usage[k] === "number" && Number.isSafeInteger(p.usage[k]) && p.usage[k] >= 0
        )
      });
  }
  return result;
}
function dayKey(at, zone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: zone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date(at));
  return ["year", "month", "day"].map((k) => parts.find((p) => p.type === k).value).join("-");
}
function calendar(end) {
  const date = /* @__PURE__ */ new Date(end + "T12:00:00Z"), start = new Date(date);
  start.setUTCDate(start.getUTCDate() - 364 - start.getUTCDay());
  const days = [];
  for (let d = new Date(start); d <= date; d.setUTCDate(d.getUTCDate() + 1))
    days.push(d.toISOString().slice(0, 10));
  return days;
}
function streaks(active, today) {
  const sorted = [...active].filter((d) => d <= today).sort();
  let longest = 0, n = 0, previous = 0;
  for (const key of sorted) {
    const at = Date.parse(key + "T12:00:00Z");
    n = at - previous === 864e5 ? n + 1 : 1;
    longest = Math.max(longest, n);
    previous = at;
  }
  const cursor = /* @__PURE__ */ new Date(today + "T12:00:00Z");
  if (!active.has(today)) cursor.setUTCDate(cursor.getUTCDate() - 1);
  let current = 0;
  while (active.has(cursor.toISOString().slice(0, 10))) {
    current++;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return { current, longest };
}
function analytics(entries, filter) {
  const all = callsOf(entries), today = dayKey(filter.now || /* @__PURE__ */ new Date(), filter.zone), calls = all.filter(
    (c) => (!filter.project || c.project === filter.project) && (!filter.model || c.model === filter.model)
  );
  const days = /* @__PURE__ */ new Map();
  for (const c of calls) {
    const key = dayKey(c.at, filter.zone), day = days.get(key) || { counts: zero(), projects: /* @__PURE__ */ new Set() };
    day.counts = add(day.counts, c.counts);
    day.projects.add(c.project);
    days.set(key, day);
  }
  const selected = calls.filter(
    (c) => !filter.day || dayKey(c.at, filter.zone) === filter.day
  ), groups = (key) => {
    const out = /* @__PURE__ */ new Map();
    for (const c of selected)
      out.set(c[key], add(out.get(c[key]) || zero(), c.counts));
    return [...out].map(([name, counts]) => ({ name, counts, total: total(counts) })).sort((a, b) => b.total - a.total);
  };
  const recordedDates = selected.map((call) => dayKey(call.at, filter.zone)).sort();
  return {
    today,
    period: { first: recordedDates[0] ?? null, last: recordedDates.at(-1) ?? null },
    zone: filter.zone,
    counts: selected.reduce((s, c) => add(s, c.counts), zero()),
    callCount: new Set(
      selected.map((c) => c.id.split("\0").slice(0, 2).join("\0"))
    ).size,
    partial: selected.filter((c) => c.partial).length,
    days: calendar(today).map((date) => ({
      date,
      ...days.has(date) ? {
        tokens: total(days.get(date).counts),
        projects: days.get(date).projects.size
      } : { tokens: 0, projects: 0 }
    })),
    streak: streaks(
      new Set([...days].filter(([, v]) => total(v.counts) > 0).map(([d]) => d)),
      today
    ),
    projects: groups("project"),
    models: groups("model"),
    projectOptions: [...new Set(entries.map((e) => e.project))].sort(),
    modelOptions: [...new Set(all.map((c) => c.model))].sort(),
    activity: entries.filter(
      (e) => (!filter.project || e.project === filter.project) && (!filter.day || dayKey(e.at, filter.zone) === filter.day) && (!filter.model || e.model === filter.model) && !!(e.usage || e.files.length || e.summary || [
        "worker_started",
        "worker_finished",
        "run_started",
        "run_finished",
        "tool_requested",
        "snapshot_created",
        "turn_started",
        "turn_ended",
        "preview_ready",
        "error"
      ].includes(e.kind))
    ).sort((a, b) => b.at.localeCompare(a.at)).slice(0, 160).map(({ usage, ...e }) => ({
      ...e,
      counts: usage ? normalize(usage, e.engine) : null
    }))
  };
}

// src/reader.ts
var SEGMENT = /^[A-Za-z0-9][A-Za-z0-9._-]{0,159}$/;
var EVENT = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.json$/i;
var LIMITS = {
  threads: 300,
  events: 15e4,
  jsonBytes: 2 * 1024 * 1024,
  imageBytes: 8 * 1024 * 1024
};
function inside(root, file) {
  const rel = path.relative(root, file);
  return rel !== "" && !rel.startsWith(".." + path.sep) && rel !== ".." && !path.isAbsolute(rel);
}
async function readBounded(root, relative, max) {
  const base = await realpath(root), file = path.resolve(base, relative);
  if (!inside(base, file)) throw new Error("Path outside analytics source");
  const canonical = await realpath(file);
  if (!inside(base, canonical))
    throw new Error("Linked path outside analytics source");
  const before = await lstat(file);
  if (before.isSymbolicLink() || !before.isFile() || before.size > max)
    throw new Error("Unsupported or oversized file");
  const handle = await open(canonical, "r");
  try {
    const stat = await handle.stat();
    if (stat.size > max || !stat.isFile()) throw new Error("Oversized file");
    const data = Buffer.alloc(stat.size + 1);
    const { bytesRead } = await handle.read(data, 0, data.length, 0);
    if (bytesRead > max) throw new Error("Oversized file");
    return data.subarray(0, bytesRead);
  } finally {
    await handle.close();
  }
}
async function json(root, file) {
  return JSON.parse(
    (await readBounded(root, file, LIMITS.jsonBytes)).toString("utf8")
  );
}
async function dirs(root, relative) {
  const base = await realpath(root), folder = path.resolve(base, relative);
  const resolved = await realpath(folder);
  if (!inside(base, resolved))
    throw new Error("Linked directory outside source");
  return (await readdir(resolved, { withFileTypes: true })).filter(
    (x) => x.isDirectory() && !x.isSymbolicLink() && SEGMENT.test(x.name) && x.name !== "." && x.name !== ".."
  ).map((x) => x.name).sort();
}
function profileRoot(storage) {
  const normalized = path.resolve(storage), parts = normalized.split(path.sep);
  if (parts.slice(-4, -1).join("/") !== "engine-homes/plugins/data" || parts.at(-1) !== "usage-streak")
    throw new Error(
      "Genex storage layout is not supported. Configure the Genex profile directory in plugin settings."
    );
  return path.resolve(storage, "../../../..");
}
var AnalyticsReader = class {
  cache = /* @__PURE__ */ new Map();
  inFlight = null;
  last = null;
  root;
  constructor(root) {
    this.root = root;
  }
  async snapshot() {
    if (this.inFlight) return this.inFlight;
    if (this.last && Date.now() - this.last.at < 4500) return this.last.value;
    this.inFlight = this.load();
    try {
      const value = await this.inFlight;
      this.last = { at: Date.now(), value };
      return value;
    } finally {
      this.inFlight = null;
    }
  }
  async load() {
    const eventsRoot = path.join(this.root, "exoharness"), warnings = [], entries = [], captures = [];
    let projects;
    try {
      projects = object(await json(this.root, "projects.json"));
    } catch {
      throw new Error(
        "Cannot read Genex projects.json. Select the active Genex profile in plugin settings."
      );
    }
    const names = /* @__PURE__ */ new Map();
    for (const recent of Array.isArray(projects.recents) ? projects.recents : []) {
      const row = object(recent);
      if (typeof row.name === "string") names.set(row.name, row.name);
    }
    let threads;
    try {
      threads = await dirs(eventsRoot, "agents/studio/conversations");
    } catch {
      throw new Error(
        "Genex conversation history is unavailable. Open a game in Studio and refresh."
      );
    }
    if (threads.length > LIMITS.threads)
      warnings.push(
        `Only the first ${LIMITS.threads} conversations were read.`
      );
    for (const old of this.cache.keys())
      if (!threads.includes(old)) this.cache.delete(old);
    let scanned = 0;
    for (const thread of threads.slice(0, LIMITS.threads)) {
      const prefix = path.join("agents/studio/conversations", thread);
      let record;
      try {
        record = object(
          await json(eventsRoot, path.join(prefix, "record.json"))
        );
      } catch {
        warnings.push(`One conversation record could not be read (${thread}).`);
        continue;
      }
      const meta = object(record.metadata), project = words(meta.project, 160) || "Unassigned";
      const head = typeof record.latest_event_id === "string" ? record.latest_event_id : "";
      if (!head) continue;
      if (!EVENT.test(head + ".json")) {
        warnings.push("One conversation has an unsupported head.");
        continue;
      }
      const stamp = head + "\0" + project + "\0" + String(record.parent?.up_to_inclusive || "");
      let cached = this.cache.get(thread);
      if (!cached || cached.stamp !== stamp || cached.warnings.length) {
        const incremental = !!cached && !cached.warnings.length && cached.head <= head && cached.stamp.split("\0").slice(1).join("\0") === stamp.split("\0").slice(1).join("\0");
        const current = {
          stamp,
          head,
          entries: incremental ? [...cached.entries] : [],
          captures: incremental ? [...cached.captures] : [],
          warnings: []
        };
        scanned += current.entries.length;
        try {
          const folder = path.join(prefix, "events"), canonical = await realpath(path.join(eventsRoot, folder));
          if (!inside(await realpath(eventsRoot), canonical))
            throw new Error("Linked event directory");
          const files = (await readdir(canonical, { withFileTypes: true })).filter(
            (f) => f.isFile() && !f.isSymbolicLink() && EVENT.test(f.name) && f.name.slice(0, -5) <= head
          ).map((f) => f.name).sort();
          const forkPoint = words(object(record.parent).up_to_inclusive, 100);
          const pending = files.filter(
            (file) => (!incremental || file.slice(0, -5) > cached.head) && (!forkPoint || file.slice(0, -5) > forkPoint)
          );
          const allowance = Math.max(0, LIMITS.events - scanned);
          if (pending.length > allowance)
            current.warnings.push("Event limit reached; totals are partial.");
          const readable = pending.slice(0, allowance);
          scanned += readable.length;
          for (let offset = 0; offset < readable.length; offset += 16)
            await Promise.all(
              readable.slice(offset, offset + 16).map(async (file) => {
                try {
                  const raw = object(
                    await json(eventsRoot, path.join(folder, file))
                  );
                  if (raw.id !== file.slice(0, -5))
                    throw new Error("Event id mismatch");
                  const entry = projectEvent(raw, project);
                  if (entry) current.entries.push(entry);
                  else
                    current.warnings.push("An unsupported event was omitted.");
                  const d = object(raw.data), p = object(d.payload);
                  if (d.type === "custom" && d.event_type === "observer_capture")
                    for (const value of Array.isArray(p.images) ? p.images : []) {
                      const shot = object(value);
                      if (typeof shot.file === "string")
                        current.captures.push({
                          project,
                          file: shot.file,
                          at: words(raw.created_at, 40)
                        });
                    }
                } catch {
                  current.warnings.push(
                    "An unreadable event was omitted; totals may be incomplete."
                  );
                }
              })
            );
          current.entries.sort((a, b) => a.id.localeCompare(b.id));
          this.cache.set(thread, current);
          cached = current;
        } catch {
          warnings.push(`Cannot read conversation events (${thread}).`);
          continue;
        }
      } else scanned += cached.entries.length;
      entries.push(...cached.entries);
      captures.push(...cached.captures);
      warnings.push(...cached.warnings);
      if (entries.length >= LIMITS.events) {
        warnings.push("Event limit reached; totals are partial.");
        break;
      }
    }
    const screenshots = /* @__PURE__ */ Object.create(null);
    for (const capture of captures.sort((a, b) => b.at.localeCompare(a.at))) {
      if (screenshots[capture.project]) continue;
      const file = path.isAbsolute(capture.file) ? capture.file : path.join(this.root, capture.file), rel = path.relative(path.join(this.root, "runs"), file);
      if (inside(path.join(this.root, "runs"), file) && /\.(png|jpe?g)$/i.test(file))
        screenshots[capture.project] = {
          root: path.join(this.root, "runs"),
          file: rel,
          at: capture.at,
          source: "Studio capture"
        };
    }
    const runsRoot = path.join(this.root, "runs");
    try {
      let visited = 0;
      const runs = (await dirs(this.root, "runs")).filter(
        (run) => /^run_[A-Za-z0-9_-]+$/.test(run)
      );
      if (runs.length > 200)
        warnings.push("Only 200 saved runs were checked for screenshots.");
      for (const run of runs.slice(-200)) {
        let report;
        try {
          report = object(await json(runsRoot, path.join(run, "report.json")));
        } catch {
          continue;
        }
        const project = words(report.project, 160);
        if (!project) continue;
        const walk = async (relative, depth) => {
          if (depth > 4 || visited++ > 1500) return;
          let children;
          try {
            children = await dirs(runsRoot, relative);
          } catch {
            return;
          }
          for (const child of children) {
            const next = path.join(relative, child);
            if (child === "screenshots") {
              try {
                const canonical = await realpath(path.join(runsRoot, next));
                if (!inside(await realpath(runsRoot), canonical)) continue;
                const images = (await readdir(canonical, { withFileTypes: true })).filter(
                  (f) => f.isFile() && !f.isSymbolicLink() && /^[A-Za-z0-9._-]+\.(?:png|jpe?g)$/i.test(f.name)
                );
                const preferred = images.find((f) => f.name === "default.jpg") || images.find((f) => f.name === "default.png") || images.find((f) => f.name === "user-view.jpg") || images[0];
                if (!preferred) continue;
                const file = path.join(next, preferred.name), stat = await lstat(path.join(runsRoot, file));
                if (stat.size > LIMITS.imageBytes) continue;
                const at = stat.mtime.toISOString();
                if (!screenshots[project] || screenshots[project].at < at)
                  screenshots[project] = {
                    root: runsRoot,
                    file,
                    at,
                    source: "Studio build capture"
                  };
              } catch {
              }
            } else await walk(next, depth + 1);
          }
        };
        await walk(run, 0);
      }
      if (visited > 1500)
        warnings.push(
          "Screenshot folder limit reached; some captures were not checked."
        );
    } catch {
    }
    for (const project of new Set(entries.map((e) => e.project))) {
      if (screenshots[project] || !SEGMENT.test(project) || project === "..")
        continue;
      try {
        const base = path.join(
          this.root,
          "engine-homes/plugins/data/genex/covers"
        ), record = object(await json(base, path.join(project, "shot.json"))), file = record.mimeType === "image/png" ? "shot.png" : record.mimeType === "image/jpeg" ? "shot.jpg" : null;
        if (file)
          screenshots[project] = {
            root: base,
            file: path.join(project, file),
            at: words(record.takenAt, 40),
            source: "Studio cover capture"
          };
      } catch {
      }
    }
    return {
      entries,
      screenshots,
      warnings: [...new Set(warnings)],
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      projects: [...names.keys()],
      eventCount: entries.length
    };
  }
  async image(root, file) {
    const data = await readBounded(root, file, LIMITS.imageBytes);
    const png = data.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), jpeg = data[0] === 255 && data[1] === 216 && data[2] === 255;
    if (!png && !jpeg) return null;
    return `data:image/${png ? "png" : "jpeg"};base64,${data.toString("base64")}`;
  }
};

// src/changes.ts
import fs from "node:fs";

// node_modules/isomorphic-git/index.js
var import_sha1 = __toESM(require_sha1(), 1);
var import_async_lock = __toESM(require_async_lock(), 1);
var import_clean_git_ref = __toESM(require_lib2(), 1);
var import_crc_32 = __toESM(require_crc32(), 1);
var import_pako = __toESM(require_pako(), 1);
var import_pify = __toESM(require_pify(), 1);
var import_ignore = __toESM(require_ignore(), 1);
var import_diff3 = __toESM(require_diff3(), 1);
var BaseError = class _BaseError extends Error {
  constructor(message) {
    super(message);
    this.caller = "";
  }
  toJSON() {
    const metadata = (
      /** @type {any} */
      this
    );
    return {
      code: metadata.code,
      data: metadata.data,
      caller: this.caller,
      message: this.message,
      stack: this.stack
    };
  }
  fromJSON(json2) {
    const e = new _BaseError(json2.message);
    const metadata = (
      /** @type {any} */
      e
    );
    metadata.code = json2.code;
    metadata.data = json2.data;
    e.caller = json2.caller;
    e.stack = json2.stack;
    return e;
  }
  get isIsomorphicGitError() {
    return true;
  }
};
var UnmergedPathsError = class _UnmergedPathsError extends BaseError {
  /**
   * @param {Array<string>} filepaths
   */
  constructor(filepaths) {
    super(
      `Modifying the index is not possible because you have unmerged files: ${filepaths.toString}. Fix them up in the work tree, and then use 'git add/rm as appropriate to mark resolution and make a commit.`
    );
    this.code = this.name = _UnmergedPathsError.code;
    this.data = { filepaths };
  }
};
UnmergedPathsError.code = "UnmergedPathsError";
var InternalError = class _InternalError extends BaseError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(
      `An internal error caused this command to fail.

If you're using an application that depends on isomorphic-git, please report this error to that application's developers.

If you're a developer and you believe this is a bug in isomorphic-git, please file an issue at https://github.com/isomorphic-git/isomorphic-git/issues with a minimal reproduction, version and environment details, and this error message: ${message}`
    );
    this.code = this.name = _InternalError.code;
    this.data = { message };
  }
};
InternalError.code = "InternalError";
var UnsafeFilepathError = class _UnsafeFilepathError extends BaseError {
  /**
   * @param {string} filepath
   */
  constructor(filepath) {
    super(`The filepath "${filepath}" contains unsafe character sequences`);
    this.code = this.name = _UnsafeFilepathError.code;
    this.data = { filepath };
  }
};
UnsafeFilepathError.code = "UnsafeFilepathError";
var BufferCursor = class {
  constructor(buffer) {
    this.buffer = buffer;
    this._start = 0;
  }
  eof() {
    return this._start >= this.buffer.length;
  }
  tell() {
    return this._start;
  }
  seek(n) {
    this._start = n;
  }
  slice(n) {
    const r = this.buffer.slice(this._start, this._start + n);
    this._start += n;
    return r;
  }
  toString(enc, length) {
    const r = this.buffer.toString(enc, this._start, this._start + length);
    this._start += length;
    return r;
  }
  write(value, length, enc) {
    const r = this.buffer.write(value, this._start, length, enc);
    this._start += length;
    return r;
  }
  copy(source, start, end) {
    const r = source.copy(this.buffer, this._start, start, end);
    this._start += r;
    return r;
  }
  readUInt8() {
    const r = this.buffer.readUInt8(this._start);
    this._start += 1;
    return r;
  }
  writeUInt8(value) {
    const r = this.buffer.writeUInt8(value, this._start);
    this._start += 1;
    return r;
  }
  readUInt16BE() {
    const r = this.buffer.readUInt16BE(this._start);
    this._start += 2;
    return r;
  }
  writeUInt16BE(value) {
    const r = this.buffer.writeUInt16BE(value, this._start);
    this._start += 2;
    return r;
  }
  readUInt32BE() {
    const r = this.buffer.readUInt32BE(this._start);
    this._start += 4;
    return r;
  }
  writeUInt32BE(value) {
    const r = this.buffer.writeUInt32BE(value, this._start);
    this._start += 4;
    return r;
  }
};
var NEEDS_CODE_POINT_ORDER = /[\ud800-￿]/;
function isLoneSurrogate(s, i, unit) {
  if (unit < 55296 || unit > 57343) return false;
  if (unit < 56320) {
    const next = i + 1 < s.length ? s.charCodeAt(i + 1) : 0;
    return next < 56320 || next > 57343;
  }
  const prev = i > 0 ? s.charCodeAt(i - 1) : 0;
  return prev < 55296 || prev > 56319;
}
function compareStrings(a, b) {
  if (!NEEDS_CODE_POINT_ORDER.test(a) && !NEEDS_CODE_POINT_ORDER.test(b)) {
    return -(a < b) || +(a > b);
  }
  const length = Math.min(a.length, b.length);
  for (let i = 0; i < length; i++) {
    let x = a.charCodeAt(i);
    let y = b.charCodeAt(i);
    if (x !== y) {
      if (isLoneSurrogate(a, i, x)) x = 65533;
      if (isLoneSurrogate(b, i, y)) y = 65533;
      if (x === y) continue;
      if (x >= 55296 && y >= 55296) {
        x += x >= 57344 ? -2048 : 8192;
        y += y >= 57344 ? -2048 : 8192;
      }
      return x < y ? -1 : 1;
    }
  }
  return a.length < b.length ? -1 : a.length > b.length ? 1 : 0;
}
function comparePath(a, b) {
  return compareStrings(a.path, b.path);
}
var MAX_UINT32 = 2 ** 32;
function toHex(buffer) {
  let hex = "";
  for (const byte of new Uint8Array(buffer)) {
    if (byte < 16) hex += "0";
    hex += byte.toString(16);
  }
  return hex;
}
var supportsSubtleSHA1 = null;
async function shasum(buffer) {
  if (supportsSubtleSHA1 === null) {
    supportsSubtleSHA1 = await testSubtleSHA1();
  }
  return supportsSubtleSHA1 ? subtleSHA1(buffer) : shasumSync(buffer);
}
function shasumSync(buffer) {
  return new import_sha1.default().update(buffer).digest("hex");
}
async function subtleSHA1(buffer) {
  const hash = await crypto.subtle.digest("SHA-1", buffer);
  return toHex(hash);
}
async function testSubtleSHA1() {
  try {
    const hash = await subtleSHA1(new Uint8Array([]));
    return hash === "da39a3ee5e6b4b0d3255bfef95601890afd80709";
  } catch (_) {
  }
  return false;
}
var IndexCache = Symbol("IndexCache");
function dirname(path4) {
  const last = Math.max(path4.lastIndexOf("/"), path4.lastIndexOf("\\"));
  if (last === -1) return ".";
  if (last === 0) return "/";
  return path4.slice(0, last);
}
var GitWalkSymbol = Symbol("GitWalkSymbol");
var NotFoundError = class _NotFoundError extends BaseError {
  /**
   * @param {string} what
   */
  constructor(what) {
    super(`Could not find ${what}.`);
    this.code = this.name = _NotFoundError.code;
    this.data = { what };
  }
};
NotFoundError.code = "NotFoundError";
var ObjectTypeError = class _ObjectTypeError extends BaseError {
  /**
   * @param {string} oid
   * @param {'blob'|'commit'|'tag'|'tree'} actual
   * @param {'blob'|'commit'|'tag'|'tree'} expected
   * @param {string} [filepath]
   */
  constructor(oid, actual, expected, filepath) {
    super(
      `Object ${oid} ${filepath ? `at ${filepath}` : ""}was anticipated to be a ${expected} but it is a ${actual}.`
    );
    this.code = this.name = _ObjectTypeError.code;
    this.data = { oid, actual, expected, filepath };
  }
};
ObjectTypeError.code = "ObjectTypeError";
var InvalidOidError = class _InvalidOidError extends BaseError {
  /**
   * @param {string} value
   */
  constructor(value) {
    super(`Expected a 40-char hex object id but saw "${value}".`);
    this.code = this.name = _InvalidOidError.code;
    this.data = { value };
  }
};
InvalidOidError.code = "InvalidOidError";
var InvalidRefNameError = class _InvalidRefNameError extends BaseError {
  /**
   * @param {string} ref
   * @param {string} suggestion
   * @param {boolean} canForce
   */
  constructor(ref, suggestion) {
    super(
      `"${ref}" would be an invalid git reference. (Hint: a valid alternative would be "${suggestion}".)`
    );
    this.code = this.name = _InvalidRefNameError.code;
    this.data = { ref, suggestion };
  }
};
InvalidRefNameError.code = "InvalidRefNameError";
var NoRefspecError = class _NoRefspecError extends BaseError {
  /**
   * @param {string} remote
   */
  constructor(remote) {
    super(`Could not find a fetch refspec for remote "${remote}". Make sure the config file has an entry like the following:
[remote "${remote}"]
	fetch = +refs/heads/*:refs/remotes/origin/*
`);
    this.code = this.name = _NoRefspecError.code;
    this.data = { remote };
  }
};
NoRefspecError.code = "NoRefspecError";
function normalizeString(path4, aar) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = "\0";
  for (let i = 0; i <= path4.length; ++i) {
    if (i < path4.length) char = path4[i];
    else if (char === "/") break;
    else char = "/";
    if (char === "/") {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.at(-1) !== "." || res.at(-2) !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (aar) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) res += "/" + path4.slice(lastSlash + 1, i);
        else res = path4.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function getWindowsDrivePrefix(path4) {
  if (path4.length >= 2 && /^[a-zA-Z]:/.test(path4)) {
    return path4.slice(0, 2);
  }
  return null;
}
function normalize2(path4) {
  if (!path4.length) return ".";
  path4 = path4.replace(/\\/g, "/");
  const drivePrefix = getWindowsDrivePrefix(path4);
  const isAbsolute2 = path4[0] === "/" || drivePrefix !== null && path4[2] === "/";
  const trailingSeparator = path4.at(-1) === "/";
  const pathBody = drivePrefix ? path4.slice(2) : path4;
  let normalized = normalizeString(pathBody, !isAbsolute2);
  if (!normalized.length) {
    const root = drivePrefix ? isAbsolute2 ? drivePrefix + "/" : drivePrefix : isAbsolute2 ? "/" : ".";
    return trailingSeparator && !isAbsolute2 ? root + "/" : root;
  }
  if (trailingSeparator) normalized += "/";
  if (drivePrefix) {
    return isAbsolute2 ? `${drivePrefix}/${normalized}` : `${drivePrefix}${normalized}`;
  }
  return isAbsolute2 ? `/${normalized}` : normalized;
}
function join(...args) {
  if (args.length === 0) return ".";
  let joined;
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i].replace(/\\/g, "/");
    if (arg.length === 0) continue;
    if (/^[a-zA-Z]:\//.test(arg)) {
      joined = arg;
    } else {
      if (joined === void 0) joined = arg;
      else joined += "/" + arg;
    }
  }
  if (joined === void 0) return ".";
  return normalize2(joined);
}
function compareTreeEntryPath(a, b) {
  return compareStrings(appendSlashIfDir(a), appendSlashIfDir(b));
}
function appendSlashIfDir(entry) {
  return entry.mode === "040000" ? entry.path + "/" : entry.path;
}
function mode2type$1(mode) {
  switch (mode) {
    case "040000":
      return "tree";
    case "100644":
      return "blob";
    case "100755":
      return "blob";
    case "120000":
      return "blob";
    case "160000":
      return "commit";
  }
  throw new InternalError(`Unexpected GitTree entry mode: ${mode}`);
}
function parseBuffer(buffer) {
  const _entries = [];
  let cursor = 0;
  while (cursor < buffer.length) {
    const space = buffer.indexOf(32, cursor);
    if (space === -1) {
      throw new InternalError(
        `GitTree: Error parsing buffer at byte location ${cursor}: Could not find the next space character.`
      );
    }
    const nullchar = buffer.indexOf(0, cursor);
    if (nullchar === -1) {
      throw new InternalError(
        `GitTree: Error parsing buffer at byte location ${cursor}: Could not find the next null character.`
      );
    }
    let mode = buffer.slice(cursor, space).toString("utf8");
    if (mode === "40000") mode = "040000";
    const type = mode2type$1(mode);
    const path4 = buffer.slice(space + 1, nullchar).toString("utf8");
    const hfsClean = path4.replace(
      /[\u200C-\u200F\u202A-\u202E\u206A-\u206F\uFEFF]/g,
      ""
    );
    const ntfsClean = hfsClean.split(":")[0];
    const normalized = ntfsClean.toLowerCase().replace(/[. ]+$/, "");
    if (path4.includes("\\") || path4.includes("/") || hfsClean === "." || hfsClean === ".." || normalized === ".git" || /^\.?git~[1-9]$/.test(normalized)) {
      throw new UnsafeFilepathError(path4);
    }
    const oid = buffer.slice(nullchar + 1, nullchar + 21).toString("hex");
    cursor = nullchar + 21;
    _entries.push({ mode, path: path4, oid, type });
  }
  return _entries;
}
function limitModeToAllowed(mode) {
  if (typeof mode === "number") {
    mode = mode.toString(8);
  }
  if (mode.match(/^0?4.*/)) return "040000";
  if (mode.match(/^1006.*/)) return "100644";
  if (mode.match(/^1007.*/)) return "100755";
  if (mode.match(/^120.*/)) return "120000";
  if (mode.match(/^160.*/)) return "160000";
  throw new InternalError(`Could not understand file mode: ${mode}`);
}
function nudgeIntoShape(entry) {
  if (!entry.oid && entry.sha) {
    entry.oid = entry.sha;
  }
  entry.mode = limitModeToAllowed(entry.mode);
  if (!entry.type) {
    entry.type = mode2type$1(entry.mode);
  }
  return entry;
}
var GitTree = class _GitTree {
  constructor(entries) {
    if (Buffer.isBuffer(entries)) {
      this._entries = parseBuffer(entries);
    } else if (Array.isArray(entries)) {
      this._entries = entries.map(nudgeIntoShape);
    } else {
      throw new InternalError("invalid type passed to GitTree constructor");
    }
    this._entries.sort(comparePath);
  }
  static from(tree) {
    return new _GitTree(tree);
  }
  render() {
    return this._entries.map((entry) => `${entry.mode} ${entry.type} ${entry.oid}    ${entry.path}`).join("\n");
  }
  toObject() {
    const entries = [...this._entries];
    entries.sort(compareTreeEntryPath);
    return Buffer.concat(
      entries.map((entry) => {
        const mode = Buffer.from(entry.mode.replace(/^0/, ""));
        const space = Buffer.from(" ");
        const path4 = Buffer.from(entry.path, "utf8");
        const nullchar = Buffer.from([0]);
        const oid = Buffer.from(entry.oid, "hex");
        return Buffer.concat([mode, space, path4, nullchar, oid]);
      })
    );
  }
  /**
   * @returns {TreeEntry[]}
   */
  entries() {
    return this._entries;
  }
  *[Symbol.iterator]() {
    for (const entry of this._entries) {
      yield entry;
    }
  }
};
var GitObject = class {
  /**
   * Wraps a raw object with a Git header.
   *
   * @param {Object} params - The parameters for wrapping.
   * @param {string} params.type - The type of the Git object (e.g., 'blob', 'tree', 'commit').
   * @param {Uint8Array} params.object - The raw object data to wrap.
   * @returns {Uint8Array} The wrapped Git object as a single buffer.
   */
  static wrap({ type, object: object2 }) {
    const header = `${type} ${object2.length}\0`;
    const headerLen = header.length;
    const totalLength = headerLen + object2.length;
    const wrappedObject = new Uint8Array(totalLength);
    for (let i = 0; i < headerLen; i++) {
      wrappedObject[i] = header.charCodeAt(i);
    }
    wrappedObject.set(object2, headerLen);
    return wrappedObject;
  }
  /**
   * Unwraps a Git object buffer into its type and raw object data.
   *
   * @param {Buffer|Uint8Array} buffer - The buffer containing the wrapped Git object.
   * @returns {{ type: string, object: Buffer }} An object containing the type and the raw object data.
   * @throws {InternalError} If the length specified in the header does not match the actual object length.
   */
  static unwrap(buffer) {
    const s = buffer.indexOf(32);
    const i = buffer.indexOf(0);
    const type = buffer.slice(0, s).toString("utf8");
    const length = buffer.slice(s + 1, i).toString("utf8");
    const actualLength = buffer.length - (i + 1);
    if (parseInt(length) !== actualLength) {
      throw new InternalError(
        `Length mismatch: expected ${length} bytes but got ${actualLength} instead.`
      );
    }
    return {
      type,
      object: Buffer.from(buffer.slice(i + 1))
    };
  }
};
async function readObjectLoose({ fs: fs2, gitdir, oid }) {
  const source = `objects/${oid.slice(0, 2)}/${oid.slice(2)}`;
  const file = await fs2.read(`${gitdir}/${source}`);
  if (!file) {
    return null;
  }
  return { object: file, format: "deflated", source };
}
function applyDelta(delta, source) {
  const reader = new BufferCursor(delta);
  const sourceSize = readVarIntLE(reader);
  if (sourceSize !== source.byteLength) {
    throw new InternalError(
      `applyDelta expected source buffer to be ${sourceSize} bytes but the provided buffer was ${source.length} bytes`
    );
  }
  const targetSize = readVarIntLE(reader);
  let target;
  const firstOp = readOp(reader, source);
  if (firstOp.byteLength === targetSize) {
    target = firstOp;
  } else {
    const chunks = [firstOp];
    let tell = firstOp.byteLength;
    while (!reader.eof()) {
      const op = readOp(reader, source);
      chunks.push(op);
      tell += op.byteLength;
    }
    if (targetSize !== tell) {
      throw new InternalError(
        `applyDelta expected target buffer to be ${targetSize} bytes but the resulting buffer was ${tell} bytes`
      );
    }
    target = Buffer.concat(chunks, targetSize);
  }
  return target;
}
function readVarIntLE(reader) {
  let result = 0;
  let shift = 0;
  let byte = null;
  do {
    byte = reader.readUInt8();
    result |= (byte & 127) << shift;
    shift += 7;
  } while (byte & 128);
  return result;
}
function readCompactLE(reader, flags, size) {
  let result = 0;
  let shift = 0;
  while (size--) {
    if (flags & 1) {
      result |= reader.readUInt8() << shift;
    }
    flags >>= 1;
    shift += 8;
  }
  return result;
}
function readOp(reader, source) {
  const byte = reader.readUInt8();
  const COPY = 128;
  const OFFS = 15;
  const SIZE = 112;
  if (byte & COPY) {
    const offset = readCompactLE(reader, byte & OFFS, 4);
    let size = readCompactLE(reader, (byte & SIZE) >> 4, 3);
    if (size === 0) size = 65536;
    return source.slice(offset, offset + size);
  } else {
    return reader.slice(byte);
  }
}
function fromValue(value) {
  let queue = [value];
  return {
    next() {
      return Promise.resolve({ done: queue.length === 0, value: queue.pop() });
    },
    return() {
      queue = [];
      return {};
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
function getIterator(iterable) {
  if (iterable[Symbol.asyncIterator]) {
    return iterable[Symbol.asyncIterator]();
  }
  if (iterable[Symbol.iterator]) {
    return iterable[Symbol.iterator]();
  }
  if (iterable.next) {
    return iterable;
  }
  return fromValue(iterable);
}
var StreamReader = class {
  constructor(stream) {
    if (typeof Buffer === "undefined") {
      throw new Error("Missing Buffer dependency");
    }
    this.stream = getIterator(stream);
    this.buffer = null;
    this.cursor = 0;
    this.undoCursor = 0;
    this.started = false;
    this._ended = false;
    this._discardedBytes = 0;
  }
  eof() {
    return this._ended && this.cursor === this.buffer.length;
  }
  tell() {
    return this._discardedBytes + this.cursor;
  }
  async byte() {
    if (this.eof()) return;
    if (!this.started) await this._init();
    if (this.cursor === this.buffer.length) {
      await this._loadnext();
      if (this._ended) return;
    }
    this._moveCursor(1);
    return this.buffer[this.undoCursor];
  }
  async chunk() {
    if (this.eof()) return;
    if (!this.started) await this._init();
    if (this.cursor === this.buffer.length) {
      await this._loadnext();
      if (this._ended) return;
    }
    this._moveCursor(this.buffer.length);
    return this.buffer.slice(this.undoCursor, this.cursor);
  }
  async read(n) {
    if (this.eof()) return;
    if (!this.started) await this._init();
    if (this.cursor + n > this.buffer.length) {
      this._trim();
      await this._accumulate(n);
    }
    this._moveCursor(n);
    return this.buffer.slice(this.undoCursor, this.cursor);
  }
  async skip(n) {
    if (this.eof()) return;
    if (!this.started) await this._init();
    if (this.cursor + n > this.buffer.length) {
      this._trim();
      await this._accumulate(n);
    }
    this._moveCursor(n);
  }
  async undo() {
    this.cursor = this.undoCursor;
  }
  async _next() {
    this.started = true;
    let { done, value } = await this.stream.next();
    if (done) {
      this._ended = true;
      if (!value) return Buffer.alloc(0);
    }
    if (value) {
      value = Buffer.from(value);
    }
    return value;
  }
  _trim() {
    this.buffer = this.buffer.slice(this.undoCursor);
    this.cursor -= this.undoCursor;
    this._discardedBytes += this.undoCursor;
    this.undoCursor = 0;
  }
  _moveCursor(n) {
    this.undoCursor = this.cursor;
    this.cursor += n;
    if (this.cursor > this.buffer.length) {
      this.cursor = this.buffer.length;
    }
  }
  async _accumulate(n) {
    if (this._ended) return;
    const buffers = [this.buffer];
    while (this.cursor + n > lengthBuffers(buffers)) {
      const nextbuffer = await this._next();
      if (this._ended) break;
      buffers.push(nextbuffer);
    }
    this.buffer = Buffer.concat(buffers);
  }
  async _loadnext() {
    this._discardedBytes += this.buffer.length;
    this.undoCursor = 0;
    this.cursor = 0;
    this.buffer = await this._next();
  }
  async _init() {
    this.buffer = await this._next();
  }
};
function lengthBuffers(buffers) {
  return buffers.reduce((acc, buffer) => acc + buffer.length, 0);
}
async function listpack(stream, onData) {
  const reader = new StreamReader(stream);
  let PACK = await reader.read(4);
  PACK = PACK.toString("utf8");
  if (PACK !== "PACK") {
    throw new InternalError(`Invalid PACK header '${PACK}'`);
  }
  let version = await reader.read(4);
  version = version.readUInt32BE(0);
  if (version !== 2) {
    throw new InternalError(`Invalid packfile version: ${version}`);
  }
  let numObjects = await reader.read(4);
  numObjects = numObjects.readUInt32BE(0);
  if (numObjects < 1) return;
  while (!reader.eof() && numObjects--) {
    const offset = reader.tell();
    const { type, length, ofs, reference } = await parseHeader(reader);
    const inflator = new import_pako.default.Inflate();
    while (!inflator.result) {
      const chunk = await reader.chunk();
      if (!chunk) break;
      inflator.push(chunk, false);
      if (inflator.err) {
        throw new InternalError(`Pako error: ${inflator.msg}`);
      }
      if (inflator.result) {
        if (inflator.result.length !== length) {
          throw new InternalError(
            `Inflated object size is different from that stated in packfile.`
          );
        }
        await reader.undo();
        await reader.read(chunk.length - inflator.strm.avail_in);
        const end = reader.tell();
        await onData({
          data: inflator.result,
          type,
          num: numObjects,
          offset,
          end,
          reference,
          ofs
        });
      }
    }
  }
}
async function parseHeader(reader) {
  let byte = await reader.byte();
  const type = byte >> 4 & 7;
  let length = byte & 15;
  if (byte & 128) {
    let shift = 4;
    do {
      byte = await reader.byte();
      length |= (byte & 127) << shift;
      shift += 7;
    } while (byte & 128);
  }
  let ofs;
  let reference;
  if (type === 6) {
    let shift = 0;
    ofs = 0;
    const bytes = [];
    do {
      byte = await reader.byte();
      ofs |= (byte & 127) << shift;
      shift += 7;
      bytes.push(byte);
    } while (byte & 128);
    reference = Buffer.from(bytes);
  }
  if (type === 7) {
    const buf = await reader.read(20);
    reference = buf;
  }
  return { type, length, ofs, reference };
}
var DecompressionError = class _DecompressionError extends BaseError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(`Invalid compressed buffer: ${message}`);
    this.code = this.name = _DecompressionError.code;
    this.data = { message };
  }
};
DecompressionError.code = "DecompressionError";
async function nativeInflate(buffer) {
  const ds = new DecompressionStream("deflate");
  const d = new Blob([buffer]).stream().pipeThrough(ds);
  try {
    return new Uint8Array(await new Response(d).arrayBuffer());
  } catch (err) {
    if (err && err.name === "TypeError" && err.message === "") {
      throw new DecompressionError("decompression failed");
    }
    throw err;
  }
}
var supportsDecompressionStream = false;
async function inflate(buffer) {
  if (supportsDecompressionStream === null) {
    supportsDecompressionStream = testDecompressionStream();
  }
  try {
    return supportsDecompressionStream ? await nativeInflate(buffer) : import_pako.default.inflate(buffer);
  } catch (err) {
    if (typeof err === "string") {
      throw new DecompressionError(err);
    }
    throw err;
  }
}
function testDecompressionStream() {
  try {
    const ds = new DecompressionStream("deflate");
    if (ds) return true;
  } catch (_) {
  }
  return false;
}
function decodeVarInt(reader) {
  const bytes = [];
  let byte = 0;
  let multibyte = 0;
  do {
    byte = reader.readUInt8();
    const lastSeven = byte & 127;
    bytes.push(lastSeven);
    multibyte = byte & 128;
  } while (multibyte);
  return bytes.reduce((a, b) => a + 1 << 7 | b, -1);
}
function otherVarIntDecode(reader, startWith) {
  let result = startWith;
  let shift = 4;
  let byte = null;
  do {
    byte = reader.readUInt8();
    result |= (byte & 127) << shift;
    shift += 7;
  } while (byte & 128);
  return result;
}
var GitPackIndex = class _GitPackIndex {
  constructor(stuff) {
    Object.assign(this, stuff);
    this.offsetCache = {};
  }
  static async fromIdx({ idx, getExternalRefDelta }) {
    const reader = new BufferCursor(idx);
    const magic = reader.slice(4).toString("hex");
    if (magic !== "ff744f63") {
      return;
    }
    const version = reader.readUInt32BE();
    if (version !== 2) {
      throw new InternalError(
        `Unable to read version ${version} packfile IDX. (Only version 2 supported)`
      );
    }
    if (idx.byteLength > 2048 * 1024 * 1024) {
      throw new InternalError(
        `To keep implementation simple, I haven't implemented the layer 5 feature needed to support packfiles > 2GB in size.`
      );
    }
    reader.seek(reader.tell() + 4 * 255);
    const size = reader.readUInt32BE();
    const hashes = [];
    for (let i = 0; i < size; i++) {
      const hash = reader.slice(20).toString("hex");
      hashes[i] = hash;
    }
    reader.seek(reader.tell() + 4 * size);
    const offsets = /* @__PURE__ */ new Map();
    for (let i = 0; i < size; i++) {
      offsets.set(hashes[i], reader.readUInt32BE());
    }
    const packfileSha = reader.slice(20).toString("hex");
    return new _GitPackIndex({
      hashes,
      crcs: {},
      offsets,
      packfileSha,
      getExternalRefDelta
    });
  }
  static async fromPack({ pack, getExternalRefDelta, onProgress }) {
    const listpackTypes = {
      1: "commit",
      2: "tree",
      3: "blob",
      4: "tag",
      6: "ofs-delta",
      7: "ref-delta"
    };
    const offsetToObject = {};
    const packfileSha = pack.slice(-20).toString("hex");
    const hashes = [];
    const crcs = {};
    const offsets = /* @__PURE__ */ new Map();
    let totalObjectCount = null;
    let lastPercent = null;
    await listpack([pack], async ({ data, type, reference, offset, num }) => {
      if (totalObjectCount === null) totalObjectCount = num;
      const percent = Math.floor(
        (totalObjectCount - num) * 100 / totalObjectCount
      );
      if (percent !== lastPercent) {
        if (onProgress) {
          await onProgress({
            phase: "Receiving objects",
            loaded: totalObjectCount - num,
            total: totalObjectCount
          });
        }
      }
      lastPercent = percent;
      type = listpackTypes[type];
      if (["commit", "tree", "blob", "tag"].includes(type)) {
        offsetToObject[offset] = {
          type,
          offset
        };
      } else if (type === "ofs-delta") {
        offsetToObject[offset] = {
          type,
          offset
        };
      } else if (type === "ref-delta") {
        offsetToObject[offset] = {
          type,
          offset
        };
      }
    });
    const offsetArray = Object.keys(offsetToObject).map(Number);
    for (const [i, start] of offsetArray.entries()) {
      const end = i + 1 === offsetArray.length ? pack.byteLength - 20 : offsetArray[i + 1];
      const o = offsetToObject[start];
      const crc = import_crc_32.default.buf(pack.slice(start, end)) >>> 0;
      o.end = end;
      o.crc = crc;
    }
    const p = new _GitPackIndex({
      pack: Promise.resolve(pack),
      packfileSha,
      crcs,
      hashes,
      offsets,
      getExternalRefDelta
    });
    lastPercent = null;
    let count2 = 0;
    const objectsByDepth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let offset in offsetToObject) {
      offset = Number(offset);
      const percent = Math.floor(count2 * 100 / totalObjectCount);
      if (percent !== lastPercent) {
        if (onProgress) {
          await onProgress({
            phase: "Resolving deltas",
            loaded: count2,
            total: totalObjectCount
          });
        }
      }
      count2++;
      lastPercent = percent;
      const o = offsetToObject[offset];
      if (o.oid) continue;
      try {
        p.readDepth = 0;
        p.externalReadDepth = 0;
        const { type, object: object2 } = await p.readSlice({ start: offset });
        objectsByDepth[p.readDepth] += 1;
        const oid = await shasum(GitObject.wrap({ type, object: object2 }));
        o.oid = oid;
        hashes.push(oid);
        offsets.set(oid, offset);
        crcs[oid] = o.crc;
      } catch (err) {
        continue;
      }
    }
    hashes.sort();
    return p;
  }
  async toBuffer() {
    const buffers = [];
    const write = (str, encoding) => {
      buffers.push(Buffer.from(str, encoding));
    };
    write("ff744f63", "hex");
    write("00000002", "hex");
    const fanoutBuffer = new BufferCursor(Buffer.alloc(256 * 4));
    for (let i = 0; i < 256; i++) {
      let count2 = 0;
      for (const hash of this.hashes) {
        if (parseInt(hash.slice(0, 2), 16) <= i) count2++;
      }
      fanoutBuffer.writeUInt32BE(count2);
    }
    buffers.push(fanoutBuffer.buffer);
    for (const hash of this.hashes) {
      write(hash, "hex");
    }
    const crcsBuffer = new BufferCursor(Buffer.alloc(this.hashes.length * 4));
    for (const hash of this.hashes) {
      crcsBuffer.writeUInt32BE(this.crcs[hash]);
    }
    buffers.push(crcsBuffer.buffer);
    const offsetsBuffer = new BufferCursor(Buffer.alloc(this.hashes.length * 4));
    for (const hash of this.hashes) {
      offsetsBuffer.writeUInt32BE(this.offsets.get(hash));
    }
    buffers.push(offsetsBuffer.buffer);
    write(this.packfileSha, "hex");
    const totalBuffer = Buffer.concat(buffers);
    const sha = await shasum(totalBuffer);
    const shaBuffer = Buffer.alloc(20);
    shaBuffer.write(sha, "hex");
    return Buffer.concat([totalBuffer, shaBuffer]);
  }
  async load({ pack }) {
    this.pack = pack;
  }
  async unload() {
    this.pack = null;
  }
  async read({ oid }) {
    if (!this.offsets.get(oid)) {
      if (this.getExternalRefDelta) {
        this.externalReadDepth++;
        return this.getExternalRefDelta(oid);
      } else {
        throw new InternalError(`Could not read object ${oid} from packfile`);
      }
    }
    const start = this.offsets.get(oid);
    return this.readSlice({ start });
  }
  async readSlice({ start }) {
    if (this.offsetCache[start]) {
      return Object.assign({}, this.offsetCache[start]);
    }
    this.readDepth++;
    const types = {
      16: "commit",
      32: "tree",
      48: "blob",
      64: "tag",
      96: "ofs_delta",
      112: "ref_delta"
    };
    const pack = await this.pack;
    if (!pack) {
      throw new InternalError(
        "Could not read packfile data. The packfile may be missing, corrupted, or too large to read into memory."
      );
    }
    const raw = pack.slice(start);
    const reader = new BufferCursor(raw);
    const byte = reader.readUInt8();
    const btype = byte & 112;
    let type = types[btype];
    if (type === void 0) {
      throw new InternalError("Unrecognized type: 0b" + btype.toString(2));
    }
    const lastFour = byte & 15;
    let length = lastFour;
    const multibyte = byte & 128;
    if (multibyte) {
      length = otherVarIntDecode(reader, lastFour);
    }
    let base = null;
    let object2 = null;
    if (type === "ofs_delta") {
      const offset = decodeVarInt(reader);
      const baseOffset = start - offset;
      ({ object: base, type } = await this.readSlice({ start: baseOffset }));
    }
    if (type === "ref_delta") {
      const oid = reader.slice(20).toString("hex");
      ({ object: base, type } = await this.read({ oid }));
    }
    const buffer = raw.slice(reader.tell());
    object2 = Buffer.from(await inflate(buffer));
    if (object2.byteLength !== length) {
      throw new InternalError(
        `Packfile told us object would have length ${length} but it had length ${object2.byteLength}`
      );
    }
    if (base) {
      object2 = Buffer.from(applyDelta(object2, base));
    }
    if (this.readDepth > 3) {
      this.offsetCache[start] = { type, object: object2 };
    }
    return { type, format: "content", object: object2 };
  }
};
var PackfileCache = Symbol("PackfileCache");
async function loadPackIndex({
  fs: fs2,
  filename,
  getExternalRefDelta,
  emitter,
  emitterPrefix
}) {
  const idx = await fs2.read(filename);
  return GitPackIndex.fromIdx({ idx, getExternalRefDelta });
}
function readPackIndex({
  fs: fs2,
  cache,
  filename,
  getExternalRefDelta,
  emitter,
  emitterPrefix
}) {
  if (!cache[PackfileCache]) cache[PackfileCache] = /* @__PURE__ */ new Map();
  let p = cache[PackfileCache].get(filename);
  if (!p) {
    p = loadPackIndex({
      fs: fs2,
      filename,
      getExternalRefDelta,
      emitter,
      emitterPrefix
    });
    cache[PackfileCache].set(filename, p);
  }
  return p;
}
async function shasumRange(buffer, { start = 0, end = buffer.length } = {}) {
  return shasum(buffer.subarray(start, end));
}
async function readObjectPacked({
  fs: fs2,
  cache,
  gitdir,
  oid,
  format = "content",
  getExternalRefDelta
}) {
  let list = await fs2.readdir(join(gitdir, "objects/pack"));
  list = list.filter((x) => x.endsWith(".idx"));
  for (const filename of list) {
    const indexFile = `${gitdir}/objects/pack/${filename}`;
    const p = await readPackIndex({
      fs: fs2,
      cache,
      filename: indexFile,
      getExternalRefDelta
    });
    if (p.error) throw new InternalError(p.error);
    if (p.offsets.has(oid)) {
      const packFile = indexFile.replace(/idx$/, "pack");
      if (!p.pack) {
        p.pack = fs2.read(packFile);
      }
      const pack = await p.pack;
      if (!pack) {
        p.pack = null;
        throw new InternalError(
          `Could not read packfile at ${packFile}. The file may be missing, corrupted, or too large to read into memory.`
        );
      }
      if (!p._checksumVerification) {
        p._checksumVerification = verifyPackfile(pack, p.packfileSha);
      }
      await p._checksumVerification;
      const result = await p.read({ oid, getExternalRefDelta });
      result.format = "content";
      result.source = `objects/pack/${filename.replace(/idx$/, "pack")}`;
      return result;
    }
  }
  return null;
}
async function verifyPackfile(pack, expectedShaFromIndex) {
  const packTrailer = pack.subarray(-20);
  const packTrailerSha = Array.from(packTrailer).map((b) => b.toString(16).padStart(2, "0")).join("");
  if (packTrailerSha !== expectedShaFromIndex) {
    throw new InternalError(
      `Packfile trailer mismatch: expected ${expectedShaFromIndex}, got ${packTrailerSha}. The packfile may be corrupted.`
    );
  }
  const actualPayloadSha = await shasumRange(pack, {
    start: 0,
    end: pack.length - 20
  });
  if (actualPayloadSha !== expectedShaFromIndex) {
    throw new InternalError(
      `Packfile payload corrupted: calculated ${actualPayloadSha} but expected ${expectedShaFromIndex}. The packfile may have been tampered with.`
    );
  }
}
async function _readObject({
  fs: fs2,
  cache,
  gitdir,
  oid,
  format = "content"
}) {
  if (!["deflated", "wrapped", "content"].includes(format)) {
    throw new InternalError(`invalid requested format "${format}"`);
  }
  const getExternalRefDelta = (oid2) => _readObject({ fs: fs2, cache, gitdir, oid: oid2 });
  let result;
  if (oid === "4b825dc642cb6eb9a060e54bf8d69288fbee4904") {
    result = { format: "wrapped", object: Buffer.from(`tree 0\0`) };
  }
  if (!result) {
    result = await readObjectLoose({ fs: fs2, gitdir, oid });
  }
  if (!result) {
    result = await readObjectPacked({
      fs: fs2,
      cache,
      gitdir,
      oid,
      getExternalRefDelta
    });
    if (!result) {
      throw new NotFoundError(oid);
    }
    return result;
  }
  if (format === "deflated") {
    return result;
  }
  if (result.format === "deflated") {
    result.object = Buffer.from(await inflate(result.object));
    result.format = "wrapped";
  }
  if (format === "wrapped") {
    return result;
  }
  const sha = await shasum(result.object);
  if (sha !== oid) {
    throw new InternalError(
      `SHA check failed! Expected ${oid}, computed ${sha}`
    );
  }
  const { object: object2, type } = GitObject.unwrap(result.object);
  result.type = type;
  result.object = object2;
  result.format = "content";
  return result;
}
var AlreadyExistsError = class _AlreadyExistsError extends BaseError {
  /**
   * @param {'note'|'remote'|'tag'|'branch'} noun
   * @param {string} where
   * @param {boolean} canForce
   */
  constructor(noun, where, canForce = true) {
    super(
      `Failed to create ${noun} at ${where} because it already exists.${canForce ? ` (Hint: use 'force: true' parameter to overwrite existing ${noun}.)` : ""}`
    );
    this.code = this.name = _AlreadyExistsError.code;
    this.data = { noun, where, canForce };
  }
};
AlreadyExistsError.code = "AlreadyExistsError";
var AmbiguousError = class _AmbiguousError extends BaseError {
  /**
   * @param {'oids'|'refs'} nouns
   * @param {string} short
   * @param {string[]} matches
   */
  constructor(nouns, short, matches) {
    super(
      `Found multiple ${nouns} matching "${short}" (${matches.join(
        ", "
      )}). Use a longer abbreviation length to disambiguate them.`
    );
    this.code = this.name = _AmbiguousError.code;
    this.data = { nouns, short, matches };
  }
};
AmbiguousError.code = "AmbiguousError";
var CheckoutConflictError = class _CheckoutConflictError extends BaseError {
  /**
   * @param {string[]} filepaths
   */
  constructor(filepaths) {
    super(
      `Your local changes to the following files would be overwritten by checkout: ${filepaths.join(
        ", "
      )}`
    );
    this.code = this.name = _CheckoutConflictError.code;
    this.data = { filepaths };
  }
};
CheckoutConflictError.code = "CheckoutConflictError";
var CherryPickLocalChangesError = class _CherryPickLocalChangesError extends BaseError {
  /**
   * @param {string[]} filepaths
   */
  constructor(filepaths) {
    super(
      `Your local changes to the following files would be overwritten by cherry-pick: ${filepaths.join(
        ", "
      )}`
    );
    this.code = this.name = _CherryPickLocalChangesError.code;
    this.data = { filepaths };
  }
};
CherryPickLocalChangesError.code = "CherryPickLocalChangesError";
var CherryPickMergeCommitError = class _CherryPickMergeCommitError extends BaseError {
  /**
   * @param {string} oid
   * @param {number} parentCount
   */
  constructor(oid, parentCount) {
    super(
      `Cannot cherry-pick merge commit ${oid}. Merge commits have ${parentCount} parents and require specifying which parent to use as the base.`
    );
    this.code = this.name = _CherryPickMergeCommitError.code;
    this.data = { oid, parentCount };
  }
};
CherryPickMergeCommitError.code = "CherryPickMergeCommitError";
var CherryPickRootCommitError = class _CherryPickRootCommitError extends BaseError {
  /**
   * @param {string} oid
   */
  constructor(oid) {
    super(
      `Cannot cherry-pick root commit ${oid}. Root commits have no parents.`
    );
    this.code = this.name = _CherryPickRootCommitError.code;
    this.data = { oid };
  }
};
CherryPickRootCommitError.code = "CherryPickRootCommitError";
var CommitNotFetchedError = class _CommitNotFetchedError extends BaseError {
  /**
   * @param {string} ref
   * @param {string} oid
   */
  constructor(ref, oid) {
    super(
      `Failed to checkout "${ref}" because commit ${oid} is not available locally. Do a git fetch to make the branch available locally.`
    );
    this.code = this.name = _CommitNotFetchedError.code;
    this.data = { ref, oid };
  }
};
CommitNotFetchedError.code = "CommitNotFetchedError";
var EmptyCommitError = class _EmptyCommitError extends BaseError {
  constructor() {
    super("Cannot create an empty commit when disallowEmpty is true.");
    this.code = this.name = _EmptyCommitError.code;
    this.data = {};
  }
};
EmptyCommitError.code = "EmptyCommitError";
var EmptyServerResponseError = class _EmptyServerResponseError extends BaseError {
  constructor() {
    super(`Empty response from git server.`);
    this.code = this.name = _EmptyServerResponseError.code;
    this.data = {};
  }
};
EmptyServerResponseError.code = "EmptyServerResponseError";
var FastForwardError = class _FastForwardError extends BaseError {
  constructor() {
    super(`A simple fast-forward merge was not possible.`);
    this.code = this.name = _FastForwardError.code;
    this.data = {};
  }
};
FastForwardError.code = "FastForwardError";
var GitPushError = class _GitPushError extends BaseError {
  /**
   * @param {string} prettyDetails
   * @param {PushResult} result
   */
  constructor(prettyDetails, result) {
    super(`One or more branches were not updated: ${prettyDetails}`);
    this.code = this.name = _GitPushError.code;
    this.data = { prettyDetails, result };
  }
};
GitPushError.code = "GitPushError";
var HttpError = class _HttpError extends BaseError {
  /**
   * @param {number} statusCode
   * @param {string} statusMessage
   * @param {string} response
   */
  constructor(statusCode, statusMessage, response) {
    super(`HTTP Error: ${statusCode} ${statusMessage}`);
    this.code = this.name = _HttpError.code;
    this.data = { statusCode, statusMessage, response };
  }
};
HttpError.code = "HttpError";
var InvalidFilepathError = class _InvalidFilepathError extends BaseError {
  /**
   * @param {'leading-slash'|'trailing-slash'|'directory'} [reason]
   */
  constructor(reason) {
    let message = "invalid filepath";
    if (reason === "leading-slash" || reason === "trailing-slash") {
      message = `"filepath" parameter should not include leading or trailing directory separators because these can cause problems on some platforms.`;
    } else if (reason === "directory") {
      message = `"filepath" should not be a directory.`;
    }
    super(message);
    this.code = this.name = _InvalidFilepathError.code;
    this.data = { reason };
  }
};
InvalidFilepathError.code = "InvalidFilepathError";
var MaxDepthError = class _MaxDepthError extends BaseError {
  /**
   * @param {number} depth
   */
  constructor(depth) {
    super(`Maximum search depth of ${depth} exceeded.`);
    this.code = this.name = _MaxDepthError.code;
    this.data = { depth };
  }
};
MaxDepthError.code = "MaxDepthError";
var MergeNotSupportedError = class _MergeNotSupportedError extends BaseError {
  constructor() {
    super(`Merges with conflicts are not supported yet.`);
    this.code = this.name = _MergeNotSupportedError.code;
    this.data = {};
  }
};
MergeNotSupportedError.code = "MergeNotSupportedError";
var MergeConflictError = class _MergeConflictError extends BaseError {
  /**
   * @param {Array<string>} filepaths
   * @param {Array<string>} bothModified
   * @param {Array<string>} deleteByUs
   * @param {Array<string>} deleteByTheirs
   */
  constructor(filepaths, bothModified, deleteByUs, deleteByTheirs) {
    super(
      `Automatic merge failed with one or more merge conflicts in the following files: ${filepaths.toString()}. Fix conflicts then commit the result.`
    );
    this.code = this.name = _MergeConflictError.code;
    this.data = { filepaths, bothModified, deleteByUs, deleteByTheirs };
  }
};
MergeConflictError.code = "MergeConflictError";
var MissingNameError = class _MissingNameError extends BaseError {
  /**
   * @param {'author'|'committer'|'tagger'} role
   */
  constructor(role) {
    super(
      `No name was provided for ${role} in the argument or in the .git/config file.`
    );
    this.code = this.name = _MissingNameError.code;
    this.data = { role };
  }
};
MissingNameError.code = "MissingNameError";
var MissingParameterError = class _MissingParameterError extends BaseError {
  /**
   * @param {string} parameter
   */
  constructor(parameter) {
    super(
      `The function requires a "${parameter}" parameter but none was provided.`
    );
    this.code = this.name = _MissingParameterError.code;
    this.data = { parameter };
  }
};
MissingParameterError.code = "MissingParameterError";
var MultipleGitError = class _MultipleGitError extends BaseError {
  /**
   * @param {Error[]} errors
   * @param {string} message
   */
  constructor(errors) {
    super(
      `There are multiple errors that were thrown by the method. Please refer to the "errors" property to see more`
    );
    this.code = this.name = _MultipleGitError.code;
    this.data = { errors };
    this.errors = errors;
  }
};
MultipleGitError.code = "MultipleGitError";
var ParseError = class _ParseError extends BaseError {
  /**
   * @param {string} expected
   * @param {string} actual
   */
  constructor(expected, actual) {
    super(`Expected "${expected}" but received "${actual}".`);
    this.code = this.name = _ParseError.code;
    this.data = { expected, actual };
  }
};
ParseError.code = "ParseError";
var PushRejectedError = class _PushRejectedError extends BaseError {
  /**
   * @param {'not-fast-forward'|'tag-exists'} reason
   */
  constructor(reason) {
    let message = "";
    if (reason === "not-fast-forward") {
      message = " because it was not a simple fast-forward";
    } else if (reason === "tag-exists") {
      message = " because tag already exists";
    }
    super(`Push rejected${message}. Use "force: true" to override.`);
    this.code = this.name = _PushRejectedError.code;
    this.data = { reason };
  }
};
PushRejectedError.code = "PushRejectedError";
var RemoteCapabilityError = class _RemoteCapabilityError extends BaseError {
  /**
   * @param {'shallow'|'deepen-since'|'deepen-not'|'deepen-relative'} capability
   * @param {'depth'|'since'|'exclude'|'relative'} parameter
   */
  constructor(capability, parameter) {
    super(
      `Remote does not support the "${capability}" so the "${parameter}" parameter cannot be used.`
    );
    this.code = this.name = _RemoteCapabilityError.code;
    this.data = { capability, parameter };
  }
};
RemoteCapabilityError.code = "RemoteCapabilityError";
var SmartHttpError = class _SmartHttpError extends BaseError {
  /**
   * @param {string} preview
   * @param {string} response
   */
  constructor(preview, response) {
    super(
      `Remote did not reply using the "smart" HTTP protocol. Expected "001e# service=git-upload-pack" but received: ${preview}`
    );
    this.code = this.name = _SmartHttpError.code;
    this.data = { preview, response };
  }
};
SmartHttpError.code = "SmartHttpError";
var UnknownTransportError = class _UnknownTransportError extends BaseError {
  /**
   * @param {string} url
   * @param {string} transport
   * @param {string} [suggestion]
   */
  constructor(url, transport, suggestion) {
    super(
      `Git remote "${url}" uses an unrecognized transport protocol: "${transport}"`
    );
    this.code = this.name = _UnknownTransportError.code;
    this.data = { url, transport, suggestion };
  }
};
UnknownTransportError.code = "UnknownTransportError";
var UrlParseError = class _UrlParseError extends BaseError {
  /**
   * @param {string} url
   */
  constructor(url) {
    super(`Cannot parse remote URL: "${url}"`);
    this.code = this.name = _UrlParseError.code;
    this.data = { url };
  }
};
UrlParseError.code = "UrlParseError";
var UserCanceledError = class _UserCanceledError extends BaseError {
  constructor() {
    super(`The operation was canceled.`);
    this.code = this.name = _UserCanceledError.code;
    this.data = {};
  }
};
UserCanceledError.code = "UserCanceledError";
var IndexResetError = class _IndexResetError extends BaseError {
  /**
   * @param {Array<string>} filepaths
   */
  constructor(filepath) {
    super(
      `Could not merge index: Entry for '${filepath}' is not up to date. Either reset the index entry to HEAD, or stage your unstaged changes.`
    );
    this.code = this.name = _IndexResetError.code;
    this.data = { filepath };
  }
};
IndexResetError.code = "IndexResetError";
var NoCommitError = class _NoCommitError extends BaseError {
  /**
   * @param {string} ref
   */
  constructor(ref) {
    super(
      `"${ref}" does not point to any commit. You're maybe working on a repository with no commits yet. `
    );
    this.code = this.name = _NoCommitError.code;
    this.data = { ref };
  }
};
NoCommitError.code = "NoCommitError";
function formatAuthor({ name, email, timestamp, timezoneOffset }) {
  timezoneOffset = formatTimezoneOffset(timezoneOffset);
  return `${name} <${email}> ${timestamp} ${timezoneOffset}`;
}
function formatTimezoneOffset(minutes) {
  const sign = simpleSign(negateExceptForZero(minutes));
  minutes = Math.abs(minutes);
  const hours = Math.floor(minutes / 60);
  minutes -= hours * 60;
  let strHours = String(hours);
  let strMinutes = String(minutes);
  if (strHours.length < 2) strHours = "0" + strHours;
  if (strMinutes.length < 2) strMinutes = "0" + strMinutes;
  return (sign === -1 ? "-" : "+") + strHours + strMinutes;
}
function simpleSign(n) {
  return Math.sign(n) || (Object.is(n, -0) ? -1 : 1);
}
function negateExceptForZero(n) {
  return n === 0 ? n : -n;
}
function normalizeNewlines(str) {
  str = str.replace(/\r/g, "");
  str = str.replace(/^\n+/, "");
  str = str.replace(/\n+$/, "") + "\n";
  return str;
}
function parseAuthor(author) {
  const [, name, email, timestamp, offset] = author.match(
    /^(.*) <(.*)> (.*) (.*)$/
  );
  return {
    name,
    email,
    timestamp: Number(timestamp),
    timezoneOffset: parseTimezoneOffset(offset)
  };
}
function parseTimezoneOffset(offset) {
  let [, sign, hours, minutes] = offset.match(/(\+|-)(\d\d)(\d\d)/);
  minutes = (sign === "+" ? 1 : -1) * (Number(hours) * 60 + Number(minutes));
  return negateExceptForZero$1(minutes);
}
function negateExceptForZero$1(n) {
  return n === 0 ? n : -n;
}
var GitAnnotatedTag = class _GitAnnotatedTag {
  constructor(tag) {
    if (typeof tag === "string") {
      this._tag = tag;
    } else if (Buffer.isBuffer(tag)) {
      this._tag = tag.toString("utf8");
    } else if (typeof tag === "object") {
      this._tag = _GitAnnotatedTag.render(tag);
    } else {
      throw new InternalError(
        "invalid type passed to GitAnnotatedTag constructor"
      );
    }
  }
  static from(tag) {
    return new _GitAnnotatedTag(tag);
  }
  static render(obj) {
    return `object ${obj.object}
type ${obj.type}
tag ${obj.tag}
tagger ${formatAuthor(obj.tagger)}

${obj.message}
${obj.gpgsig ? obj.gpgsig : ""}`;
  }
  justHeaders() {
    return this._tag.slice(0, this._tag.indexOf("\n\n"));
  }
  message() {
    const tag = this.withoutSignature();
    return tag.slice(tag.indexOf("\n\n") + 2);
  }
  parse() {
    return Object.assign(this.headers(), {
      message: this.message(),
      gpgsig: this.gpgsig()
    });
  }
  render() {
    return this._tag;
  }
  headers() {
    const headers = this.justHeaders().split("\n");
    const hs = [];
    for (const h of headers) {
      if (h[0] === " ") {
        hs[hs.length - 1] += "\n" + h.slice(1);
      } else {
        hs.push(h);
      }
    }
    const obj = {};
    for (const h of hs) {
      const key = h.slice(0, h.indexOf(" "));
      const value = h.slice(h.indexOf(" ") + 1);
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }
    if (obj.tagger) {
      obj.tagger = parseAuthor(obj.tagger);
    }
    if (obj.committer) {
      obj.committer = parseAuthor(obj.committer);
    }
    return obj;
  }
  withoutSignature() {
    const tag = normalizeNewlines(this._tag);
    if (tag.indexOf("\n-----BEGIN PGP SIGNATURE-----") === -1) return tag;
    return tag.slice(0, tag.lastIndexOf("\n-----BEGIN PGP SIGNATURE-----"));
  }
  gpgsig() {
    if (this._tag.indexOf("\n-----BEGIN PGP SIGNATURE-----") === -1) return;
    const signature = this._tag.slice(
      this._tag.indexOf("-----BEGIN PGP SIGNATURE-----"),
      this._tag.indexOf("-----END PGP SIGNATURE-----") + "-----END PGP SIGNATURE-----".length
    );
    return normalizeNewlines(signature);
  }
  payload() {
    return this.withoutSignature() + "\n";
  }
  toObject() {
    return Buffer.from(this._tag, "utf8");
  }
  static async sign(tag, sign, secretKey) {
    const payload = tag.payload();
    let { signature } = await sign({ payload, secretKey });
    signature = normalizeNewlines(signature);
    const signedTag = payload + signature;
    return _GitAnnotatedTag.from(signedTag);
  }
};
function indent(str) {
  return str.trim().split("\n").map((x) => " " + x).join("\n") + "\n";
}
function outdent(str) {
  return str.split("\n").map((x) => x.replace(/^ /, "")).join("\n");
}
var GitCommit = class _GitCommit {
  constructor(commit) {
    if (typeof commit === "string") {
      this._commit = commit;
    } else if (Buffer.isBuffer(commit)) {
      this._commit = commit.toString("utf8");
    } else if (typeof commit === "object") {
      this._commit = _GitCommit.render(commit);
    } else {
      throw new InternalError("invalid type passed to GitCommit constructor");
    }
  }
  static fromPayloadSignature({ payload, signature }) {
    const headers = _GitCommit.justHeaders(payload);
    const message = _GitCommit.justMessage(payload);
    const commit = normalizeNewlines(
      headers + "\ngpgsig" + indent(signature) + "\n" + message
    );
    return new _GitCommit(commit);
  }
  static from(commit) {
    return new _GitCommit(commit);
  }
  toObject() {
    return Buffer.from(this._commit, "utf8");
  }
  // Todo: allow setting the headers and message
  headers() {
    return this.parseHeaders();
  }
  // Todo: allow setting the headers and message
  message() {
    return _GitCommit.justMessage(this._commit);
  }
  parse() {
    return Object.assign({ message: this.message() }, this.headers());
  }
  static justMessage(commit) {
    return normalizeNewlines(commit.slice(commit.indexOf("\n\n") + 2));
  }
  static justHeaders(commit) {
    return commit.slice(0, commit.indexOf("\n\n"));
  }
  parseHeaders() {
    const headers = _GitCommit.justHeaders(this._commit).split("\n");
    const hs = [];
    for (const h of headers) {
      if (h[0] === " ") {
        hs[hs.length - 1] += "\n" + h.slice(1);
      } else {
        hs.push(h);
      }
    }
    const obj = {
      parent: []
    };
    for (const h of hs) {
      const key = h.slice(0, h.indexOf(" "));
      const value = h.slice(h.indexOf(" ") + 1);
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }
    if (obj.author) {
      obj.author = parseAuthor(obj.author);
    }
    if (obj.committer) {
      obj.committer = parseAuthor(obj.committer);
    }
    return obj;
  }
  static renderHeaders(obj) {
    let headers = "";
    if (obj.tree) {
      headers += `tree ${obj.tree}
`;
    } else {
      headers += `tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904
`;
    }
    if (obj.parent) {
      if (obj.parent.length === void 0) {
        throw new InternalError(`commit 'parent' property should be an array`);
      }
      for (const p of obj.parent) {
        headers += `parent ${p}
`;
      }
    }
    const author = obj.author;
    headers += `author ${formatAuthor(author)}
`;
    const committer = obj.committer || obj.author;
    headers += `committer ${formatAuthor(committer)}
`;
    if (obj.gpgsig) {
      headers += "gpgsig" + indent(obj.gpgsig);
    }
    return headers;
  }
  static render(obj) {
    return _GitCommit.renderHeaders(obj) + "\n" + normalizeNewlines(obj.message);
  }
  render() {
    return this._commit;
  }
  withoutSignature() {
    const commit = normalizeNewlines(this._commit);
    if (commit.indexOf("\ngpgsig") === -1) return commit;
    const headers = commit.slice(0, commit.indexOf("\ngpgsig"));
    const message = commit.slice(
      commit.indexOf("-----END PGP SIGNATURE-----\n") + "-----END PGP SIGNATURE-----\n".length
    );
    return normalizeNewlines(headers + "\n" + message);
  }
  isolateSignature() {
    const signature = this._commit.slice(
      this._commit.indexOf("-----BEGIN PGP SIGNATURE-----"),
      this._commit.indexOf("-----END PGP SIGNATURE-----") + "-----END PGP SIGNATURE-----".length
    );
    return outdent(signature);
  }
  static async sign(commit, sign, secretKey) {
    const payload = commit.withoutSignature();
    const message = _GitCommit.justMessage(commit._commit);
    let { signature } = await sign({ payload, secretKey });
    signature = normalizeNewlines(signature);
    const headers = _GitCommit.justHeaders(commit._commit);
    const signedCommit = headers + "\ngpgsig" + indent(signature) + "\n" + message;
    return _GitCommit.from(signedCommit);
  }
};
async function resolveTree({ fs: fs2, cache, gitdir, oid }) {
  if (oid === "4b825dc642cb6eb9a060e54bf8d69288fbee4904") {
    return { tree: GitTree.from([]), oid };
  }
  const { type, object: object2 } = await _readObject({ fs: fs2, cache, gitdir, oid });
  if (type === "tag") {
    oid = GitAnnotatedTag.from(object2).parse().object;
    return resolveTree({ fs: fs2, cache, gitdir, oid });
  }
  if (type === "commit") {
    oid = GitCommit.from(object2).parse().tree;
    return resolveTree({ fs: fs2, cache, gitdir, oid });
  }
  if (type !== "tree") {
    throw new ObjectTypeError(oid, type, "tree");
  }
  return { tree: GitTree.from(object2), oid };
}
var flat = typeof Array.prototype.flat === "undefined" ? (entries) => entries.reduce((acc, x) => acc.concat(x), []) : (entries) => entries.flat();
async function mkdirp(mkdir, filepath, retries = 10) {
  try {
    await mkdir(filepath);
  } catch (err) {
    if (err === null) return;
    if (err.code === "EEXIST") return;
    if (err.code !== "ENOENT") throw err;
    const parent = dirname(filepath);
    if (parent === "." || parent === "/" || parent === filepath) throw err;
    await mkdirp(mkdir, parent, retries);
    for (let attempt = 0; ; attempt++) {
      try {
        await mkdir(filepath);
        return;
      } catch (err2) {
        if (err2 === null || err2.code === "EEXIST") return;
        if (err2.code === "ENOENT" && attempt < retries) {
          await new Promise((resolve) => setTimeout(resolve, 0));
          continue;
        }
        throw err2;
      }
    }
  }
}
async function rmRecursive(fs2, filepath) {
  const entries = await fs2.readdir(filepath);
  if (entries == null) {
    await fs2.rm(filepath);
  } else if (entries.length) {
    await Promise.all(
      entries.map((entry) => {
        const subpath = join(filepath, entry);
        return fs2.lstat(subpath).then((stat) => {
          if (!stat) return;
          return stat.isDirectory() ? rmRecursive(fs2, subpath) : fs2.rm(subpath);
        });
      })
    ).then(() => fs2.rmdir(filepath));
  } else {
    await fs2.rmdir(filepath);
  }
}
function isPromiseLike(obj) {
  return isObject(obj) && isFunction(obj.then) && isFunction(obj.catch);
}
function isObject(obj) {
  return obj && typeof obj === "object";
}
function isFunction(obj) {
  return typeof obj === "function";
}
function isPromiseFs(fs2) {
  const test = (targetFs) => {
    try {
      return targetFs.readFile().catch((e) => e);
    } catch (e) {
      return e;
    }
  };
  return isPromiseLike(test(fs2));
}
var commands = [
  "readFile",
  "writeFile",
  "mkdir",
  "rmdir",
  "unlink",
  "stat",
  "lstat",
  "readdir",
  "readlink",
  "symlink"
];
function bindFs(target, fs2) {
  if (isPromiseFs(fs2)) {
    for (const command of commands) {
      target[`_${command}`] = fs2[command].bind(fs2);
    }
  } else {
    for (const command of commands) {
      target[`_${command}`] = (0, import_pify.default)(fs2[command].bind(fs2));
    }
  }
  if (isPromiseFs(fs2)) {
    if (fs2.cp) target._cp = fs2.cp.bind(fs2);
    if (fs2.rm) target._rm = fs2.rm.bind(fs2);
    else if (fs2.rmdir.length > 1) target._rm = fs2.rmdir.bind(fs2);
    else target._rm = rmRecursive.bind(null, target);
  } else {
    if (fs2.cp) target._cp = (0, import_pify.default)(fs2.cp.bind(fs2));
    if (fs2.rm) target._rm = (0, import_pify.default)(fs2.rm.bind(fs2));
    else if (fs2.rmdir.length > 2) target._rm = (0, import_pify.default)(fs2.rmdir.bind(fs2));
    else target._rm = rmRecursive.bind(null, target);
  }
}
var FileSystem = class {
  /**
   * Creates an instance of FileSystem.
   *
   * @param {Object} fs - A file system implementation to wrap.
   */
  constructor(fs2) {
    if (typeof fs2._original_unwrapped_fs !== "undefined") return fs2;
    const promises = Object.getOwnPropertyDescriptor(fs2, "promises");
    if (promises && promises.enumerable) {
      bindFs(this, fs2.promises);
    } else {
      bindFs(this, fs2);
    }
    this._original_unwrapped_fs = fs2;
  }
  /**
   * Return true if a file exists, false if it doesn't exist.
   * Rethrows errors that aren't related to file existence.
   *
   * @param {string} filepath - The path to the file.
   * @param {Object} [options] - Additional options.
   * @returns {Promise<boolean>} - `true` if the file exists, `false` otherwise.
   */
  async exists(filepath, options = {}) {
    try {
      await this._stat(filepath);
      return true;
    } catch (err) {
      if (err.code === "ENOENT" || err.code === "ENOTDIR" || (err.code || "").includes("ENS")) {
        return false;
      } else {
        console.log('Unhandled error in "FileSystem.exists()" function', err);
        throw err;
      }
    }
  }
  /**
   * Return the contents of a file if it exists, otherwise returns null.
   *
   * @param {string} filepath - The path to the file.
   * @param {Object} [options] - Options for reading the file.
   * @returns {Promise<Buffer|string|null>} - The file contents, or `null` if the file doesn't exist.
   */
  async read(filepath, options = {}) {
    try {
      let buffer = await this._readFile(filepath, options);
      if (options.autocrlf === "true") {
        try {
          buffer = new TextDecoder("utf8", { fatal: true }).decode(buffer);
          buffer = buffer.replace(/\r\n/g, "\n");
          buffer = new TextEncoder().encode(buffer);
        } catch (error) {
        }
      }
      if (typeof buffer !== "string") {
        buffer = Buffer.from(buffer);
      }
      return buffer;
    } catch (err) {
      return null;
    }
  }
  /**
   * Write a file (creating missing directories if need be) without throwing errors.
   *
   * @param {string} filepath - The path to the file.
   * @param {Buffer|Uint8Array|string} contents - The data to write.
   * @param {Object|string} [options] - Options for writing the file.
   * @returns {Promise<void>}
   */
  async write(filepath, contents, options = {}) {
    try {
      await this._writeFile(filepath, contents, options);
    } catch (err) {
      await this.mkdir(dirname(filepath));
      await this._writeFile(filepath, contents, options);
    }
  }
  /**
   * Make a directory (or series of nested directories) without throwing an error if it already exists.
   *
   * @param {string} filepath - The path to the directory.
   * @returns {Promise<void>}
   */
  async mkdir(filepath) {
    await mkdirp(this._mkdir, filepath);
  }
  /**
   * Delete a file without throwing an error if it is already deleted.
   *
   * @param {string} filepath - The path to the file.
   * @returns {Promise<void>}
   */
  async rm(filepath) {
    try {
      await this._unlink(filepath);
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
  }
  /**
   * Delete a directory without throwing an error if it is already deleted.
   *
   * @param {string} filepath - The path to the directory.
   * @param {Object} [opts] - Options for deleting the directory.
   * @returns {Promise<void>}
   */
  async rmdir(filepath, opts) {
    try {
      if (opts && opts.recursive) {
        await this._rm(filepath, opts);
      } else {
        await this._rmdir(filepath);
      }
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
  }
  /**
   * Read a directory without throwing an error is the directory doesn't exist
   *
   * @param {string} filepath - The path to the directory.
   * @returns {Promise<string[]|null>} - An array of file names, or `null` if the path is not a directory.
   */
  async readdir(filepath) {
    try {
      const names = await this._readdir(filepath);
      names.sort(compareStrings);
      return names;
    } catch (err) {
      if (err.code === "ENOTDIR") return null;
      return [];
    }
  }
  /**
   * Return a flat list of all the files nested inside a directory
   *
   * Based on an elegant concurrent recursive solution from SO
   * https://stackoverflow.com/a/45130990/2168416
   *
   * @param {string} dir - The directory to read.
   * @returns {Promise<string[]>} - A flat list of all files in the directory.
   */
  async readdirDeep(dir) {
    const subdirs = await this._readdir(dir);
    const files = await Promise.all(
      subdirs.map(async (subdir) => {
        const res = dir + "/" + subdir;
        return (await this._stat(res)).isDirectory() ? this.readdirDeep(res) : res;
      })
    );
    return files.reduce((a, f) => a.concat(f), []);
  }
  /**
   * Return the Stats of a file/symlink if it exists, otherwise returns null.
   * Rethrows errors that aren't related to file existence.
   *
   * @param {string} filename - The path to the file or symlink.
   * @returns {Promise<Object|null>} - The stats object, or `null` if the file doesn't exist.
   */
  async lstat(filename) {
    try {
      const stats = await this._lstat(filename);
      return stats;
    } catch (err) {
      if (err.code === "ENOENT" || (err.code || "").includes("ENS")) {
        return null;
      }
      throw err;
    }
  }
  /**
   * Reads the contents of a symlink if it exists, otherwise returns null.
   * Rethrows errors that aren't related to file existence.
   *
   * @param {string} filename - The path to the symlink.
   * @param {Object} [opts={ encoding: 'buffer' }] - Options for reading the symlink.
   * @returns {Promise<Buffer|null>} - The symlink target, or `null` if it doesn't exist.
   */
  async readlink(filename, opts = { encoding: "buffer" }) {
    try {
      const link = await this._readlink(filename, opts);
      return Buffer.isBuffer(link) ? link : Buffer.from(link);
    } catch (err) {
      if (err.code === "ENOENT" || (err.code || "").includes("ENS")) {
        return null;
      }
      throw err;
    }
  }
  /**
   * Write the contents of buffer to a symlink.
   *
   * @param {string} filename - The path to the symlink.
   * @param {Buffer} buffer - The symlink target.
   * @returns {Promise<void>}
   */
  async writelink(filename, buffer) {
    return this._symlink(buffer.toString("utf8"), filename);
  }
};
function assertParameter(name, value) {
  if (value === void 0) {
    throw new MissingParameterError(name);
  }
}
function isAbsolute(filepath) {
  return filepath.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(filepath);
}
async function discoverGitdir({ fsp, dotgit }) {
  assertParameter("fsp", fsp);
  assertParameter("dotgit", dotgit);
  const dotgitStat = await fsp._stat(dotgit).catch(() => ({ isFile: () => false, isDirectory: () => false }));
  if (dotgitStat.isDirectory()) {
    return dotgit;
  } else if (dotgitStat.isFile()) {
    return fsp._readFile(dotgit, "utf8").then((contents) => contents.trimRight().substr(8)).then((submoduleGitdir) => {
      if (isAbsolute(submoduleGitdir)) {
        return submoduleGitdir;
      }
      const gitdir = join(dirname(dotgit), submoduleGitdir);
      return gitdir;
    });
  } else {
    return dotgit;
  }
}
async function resolveFilepath({ fs: fs2, cache, gitdir, oid, filepath }) {
  const entry = await resolveFilepathEntry({
    fs: fs2,
    cache,
    gitdir,
    oid,
    filepath
  });
  return entry.oid;
}
async function resolveFilepathEntry({
  fs: fs2,
  cache,
  gitdir,
  oid,
  filepath
}) {
  if (filepath.startsWith("/")) {
    throw new InvalidFilepathError("leading-slash");
  } else if (filepath.endsWith("/")) {
    throw new InvalidFilepathError("trailing-slash");
  }
  const _oid = oid;
  const result = await resolveTree({ fs: fs2, cache, gitdir, oid });
  const tree = result.tree;
  if (filepath === "") {
    return { mode: "040000", oid: result.oid, path: "", type: "tree" };
  } else {
    const pathArray = filepath.split("/");
    return _resolveFilepath({
      fs: fs2,
      cache,
      gitdir,
      tree,
      pathArray,
      oid: _oid,
      filepath
    });
  }
}
async function _resolveFilepath({
  fs: fs2,
  cache,
  gitdir,
  tree,
  pathArray,
  oid,
  filepath
}) {
  const name = pathArray.shift();
  for (const entry of tree) {
    if (entry.path === name) {
      if (pathArray.length === 0) {
        return entry;
      } else {
        const { type, object: object2 } = await _readObject({
          fs: fs2,
          cache,
          gitdir,
          oid: entry.oid
        });
        if (type !== "tree") {
          throw new ObjectTypeError(oid, type, "tree", filepath);
        }
        tree = GitTree.from(object2);
        return _resolveFilepath({
          fs: fs2,
          cache,
          gitdir,
          tree,
          pathArray,
          oid,
          filepath
        });
      }
    }
  }
  throw new NotFoundError(`file or directory found at "${oid}:${filepath}"`);
}
async function _readTree({
  fs: fs2,
  cache,
  gitdir,
  oid,
  filepath = void 0
}) {
  if (filepath !== void 0) {
    oid = await resolveFilepath({ fs: fs2, cache, gitdir, oid, filepath });
  }
  const { tree, oid: treeOid } = await resolveTree({ fs: fs2, cache, gitdir, oid });
  const result = {
    oid: treeOid,
    tree: tree.entries()
  };
  return result;
}
async function readTree({
  fs: fs2,
  dir,
  gitdir = join(dir, ".git"),
  oid,
  filepath = void 0,
  cache = {}
}) {
  try {
    assertParameter("fs", fs2);
    assertParameter("gitdir", gitdir);
    assertParameter("oid", oid);
    const fsp = new FileSystem(fs2);
    const updatedGitdir = await discoverGitdir({ fsp, dotgit: gitdir });
    return await _readTree({
      fs: fsp,
      cache,
      gitdir: updatedGitdir,
      oid,
      filepath
    });
  } catch (err) {
    err.caller = "git.readTree";
    throw err;
  }
}

// src/changes.ts
import path2 from "node:path";
var HASH = /^[a-f0-9]{40}$/i;
async function checkpointChanges(root, entries, project, zone, day) {
  const snapshots = entries.filter(
    (e) => e.project === project && e.snapshot && (!day || dayKey(e.at, zone) <= day)
  ).sort((a, b) => b.at.localeCompare(a.at) || b.id.localeCompare(a.id));
  const seen = /* @__PURE__ */ new Set(), unique = snapshots.filter((e) => {
    if (seen.has(e.snapshot.ref)) return false;
    seen.add(e.snapshot.ref);
    return true;
  });
  if (unique.length < 2)
    return {
      available: false,
      message: "Two saved game checkpoints are needed to compare changes."
    };
  const [to, from] = unique;
  if (!HASH.test(to.snapshot.ref) || !HASH.test(from.snapshot.ref))
    throw new Error("Unsupported checkpoint ref");
  const index = object(
    JSON.parse(
      (await readBounded(root, "projects.json", 2 * 1024 * 1024)).toString(
        "utf8"
      )
    )
  );
  const recent = (Array.isArray(index.recents) ? index.recents : []).map(object).find((row) => row.name === project);
  if (!recent || typeof recent.dir !== "string" || !path2.isAbsolute(recent.dir))
    return {
      available: false,
      message: "This game is no longer in the local project index."
    };
  try {
    const gitdir = await fs.promises.realpath(path2.join(recent.dir, ".git"));
    if (!(await fs.promises.stat(gitdir)).isDirectory())
      throw Error("Unsupported Git directory");
    const guard = async (file) => {
      const absolute = path2.resolve(file), rel = path2.relative(gitdir, absolute);
      if (rel === ".." || rel.startsWith(".." + path2.sep) || path2.isAbsolute(rel))
        throw Error("Git read outside object database");
      const canonical = await fs.promises.realpath(absolute), realRel = path2.relative(gitdir, canonical);
      if (realRel === ".." || realRel.startsWith(".." + path2.sep) || path2.isAbsolute(realRel))
        throw Error("Linked Git path outside object database");
      return canonical;
    };
    const deny = async () => {
      throw Error("Checkpoint analysis cannot write files");
    };
    const readOnlyFs = {
      promises: {
        writeFile: deny,
        mkdir: deny,
        rmdir: deny,
        unlink: deny,
        symlink: deny,
        rm: deny,
        cp: deny,
        readFile: async (file, options2) => {
          const safe = await guard(file);
          if ((await fs.promises.stat(safe)).size > 128 * 1024 * 1024)
            throw Error("Git object pack is too large");
          return fs.promises.readFile(safe, options2);
        },
        stat: async (file) => fs.promises.stat(await guard(file)),
        lstat: async (file) => fs.promises.lstat(await guard(file)),
        readdir: async (file) => fs.promises.readdir(await guard(file)),
        readlink: async (file) => fs.promises.readlink(await guard(file))
      }
    };
    const options = {
      fs: readOnlyFs,
      dir: recent.dir,
      gitdir,
      cache: {}
    };
    let visited = 0;
    const until = Date.now() + 8e3;
    const flatten = async (oid, prefix = "", depth = 0) => {
      if (depth > 40 || visited++ > 2e4 || Date.now() > until)
        throw Error("Checkpoint tree limit reached");
      const { tree } = await readTree({ ...options, oid }), result = /* @__PURE__ */ new Map();
      for (const item of tree) {
        if (!item.path || item.path === ".." || item.path === "." || /[\\/]/.test(item.path))
          throw Error("Unsupported tree path");
        const name = prefix + item.path;
        if (item.type === "tree") {
          for (const [file, value] of await flatten(
            item.oid,
            name + "/",
            depth + 1
          ))
            result.set(file, value);
        } else result.set(name, item.oid + " " + item.mode);
        if (result.size > 2e4) throw Error("Checkpoint file limit reached");
      }
      return result;
    };
    const old = await flatten(from.snapshot.ref), next = await flatten(to.snapshot.ref), all = [.../* @__PURE__ */ new Set([...old.keys(), ...next.keys()])].sort();
    const changed = all.filter((file) => old.get(file) !== next.get(file)), files = changed.slice(0, 200).map((file) => ({
      path: words(file, 400),
      status: !old.has(file) ? "added" : !next.has(file) ? "deleted" : "modified"
    }));
    return {
      available: true,
      from: { id: from.snapshot.id, ref: from.snapshot.ref, at: from.at },
      to: { id: to.snapshot.id, ref: to.snapshot.ref, at: to.at },
      files,
      truncated: changed.length > 200
    };
  } catch {
    return {
      available: false,
      message: "These saved Git checkpoints could not be read within the supported limits. The game files were left unchanged."
    };
  }
}

// src/backend.ts
async function activate() {
  let reader = null;
  return {
    async action(name, args, context) {
      if (!["analytics", "screenshot", "changes"].includes(name))
        throw new Error("Unknown action");
      const settings = object(await context.host("settings.read")), storage = await context.host("storage.root");
      const configured = typeof settings.profile === "string" ? settings.profile.trim() : "";
      if (configured && !path3.isAbsolute(configured))
        throw new Error("Genex profile must be an absolute directory");
      const root = configured ? path3.resolve(configured) : profileRoot(storage);
      if (!reader || reader.root !== root) reader = new AnalyticsReader(root);
      const data = await reader.snapshot(), zone = typeof args.zone === "string" ? args.zone : "UTC";
      if (name === "screenshot") {
        const shot = typeof args.project === "string" ? data.screenshots[args.project] : null;
        if (!shot) return null;
        try {
          return {
            data: await reader.image(shot.root, shot.file),
            at: shot.at,
            source: shot.source
          };
        } catch {
          return null;
        }
      }
      try {
        new Intl.DateTimeFormat("en", { timeZone: zone }).format();
      } catch {
        throw new Error("Unknown time zone");
      }
      if (name === "changes") {
        if (typeof args.project !== "string" || !args.project)
          throw new Error("Choose a game to compare checkpoints");
        return checkpointChanges(
          root,
          data.entries,
          args.project,
          zone,
          typeof args.day === "string" && /^\d{4}-\d{2}-\d{2}$/.test(args.day) ? args.day : void 0
        );
      }
      const result = analytics(data.entries, {
        zone,
        project: typeof args.project === "string" ? args.project : void 0,
        model: typeof args.model === "string" ? args.model : void 0,
        day: typeof args.day === "string" && /^\d{4}-\d{2}-\d{2}$/.test(args.day) ? args.day : void 0
      });
      return {
        ...result,
        screenshots: Object.fromEntries(
          Object.entries(data.screenshots).map(([p, raw]) => {
            const shot = object(raw);
            return [p, { at: shot.at, source: shot.source }];
          })
        ),
        warnings: data.warnings,
        updatedAt: data.updatedAt,
        eventCount: data.eventCount
      };
    }
  };
}
export {
  activate
};
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

crc-32/crc32.js:
  (*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com *)

isomorphic-git/index.js:
  (*!
   * This code for `path.join` is directly copied from @zenfs/core/path for bundle size improvements.
   * SPDX-License-Identifier: LGPL-3.0-or-later
   * Copyright (c) James Prevett and other ZenFS contributors.
   *
   * Windows support added:
   *   - Backslashes are normalised to forward slashes before processing.
   *   - Drive-letter prefixes (e.g. "C:") are detected and preserved through
   *     normalisation, so absolute Windows paths are handled correctly.
   *   - An absolute argument passed to join() resets the accumulated path,
   *     matching Node behaviour and handling worktree gitdir paths properly.
   *
   * Limitation: UNC paths (e.g. \\server\share) are not supported. The leading
   *   backslashes are normalised to forward slashes and then collapsed by
   *   normalizeString, losing the UNC root. Git on Windows works with
   *   drive-letter paths, so this is not expected to be a practical issue.
   *)
*/

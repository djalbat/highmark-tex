"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
var _easy = require("easy");
var _necessary = require("necessary");
var _svg = require("./utilities/svg");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var get = _necessary.ajaxUtilities.get;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        return _call_super(this, View, arguments);
    }
    _create_class(View, [
        {
            key: "didMount",
            value: function didMount() {
                var _this = this;
                var codePoint = 0x1d538, host = "http://localhost:8888/", uri = "otf/STIXTwoText-Regular.otf", query = {}, headers = {
                    "accept": "font/otf"
                }, responseType = "arraybuffer";
                get(host, uri, query, headers, responseType, function(arrayBuffer) {
                    var svg = (0, _svg.svgFromCodePoint)(codePoint, arrayBuffer);
                    _this.mount(svg);
                });
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYWpheFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgc3ZnRnJvbUNvZGVQb2ludCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdmdcIjtcblxuY29uc3QgeyBnZXQgfSA9IGFqYXhVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29kZVBvaW50ID0gMHgxZDUzOCxcbiAgICAgICAgICBob3N0ID0gXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvXCIsXG4gICAgICAgICAgdXJpID0gYG90Zi9TVElYVHdvVGV4dC1SZWd1bGFyLm90ZmAsXG4gICAgICAgICAgcXVlcnkgPSB7fSxcbiAgICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgICAgXCJhY2NlcHRcIjogXCJmb250L290ZlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG5cbiAgICBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCAoYXJyYXlCdWZmZXIpID0+IHtcbiAgICAgIGNvbnN0IHN2ZyA9IHN2Z0Zyb21Db2RlUG9pbnQoY29kZVBvaW50LCBhcnJheUJ1ZmZlcik7XG5cbiAgICAgIHRoaXMubW91bnQoc3ZnKVxuICAgIH0pO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiZ2V0IiwiYWpheFV0aWxpdGllcyIsImRpZE1vdW50IiwiY29kZVBvaW50IiwiaG9zdCIsInVyaSIsInF1ZXJ5IiwiaGVhZGVycyIsInJlc3BvbnNlVHlwZSIsImFycmF5QnVmZmVyIiwic3ZnIiwic3ZnRnJvbUNvZGVQb2ludCIsIm1vdW50Iiwid2lsbFVubW91bnQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztvQkFQRzt5QkFDTTttQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFNLEFBQUVDLE1BQVFDLHdCQUFhLENBQXJCRDtBQUVPLElBQUEsQUFBTUQscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBTUMsWUFBWSxTQUNaQyxPQUFPLDBCQUNQQyxNQUFNLCtCQUNOQyxRQUFRLENBQUMsR0FDVEMsVUFBVTtvQkFDUixVQUFVO2dCQUNaLEdBQ0FDLGVBQWU7Z0JBRXJCUixJQUFJSSxNQUFNQyxLQUFLQyxPQUFPQyxTQUFTQyxjQUFjLFNBQUNDO29CQUM1QyxJQUFNQyxNQUFNQyxJQUFBQSxxQkFBZ0IsRUFBQ1IsV0FBV007b0JBRXhDLE1BQUtHLEtBQUssQ0FBQ0Y7Z0JBQ2I7WUFDRjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1dBcEJtQmQ7cUJBQWFlLGFBQU87QUFzQnZDLGlCQXRCbUJmLE1Bc0JaZ0IsV0FBVTtBQUVqQixpQkF4Qm1CaEIsTUF3QlppQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9
// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty;

  (function() {
    var group_end, group_start, inspect_reserved_methods, is_native_method, key, log, name, proto_method, prototypes, std_obj_proto, to_source, _have_to_source, _ref, _results;
    prototypes = [
      {
        type: 'Number',
        instance: 1,
        reserved_fns: ['constructor', 'toString', 'valueOf', 'toFixed', 'toExponential', 'toPrecision']
      }, {
        type: 'String',
        instance: '',
        reserved_fns: ['constructor', 'valueOf', 'toString', 'charAt', 'charCodeAt', 'concat', 'indexOf', 'lastIndexOf', 'match', 'replace', 'search', 'slice', 'split', 'substring', 'substr', 'toLowerCase', 'toLocaleLowerCase', 'toUpperCase', 'toLocaleUpperCase', 'trim', 'trimLeft', 'trimRight', 'link', 'anchor', 'fontcolor', 'fontsize', 'big', 'blink', 'bold', 'fixed', 'italics', 'small', 'strike', 'sub', 'sup']
      }, {
        type: 'Boolead',
        instance: true,
        reserved_fns: ['constructor', 'toString', 'valueOf']
      }, {
        type: 'Object',
        instance: {},
        reserved_fns: ['constructor', 'toString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable']
      }, {
        type: 'Array',
        instance: [],
        reserved_fns: ['constructor', 'toString', 'join', 'pop', 'push', 'concat', 'reverse', 'shift', 'unshift', 'slice', 'splice', 'sort', 'filter', 'forEach', 'some', 'every', 'map', 'indexOf', 'lastIndexOf', 'reduce', 'reduceRight']
      }, {
        type: 'Function',
        instance: function() {},
        reserved_fns: ['constructor', 'toSource', 'toString', 'apply', 'call', 'bind']
      }
    ];
    _have_to_source = 'toSource' in function() {};
    is_native_method = function(fn) {
      if (fn === void 0) {
        return true;
      }
      return fn.toString().indexOf('[native code]') !== -1;
    };
    to_source = function(method) {
      if (_have_to_source) {
        return method['toSource']();
      } else {
        return method;
      }
    };
    group_start = function(group_name) {
      return console.group(group_name.type);
    };
    group_end = function() {
      return console.groupEnd();
    };
    log = function(obj, method, error) {
      if (error == null) {
        error = false;
      }
      if (error) {
        return console.error('overriden method %s from prototype %s', method, to_source(obj.instance[method]));
      } else {
        return console.log('suspicious property %s in prototype %s', method, to_source(obj.instance[method]));
      }
    };
    inspect_reserved_methods = function(std_obj_proto) {
      var key, native_method, reserved_fn, _ref, _results;
      _ref = std_obj_proto.reserved_fns;
      _results = [];
      for (key in _ref) {
        if (!__hasProp.call(_ref, key)) continue;
        reserved_fn = _ref[key];
        native_method = is_native_method(std_obj_proto.instance[reserved_fn]);
        if (!native_method) {
          _results.push(log(std_obj_proto, reserved_fn, true));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    _results = [];
    for (key in prototypes) {
      if (!__hasProp.call(prototypes, key)) continue;
      std_obj_proto = prototypes[key];
      group_start(std_obj_proto);
      _ref = std_obj_proto.instance;
      for (name in _ref) {
        proto_method = _ref[name];
        log(std_obj_proto, name);
      }
      inspect_reserved_methods(std_obj_proto);
      _results.push(group_end());
    }
    return _results;
  })();

}).call(this);
(->
  prototypes = [
    type: 'Number'
    instance: 1
    reserved_fns: ['constructor', 'toString', 'valueOf', 'toFixed', 'toExponential', 'toPrecision']
  ,
    type: 'String'
    instance: ''
    reserved_fns: ['constructor', 'valueOf', 'toString', 'charAt', 'charCodeAt', 'concat', 'indexOf', 'lastIndexOf',
                   'match', 'replace', 'search', 'slice', 'split', 'substring', 'substr', 'toLowerCase',
                   'toLocaleLowerCase', 'toUpperCase', 'toLocaleUpperCase', 'trim', 'trimLeft', 'trimRight', 'link',
                   'anchor', 'fontcolor', 'fontsize', 'big', 'blink', 'bold', 'fixed', 'italics', 'small', 'strike',
                   'sub', 'sup']
  ,
    type: 'Boolead'
    instance: true
    reserved_fns: ['constructor', 'toString', 'valueOf']
  ,
    type: 'Object'
    instance: {}
    reserved_fns: ['constructor', 'toString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf',
                   'propertyIsEnumerable']
  ,
    type: 'Array'
    instance: []
    reserved_fns: ['constructor', 'toString', 'join', 'pop', 'push', 'concat', 'reverse', 'shift',
                   'unshift', 'slice', 'splice', 'sort', 'filter', 'forEach', 'some', 'every', 'map', 'indexOf',
                   'lastIndexOf', 'reduce', 'reduceRight']
  ,
    type: 'Function'
    instance: ->

    reserved_fns: ['constructor', 'toSource', 'toString', 'apply', 'call', 'bind']
  ]

  _have_to_source = 'toSource' of ->

  is_native_method = (fn)->
    return true if fn == undefined
    fn.toString().indexOf('[native code]') != -1

  to_source = (method)->
    if _have_to_source
      method['toSource']()
    else
      method

  group_start = (group_name) ->
    console.group(group_name.type)

  group_end = ->
    console.groupEnd()

  log = (obj, method, error = false)->
    if error
      console.error('overriden method %s from prototype %s', method, to_source(obj.instance[method]))
    else
      console.log('suspicious property %s in prototype %s', method, to_source(obj.instance[method]))


  inspect_reserved_methods = (std_obj_proto)->
    for own key, reserved_fn of std_obj_proto.reserved_fns
      native_method = is_native_method(std_obj_proto.instance[reserved_fn])
      if !native_method
        log(std_obj_proto, reserved_fn, true)

  for own key, std_obj_proto of prototypes
    group_start(std_obj_proto)
    for name, proto_method of std_obj_proto.instance
      log(std_obj_proto, name)

    inspect_reserved_methods(std_obj_proto)
    group_end())()
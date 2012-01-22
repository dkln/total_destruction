Mixins =
  extend: (object, mixin) ->
    for name, method of mixin
      object[name] = method

  include: (object, mixin) ->
    @extend(object.prototype, mixin)

@Td ||= {}
@Td.Services ||= {}
@Td.Services.Mixins = Mixins

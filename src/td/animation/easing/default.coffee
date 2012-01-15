Default = (t, b, c, d) ->
  -c * (t /= d) * (t - 2) + b

@Td ||= {}
@Td.Animation ||= {}
@Td.Animation.Easing ||= {}
@Td.Animation.Easing.Default = Default

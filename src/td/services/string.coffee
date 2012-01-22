String =
  titleize: (str) ->
    str.substr(0, 1).toUpperCase() + str.substr(1)

  generateId: (length = 8) ->
    id = ''
    id += Math.random().toString(36).substr(2) while id.length < length
    id.substr(0, length)

@Td ||= {}
@Td.Services ||= {}
@Td.Services.String = String

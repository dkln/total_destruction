Colors =
  hex2rgba: (hex) ->
    num = parseInt(hex.slice(1), 16)
    [num >> 16 & 255, num >> 8 & 255, num & 255, num >> 24 & 255]

@Td ||= {}
@Td.Services ||= {}
@Td.Services.Colors = Colors

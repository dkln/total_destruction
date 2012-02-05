class Base
  constructor: ->
    @width  = 0
    @height = 0
    @tiles  = []

  set: (x, y, height, sprite) ->
    @tiles[y] ||= []
    @tiles[y][x] = [height, sprite]

    @width  = x if x > @width
    @height = y if y > @height


@Td ||= {}
@Td.World ||= {}
@Td.World.Base = Base

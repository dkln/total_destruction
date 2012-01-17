class Base
  constructor: ->
    @width  = 0
    @height = 0
    @tiles  = []

  set: (tileId, x, y) ->
    @tiles[y] ||= []
    @tiles[y][x] = tileId

    @width  = x if x > @width
    @height = y if y > @height


@Td ||= {}
@Td.World ||= {}
@Td.World.Base = Base

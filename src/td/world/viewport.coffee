class Viewport
  constructor: ->
    @x      = 0
    @y      = 0
    @width  = 0
    @height = 0

  boundX: (world) ->
    boundX = x + @width
    boundX = world.width if boundX > world.width

  boundY: (world) ->
    boundY = y + @height
    boundY = world.height if boundX > world.height


@Td ||= {}
@Td.World ||= {}
@Td.World.Viewport = Viewport

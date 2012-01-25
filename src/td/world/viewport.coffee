class Viewport
  constructor: ->
    @x      = 0
    @y      = 0
    @width  = 15
    @height = 15

  boundX: (world) ->
    boundX = @x + @width
    boundX = world.width if boundX > world.width
    boundX

  boundY: (world) ->
    boundY = @y + @height
    boundY = world.height if boundY > world.height
    boundY


@Td ||= {}
@Td.World ||= {}
@Td.World.Viewport = Viewport

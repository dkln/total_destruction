class Viewport
  constructor: ->
    @x            = 0
    @y            = 0
    @width        = 15
    @height       = 15

  getX: ->
    parseInt(@x)

  getY: ->
    parseInt(@y)

  getOffsetFactorX: ->
    @x - parseInt(@x)

  getOffsetFactorY: ->
    @y - parseInt(@y)

  boundX: (world) ->
    boundX = @getX() + @width
    boundX = world.width if boundX > world.width
    boundX

  boundY: (world) ->
    boundY = @getY() + @height
    boundY = world.height if boundY > world.height
    boundY


@Td ||= {}
@Td.World ||= {}
@Td.World.Viewport = Viewport

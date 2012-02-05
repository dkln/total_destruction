InteractiveViewport =
  snapX: 30

  snapY: 30

  canvasWidth: 0

  canvasHeight: 0

  canvasX: 0

  canvasY: 0

  init: (ctx) ->
    @canvasX      = $(ctx.canvas).offset().left
    @canvasY      = $(ctx.canvas).offset().top
    @canvasWidth  = ctx.canvas.width
    @canvasHeight = ctx.canvas.height
    @snapX        = @canvasWidth / 3
    @snapY        = @canvasHeight / 3
    @focus        = false

    $(ctx.canvas).mousemove (event) => @handleMousemove(event)
    $(ctx.canvas).mouseout (event) => @handleMouseout(event)

  setViewport: (viewport) ->
    @viewport = viewport

  handleMousemove: (event) ->
    @focus    = true
    @currentX = event.pageX - @canvasX
    @currentY = event.pageY - @canvasY

  handleMouseout: (event) ->
    @focus = false

  update: ->
    @move() if @focus && @isInCorner()

  move: ->
    @viewport.x = @viewport.x + (@getXIncrement() * @getXSpeed())
    @viewport.y = @viewport.y + (@getYIncrement() * @getYSpeed())

  getXIncrement: ->
    if @isLeft()
      -1
    else if @isRight()
      1
    else
      0

  getYIncrement: ->
    if @isUp()
      -1
    else if @isDown()
      1
    else
      0

  getXSpeed: ->
    @getXMovement() * .0025

  getYSpeed: ->
    @getYMovement() * .0025

  getXMovement: ->
    if @isLeft()
      @snapX - @currentX

    else if @isRight()
      @snapX - (@canvasWidth - @currentX)

    else
      0

  getYMovement: ->
    if @isUp()
      @snapY - @currentY

    else if @isDown()
      @snapY - (@canvasHeight - @currentY)

    else
      0

  isInCorner: ->
    @isLeft() || @isRight() || @isUp() || @isDown()

  isLeft: ->
    @currentX < @snapX

  isRight: ->
    @currentX > @canvasWidth - @snapX

  isUp: ->
    @currentY < @snapY

  isDown: ->
    @currentY > @canvasHeight - @snapY


@Td ||= {}
@Td.World ||= {}
@Td.World.InteractiveViewport = InteractiveViewport

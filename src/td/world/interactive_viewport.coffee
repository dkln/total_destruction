InteractiveViewport =
  snap: 30

  canvasWidth: 0

  canvasHeight: 0

  canvasX: 0

  canvasY: 0

  init: (ctx) ->
    @canvasX      = $(ctx.canvas).offset().left
    @canvasY      = $(ctx.canvas).offset().top
    @canvasWidth  = ctx.canvas.width
    @canvasHeight = ctx.canvas.height

    $('body').mousemove (event) => @handleMousemove(event)

  setViewport: (viewport) ->
    @viewport = viewport

  handleMousemove: (event) ->
    @currentX = event.pageX - @canvasX
    @currentY = event.pageY - @canvasY

  update: ->
    @move() if @isInCorner()

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
    @getXMovement() * .01

  getYSpeed: ->
    @getYMovement() * .01

  getXMovement: ->
    if @isLeft()
      @snap - @currentX

    else if @isRight()
      @snap - (@canvasWidth - @currentX)

    else
      0

  getYMovement: ->
    if @isUp()
      @snap - @currentY

    else if @isDown()
      @snap - (@canvasHeight - @currentY)

    else
      0

  isInCorner: ->
    @isLeft() || @isRight() || @isUp() || @isDown()

  isLeft: ->
    @currentX < @snap

  isRight: ->
    @currentX > @canvasWidth - @snap

  isUp: ->
    @currentY < @snap

  isDown: ->
    @currentY > @canvasHeight - @snap


@Td ||= {}
@Td.World ||= {}
@Td.World.InteractiveViewport = InteractiveViewport

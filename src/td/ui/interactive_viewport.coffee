InteractiveViewport =
  snapX: 30

  snapY: 30

  viewport: null

  init: (ctx) ->
    @snapX        = Td.Ui.Mouse.canvasWidth / 3
    @snapY        = Td.Ui.Mouse.canvasHeight / 3
    @focus        = false

  update: ->
    @move() if Td.Ui.Mouse.focus

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
      @snapX - Td.Ui.Mouse.x

    else if @isRight()
      @snapX - (Td.Ui.Mouse.canvasWidth - Td.Ui.Mouse.x)

    else
      0

  getYMovement: ->
    if @isUp()
      @snapY - Td.Ui.Mouse.y

    else if @isDown()
      @snapY - (Td.Ui.Mouse.canvasHeight - Td.Ui.Mouse.y)

    else
      0

  isInCorner: ->
    @isLeft() || @isRight() || @isUp() || @isDown()

  isLeft: ->
    Td.Ui.Mouse.x < @snapX

  isRight: ->
    Td.Ui.Mouse.x > Td.Ui.Mouse.canvasWidth - @snapX

  isUp: ->
    Td.Ui.Mouse.y < @snapY

  isDown: ->
    Td.Ui.Mouse.y > Td.Ui.Mouse.canvasHeight - @snapY


@Td ||= {}
@Td.Ui ||= {}
@Td.Ui.InteractiveViewport = InteractiveViewport

Mouse =

  canvasX: 0

  canvasY: 0

  canvasWidth: 0

  canvasHeight: 0

  x: 0

  y: 0

  focus: false

  down: false

  init: (ctx) ->
    @canvasX      = $(ctx.canvas).offset().left
    @canvasY      = $(ctx.canvas).offset().top
    @canvasWidth  = ctx.canvas.width
    @canvasHeight = ctx.canvas.height

    $(ctx.canvas).mousemove (event) => @handleMousemove(event)
    $(ctx.canvas).mouseout  (event) => @handleMouseout(event)
    $('body').mousedown     (event) => @handleMousedown(event)
    $('body').mouseup       (event) => @handleMouseup(event)

  cleanup: ->
    @moved = false

  handleMousemove: (event) ->
    @focus  = true
    @moved  = true
    @x      = event.pageX - @canvasX
    @y      = event.pageY - @canvasY

  handleMouseout: (event) ->
    @focus = false

  handleMousedown: (event) ->
    @down = true

  handleMouseup: (event) ->
    @down = false

@Td ||= {}
@Td.Ui ||= {}
@Td.Ui.Mouse = Mouse

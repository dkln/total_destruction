Core =
  ctx: null

  tickTimer: null

  fps: 24

  init: ->
    @initCanvas()
    @initTicker()

  initCanvas: ->
    @ctx = document.getElementById('canvas').getContext()

  initTicker: ->
    @tickTimer = setInterval(@handleTick, 1000 / @fps, this)

  handleTick: =>
    Td.Animation.Tween.update()
    Td.Gfx.Renderers.Clear.render(@ctx)
    Td.Gfx.Renderers.DisplayObjects.render(@ctx)

@Td ||= {}
@Td.Game ||= {}
@Td.Game.Core = Core

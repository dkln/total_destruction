Core =
  ctx: null

  tickTimer: null

  fps: 24

  canvasWidth: 640

  canvasHeight: 480

  tileWidth: 10

  tileHeight: 10

  viewport: null

  mapLayer: null

  world: null

  init: ->
    @initCanvas()
    @initTicker()
    @initWorld()

  initWorld: ->
    @viewport   = new Td.World.Viewport(@tileWidth, @tileHeight)
    @world      = Td.Services.Loader.get('world')
    @worldLayer = new Td.Gfx.Layers.IsometricMap(@world, @viewport)

    Td.Gfx.Renderers.DisplayObjects.add(@worldLayer)

  initCanvas: ->
    @ctx = document.getElementById('canvas').getContext('2d')

  initTicker: ->
    @tickTimer = setInterval((=> @handleTick()), 1000 / @fps, this)

  handleTick: ->
    Td.Animation.Tween.update()
    Td.Gfx.Renderers.Clear.render(@ctx, @canvasWidth, @canvasHeight)
    Td.Gfx.Renderers.DisplayObjects.render(@ctx)

@Td ||= {}
@Td.Game ||= {}
@Td.Game.Core = Core

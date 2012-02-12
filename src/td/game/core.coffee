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
    @initViewport()
    @initWorld()
    @initUi()
    @initTicker()
    @run()

  initWorld: ->
    @world = Td.Services.Loader.get('world')
    @worldLayer = new Td.Gfx.Layers.IsometricMap(@world, @viewport, Td.Gfx.Renderers.Isometric.Diamond)

    Td.Gfx.Renderers.DisplayObjects.add(@worldLayer)

  initViewport: ->
    @viewport = new Td.World.Viewport(@tileWidth, @tileHeight)

  initUi: ->
    Td.Ui.Mouse.init(@ctx)
    Td.Ui.InteractiveViewport.init(@viewport)
    Td.Ui.InteractiveIsometricDiamondTile.init(Td.Services.Loader.get('focus'), @ctx, @viewport)

  initCanvas: ->
    @ctx = document.getElementById('canvas').getContext('2d')

  initTicker: ->
    window.requestAnimFrame = window.webkitRequestAnimationFrame || window.requestAnimationFrame

  run: ->
    window.requestAnimFrame(=> @handleTick())

  handleTick: ->
    try
      window.requestAnimFrame(=> @handleTick())

      Td.Animation.Tween.update()
      Td.Ui.InteractiveViewport.update()
      Td.Gfx.Renderers.Clear.render(@ctx, @canvasWidth, @canvasHeight)
      Td.Gfx.Renderers.DisplayObjects.render(@ctx)
      Td.Ui.InteractiveViewport.update()
      Td.Ui.InteractiveIsometricDiamondTile.update()

      Td.Ui.Mouse.cleanup()

    catch error
      clearInterval(@tickTimer)
      console.log('Error in render tick, exiting render loop') if console
      throw error

@Td ||= {}
@Td.Game ||= {}
@Td.Game.Core = Core

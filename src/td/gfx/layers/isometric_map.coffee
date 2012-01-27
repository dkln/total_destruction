class IsometricMap extends Td.Gfx.Layers.Object
  constructor: (@world, @viewport, @renderer) ->
    super()
    @scaleX = 1
    @scaleY = 1
    @rotation = 30

  render: (ctx) ->
    @renderer.render(ctx, @world, @viewport)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.IsometricMap = IsometricMap

class IsometricMap extends Td.Gfx.Layers.Object
  constructor: (@world, @viewport) ->
    super()

  render: (ctx) ->
    Td.Gfx.Renderers.Isometric.render(ctx, @world, @viewport)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.IsometricMap = IsometricMap

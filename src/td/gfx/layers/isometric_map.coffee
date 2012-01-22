class IsometricMap extends Td.Gfx.Layers.Object
  constructor: (@world, @viewport) ->

  render: (ctx) ->
    Td.Gfx.Renderers.Isometric(ctx, @world, @viewport)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.IsometricMap = IsometricMap

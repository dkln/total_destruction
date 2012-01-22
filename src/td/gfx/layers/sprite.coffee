class Sprite extends Td.Gfx.Layers.Object
  constructor: (@sprite) ->

  render: (ctx) ->
    @sprite.render(ctx, 0, 0)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.Sprite = Sprite

class Sprite
  constructor: (@image) ->

  render: (ctx, x, y) ->
    ctx.drawImage(@image, x, y)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Sprite = Sprite

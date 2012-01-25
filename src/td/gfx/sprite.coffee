class Sprite
  constructor: (@image) ->
    @width  = @image.width
    @height = @image.height

  render: (ctx, x, y) ->
    ctx.drawImage(@image, x, y)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Sprite = Sprite

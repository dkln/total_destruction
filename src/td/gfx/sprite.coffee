class Sprite
  constructor: (@id, @url) ->
    @loaded = false
    @image  = null

  load: (onComplete) ->
    @image        = new Image()
    @image.onload = onComplete
    @image.src    = @url

  render: (ctx, x, y) ->
    ctx.drawImage(@image, x, y)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Sprite = Sprite

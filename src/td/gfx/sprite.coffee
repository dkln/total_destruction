class Sprite
  constructor: (@id, @url) ->
    @loaded = false
    @image  = null

  load: (onComplete) ->
    @image        = new Image()
    @image.onload = onComplete
    @image.src    = @url

  render: (ctx) ->
    ctx.drawImage(@image, 0, 0)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Sprite = Sprite

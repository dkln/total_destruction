class Sprite
  constructor: (@id, @url) ->
    @image = null

  load: (onComplete) ->
    @image        = new Image()
    @image.onload = onComplete
    @image.src    = @url

  get: ->
    new Td.Gfx.Sprite(@image)

@Td ||= {}
@Td.Services ||= {}
@Td.Services.Loader ||= {}
@Td.Services.Loader.Sprite = Sprite

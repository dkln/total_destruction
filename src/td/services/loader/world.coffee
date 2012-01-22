class World
  constructor: (@id, @url) ->
    @data       = null
    @request    = new XMLHttpRequest()
    @onComplete = null

  load: (onComplete) ->
    @onComplete = onComplete
    @request.onreadystatechange = @handleStateChange
    @request.open('GET', @url, true)
    @request.send(null)

  handleStateChange: (event) =>
    if @isStatusOk() && @isReady()
      @request.onreadystatechange = null
      @data = @request.responseText
      @onComplete()

  isStatusOk: ->
    @request.readyState == 4

  isReady: ->
    @request.status == 200

  get: ->
    converter = new Td.World.Converter(new Td.World.Base(), @data)
    converter.convert()

@Td ||= {}
@Td.Services ||= {}
@Td.Services.Loader ||= {}
@Td.Services.Loader.World = World

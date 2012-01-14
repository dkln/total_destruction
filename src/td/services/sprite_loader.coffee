SpriteLoader =
  stack: {}

  loadStack: []

  toLoad: null

  loading: false

  completeHandlers: []

  add: (id, url) ->
    @remove(id) if @stack[id]
    @loadStack.push(new Td.Gfx.Sprite(id, url))

  remove: (id) ->

  get: (id) ->
    @stack[id]

  load: (onComplete) ->
    @completeHandlers.push(onComplete) if onComplete?

    unless @loading
      @loading = true
      @loadNext()

  handleLoadComplete: (event) =>

  loadNext: ->
    if @isLoadStackEmpty()
      @roundUpLoading()
    else
      @loadNextInStack()

  roundUpLoading: ->
    @callCompleteHandlers()
    @loading = false

  callCompleteHandlers: ->
    for handler in @completeHandlers
      handler()

    @completeHandlers = []

  isLoadStackEmpty: ->
    @loadStack.length == 0

  loadNextInStack: ->
    @toLoad = @loadStack[0]
    @loadSprite()

  loadSprite: ->
    @stack[@toLoad.id] = new Image()
    @stack[@toLoad.id].onload = @handleLoadComplete
    @stack[@toLoad.id].src = @toLoad.url

@Td ||= {}
@Td.Services ||= {}
@Td.Services.SpriteLoader = SpriteLoader

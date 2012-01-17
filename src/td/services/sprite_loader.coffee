SpriteLoader =
  stack: {}

  loadStack: []

  toLoad: null

  loading: false

  completeHandlers: []

  statusHandlers: []

  numToLoad: 0

  loaded: 0

  basePath: ''

  addStack: (stack) ->
    for id, url of stack
      @add(id, url)

  add: (id, url) ->
    @numToLoad++
    @remove(id) if @stack[id]
    @loadStack.push(new Td.Gfx.Sprite(id, "#{@basePath}#{url}"))

  remove: (id) ->

  get: (id) ->
    @stack[id]

  getProgress: ->
    @loaded / parseFloat(@numToLoad)

  load: (onComplete, onStatusUpdate) ->
    @completeHandlers.push(onComplete) if onComplete?
    @statusHandlers.push(onStatusUpdate) if onStatusUpdate?

    @loadNext() unless @loading

  handleLoadComplete: (event) =>
    @placeLoadedIntoStack()
    @popLoadStack()
    @callStatusUpdateHandlers()
    @loadNext()

  loadNext: ->
    @loading = true

    if @isLoadStackEmpty()
      @roundUpLoading()
    else
      @loadNextInStack()

  roundUpLoading: ->
    @callStatusUpdateHandlers()

    @statusHandlers = []
    @loading        = false
    @loaded         = 0
    @numToLoad      = 0

    @callCompleteHandlers()

  callStatusUpdateHandlers: ->
    for handler in @statusHandlers
      handler()

  callCompleteHandlers: ->
    for handler in @completeHandlers
      handler()

    @completeHandlers = []

  updateProgress: ->
    @loaded++

  placeLoadedIntoStack: ->
    @toLoad.loaded = true
    @stack[@toLoad.id] = @toLoad

  popLoadStack: ->
    @toLoad = null
    @loadStack.splice(0, 1)

  isLoadStackEmpty: ->
    @loadStack.length == 0

  loadNextInStack: ->
    @toLoad = @loadStack[0]
    @toLoad.load()

@Td ||= {}
@Td.Services ||= {}
@Td.Services.SpriteLoader = SpriteLoader

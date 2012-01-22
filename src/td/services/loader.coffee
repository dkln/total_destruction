Loader =
  stack: {}

  loadStack: []

  toLoad: null

  loading: false

  completeHandlers: []

  statusHandlers: []

  numToLoad: 0

  loaded: 0

  basePath: ''

  addStack: (stack, type) ->
    for id, url of stack
      @add(id, url, type)

  add: (id, url, type) ->
    @numToLoad++
    @remove(id) if @stack[id]
    @loadStack.push(new Td.Services.Loader[Td.Services.String.titleize(type)](id, url))

  remove: (id) ->

  get: (id) ->
    console.log("Unknown item #{id} requested") unless @stack[id]
    @stack[id]

  getProgress: ->
    @loaded / parseFloat(@numToLoad)

  load: (onComplete, onStatusUpdate) ->
    @completeHandlers.push(onComplete) if onComplete?
    @statusHandlers.push(onStatusUpdate) if onStatusUpdate?

    @loadNext() unless @loading

  handleLoadComplete: (event) ->
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
    @stack[@toLoad.id] = @toLoad.get()

  popLoadStack: ->
    @toLoad = null
    @loadStack.splice(0, 1)

  isLoadStackEmpty: ->
    @loadStack.length == 0

  loadNextInStack: ->
    @toLoad = @loadStack[0]
    @toLoad.load((event) => @handleLoadComplete(event))

@Td ||= {}
@Td.Services ||= {}
@Td.Services.Loader = Loader

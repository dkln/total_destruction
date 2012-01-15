Tween =
  tweens: []

  initTime: new Date().getTime()

  to: (object, duration, toParams, options) ->
    tween = new TweenCommand(object, toParams)
    tween.duration = duration

    if options
      tween.onComplete  = options.onComplete
      tween.delay       = options.delay || 0
      tween.ease        = options.ease if options.ease?

    tween.finished = false
    @tweens.push tween

  kill: (object) ->
    for i in [(@tweens.length - 1)..i] by -1
      if @tweens[i].object == object
        @tweens[i] = null
        @tweens.splice i, 1
        i = -1

  update: ->
    if @hasTweens()
      doCleanup = false
      time      = new Date().getTime()

      for i in [0..(@tweens.length - 1)]
        @tweens[i].update(time)
        @tweens[i] = @checkCleanup(tween)

      @cleanup() if cleanup

  hasTweens: ->
    @tweens.length > 0

  checkCleanup: (tween) ->
    if tween.finished
      doCleanup = true
      null
    else
      tween

  cleanup: ->
    for i in [i..(@tweens.length - 1)]
      unless @tweens[i]
        @tweens.splice i, 1
        i = -1

@Td ||= {}
@Td.Animation ||= {}
@Td.Animation.Tween = Tween

class TweenCommand
  constructor: (@object, @toParams) ->
    @startTime   = new Date().getTime()
    @duration    = 0
    @delay       = 0
    @ease        = Td.Animation.Easing.Default
    @finished    = false
    @onComplete  = null
    @startValues = {}

    for property of @toParams
      if @object.hasOwnProperty(property)
        @startValues[property] = @object[property]
        @toParams[property]    = @toParams[property] - @object[property]

  update: (updateTime) ->
    time = updateTime - @startTime

    if time >= @duration
      factor = 1
      @finished = true
    else
      @finished = false
      factor    = @ease(time, 0, 1, @duration)

    for property of @toParams
      @object[property] = @startValues[property] + (factor * @toParams[property])

@Td ||= {}
@Td.Animation ||= {}
@Td.Animation.TweenCommand = TweenCommand

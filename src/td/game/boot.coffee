Boot =
  assets: {
    logo: 'logo.png'
  }

  boot: ->
    Td.Services.SpriteLoader.basePath = 'public/img/'
    Td.Services.SpriteLoader.addStack(@assets)
    Td.Services.SpriteLoader.load(@handleComplete, @handleStatusUpdate)

    $('#progressbar').show()

  handleStatusUpdate: ->
    $('#progressbar .progress').width(Td.Services.SpriteLoader.getProgress() * 100)

  handleComplete: ->
    $('#progressbar').hide()
    Td.Game.Core.init()
    Td.Game.Intro.boot()

@Td ||= {}
@Td.Game ||= {}
@Td.Game.Boot = Boot

$ -> Td.Game.Boot.boot()

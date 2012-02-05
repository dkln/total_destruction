Boot =
  canvasWidth: 640,

  canvasHeight: 480,

  tiles: {
    grass:      'img/tiles/grass.png',
    speedway:   'img/tiles/speedway.png',
    speedway2:  'img/tiles/speedway2.png',
    speedway3:  'img/tiles/speedway3.png',
    speedway4:  'img/tiles/speedway4.png',
    building:   'img/tiles/building.png',
    water:      'img/tiles/water.png',
    pavement:   'img/tiles/pavement.png'
  }

  maps: {
    world:      'maps/test.map'
  }

  configLoader: ->
    Td.Services.Loader.basePath = 'public/'

  boot: ->
    @configLoader()
    @loadAssets()

  loadAssets: ->
    Td.Services.Loader.addStack(@tiles, 'sprite')
    Td.Services.Loader.addStack(@maps, 'world')
    Td.Services.Loader.load(@handleComplete, @handleStatusUpdate)
    $('#progressbar').show()

  handleStatusUpdate: ->
    $('#progressbar .progress').width(Td.Services.Loader.getProgress() * 100)

  handleComplete: ->
    $('#progressbar').hide()
    Td.Game.Core.init()
    Td.Game.Intro.boot()

@Td ||= {}
@Td.Game ||= {}
@Td.Game.Boot = Boot

$ -> Td.Game.Boot.boot()

class Converter

  constructor: (@world, @data, @spriteMapping = Td.Game.SpriteMapping) ->

  convert: ->
    y = 0

    for rowData in @getRows(@data)
      @setRow(y, rowData)
      y++

    @world

  setRow: (y, rowData) ->
    x = 0

    for tileId in @getColumns(rowData)
      @setColumn(x, y, tileId)
      x++

  setColumn: (x, y, tileId) ->
    spriteId = @spriteMapping[tileId]
    @world.set(x, y, Td.Services.Loader.get(spriteId)) if spriteId

  getRows: ->
    @data.split("\n")

  getColumns: (data) ->
    data.split(',')

@Td ||= {}
@Td.World ||= {}
@Td.World.Converter = Converter

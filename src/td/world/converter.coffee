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

    for cell in @getColumns(rowData)
      @setColumn(x, y, @getCellData(cell))
      x++

  getCellData: (cell) ->
    cellData = cell.split('/')

    if cellData.length == 2
      { height: parseInt(cellData[1]), tileId: cellData[0] }
    else
      { height: 0, tileId: cellData[0] }

  setColumn: (x, y, cellData) ->
    sprite = Td.Services.Loader.get(@spriteMapping[cellData.tileId])
    @world.set(x, y, cellData.height, sprite) if cellData.tileId

  getRows: ->
    @data.split("\n")

  getColumns: (data) ->
    data.split(',')

@Td ||= {}
@Td.World ||= {}
@Td.World.Converter = Converter

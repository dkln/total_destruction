class Player
  constructor: ->
    @x    = 0
    @y    = 0
    @z    = 0
    @name = ''
    @id   = Td.Services.IdGenerator.generate()


@Td ||= {}
@Td.Game ||= {}
@Td.Game.Player = Player

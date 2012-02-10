IsometricDiamondTileTranslator =
  width: 50

  height: 25

  viewport: null

  getX: (x) ->
    ((x / parseInt(@width * 2)) - (y / parseInt(@width / 2))) + viewport.getX()

  getY: (y) ->
    ((y / parseInt(@height * 2)) + (y / parseInt(@height / 2))) + viewport.getY()

@Td ||= {}
@Td.Ui ||= {}
@Td.Ui.IsometricDiamondTileConverter = IsometricDiamondTileTranslator

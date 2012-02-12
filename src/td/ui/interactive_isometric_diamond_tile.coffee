InteractiveIsometricDiamondTile =
  viewport: null

  init: (@focusSprite, @ctx, @viewport) ->

  update: ->
    @render() if Td.Ui.Mouse.focus

  render: ->
    @focusSprite.render(@ctx, @getScreenX(), @getScreenY())

  getWorldX: ->
    Td.Ui.IsometricDiamondTileTranslator.getX(Td.Ui.Mouse.x)

  getWorldY: ->
    Td.Ui.IsometricDiamondTileTranslator.getY(Td.Ui.Mouse.y)

  getScreenX: ->
    Td.Gfx.Renderers.Isometric.DiamondTile.getScreenX(@viewport, @getWorldX(), @getWorldY())

  getScreenY: ->
    Td.Gfx.Renderers.Isometric.DiamondTile.getScreenY(@viewport, @getWorldX(), @getWorldY())

@Td ||= {}
@Td.Ui ||= {}
@Td.Ui.InteractiveIsometricDiamondTile = InteractiveIsometricDiamondTile

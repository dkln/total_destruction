Translate =
  setCanvasPositions: (layer) ->
    if layer.positionChanged()
      layer.oldX                 = layer.x
      layer.oldY                 = layer.y
      layer.oldVisible           = layer.visible
      layer.oldAlpha             = layer.alpha

      newVars                    = @getCanvasPositions(layer)

      layer.calculatedX          = newVars[0]
      layer.calculatedY          = newVars[1]
      layer.calculatedVisibility = newVars[2]
      layer.calculatedAlpha      = newVars[3]

  getCanvasPositions: (layer) ->
    theParent            = layer
    translatedX          = 0
    translatedY          = 0
    translatedVisibility = true
    translatedAlpha      = 1

    while theParent
      translatedVisibility  = false if !theParent.visible
      translatedX           += theParent.x
      translatedY           += theParent.y
      translatedAlpha       *= theParent.alpha

      theParent = theParent.parent

    [translatedX, translatedY, translatedVisibility, translatedAlpha]

  ancestorsPositionChanged: (layer) ->
    for ancestor in layer.ancestors
      return true if ancestor.positionChanged()

    false

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.Translate = Translate

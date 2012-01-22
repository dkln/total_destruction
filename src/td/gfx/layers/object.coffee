class Object
  constructor: ->
    @id                    = ''

    @x                     = 0
    @y                     = 0

    @oldX                  = null
    @oldY                  = null
    @calculatedX           = 0
    @calculatedY           = 0

    @width                 = 0
    @height                = 0

    @alpha                 = 1
    @oldAlpha              = 1
    @calculatedAlpha       = 1

    @scaleX                = 1
    @scaleY                = 1
    @oldScaleX             = null
    @oldScaleY             = null
    @calculatedScaleX      = 1
    @calculatedScaleY      = 1

    @rotation              = 0
    @oldRotation           = null
    @calculatedRotation    = 0

    @enabled               = true
    @visible               = true
    @oldVisible            = null
    @calculatedVisibility  = true

    @parent                = null
    @ancestors             = null
    @translatedObjects     = null

  positionChanged: ->
    @x != @oldX || @y != @oldY || @rotation != @oldRotation || @scaleX != @oldScaleX || @scaleY != @oldScaleY || @visible != @old || Td.Gfx.Layers.Translate.ancestorsPositionChanged(this)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.Object = Object

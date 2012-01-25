class Object
  constructor: ->
    @id                    = ''
    @x                     = 0
    @y                     = 0
    @width                 = 0
    @height                = 0
    @alpha                 = 1
    @scaleX                = 1
    @scaleY                = 1
    @rotation              = 0
    @enabled               = true
    @visible               = true
    @parent                = null
    @ancestors             = null
    @translatedObjects     = null

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.Object = Object

DisplayObjects =
  allChildren: []

  children: []

  childrenChanged: false

  cloneCanvas: ->
    canvas        = document.createElement('canvas')
    canvas.width  = @canvas.width
    canvas.height = @canvas.height
    canvas

  render: (ctx) ->
    if @childrenChanged
      @findAllChildren()
      @childrenChanged = false

    @renderAllChildren(ctx)

  setupContext: (ctx, child) ->
    ctx.globalAlpha = child.calculatedAlpha

    for object in child.translatedObjects
      ctx.translate(object.x, object.y)
      ctx.rotate(Td.Services.Math.angleToRadians(object.rotation))
      ctx.scale(object.scaleX, object.scaleY)

  renderAllChildren: (ctx) ->
    for child in @allChildren
      @renderChild(ctx, child) if child.visible

  renderChild: (ctx, child) ->
    ctx.save()
    @setupContext(ctx, child)
    child.render(ctx)
    ctx.restore()

  findAllChildren: ->
    @allChildren = []
    @getChildren(this, @allChildren)

  getChildren: (fromParent, collectedChildren) ->
    for child in fromParent.children
      collectedChildren.push(child)
      @getChildren(child, collectedChildren) if @hasChildren(child)

    collectedChildren

  hasChildren: (object) ->
    object.children? && object.children.length > 0

Td.Services.Mixins.extend(DisplayObjects, Td.Gfx.Layers.ContainerBase)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Renderers ||= {}
@Td.Gfx.Renderers.DisplayObjects = DisplayObjects

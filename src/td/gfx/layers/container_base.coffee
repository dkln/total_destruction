ContainerBase =
  add: (child) ->
    Td.Gfx.Renderers.DisplayObjects.childrenChanged = true

    child.parent.remove(child) if child.parent

    @setAncestorsFor(child)
    child.translatedObjects = [child].concat(child.ancestors).reverse()
    @children.push(child)

    this

  remove: (child) ->
    if (index = @children.indexOf(child)) > -1
      Td.Gfx.Renderers.DisplayObjects.childrenChanged = true

      child.parent            = null
      child.ancestors         = null
      child.translatedObjects = null

      @children.splice(index, 1)

    this

  setAncestorsFor: (child) ->
    child.parent    = this
    child.ancestors = []
    theParent       = this

    while theParent
      child.ancestors.push(theParent)
      theParent = theParent.parent

    true

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.ContainerBase = ContainerBase

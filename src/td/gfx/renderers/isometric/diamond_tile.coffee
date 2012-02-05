DiamondTile =
  width: 50

  height: 25

  render: (ctx, world, viewport, worldX, worldY) ->
    if world.tiles[worldY][worldX]
      x       = @getScreenX(world, viewport, worldX, worldY)
      y       = @getScreenY(world, viewport, worldX, worldY)
      height  = world.tiles[worldY][worldX][0]

      @renderOnScreen(ctx, x, y, height, world.tiles[worldY][worldX][1]) unless @isOffscreen(ctx, x, y)

  renderOnScreen: (ctx, screenX, screenY, height, sprite) ->
    sprite.render(ctx, screenX, screenY - height)

  getScreenX: (world, viewport, worldX, worldY) ->
    ((worldX * parseInt(@width / 2)) + (worldY * parseInt(@width / 2)) - @getScreenOffsetX(viewport))

  getScreenY: (world, viewport, worldX, worldY) ->
    ((worldY * parseInt(@height / 2)) - (worldX * parseInt(@height / 2)) - @getScreenOffsetY(viewport))

  getScreenOffsetX: (viewport) ->
    Math.round(viewport.x * @width)

  getScreenOffsetY: (viewport) ->
    Math.round(viewport.y * @height)

  getScreenWidth: (viewport) ->
    viewport.width * @width

  getScreenHeight: (viewport) ->
    viewport.height * @height

  isOffscreen: (ctx, x, y) ->
    x < -@width || y < -@height || x > ctx.canvas.width || y > ctx.canvas.height


@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Renderers ||= {}
@Td.Gfx.Renderers.Isometric ||= {}
@Td.Gfx.Renderers.Isometric.DiamondTile = DiamondTile

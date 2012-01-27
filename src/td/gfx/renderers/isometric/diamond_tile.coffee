DiamondTile =
  width: 50

  height: 25

  render: (ctx, world, viewport, worldX, worldY) ->
    if world.tiles[worldY][worldX]
      x = @getScreenX(world, viewport, worldX, worldY, world.tiles[worldY][worldX])
      y = @getScreenY(world, viewport, worldX, worldY, world.tiles[worldY][worldX])

      @renderOnScreen(ctx, x, y, world.tiles[worldY][worldX]) unless @isOffscreen(ctx, x, y)

  renderOnScreen: (ctx, screenX, screenY, sprite) ->
    sprite.render(ctx, screenX, screenY)

  getScreenX: (world, viewport, worldX, worldY, tile) ->
    ((worldX * parseInt(@width / 2)) + (worldY * parseInt(@width / 2)) - @getScreenOffsetX(viewport))

  getScreenY: (world, viewport, worldX, worldY, tile) ->
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

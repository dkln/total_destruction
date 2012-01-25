IsometricTile =
  width: 50

  height: 25

  render: (ctx, world, viewport, worldX, worldY) ->
    if world.tiles[worldY][worldX]
      x = @getScreenX(world, viewport, worldX, worldY, world.tiles[worldY][worldX])
      y = @getScreenY(world, viewport, worldX, worldY, world.tiles[worldY][worldX])

      @renderOnScreen(ctx, x, y, world.tiles[worldY][worldX])

  renderOnScreen: (ctx, screenX, screenY, sprite) ->
    sprite.render(ctx, screenX, screenY)

  getScreenX: (world, viewport, worldX, worldY, tile) ->
    x = @getScreenOffsetX(worldY, viewport) + @getWorldOffsetX(worldX, viewport) * @width
    Math.round(@getCenterX(x, tile))

  getScreenY: (world, viewport, worldX, worldY, tile) ->
    y = @getWorldOffsetY(worldY, viewport) * @height / 2
    Math.round(@getCenterY(y, tile))

  getCenterX: (x, tile) ->
    x + (@width / 2 - tile.width / 2)

  getCenterY: (y, tile) ->
    y + (@height / 2 - tile.height / 2)

  getWorldOffsetX: (x, viewport) ->
    x - viewport.x

  getWorldOffsetY: (y, viewport) ->
    y - viewport.y

  getScreenOffsetX: (worldY, viewport) ->
    if @getWorldOffsetY(worldY, viewport) % 2 == 0
      @width / 2
    else
      0

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Renderers ||= {}
@Td.Gfx.Renderers.IsometricTile = IsometricTile

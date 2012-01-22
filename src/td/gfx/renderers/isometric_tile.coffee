IsometricTile =
  width: 50

  height: 25

  render: (ctx, world, viewport, worldX, worldY) ->
    x = @getScreenX(world, viewport, worldX, worldY, world[worldY][worldX])
    y = @getScreenY(world, viewport, worldX, worldY, world[worldY][worldX])

    @renderOnScreen(x, y, world[worldY][worldX]) if world[worldY][worldX]

  renderOnScreen: (ctx, screenX, screenY, sprite) ->
    sprite.render(ctx, screenX, screenY)

  getScreenX: (world, viewport, worldX, worldY, tile) ->
    x = @getScreenOffsetX(worldY, viewport) + @getWorldOffsetX(worldX, viewport) * @width
    @getCenterX(x, tile)

  getScreenY: (world, viewport, worldX, worldY, tile) ->
    y = @getWorldOffsetY(worldY, viewport) * @height / 2
    @getCenterY(y, tile)

  getCenterX: (x, tile) ->
    x + (@width / 2 - tile.sprite.width / 2)

  getCenterY: (x, tile) ->
    y + (@height / 2 - tile.sprite.height / 2)

  getWorldOffsetX: (x, viewport) ->
    viewport.x - x

  getWorldOffsetY: (y, viewport) ->
    viewport.y - y

  getScreenOffsetX: (worldY, viewport) ->
    if @getWorldOffsetY(worldY) % 2 == 0
      @width / 2
    else
      0

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Renderers ||= {}
@Td.Gfx.Renderers.IsometricTile = IsometricTile

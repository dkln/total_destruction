Isometric =
  render: (ctx, world, viewport) ->
    fromX = viewport.x
    toX   = viewport.boundX(world)

    for worldY in [viewport.y..viewport.boundY(world)]
      for worldX in [toX..fromX]
        Td.Gfx.Renderers.IsometricTile.render(ctx, world, viewport, worldX, worldY)


@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Renderers ||= {}
@Td.Gfx.Renderers.Isometric = Isometric

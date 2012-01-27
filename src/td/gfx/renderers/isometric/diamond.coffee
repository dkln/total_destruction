Diamond =
  render: (ctx, world, viewport) ->
    for worldY in [0..world.height]
      for worldX in [world.width..0]
        Td.Gfx.Renderers.Isometric.DiamondTile.render(ctx, world, viewport, worldX, worldY)


@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Renderers ||= {}
@Td.Gfx.Renderers.Isometric ||= {}
@Td.Gfx.Renderers.Isometric.Diamond = Diamond

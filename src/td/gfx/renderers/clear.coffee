Clear =
  render: (ctx, width, height) ->
    ctx.clearRect(0, 0, width, height)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Renderers ||= {}
@Td.Gfx.Renderers.Clear = Clear

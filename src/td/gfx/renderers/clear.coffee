Clear =
  render: (ctx) ->
    ctx.clearRect(0, 0, @canvas.width, @canvas.height)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Renderers ||= {}
@Td.Gfx.Renderers.Clear = Clear

class Container
  render: (ctx) ->
    true

Td.Services.Mixins.include(Container, Td.Gfx.Layers.ContainerBase)

@Td ||= {}
@Td.Gfx ||= {}
@Td.Gfx.Layers ||= {}
@Td.Gfx.Layers.Container = Container

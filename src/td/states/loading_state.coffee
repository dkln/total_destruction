LoadingState extends BaseState
  assets: {
    logo: 'logo.png'
  }

  handleOpen: ->
    @setOpenReady()

  load: ->
    for id, url in @assets
      Td.Services.SpriteLoader.add(id, url)

    Td.Services.SpriteLoader.load(@handleLoadComplete, @handleStatusUpdate)

  handleLoadComplete: =>

  handleStatusUpdate: =>


@Td ||= {}
@Td.States ||= {}
@Td.Sates.LoadingState = LoadingState

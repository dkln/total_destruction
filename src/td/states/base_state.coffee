class BaseState
  constructor: ->
    @openReady  = false
    @closeReady = false

  setOpenReady: ->
    @setOpenReady = true

  setCloseReady: ->
    @closeReady = true

@Td ||= {}
@Td.States ||= {}
@Td.States.BaseState = BaseState

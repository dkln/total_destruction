(function() {
  var BaseState, _base;

  BaseState = (function() {

    function BaseState() {
      this.openReady = false;
      this.closeReady = false;
    }

    BaseState.prototype.setOpenReady = function() {
      return this.setOpenReady = true;
    };

    BaseState.prototype.setCloseReady = function() {
      return this.closeReady = true;
    };

    return BaseState;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).States || (_base.States = {});

  this.Td.States.BaseState = BaseState;

}).call(this);

(function() {
  var Mouse, _base;

  Mouse = {
    canvasX: 0,
    canvasY: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    x: 0,
    y: 0,
    focus: false,
    down: false,
    init: function(ctx) {
      var _this = this;
      this.canvasX = $(ctx.canvas).offset().left;
      this.canvasY = $(ctx.canvas).offset().top;
      this.canvasWidth = ctx.canvas.width;
      this.canvasHeight = ctx.canvas.height;
      $(ctx.canvas).mousemove(function(event) {
        return _this.handleMousemove(event);
      });
      $(ctx.canvas).mouseout(function(event) {
        return _this.handleMouseout(event);
      });
      $('body').mousedown(function(event) {
        return _this.handleMousedown(event);
      });
      return $('body').mouseup(function(event) {
        return _this.handleMouseup(event);
      });
    },
    cleanup: function() {
      return this.moved = false;
    },
    handleMousemove: function(event) {
      this.focus = true;
      this.moved = true;
      this.x = event.pageX - this.canvasX;
      return this.y = event.pageY - this.canvasY;
    },
    handleMouseout: function(event) {
      return this.focus = false;
    },
    handleMousedown: function(event) {
      return this.down = true;
    },
    handleMouseup: function(event) {
      return this.down = false;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Ui || (_base.Ui = {});

  this.Td.Ui.Mouse = Mouse;

}).call(this);

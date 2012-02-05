(function() {
  var InteractiveViewport, _base;

  InteractiveViewport = {
    snapX: 30,
    snapY: 30,
    canvasWidth: 0,
    canvasHeight: 0,
    canvasX: 0,
    canvasY: 0,
    init: function(ctx) {
      var _this = this;
      this.canvasX = $(ctx.canvas).offset().left;
      this.canvasY = $(ctx.canvas).offset().top;
      this.canvasWidth = ctx.canvas.width;
      this.canvasHeight = ctx.canvas.height;
      this.snapX = this.canvasWidth / 3;
      this.snapY = this.canvasHeight / 3;
      this.focus = false;
      $(ctx.canvas).mousemove(function(event) {
        return _this.handleMousemove(event);
      });
      return $(ctx.canvas).mouseout(function(event) {
        return _this.handleMouseout(event);
      });
    },
    setViewport: function(viewport) {
      return this.viewport = viewport;
    },
    handleMousemove: function(event) {
      this.focus = true;
      this.currentX = event.pageX - this.canvasX;
      return this.currentY = event.pageY - this.canvasY;
    },
    handleMouseout: function(event) {
      return this.focus = false;
    },
    update: function() {
      if (this.focus && this.isInCorner()) return this.move();
    },
    move: function() {
      this.viewport.x = this.viewport.x + (this.getXIncrement() * this.getXSpeed());
      return this.viewport.y = this.viewport.y + (this.getYIncrement() * this.getYSpeed());
    },
    getXIncrement: function() {
      if (this.isLeft()) {
        return -1;
      } else if (this.isRight()) {
        return 1;
      } else {
        return 0;
      }
    },
    getYIncrement: function() {
      if (this.isUp()) {
        return -1;
      } else if (this.isDown()) {
        return 1;
      } else {
        return 0;
      }
    },
    getXSpeed: function() {
      return this.getXMovement() * .0025;
    },
    getYSpeed: function() {
      return this.getYMovement() * .0025;
    },
    getXMovement: function() {
      if (this.isLeft()) {
        return this.snapX - this.currentX;
      } else if (this.isRight()) {
        return this.snapX - (this.canvasWidth - this.currentX);
      } else {
        return 0;
      }
    },
    getYMovement: function() {
      if (this.isUp()) {
        return this.snapY - this.currentY;
      } else if (this.isDown()) {
        return this.snapY - (this.canvasHeight - this.currentY);
      } else {
        return 0;
      }
    },
    isInCorner: function() {
      return this.isLeft() || this.isRight() || this.isUp() || this.isDown();
    },
    isLeft: function() {
      return this.currentX < this.snapX;
    },
    isRight: function() {
      return this.currentX > this.canvasWidth - this.snapX;
    },
    isUp: function() {
      return this.currentY < this.snapY;
    },
    isDown: function() {
      return this.currentY > this.canvasHeight - this.snapY;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).World || (_base.World = {});

  this.Td.World.InteractiveViewport = InteractiveViewport;

}).call(this);

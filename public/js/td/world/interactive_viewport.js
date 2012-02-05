(function() {
  var InteractiveViewport, _base;

  InteractiveViewport = {
    snap: 30,
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
      return $('body').mousemove(function(event) {
        return _this.handleMousemove(event);
      });
    },
    setViewport: function(viewport) {
      return this.viewport = viewport;
    },
    handleMousemove: function(event) {
      this.currentX = event.pageX - this.canvasX;
      return this.currentY = event.pageY - this.canvasY;
    },
    update: function() {
      if (this.isInCorner()) return this.move();
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
      return this.getXMovement() * .01;
    },
    getYSpeed: function() {
      return this.getYMovement() * .01;
    },
    getXMovement: function() {
      if (this.isLeft()) {
        return this.snap - this.currentX;
      } else if (this.isRight()) {
        return this.snap - (this.canvasWidth - this.currentX);
      } else {
        return 0;
      }
    },
    getYMovement: function() {
      if (this.isUp()) {
        return this.snap - this.currentY;
      } else if (this.isDown()) {
        return this.snap - (this.canvasHeight - this.currentY);
      } else {
        return 0;
      }
    },
    isInCorner: function() {
      return this.isLeft() || this.isRight() || this.isUp() || this.isDown();
    },
    isLeft: function() {
      return this.currentX < this.snap;
    },
    isRight: function() {
      return this.currentX > this.canvasWidth - this.snap;
    },
    isUp: function() {
      return this.currentY < this.snap;
    },
    isDown: function() {
      return this.currentY > this.canvasHeight - this.snap;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).World || (_base.World = {});

  this.Td.World.InteractiveViewport = InteractiveViewport;

}).call(this);

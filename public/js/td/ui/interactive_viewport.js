(function() {
  var InteractiveViewport, _base;

  InteractiveViewport = {
    snapX: 30,
    snapY: 30,
    viewport: null,
    init: function(ctx) {
      this.snapX = Td.Ui.Mouse.canvasWidth / 3;
      this.snapY = Td.Ui.Mouse.canvasHeight / 3;
      return this.focus = false;
    },
    update: function() {
      if (Td.Ui.Mouse.focus) return this.move();
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
        return this.snapX - Td.Ui.Mouse.x;
      } else if (this.isRight()) {
        return this.snapX - (Td.Ui.Mouse.canvasWidth - Td.Ui.Mouse.x);
      } else {
        return 0;
      }
    },
    getYMovement: function() {
      if (this.isUp()) {
        return this.snapY - Td.Ui.Mouse.y;
      } else if (this.isDown()) {
        return this.snapY - (Td.Ui.Mouse.canvasHeight - Td.Ui.Mouse.y);
      } else {
        return 0;
      }
    },
    isInCorner: function() {
      return this.isLeft() || this.isRight() || this.isUp() || this.isDown();
    },
    isLeft: function() {
      return Td.Ui.Mouse.x < this.snapX;
    },
    isRight: function() {
      return Td.Ui.Mouse.x > Td.Ui.Mouse.canvasWidth - this.snapX;
    },
    isUp: function() {
      return Td.Ui.Mouse.y < this.snapY;
    },
    isDown: function() {
      return Td.Ui.Mouse.y > Td.Ui.Mouse.canvasHeight - this.snapY;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Ui || (_base.Ui = {});

  this.Td.Ui.InteractiveViewport = InteractiveViewport;

}).call(this);

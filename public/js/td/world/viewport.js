(function() {
  var Viewport, _base;

  Viewport = (function() {

    function Viewport() {
      this.x = 0;
      this.y = 0;
      this.width = 15;
      this.height = 15;
    }

    Viewport.prototype.getX = function() {
      return parseInt(this.x);
    };

    Viewport.prototype.getY = function() {
      return parseInt(this.y);
    };

    Viewport.prototype.getOffsetFactorX = function() {
      return this.x - parseInt(this.x);
    };

    Viewport.prototype.getOffsetFactorY = function() {
      return this.y - parseInt(this.y);
    };

    Viewport.prototype.boundX = function(world) {
      var boundX;
      boundX = this.getX() + this.width;
      if (boundX > world.width) boundX = world.width;
      return boundX;
    };

    Viewport.prototype.boundY = function(world) {
      var boundY;
      boundY = this.getY() + this.height;
      if (boundY > world.height) boundY = world.height;
      return boundY;
    };

    return Viewport;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).World || (_base.World = {});

  this.Td.World.Viewport = Viewport;

}).call(this);

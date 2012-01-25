(function() {
  var Viewport, _base;

  Viewport = (function() {

    function Viewport() {
      this.x = 0;
      this.y = 0;
      this.width = 50;
      this.height = 50;
    }

    Viewport.prototype.boundX = function(world) {
      var boundX;
      boundX = this.x + this.width;
      if (boundX > world.width) boundX = world.width;
      return boundX;
    };

    Viewport.prototype.boundY = function(world) {
      var boundY;
      boundY = this.y + this.height;
      if (boundY > world.height) boundY = world.height;
      return boundY;
    };

    return Viewport;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).World || (_base.World = {});

  this.Td.World.Viewport = Viewport;

}).call(this);

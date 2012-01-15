(function() {
  var Viewport, _base;

  Viewport = (function() {

    function Viewport() {
      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;
    }

    Viewport.prototype.boundX = function(world) {
      var boundX;
      boundX = x + this.width;
      if (boundX > world.width) return boundX = world.width;
    };

    Viewport.prototype.boundY = function(world) {
      var boundY;
      boundY = y + this.height;
      if (boundX > world.height) return boundY = world.height;
    };

    return Viewport;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  this.Td.Gfx.Viewport = Viewport;

}).call(this);

(function() {
  var World, _base;

  World = (function() {

    function World() {
      this.width = 0;
      this.height = 0;
      this.tiles = [];
    }

    World.prototype.set = function(tileId, x, y) {
      var _base;
      (_base = this.tiles)[y] || (_base[y] = []);
      this.tiles[y][x] = tileId;
      if (x > this.width) this.width = x;
      if (y > this.height) return this.height = y;
    };

    return World;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  this.Td.Gfx.World = World;

}).call(this);

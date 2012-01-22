(function() {
  var Base, _base;

  Base = (function() {

    function Base() {
      this.width = 0;
      this.height = 0;
      this.tiles = [];
    }

    Base.prototype.set = function(sprite, x, y) {
      var _base;
      (_base = this.tiles)[y] || (_base[y] = []);
      this.tiles[y][x] = sprite;
      if (x > this.width) this.width = x;
      if (y > this.height) return this.height = y;
    };

    return Base;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).World || (_base.World = {});

  this.Td.World.Base = Base;

}).call(this);

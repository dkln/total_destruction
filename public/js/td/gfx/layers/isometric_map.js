(function() {
  var IsometricMap, _base, _base2,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  IsometricMap = (function(_super) {

    __extends(IsometricMap, _super);

    function IsometricMap(world, viewport) {
      this.world = world;
      this.viewport = viewport;
    }

    IsometricMap.prototype.render = function(ctx) {
      return Td.Gfx.Renderers.Isometric(ctx, this.world, this.viewport);
    };

    return IsometricMap;

  })(Td.Gfx.Layers.Object);

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Layers || (_base2.Layers = {});

  this.Td.Gfx.Layers.IsometricMap = IsometricMap;

}).call(this);

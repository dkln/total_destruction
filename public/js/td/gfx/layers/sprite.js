(function() {
  var Sprite, _base, _base2,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Sprite = (function(_super) {

    __extends(Sprite, _super);

    function Sprite(sprite) {
      this.sprite = sprite;
    }

    Sprite.prototype.render = function(ctx) {
      return this.sprite.render(ctx, 0, 0);
    };

    return Sprite;

  })(Td.Gfx.Layers.Object);

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Layers || (_base2.Layers = {});

  this.Td.Gfx.Layers.Sprite = Sprite;

}).call(this);

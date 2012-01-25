(function() {
  var Sprite, _base;

  Sprite = (function() {

    function Sprite(image) {
      this.image = image;
      this.width = this.image.width;
      this.height = this.image.height;
    }

    Sprite.prototype.render = function(ctx, x, y) {
      return ctx.drawImage(this.image, x, y);
    };

    return Sprite;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  this.Td.Gfx.Sprite = Sprite;

}).call(this);

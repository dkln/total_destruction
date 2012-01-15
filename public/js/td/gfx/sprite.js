(function() {
  var Sprite, _base;

  Sprite = (function() {

    function Sprite(id, url) {
      this.id = id;
      this.url = url;
      this.loaded = false;
      this.image = null;
    }

    Sprite.prototype.load = function(onComplete) {
      this.image = new Image();
      this.image.onload = onComplete;
      return this.image.src = this.url;
    };

    Sprite.prototype.render = function(ctx, x, y) {
      return ctx.drawImage(this.image, x, y);
    };

    return Sprite;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  this.Td.Gfx.Sprite = Sprite;

}).call(this);

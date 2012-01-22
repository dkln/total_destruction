(function() {
  var Sprite, _base, _base2;

  Sprite = (function() {

    function Sprite(id, url) {
      this.id = id;
      this.url = url;
      this.image = null;
    }

    Sprite.prototype.load = function(onComplete) {
      this.image = new Image();
      this.image.onload = onComplete;
      return this.image.src = this.url;
    };

    Sprite.prototype.get = function() {
      return new Td.Gfx.Sprite(this.image);
    };

    return Sprite;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  (_base2 = this.Td.Services).Loader || (_base2.Loader = {});

  this.Td.Services.Loader.Sprite = Sprite;

}).call(this);

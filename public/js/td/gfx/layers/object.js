(function() {
  var Object, _base, _base2;

  Object = (function() {

    function Object() {
      this.id = '';
      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;
      this.alpha = 1;
      this.scaleX = 1;
      this.scaleY = 1;
      this.rotation = 0;
      this.enabled = true;
      this.visible = true;
      this.parent = null;
      this.ancestors = null;
      this.translatedObjects = null;
    }

    return Object;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Layers || (_base2.Layers = {});

  this.Td.Gfx.Layers.Object = Object;

}).call(this);

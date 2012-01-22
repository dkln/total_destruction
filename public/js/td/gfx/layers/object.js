(function() {
  var Object, _base, _base2;

  Object = (function() {

    function Object() {
      this.id = '';
      this.x = 0;
      this.y = 0;
      this.oldX = null;
      this.oldY = null;
      this.calculatedX = 0;
      this.calculatedY = 0;
      this.width = 0;
      this.height = 0;
      this.alpha = 1;
      this.oldAlpha = 1;
      this.calculatedAlpha = 1;
      this.scaleX = 1;
      this.scaleY = 1;
      this.oldScaleX = null;
      this.oldScaleY = null;
      this.calculatedScaleX = 1;
      this.calculatedScaleY = 1;
      this.rotation = 0;
      this.oldRotation = null;
      this.calculatedRotation = 0;
      this.enabled = true;
      this.visible = true;
      this.oldVisible = null;
      this.calculatedVisibility = true;
      this.parent = null;
      this.ancestors = null;
      this.translatedObjects = null;
    }

    Object.prototype.positionChanged = function() {
      return this.x !== this.oldX || this.y !== this.oldY || this.rotation !== this.oldRotation || this.scaleX !== this.oldScaleX || this.scaleY !== this.oldScaleY || this.visible !== this.old || Td.Gfx.Layers.Translate.ancestorsPositionChanged(this);
    };

    return Object;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Layers || (_base2.Layers = {});

  this.Td.Gfx.Layers.Object = Object;

}).call(this);

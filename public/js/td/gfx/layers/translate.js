(function() {
  var Translate, _base, _base2;

  Translate = {
    setCanvasPositions: function(layer) {
      if (layer.positionChanged()) {
        layer.oldX = layer.x;
        layer.oldY = layer.y;
        layer.oldVisible = layer.visible;
        layer.oldAlpha = layer.alpha;
        layer.oldScaleX = layer.scaleX;
        layer.oldScaleY = layer.scaleY;
        return layer.oldRotation = layer.rotation;
      }
    },
    ancestorsPositionChanged: function(layer) {
      var ancestor, _i, _len, _ref;
      _ref = layer.ancestors;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ancestor = _ref[_i];
        if (ancestor.positionChanged()) return true;
      }
      return false;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Layers || (_base2.Layers = {});

  this.Td.Gfx.Layers.Translate = Translate;

}).call(this);

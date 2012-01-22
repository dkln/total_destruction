(function() {
  var Translate, _base, _base2;

  Translate = {
    setCanvasPositions: function(layer) {
      var newVars;
      if (layer.positionChanged()) {
        layer.oldX = layer.x;
        layer.oldY = layer.y;
        layer.oldVisible = layer.visible;
        layer.oldAlpha = layer.alpha;
        newVars = this.getCanvasPositions(layer);
        layer.calculatedX = newVars[0];
        layer.calculatedY = newVars[1];
        layer.calculatedVisibility = newVars[2];
        return layer.calculatedAlpha = newVars[3];
      }
    },
    getCanvasPositions: function(layer) {
      var theParent, translatedAlpha, translatedVisibility, translatedX, translatedY;
      theParent = layer;
      translatedX = 0;
      translatedY = 0;
      translatedVisibility = true;
      translatedAlpha = 1;
      while (theParent) {
        if (!theParent.visible) translatedVisibility = false;
        translatedX += theParent.x;
        translatedY += theParent.y;
        translatedAlpha *= theParent.alpha;
        theParent = theParent.parent;
      }
      return [translatedX, translatedY, translatedVisibility, translatedAlpha];
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

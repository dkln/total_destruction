(function() {
  var DisplayObjects, _base, _base2;

  DisplayObjects = {
    allChildren: [],
    children: [],
    childrenChanged: false,
    cloneCanvas: function() {
      var canvas;
      canvas = document.createElement('canvas');
      canvas.width = this.canvas.width;
      canvas.height = this.canvas.height;
      return canvas;
    },
    render: function(ctx) {
      if (this.childrenChanged) {
        this.findAllChildren();
        this.childrenChanged = false;
      }
      return this.renderAllChildren(ctx);
    },
    setupContext: function(ctx, child) {
      var object, _i, _len, _ref, _results;
      ctx.globalAlpha = child.calculatedAlpha;
      _ref = child.translatedObjects;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        object = _ref[_i];
        ctx.translate(object.x, object.y);
        ctx.rotate(Td.Services.Math.angleToRadians(object.rotation));
        _results.push(ctx.scale(object.scaleX, object.scaleY));
      }
      return _results;
    },
    renderAllChildren: function(ctx) {
      var child, _i, _len, _ref, _results;
      _ref = this.allChildren;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        Td.Gfx.Layers.Translate.setCanvasPositions(child);
        if (child.calculatedVisibility) {
          _results.push(this.renderChild(ctx));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    },
    renderChild: function(ctx) {
      ctx.save();
      this.setupContext(ctx, child);
      child.render(ctx);
      return ctx.restore();
    },
    findAllChildren: function() {
      this.allChildren = [];
      return this.getChildren(this, this.allChildren);
    },
    getChildren: function(fromParent, collectedChildren) {
      var child, _i, _len, _ref;
      _ref = fromParent.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        collectedChildren.push(child);
        if (this.hasChildren(child)) this.getChildren(child, collectedChildren);
      }
      return collectedChildren;
    },
    hasChildren: function(object) {
      return (object.children != null) && object.children.length > 0;
    },
    positionChanged: function() {
      return false;
    }
  };

  Td.Services.Mixins.extend(DisplayObjects, Td.Gfx.Layers.ContainerBase);

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Renderers || (_base2.Renderers = {});

  this.Td.Gfx.Renderers.DisplayObjects = DisplayObjects;

}).call(this);

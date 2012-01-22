(function() {
  var ContainerBase, _base, _base2;

  ContainerBase = {
    add: function(child) {
      Td.Gfx.Renderers.DisplayObjects.childrenChanged = true;
      if (child.parent) child.parent.remove(child);
      this.setAncestorsFor(child);
      child.translatedObjects = [child].concat(child.ancestors).reverse();
      this.children.push(child);
      return this;
    },
    remove: function(child) {
      var index;
      if ((index = this.children.indexOf(child)) > -1) {
        Td.Gfx.Renderers.DisplayObjects.childrenChanged = true;
        child.parent = null;
        child.ancestors = null;
        child.translatedObjects = null;
        this.children.splice(index, 1);
      }
      return this;
    },
    setAncestorsFor: function(child) {
      var theParent;
      child.parent = this;
      child.ancestors = [];
      theParent = this;
      while (theParent) {
        child.ancestors.push(theParent);
        theParent = theParent.parent;
      }
      return true;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Layers || (_base2.Layers = {});

  this.Td.Gfx.Layers.ContainerBase = ContainerBase;

}).call(this);

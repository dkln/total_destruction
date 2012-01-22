(function() {
  var Container, _base, _base2;

  Container = (function() {

    function Container() {}

    Container.prototype.render = function(ctx) {
      return true;
    };

    return Container;

  })();

  Td.Services.Mixins.include(Container, Td.Gfx.Layers.ContainerBase);

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Layers || (_base2.Layers = {});

  this.Td.Gfx.Layers.Container = Container;

}).call(this);

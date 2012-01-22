(function() {
  var Clear, _base, _base2;

  Clear = {
    render: function(ctx, width, height) {
      return ctx.clearRect(0, 0, width, height);
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Renderers || (_base2.Renderers = {});

  this.Td.Gfx.Renderers.Clear = Clear;

}).call(this);

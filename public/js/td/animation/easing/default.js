(function() {
  var Default, _base, _base2;

  Default = function(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Animation || (_base.Animation = {});

  (_base2 = this.Td.Animation).Easing || (_base2.Easing = {});

  this.Td.Animation.Easing.Default = Default;

}).call(this);

(function() {
  var Math, _base;

  Math = {
    angleToRadians: function(angle) {
      return angle * Math.PI / 180;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  this.Td.Services.Math = Math;

}).call(this);

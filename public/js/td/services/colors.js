(function() {
  var Colors, _base;

  Colors = {
    hex2rgba: function(hex) {
      var num;
      num = parseInt(hex.slice(1), 16);
      return [num >> 16 & 255, num >> 8 & 255, num & 255, num >> 24 & 255];
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  this.Td.Services.Colors = Colors;

}).call(this);

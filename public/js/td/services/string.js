(function() {
  var String, _base;

  String = {
    titleize: function(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1);
    },
    generateId: function(length) {
      var id;
      if (length == null) length = 8;
      id = '';
      while (id.length < length) {
        id += Math.random().toString(36).substr(2);
      }
      return id.substr(0, length);
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  this.Td.Services.String = String;

}).call(this);

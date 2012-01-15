(function() {
  var IdGenerator, _base;

  IdGenerator = {
    generate: function(length) {
      var id;
      if (length == null) length = 8;
      id = "";
      while (id.length < length) {
        id += Math.random().toString(36).substr(2);
      }
      return id.substr(0, length);
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  this.Td.Services.IdGenerator = IdGenerator;

}).call(this);

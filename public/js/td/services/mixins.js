(function() {
  var Mixins, _base;

  Mixins = {
    extend: function(object, mixin) {
      var method, name, _results;
      _results = [];
      for (name in mixin) {
        method = mixin[name];
        _results.push(object[name] = method);
      }
      return _results;
    },
    include: function(object, mixin) {
      return this.extend(object.prototype, mixin);
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  this.Td.Services.Mixins = Mixins;

}).call(this);

(function() {
  var World, _base, _base2,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World = (function() {

    function World(id, url) {
      this.id = id;
      this.url = url;
      this.handleStateChange = __bind(this.handleStateChange, this);
      this.data = null;
      this.request = new XMLHttpRequest();
      this.onComplete = null;
    }

    World.prototype.load = function(onComplete) {
      this.onComplete = onComplete;
      this.request.onreadystatechange = this.handleStateChange;
      this.request.open('GET', "" + this.url + "?ts=" + (this.getTimestamp()), true);
      this.request.setRequestHeader('Pragma', 'Cache-Control: no-cache');
      return this.request.send(null);
    };

    World.prototype.handleStateChange = function(event) {
      if (this.isStatusOk() && this.isReady()) {
        this.request.onreadystatechange = null;
        this.data = this.request.responseText;
        return this.onComplete();
      }
    };

    World.prototype.isStatusOk = function() {
      return this.request.readyState === 4;
    };

    World.prototype.isReady = function() {
      return this.request.status === 200;
    };

    World.prototype.get = function() {
      var converter;
      converter = new Td.World.Converter(new Td.World.Base(), this.data);
      return converter.convert();
    };

    World.prototype.getTimestamp = function() {
      return new Date().getTime();
    };

    return World;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  (_base2 = this.Td.Services).Loader || (_base2.Loader = {});

  this.Td.Services.Loader.World = World;

}).call(this);

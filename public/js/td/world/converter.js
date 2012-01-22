(function() {
  var Converter, _base;

  Converter = (function() {

    function Converter(world, data, spriteMapping) {
      this.world = world;
      this.data = data;
      this.spriteMapping = spriteMapping != null ? spriteMapping : Td.Game.SpriteMapping;
    }

    Converter.prototype.convert = function() {
      var rowData, y, _i, _len, _ref;
      y = 0;
      _ref = this.getRows(this.data);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        rowData = _ref[_i];
        this.setRow(y, rowData);
        y++;
      }
      return this.world;
    };

    Converter.prototype.setRow = function(y, rowData) {
      var tileId, x, _i, _len, _ref, _results;
      x = 0;
      _ref = this.getColumns(rowData);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tileId = _ref[_i];
        this.setColumn(x, y, tileId);
        _results.push(x++);
      }
      return _results;
    };

    Converter.prototype.setColumn = function(x, y, tileId) {
      var spriteId;
      spriteId = this.spriteMapping[tileId];
      if (spriteId) return this.world.set(x, y, Td.Services.Loader.get(spriteId));
    };

    Converter.prototype.getRows = function() {
      return this.data.split("\n");
    };

    Converter.prototype.getColumns = function(data) {
      return data.split(',');
    };

    return Converter;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).World || (_base.World = {});

  this.Td.World.Converter = Converter;

}).call(this);

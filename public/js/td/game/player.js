(function() {
  var Player, _base;

  Player = (function() {

    function Player() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.name = '';
      this.id = Td.Services.String.generateId();
    }

    return Player;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Game || (_base.Game = {});

  this.Td.Game.Player = Player;

}).call(this);

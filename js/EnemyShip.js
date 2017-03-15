class EnemyShipController {
  constructor(x,y, spriteName, configs) {
    this.sprite = Nakama.game.add.sprite(
      x,
      y ,
      "assets" ,
      spriteName);
      Nakama.game.physics.arcade.enable(this.sprite);
      this.sprite.body.collideWorldBounds = true;
      this.configs =configs;

    }
    update () {
      if(this.sprite.position.x > 400) {
        this.sprite.body.velocity.x = -EnemyShipController.SHIP_SPEED;
      }
      else if(this.sprite.position.x < 120) {
        this.sprite.body.velocity.x = EnemyShipController.SHIP_SPEED;
      }
      if(this.sprite.position.y > 180) {
        this.sprite.body.velocity.y = -EnemyShipController.SHIP_SPEED;
      }
      else if(this.sprite.position.y < 20) {
        this.sprite.body.velocity.y = EnemyShipController.SHIP_SPEED;
      }

    }
  }
  EnemyShipController.SHIP_SPEED = 200

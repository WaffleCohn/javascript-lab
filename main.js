var scoreBoard = document.getElementById("score"),
    startButton = document.getElementById("startButton"),
    canvas = document.getElementById("game"),
    ctx = canvas.getContext("2d");

var player = {
  body: [
    new Rectangle(0, 0, 30, 10),
    new Rectangle(0, 0, 10, 30),
    new Rectangle(20, 0, 10, 30),
    new Rectangle(0, 20, 30, 10),
    new Rectangle(10, 30, 10, 10),
    new Rectangle(0, 40, 30, 10),
    new Rectangle(0, 50, 10, 10),
    new Rectangle(20, 50, 10, 10)
  ],
  hitbox: new Rectangle((canvas.width - 30) / 2, canvas.height - 60, 30, 60),
  color: "red",
  draw: function()
  {
    for (var i = 0; i < this.body.length; i++)
    {
      this.body[i].draw(ctx, this.color, this.hitbox);
    }
  },
  erase: function()
  {
    clearRect(ctx, this.hitbox);
  },
  moveLeft: function()
  {
    this.erase();
    this.hitbox.x -= 10;
    if (this.hitbox.x < 0)
      this.hitbox.x = 0;
    this.draw();
  },
  moveRight: function()
  {
    this.erase();
    this.hitbox.x += 10;
    if (this.hitbox.x > canvas.width - this.hitbox.width)
      this.hitbox.x = canvas.width - this.hitbox.width;
    this.draw();
  }
};

document.body.onload = function()
{
  player.draw();
};

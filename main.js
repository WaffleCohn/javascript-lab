var scoreBoard = document.getElementById("score"),
    startButton = document.getElementById("startButton"),
    canvas = document.getElementById("game"),
    ctx = canvas.getContext("2d");

var player = {
  hitbox: new Rectangle((canvas.width - 30) / 2, canvas.height - 60, 30, 60),
  color: "red",
  draw: function()
  {
    this.hitbox.draw(ctx, this.color);
  }
};

document.body.onload = function()
{
  player.draw();
};

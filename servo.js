var j = require("johnny-five");
var circuito = new j.Board();
var bombillo, motor;

circuito.on("ready", prender);

function prender()
{
  bombillo = new j.Led(13);
  bombillo.blink(3000);

  motor = new j.Servo(9);
  motor.to(70);
}

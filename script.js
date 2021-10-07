var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var canvas4 = document.getElementById("canvas4");
var ctxt1 = canvas1.getContext('2d');
var ctxt2 = canvas2.getContext('2d');
var ctxt3 = canvas3.getContext('2d');
var ctxt4 = canvas4.getContext('2d');


canvas1.height = 400;
canvas1.width = 400;
canvas2.height = 400;
canvas2.width = 400;
canvas3.height = 400;
canvas3.width = 400;
canvas4.height = 400;
canvas4.width = 400;

//Drapeau
ctxt1.beginPath();
ctxt1.lineWidth = 100;
ctxt1.moveTo(100, 30);
ctxt1.lineTo(100, 300);
ctxt1.strokeStyle = 'black'
ctxt1.stroke();

ctxt1.beginPath();
ctxt1.lineWidth = 100;
ctxt1.strokeStyle = 'red'
ctxt1.moveTo(200, 30);
ctxt1.lineTo(200, 300);
ctxt1.stroke();


ctxt1.beginPath();
ctxt1.lineWidth = 100;
ctxt1.strokeStyle = 'yellow'
ctxt1.moveTo(300, 30);
ctxt1.lineTo(300, 300);
ctxt1.stroke();

// Bateau
ctxt2.beginPath();
ctxt2.strokeStyle = 'sienna'
ctxt2.lineWidth = 10;
ctxt2.moveTo(30, 250);
ctxt2.lineTo(95, 320);
ctxt2.lineTo(280, 320);
ctxt2.lineTo(330, 250);
ctxt2.fillStyle = "peru";
ctxt2.fill();
ctxt2.stroke();

ctxt2.beginPath();
ctxt2.moveTo(155, 15);
ctxt2.lineTo(155, 250);
// ctxt2.lineWidth = 10;
ctxt2.stroke();

ctxt2.beginPath();
ctxt2.moveTo(180, 40);
ctxt2.lineTo(320, 220);
ctxt2.lineTo(180, 220);
ctxt2.lineTo(180, 40);
ctxt2.strokeStyle = 'lightblue';
ctxt2.fillStyle = "lightblue";
ctxt2.fill();
ctxt2.stroke();
//House

ctxt3.beginPath();
ctxt3.moveTo(30, 20);
ctxt3.lineTo(50, 70);
ctxt3.lineTo(300, 70);
ctxt3.lineTo(270, 20)
ctxt3.lineTo(30, 20);
ctxt3.lineTo(20, 70)
ctxt3.lineTo(50, 70);
ctxt3.moveTo(300, 70);
ctxt3.lineTo(310, 20);
ctxt3.lineTo(270, 20);
ctxt3.moveTo(310, 20);
ctxt3.lineTo(310, 350);
ctxt3.lineTo(230, 350);
ctxt3.lineTo(230, 140);
ctxt3.lineTo(100, 140);
ctxt3.lineTo(100, 350);
ctxt3.lineTo(20, 350);
ctxt3.lineTo(20, 70);
ctxt3.moveTo(50, 70);
ctxt3.lineTo(50, 350);
ctxt3.moveTo(300, 70);
ctxt3.lineTo(300, 350);
ctxt3.stroke();

// un home
ctxt4.beginPath();
ctxt4.arc(150, 100, 20, 0, 2 * Math.PI);
ctxt4.moveTo(150, 120);
ctxt4.lineTo(150, 250);
ctxt4.moveTo(150, 170);
ctxt4.lineTo(200, 200)
ctxt4.moveTo(150, 170);
ctxt4.lineTo(100, 200);
ctxt4.moveTo(200, 300);
ctxt4.lineTo(150, 250);
ctxt4.lineTo(100, 300)
ctxt4.lineWidth = '10';
ctxt4.stroke();

// ctxt4.fillStyle = 'red';
// ctxt4.strokeStyle = 'red';
// ctxt4.lineWidth = '20';
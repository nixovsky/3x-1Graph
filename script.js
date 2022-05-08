var cvs = document.getElementById('graph');
var ctx = cvs.getContext('2d');

ctx.font = "11px Arial";

let contY = 600;
let i = 0;
let contX = 0;
let cont = 6; // Указываем начальное число

function graph() {
	cont = cont * 15;
	ctx.moveTo (cont, cont); // начало графа

	if (cont % 2 == 0){
		cont /= 2;
	} else {
		cont = (cont * 3) / 2;
	}

	ctx.lineTo (cont, cont); // То куда линия будет нарисована
	ctx.stroke();
}

while (contY > 0 && contX < 600){
	if (i < 41){
		ctx.fillText (`${i}`, 1, contY - 10);
		ctx.fillText (`${i}`, contX + 13, 600);
		i++;
		ctx.moveTo (14, contY);
		ctx.lineTo (600, contY);
		ctx.moveTo (contX, 590);
		ctx.lineTo (contX, 0);
		ctx.strokeStyle = "grey";
		ctx.stroke();
	}
	contY -= 15;
	contX += 15;
}

graph();
var cvs = document.getElementById('graph');
var ctx = cvs.getContext('2d');

// let startData = prompt('Введите начальное число'); // Начальное число от когорого ведется отсчет

function create(){
	let startData = document.getElementById('first_name').value;


	let startDataNaN = startData; // Начально число которое не будет меняться

	// Создание масива данных для графа
	let i = 0;
	let arr = [startData]; // Добавляем в виде первого значения градины введенное число

	while (startData > 1){ // Вычисляем оставшиеся градины до начала следующего цикла петли
		if (startData % 2 == 0) {
			i = startData / 2;
		} else {
			i = startData * 3 + 1;
		}

		arr.push(i);
		startData = i;
	}

	let count = arr.length; // Кол-во градин в результате вычисления
	let valuesX = []; // Значения по оси x

	// Находим сколько градин будет и выписываем их в ось x
	for (let k = 0; k < count; k++){
		valuesX.push(k);
	}

	let htmlResult = `Начальное число отсчета: ${startDataNaN}</br>` + `Всего градин: ${count}</br>` + `Список значений градин: ${arr}</br>`;
	document.getElementById('result').innerHTML = htmlResult;

	let chart = new Chart(ctx, {
	// Тип графика
	type: 'line',
	 
	// Создание графиков
	data: {
	    // Точки графиков
	    labels: arr,
	    xLabels: valuesX,
	    // График
	    datasets: [{
	        label: 'Значение градины', // Название
	        borderColor: 'rgb(40, 160, 220)', // Цвет линии
	        backgroundColor: 'rgb(255, 255, 255, 0)', // Фон ниже линии
	        data: arr, // Данные каждой точки графика
	        tension: 0,
	    }]
	},
	 
	// Настройки графиков
	options: {}
	});

}




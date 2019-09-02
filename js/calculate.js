var calc = (function(){
	/* Квадратура */
	function quadrature(width, height, long, h, l, hsov, kladka) {
		// Вычисляем количество блоков в квадрате с учетом шва
		switch(kladka) {
			case 1:
			var S = ((height + hsov) / 1000) * ((long + hsov) / 1000);
			var totalS = 1 / S
			break;
			case 2:
			var S = ((height + hsov) / 1000) * ((width + hsov) / 1000);
			var totalS = 1 / S
			break;
			case 3:
			var tmp1 = ((height + hsov) / 1000) * ((long + hsov) / 1000);
			var tmp2 = ((height + hsov) / 1000) * ((width + hsov) / 1000);
			var S1 = 1 / tmp1;
			var S2 = 1 / tmp2;
			var totalS = S1+S2;
			break;
		}


		// Вычисляем общую квадратуру
		var Q = (h / 100) * (l / 100);

		// Результат количество блоков в квадратах стен
		var result = Q * totalS.toFixed(2);
		
		return {
			quadrat: totalS.toFixed(2), // Блоков в квадрате
			AllQuadrat: Q, // Всего квадратов
			counts: result.toFixed(2) // Всего блоков
		}
	}

	/* Кубатура */
	function cubic(Bric, width, height, long) {
		// Обьем в кирпиче
		var brick = (long / 1000) * (width / 1000) * (height / 1000);

		// Блоков в кубе
		var cub = 1 / brick.toFixed(3);

		// Результат кубов
		var result = Bric / cub;

		return {
			cub: Math.ceil(cub), // Блоков в кубе
			col: result.toFixed(2) // Количество кубов
		}
	}
	return {
		quadrature: quadrature,
		cubic: cubic
	}
})();
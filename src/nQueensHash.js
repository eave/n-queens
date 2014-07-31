var nQueensHash = function(n) {
	var count = 0;
	if (n === 0) count++;

	var left = {};
	var right = {};
	var cols = {};

	var tryBit = function(row) {
		for (var i = 0; i < n; i++) {
			if (!cols[i] && !left[i-row] && !right[i+row]) {
				cols[i] = 1;
				left[i-row] = 1;
				right[i+row] = 1;

				if (row < n-1) {
					tryBit(row+1);
				} else {
					count++;
				}

				delete cols[i];
				delete left[i-row];
				delete right[i+row];
			}
		}
	}

	tryBit(0);
	return count;
}

console.log(nQueensHash(8));
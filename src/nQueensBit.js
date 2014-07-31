// Basically, this function goes row by row up the board, attempting to insert queens.
// 1. It uses all to capture the filled state of the completed board.
// 2. It uses the equation in poss to identify a potentially available place to drop a queen (saved in bit), and then tests that queen for each subsequent row of the board by calling tryPlace recursively.
//3. Once cols equals all--meaning that all of the columns are covered and we've reached the end of the board--we know that bit was valid, so we increment count.
// 4. We first call the inner function on an empty board.
// 5. At the end of the program, we return the completed count.


var nQueensBit = function(n) {
	var all = (1 << n) - 1; // this is the same as (1 * 2 ^ n) - 1 // QUESTION: what is this, exactly?  It captures n in binary
	var count = 0; // this is the solution variable

	// recursive function
	var tryPlace = function(ld, cols, rd) {
		var poss = ~(ld|cols|rd) & all; // this puts ones in areas that are available based on the diagonals and columns, and crosses that with the all available
		while (poss) { // if poss > 0,
			var bit = poss & -poss; // this sets one of the valid poss slots equal to 1, thereby selecting it from the set; the equation saves it here so that we can pass it recursively into the function, shifted up one row in the board // QUESTION: why isn't -poss the exact inverse of poss?
			poss = poss ^ bit; // this is the XOR function, which returns 1 everywhere the two numbers are different; since bit is poss off by one, it corrects that here
			tryPlace((ld|bit)<<1, cols|bit, (rd|bit)>>1); // checks the passed in bit against one row up in the board
		}
		if (cols === all) count++; // a complete solution has been found, so increment the count
	}

	tryPlace(0, 0, 0); // run the recursive function with nothing on the board
	return count; // return solution
};

console.log(nQueensBit(8));
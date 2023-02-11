/*
    69. Sqrt(x)
    
	Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

	You must not use any built-in exponent function or operator.

	For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
	

	Example 1:
	Input: x = 4
	Output: 2
	Explanation: The square root of 4 is 2, so we return 2.

	Example 2:
	Input: x = 8
	Output: 2
	Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 ) return 0;
    if (x === 2 ) return 1;

    let times = Math.ceil(x / 2);

    for (let i = 1; i <= times; i++) {
        if ( i * i === x) {
            return i;
        } else if ( i * i > x) {
            return i - 1;
        }
    }
};

// const x = 1; //expect: 1
const x = 2; //expect: 1
// const x = 4; //expect: 2
// const x = 8; //expect: 2

console.log(mySqrt(x));

/*
	70. Climbing Stairs

	You are climbing a staircase. It takes n steps to reach the top.

	Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


	Example 1:
	Input: n = 2
	Output: 2
	Explanation: There are two ways to climb to the top.
	1. 1 step + 1 step
	2. 2 steps

	Example 2:
	Input: n = 3
	Output: 3
	Explanation: There are three ways to climb to the top.
	1. 1 step + 1 step + 1 step
	2. 1 step + 2 steps
	3. 2 steps + 1 step

*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    const factorial = (n) => {
        if (n <= 1) {
            return 1;
        }

        return n * factorial(n - 1);
    };

    const combinations = (n, m) => {
        return (
            factorial(n) /
            factorial(n - m) /
            factorial(m)
        );
    }

    let maxHas2 = Math.floor(n / 2);
    let steps = 0;

    // i 代表有幾個 2
    for (let i = 0; i <= maxHas2; i++) {
        if (i === 0) {
            steps++;
            continue;
        }

        let position = i + n - (2 * i); // 總共有幾個位置

        steps = steps + combinations(position, i);
    }

    return steps;
};

// const n = 2; //expect: 2
// const n = 3; //expect: 3
// const n = 4; //expect: 5
// const n = 5; //expect: 8
// const n = 9; //expect: 55
const n = 11; //expect: 144
// const n = 14; //expect: 610

console.log(climbStairs(n));

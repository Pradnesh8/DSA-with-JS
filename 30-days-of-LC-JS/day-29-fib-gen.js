// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn - 1 + Xn - 2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.


/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let current = 0;
    let next = 1;
    while (true) {
        yield current;
        let temp = current + next;
        current = next;
        next = temp;
    }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1

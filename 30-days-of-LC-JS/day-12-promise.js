/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise(async (res, rej) => {
            const timeout = setTimeout(() => {
                rej("Time Limit Exceeded")
            }, t);
            const timerStart = Date.now();
            try {
                const val = await fn(...args)
                const timerEnd = Date.now();
                if ((timerEnd - timerStart) > t) {
                    rej("Time Limit Exceeded")
                } else {
                    res(val)
                }
            } catch (err) {
                rej(err)
            }

            clearTimeout(timeout)
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
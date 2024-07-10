// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds.It can resolve any value.
/**
 * @param {number} millis
 */
async function sleep(millis) {
    let x = new Promise((res, rej) => {
        setTimeout(() => {
            res(true)
        }, millis)
    })
    let y = await x
    return y
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
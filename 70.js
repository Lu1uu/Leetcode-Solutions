function climbingStairs(n) {
    const fibs = [0, 1]
    while (n != 0) {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
        n--
    }
    return fibs[fibs.length - 1]
}

console.log(climbingStairs(5))

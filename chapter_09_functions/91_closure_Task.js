//Write a function makeRateLimiter(limit) that returns a function.
//Each call to returned function should track usage and return true if under limit, false when limit is exceeded.

function makeRateLimiter(limit) {
    let usage = 0;

    return function trackUsage() {
        usage++;
        //        if (usage > limit)
        //            return false;
        //        return true;
        return usage <= limit; //returns true if under limit, false when limit is exceeded
    }
}

let limiter = makeRateLimiter(2);
console.log(limiter()); //true
console.log(limiter()); //true
console.log(limiter()); //false
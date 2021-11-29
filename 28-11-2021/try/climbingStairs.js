function climbingStairs(number){
    let dp = [0,1];
    for(let i = 0; i < number; i++){
        dp = [dp[1], dp[0] + dp[1]];
    }
    return dp[1];
}

console.log(climbingStairs(5));

// output 8
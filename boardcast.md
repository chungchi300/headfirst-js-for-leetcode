Hello everyone, This video is going to show how I do 3 leetcode question since I have wake up. Today is saturday so I awake a little bit late.

I will use 1 pomo to start first.

lets looking for what question we are going to do

//normally I don't care memory usage because the my coding style tends to have maximum readability

we finish the first question, and still have 6 minutes,
let me introduce this git repo.

Please subscribe it haha,it have question classification,how to efficiently learn leetcode problem

https://github.com/chungchi300/headfirst-js-for-leetcode




sliding window
dynamic programming


https://frontendmasters.com/courses/practical-algorithms/introducing-dynamic-programming/


``` javascript
const uniqSort = function(arr){
    //previous saved result in breadcrumbs
    const breadcrumbs = {};
    const result = [];
    for(let i = 0;i < arr.length;i++){
        //look up for the sub child
        if(!breadcrumbs[arr[i]]){
            //calculate specific items(the calculation is direct assign only)
            result.push(arr[i]);
            //store calculation result
            breadcrumbs[arr[i]] = true;
        }
    }
    return result.sort((a,b)=>a-b);
}
```

``` javascript 
function times110Percentage(n){
    return n*1.1;
}

const cache = {};
function memoTimes110Percentage = (n) =>{
    if(cache[n]){
        return cache[n];
    }else{
        let res = times110Percentage(n);
        cache[n] = res;
        return res;
    }
}

function calculating110PercentageOfSumOfCollegeStudentWeights(){

    let weights = [70,72,79,70,72,72,70,72];
    let sum = _.sum(weights.map(weight=>memoTimes110Percentage(weight)));
    return sum;
}

```

```top up recursion(memorization)

make changes


```
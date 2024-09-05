
// Task 1
function isPowerOfTwo(N) {
    if(N === 2)
    {
        console.log("Yess sir");
        return true;
    }
    if (N % 2) {
        console.log("NO.");
        return false;
    }
    
    return isPowerOfTwo(N/2);
}
console.log("power start");
console.log(isPowerOfTwo(128));
console.log("power end");

// Task 2
function numberSum(N) {
    if (N < 10){
        return N;
    }
    if (N%10 === 0) {
        return numberSum(N/10);
    }
    return N%10 + numberSum((N - N%10)/10);
}
console.log(numberSum(985));

// Task 3
function fibonacci(base_1, base_2, N) {
    console.log(base_2);
    
    if(N <= 0)
    {
        return;
    }
    return fibonacci(base_2, base_1+base_2, N-1);

}
console.log("fibonacci start");
fibonacci(1,1,8);
console.log("fibonacci end");

//Task 4
function isPolindrom(str) {
    if (str.length <= 1) {
        return true;
    }
    if(str[0] == str[str.length-1]){
        str = str.substring(1, str.length-1)
        return isPolindrom(str);
    }
    else{
        return false;
    }
    
}
console.log("polindrom",isPolindrom("ab4ba"));


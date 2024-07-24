//1. Write a JavaScript function that reverses a number.


let revNo = n => {
    let ans = n.toString().split("").reverse().join("");
    let main_ans = Number(ans)
    console.log(main_ans)
}

let revNum = n =>  Number([...`${n}`].reverse().join(""));


//2. A palidrome fn() of string

let pali = str => {
    if (str === "" || str === undefined){
        console.log("please enter some string to check if its the palindrome or not");
        return false;
    }
    let cstr = str.toLowerCase().replace(/[^a-zA-Z]/g,"");
    let rev_cstr = [...cstr].reverse().join("");

    if( rev_cstr === cstr){
        console.log("rev_cstr =",rev_cstr)
        console.log("original =",cstr)
        console.log("Gvn str is palindrome");
        return true;
    }else{
        console.log("givn str is not palindrome");
        return false
    }
}

pali()

// palindrome fn of no.

let num_pali = num => {
    if(isNaN(num) || num === undefined || num === ""){

        console.log(" gvn value is not a number either its empty undefined or NaN, plz provide pure no. ")
        return false;
    }
    let rev_num = Number([...`${num}`].reverse().join(""));

    if (num == rev_num ){
        console.log("gvn no. is palindrome ");
        return true;
    }else{
        console.log("not a palindrome");
        false;
    }
    
}
num_pali();

// 4 - Write a JavaScript function that generates all combinations of a string.

let combo = str => {
    let result = [];

    for(let i = 0;i < str.length; i++ ){
        for(let j = i+1; j <= str.length; j++){
            result.push(str.substring(i,j));
        }

    }
    return result;

    
}

//5- permutations of string

let perms = str => {
    res = [];

    const helper = (currentString, upcomingPerms)=>{
        if(currentString === ""){
            res.push(upcomingPerms)
        }

        for(let i = 0; i < currentString.length; i++){
            const newCurrentString = currentString.slice(0,i).concat(currentString.slice(i + 1));
            const newCurrentUpcomingPerms = upcomingPerms + currentString[i];

            helper(newCurrentString,newCurrentUpcomingPerms)
        }
    }
    helper(str,"");
    return res;
}

//6- function that returns a string that has letters in alphabetical order.

let str_order = str => {
    let ans = [...str].sort().join("");
        return ans
}

//7-function that accepts a string as a parameter and converts the first letter of each word into upper case

let upperCase = str => {
    words = str.split(" ");
    res = []
    for(let i = 0; i < words.length; i++){
        res.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    return res.join(" ")
}

let upper = str => 
    str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase().concat(word.slice(1)))
        .join(" ");


//8- Write a JavaScript function that accepts a string as a parameter and finds first the longest word within the string        


let longest_wrd = str =>{
    words = str.split(" ");
    let longest = "";
    for(let word of words){
        if(word.length > longest.length){  
            longest = word;
        }
    }
    return longest;

}

let longest_str = str =>
    str.split(" ")
        .reduce((a,b) => a.length > b.length? a : b)

  //9- Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.      

  let vowels_finder = str => {
    let vowels = "aeiouAEIOU";
    return [...str].filter(word => vowels.includes(word)).length;
  }

  //10-Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.

  let primeCheck = num => {
    if(num === 1){
        return false;
    }else if(num === 2){
        return true
    }else{
        for(let i = 2; i < num;i ++){
            if(num % i ==0){
                return false
            }
        }
    }return true;
    
  }

 //11-Write a JavaScript function that accepts an argument and returns the type.

 let checking_type = a => typeof(a);

 //12- Write a JavaScript function which returns the n rows by n columns identity matrix.

 let matrix = n => {
    identitymatrix = [];

    for(let i = 0; i < n; i ++){
        row = [];
        for(let j = 0; j < n; j++){
            if (i == j){
                row.push("#")
            }else{
                row.push(0)
            }
    
        }
        identitymatrix.push(row)
    }
    return identitymatrix;
 }
 

 let matrix_ = n => 
  Array.from({length:n}, ( _, i ) => 
  Array.from({length:n},(_,j)=> i == j ? 1:0)
);

// 13-  Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
let find_second_lowest_and_highest = arr => {
    sortedArr = [... new Set(arr)].sort((a,b )=> a - b ); //using spread operator to convert back to array so that we can use method sort on it. n set givesa unique set of values

    let secondHigh = sortedArr[sortedArr.length - 2]
    let secondLow = sortedArr[1]

    return (`"second high= ${secondHigh} and second low = ${secondLow}"`)
}

//14-  Write a JavaScript function that checks whether a number is perfect.
//              According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum
//              of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself
//              (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all 
//              of its positive divisors (including itself).
//              Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
//              Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
//              The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128

let perfect_num = n => { 
    temp = 0;
    for(let i = 1; i <= n/2; i++){
        if( n%i == 0){
            temp += i;
        }
    }
    if(temp == n && temp !== 0){
        console.log("it is a perfect no.")
    }else{
        console.log("it is not a perfect no.")
    }
}

//15- Write a JavaScript function to compute the factors of a positive integer.

let factors_of_positive_int = n => {
    temp = [];
    for(let i = 1; i <= n ; i++){
        if(n % i === 0){
            temp.push(i)
        }
    }
    return temp;
}

let factors_ = n => {
    return Array.from({length:n}, (_, i) => i + 1).filter(i => n % i === 0);
}

//16-  Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

let amountTocoins =(n, arr) => {
    res = []
    for ( let i = 0; i < arr.length; i++){
        while(n >= arr[i]){
            res.push(arr[i]);
            n -= arr[i]
        }
       
    }
    return res
}
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
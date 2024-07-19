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
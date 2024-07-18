//1. Write a JavaScript function that reverses a number.


let revNo = n => {
    let ans = n.toString().split("").reverse().join("");
    let main_ans = Number(ans)
    console.log(main_ans)
}

let revNum = n =>  Number([...`${n}`].reverse().join(""));


//2. A palidrome fn()

let pali = str => {
    if(str === undefined){
        console.log("Nothng found") 
    }
    let cstr = str.toLowerCase().replace(/[0-9\s]/g,"")
    let rev_cstr = cstr.split().reverse().join("");
    if ( rev_cstr === cstr){
        console.log(rev_cstr)
        console.log(cstr)
        console.log("matched, gvn str is pali")
    }
}
pali()
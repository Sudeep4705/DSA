

function mergestr(word1,word2){
let i=0,j=0,str=""
    while(i<word1.length && j<word2.length){
            str+=word1[i]+word2[j]
            i++
            j++
    }
    while(i<word1.length){
        str+=word1[i]
        i++
    }
    while(j<word2.length){
        str+=word2[j]
        j++
    }
    return str
}

let res = mergestr("ab","pqrs")
console.log(res);

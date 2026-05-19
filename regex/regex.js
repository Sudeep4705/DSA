// regex
// let str = "sudeep"
// let regex = /u/
// let result = str.match(regex)
// console.log(result);

// flags
// let str = "hiking"
// let regex = /^hi./gim
// let result = str.match(regex)
// console.log(result);

// character classes

// let str = "bing sing ring king ping"
// let regex = /[a-z]ing/g
// let result = str.match(regex)
// console.log(result);

// negated character means it [agbh] it will match except this character
// let str = "sudeep1"
// let regex = /[^$&#][^$&#][^$&#][^$&#][^$&#][^$&#][0-9]/i
// let result = str.match(regex)
// console.log(result);

// quantifiers
// let str= "baaaaaaa says ba and baaaaaaaaa"
// let regex = /[a-z]{4}/g // this means i need a 4 times a  also we cn {2,4} min and max {2,} that atleast 2 and more
// let result = str.match(regex)
// console.log(result);

// let str = "here the three dates for the event:23-05-2023,01-12-2024 and 03-09-2025 43-01-2029"
// let regex = /[0-9]{2}-[0-9]{2}-[0-9]{4}/g
// let result = str.match(regex)
// console.log(result);

// meta characters
// let str  = "his 500$ idea was that bad"
// let regex = /\s[a-z]{3}/gi
// console.log(str.match(regex));

// let str  = "his 500$ idea was that bad"
// let regex = /\S{3}/gi
// console.log(str.match(regex));

// let str = "he has 22 cars, 345 houses, and 700 bottles"
// let regex = /\d{2}/g
// console.log(str.match(regex));

// let str = "she has 5cars, 6bikes, and 7bicycles"
// let regex = /\d\D{4,5}/g
// console.log(str.match(regex));

// let str = "sudee?p123"
// let regex = /[^\d^?]{5,10}/
// console.log(str.match(regex));

// let str = "chairs for 500 dollors cups for 20 dollors laptops for 2500 dollors";
// let rgx = /\d{1,} dollors/g;
// console.log(str.match(rgx));


// special characters
// let str  = "strange words like  blood, b9ad, ba d, ba$d, and balod"
// let regex = /b.{2}d/g
// console.log(str.match(regex));

// let str  = "No I won't, he said"
// let regex = /^".{3,}"/
// console.log(str.match(regex));


// capturing groups
// let str = "hahahahahah hahahha hhhhaaahahahahahahahaha"
// let regex = /(ha)+/

// word boundry
// let str = "his name is dillion"
// let regex = /\b/
// console.log(str.match(regex));



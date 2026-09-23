// function hello() {
//     var a = 20
// }

// console.log(a);


// this
// const user = {
//     name: "Sudeep",

//     greet() {
//         console.log(this.name);
//     }
// };

// user.greet();

// const user1 = {
//     name: "Sudeep",
//     greet() {
//         console.log("Hello " + this.name);
//     }
// };
// const user2 = {
//     name: "Goat",
//     greet() {
//         console.log("Hello " + this.name);
//     }
// };
// user1.greet()
// user2.greet()

const user = {
    name: "Sudeep",


    arrow: () => {
        console.log(this.name);
    }
};


user.arrow();

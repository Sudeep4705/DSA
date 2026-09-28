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
// const user = {
//     name: "Sudeep",
//     arrow: () => {
//         console.log(this.name);
//     }
// };
// user.arrow();
function first(callback) {
    console.log("first");
    callback();
}

function second(callback) {
    console.log("second");
    callback();
}

function third(callback) {
    console.log("third");
    callback();
}

function fourth(callback) {
    console.log("fourth");
    callback();
}

function fifth() {
    console.log("fifth");
}


first(function () {

    second(function () {

        third(function () {

            fourth(function () {
                fifth();
            });
        });
    });
});
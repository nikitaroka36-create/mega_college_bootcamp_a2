// function function_name(paramters){
//     // code execution logic
// }

// const functionName = (paramters) => {
//     // code execution logic
// }

//normal function
function sum(a, b){
    return a + b;
}

//arrow function
const sum_arr = (a, b) => {
    return a + b;
}

//arrow function with implicit return
const sum_arr_2 = (a, b) => a + b; 

const result = sum(1, 2);
console.log(result);

//...rest paramter
function product(...rest){
    let result = 1;
    for(num of rest){
        result = num * result;
    }
    return result;
}

const team = (captain, viceCaptain, ...players) => {
    console.log(captain);
    console.log(viceCaptain);
    for(player of players){
        console.log(player);
    }
}

team("ram", "hari", "player1", "player2", "player3", "player4", "player5", "player6")

// 1. euta function ma euta matra rest parameter huna paryo
// 2. rest parameter chai last ma huna paryo

product(1, 2);
product(1, 2, 3);
product(1, 2, 3, 4);
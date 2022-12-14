"use strict";

/*
Creator: Deshawn Marquis, Williams,
GitHub Profile: https://github.com/MarquisTheCoder,
Date Created: 8/15/22,
Time Created: 5:29 PM,
File Name: loops.js,
File Description:
Loop exercises for CodeUp curriculum
*/


(function () {
    /*returns multiplication table of number up to 10*/
    const showMultiplicationTable = number => {
        for(let item in Array.from(Array(10).keys())){
            console.log(`${number} x ${item} = ${number * item}`);
        }
    }


    function generateRandom(iterations){
        const isEven = number => number % 2 == 0;
        for(let i = 0; i !== iterations; i++){
            let randomNumber = Math.floor(Math.random() * 200) + 20;
            (isEven(randomNumber)) ? console.log(`${randomNumber} is even`) :
                                     console.log(`${randomNumber} is odd`);
        }
    }

   // generateRandom(10);

    // function numberPyramid(){
    //     for(let pyramidBrick in Array.from({length: 10}, (index, element) => element + 1)){
    //         let string = `${pyramidBrick}`
    //         for(let iter = 0; iter < pyramidBrick-1; iter++){
    //             string += `${pyramidBrick}`;
    //         }
    //         (string != 0) ? console.log(string): 1;
    //     }
    // }

    function numberPyramid(){
        for(let i = 1; i < 10; i++){
            console.log(i.toString().repeat(i));
        }
    }
    numberPyramid();


    let number = 9;
    let count = 0;

    let outputString = '';

    while(count < number){
        outputString.concat(count++);
    }

    console.log(outputString);

    for(let i = 100; i !== 0; i-=5){
        console.log(i);
    }

    const recursiveMultiply = (number, iterations) => {
        for(let multiplier = 1; multiplier < iterations; multiplier++){
            console.log(`${number} X ${iterations} = ${number * iterations}`);
        }
    }

    const TESTING_PARAMETER =  [4,6];
    recursiveMultiply(...TESTING_PARAMETER);
})();
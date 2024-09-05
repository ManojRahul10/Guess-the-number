import React from "react";

function Result({secretNumber,term}){
    let result;
    
    if(term){
    if(term > secretNumber){
        result="your guess is higher";

    }else if(term < secretNumber){
        result="Your guess is lower";
    }else if(term==secretNumber){
        result="Whoah!! You are correct🎉🎉";
    }else{
        result="The Fuck! Enter a number dood not a letter";
    }
    return <h3>You Guessed: {result}</h3>

}}
export default Result;
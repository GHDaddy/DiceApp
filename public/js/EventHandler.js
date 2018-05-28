"use strict";
export default class EventHandler{
    constructor(){
        this.diceNum = 1;
        this.diceRoll;
        this.diceChoice;
        this.increaseDice;
        this.getElements();
    }

    getElements(){
        console.log(this.diceNum);
        document.getElementById("diceAmount").innerHTML = "Dice: " + this.diceNum;
        
        //Increase || Decrease dice Amount
        this.increaseDice = document.getElementById("increaseDie").addEventListener("click", () => {
            this.diceNum++;
            console.log(this.diceNum);
            document.getElementById("diceAmount").innerHTML = "Dice: " + this.diceNum;
        })
        
        
        this.diceNum = document.getElementById("diceAmount");
        this.diceChoice = document.getElementById("4side").addEventListener("click", () => {
            
        });
    }
}


// var quidditchWinner="Harry Potter";

// function changeWinner(winner){
//     console.log("oriignial winnee"+winner)
//     winner="Draco Malfoy";
//     console.log("changed winnee"+winner)
// }

// console.log("the winner was"+quidditchWinner)
// changeWinner(quidditchWinner)
// console.log("Now the winner is"+quidditchWinner)


var quidditchWinner=["Harry","Ron","Hermoine"];

function changeWinner(winner){
    console.log("oriignial winnee"+winner)
    winner[0]="Draco ";
    winner[1]=" Malfoy";
    winner[2]="pansy";
    console.log("changed winnee"+winner)
}

console.log("the winner was"+quidditchWinner)
changeWinner(quidditchWinner)
console.log("Now the winner is"+quidditchWinner)



"use strict";
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log(`You can keep watching this typescript course`);
}
else {
    console.log(`You should watch a Javascript course first`);
}
let interMiami = 12;
let FCDallas = 11;
function whoWins(teamA, teamB) {
    return teamA > teamB ?
        'intereMiami' : teamA === teamB ? 'checkmate' : 'FCDallas';
}
const winner = whoWins(interMiami, FCDallas);
const answer = winner === 'checkmate' ? `It's a checkmate` : `The winner is ${winner}`;
const answer_with_format = '\n' + answer;
console.log(answer_with_format);
//diferentes tipados en una sola variable
const tipados = null;
console.log(typeof (tipados));

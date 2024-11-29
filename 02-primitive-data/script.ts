let estudiasteJavascript: boolean = true;


if(estudiasteJavascript){
    console.log(`You can keep watching this typescript course`)
} else {
    console.log(`You should watch a Javascript course first`)
}

let interMiami: number = 12
let FCDallas: number = 11   

function whoWins (teamA: number, teamB: number):string
{
    return teamA>teamB ? 
    'intereMiami': teamA === teamB ? 'checkmate': 'FCDallas';
}

const winner: string = whoWins(interMiami,FCDallas)
const answer: string = winner === 'checkmate'?`It's a checkmate`:`The winner is ${winner}`

const answer_with_format: string = '\n'+answer

console.log(answer_with_format)

//diferentes tipados en una sola variable
const tipados: number | null | undefined = null
console.log( typeof(tipados) )
let programador= {
    nombres: "Huascar Gutierrez",
    techs: ['HTML', 'CSS', 'Javascript', 'React'],
    genshinPlayer: true
}

programador = {
    nombres: 'andres',
    techs: ['SQL','noSQL','Djando'],
    genshinPlayer: false
}
//Notese que aqui si cambio el objeto programador, debo de cambiar todos los elementos dentro del mismo, sino salta como error. Ademas respeta los tipados iniciales

// types de objetos
type Programador = {
    nombre: string,
    techs: string[],
    washero?: boolean
} 

const programadorTypado: Programador = {
    nombre: "Juan de la Costa",
    techs: ["None","PIPIPI"],
    washero: true
}

const programadorTypado2: Programador = {
    nombre: "Juan del rancho",
    techs: ["ASSEMBLER","COBOL"],
    washero: false
}

const programadorTypadoAntiWasheros: Programador = {
    nombre: 'El mata washeros',
    techs: ["assembler",'sistemas operativos'],
}
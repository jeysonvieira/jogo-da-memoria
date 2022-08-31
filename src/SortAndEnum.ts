import { DomImg } from "./DomElements.js";


//Todos Números Disponiveis
const NumMedium: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
];

const ImgPar: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7
]




//Sorteando as Box
const SortNumMedium: number[] = [];


while (NumMedium.length) {

    const index = Math.floor(Math.random() * NumMedium.length - 1);

    const [option] = NumMedium.splice(index, 1);

    SortNumMedium.push(option);
}



//Sorteando as imgs


const ElementImg: HTMLElement[] = []


while (DomImg.length) {

    const index = Math.floor(Math.random() * DomImg.length - 1);

    const [option] = DomImg.splice(index, 1);

   ElementImg.push(option);
}








export {SortNumMedium, ImgPar, ElementImg};
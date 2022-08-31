import { DomOut, DomBox} from "./DomElements.js";
import {SortNumMedium, ImgPar, ElementImg} from "./SortAndEnum.js"


DomOut.submit.onclick = (a: any): void => {
    a.preventDefault()


    let difficultyValue = DomOut.difficulty.value
    console.log(difficultyValue)


    //if(difficultyValue == 'Medium'){
        

    //}
    
}


var contador1 = 0;

var contador2 = 0

var contador3 = 0


while(contador1 <= 15){
    
    const attributeSrc = document.createAttribute("src")
    //const attributeRemove = document.createAttribute("")




    //ADICIONAR CADA IMAGEM AO ELEMENTO (MUDA A CADA 2X)

    if(contador2 % 2 == 0 && contador2 != 0){
        contador3++

    }
    attributeSrc.value = `imgs/${String(ImgPar[contador3])}.png` //MESMO VALOR 2 VEZES SEGUIDOS
            

    //Adiciona o atributto 
    ElementImg[SortNumMedium[contador1]].setAttributeNode(attributeSrc)//MUDA A CADA LOOP


   //ElementImg[contador1].classList.add("remove")

    contador1++
    contador2++



    
}

DomBox.forEach(function(valor, index){

    DomBox[index].addEventListener("click", function add(){
        ElementImg[index].classList.add("remove")
    })

})


console.log(ElementImg)





import { DomOut, DomBox} from "./DomElements.js";
import {SortNumMedium, ImgPar, ElementImg} from "./SortAndEnum.js"
import {validacao} from "./validacao.js"


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


    //ADICIONAR CADA IMAGEM AO ELEMENTO (MUDA A CADA 2X)

    if(contador2 % 2 == 0 && contador2 != 0){
        contador3++

    }
    attributeSrc.value = `imgs/${String(ImgPar[contador3])}.png` //MESMO VALOR 2 VEZES SEGUIDOS
            

    //Adiciona o atributto 
    ElementImg[SortNumMedium[contador1]].setAttributeNode(attributeSrc)//MUDA A CADA LOOP


   ElementImg[contador1].classList.add("remove")

    contador1++
    contador2++



    
}


var arrayNum: number[] = []
var arrayImg: HTMLElement[] = []

var contadorAcertos = 0

DomBox.forEach(function(valor, index){

    DomBox[index].addEventListener("click", function add(){
        var numeroBox = DomBox[index].querySelector("img")!.getAttribute("id")!

        var numeroImg = DomBox[index].querySelector("img")!.getAttribute("src")!

        var remover = document.getElementById(`img${String(numeroBox.charAt(3))}line${String(numeroBox.charAt(8))}`)!

        remover.classList.remove("remove")

        arrayImg.push(remover)



        arrayNum.push(Number(numeroImg.charAt(5)))

        
        if(arrayNum.length == 2){

            var resposta = validacao(Number(arrayNum[0]), Number(arrayNum[1]))

            if(resposta){
                console.log("acertou")
                contadorAcertos++
                console.log(contadorAcertos)
                if(contadorAcertos == 8){
                    DomBox.forEach(function(valor, index){
                        DomBox[index].classList.add("block")}
                    )}

            } else{
                setTimeout(function(){arrayImg[0].classList.add("remove"), arrayImg[1].classList.add("remove")}, 1000)
            }

            DomBox.forEach(function(valor, index){
                DomBox[index].classList.add("block")
                if(contadorAcertos < 8){
                    setTimeout(function(){DomBox[index].classList.remove("block")}, 1000)
                }
            })
        
            setTimeout(function(){arrayImg.splice(0,2)}, 2000)

            arrayNum.splice(0, 2)
            

        }

    })

})


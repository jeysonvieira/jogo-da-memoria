System.register(["./DomElements.js", "./SortAndEnum.js", "./validacao.js"], function (exports_1, context_1) {
    "use strict";
    var DomElements_js_1, SortAndEnum_js_1, validacao_js_1, contador1, contador2, contador3, arrayNum, arrayImg, contadorAcertos;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DomElements_js_1_1) {
                DomElements_js_1 = DomElements_js_1_1;
            },
            function (SortAndEnum_js_1_1) {
                SortAndEnum_js_1 = SortAndEnum_js_1_1;
            },
            function (validacao_js_1_1) {
                validacao_js_1 = validacao_js_1_1;
            }
        ],
        execute: function () {
            DomElements_js_1.DomOut.submit.onclick = (a) => {
                a.preventDefault();
                let difficultyValue = DomElements_js_1.DomOut.difficulty.value;
                console.log(difficultyValue);
            };
            contador1 = 0;
            contador2 = 0;
            contador3 = 0;
            while (contador1 <= 15) {
                const attributeSrc = document.createAttribute("src");
                if (contador2 % 2 == 0 && contador2 != 0) {
                    contador3++;
                }
                attributeSrc.value = `imgs/${String(SortAndEnum_js_1.ImgPar[contador3])}.png`;
                SortAndEnum_js_1.ElementImg[SortAndEnum_js_1.SortNumMedium[contador1]].setAttributeNode(attributeSrc);
                SortAndEnum_js_1.ElementImg[contador1].classList.add("remove");
                contador1++;
                contador2++;
            }
            arrayNum = [];
            arrayImg = [];
            contadorAcertos = 0;
            DomElements_js_1.DomBox.forEach(function (valor, index) {
                DomElements_js_1.DomBox[index].addEventListener("click", function add() {
                    var numeroBox = DomElements_js_1.DomBox[index].querySelector("img").getAttribute("id");
                    var numeroImg = DomElements_js_1.DomBox[index].querySelector("img").getAttribute("src");
                    var remover = document.getElementById(`img${String(numeroBox.charAt(3))}line${String(numeroBox.charAt(8))}`);
                    remover.classList.remove("remove");
                    arrayImg.push(remover);
                    arrayNum.push(Number(numeroImg.charAt(5)));
                    if (arrayNum.length == 2) {
                        var resposta = validacao_js_1.validacao(Number(arrayNum[0]), Number(arrayNum[1]));
                        if (resposta) {
                            console.log("acertou");
                            contadorAcertos++;
                            console.log(contadorAcertos);
                            if (contadorAcertos == 8) {
                                DomElements_js_1.DomBox.forEach(function (valor, index) {
                                    DomElements_js_1.DomBox[index].classList.add("block");
                                });
                            }
                        }
                        else {
                            setTimeout(function () { arrayImg[0].classList.add("remove"), arrayImg[1].classList.add("remove"); }, 1000);
                        }
                        DomElements_js_1.DomBox.forEach(function (valor, index) {
                            DomElements_js_1.DomBox[index].classList.add("block");
                            if (contadorAcertos < 8) {
                                setTimeout(function () { DomElements_js_1.DomBox[index].classList.remove("block"); }, 1000);
                            }
                        });
                        setTimeout(function () { arrayImg.splice(0, 2); }, 2000);
                        arrayNum.splice(0, 2);
                    }
                });
            });
        }
    };
});

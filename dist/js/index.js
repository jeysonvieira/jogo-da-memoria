System.register(["./DomElements.js", "./SortAndEnum.js"], function (exports_1, context_1) {
    "use strict";
    var DomElements_js_1, SortAndEnum_js_1, contador1, contador2, contador3;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DomElements_js_1_1) {
                DomElements_js_1 = DomElements_js_1_1;
            },
            function (SortAndEnum_js_1_1) {
                SortAndEnum_js_1 = SortAndEnum_js_1_1;
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
                contador1++;
                contador2++;
            }
            DomElements_js_1.DomBox.forEach(function (valor, index) {
                DomElements_js_1.DomBox[index].addEventListener("click", function add() {
                    SortAndEnum_js_1.ElementImg[index].classList.add("remove");
                });
            });
            console.log(SortAndEnum_js_1.ElementImg);
        }
    };
});

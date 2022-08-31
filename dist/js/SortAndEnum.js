System.register(["./DomElements.js"], function (exports_1, context_1) {
    "use strict";
    var DomElements_js_1, NumMedium, ImgPar, SortNumMedium, ElementImg;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DomElements_js_1_1) {
                DomElements_js_1 = DomElements_js_1_1;
            }
        ],
        execute: function () {
            NumMedium = [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
            ];
            ImgPar = [
                0, 1, 2, 3, 4, 5, 6, 7
            ];
            exports_1("ImgPar", ImgPar);
            SortNumMedium = [];
            exports_1("SortNumMedium", SortNumMedium);
            while (NumMedium.length) {
                const index = Math.floor(Math.random() * NumMedium.length - 1);
                const [option] = NumMedium.splice(index, 1);
                SortNumMedium.push(option);
            }
            ElementImg = [];
            exports_1("ElementImg", ElementImg);
            while (DomElements_js_1.DomImg.length) {
                const index = Math.floor(Math.random() * DomElements_js_1.DomImg.length - 1);
                const [option] = DomElements_js_1.DomImg.splice(index, 1);
                ElementImg.push(option);
            }
        }
    };
});

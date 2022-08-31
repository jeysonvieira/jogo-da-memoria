System.register([], function (exports_1, context_1) {
    "use strict";
    var difficulty, submit, DomOut, img2line1, img1line1, img3line1, img4line1, img1line2, img2line2, img3line2, img4line2, img1line3, img2line3, img3line3, img4line3, img1line4, img2line4, img3line4, img4line4, DomImg, box1line1, box2line1, box3line1, box4line1, box1line2, box2line2, box3line2, box4line2, box1line3, box2line3, box3line3, box4line3, box1line4, box2line4, box3line4, box4line4, DomBox;
    var __moduleName = context_1 && context_1.id;
    function Img(img, line) {
        return document.getElementById(`img${img}line${line}`);
    }
    function Box(box, line) {
        return document.getElementById(`box${box}line${line}`);
    }
    return {
        setters: [],
        execute: function () {
            difficulty = document.getElementById('difficulty');
            submit = document.getElementById('submit');
            DomOut = {
                difficulty,
                submit
            };
            exports_1("DomOut", DomOut);
            img2line1 = Img("2", "1");
            img1line1 = Img("1", "1");
            img3line1 = Img("3", "1");
            img4line1 = Img("4", "1");
            img1line2 = Img("1", "2");
            img2line2 = Img("2", "2");
            img3line2 = Img("3", "2");
            img4line2 = Img("4", "2");
            img1line3 = Img("1", "3");
            img2line3 = Img("2", "3");
            img3line3 = Img("3", "3");
            img4line3 = Img("4", "3");
            img1line4 = Img("1", "4");
            img2line4 = Img("2", "4");
            img3line4 = Img("3", "4");
            img4line4 = Img("4", "4");
            DomImg = [
                img1line1, img1line2, img1line3, img1line4, img2line1, img2line2, img2line3, img2line4, img3line1, img3line2, img3line3, img3line4, img4line1, img4line2, img4line3, img4line4
            ];
            exports_1("DomImg", DomImg);
            box1line1 = Box("1", "1");
            box2line1 = Box("2", "1");
            box3line1 = Box("3", "1");
            box4line1 = Box("4", "1");
            box1line2 = Box("1", "2");
            box2line2 = Box("2", "2");
            box3line2 = Box("3", "2");
            box4line2 = Box("4", "2");
            box1line3 = Box("1", "3");
            box2line3 = Box("2", "3");
            box3line3 = Box("3", "3");
            box4line3 = Box("4", "3");
            box1line4 = Box("1", "4");
            box2line4 = Box("2", "4");
            box3line4 = Box("3", "4");
            box4line4 = Box("4", "4");
            DomBox = [
                box1line1, box1line2, box1line3, box1line4, box2line1, box2line2, box2line3, box2line4, box3line1, box3line2, box3line3, box3line4, box4line1, box4line2, box4line3, box4line4
            ];
            exports_1("DomBox", DomBox);
        }
    };
});

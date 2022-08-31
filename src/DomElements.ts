

//DOM FORA DA CAIXA
const difficulty = document.getElementById('difficulty')! as HTMLInputElement

const submit = document.getElementById('submit')! as HTMLButtonElement

const DomOut = {
    difficulty,
    submit
}









function Img(img: string, line: string){
    return document.getElementById(`img${img}line${line}`)!

}


//Line 1:

const img2line1 = Img("2", "1")
const img1line1 = Img("1", "1")
const img3line1 = Img("3", "1")
const img4line1 = Img("4", "1")


//Line 2:

const img1line2 = Img("1", "2")
const img2line2 = Img("2", "2")
const img3line2 = Img("3", "2")
const img4line2 = Img("4", "2")

//Line 3:

const img1line3 = Img("1", "3")
const img2line3 = Img("2", "3")
const img3line3 = Img("3", "3")
const img4line3 = Img("4", "3")

//Line 4:

const img1line4 = Img("1", "4")
const img2line4 = Img("2", "4")
const img3line4 = Img("3", "4")
const img4line4 = Img("4", "4")


const DomImg: HTMLElement[] = [

    img1line1, img1line2, img1line3, img1line4, img2line1, img2line2, img2line3, img2line4, img3line1, img3line2, img3line3, img3line4, img4line1, img4line2, img4line3, img4line4
]






function Box(box: string, line: string){
    return document.getElementById(`box${box}line${line}`)!

}



const box1line1 = Box("1", "1")
const box2line1 = Box("2", "1")
const box3line1 = Box("3", "1")
const box4line1 = Box("4", "1")



const box1line2 = Box("1", "2")
const box2line2 = Box("2", "2")
const box3line2 = Box("3", "2")
const box4line2 = Box("4", "2")


const box1line3 = Box("1", "3")
const box2line3 = Box("2", "3")
const box3line3 = Box("3", "3")
const box4line3 = Box("4", "3")


const box1line4 = Box("1", "4")
const box2line4 = Box("2", "4")
const box3line4 = Box("3", "4")
const box4line4 = Box("4", "4")



const DomBox: HTMLElement[] = [
    box1line1, box1line2, box1line3, box1line4, box2line1, box2line2, box2line3, box2line4, box3line1, box3line2, box3line3, box3line4, box4line1, box4line2, box4line3, box4line4

]


export {DomOut, DomImg, DomBox}



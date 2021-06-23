console.log("Welcome to javascript drag and drop image logo")
let whiteBoxes = document.getElementsByClassName("whiteBox")
let imgBox = document.querySelector(".imgBox")

imgBox.addEventListener('dragstart',(e)=>{
    e.target.className += ' hold'
    setTimeout(() => {
        e.target.className = 'hide'
    }, 0);
    console.log("dragstart has been triggered")
})
imgBox.addEventListener('dragend',(e)=>{
console.log("dragend has been triggered")
e.target.className = 'imgBox';
})

for(whiteBox of whiteBoxes){
whiteBox.addEventListener('dragover',(e)=>{
console.log("dragover has been triggered")
e.preventDefault();
})

whiteBox.addEventListener('dragenter',(e)=>{
    console.log("dragenter has been triggered")
    e.target.className += ' dashed';
})

whiteBox.addEventListener('dragleave',(e)=>{
console.log("dragleave has been triggered")
e.target.className = 'whiteBox';
})

whiteBox.addEventListener('drop',(e)=>{
console.log("drop has been triggered")
e.target.append(imgBox);
})

}
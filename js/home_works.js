// 1

const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExpForGmail = /^[a-zA-Z]+@gmail.com$/
// const regExp = /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/

gmailButton.onclick = () => {
    const value = gmailInput.value;
    const result = regExpForGmail.test(value);
    gmailResult.innerText = result;
    result ? gmailResult.style.color = "green" : gmailResult.style.color = "red";
}

// 2

const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")

const parentBlockWidth = parentBlock.offsetWidth - childBlock.offsetWidth - 2
let positionX = 0
let positionY = 0
// let position = 0

// const move = () => {
//     setTimeout(() => {
//         position++
//         if (position < parentBlockWidth - childBlock.offsetWidth) {
//             childBlock.style.left = `${position}px`
//             move()
//         }
//     }, 1)
// }
// move()

const move = () => {
    setTimeout(() => {
        if (positionX < parentBlockWidth && positionY === 0) {
            positionX++
            childBlock.style.left = `${positionX}px`
        } else if (positionY < parentBlockWidth && positionX === parentBlockWidth) {
            positionY++
            childBlock.style.top = `${positionY}px`
        } else if (positionX > 0 && positionY === parentBlockWidth) {
            positionX--
            childBlock.style.left = `${positionX}px`
        } else if (positionY > 0 && positionX === 0) {
            positionY--
            childBlock.style.top = `${positionY}px`
        }
        move()
    }, 1)
}
move()

const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")
const seconds = document.querySelector("#seconds")

let count = 0
let interval;

startBtn.onclick = () => {
    clearInterval(interval)
    interval = setInterval(()=>{
        count++
        seconds.innerText = count
    }, 1000)
}

stopBtn.onclick = () => {
    clearInterval(interval)
}

resetBtn.onclick = () => {
    clearInterval(interval)
    count = 0
    seconds.innerText = count;
}
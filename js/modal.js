// const modal = document.querySelector('.modal')
// const modalTriggerButton = document.querySelector('#btn-get')
// const modalClose = document.querySelector('.modal_close')
//
// const openModal = () => {
//     modal.style.display = 'block'
//     document.body.style.overflow = 'hidden'
// }
// const closeModal = () => {
//     modal.style.display = 'none'
//     document.body.style.overflow = ''
// }
//
// modalTriggerButton.onclick = () => openModal()
// modalClose.onclick = () => closeModal()
// modal.onclick = (event) => {
//     if (event.target === modal){
//         closeModal()
//     }
// }
//
// const scroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 0.5) {
//         openModal()
//         window.removeEventListener("scroll", scroll)
//     }
// }
//
// window.addEventListener("scroll", scroll)
//
// setTimeout (function (){
//     openModal()
// }, 10000)

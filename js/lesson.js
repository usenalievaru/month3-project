const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let slideIndex = 0;


const hideTabContent = () => {
    tabContents.forEach((tabContent) => {
        tabContent.style.display = 'none'
    })
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index) => {
    tabContents[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent([0])

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((tabItem, tabIndex)=> {
            if (event.target === tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
                slideIndex = tabIndex
            }
        })
    }
}

const showSlides = () => {
    slideIndex = (slideIndex + 1) % 5;
    hideTabContent()
    showTabContent(slideIndex)
}

setInterval(showSlides, 3000)
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

// 22.01.2024

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

// somInput.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     })
//
// })
// usdInput.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     })
//
// })

const converter = (element, targetElement, targetElement2,  currentValue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            switch (currentValue) {
                case 'som':
                    targetElement.value = (element.value * data.som.usd).toFixed(2)
                    targetElement2.value = (element.value * data.som.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd.som).toFixed(2)
                    targetElement2.value = (element.value * data.usd.eur).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value * data.som).toFixed(2)
                    break
                default:
                    break
            }
            element.value === '' && (targetElement.value = targetElement2.value = "")  //исправление бага
        }
    }
}

converter(somInput, usdInput, eurInput, 'som')
converter(usdInput, somInput, eurInput, 'usd')
converter(eurInput, somInput, usdInput, 'eur')

// 30.01.2024


// Задание №1

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 0


const cardFetcher = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
            `
        card.style.borderColor = data.completed ? 'green' : 'red'
    }catch (error){
            console.error(error)
        }
}
cardFetcher(1)

// const cardFetcher = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then(response => response.json())
//         .then (data => {
//             card.innerHTML = `
//             <p>${data.title}</p>
//             <p style="color: ${data.completed ? 'green': 'red'}">${data.completed}</p>
//             <span>${data.id}</span>
//             `
//             card.style.borderColor = data.completed ? 'green' : 'red'
//         })
// }
// cardFetcher(1)


btnNext.onclick = () => {
    count ++
    if (count > 200) {
        count = 1
    }
    cardFetcher(count)
}
btnPrev.onclick = () => {
    count --
    if (count < 1) {
        count = 200
    }
    cardFetcher(count)
}


// Задание №2

// fetch('https://jsonplaceholder.typicode.com/posts' )
//     .then(response => console.log(response))




// 31.01.2024

const citySearchInput = document.querySelector('.cityName')
// const searchButton = document.querySelector('#search')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    citySearchInput.oninput = (event) => {
        fetch(`${BASE_URL}?q=${event.target.value}&appid=${API_KEY}`)
            .then(response => response.json())
            .then (data => {
                cityName.innerHTML = data.name || 'Not found...'
                cityTemp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'
            })
    }
}
citySearch()
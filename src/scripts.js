console.log('working')

const fetchCards = () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayCards(data))
        .catch(err => console.log(err))
}

const displayCards = (data) => {
    console.log(data)
}


document.addEventListener('DOMContentLoaded', fetchCards);
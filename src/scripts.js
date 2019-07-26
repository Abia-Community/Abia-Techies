console.log('working...');


const fetchCards = () => {
    // console.log('fetching cards')

    fetch('../data/data.json')
        .then(response => {
            response.json();
            console.log(response)
        })
        .then(data => console.log(data))
}





document.addEventListener('DOMContentLoaded', fetchCards);

console.log('working')

const mainContainer = document.querySelector('main.container')
console.log(mainContainer)


function fetchThem() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => showThem(data))
}

function showThem(data) {
    data.forEach( ({links }) => console.log(links))
}

fetchThem()

// fetching persons
const fetchPersons = () => {
    fetch('persons.json')
        .then(response => response.json())
        .then(data => displayCards(data))
        .catch(err => console.log(err))
}

/******* 
 * DISPLAYING PERSONS' CARD
 * TODO:
 *      remove the icons if there is no link
 ******/

const displayCards = (persons) => {
    let htmlContent = '';
    if(persons) {
        htmlContent = persons.map(({ number, fullName, imageLink, title, links, location }) => `
        <section class="card">
            <div class="main-info">
                <img class="image" src="${imageLink}" alt="">

                <h2 class="full-name">${fullName}</h2>
                <p class="title">${title}</p>
            </div>
            <div class="social-media">
                <a href="${links.website ? links.website : "#"}" target="_blank"><i class="material-icons">face</i></a>
                <a href="${links.linkedin ? links.linkedin : "#"}" target="_blank"><i class="material-icons">face</i></a>
                <a href="${links.github ? links.github : "#"}" target="_blank"><i class="material-icons">face</i></a>
            </div>
            <p class="location">${location.city} ${location.state} ${location.country}</p>
        </section>

        `).join('')
    }

    mainContainer.insertAdjacentHTML("beforeend", htmlContent)
}


document.addEventListener('DOMContentLoaded', fetchPersons);
 
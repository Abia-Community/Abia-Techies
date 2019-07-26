console.log('working')

const mainContainer = document.querySelector('main.container')
console.log(mainContainer)


const fetchCards = () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayCards(data))
        .catch(err => console.log(err))
}

const displayCards = (persons) => {
    let htmlContent = '';
    if(persons) {
        htmlContent = persons.map(({ number, fullName, imageLink, title, links }) => `
        <section class="card">
            <div class="main-info">
                <img class="image" src="${imageLink}" alt="">

                <h2 class="full-name">${fullName}</h2>
                <p class="title">${title}</p>
            </div>
            <div class="social-media">
                <a href="" target="_blank"><i class="material-icons">face</i></a>
                <a><i class="material-icons">face</i></a>
                <a href="" target="_blank"><i class="material-icons">face</i></a>
            </div>
            <p class="location">Aba, Abia State</p>
        </section>

        `).join('')
    }

    mainContainer.insertAdjacentHTML("beforeend", htmlContent)
}


document.addEventListener('DOMContentLoaded', fetchCards);
 
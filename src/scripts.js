const mainContainer = document.querySelector('main.container')
const detailsPage = document.querySelector('.details')

// console.log(mainContainer)

// fetching persons
const fetchPersons = () => {
    fetch('/src/persons.json')
        .then(response => response.json())
        .then(data => displayCards(data))
        .catch(err => console.log(err))
}

// closing the details page
const closeDetailsPage = () => {
    if(!detailsPage.classList.contains('hide')) {
        detailsPage.classList.add('hide');
        mainContainer.classList.remove('blur');
    }

}


// displaying the details page
const displayDetailsPage = (persons) => {
    const mainInfo = document.querySelectorAll('.main-info')
    // console.log(persons)

    mainInfo.forEach(infoCard => infoCard.addEventListener('click', (e) => {
        e.preventDefault();

        // populating detailsPage
        detailsPage.innerHTML = ""; 
        let details = "";

        /******
         * DISPLAYING DETIALS
         * check the id of card
         * match with number of person
         * display the id details that match;
         * 
         */

        // getting the id of card
        let id = infoCard.parentElement.getAttribute('id').split('-')[1];
        // console.log(id);
        // finding person number that matches id
        const clickedPerson = persons.find(person => person.number === id);

        // destructing to get clickedPerson properties
        const { number, fullName, imageLink, title, links, location, description } = clickedPerson;

        details = `
            <span class="close">X</span>
            <div class="main-info">
                <img class="image" src="${imageLink}" alt="${fullName}">

                <h2 class="full-name">${fullName}</h2>
                <p class="title">Front ${title}</p>
            </div>

            <p class="description">${description}</p>
            <div class="social-media">
                <a class="icons" href="${links.website ? links.website : "#"}" target="_blank"><i class="fas fa-globe"></i></a>
                <a class="icons" href="${links.linkedin ? links.linkedin : "#"}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a class="icons" href="${links.github ? links.github : "#"}" target="_blank"><i class="fab fa-github"></i></a>
                <a class="icons" href="${links.facebook ? links.facebook : "#"}" target="_blank"><i class="fab fa-facebook"></i></a>
                <a class="icons" href="${links.medium ? links.medium : "#"}" target="_blank"><i class="fab fa-medium"></i></a>

            </div>
            <p class="location">${location.city ? location.city : ""} ${location.state ? location.state : ""}, ${location.country ? location.country : ""}</p>
        `

        detailsPage.insertAdjacentHTML("afterbegin", details)
        
        detailsPage.classList.remove('hide');
        // detailsPage.classList.add('transition')
        mainContainer.classList.add('blur')

        // closing details page
        // removeDetailsPage()
        const closeButton = document.querySelector('span.close');
        closeButton.addEventListener('click', closeDetailsPage);

    }))
}


/******* 
 * DISPLAYING PERSONS' CARD
 * TODO:
 *      remove the icons if there is no link
 ******/

const displayCards = (persons) => {
    let htmlContent = '';
    // removing anything in mainContainer
    mainContainer.innerHTML = "";

    // adding htmlContent to mainContainer
    if(persons) {
        htmlContent = persons.map(({ number, fullName, imageLink, title, links, location }) => `
        <section class="card" id="person-${number}">
            <div class="main-info">
                <img class="image" src="${imageLink}" alt="">

                <h2 class="full-name">${fullName}</h2>
                <p class="title">${title}</p>
            </div>
            <div class="social-media">
                <a class="icons" href="${links.website ? links.website : "#"}" target="_blank"><i class="fas fa-globe"></i></a>
                <a class="icons" href="${links.linkedin ? links.linkedin : "#"}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a class="icons" href="${links.github ? links.github : "#"}" target="_blank"><i class="fab fa-github"></i></a>
                <a class="icons" href="${links.linkedin ? links.linkedin : "#"}" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
            <p class="location">${location.city ? location.city : ""} ${location.state ? location.state : ""}, ${location.country ? location.country : ""}</p>
        </section>

        `).join('')
    }

    mainContainer.insertAdjacentHTML("beforeend", htmlContent);
    // calling displayDetailsPage here to get persons
    displayDetailsPage(persons)
}


document.addEventListener('DOMContentLoaded', fetchPersons);
 

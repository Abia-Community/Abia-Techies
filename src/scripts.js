
console.log('working')

const mainContainer = document.querySelector('main.container')
// console.log(mainContainer)

// fetching persons
const fetchPersons = () => {
    fetch('persons.json')
        .then(response => response.json())
        .then(data => displayCards(data))
        .catch(err => console.log(err))
}

// // populating Details page
// const populateDetailsPage = (e, persons, detailsPage) => {
//     // console.log(e, persons, detailsPage);
//     detailsPage.innerHTML = "";

//     const mainInfo = document.querySelector('.main-info')
    
//     let id = (e.target === mainInfo) ? mainInfo.parentElement.getAttribute('id') : "";
//     console.log(e.target, mainInfo);
    
//     console.log(id)

//     let details = "helllooooo";

//     detailsPage.insertAdjacentHTML("beforeend", details)

// }

// displaying the details page
const displayDetailsPage = (persons) => {
    const mainInfo = document.querySelectorAll('.main-info')
    const detailsPage = document.querySelector('.details')
    // console.log(persons)

    mainInfo.forEach(info => info.addEventListener('click', (e) => {
        e.preventDefault();

        // populating detailsPage
        detailsPage.innerHTML = ""; 
        let details = "Helloooo";

        detailsPage.insertAdjacentHTML("afterbegin", details)
        
        detailsPage.classList.remove('hide');
        mainContainer.classList.add('blur')
        console.log(e.target, persons)


        // populateDetailsPage(e, persons, detailsPage)


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
 

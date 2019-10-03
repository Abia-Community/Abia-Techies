const mainContainer = document.querySelector('main.container')
const detailsPage = document.querySelector('.details')


// fetching persons
const fetchPersons = () => {
  fetch('src/assets/data/persons.json')
    .then(response => response.json())
    .then(data => displayCards(data))
    .catch(err => console.warn(err))
}

// closing the details page
const closeDetailsPage = () => {
  if (!detailsPage.classList.contains('hide')) {
    detailsPage.classList.add('hide');
    mainContainer.classList.remove('blur');
  }

}

// displaying the details page
const displayDetailsPage = (persons) => {
  const mainInfo = document.querySelectorAll('.main-info')

  mainInfo.forEach(infoCard => infoCard.addEventListener('click', (e) => {
    e.preventDefault();

    // populating detailsPage
    detailsPage.innerHTML = "";
    let details = "";

    /******
     * DISPLAYING DETIALS
     */

    // getting the id of card
    let id = infoCard.parentElement.getAttribute('id').split('-')[1];
    console.log(id);
    // finding person number that matches id
    const clickedPerson = persons.find(person => person.id === id);
    console.log(clickedPerson)

    // destructing to get clickedPerson properties
    const { fullName, imageLink, title, links, location, description } = clickedPerson;

    details = `
            <span class="close">X</span>
            <div class="main-info">
              <img class="image" src="${imageLink ? imageLink : 'src/assets/images/default_avatar.jpg'}" alt="">

              <h2 class="full-name">${fullName}</h2>
              ${title ? `<p class="title">${title}</p>` : ''}
            </div>

            <p class="description">${description}</p>
            <div class="social-media">
            ${links.website ? `<a class="icons" href="${links.website}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
            ${links.linkedin ? `<a class="icons" href="${links.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
            ${links.github ? `<a class="icons" href="${links.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
            ${links.twitter ? `<a class="icons" href="${links.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
            ${links.facebook ? `<a class="icons" href="${links.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>` : ''}
            ${links.medium ? `<a class="icons" href="${links.medium}" target="_blank"><i class="fab fa-medium"></i></a>` : ''}
          </div>

          ${location ? `<p class="location">${location.city ? location.city : ""}${location.state ? `, ${location.state}` : ""}${location.country ? `, ${location.country}` : ""}</p > ` : ''}
          `

    detailsPage.insertAdjacentHTML("afterbegin", details)

    detailsPage.classList.remove('hide');
    // detailsPage.classList.add('transition')
    mainContainer.classList.add('blur')

    // closing details page
    const closeButton = document.querySelector('span.close');
    closeButton.addEventListener('click', closeDetailsPage);

  }))
}



/******* 
 * DISPLAYING PERSONS' CARD
 ******/

const displayCards = (persons) => {
  let htmlContent = '';
  // removing anything in mainContainer
  mainContainer.innerHTML = "";

  // adding htmlContent to mainContainer
  if (persons) {
    console.log(persons)
    htmlContent = persons.map(({ id, fullName, imageLink, title, links, location }) => `
        <section class="person">
        <div class="card" id="person-${id}">
            <div class="main-info">
              <img class="image" src="${imageLink ? imageLink : 'src/assets/images/default_avatar.jpg'}" alt="">

              <h2 class="full-name">${fullName}</h2>
              ${title ? `<p class="title">${title}</p>` : ''}
            </div>
            <div class="social-media">
              ${links.website ? `<a class="icons" href="${links.website}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
              ${links.linkedin ? `<a class="icons" href="${links.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
              ${links.github ? `<a class="icons" href="${links.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
              ${links.twitter ? `<a class="icons" href="${links.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}

            </div>
            ${location ? `<p class="location">${location.city ? location.city : ""}${location.state ? `, ${location.state}` : ""}${location.country ? `, ${location.country}` : ""}</p > ` : ''}
            <button href="#" class="view-details">View Details</button>            
        </div>

        <div class="details hide">Hello</div>
        </section>

        `).join('')
  }

  mainContainer.insertAdjacentHTML("beforeend", htmlContent);
  // calling displayDetailsPage here to get persons
  // displayDetailsPage(persons)
  displayDetailsPage(persons)

}

document.addEventListener('DOMContentLoaded', fetchPersons);


var burger = document.querySelector('.menu-burger');
var sidebar = document.querySelector('.nav-list');
var mobileLogo = document.querySelector('.smallLogo');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('nav-list-active');
    burger.classList.toggle('toggle');
    mobileLogo.classList.toggle('smallLogo-active');
})


// cards in main

const wrap = document.querySelector(".wrap");
/** card structure
/*  article
/*      card
/*          img
/*          card-body
/*              card-title
/*              card-button
*/
function createCard(title, picture) {
    const article = document.createElement("article");
    article.classList.add("article");
    wrap.appendChild(article);

    const card = document.createElement("div");
    card.classList.add("card");
    article.appendChild(card);

    const img = document.createElement("img");
    img.style.backgroundImage = `url(${picture })`;
    img.classList.add("card-img");
    card.appendChild(img);
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = title;
    cardBody.appendChild(cardTitle);

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = "Read";
    cardBody.appendChild(cardButton);
}
function loadCards (){
    for (let i = 0; i < content.length; i++) {
        createCard(content[i].name, content[i].picture);
      }      
}
window.onload = loadCards;


// content
// const content = [
//     {
//       name: "About that space illustration you keep seeing around",
//       picture: "./images/article1.jpeg"
//     },
//     {
//       name: "Why ‘Contact’ Is the Most Important Space Movie Ever Made",
//       picture: "./images/article2.jpeg"
//     },
//     {
//       name: "My Journey to the Edge of Space",
//       picture: "./images/article3.jpeg"
//     },
//     {
//         name: "Has NASA’s Kepler Mission Discovered an Alien Megastructure?",
//         picture: "./images/article4.jpeg"
//     },
//     {
//         name: "Is Humanity About To Accidentally Declare Interstellar War On Alien Civilizations?",
//         picture: "./images/article5.jpeg"
//     },
//     {
//         name: "Why Mars Matters",
//         picture: "./images/article6.jpeg"
//     },
//     {
//         name: "Elon Musk isn’t an alien. He’s becoming a robot instead.",
//         picture: "./images/article7.jpeg"
//     },
//     {
//         name:"Jabba the Trump: A comic and coloring page!",
//         picture: "./images/article8.jpeg"
//     },
//     {
//         name:"Movie Review: Ridley Scott returns to the franchise he helped to spawn in “Alien: Covenant”.",
//         picture: "./images/article9.jpeg"
//     },
//     {
//         name: "Airbus is building 900 satellites to beam internet from space",
//         picture: ""
//     },
//     {
//         name: "Why NASA’s EmDrive Might Be the Most Exciting Breakthrough in Tech Right Now",
//         picture: "./images/article10.jpeg"
//     },
//     {
//         name: "Black Holes Must Have Singularities, Says Einstein’s Relativity",
//         picture:"./images/article11.jpeg"
//     },
//     {
//         name: "Spock and The Collective Consciousness",
//         picture: "./images/article12.png"
//     }
// ]



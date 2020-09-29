var burger = document.querySelector('.menu-burger');
var sidebar = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('nav-list-active');
    burger.classList.toggle('toggle');
})


// cards in main
// content
const content = [
    {
      name: "Title 1",
      picture: "./images/article1.jpeg"
    },
    {
      name: "Title 2",
      picture: "./images/article2.jpeg"
    },
    {
      name: "Title 3",
      picture: "./images/article3.jpeg"
    }
]

const wrap = document.querySelector(".wrap");

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

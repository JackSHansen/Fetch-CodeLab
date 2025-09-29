/* Opgave 1 */
const section = document.getElementById("sectionOne");

const storyContainer = document.createElement("div");
storyContainer.id = "theStory";
section.appendChild(storyContainer);

fetch('https://api.example.com/felix-da')
  .then(response => {
      if (!response.ok) throw new Error('Netværksfejl');
      return response.json();
  })
  .then(data => {
      const text = document.createElement("p");
      text.innerText = data.story;
      storyContainer.appendChild(text);

      const img = document.createElement("img");
      img.src = "opgavefiler/img/" + data.img;
      img.alt = "Felix katten";
      storyContainer.appendChild(img);
  })
  .catch(error => console.error('Noget gik galt:', error));



/* Opgave 2 */
const storyContainer = document.getElementById("theStory") || (() => {
    const container = document.createElement("div");
    container.id = "theStory";
    section.appendChild(container);
    return container;
})();

const languageSelect = document.createElement("select");
languageSelect.id = "languageSelect";
section.insertBefore(languageSelect, storyContainer);

const languages = ["da", "en"];
languages.forEach(lang => {
    const option = document.createElement("option");
    option.value = lang;
    option.innerText = lang === "da" ? "Dansk" : "Engelsk";
    languageSelect.appendChild(option);
});

let storyData;

fetch('https://api.example.com/felix')
  .then(response => {
      if (!response.ok) throw new Error('Netværksfejl');
      return response.json();
  })
  .then(data => {
      storyData = data;
      updateStory("da");
  })
  .catch(error => console.error('Noget gik galt:', error));

languageSelect.addEventListener("change", (e) => {
    updateStory(e.target.value);
});

function updateStory(lang) {
    storyContainer.innerHTML = "";

    const text = document.createElement("p");
    text.innerText = storyData[lang].story;
    storyContainer.appendChild(text);

    const img = document.createElement("img");
    img.src = "opgavefiler/img/" + storyData[lang].img;
    img.alt = "Felix katten";
    storyContainer.appendChild(img);
}



/* Opgave 3*/
let userList = document.getElementById("userList");
if (!userList) {
    userList = document.createElement("div");
    userList.id = "userList";
    const section = document.getElementById("sectionOne");
    section.appendChild(userList);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
      if (!response.ok) throw new Error("Netværksfejl");
      return response.json();
  })
  .then(users => {
      users.forEach(myUser => {
          const userDiv = document.createElement("div");
          
          const name = document.createElement("h2");
          name.innerText = myUser.name;
          userDiv.appendChild(name);
          
          const address = document.createElement("p");
          address.innerHTML = `Adresse: ${myUser.address.street}  ${myUser.address.suite}<br>
                               Post nummer: ${myUser.address.zipcode}<br>
                               By: ${myUser.address.city}`;
          userDiv.appendChild(address);
          
          userList.appendChild(userDiv);
      });
  })
  .catch(error => console.error("Noget gik galt:", error));

/* Opgave 4*/
let dogContainer = document.getElementById("dogContainer");
if (!dogContainer) {
    dogContainer = document.createElement("div");
    dogContainer.id = "dogContainer";
    const section = document.getElementById("sectionOne");
    section.appendChild(dogContainer);
}

fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => {
      if (!response.ok) throw new Error("Netværksfejl");
      return response.json();
  })
  .then(data => {
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Tilfældig hund";
      img.style.maxWidth = "300px";
      img.style.display = "block";
      img.style.marginTop = "10px";
      dogContainer.appendChild(img);
  })
  .catch(error => console.error("Noget gik galt:", error));

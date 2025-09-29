/* opgave 1 */
const section = document.getElementById("sectionOne");
const storyContainer1 = document.getElementById("theStory1") || (() => {
    const container = document.createElement("div");
    container.id = "theStory1";
    section.appendChild(container);
    return container;
})();

fetch('https://api.example.com/felix-da')
  .then(response => {
      if (!response.ok) throw new Error('Netværksfejl');
      return response.json();
  })
  .then(data => {
      const text = document.createElement("p");
      text.innerText = data.story;
      storyContainer1.appendChild(text);

      const img = document.createElement("img");
      img.src = "opgavefiler/img/" + data.img;
      img.alt = "Felix katten";
      storyContainer1.appendChild(img);
  })
  .catch(error => console.error('Noget gik galt:', error));

/* opgave 2 */
const storyContainer2 = document.getElementById("theStory2") || (() => {
    const container = document.createElement("div");
    container.id = "theStory2";
    section.appendChild(container);
    return container;
})();

const languageSelect = document.createElement("select");
languageSelect.id = "languageSelect";
section.insertBefore(languageSelect, storyContainer2);

const languages = ["da", "en"];
languages.forEach(lang => {
    const option = document.createElement("option");
    option.value = lang;
    option.innerText = lang === "da" ? "Dansk" : "Engelsk";
    languageSelect.appendChild(option);
});

let storyData2;

fetch('https://api.example.com/felix') 
  .then(response => {
      if (!response.ok) throw new Error('Netværksfejl');
      return response.json();
  })
  .then(data => {
      storyData2 = data;
      updateStory2("da");
  })
  .catch(error => console.error('Noget gik galt:', error));

languageSelect.addEventListener("change", (e) => {
    updateStory2(e.target.value);
});

function updateStory2(lang) {
    storyContainer2.innerHTML = "";

    const text = document.createElement("p");
    text.innerText = storyData2[lang].story;
    storyContainer2.appendChild(text);

    const img = document.createElement("img");
    img.src = "opgavefiler/img/" + storyData2[lang].img;
    img.alt = "Felix katten";
    storyContainer2.appendChild(img);
}

/*opgave 3 */
const userList = document.getElementById("userList") || (() => {
    const container = document.createElement("div");
    container.id = "userList";
    section.appendChild(container);
    return container;
})();

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

/* opgave 4*/
const dogContainer = document.getElementById("dogContainer") || (() => {
    const container = document.createElement("div");
    container.id = "dogContainer";
    section.appendChild(container);
    return container;
})();

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

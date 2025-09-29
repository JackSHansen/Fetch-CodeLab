/* Opgave 1 */
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");

fetch(myDataFileUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Fejl ved hentning af filen");
    }
    return response.json();
  })
  .then(data => {
    // Antag f.eks. at JSON har en key som hedder "story" eller lign.
    myStoryElement.textContent = data.story;
  })
  .catch(error => {
    console.error("Noget gik galt:", error);
  });


/* Opgave 2 */
fetch(myDataFileUrl)
  .then(response => response.json())
  .then(data => {
    // Hvis der er flere felter
    myStoryElement.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.story}</p>
    `;
  })
  .catch(error => console.error("Der opstod en fejl:", error));





/* Opgave 3*/
/* Opgave 3 */
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

fetch(userURI)
  .then(response => {
    if (!response.ok) {
      throw new Error("Fejl ved API-anmodning");
    }
    return response.json();
  })
  .then(users => {
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      myUserlistElement.appendChild(li);
    });
  })
  .catch(error => console.error("Noget gik galt:", error));


/* Opgave 4*/
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Min nye post",
    body: "Dette er noget tekst",
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(data => {
    console.log("Data oprettet:", data);
  })
  .catch(error => console.error("Fejl ved POST:", error));

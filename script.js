const maxPersonagens = 671;
const image = document.getElementById("image");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

refreshPage = () => {
  window.location.reload();
};

getIdPersonagens = () => {
  return Math.floor(Math.random() * maxPersonagens);
};
getCharacter = () => {
  const ids = [
    getIdPersonagens(),
    getIdPersonagens(),
    getIdPersonagens(),
  ];
  const linkApi = `https://rickandmortyapi.com/api/character/${ids}`;
  return fetch(linkApi, {
    method: "GET",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()).then((data) => {
      
      // Personagem 1
      image.src = data[0].image;
      personNom.innerHTML = data[0].name;
      personEsp.innerHTML = data[0].species;
      personCond.innerHTML = data[0].status;

      // Personagem 2
      image2.src = data[1].image;
      personDoisNom.innerHTML = data[1].name;
      personDoisEsp.innerHTML = data[1].species;
      personDoisCond.innerHTML = data[1].status;

      // Personagem 3
      image3.src = data[2].image;
      personTresNom.innerHTML = data[2].name;
      personTresEsp.innerHTML = data[2].species;
      personTresCond.innerHTML = data[2].status;

    });
};
getCharacter();

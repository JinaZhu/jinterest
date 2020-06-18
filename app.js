const auth = "563492ad6f91700001000001eab75c050171469d93186c19e531ae08";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;

//event listeners

searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchPhotos(searchValue);
});

function updateInput(e) {
  searchValue = e.target.value;
}

// async function curatedPhotos() {
//   const dataFetch = await fetch(
//     "https://api.pexels.com/v1/curated?per_page=15&page=1",
//     {
//       //what we want to do with the data
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     }
//   );
//   const data = await dataFetch.json();
//   data.photos.forEach((photo) => {
//     const galleryImg = document.createElement("div");
//     galleryImg.classList.add("gallery-img");
//     galleryImg.innerHTML = `<img src=${photo.src.large}> </img
//       <p>${photo.photographer}<p>
//       `;
//     gallery.appendChild(galleryImg);
//   });
// }

async function searchPhotos(query) {
  const dataFetch = await fetch(
    `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    }
  );
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<img src=${photo.src.large}/><p>${photo.photographer}</p>`;
    gallery.appendChild(galleryImg);
  });
}

searchPhotos();
// curatedPhotos();

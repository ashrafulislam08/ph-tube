// load videos from api

// create loadVideos
const loadVideos = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
};

// create displayVideos
const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos");

  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact bg-base-100 shadow-xl";
    card.innerHTML = `
        <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src="${video.thumbnail}"
      alt="${video.title}" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
      <img class="w-10 h-10 rounded-full object-cover" src=${
        video.authors[0].profile_picture
      }/>
    </div>
    <div>
        <h2 class="font-bold">${video.title}</h2>
        <div class="flex items-center gap-2">
            <p>${video.authors[0].profile_name}</p>
            ${
              video.authors[0].verified
                ? '<img class="w-5 object-cover" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png">'
                : ""
            }
        </div>
    </div>
  </div>
    `;
    videosContainer.append(card);
  });
};

loadVideos();

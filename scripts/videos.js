function getTimeString(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

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
  videosContainer.innerHTML = "";
  if (videos.length == 0) {
    videosContainer.classList.remove("grid");
    videosContainer.innerHTML = `
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center ">
            <img src="assets/Icon.png"/>
        <h2 class="font-semibold text-2xl">${
          videos.message ?? "Oops!! Sorry, there is no content here."
        }</h2>
        </div>
    `;
    return;
  }

  //   videosContainer.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  videosContainer.classList.add("grid");

  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact bg-base-100 shadow-xl";
    card.innerHTML = `
        <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src="${video.thumbnail}"
      alt="${video.title}" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class="absolute right-5 p-2 bottom-5 bg-black text-white">${getTimeString(
              video.others.posted_date
            )}</span>`
      }
      
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

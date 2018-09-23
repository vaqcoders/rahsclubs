const clubs = [];

fetch(`clubs/clubs.json`)
  .then(response => response.json())
  .then(json => {
    json.forEach(club => {
      let gimmeClub = new Club(club);
      gimmeClub.init().then(el => {
        document.querySelector(".content").appendChild(el);
      });
      clubs.push(gimmeClub);
    });
  })
  .catch(err => console.error(`Fetching ${this.name}.json was unsuccessful.`));

document.getElementById("search").onchange = (event) => {
  const keyword = event.path[0].value.toLowerCase();
  let noResults = true;
  clubs.forEach(club => {
    if (club.containsKeyword(keyword)) {
      club.toggle(true);
      noResults = false;
    } else club.toggle(false);
  });
  const noResultsEl = document.getElementById("noResults")
  noResultsEl.innerText = chooseRandomErrorMessage();
  if (noResults) noResultsEl.style.display = "inherit";
  else noResultsEl.style.display = "none";
};

// Helper Functions
function chooseRandomErrorMessage() {
  const msgs = [
      "Yikes",
      "Nice try",
      "Oops",
      "Sike"
    ], nouns = [
    "student",
    "Vaquero",
    "scholar dollar",
    "swag master"
  ];
  return `${msgs[Math.floor(Math.random() * msgs.length)]}, ${nouns[Math.floor(Math.random() * nouns.length)]}. No matches :/`;
}

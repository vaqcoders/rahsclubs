window.onload = window.onresize = toggleResponsiveDesign;

const clubs = [];

fetch(`clubs/clubs.json`)
  .then(response => response.json())
  .then(json => {
    json.forEach(club => {
      let gimmeClub = new Club(club);
      gimmeClub.init().then(el => {
        document.querySelector("#content").appendChild(el);
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
  const noResultsEl = document.querySelector("#noResults");
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

function openNav() {
  document.getElementById("mySidenav").style.width = "50vw";
  window.setTimeout(() => {
    $('#calendar').fullCalendar({
      eventClick: evt => Ply.dialog("confirm", evt.id || evt.title),
      events: "calendar/events.json"
    });
  }, 0.5 * 1000);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function toggleResponsiveDesign() {
  if (window.navigator.userAgent.toLowerCase().includes("mobile")) {
    document.querySelector("#content").style.marginTop = "10vh";
  } else {
    document.querySelector("#content").style.marginTop = "25vh";
  }
}

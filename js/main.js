let steam = new Club("steam");

steam.init().then(el => {
  document.querySelector(".content").appendChild(el);
});

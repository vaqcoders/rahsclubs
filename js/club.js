class Club {

  constructor(name) {
    this.name = name;
    this.data;
    this.el;
  }

  containsKeyword(keyword) {
    return this.data.name.toLowerCase().includes(keyword) ||
      this.data.description.toLowerCase().includes(keyword) ||
      this.data.officers.some(officer => officer.name.toLowerCase().includes(keyword));
  }

  toggle(on = true) {
    this.el.style.display = on ? "flex" : "none";
  }

  async init() {
    await this.fetch();
    this.createElement();
    return this.el;
  }

  async fetch() {
    this.data = await fetch(`clubs/${this.name}.json`)
      .then(response => response.json())
      .catch(err => console.error(`Fetching ${this.name}.json was unsuccessful.`));
  }

  createElement() {
    let card = document.createElement("div");
    card.className = "blog-card";

    let meta = document.createElement("div");
    meta.className = "meta";

    let photo = document.createElement("div");
    photo.style.backgroundImage = `url(cgi-bin/${this.data.imgsrc})`;
    photo.className = "photo";

    let officers = this.data.officers.reduce((ul, cur) => {
      let li = document.createElement("li");
      li.className = "author";

      let a = document.createElement("a");

      a.innerHTML = `<b>${cur.position}</b>: ${cur.name}`;
      a.href = cur.link || "#";

      li.appendChild(a);
      ul.appendChild(li);

      return ul;
    }, document.createElement("ul"));
    officers.className = "details";

    let details = this.data.links.reduce((ul, cur) => {
      let li = document.createElement("li");
      li.className = "author";

      let a = document.createElement("a");

      a.innerText = cur.title;
      a.href = cur.link || "#";

      li.appendChild(a);
      ul.appendChild(li);

      return ul;
    }, officers);

    let description = document.createElement("div");
    description.className = "description";

    let h1 = document.createElement("h1");
    h1.innerText = this.data.name;

    let p = document.createElement("p");
    p.innerText = this.data.description;

    let announcements = this.data.announcements.reduce((div, cur) => {
      let h2 = document.createElement("h2");
      let p = document.createElement("p");

      h2.innerText = cur.title;
      p.innerText = cur.description;

      div.appendChild(h2);
      div.appendChild(p);

      return div;
    }, document.createElement("div"));
    announcements.className = "description";

    description.appendChild(h1);
    description.appendChild(p);
    description.appendChild(announcements);

    meta.appendChild(photo);
    meta.appendChild(details);

    card.appendChild(meta);
    card.appendChild(description);

    this.el = card;
  }

}

class Club {

  constructor(name) {
    this.name = name;
    this.data;
    this.el;
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
    let div = document.createElement("div");
    div.className = "club";

    let img = document.createElement("img");
    img.src = `cgi-bin/${this.data.imgsrc}`;

    let name = document.createElement("h1");
    name.innerText = this.data.name;

    let announcements = this.data.announcements.reduce((list, cur) => {
      let li = document.createElement("li");

      let heading = document.createElement("b");
      heading.innerText = cur.title;

      let desc = document.createElement("p");
      desc.innerText = cur.description;

      li.appendChild(heading);
      li.appendChild(desc);
      list.appendChild(li);

      return list;
    }, document.createElement("ul"));

    let description = document.createElement("p");
    description.innerText = this.data.description;

    let links = this.data.links.reduce((list, cur) => {
      let li = document.createElement("li");

      let link = document.createElement("a");
      link.innerText = cur.title;
      link.href = cur.link;

      li.appendChild(link);
      list.appendChild(li);

      return list;
    }, document.createElement("ul"));

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(announcements);
    div.appendChild(description);
    div.appendChild(links);

    this.el = div;
  }

}

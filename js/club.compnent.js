/*
  Requires JSX and React.js
*/

class ClubCard extends React.Component {

  render() {
    return (
      <div className="blog-card">
        <div className="meta">
          <img className="photo" style={`background-image: url(cgi-bin/${this.props.data.imgsrc})`}>
          <ul className="details">{
            this.props.data.officers.map(cur => (
              <li className="author">
                <a href={cur.link || "#"}>
                  <b>{cur.position}</b>: {cur.name}
                </a>
              </li>
            ))
            this.props.data.links.map(cur => (
              <li className="author">
                <a href={cur.link || "#"}>{cur.title}</a>
              </li>
            ))
          }</ul>
        </div>
        <div className="description">
          <h1>{this.props.data.name}</h1>
          <p>{this.props.data.description}</p>
          <div className="description">{
            this.data.announcements.reduce(cur => (
              <h2>{cur.title}</h2>
              <p>{cur.description}</p>
            ))
          </div>
        </div>
      </div>
    );
  }

}

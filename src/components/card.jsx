import "./card.css";

function Card(props) {
  const { first_release_date, name, rating, summary } = props.data;

  return (
    <div className="card">
      <div className="card-avatar"></div>
      <div className="card-content">
        <h3 className="title">{name}</h3>
        <span className="date">{"Release Date: " + first_release_date} </span>
        <p className="description">{summary}</p>
      </div>
      <div className="card-rating">
        <div className="rating"> {Number(rating / 10).toFixed(0)}</div>
      </div>
    </div>
  );
}

export default Card;

import "./card.css";
import { Skeleton } from "./loading/loading";

function Card(props) {
  if (props.loading === true) {
    return (
      <div className="card">
        <div className="card-avatar">
          <Skeleton borderRadius={0} width={100} height={100}/>
        </div>
        <div className="card-content">
          <h3 className="title">
            <Skeleton borderRadius={20} width={100} height={100}/>
          </h3>
          <span className="date">
            <Skeleton borderRadius={20} width={50} height={50}/>
          </span>
          <p className="description">
            <Skeleton borderRadius={20} width={100} height={20} />
            <Skeleton borderRadius={20} width={100} height={20}/>
            <Skeleton borderRadius={20} width={50} height={20}/>
          </p>
        </div>
        <div className="card-rating">
          <div className="rating">
            {" "}
            <Skeleton borderRadius={20} width={100} height={100}/>
          </div>
        </div>
      </div>
    );
  }

  if (props.data) {
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
}

export default Card;

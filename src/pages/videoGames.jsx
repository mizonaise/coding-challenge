import "./videoGames.css";
import Cards from "../components/cards";
import Filter from "../components/filter";

function VideoGames() {
  return (
    <div className="container">
      <Filter />
      <Cards />
    </div>
  );
}

export default VideoGames;

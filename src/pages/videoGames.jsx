import Card from "../components/card";
import { useState, useEffect } from "react";
// import FilterPage from "../components/filter";

import "./videoGames.css";
import Filter from "../components/filter";
function VideoGames() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://public.connectnow.org.uk/applicant-test/"
    );
    if (response.status === 200) {
      const fetchdata = await response.json();
      setGames(fetchdata);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!loading) console.log(games);
  return (
    <div className="container">
      <div className="filter">
        <Filter />
      </div>
      <div className="card-conatiner">
        {games.map((game, index) => {
          return <Card key={index} data={game} />;
        })}
      </div>
    </div>
  );
}

export default VideoGames;

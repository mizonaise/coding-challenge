import Card from "../components/card";
import { useState, useEffect } from "react";

function Cards() {
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

  let loadingProfiles = [];

  for (let i = 0; i < 10; i++) {
    loadingProfiles.push(<Card loading={true} key={i} />);
  }

  if (loading) {
    return <div className="card-conatiner">{loadingProfiles}</div>;
  }
  return (
    <div className="card-conatiner">
      {games.map((game) => {
        return <Card data={game} key={game.id} />;
      })}
    </div>
  );
}

export default Cards;

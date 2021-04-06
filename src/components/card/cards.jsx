import Card from "./card";
import { useContext } from "react";
import Pagination from "../pagination/pagination";
import { GamesContext } from "../../context/context";

function Cards() {
  const {
    loading,
    games,
    filters,
    isAsc,
    name,
    score,
    postsPerPage,
    currentPage,
  } = useContext(GamesContext);

  let loadingProfiles = [];

  for (let i = 0; i < 10; i++) {
    loadingProfiles.push(<Card loading={true} key={i} />);
  }

  if (loading) {
    return <div className="card-conatiner">{loadingProfiles}</div>;
  }

  if (filters.isName) {
    if (isAsc) {
      games.sort(function (a, b) {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
    } else {
      games.sort(function (a, b) {
        return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
      });
    }
  }

  if (filters.isScore) {
    if (isAsc) {
      games.sort(function (a, b) {
        return b.rating - a.rating;
      });
    } else {
      games.sort(function (a, b) {
        return a.rating - b.rating;
      });
    }
  }

  if (filters.isDate) {
    if (isAsc) {
      games.sort(function (a, b) {
        return b.first_release_date - a.first_release_date;
      });
    } else {
      games.sort(function (a, b) {
        return a.first_release_date - b.first_release_date;
      });
    }
  }

  const filteredList = games
    .filter((game) => {
      if (name === "") return game;
      if (game.name.toLowerCase().includes(name.toString().toLowerCase())) {
        return game;
      }
      return null;
    })
    .filter((game) => {
      if (score === "") return game;
      if ((+game.rating / 10).toFixed(0) >= +score) {
        return game;
      }
      return null;
    });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="card-conatiner">
      {currentPosts.map((game) => {
        return <Card data={game} key={game.id} />;
      })}
      <Pagination totalPosts={filteredList.length} />
    </div>
  );
}

export default Cards;

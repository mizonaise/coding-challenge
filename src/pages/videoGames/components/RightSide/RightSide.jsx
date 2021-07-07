import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { initFilter } from "../../state/filtersAction";
import { GamesContext } from "../../../../commons/state/Context";
import Card from "../../../../commons/components/card/card";
import Pagination from "../../../../commons/components/pagination/pagination";

function RightSide() {

  const dispatch = useDispatch();
  const {
    query,
    score, 
    order_asc,
  } = useSelector((state) => state.filtersReducer);
  const {
    loading,
    games,
    filters,
    error,
    postsPerPage,
    currentPage,
  } = useContext(GamesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(initFilter());
  }, [dispatch])

  let loadingProfiles = [];

  for (let i = 0; i < 10; i++) {
    loadingProfiles.push(<Card loading={true} key={i} />);
  }

  if (loading) {
    return <div className="card-conatiner">{loadingProfiles}</div>;
  }

  if (error)
    return (
      <div className="card-conatiner">
        <div className="error-container">Something went wrong</div>
      </div>
    );

  if (filters.isName) {
    if (order_asc) {
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
    if (order_asc) {
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
    if (order_asc) {
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
      if (query === "") return game;
      if (game.name.toLowerCase().includes(query.toString().toLowerCase())) {
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

export default RightSide

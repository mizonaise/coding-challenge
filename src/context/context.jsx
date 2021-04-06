import { useState, useEffect, createContext } from "react";

const GamesContext = createContext();

const GamesProvider = ({ children }) => {
  const [postsPerPage] = useState(10);
  const [name, setName] = useState("");
  const [games, setGames] = useState([]);
  const [score, setScore] = useState("");
  const [isAsc, setIsAsc] = useState(true);
  const [error, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState("Release Date");
  const [filters, setFilters] = useState({
    isDate: true,
    isName: false,
    isScore: false,
  });

  const fetchData = async () => {
    const response = await fetch(
      "https://public.connectnow.org.uk/applicant-test/"
    );
    if (response.status === 200) {
      const fetchdata = await response.json();
      setGames(fetchdata);
      setLoading(false);
    } else {
      setErrors(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GamesContext.Provider
      value={{
        games,
        setGames,
        loading,
        setLoading,
        name,
        setName,
        score,
        setScore,
        isAsc,
        setIsAsc,
        selected,
        setSelected,
        filters,
        setFilters,
        error,
        currentPage,
        setCurrentPage,
        postsPerPage,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export { GamesProvider, GamesContext };

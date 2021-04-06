import { Header } from "./components";
import * as Router from "react-router-dom";
import { Contact, VideoGames } from "./pages";
import { GamesProvider } from "./context/context";

function App() {
  return (
    <GamesProvider>
      <Router.BrowserRouter>
        <Header />
        <Router.Switch>
          <Router.Route exact path={"/"} component={VideoGames} />
          <Router.Route exact path={"/contact"} component={Contact} />
        </Router.Switch>
      </Router.BrowserRouter>
    </GamesProvider>
  );
}

export default App;

import * as Router from "react-router-dom";
import { Header } from "./commons/components";
import { Contact, VideoGames } from "./pages";
import { GamesProvider } from "./commons/state/Context";


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

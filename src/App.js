import Contact from "./pages/contact";
import Header from "./components/header";
import * as Router from "react-router-dom";
import VideoGames from "./pages/videoGames";


function App() {
  return (
    <Router.BrowserRouter>
      <Header/>
        <Router.Switch>
          <Router.Route
            exact
            path={"/"}
            component={VideoGames}
          />
          <Router.Route
            exact
            path={"/contact"}
            component={Contact}
          />
        </Router.Switch>
    </Router.BrowserRouter>
  );
}

export default App;

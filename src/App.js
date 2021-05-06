import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Hompage.component";

const HatPage = () => (
  <div>
    <h1>HAts PAge</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;

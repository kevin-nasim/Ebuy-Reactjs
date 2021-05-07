import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Hompage.component";
import shop from "./pages/shop/Shop.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={shop} />
      </Switch>
    </div>
  );
}

export default App;

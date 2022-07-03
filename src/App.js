import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import Detail from "../src/pages/Detail";
import Listen from "../src/pages/Listen";
import Pick from "../src/pages/Pick";
import End from "../src/pages/End";




import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail" component={Detail} />
              <Route path="/listen" component={Listen} />
              <Route path="/pick" component={Pick} />
              <Route path="/end" component={End} />


            </Switch>
      </>
    </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from "react"

import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Header from "./components/Header"
import DetailInfo from "./routes/DetailInfo"

function App() {  
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/character/:id">
             <Detail />
        </Route>
        <Route path="/info/:id/:type">
          <DetailInfo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  )
}

export default App;

import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/"/>
        </Switch>
        <Navbar />
      </Router>
    </div>
  )
}

export default App

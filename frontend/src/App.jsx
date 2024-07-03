import './App.css';
import Register from './pages/Register.jsx';
import Read from './pages/Read.jsx';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/read" component={Read} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

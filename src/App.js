
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from "./components/about";
import Navbar from "./components/navbar";
import SearchForm from "./components/searchForm";
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Body>

      </Body>
        <SearchForm></SearchForm>

    </div>
  );
}

export default App;

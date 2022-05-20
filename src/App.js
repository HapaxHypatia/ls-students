import logo from './logo.png';
import './App.css';

import Navbar from "./components/navbar";
import SearchForm from "./components/searchForm";
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <logo></logo>
      <Navbar></Navbar>
      <Body>

      </Body>
        <SearchForm></SearchForm>

    </div>
  );
}

export default App;

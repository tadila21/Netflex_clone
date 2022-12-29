
import './App.css';
import Row from './Components/Row';

import request from './request';
import Banner from './Components/Banner';
import Nav from "./Components/Nav"

import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
  <Nav />
    <Banner />
      <Row title="NETFLIX ORIGINALS"fetchurl={request.fetchNetflixOriginals}isLargeRow />
      <Row title="Trending Now" fetchurl={request.fetchTrending} />
      <Row title="Top Rated Movies" fetchurl={request.fetchTopRatedMovies} />
      <Row title="ACTION Movies" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={request.fetchRomanceMovies} />
      <Row title="Docmetaries" fetchurl={request.fetchDocumentaries} />
      <Footer/>
    </div>
  ); 
}

export default App;

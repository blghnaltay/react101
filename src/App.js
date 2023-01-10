import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./Comp/MovieCard";
import NavBar from "./Comp/NavBar";
function App() {
  var api_key = "ce76d9baddad8e9543c7b6f33225a019";
  const [movieList, setMovieList] = useState([]);
  const [sayfa, setSayfa] = useState("now_playing");
  const getMovieList = (key) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${sayfa}?api_key=ce76d9baddad8e9543c7b6f33225a019&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) =>
        setMovieList((prev) => {
          console.log(data.results);
          return data.results;
        })
      );
  };
  useEffect(() => {
    getMovieList();
  }, [sayfa]);
  return (
    <div className="App">
      <NavBar set={setSayfa}></NavBar>
      <div id="ml">
        {movieList.map((item) => (
          <MovieCard
            key={item.id}
            tt={item.original_title}
            time={item.release_date}
            url={item.poster_path}
            desc={item.overview}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Movie from "./component/Movie";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Link from './Links'
import Link3 from './Link3'
import  Carousel from './component/carousel'
import Series from './series'
import New from './new'
import Series2 from './series2'
import Series3 from './series3'
import New2 from './new2'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };
  const counter = useSelector (state => state.counter );
  const isLogged = useSelector (state => state.isLogged);
  const dispatch = useDispatch ();
  return (
    <div className="App">
        
    
      <div className="flex">
      <Header  search={search}/>
      
      </div>
      <Carousel></Carousel>
      <center>
        {" "}
        <p className="App-intro"><h1 className="moviee">Movies</h1>
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
      </center>
      <h1 class="nm-collections-row-name">Popular on GOFLIX</h1>
      <div className="movies">
      
        {movies.map((movie, index) => (
          <Movie movie={movie}  key={`${index}-${movie.Title}`}  />
        ))}
      </div>
      <Router>
      <div>
      <Link/>
    <Series/>
    <Route path="/Popular" component={New}/>
      </div>
   </Router>
   <Router>
      <div>
      
    <Series2/>
    
      </div>
   </Router>
   <Router>
      <div>
      <Link3/>
    <Series3/>
    <Route path="/Actions" component={New2}/>
      </div>
   </Router>
 <div> <center> <h1 className="like">Loved Movies : {counter}</h1></center></div>
    </div>
  );
};

export default App;

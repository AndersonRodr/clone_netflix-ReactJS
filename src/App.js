import React, { useEffect, useState } from 'react';
import Tmdb from './tmdb_request';
import MovieSection from './components/MovieSection';
import PrincipalMovie from './components/PrincipalMovie';
import './App.css';

export default () => {
  var mov = {};
  const [ movieList, setMovieList ] = useState([]);
  const [ principalMovieData, setPrincipalMovieData ] = useState(null);

  useEffect( () => {
    const loadListMovie = async () => {
      let list = await Tmdb.homeList();
      setMovieList(list);

      const originalsMovies = list.filter(filterOriginais);
      let pMovie = originalsMovies[0].data.results[randomMovie(originalsMovies[0].data.results)];
      
      let moviePrincipalInformations = await Tmdb.getPrincipalMovie(pMovie.id, 'tv');
      //console.log(moviePrincipalInformations);
      mov = moviePrincipalInformations;
      setPrincipalMovieData(moviePrincipalInformations);
      console.log(principalMovieData);
    } 

    loadListMovie();

  }, []);

  function filterOriginais(data){
    return data.slug === 'originals';
  }

  function randomMovie(listMovies){
    const min = 0;
    const max = Math.floor(listMovies.length - 1);
    const indexRandomMovie = Math.floor(Math.random() * (max - min + 1)) + min;
    return indexRandomMovie;
  }

  return (
    <div className="page">
      <section>
        {principalMovieData && <PrincipalMovie principalMovie = {principalMovieData}/>}
        
      </section>
      <section>
        {movieList.map((data, key) => (

          <MovieSection key={key} title={data.title} data={data} />

        ))}
      </section>
    </div>
    
  )
}
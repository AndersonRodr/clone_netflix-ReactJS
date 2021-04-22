import React from 'react';
import './PrincipalMovie.css';

export default ({principalMovie}) => {

    let genres = [];
    for (let i in principalMovie.genres){
        genres.push(principalMovie.genres[i].name)
    }

    return (

        <div>
            <section className="principalMovieContainer" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/w300/${principalMovie.backdrop_path})`
            }}>
            {/* { <img className="principalImage" src = {`https://image.tmdb.org/t/p/w300/${principalMovie.backdrop_path}`} />} */}

                <div className="principalMovie">
                    <div className="principalMovieInformations">
                        <div className="principalMovieName">
                            {principalMovie.original_name}
                        </div>
                        <div className="principalMovieInfos">
                            <div className="avg">
                                {principalMovie.vote_average}
                            </div>
                        </div>
                        <div className="descriptionMovie">
                            {principalMovie.overview}
                        </div>
                        <div className="buttons">
                            
                            <a className="buttonWatch" href={`/watch/${principalMovie.id}`}  >► Assistir</a>
                            <a className="buttonMoreInfo">
                                <svg style={{width:20, 
                                            height:20}} 
                                            viewBox="0 0 24 24"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"></path></svg>
                                Mais Informações
                            </a>
                        </div>
                        <div className="genresMovie">
                            <strong>Gêneros: {genres.join(", ")}</strong>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
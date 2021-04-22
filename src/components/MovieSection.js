import React from 'react';
import './MovieSection.css';

export default ({title, data}) => {

    return (

        <div className="movieRow">  
            <h2>{title}</h2>
            <div className="movieRow_container">
                {/* {console.log(data)} */}
                <div className="movieRow_list">
                        {data.data.results.length > 0 && data.data.results.map((data, key) => (
                            <div key={key} className="movieRow_item"> 
                                <img alt={data.original_title} key={key} src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} />
                            </div>
                        ))}
                </div>
            </div>
        </div>

    );
}
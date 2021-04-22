const API_KEY = '2696ebff9ebe67b3ba9c5f13aa151713';
const API_BASE = 'https://api.themoviedb.org/3';

let stream_code = '213' //Netflix

const getInformationMovies = async (url) => {
    const request = await fetch(`${API_BASE}${url}`);
    const movie = request.json();
    return movie;
}


export default {
    homeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais',
                data: await getInformationMovies(`/discover/tv?with_network=${stream_code}&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trendings',
                title: 'Recomendados',
                data: await getInformationMovies(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                data: await getInformationMovies(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                data: await getInformationMovies(`/discover/movie?with_genres=28&languages=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                data: await getInformationMovies(`/discover/movie?with_genres=35&languages=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                data: await getInformationMovies(`/discover/movie?with_genres=27&languages=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                data: await getInformationMovies(`/discover/movie?with_genres=10749&languages=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                data: await getInformationMovies(`/discover/movie?with_genres=99&languages=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getPrincipalMovie: async (idMovie, typeMovie) => {
        let movie = {}
        if (!idMovie){
            return;
        }
        
        let url = "/movie/";
        if (typeMovie === "tv"){
            url = "/tv/";
        }

        url += `${idMovie}?languages=pt-BR&api_key=${API_KEY}`;
        movie = await getInformationMovies(url);
        return movie;
    }
}
import React from "react";
import OneMovie from "./OneMovie";
import Preloader from "./Preloader";
import Search from "./Search";
import Filter from "./Filter";

const API_KEY = process.env.REACT_APP_API_KEY;

class Movies extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            type: "all",
        };

        this.isFirstFetch = true;

    };

    componentDidMount() {
        if ( this.isFirstFetch ) {

            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
                .then( (responce) =>  responce.json() )
                    .then( (mas) =>  {
                        this.setState({ movies: mas["Search"]})
                    }  )
                    .catch( (err) => {
                        console.error(err);
                    });

            console.log('componentDidMount and run fetch');

            this.isFirstFetch = false;
        }
    }

    getResult = (search) => {
        this.setState({ movies: [] });

        const type = this.state.type;
        let typeString = "";

        if (type === 'movie') typeString = '&type=movie';
        if (type === 'series') typeString = '&type=series';

        fetch( `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${typeString}` )
            .then( (responce) =>  responce.json() )
                .then( (mas) =>  {
                    if ( mas["Search"] ) this.setState({ movies: mas["Search"]});
                    else this.setState( { movies: [ { imdbID:1,
                                                    Poster: "N/A",
                                                    Title: "Nothin found",
                                                    Type: "",
                                                    Year: "" } ] } );
                    
                }  )
                .catch( (err) => {
                    console.error(err);
                } );
    }

    getType = (typeName) => {
        this.setState( {type: typeName});
    }

    render() {
        return (

            <div className="container content">
                <Search getResult={this.getResult} />
                <Filter getType={this.getType}/>
                <div className="movies">
                    { this.state.movies.length === 0 ? <Preloader />
                    : this.state.movies.map( (obj) => <OneMovie key={obj.imdbID}
                                                                poster={obj.Poster}
                                                                title={obj.Title}
                                                                type={obj.Type}
                                                                year={obj.Year} />  )}
                </div>
            </div>

        );
    };
};

export default Movies;
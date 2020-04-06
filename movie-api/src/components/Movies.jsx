import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    console.log(`fetching your movies...`);
    // fetch(`https://api.spotify.com/v1/users/chelibellyfofelly/playlists`, {
    //   headers: {
    //     Authorization:
    //       "Bearer BQDm43s2J0zJmLvgM0dGEJk2HbKFIfGvg7MLSPhv_JZPyYVh3eG0aWPHyqngmA3cfyNltY6AtzmXeghr0EHry9do8D4CNCQ4ZqfM47-4pMjV0Kk_Ittig_NRs9QLt0ZeRvkzZ7TMGfcEtrhEO1ReQpDi",
    //   },
    // })
    fetch(
      "https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt0120737&r=json",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key":
            "0999183ce0msh75a5266314740adp1d8804jsn1ec6013c94a4",
        },
      }
    )
      .then((response) => response.json())
      .then(this.displayMovieData)
      .catch(this.handleError);
  };

  displayMovieData = (response) => {
    console.log(response);
    this.setState((prevState) => {
      return {
        ...prevState,
        movie: response,
      };
    });
  };

  handleError = (errResponse) => {
    console.log(errResponse);
  };

  render() {
    return (
      <>
        <div>Hello, world!</div>
        <h4>{this.state.movie.Title}</h4>
        <h5>{this.state.movie.Year}</h5>
        <img alt="Poster of the avengers" src={this.state.movie.Poster}></img>
        <p>{this.state.movie.Plot}</p>
      </>
    );
  }
}

export default Movies;

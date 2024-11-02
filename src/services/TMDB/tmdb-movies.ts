export const TmdbMovies = {
  popularMovies: async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
        	`Bearer ${process.env.TMDB_KEY}`,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data.results;
  },
};

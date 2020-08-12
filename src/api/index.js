export const api_Key = "c92c6d47c94d219de796e915db6c2c37";

export const req = {
  fetchtrending: `/trending/all/week?api_key=${api_Key}&language=en-US`,
  fetchOrignals: `/discover/tv?api_key=${api_Key}&with_networks=213`,
  fetchtvPopular: `https://api.themoviedb.org/3/discover/tv?api_key=${api_Key}&sort_by=popularity.desc&language=en-US`,
  fetchmoviePolpular: `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&sort_by=popularity.desc&original_language=en-US`,
  fetchAction: `/discover/tv?api_key=${api_Key}&with_genres=28`,
  fetchComedy: `/discover/tv?api_key=${api_Key}&with_genres=35`
};

//https://api.themoviedb.org/3/movie/550?api_key=c92c6d47c94d219de796e915db6c2c37
//movie/550?api_key=

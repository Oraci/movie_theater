const search = (query) =>
  `https://api.themoviedb.org/3/search/movie?api_key=ac08ffe00d011e1dbabbddec813dbf6e&query=${query}`;

const discover =
  'https://api.themoviedb.org/3/discover/movie?api_key=ac08ffe00d011e1dbabbddec813dbf6e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';

const fetchSearch = (query) => fetch(search(query));

const fetchDiscover = () => fetch(discover);

export default { fetchSearch, fetchDiscover };

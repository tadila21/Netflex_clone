import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3'
});

instance.get('/movie/top_rated');

export default instance;







// c2d986c5142bec4e610f84f8fc9f9847
// https://api.themoviedb.org/3/movie/550?api_key=c2d986c5142bec4e610f84f8fc9f9847
// import axios from "axios"
// const instance =axios.create({
//     baseURl: "https://api.themoviedb.org/3"
// });
// instance.get('/movie/top_rated');

// export default instance
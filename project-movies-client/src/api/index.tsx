import axios, { isCancel, AxiosError } from 'axios';


// const API_KEY = process.env.REACT_APP_API_KEY

const API_KEY = 'f06a126f8d5954f4845a027ac61210da'

export const appRepositoryAPI = {
  getListNowPlayingMovies: async (page: number) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  getListPopularMovies: async (page: number) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  getListTopRatedMovies: async (page: number) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  getDetailMovie: async (movieId: string) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  searchMovies: async (page: number, query: string) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`)
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  
  

  // GetCustomerSimpleList: async (query: string, page: number, limit: number) => {
  //   let path = ApiHelpers.GetApiUrl('/discounts/customers/simple', {
  //     query: query,
  //     page: page,
  //     limit: limit
  //   })
  //   return await ApiHelpers.api_call_get(ApiHelpers.ApiType.com_api, path).then(response => {
  //     return response;
  //   })
  // },

  // GetDiscountDetail: async (id: number) => {
  //   let path = `/discounts/v2/${id}`;
  //   return await ApiHelpers.api_call_get(ApiHelpers.ApiType.com_api, path).then(response => {
  //     return response;
  //   })
  // },
}
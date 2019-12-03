import Apod from "../Models/Apod.js";
import store from "../store.js";
//@ts-ignore
let _nasaApod = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  timeout: 8000
});
class ApodService {
  constructor() {}
  search(data) {
    _nasaApod
      .get("apod?api_key=DHPmjRc0hHa8WPokk5uZnZu7MkNY34z6ZeIcM6o5&date=" + data)
      .then(res => {
        let result = new Apod(res.data);
        store.commit("apod", result);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

const service = new ApodService();
export default service;

import ApodService from "../Services/ApodService.js";
import store from "../store.js";

//Private
function _drawApod() {
  document.getElementById("apod").innerHTML = store.State.apod.Template;
}

//Public
export default class ApodController {
  constructor() {
    store.subscribe("apod", _drawApod);
  }
  search(event) {
    event.preventDefault();
    let data = event.target.date.value;
    ApodService.search(data);
  }
}

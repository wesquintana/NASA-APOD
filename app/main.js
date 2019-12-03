import ApodController from "./Controllers/ApodController.js";

class App {
  ApodController = new ApodController();
}

window["app"] = new App();

export default class Apod {
  constructor(data) {
    this.imgurl = data.hdurl;
    this.title = data.title;
  }
  get Template() {
    return /*html*/ `<h1 class="text-center">${this.title}</h1>
  <img id="image"src="${this.imgurl}" alt=""/>
  `;
  }
}

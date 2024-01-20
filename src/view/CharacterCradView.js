import { htmlToElement } from "../util/htmlToElement.js";

export class CharacterCardView {
  #baseUrl = 'https://ihatov08.github.io/';

  #cardHtml =
  `
  <li class="character-card">
    <span class="character-name"></span>
    <img class="character-image">
    <span class="character-category"></span>
  </li>
  `

  createElement({ name, image, category }) {
    const baseCardElement = htmlToElement(this.#cardHtml);
    const characterNameElement = baseCardElement.querySelector('.character-name');
    const characterImgElement = baseCardElement.querySelector('.character-image');
    const characterCategoryElement = baseCardElement.querySelector('.character-category');

    characterNameElement.textContent = name;
    characterImgElement.src = this.#baseUrl + image;
    characterCategoryElement.textContent = category;

    return baseCardElement;
  }
}
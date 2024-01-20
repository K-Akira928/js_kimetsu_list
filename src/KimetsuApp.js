import { CharacterListView } from "./view/CharacterListView.js";

export class KimetsuApp {

  #characterListView = new CharacterListView();

  #allCharacterApi = 'https://ihatov08.github.io/kimetsu_api/api/all.json';
  #demonSlayersApi = 'https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json';
  #hashiraApi = 'https://ihatov08.github.io/kimetsu_api/api/hashira.json';
  #demonApi = 'https://ihatov08.github.io/kimetsu_api/api/oni.json';

  allCharacterRadioElement;
  demonSlayersRadioElement;
  hashiraRadioElement;
  demonRadioElement;
  characterContainerElement;
  loaderElement;

  constructor({
    allCharacterRadioElement,
    demonSlayersRadioElement,
    hashiraRadioElement,
    demonRadioElement,
    characterContainerElement,
    loaderElement
  }) {
    this.allCharacterRadioElement = allCharacterRadioElement;
    this.demonSlayersRadioElement = demonSlayersRadioElement;
    this.hashiraRadioElement = hashiraRadioElement;
    this.demonRadioElement = demonRadioElement;
    this.characterContainerElement = characterContainerElement;
    this.loaderElement = loaderElement;
  }

  async #handleCharacterDisplayEvent(_this, api) {
    _this.loaderElement.className = 'loader';

    _this.characterContainerElement.innerHTML = '';

    const characterDeta = await fetch(api);
    const characterJson = await characterDeta.json();
    await _this.#characterListView.createElement(_this.characterContainerElement, characterJson);

    _this.loaderElement.className = 'loaded';
  }

  #handleRadioButtonAddEvent = (type, target, event, api) => {
    target.addEventListener(type, () => {
      event(this, api);
    });
  };

  mount() {
    this.#handleCharacterDisplayEvent(this, this.#allCharacterApi);
    this.#handleRadioButtonAddEvent('change', this.allCharacterRadioElement, this.#handleCharacterDisplayEvent, this.#allCharacterApi);
    this.#handleRadioButtonAddEvent('change', this.demonSlayersRadioElement, this.#handleCharacterDisplayEvent, this.#demonSlayersApi);
    this.#handleRadioButtonAddEvent('change', this.hashiraRadioElement, this.#handleCharacterDisplayEvent, this.#hashiraApi);
    this.#handleRadioButtonAddEvent('change', this.demonRadioElement, this.#handleCharacterDisplayEvent, this.#demonApi);
  }

}
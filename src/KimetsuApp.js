import { CharacterListView } from "./view/CharacterListView.js";

export class KimetsuApp {

  #characterListView = new CharacterListView();

  #BASE_API = 'https://ihatov08.github.io/kimetsu_api/api/'

  #ALL_CHARACTER_API = this.#BASE_API + 'all.json';
  #DEMON_SLAYERS_API = this.#BASE_API + 'kisatsutai.json';
  #HASHIRA_API = this.#BASE_API + 'hashira.json';
  #DEMON_API = this.#BASE_API +'oni.json';

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
    this.#handleCharacterDisplayEvent(this, this.#ALL_CHARACTER_API);
    this.#handleRadioButtonAddEvent('change', this.allCharacterRadioElement, this.#handleCharacterDisplayEvent, this.#ALL_CHARACTER_API);
    this.#handleRadioButtonAddEvent('change', this.demonSlayersRadioElement, this.#handleCharacterDisplayEvent, this.#DEMON_SLAYERS_API);
    this.#handleRadioButtonAddEvent('change', this.hashiraRadioElement, this.#handleCharacterDisplayEvent, this.#HASHIRA_API);
    this.#handleRadioButtonAddEvent('change', this.demonRadioElement, this.#handleCharacterDisplayEvent, this.#DEMON_API);
  }

}
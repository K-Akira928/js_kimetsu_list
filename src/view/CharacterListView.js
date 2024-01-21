import { CharacterCardView } from "./CharacterCradView.js";

export class CharacterListView {
  createElement(containerElement ,characterJson) {
    const characterCardView = new CharacterCardView();
    const characterListElement = document.createElement('ul');
    characterListElement.className = 'character-list';

    characterJson.forEach((character) => {
      const characterCardElement = characterCardView.createElement({
        name: character.name,
        image: character.image,
        category: character.category
      });
      characterListElement.appendChild(characterCardElement);
    });

    containerElement.appendChild(characterListElement);
  }
}
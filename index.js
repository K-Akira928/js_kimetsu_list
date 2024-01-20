import { KimetsuApp } from "./src/KimetsuApp.js";

const allCharacterRadioElement = document.querySelector('#all-character-radio');
const demonSlayersRadioElement = document.querySelector('#demon-slayers-radio');
const hashiraRadioElement = document.querySelector('#hashira-radio');
const demonRadioElement = document.querySelector('#demon-radio');
const characterContainerElement = document.querySelector('.character-container');
const loaderElement = document.querySelector('.loader');

const kimetsuApp = new KimetsuApp({
  allCharacterRadioElement,
  demonSlayersRadioElement,
  hashiraRadioElement,
  demonRadioElement,
  characterContainerElement,
  loaderElement
});

window.addEventListener('load', () => {
  loaderElement.className = 'loaded';
  kimetsuApp.mount();
});

//-----------------------GENERATE COLOR PALeTTES-----------------------

let palettes = ['standard', 'avatar', 'percy', 'nature'];
let lastPalette;
function generatePalette(palettesArr) {
  let idx = Math.floor(Math.random() * palettesArr.length);
  const chosenPalette = palettesArr[idx];
  if (lastPalette === chosenPalette) {
    return generatePalette(palettesArr);
  }
  lastPalette = chosenPalette;
  return chosenPalette;
}

function generatePalette(palettesArr, lastPalette) {
    let idx = Math.floor(Math.random() * palettesArr.length);
    const chosenPalette = palettesArr[idx];
    if (lastPalette === chosenPalette) {
      return generatePalette(palettesArr);
    }
    lastPalette = chosenPalette;
    return chosenPalette;
};

export default generatePalette;
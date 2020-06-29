export function numberToLetter(number = 0) {
  if (number === 0) {
    return ' ';
  }
  return String.fromCharCode(96 + (number % 26)).toUpperCase();
}

export function getNumberLabel(number, labelType = 'none') {
  switch (labelType) {
    case 'none':
      return '';
    case 'numbers':
      return number;
    case 'letters':
      return numberToLetter(number);
    default:
      return number;
  }
}

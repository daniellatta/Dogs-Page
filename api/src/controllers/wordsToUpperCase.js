const normalizeName = (q) => {
  let words = q
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
    .join(' ');
  return words;
};

module.exports = normalizeName;

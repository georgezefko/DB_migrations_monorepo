module.exports = function getDate(
  locale = 'en-US',
  options = { weekday: undefined, year: undefined, month: undefined, day: undefined }
) {
  return new Date().toLocaleDateString(locale, options);
};
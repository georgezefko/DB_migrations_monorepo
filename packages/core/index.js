module.exports = function getDate(locale, options) {
    if (locale === void 0) { locale = 'en-US'; }
    if (options === void 0) { options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; }
    return new Date().toLocaleDateString(locale, options);
};

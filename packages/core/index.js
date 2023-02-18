module.exports = function getDate(locale, options) {
    if (locale === void 0) { locale = 'en-US'; }
    if (options === void 0) { options = { weekday: undefined, year: undefined, month: undefined, day: undefined }; }
    return new Date().toLocaleDateString(locale, options);
};

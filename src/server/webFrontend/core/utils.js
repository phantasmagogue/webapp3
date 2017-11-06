module.exports = {
    formatTemperature(kelvins, unit) {
        if (kelvins === null) return null;
        return ({
            C: Math.round(kelvins - 273.15),
            K: kelvins,
            F: Math.round(kelvins * 9/5 - 459.67)
        })[unit] || null
    }

}
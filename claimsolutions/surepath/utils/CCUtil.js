export class CCUtil {
    /*
     * Get today's date in the format of mm/dd/yyyy
     */
    async getDateForToday() {
        const date = new Date();
        const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0.
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }

    async formatToCurrency(value, currency, locale) {
        let formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2
        });
        return formatter.format(value);
    }

    /*
     * Generate a N-digit number
     * This is useful when a random/unique number is required to avoid duplicate data. e.g. taxID/SSN
     */
    async generateRandomNumber(numDigit) {
        const min = Math.pow(10, numDigit - 1);
        const max = min * 9;
        return Math.floor(Math.random()*max) + min;
    }

}
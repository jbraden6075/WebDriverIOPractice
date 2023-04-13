import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertPage extends Page {
    /**
     * define selectors using getter methods
     */
    get h1Alert () {
        return $('h1=Alert');
    }
}

export default new AlertPage();

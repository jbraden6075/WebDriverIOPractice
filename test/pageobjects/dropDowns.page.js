import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropDownsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get h1Dropdown () {
        return $('h1=Dropdown');
    }
}

export default new DropDownsPage();


import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EditPage extends Page {
    /**
     * define selectors using getter methods
     */
    get h1Input () {
        return $('h1=Input');
    }
}

export default new EditPage();

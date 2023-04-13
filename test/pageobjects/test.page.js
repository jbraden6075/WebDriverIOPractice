

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TestPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnEdit () {
        return $('=Edit');
    }

    get btnClick () {
        return $('=Click');
    }

    get btnDropDown () {
        return $('=Drop-Down');
    }

    get btnDialog () {
        return $('=Dialog')
    }

    get btnInnerHTML () {
        return $('=Inner HTML')
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async clickButton (button) {
        await button.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('test');
    }
}

export default new TestPage();

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ButtonsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get h1Button () {
        return $('h1=Button');
    }
}

export default new ButtonsPage();

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FramePage extends Page {
    /**
     * define selectors using getter methods
     */
    get h1Frame () {
        return $('h1=Frame');
    }
}

export default new FramePage()

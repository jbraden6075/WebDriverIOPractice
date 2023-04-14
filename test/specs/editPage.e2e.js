import TestPage from '../pageobjects/test.page.js'
import EditPage from '../pageobjects/edit.page.js'


describe('EditPage', () => {
    it('should allow the user to enter text into the Full Name field', async () => {
        let text = 'Bob Bobbers';

        await TestPage.clickButton(TestPage.btnEdit);
        await EditPage.enterText(EditPage.txtFullName, text);
        await expect(EditPage.txtFullName).toHaveValue(text);
    });

    it('should allow the user to append text into the Append field', async () => {
        let text = ' at appending text!'

        await TestPage.clickButton(TestPage.btnEdit);
        
        let existingText = await EditPage.txtAppendText.getValue()

        await EditPage.enterText(EditPage.txtAppendText, text)
        await expect(EditPage.txtAppendText).toHaveValue(existingText + text)
    })
})

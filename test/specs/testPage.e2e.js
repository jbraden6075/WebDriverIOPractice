import ButtonsPage from '../pageobjects/buttons.page.js'
import DropDownsPage from '../pageobjects/dropDowns.page.js'
import EditPage from '../pageobjects/edit.page.js'
import TestPage from '../pageobjects/test.page.js'



describe('TestPage', () => {
    it('should navigate to Edit Page when Edit button is clicked', async () => {
        await TestPage.open()
        
        await TestPage.clickButton(TestPage.btnEdit)
        await expect(EditPage.h1Input).toBeExisting()
    });

    it('should navigate to Buttons Page when Click button is clicked', async () => {
        await TestPage.open()

        await TestPage.clickButton(TestPage.btnClick)
        await expect(ButtonsPage.h1Button).toBeExisting()
    });

    it('should navigate to Dropdowns page when Drop-Down button is clicked', async () => {
        await TestPage.open()

        await TestPage.clickButton(TestPage.btnDropDown)
        await expect(DropDownsPage.h1Dropdown).toBeExisting()
    });
})



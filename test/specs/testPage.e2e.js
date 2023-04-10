import TestPage from '../pageobjects/test.page.js'
import EditPage from '../pageobjects/edit.page.js'


describe('TestPage Edit button', () => {
    it('should navigate to Edit Page when clicked', async () => {
        await TestPage.open()
        
        await TestPage.btnEdit.click()
        await expect(EditPage.h1Input).toBeExisting()
    })
})



const utils = require('../common/common');
const mainPage = require('../pages/mainPage');
const addUserPopupPage = require('../pages/addUserPopupPage');
require('dotenv').config();

const firstName = 'Valentin';
const userName = 'QA Automation';
const phoneNumber = '+38050 4101761';
const role = 'Admin';

describe('Add new user', () => {
    it('Pop up is displayed', () => {
        browser.get(process.env.BASEURL);
        utils.clickElement(mainPage.addUserBtn);
        expect((addUserPopupPage.popupTitle).isDisplayed()).toBe(true);
    });

    it('New user added', async () => {
        utils.sendKeysElement(addUserPopupPage.firstNameInput, firstName);
        utils.sendKeysElement(addUserPopupPage.userNameInput, userName);
        utils.sendKeysElement(addUserPopupPage.cellPhoneInput, phoneNumber);
        utils.selectOptionByText(addUserPopupPage.roleInput, role);
        utils.clickElement(addUserPopupPage.saveBtn);
        expect(await mainPage.firstNameСells.getText()).toContain(firstName);
        expect(await mainPage.userNameСells.getText()).toContain(userName);
        expect(await mainPage.roleСells.getText()).toContain(role);
        expect(await mainPage.phoneСells.getText()).toContain(phoneNumber);     
    });
});

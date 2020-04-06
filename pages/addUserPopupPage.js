
class AddUserPopUpPage {
    constructor () {
        this.popupTitle = element(by.css('div[class="modal-header"]'));
        this.firstNameInput = element(by.css('input[name="FirstName"]'));
        this.userNameInput = element(by.css('input[name="UserName"]'));
        this.roleInput = element(by.css('select[name="RoleId"]'));
        this.cellPhoneInput = element(by.css('input[name="Mobilephone"]'));
        this.saveBtn = element(by.css('button[ng-click="save(user)"]'));
    }  
}
module.exports = new AddUserPopUpPage();
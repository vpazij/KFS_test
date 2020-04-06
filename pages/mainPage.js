// const utils = require('../common/common');

// const someLocator = element(by.css(''));

class MainPage {
    constructor () {
        this.addUserBtn = element(by.css('button[class="btn btn-link pull-right"]'));
        this.firstNameСells = element.all(by.css('tr[ng-repeat] td:nth-child(1)'));
        this.userNameСells = element.all(by.css('tr[ng-repeat] td:nth-child(3)'));
        this.roleСells = element.all(by.css('tr[ng-repeat] td:nth-child(6)'));
        this.phoneСells = element.all(by.css('tr[ng-repeat] td:nth-child(8)'));     
    }
}
module.exports = new MainPage();
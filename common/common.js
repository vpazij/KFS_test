const EC = protractor.ExpectedConditions;
class WebElUtils{
    
    clickElement (element, timeout) {
        this.waitVisibleElement(element, timeout);
        let i = 0;
        return clickIt();
        function clickIt () {
            return element.click().then(
                (clicked) => {
                    return clicked;
                },
                (error) => {
                    if (++i <= 5) {
                        browser.driver.sleep(i * 500);
                        browser.executeScript('window.scrollBy(0,250)');
                        return clickIt();
                    }
                    fail(error);
                }
            );
        }
    };
    
    sendKeysElement (element, value, timeout) {
        this.waitVisibleElement(element, timeout);
        return element.clear().sendKeys(value);
    };
    waitVisibleElement (element, timeout) {
        if (!timeout) {
            timeout = browser.params.timeout.elementVisibilityTimeout;
        }
        return browser.wait(EC.visibilityOf(element, timeout,
            'Failed to find element ' + '. Timeout: ' + timeout + 'ms.'));
    };
   
    selectOptionByText (element, text, timeout) {
        this.waitVisibleElement(element, timeout);
        return element.element(by.xpath(`//option[text()="${text}"]`)).click();
    };
}
module.exports = new WebElUtils();
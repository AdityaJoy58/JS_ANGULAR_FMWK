var myStepDefinitionsWrapper = function () {

    var reviewDetailsPage = require('../../pages/reviewDetailsPage');
    var makeAPaymentPage = require('../../pages/makeAPaymentPage');
    var settings = require('../../common/settings');
    var libraries = require('../../common/libraries');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;
    var expectedResultDictionary = {};
    var EC = protractor.ExpectedConditions;
    var drn;
    var billerName;

    this.When(/^User enters an invalid Card number$/, function (callback) {
        browser.findElement(makeAPaymentPage.creditCard).click().then(function () {
            browser.findElement(makeAPaymentPage.creditCard).clear().then(function () {
                browser.findElement(makeAPaymentPage.creditCard).sendKeys(libraries.setBankAccountNumber()).then(function () {
                    browser.findElement(makeAPaymentPage.creditCard).sendKeys(protractor.Key.TAB).then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User enters an valid Card number "([^"]*)"$/, function (cardType, callback) {
        if (cardType == "VISA") {
            number = settings.constants.VISACARDNUMBER;
            image = settings.constants.VISACARDIMAGE;
        } else if (cardType == "MASTER") {
            number = settings.constants.MASTERCARDNUMBER;
            image = settings.constants.MASTERCARDIMAGE;
        } else if (cardType == "AMEX") {
            number = settings.constants.AMEXCARDNUMBER;
            image = settings.constants.AMEXCARDIMAGE;
        } else if (cardType == "DINERS") {
            number = settings.constants.DINERSCARDNUMBER;
            image = settings.constants.DINERSCARDIMAGE;
        }
        browser.findElement(makeAPaymentPage.creditCard).clear().then(function () {
            browser.findElement(makeAPaymentPage.creditCard).sendKeys(number.substr(0, number.length - 1)).then(function () {
                browser.findElement(makeAPaymentPage.cardHolderName).clear().then(function () {
                    browser.findElement(makeAPaymentPage.cardHolderName).sendKeys(libraries.setBankAccountName(15)).then(function () {
                        browser.findElement(makeAPaymentPage.creditCard).sendKeys(number.substr(number.length - 1)).then(function () {
                            var expMonth = libraries.setCardExpiryMonthNumber().toString();
                            var expYear = libraries.setCardExpiryYearNumber().toString();
                            browser.findElement(makeAPaymentPage.cardExpiryDate).clear().then(function () {
                                browser.findElement(makeAPaymentPage.cardExpiryDate).sendKeys(expMonth).then(function () {
                                    browser.sleep(settings.config.SMALLWAITTIME).then(function () {
                                        browser.findElement(makeAPaymentPage.cardExpiryDate).sendKeys(expYear.substr(0, 1)).then(function () {
                                            browser.findElement(makeAPaymentPage.cardExpiryDate).sendKeys(expYear.substr(1)).then(function () {
                                                browser.findElement(makeAPaymentPage.cardSecurityCode).clear().then(function () {
                                                    browser.findElement(makeAPaymentPage.cardSecurityCode).sendKeys(expYear + expYear).then(function () {
                                                        browser.findElement(makeAPaymentPage.cardSecurityCode).sendKeys(protractor.Key.TAB).then(function () {
                                                            expectedResultDictionary.cardlastFourDigits = number.substr(number.length - 4);
                                                            expectedResultDictionary.cardExpiryDate = expMonth + "/" + expYear;
                                                            expectedResultDictionary.cardType = cardType;
                                                            expectedResultDictionary.cardHolderName = libraries.getBankAccountName();
                                                            callback();
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^User enter an invalid Card Expiry date$/, function (callback) {
        var expYear = libraries.setCardExpiryYearNumber().toString();
        browser.findElement(makeAPaymentPage.cardExpiryDate).clear().then(function () {
            browser.findElement(makeAPaymentPage.cardExpiryDate).sendKeys(expYear).then(function () {
                browser.findElement(makeAPaymentPage.cardExpiryDate).sendKeys(protractor.Key.TAB).then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User enter an invalid Card Security code$/, function (callback) {
        var expYear = libraries.setCardExpiryYearNumber().toString();
        browser.findElement(makeAPaymentPage.cardSecurityCode).clear().then(function () {
            browser.findElement(makeAPaymentPage.cardSecurityCode).sendKeys(expYear).then(function () {
                browser.findElement(makeAPaymentPage.cardSecurityCode).sendKeys(protractor.Key.TAB).then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Verify the card error is shown to the user that "([^"]*)"$/, function (errorMessage, callback) {
        browser.sleep(settings.config.WAITTIME).then(function () {
            browser.findElement(makeAPaymentPage.cardErrorMessage).isDisplayed().then(function () {
                browser.findElement(makeAPaymentPage.cardErrorMessage).getText().then(function (getCardErrorMessage) {
                    assert.equal(getCardErrorMessage, errorMessage, "Card error message didn't show up");
                    callback();
                });
            });
        });
    });

    this.Then(/^Verify the card security code error is shown to the user that "([^"]*)"$/, function (errorMessage, callback) {
        browser.sleep(settings.config.WAITTIME).then(function () {
            browser.findElement(makeAPaymentPage.cardSecurityCodeErrorMessage).isDisplayed().then(function () {
                browser.findElement(makeAPaymentPage.cardSecurityCodeErrorMessage).getText().then(function (getCardSecurityCodeErrorMessage) {
                    assert.equal(getCardSecurityCodeErrorMessage, errorMessage, "Card Security Code error message didn't show up");
                    callback();
                });
            });
        });
    });

    this.Then(/^Verify Security code field is empty$/, function (callback) {
        browser.sleep(settings.config.WAITTIME).then(function () {
            browser.findElement(makeAPaymentPage.cardSecurityCode).isDisplayed().then(function () {
                browser.findElement(makeAPaymentPage.cardSecurityCode).getText().then(function (getCardSecurityCode) {
                    assert.equal("", getCardSecurityCode, "Card Security Code is not empty which is not expected");
                    callback();
                });
            });
        });
    });

    this.Then(/^Verify Card is accepted without any error$/, function (callback) {
        browser.sleep(settings.config.WAITTIME).then(function () {
            browser.wait(EC.invisibilityOf(element(makeAPaymentPage.cardErrorMessage)), settings.config.WAITTIME).then(function (errorMessageDisplayed) {
                assert.isTrue(errorMessageDisplayed, "Card Error Message is Displayed which is not expected");
                callback();
            });
        });
    });

    this.Then(/^Verify the Card field should not accept any special Characters$/, function (callback) {
        browser.sleep(settings.config.WAITTIME).then(function () {
            browser.findElement(makeAPaymentPage.creditCard).getText().then(function (cardText) {
                assert.equal(cardText, "", "Card text is not empty which is not expected");
                callback();
            });
        });
    });

    this.When(/^User enters a special characters and alphabets and Tab out "([^"]*)"$/, function (specialCharacters, callback) {
        browser.findElement(makeAPaymentPage.creditCard).click().then(function () {
            browser.findElement(makeAPaymentPage.creditCard).clear().then(function () {
                browser.findElement(makeAPaymentPage.creditCard).sendKeys(specialCharacters).then(function () {
                    browser.findElement(makeAPaymentPage.creditCard).sendKeys(protractor.Key.TAB).then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^Verify the details in review details page "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, function (drnType, email, surcharge, fee, callback) {
        if (drnType == "SHORT") {
            drn = settings.constants.SHORTDRN;
            billerName = settings.constants.SHORTDRNBILLERNAME;
        } else if (drnType == "LONG") {
            drn = settings.constants.LONGDRN;
            billerName = settings.constants.LONGDRNBILLERNAME;
        } else if (drnType == "DBC") {
            drn = settings.constants.DBCDRN;
            billerName = settings.constants.DBCDRNBILLERNAME;
        } else if (drnType == "DRNDOESNTACCEPTCARD") {
            drn = settings.constants.DRNDOESNTACCEPTCARD;
            billerName = settings.constants.DBCDRNBILLERNAME;
        } else {
            drn = drnType;
        }
        browser.wait(EC.visibilityOf(element(reviewDetailsPage.billerNameText)), settings.config.WAITTIME).then(function (getBillerNameTextDisplayed) {
            browser.wait(EC.visibilityOf(element(reviewDetailsPage.drnText)), settings.config.WAITTIME).then(function (getDRNTextDisplayed) {
                browser.wait(EC.visibilityOf(element(reviewDetailsPage.cardNumberText)), settings.config.WAITTIME).then(function (getCardNumberText) {
                    browser.wait(EC.visibilityOf(element(reviewDetailsPage.cardHolderNameText)), settings.config.WAITTIME).then(function (getCardHolderNameText) {
                        browser.wait(EC.visibilityOf(element(reviewDetailsPage.cardExpiryDateText)), settings.config.WAITTIME).then(function (getCardExpiryDateText) {
                            browser.wait(EC.visibilityOf(element(reviewDetailsPage.paymentAmountText)), settings.config.WAITTIME).then(function (getPaymentAmountText) {
                                browser.wait(EC.visibilityOf(element(reviewDetailsPage.totalAmountText)), settings.config.WAITTIME).then(function (getTotalAmountText) {
                                    browser.wait(EC.visibilityOf(element(reviewDetailsPage.paymentQuestions)), settings.config.WAITTIME).then(function (getPaymentQuestions) {
                                        browser.findElement(reviewDetailsPage.billerNameText).getText().then(function (getBillerNameText) {
                                            assert.equal(billerName, getBillerNameText, "DRN Biller Name is not as expected");
                                        });
                                        browser.findElement(reviewDetailsPage.drnText).getText().then(function (getDRNText) {
                                            assert.equal(drn, getDRNText, "DRN is not as expected");
                                        });
                                        browser.findElement(reviewDetailsPage.cardNumberText).getText().then(function (getCardNumberText) {
                                            assert.equal(expectedResultDictionary.cardlastFourDigits, getCardNumberText.split(" ")[1], "Card 4 digits are not as expected");
                                        });
                                        browser.findElement(reviewDetailsPage.cardHolderNameText).getText().then(function (getCardHolderNameText) {
                                            assert.equal(expectedResultDictionary.cardHolderName, getCardHolderNameText, "Card Holder Name is not equal to expected");
                                        });
                                        browser.findElement(reviewDetailsPage.cardExpiryDateText).getText().then(function (getCardExpiryDateText) {
                                            assert.equal(expectedResultDictionary.cardExpiryDate, getCardExpiryDateText, "Card Expiry is not equal to expected");
                                        });
                                        browser.findElement(reviewDetailsPage.paymentAmountText).getText().then(function (getPaymentAmountText) {
                                            assert.equal(libraries.getPaymentAmount(), getPaymentAmountText.replace("$A",""), "Payment Amount is not equal to expected");
                                        });
                                        assert.isTrue(getTotalAmountText, "Total Amount is not visible which is not as Expected");
                                        assert.isTrue(getPaymentQuestions, "Payment Questions section didn't show up as Expected");
                                        if(surcharge != "NOSURCHARGE"){
                                            browser.wait(EC.visibilityOf(element(reviewDetailsPage.paymentSurchargeAmountText)), settings.config.WAITTIME).then(function (getPaymentSurchargeAmountText) {
                                                assert.isTrue(getPaymentSurchargeAmountText, "Surcharge Amount is not visible which is not as Expected");
                                            });
                                        }
                                        if(fee != "NOFEE"){
                                            browser.wait(EC.visibilityOf(element(reviewDetailsPage.paymentTransactionFeeText)), settings.config.WAITTIME).then(function (getPaymentTransactionFeeText) {
                                                assert.isTrue(getPaymentTransactionFeeText, "Transaction Fee Amount is not visible which is not as Expected");
                                            });
                                        }
                                        if(email != "") {
                                            browser.wait(EC.visibilityOf(element(reviewDetailsPage.sendEmailReceiptTo)), settings.config.WAITTIME).then(function (getEmailReceiptText) {
                                                browser.findElement(reviewDetailsPage.sendEmailReceiptTo).getText().then(function (getEmailAddressText) {
                                                    assert.equal(email, getEmailAddressText, "Email Receipt is not visible which is not as Expected");
                                                    callback();
                                                });
                                            });
                                        }
                                        else{
                                                callback();
                                            }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

};
module.exports = myStepDefinitionsWrapper;
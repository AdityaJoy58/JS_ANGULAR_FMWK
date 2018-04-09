var myStepDefinitionsWrapper = function () {
    var conf = require('../../../conf');
    var applicationUrl = conf.config.params.application.baseUrl;
    var makeAPaymentPage = require('../../pages/makeAPaymentPage');
    var reviewDetailsPage = require('../../pages/reviewDetailsPage');
    var settings = require('../../common/settings');
    var libraries = require('../../common/libraries');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;
    var expectedResultDictionary = {};
    var EC = protractor.ExpectedConditions;
    var amount;

    this.Then(/^Verify spinner shows up$/, function (callback) {
        browser.findElements(reviewDetailsPage.spinner).then(function (elems) {
            if (elems.length > 0) {
                browser.findElement(reviewDetailsPage.spinner).isDisplayed().then(function (spinnerDisplayed) {
                    assert.isTrue(spinnerDisplayed, "Spinner is not Enabled");
                    browser.wait(EC.invisibilityOf(element(reviewDetailsPage.spinner)), settings.config.ULTIMATELONGWAITTIME).then(function () {
                        callback();
                    });
                });
            }else {
                callback();
            }
        });
    });

    this.Then(/^Verify Payment is successful$/, function (callback) {
        browser.sleep(settings.config.WAITTIME).then(function () {
            browser.findElements(reviewDetailsPage.paymentStatusPopupPaymentSuccessfulText).then(function (elems) {
                if (elems.length > 0) {
                    browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentSuccessfulHomeButton).isDisplayed().then(function (homeButtonDisplayed) {
                        browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentSuccessfulMakeAnotherPaymentButton).isDisplayed().then(function (makeAnotherPaymentButtonDisplayed) {
                            browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentSuccessfulHomeButton).click().then(function () {
                                assert.isTrue(homeButtonDisplayed, "Home button is not Displayed");
                                assert.isTrue(makeAnotherPaymentButtonDisplayed, "Make another payment button is not Displayed");
                                browser.sleep(settings.config.WAITTIME).then(function () {
                                    callback();
                                });
                            });
                        });
                    });
                }else {
                    browser.findElements(reviewDetailsPage.paymentStatusPopupPaymentProcessingErrorText).then(function (elems) {
                        if (elems.length > 0) {
                            browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentProcessingErrorText).isDisplayed().then(function (paymentProcessingErrorTextDisplayed) {
                                browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentProcessingErrorHomeButton).isDisplayed().then(function (paymentProcessingErrorOKButtonDisplayed) {
                                    assert.isTrue(paymentProcessingErrorOKButtonDisplayed, "Home Button is not Displayed");
                                    browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentProcessingErrorHomeButton).click().then(function () {
                                        assert.isTrue(paymentProcessingErrorTextDisplayed, "Payment Processing Error Text is not Displayed");
                                        browser.sleep(settings.config.WAITTIME).then(function () {
                                            callback();
                                        });
                                    });
                                });
                            });
                        } else {
                            browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentProcessingErrorText1).isDisplayed().then(function (paymentProcessingErrorTextDisplayed) {
                                browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentProcessingErrorOKButton).isDisplayed().then(function (paymentProcessingErrorOKButtonDisplayed) {
                                    assert.isTrue(paymentProcessingErrorOKButtonDisplayed, "OK Button is not Displayed");
                                    browser.findElement(reviewDetailsPage.paymentStatusPopupPaymentProcessingErrorOKButton).click().then(function () {
                                        assert.isTrue(paymentProcessingErrorTextDisplayed, "Payment Processing Error Text is not Displayed");
                                        browser.sleep(settings.config.WAITTIME).then(function () {
                                            callback();
                                        });
                                    });
                                });
                            });
                        }
                    });
                }
            });
        });
    });

    this.Then(/^Verify it leads to website Home Page$/, function (callback) {
        browser.wait(EC.visibilityOf(element(makeAPaymentPage.websiteHomePageRegisterNowButton)), settings.config.WAITTIME).then(function (websiteHomePageRegisterNowDisplayed) {
            browser.wait(EC.visibilityOf(element(makeAPaymentPage.websiteHomePagePayWithoutALoginButton)), settings.config.WAITTIME).then(function (websiteHomePagePayWithoutALoginDisplayed) {
                assert.isTrue(websiteHomePageRegisterNowDisplayed, "website Home page Register Now Button is not visible which is not as Expected");
                assert.isTrue(websiteHomePagePayWithoutALoginDisplayed, "website Home page Pay without a login Button is not visible which is not as Expected");
                browser.get(applicationUrl).then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Verify it leads to website Payer Portal Registration Login Page$/, function (callback) {
        browser.wait(EC.visibilityOf(element(makeAPaymentPage.payerPortalLoginButton)), settings.config.WAITTIME).then(function (websitePayerPortalLoginButtonDisplayed) {
            browser.wait(EC.visibilityOf(element(makeAPaymentPage.payerPortalRegisterNowButton)), settings.config.WAITTIME).then(function (websitePayerPortalRegisterNowButtonDisplayed) {
                assert.isTrue(websitePayerPortalLoginButtonDisplayed, "website Payer Portal Login Button is not visible which is not as Expected");
                assert.isTrue(websitePayerPortalRegisterNowButtonDisplayed, "website Payer Portal Register now Button is not visible which is not as Expected");
                browser.get(applicationUrl).then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User clicks on Log in button$/, function (callback) {
        browser.wait(EC.visibilityOf(element(makeAPaymentPage.loginButton)), settings.config.WAITTIME).then(function () {
            browser.findElement(makeAPaymentPage.loginButton).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User clicks on website logo/, function (callback) {
        browser.wait(EC.visibilityOf(element(makeAPaymentPage.websiteLogo)), settings.config.WAITTIME).then(function () {
            browser.findElement(makeAPaymentPage.websiteLogo).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^Verify edit button shows up$/, function (callback) {
        browser.wait(EC.visibilityOf(element(reviewDetailsPage.editButton)), settings.config.WAITTIME).then(function (isEditButtonDisplayed) {
            assert.isTrue(isEditButtonDisplayed, "Edit Button is not displayed which is not expected");
            callback();
        });
    });

    this.When(/^User clicks on edit button$/, function (callback) {
        browser.wait(EC.visibilityOf(element(reviewDetailsPage.editButton)), settings.config.WAITTIME).then(function () {
            browser.findElement(reviewDetailsPage.editButton).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User clicks on Paynow button$/, function (callback) {
        browser.wait(EC.visibilityOf(element(reviewDetailsPage.payNowButton)), settings.config.WAITTIME).then(function () {
            browser.findElement(reviewDetailsPage.payNowButton).click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Verify clicking on edit button leads to Make a payment page$/, function (callback) {
        browser.wait(EC.visibilityOf(element(makeAPaymentPage.cancelButton)), settings.config.WAITTIME).then(function (cancelButtonDisplayed) {
            browser.wait(EC.visibilityOf(element(makeAPaymentPage.nextButton)), settings.config.WAITTIME).then(function (nextButtonDisplayed) {
                assert.isTrue(cancelButtonDisplayed, "Cancel button in Make a payment is not visible which is not as Expected");
                assert.isTrue(nextButtonDisplayed, "Next button in Make a payment is not visible which is not as Expected");
                callback();
            });
        });
    });

    this.Then(/^Verify email notification shows up with DRN OptIn DDA confirmation$/, function (callback) {
        browser.sleep(settings.config.LONGWAITTIME).then(function () {
            browser.executeScript('window.open()').then(function () {
                browser.getAllWindowHandles().then(function (handles) {
                    browser.switchTo().window(handles[handles.length - 1]).then(function () {
                        browser.findElement(reviewDetailsPage.emailDDASetup).getText().then(function (emailDDASetup) {
                            var date = emailDDASetup.split("Date")[1].split(" (Sydney time)")[0].trim().split(" ")[0];
                            var drn = emailDDASetup.split("website reference number")[1].split("Biller name")[0].trim();
                            var billerName = emailDDASetup.split("Biller name")[1].split("Payment method")[0].trim();
                            var paymentMethod = emailDDASetup.split("Payment method")[1].split("Card Number")[0].trim();
                            assert.equal(date, moment().format('DD/MM/YYYY'), "DDA Enabled Opt-in Date is not as expected");
                            assert.equal(drn, expectedResultDictionary.drn, "DDA Enabled DRN is not as expected");
                            assert.equal(billerName, expectedResultDictionary.billerName, "DDA Enabled Biller Name is not as expected");
                            assert.equal(paymentMethod, expectedResultDictionary.paymentMethod, "DDA Enabled Payment Method is not as expected");
                            browser.switchTo().window(handles[0]).then(function () {
                                callback();
                            });
                        });
                    });
                });
            });
        });//html/body/dl[1]/dd[last()]//td[contains(text(),'website direct debit authorisation has been set up')]/../../../../../../../../
    });


};
module.exports = myStepDefinitionsWrapper;
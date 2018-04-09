var settings = require('./settings');
var emailValue = 'final_testenv@imailed.xyz'; // automation_testenv@imailed.xyz for uat , automation_testenv@imailed.xyz for testenv
var passwordValue = 'test12345';
var bankAccountNumber = '';
var bankAccountName = '';
var cardExpiryMonthNumber = '';
var cardExpiryYearNumber = '';
var drnNickName = '';
var ivrCode = '';
var paymentAmount = '';
var numberOfPayments = '';
var random = require("random-js")(); // uses the nativeMath engine

var libraries = function () {

    this.randomString = function (length) {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
    }

    this.passwordString = function () {
        return Math.random().toString(36).substr(3)+ "5";
    }

    this.waitForElement = function (selector, waitFor) {
        waitFor = waitFor || 5000;
        browser.driver.manage().timeouts().implicitlyWait(waitFor);
        browser.driver.findElement(selector);
        browser.driver.manage().timeouts().implicitlyWait(0);
    }

    this.getEmailValue = function(){
        //return "automation_testenv@imailed.xyz";
        return emailValue;
    };

    this.setEmailValue = function(){
        emailValue = this.randomString(10) + settings.constants.EMAILSUFFIX;
        return emailValue;
    };

    this.getPasswordValue = function(){
        //return "test1234";
        return passwordValue;
    };

    this.setPasswordValue = function(){
        passwordValue = this.passwordString();
        return passwordValue;
    };

    this.getMigratedUserEmailValue = function(){
        //return "migration_user@imailed.xyz";
        return "test_testenvregression@imailed.xyz"
    }

    this.getMigratedUserPasswordValue = function(){
        return "test1234";
    }

    this.getBankAccountNumber = function () {
        return bankAccountNumber;
    };

    this.setBankAccountNumber = function(){
        bankAccountNumber = random.integer(1, 1000000000);
        return bankAccountNumber;
    };

    this.getCardExpiryMonthNumber = function () {
        return cardExpiryMonthNumber;
    };

    this.setCardExpiryMonthNumber = function(){
        cardExpiryMonthNumber = random.integer(1, 12);
        if(cardExpiryMonthNumber < 10){
            cardExpiryMonthNumber = '0'+ cardExpiryMonthNumber;
        }
        return cardExpiryMonthNumber;
    };

    this.getCardExpiryYearNumber = function () {
        return cardExpiryYearNumber;
    };

    this.setCardExpiryYearNumber = function(){
        cardExpiryYearNumber = random.integer(19, 29);
        return cardExpiryYearNumber;
    };

    this.getBankAccountName = function () {
        return bankAccountName;
    };

    this.setBankAccountName = function(length){
        bankAccountName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
        return bankAccountName;
    };

    this.getDRNNickName = function () {
        return drnNickName;
    };

    this.setDRNNickName = function(){
        drnNickName = Math.random().toString(36).replace(/[^a-z]+/g, '');
        return drnNickName;
    };

    this.getIVRCode = function () {
        return ivrCode;
    };

    this.setIVRCode = function(){
        ivrCode = Math.floor(100000 + Math.random() * 900000);
        return ivrCode;
    };

    this.setPaymentAmount = function(){
        paymentAmount = (Math.random() * 90).toFixed(2);
        return paymentAmount;
    };

    this.getPaymentAmount = function () {
        return paymentAmount;
    };

    this.getNumberOfPayments = function () {
        return numberOfPayments;
    };

    this.setNumberOfPayments = function(){
        numberOfPayments = Math.floor(10 + Math.random() * 90);
        return numberOfPayments;
    };

}
module.exports = new libraries();

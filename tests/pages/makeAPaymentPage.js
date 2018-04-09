/**
 * Created by Aditya
 */

var makeAPaymentPage = {

    // application Make a Payment Elements

    dRNField: by.id('DRN'),
    dRNName: by.css("p[class='returnBiller ng-binding']"),
    drnValidatedTickSign: by.css("span[class='iconShortcut ng-scope'] span[class='icon-tick-sign']"),
    dRNNotifyText: by.css("div[class='notify ng-scope']"),
    dRNErrorMessage: by.css("website-error[code='error.errorCode']"),
    websiteLogo: by.css("img[class='logo']"),
    loginButton: by.css("ul[class='nav navbar-nav'] i[class='fa icon-lock-open']"),
    emailField: by.id("emailField"),
    payerPortalLoginButton: by.id("loginButton"),
    payerPortalRegisterNowButton: by.css("a[href='#/registration']"),
    dRNInfoIcon: by.css("a[data-target='.modalInfo1']"),
    drnInfoHeader: by.css("div[class='modal fade modalInfo1 in'] div[class='modal-dialog'] h3"),
    drnInfoContent: by.css("div[class='modal fade modalInfo1 in'] div[class='modal-dialog'] p"),
    drnInfoGotItButton: by.css("div[class='modal fade modalInfo1 in'] div[class='modal-dialog'] button"),
    creditCard: by.id("card"),
    cardErrorMessage: by.css("website-error[code='error.code']"),
    cardHolderName: by.id("cardHolderName"),
    cardExpiryDate: by.id("expiry"),
    cardSecurityCode:by.id("securityCode"),
    cardSecurityCodeErrorMessage: by.css("website-error[code='6000004']"),
    securityCodeInfoIcon: by.css("a[data-target='.modalInfo2']"),
    securityCodeInfoHeader: by.css("div[class='modal fade modalInfo2 in'] div[class='modal-dialog'] h3"),
    securityCodeInfoContent: by.css("div[class='modal fade modalInfo2 in'] div[class='modal-dialog'] p"),
    securityCodeInfoGotItButton: by.css("div[class='modal fade modalInfo2 in'] div[class='modal-dialog'] button"),
    paymentAmount: by.id("paymentAmount"),
    closeIcon: by.css("a[class='iconShortcut ng-scope']"),
    paymentAmountErrorMessage: by.css("website-error[field-values='vm.fieldValues']"),
    surchargeInfoIcon: by.css("a[data-target='.modalInfo3']"),
    surchargeHeader: by.css("div[class='modal fade modalInfo3 in'] div[class='modal-dialog'] h3"),
    surchargeContent: by.css("div[class='modal fade modalInfo3 in'] div[class='modal-dialog'] p"),
    surchargeGotItButton: by.css("div[class='modal fade modalInfo3 in'] div[class='modal-dialog'] button"),
    surchargePercentageText: by.css("div[class='row paymentSurcharge paddingTop0 ng-scope'] div[class='pull-left ng-binding']"),
    surchargeAmount: by.xpath("//div[@class='row paymentSurcharge paddingTop0 ng-scope']//div[@class='pull-left ng-binding']/../../div[@class='col-xs-4 text-right ng-binding']"),
    feePercentageText: by.css("div[class='row paymentSurcharge paddingTop0 ng-scope'] div[class='pull-left']"),
    feeAmount: by.xpath("//div[@class='row paymentSurcharge paddingTop0 ng-scope']//div[@class='pull-left']/../../div[@class='col-xs-4 text-right ng-binding']"),
    totalAmountText: by.css("div[class='row paymentTotal'] div[class='col-xs-6']"),
    totalAmount: by.css("div[class='row paymentTotal'] strong"),
    emailAddress: by.id("email"),
    emailAddressErrorMessage: by.css("website-error[code='6000006']"),
    pdsLink: by.css("a[href='https://www.website.com.au/pds']"),
    cancelButton: by.css("button[class='btn btn-cancel btn-lg pull-right']"),
    nextButton: by.css("button[class='btn btn-primary btn-lg mgLeft10 pull-right']"),

    //PDS page, Privacy and Data Security, Important Information
    footerTitles: by.css("h1[class='h2 page-title-secondary']"),

    // website Home Page
    websiteHomePageRegisterNowButton: by.css("div[class='promotion-content'] a[href='https://registration.website.com.au']"),
    websiteHomePagePayWithoutALoginButton: by.css("a[href='https://application.com.au/#/asdasdas']")

};
module.exports = makeAPaymentPage;

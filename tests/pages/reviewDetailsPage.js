/**
 * Created by Aditya
 */

var reviewDetailsPage = {

    // Review Details page elements
    //Review Details Page
    billerNameText: by.xpath("//div[@class='col-xs-12 resultWrap border-btm clearfix']/table//div[text()='Biller name']/../../td[2]/div"),
    drnText: by.xpath("//div[@class='col-xs-12 resultWrap border-btm clearfix']/table//div[text()='website reference number']/../../td[2]/div"),

    cardNumberText: by.xpath("//div[@class='col-xs-12 resultWrap border-btm clearfix']/table//div[text()='Card number']/../../td[2]/div/div[@class='pull-right ng-binding']"),
    cardHolderNameText: by.xpath("//div[@class='col-xs-12 resultWrap border-btm clearfix']/table//div[text()='Cardholder name']/../../td[2]/div"),
    cardExpiryDateText: by.xpath("//div[@class='col-xs-12 resultWrap border-btm clearfix']/table//div[text()='Expiry date']/../../td[2]/div"),

    paymentAmountText: by.xpath("//div[@class='col-xs-12 resultWrap clearfix']/table//div[text()='Payment amount']/../../td[2]/div"),
    paymentSurchargeAmountText: by.xpath("//div[@class='col-xs-12 resultWrap clearfix']/table[@ng-show='vm.surchargeRate > 0']//div[contains(text(),'Surcharge')]/../../td[2]/div"),
    paymentTransactionFeeText: by.xpath("//div[@class='col-xs-12 resultWrap clearfix']/table[@ng-show='vm.fee > 0']//div[text()='Fee']/../../td[2]/div"),
    totalAmountText: by.xpath("//div[@class='col-xs-12 resultWrap clearfix']/table[@class='paymentTotal1']//div[contains(text(),'Total amount')]/../../td[2]/div/strong"),
    sendEmailReceiptTo: by.xpath("//div[@class='resultCol clearfix emailReceipt']//div[text()='Send email receipt to']/../div[@class='text-right ng-binding']"),
    paymentQuestions: by.css("div[class='panel-group']"),

    editButton: by.css("button[ng-click='vm.editPayment()']"),
    payNowButton: by.css("button[ng-click='vm.submitPayment()']"),
    onceSubmittedPaymentCannotBeChangedOrCancelledText: by.css("p[class='descript3 mgTop10 text-right']"),
    spinner: by.css("div[class='onLoadSpinnerWrap clearfix ng-scope'] i[class='icon-loading onLoadSpinner fade fa-spin in']"),
    paymentStatusPopup: by.css("div[class='paymentStatusWrap']"),
    paymentStatusPopupPaymentSuccessfulText: by.css("div[class='paymentStatusWrap'] h2"),
    paymentStatusPopupPaymentSuccessfulHomeButton: by.css("div[class='printHide'] button[ng-click=\"modalDialog.close('home')\"]"),
    paymentStatusPopupPaymentSuccessfulMakeAnotherPaymentButton: by.css("div[class='printHide'] button[ng-click=\"modalDialog.close('restart')\"]"),
    paymentStatusPopupPaymentProcessingErrorText: by.css("div[class='modal-body clearfix border-top'] h4"),
    paymentStatusPopupPaymentProcessingErrorHomeButton: by.css("div[class='modal-footer printHide'] button[ng-click=\"modalDialog.close('home')\"]"),
    paymentStatusPopupPaymentProcessingErrorText1: by.css("div[class='paymentStatusInline clearfix'] h3"),
    paymentStatusPopupPaymentProcessingErrorOKButton: by.css("div[class='modal-footer printHide'] button[ng-click=\"modalDialog.close('retry')\"]"),

};
module.exports = reviewDetailsPage;

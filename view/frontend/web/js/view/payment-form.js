/*global define*/
define([
    'Magento_Ui/js/form/form',
    'Magento_Checkout/js/model/payment/additional-validators',
    'Magento_UiComp/js/model/payment-form-data-validator'
], function(Component, additionalValidators, paymentFormDataValidator) {
    'use strict';
    // Add the payment-form-data-validator to the validators pool
    additionalValidators.registerValidator(paymentFormDataValidator);
    
    return Component.extend({
        initialize: function () {
            this._super();

            return this;
        }
    });
});
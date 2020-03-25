/*global define*/
define([
    'Magento_Ui/js/form/form',
    'Magento_Checkout/js/model/payment/additional-validators',
    'Magento_UiComp/js/model/payment-form-data-validator'
], function(Component, additionalValidators, paymentFormDataValidator) {
    'use strict';
    additionalValidators.registerValidator(paymentFormDataValidator);
    
    return Component.extend({
        initialize: function () {
            this._super();

            return this;
        }
    });
});
define([
    'jquery'
], function ($) {
    'use strict';

    var paymentFormDataConfig = window.checkoutConfig.paymentFormData;

    /** Override default place order action and add agreement_ids to request */
    return function (paymentData) {
        // Check if the extension_attributes exist and if not create them
        if (paymentData['extension_attributes'] === undefined) {
            paymentData['extension_attributes'] = {};
        }
        // Add the value from the textarea to the extension_attributes
        var paymentFormTextarea = $(document).find('textarea[name="paymentFormTextarea"]').val();
        paymentData['extension_attributes']['paymentFormTextarea'] = paymentFormTextarea;
    };
});
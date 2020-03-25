define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_UiComp/js/model/payment-form-data-assigner'
], function ($, wrapper, paymentFormData) {
    'use strict';

    return function (placeOrderAction) {

        /** Override default place order action and add agreement_ids to request */
        return wrapper.wrap(placeOrderAction, function (originalAction, paymentData, messageContainer) {
            paymentFormData(paymentData);

            return originalAction(paymentData, messageContainer);
        });
    };
});
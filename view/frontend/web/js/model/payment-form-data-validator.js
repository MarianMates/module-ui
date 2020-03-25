define([
    'jquery',
    'mage/translate',
    'Magento_Ui/js/model/messageList',
    'uiRegistry',
    "mage/validation/validation"
], function ($, $t, messageList, registry) {
        'use strict';
        return {
            validate: function () {
                var isValid = false,
                dataForm = $('.payment-form');
                dataForm.validate({
                    errorPlacement: function(error, element) {
                        registry.get("checkout.steps.billing-step.payment.payments-list.before-place-order.payment-form.payment-form-fieldset."+element[0].name, function (el) {
                            el.error(error[0].innerText);
                        });
                    }
                });
                isValid =  dataForm.valid();

                return isValid;
            }
        }
    }
);
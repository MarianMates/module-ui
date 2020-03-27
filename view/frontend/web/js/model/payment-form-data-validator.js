define([
    'jquery',
    'mage/translate',
    'Magento_Ui/js/model/messageList',
    'uiRegistry',
    "mage/validation/validation"
], function ($, $t, messageList, registry) {
        'use strict';
        return {
            // Validate the payment form and add the error message. 
            // The error message's innerText is defined in payment-form.html -> data-bind="attr: {'data-hasrequired': $t('* Required Fields')}".
            // The validation rules come from jquery validator which is also extended by magento
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
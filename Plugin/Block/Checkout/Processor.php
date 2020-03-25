<?php

declare(strict_types=1);

namespace Magento\UiComp\Plugin\Block\Checkout;

use Magento\Checkout\Block\Checkout\LayoutProcessor;

class Processor
{
    /**
     * @param LayoutProcessor $subject
     * @param $jsLayout
     * @return mixed
     */
    public function afterProcess(LayoutProcessor $subject, $jsLayout)
    {
        //add new field
        $jsLayout["components"]["checkout"]["children"]["steps"]["children"]
        ["billing-step"]["children"]["payment"]["children"]["payments-list"]
        ["children"]["before-place-order"]["children"]["payment-form"]["children"]
        ["payment-form-fieldset"]["children"]["paymentFormTextarea2"] = [
            "component" => "Magento_Ui/js/form/element/textarea",
            "provider"  => "checkoutProvider",
            "dataScope" => "paymentFormTextarea2",
            "label"     => "Name of textarea 2",
            "config"    => [
                "template"      => "ui/form/field",
                "elementTmpl"   => "Magento_UiComp/required-textarea"
            ],
            "validation"=> [
                "required-entry"=> "true"
            ]
        ];

        //edit field created in xml
        $jsLayout["components"]["checkout"]["children"]["steps"]["children"]
        ["billing-step"]["children"]["payment"]["children"]["payments-list"]
        ["children"]["before-place-order"]["children"]["payment-form"]["children"]
        ["payment-form-fieldset"]["children"]["paymentFormTextarea"]["placeholder"] = "Placeholder added from PHP";

        return $jsLayout;
    }
}
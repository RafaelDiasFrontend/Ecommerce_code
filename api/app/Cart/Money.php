<?php

namespace App\Cart;


use NumberFormatter;
use Money\Currencies\ISOCurrencies;
use Money\Currency;
use Money\Formatter\IntlMoneyFormatter;
use Money\Money as BaseMoney;



class Money 
{
    protected $money;
    
    public function __construct($value)
    {
        $this->money = new BaseMoney($value, new Currency('BRL'));
    } 
    
    public function amount()
    {
        return $this->money->getAmount();
    }

    public function formatted()
    {
        $formatter = new IntlMoneyFormatter(
            new NumberFormatter('pt_BR', NumberFormatter::CURRENCY),
            new ISOCurrencies()
        );
        return $formatter->format($this->money);
    }
} 
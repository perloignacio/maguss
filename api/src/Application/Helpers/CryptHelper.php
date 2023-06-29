<?php

namespace App\Application\Helpers;

require_once dirname(__FILE__) . "/Crypt.php";

class CryptHelper
{
    private static $_instance;
    
    private function _getInstance()
    {
        if( !( self::$_instance instanceof Crypt ) ) {
            self::$_instance = new Crypt( );
            self::$_instance->Mode = Crypt::MODE_HEX;
            self::$_instance->Key = '!@#$%&*()_+?:';
        }
        return self::$_instance;        
    }
    
    public static function crypt($string)
    {
        return self::_getInstance()->encrypt($string);
    }
    
    public static function decrypt($string)
    {
        return self::_getInstance()->decrypt($string);
    }
}
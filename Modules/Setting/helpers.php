<?php

if (! function_exists('setting')) {
 
    function setting($key = null, $default = null)
    {
        return app('setting');
    }
}
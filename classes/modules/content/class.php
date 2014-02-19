<?php

class content_custom extends def_module
{

    public function test()
    {
        $temp = array(
            'foo' => 'foo',
            'bar' => 'bar'
        );

        return def_module::parseTemplate('', $temp);
    }

}
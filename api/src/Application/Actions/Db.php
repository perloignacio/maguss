<?php


namespace App\Application\Actions;


class DB
{
    public function connect()
    {
        $conn=mysqli_connect("localhost","root","","maguss_db");
        mysqli_set_charset($conn,'utf8');
        return $conn;
    }
}
?>

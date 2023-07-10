<?php

declare(strict_types=1);

namespace App\Application\Actions\Solicitudes;

use Psr\Http\Message\ResponseInterface as Response;
use App\Application\Actions\Db as Db;
use App\Application\Actions\GeneralAction as GeneralAction;
class ViewSolicitudesAction extends GeneralAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $sql = "select * from solicitudes where usuario_id=? and estado in('E','P','R')";
        try {
            
            $user=$this->getToken();
	        $db = new Db();
            $conn = $db->connect();
            $stmt = $conn->prepare($sql);
            $fecha=date("Y-m-d");
            $estado="E";
            $stmt->bind_param("i",$user['uid']);
            $stmt->execute();
         $result = $stmt->get_result();
            $resultados=[];
            while($res=$result->fetch_assoc()){
                array_push($resultados,$res);
            }
            return $this->respondWithData(
                $resultados,
                200
            );
            
          } catch (Exception $e) {
            $error = array(
              "message" => $e->getMessage()
            );
         
            return $this->respondWithData($error,400);
          }
    }

    

}

<?php

declare(strict_types=1);

namespace App\Application\Actions\Establecimientos;

use Psr\Http\Message\ResponseInterface as Response;
use App\Application\Actions\Db as Db;
use App\Application\Actions\GeneralAction as GeneralAction;
class ViewEstablecimientosByIdAction extends GeneralAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $sql = "SELECT * FROM establecimientos where id=?";
        try {
            $estId=(int) $this->resolveArg('id');
	        $db = new Db();
            $conn = $db->connect();
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i",$estId);
            $stmt->execute();
            $result = $stmt->get_result();
			$resultados=[];
            while($res=$result->fetch_assoc()){
                array_push($resultados,$res);
            }
            $db = null;
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

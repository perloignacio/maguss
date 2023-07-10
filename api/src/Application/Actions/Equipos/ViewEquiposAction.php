<?php

declare(strict_types=1);

namespace App\Application\Actions\Equipos;

use Psr\Http\Message\ResponseInterface as Response;
use App\Application\Actions\Db as Db;
use App\Application\Actions\GeneralAction as GeneralAction;
class ViewEquiposAction extends GeneralAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        
        try {
            
            $filters=$this->getFormData();
            $user=$this->getToken();
            $sql = "SELECT equipos.*,servicios.nombre as nombreServicio FROM equipos,servicios where equipos.servicio_id=servicios.id and equipos.establecimiento_id=".$user["establecimiento"]."";
            if(isset($filters["servicio"]) && !empty($filters["servicio"])){
               $sql .=" and servicio_id=".($filters["servicio"]); 
            }
            if(isset($filters["nro_serie"]) && !empty($filters["nro_serie"])){
               $sql .=" and serie like '%".($filters["nro_serie"])."%'"; 
            }
            if(isset($filters["codigo_interno"]) && !empty($filters["codigo_interno"])){
               $sql .=" and codigo_interno like '%".($filters["codigo_interno"])."%'"; 
            }
            if(isset($filters["equipo"]) && !empty($filters["equipo"])){
                $sql .=" and id=".($filters["equipo"]);   
            }


	        $db = new Db();
            $conn = $db->connect();
            
            $result = $conn->query($sql);
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

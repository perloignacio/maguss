<?php

declare(strict_types=1);

namespace App\Application\Actions\Solicitudes;

use Psr\Http\Message\ResponseInterface as Response;
use App\Application\Actions\Db as Db;
use App\Application\Actions\GeneralAction as GeneralAction;
class CreateSolicitudesAction extends GeneralAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $sql = "insert into solicitudes(servicio_id,usuario_id,equipo_id,urgencia,inconveniente,description,funciona,nombre,email,cargo,telefono,horario,estado,creado)
                                values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        try {
            
            $datos=$this->getFormData();
            $user=$this->getToken();
	        $db = new Db();
            $conn = $db->connect();
            $stmt = $conn->prepare($sql);
            $fecha=date("Y-m-d");
            $estado="E";
            $stmt->bind_param("iiisssssssssss",$datos['servicio_id'],$user['uid'],$datos['equipo_id'],$datos['urgencia'],$datos['inconveniente'],$datos['description'],$datos['funciona'],$datos['nombre'],$datos['email'],$datos['cargo'],$datos['telefono'],$datos['horario'],$estado,$fecha);
            $stmt->execute();
            $id=mysqli_insert_id($conn);
            $db = null;
            return $this->respondWithData(
                $id,
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

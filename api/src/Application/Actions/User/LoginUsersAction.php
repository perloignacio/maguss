<?php

declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;
use App\Application\Actions\Db as Db;
use Firebase\JWT\JWT;
use App\Application\Helpers\Crypt as Crypt;
use App\Application\Actions\GeneralAction as GeneralAction;
use Slim\Exception\HttpBadRequestException;
class LoginUsersAction extends GeneralAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
       
        $sql = "SELECT * FROM usuarios where usuario=? and password=?";
        try {
            $cr=new Crypt(2,'!@#$%&*()_+?:');
            $credential=$this->getFormData();
	        $db = new Db();
            $conn = $db->connect();
            $stmt = $conn->prepare($sql);
            $contra=$cr->encrypt($credential["contra"]);

            $stmt->bind_param("ss",$credential["usuario"],$contra);
            $stmt->execute();
            $result = $stmt->get_result();
            $resultados=$result->fetch_assoc();
            if(mysqli_num_rows($result)>0){
                $expire = (new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")))->modify("+5 hour")->format("Y-m-d H:i:s");
                $myArray =["expired_at" => $expire,"uid"=>$resultados["id"],"establecimiento"=>$resultados["establecimiento_id"],"servicio"=>$resultados["servicio_id"],"tipo"=>$resultados["tipo"],"nombre"=>$resultados["nombre"],"apellido"=>$resultados["apellido"],"email"=>$resultados["email"]];
                $token = JWT::encode($myArray, "thisisnotmyrealsecret");
                $myArray["token"]=$token;
                return $this->respondWithData($myArray,200);
            }else{
            
                //throw new \Exception();
                $this->retError( "Usuario / contraseña incorrecta");
            }
            
            $db = null;
          } catch (Exception $e) {
            $error = array(
              "message" => $e->getMessage()
            );
         
            return $this->respondWithData($error,400);
          }
    }
    
}

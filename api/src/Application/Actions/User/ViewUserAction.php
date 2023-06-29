<?php

declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;
use App\Application\Actions\Db as Db;
use App\Application\Actions\GeneralAction as GeneralAction;
class ViewUserAction extends GeneralAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $userId = (int) $this->resolveArg('id');
        $sql = "SELECT * FROM usuarios where id=?";
        try {
           
	          $db = new Db();
            $conn = $db->connect();
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i",$userId);
			      $stmt->execute();
			      $result = $stmt->get_result();
            $resultados=$result->fetch_assoc();
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

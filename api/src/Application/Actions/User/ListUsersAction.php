<?php

declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;
use App\Application\Actions\Db as Db;
use App\Application\Actions\GeneralAction as GeneralAction;
class ListUsersAction extends GeneralAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        /*$users = $this->userRepository->findAll();

        $this->logger->info("Users list was viewed.");

        return $this->respondWithData($users);*/

        $sql = "SELECT * FROM usuarios";
        try {
           
	        $db = new Db();
            $conn = $db->connect();
            
            $stmt = $conn->prepare($sql);
			$stmt->execute();
			$result = $stmt->get_result();
            $resultados=[];
            
            while($res=$result->fetch_assoc()){
                array_push($resultados,$res);
            }
            //$this->logger->info();
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

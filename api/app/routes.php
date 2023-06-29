<?php

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\LoginUsersAction;
use App\Application\Actions\User\ViewUserAction;
use App\Application\Actions\Servicios\ViewServiciosAction;
use App\Application\Actions\Servicios\ViewServiciosUserAction;
use App\Application\Actions\Establecimientos\ViewEstablecimientosAction;
use App\Application\Actions\Establecimientos\ViewEstablecimientosByIdAction;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use Firebase\JWT\JWT;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->post('/login', LoginUsersAction::class);
    $app->get('/admin/servicios', ViewServiciosAction::class);
    $app->get('/admin/serviciosUser', ViewServiciosUserAction::class);
    $app->group('/admin/establecimientos', function (Group $group) {
        $group->get('', ViewEstablecimientosAction::class);
        $group->get('/{id}', ViewEstablecimientosByIdAction::class);
    });
    /*
    $app->get('/admin/servicios', function (Request $request, Response $response) {
        $token = $request->getAttribute("token");
        $response->getBody()->write($token["uid"]);
        return $response;
    });*/

  

    $app->group('/admin/users', function (Group $group) {
        $group->get('', ListUsersAction::class);
        $group->get('/{id}', ViewUserAction::class);
    });
};

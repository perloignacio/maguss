<?php

declare(strict_types=1);
use Monolog\Logger;
use Monolog\Handler\RotatingFileHandler;
use App\Application\Middleware\SessionMiddleware;
use Slim\App;

return function (App $app) {
    $app->add(SessionMiddleware::class);
    $app->add(new Tuupola\Middleware\JwtAuthentication([
        "path"=>["/maguss/api/public/admin"],
        "secure" => false,
        "secret" => "thisisnotmyrealsecret",
        "algorithm" => ["HS256"],
        "error" => function ($response, $arguments) {
            $data["status"] = "error";
            $data["message"] = $arguments["message"];
            return $response
                ->withHeader("Content-Type", "application/json")
                ->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
        }
    ]));
};

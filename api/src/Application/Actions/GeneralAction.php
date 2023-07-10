<?php

declare(strict_types=1);

namespace App\Application\Actions;

use App\Application\Actions\Action;
use Psr\Log\LoggerInterface;

abstract class GeneralAction extends Action
{
    
    public function __construct(LoggerInterface $logger)
    {
        parent::__construct($logger);
    }
    
}

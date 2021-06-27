#!/usr/bin/env php
<?php

if (PHP_SAPI !== 'cli') {
    exit;
}

require __DIR__ . '/../vendor/autoload.php';

use HCU\App;

$app = new App();
$app->runCommand($argv);

#!/usr/bin/env php
<?php

if (php_sapi_name() !== 'cli') {
    exit;
}

require __DIR__ . '/../vendor/autoload.php';

use HCU\App;

$app = new App();
$app->runCommand($argv);
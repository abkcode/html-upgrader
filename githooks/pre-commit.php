<?php

class Enable
{
    public const PHP_LINT = true;
    public const ECS = true;

    // When true will list errors and warnings wont commit.
    public const DEBUG_MODE = false;
}

$phpLintPath = 'php -l';
$ecsPath = 'vendor/bin/ecs';

$output = [];
$return = 0;
exec('git rev-parse --verify HEAD 2> /dev/null', $output, $return);
$against = $return === 0 ? 'HEAD' : '4b825dc642cb6eb9a060e54bf8d69288fbee4904';

exec("git diff-index --cached --name-only {$against}", $output);

// don't check files that aren't PHP
$filenamePattern = '/\.php$/';
$excludePatterns = ['/\\/migrations123\\//', '/\\/views123\\//'];

$exitStatus = 0;

// First we remove those files that does not suit our needs
foreach ($output as $key => $file) {
    foreach ($excludePatterns as $excludePattern) {
        if (preg_match($excludePattern, $file)) {
            unset($output[$key]);

            continue 2;
        }
    }

    if (!preg_match($filenamePattern, $file)) {
        unset($output[$key]);

        continue;
    }

    if (!file_exists($file)) {
        // if the file has been moved or deleted,
        // the old filename should be skipped
        unset($output[$key]);

        continue;
    }
}

if (Enable::PHP_LINT) {
    foreach ($output as $file) {
        $lintOutput = [];
        $cmd = 'git show :'.escapeshellarg($file).' | '.$phpLintPath;
        exec($cmd, $lintOutput, $return);
        if ($return === 0) {
            continue;
        }

        echo implode("\n", $lintOutput), " {$file}\n";
        $exitStatus = 1;
    }
}

if ($exitStatus !== 0) {
    exit($exitStatus);
}

if (Enable::ECS) {
    $csOutput = [];
    $cmd = $ecsPath.' check --fix '.implode(' ', $output);
    exec($cmd, $csOutput, $return);
    if ($return !== 0) {
        $exitStatus = 1;
    }
    echo implode("\n", $csOutput);
    exec('git add '.implode(' ', $output));
}

if (Enable::DEBUG_MODE) {
    echo "\n\n";
    echo $exitStatus ? 'BAD CODE - CAN\'T BE COMMITED' : 'GOOD CODE - CAN BE COMMITED';
    echo "\n\n";
    exit(1);
}

exit($exitStatus);

<?php

namespace HCU;

use Exception;

class App
{
    public function runCommand(array $argv)
    {
        try {
            if (!isset($argv[1])) {
                throw new Exception('Please pass file path.');
            }
            $filePath = $argv[1];
            $filePathModified = $argv[1] . '.' . time() . '.hcu.html';
            if (!file_exists($filePath)) {
                throw new Exception('File does not exist.');
            }

            $html = file_get_contents($filePath);
            $document = new \Gt\Dom\HTMLDocument($html);

            $classList = $document->querySelector(".row-fluid")->classList;
            $classList->remove('row-fluid');
            $classList->add('row');

            // echo $document->saveHTML();
            file_put_contents($filePathModified, $document->saveHTML());
            echo shell_exec("git diff --no-index --color=always $filePath $filePathModified");
            if (!unlink($filePathModified)) {
                throw new Exception('Could not delete ($filePathModified).');
            }

        } catch (Exception $e) {
            echo $e->getMessage() . "\n";
        }
    }
}

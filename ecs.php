<?php

use PhpCsFixer\Fixer\ControlStructure\YodaStyleFixer;
use PhpCsFixer\Fixer\Operator\ConcatSpaceFixer;
use PhpCsFixer\Fixer\Semicolon\MultilineWhitespaceBeforeSemicolonsFixer;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symplify\CodingStandard\Fixer\Commenting\RemoveCommentedCodeFixer;
use Symplify\CodingStandard\Fixer\LineLength\LineLengthFixer;
use Symplify\EasyCodingStandard\ValueObject\Option;
use Symplify\EasyCodingStandard\ValueObject\Set\SetList;

return static function (ContainerConfigurator $containerConfigurator): void {
    // A. standalone rule
    // $services = $containerConfigurator->services();
    // $services->set(ArraySyntaxFixer::class)
    //     ->call('configure', [[
    //         'syntax' => 'short',
    //     ]]);

    // B. full sets
    $containerConfigurator->import(SetList::PSR_12);
    $containerConfigurator->import(SetList::PHP_CS_FIXER);
    $containerConfigurator->import(SetList::PHP_CS_FIXER_RISKY);
    // $containerConfigurator->import(SetList::CLEAN_CODE); // included in SetList::PHP_CS_FIXER
    $containerConfigurator->import(SetList::SYMPLIFY);
    // $containerConfigurator->import(SetList::ARRAY); // included in SetList::COMMON
    // $containerConfigurator->import(SetList::COMMON);
    // $containerConfigurator->import(SetList::COMMENTS); // included in SetList::COMMON
    // $containerConfigurator->import(SetList::CONTROL_STRUCTURES); // included in SetList::COMMON
    // $containerConfigurator->import(SetList::DOCBLOCK); // included in SetList::COMMON
    // $containerConfigurator->import(SetList::NAMESPACES); // included in SetList::COMMON
    // $containerConfigurator->import(SetList::PHPUNIT); // included in SetList::COMMON
    // $containerConfigurator->import(SetList::SPACES); // included in SetList::COMMON
    // $containerConfigurator->import(SetList::STRICT); // included in SetList::COMMON
    // $containerConfigurator->import(SetList::SYMFONY); // included in SetList::PHP_CS_FIXER
    // $containerConfigurator->import(SetList::SYMFONY_RISKY); // included in SetList::PHP_CS_FIXER_RISKY
    // $containerConfigurator->import(SetList::DOCTRINE_ANNOTATIONS);

    $services = $containerConfigurator->services();

    $services->set(YodaStyleFixer::class)
        ->call('configure', [[
            'equal' => false,
            'identical' => false,
            'less_and_greater' => false,
        ]]);

    $services->set(ConcatSpaceFixer::class)
        ->call('configure', [[
            'spacing' => 'one',
        ]]);

    $services->set(MultilineWhitespaceBeforeSemicolonsFixer::class)
        ->call('configure', [[
            'strategy' => 'no_multi_line',
        ]]);

    $services->set(LineLengthFixer::class)
        ->call('configure', [[
            LineLengthFixer::LINE_LENGTH => 140,
        ]]);

    $parameters = $containerConfigurator->parameters();

    $parameters->set(Option::SKIP, [
        RemoveCommentedCodeFixer::class => null,
    ]);
};

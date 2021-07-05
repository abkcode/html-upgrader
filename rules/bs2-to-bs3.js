module.exports.bs2_to_bs3_rules = [
    {
        selector: '.row-fluid',
        classList: {
            remove: ['row-fluid'],
            add: ['row'],
        },
    },
    {
        selector: '.span1',
        classList: {
            remove: ['span1'],
            add: ['col-md-1'],
        },
    },
    {
        selector: '.span2',
        classList: {
            remove: ['span2'],
            add: ['col-md-2'],
        },
    },
    {
        selector: '.span3',
        classList: {
            remove: ['span3'],
            add: ['col-md-3'],
        },
    },
    {
        selector: '.span4',
        classList: {
            remove: ['span4'],
            add: ['col-md-4'],
        },
    },
    {
        selector: '.span5',
        classList: {
            remove: ['span5'],
            add: ['col-md-5'],
        },
    },
    {
        selector: '.span6',
        classList: {
            remove: ['span6'],
            add: ['col-md-6'],
        },
    },
    {
        selector: '.span7',
        classList: {
            remove: ['span7'],
            add: ['col-md-7'],
        },
    },
    {
        selector: '.span8',
        classList: {
            remove: ['span8'],
            add: ['col-md-8'],
        },
    },
    {
        selector: '.span9',
        classList: {
            remove: ['span9'],
            add: ['col-md-9'],
        },
    },
    {
        selector: '.span10',
        classList: {
            remove: ['span10'],
            add: ['col-md-10'],
        },
    },
    {
        selector: '.span11',
        classList: {
            remove: ['span11'],
            add: ['col-md-11'],
        },
    },
    {
        selector: '.span12',
        classList: {
            remove: ['span12'],
            add: ['col-md-12'],
        },
    },
    {
        selector: '.offset1',
        classList: {
            remove: ['offset1'],
            add: ['col-md-offset-1'],
        },
    },
    {
        selector: '.offset2',
        classList: {
            remove: ['offset2'],
            add: ['col-md-offset-2'],
        },
    },
    {
        selector: '.offset3',
        classList: {
            remove: ['offset3'],
            add: ['col-md-offset-3'],
        },
    },
    {
        selector: '.offset4',
        classList: {
            remove: ['offset4'],
            add: ['col-md-offset-4'],
        },
    },
    {
        selector: '.offset5',
        classList: {
            remove: ['offset5'],
            add: ['col-md-offset-5'],
        },
    },
    {
        selector: '.offset6',
        classList: {
            remove: ['offset6'],
            add: ['col-md-offset-6'],
        },
    },
    {
        selector: '.offset7',
        classList: {
            remove: ['offset7'],
            add: ['col-md-offset-7'],
        },
    },
    {
        selector: '.offset8',
        classList: {
            remove: ['offset8'],
            add: ['col-md-offset-8'],
        },
    },
    {
        selector: '.offset9',
        classList: {
            remove: ['offset9'],
            add: ['col-md-offset-9'],
        },
    },
    {
        selector: '.offset10',
        classList: {
            remove: ['offset10'],
            add: ['col-md-offset-10'],
        },
    },
    {
        selector: '.offset11',
        classList: {
            remove: ['offset11'],
            add: ['col-md-offset-11'],
        },
    },
    {
        selector: '.offset12',
        classList: {
            remove: ['offset12'],
            add: ['col-md-offset-12'],
        },
    },
    {
        selector: '.brand',
        classList: {
            remove: ['brand'],
            add: ['navbar-brand'],
        },
    },
    {
        selector: '.navbar .divider-vertical',
        classList: {
            remove: ['divider-vertical'],
        },
    },
    {
        selector: '.navbar .nav',
        classList: {
            add: ['navbar-nav'],
        },
    },
    {
        selector: '.nav-collapse',
        classList: {
            remove: ['nav-collapse'],
            add: ['navbar-collapse'],
        },
    },
    {
        selector: '.nav-toggle',
        classList: {
            remove: ['nav-toggle'],
            add: ['navbar-toggle'],
        },
    },
    {
        selector: '.btn-navbar',
        classList: {
            remove: ['btn-navbar'],
            add: ['navbar-btn'],
        },
    },
    {
        selector: '.hero-unit',
        classList: {
            remove: ['hero-unit'],
            add: ['jumbotron'],
        },
    },
    // {
    //     selector: '.icon-*',
    //     classList:{
    // remove: ['icon-*'],
    //     add: ['glyphicon', 'glyphicon-*'],
    // }},
    {
        selector:
            '.btn:not(.btn-primary):not(.btn-info):not(.btn-success):not(.btn-warning):not(.btn-danger):not(.btn-inverse):not(.btn-link)',
        classList: {
            remove: ['btn'],
            add: ['btn', 'btn-default'],
        },
    },
    {
        selector: '.btn-mini',
        classList: {
            remove: ['btn-mini'],
            add: ['btn-xs'],
        },
    },
    {
        selector: '.btn-small',
        classList: {
            remove: ['btn-small'],
            add: ['btn-sm'],
        },
    },
    {
        selector: '.btn-large',
        classList: {
            remove: ['btn-large'],
            add: ['btn-lg'],
        },
    },
    {
        selector: '.alert:not(.alert-info):not(.alert-success):not(.alert-error)',
        classList: {
            remove: ['alert'],
            add: ['alert', 'alert-warning'],
        },
    },
    {
        selector: '.alert-error',
        classList: {
            remove: ['alert-error'],
            add: ['alert-danger'],
        },
    },
    {
        selector: '.visible-phone',
        classList: {
            remove: ['visible-phone'],
            add: ['visible-xs'],
        },
    },
    {
        selector: '.visible-tablet',
        classList: {
            remove: ['visible-tablet'],
            add: ['visible-sm'],
        },
    },
    {
        selector: '.visible-desktop',
        classList: {
            remove: ['visible-desktop'],
            add: ['visible-md', 'visible-lg'],
        },
    },
    {
        selector: '.hidden-phone',
        classList: {
            remove: ['hidden-phone'],
            add: ['hidden-xs'],
        },
    },
    {
        selector: '.hidden-tablet',
        classList: {
            remove: ['hidden-tablet'],
            add: ['hidden-sm'],
        },
    },
    {
        selector: '.hidden-desktop',
        classList: {
            remove: ['hidden-desktop'],
            add: ['hidden-md', 'hidden-lg'],
        },
    },
    {
        selector: '.input-block-level',
        classList: {
            remove: ['input-block-level'],
            add: ['form-control'],
        },
    },
    {
        selector: '.control-group.info',
        classList: {
            remove: ['info'],
        },
    },
    {
        selector: '.control-group.warning',
        classList: {
            remove: ['control-group', 'warning'],
            add: ['form-group', 'has-warning'],
        },
    },
    {
        selector: '.control-group.error',
        classList: {
            remove: ['control-group', 'error'],
            add: ['form-group', 'has-error'],
        },
    },
    {
        selector: '.control-group.success',
        classList: {
            remove: ['control-group', 'success'],
            add: ['form-group', 'has-success'],
        },
    },
    {
        selector: '.control-group',
        classList: {
            remove: ['control-group'],
            add: ['form-group'],
        },
    },
    {
        selector: '.checkbox.inline',
        classList: {
            remove: ['checkbox', 'inline'],
            add: ['checkbox-inline'],
        },
    },
    {
        selector: '.radio.inline',
        classList: {
            remove: ['radio', 'inline'],
            add: ['radio-inline'],
        },
    },
    {
        selector: '.input-prepend',
        classList: {
            remove: ['input-prepend'],
            add: ['input-group'],
        },
    },
    {
        selector: '.input-append',
        classList: {
            remove: ['input-append'],
            add: ['input-group'],
        },
    },
    {
        selector: '.add-on',
        classList: {
            remove: ['add-on'],
            add: ['input-group-addon'],
        },
    },
    {
        selector: '.img-polaroid',
        classList: {
            remove: ['img-polaroid'],
            add: ['img-thumbnail'],
        },
    },
    {
        selector: 'ul.unstyled',
        classList: {
            remove: ['unstyled'],
            add: ['list-unstyled'],
        },
    },
    {
        selector: 'ul.inline',
        classList: {
            remove: ['inline'],
            add: ['list-inline'],
        },
    },
    {
        selector: '.muted',
        classList: {
            remove: ['muted'],
            add: ['text-muted'],
        },
    },
    {
        selector: '.label:not(.label-info):not(.label-success):not(.label-important):not(.label-warning):not(.label-inverse)',
        classList: {
            remove: ['label'],
            add: ['label', 'label-default'],
        },
    },
    {
        selector: '.label-important',
        classList: {
            remove: ['label-important'],
            add: ['label-danger'],
        },
    },
    {
        selector: '.text-error',
        classList: {
            remove: ['text-error'],
            add: ['text-danger'],
        },
    },
    {
        selector: '.table .error',
        classList: {
            remove: ['error'],
            add: ['danger'],
        },
    },
    {
        selector: '.bar',
        classList: {
            remove: ['bar'],
            add: ['progress-bar'],
        },
    },
    {
        selector: '.bar-info',
        classList: {
            remove: ['bar-info'],
            add: ['progress-bar-info'],
        },
    },
    {
        selector: '.bar-success',
        classList: {
            remove: ['bar-success'],
            add: ['progress-bar-success'],
        },
    },
    {
        selector: '.bar-warning',
        classList: {
            remove: ['bar-warning'],
            add: ['progress-bar-warning'],
        },
    },
    {
        selector: '.bar-danger',
        classList: {
            remove: ['bar-danger'],
            add: ['progress-bar-danger'],
        },
    },
    {
        selector: '.accordion',
        classList: {
            remove: ['accordion'],
            add: ['panel-group'],
        },
    },
    {
        selector: '.accordion-group',
        classList: {
            remove: ['accordion-group'],
            add: ['panel', 'panel-default'],
        },
    },
    {
        selector: '.accordion-heading',
        classList: {
            remove: ['accordion-heading'],
            add: ['panel-heading'],
        },
    },
    {
        selector: '.accordion-body',
        classList: {
            remove: ['accordion-body'],
            add: ['panel-collapse'],
        },
    },
    {
        selector: '.accordion-inner',
        classList: {
            remove: ['accordion-inner'],
            add: ['panel-body'],
        },
    },
    {
        selector: '.form-actions',
        classList: {
            remove: ['form-actions'],
        },
    },
    {
        selector: '.form-search',
        classList: {
            remove: ['form-search'],
        },
    },
    {
        selector: '.input-mini',
        classList: {
            remove: ['input-mini'],
            add: ['form-control'],
        },
    },
    {
        selector: '.input-small',
        classList: {
            remove: ['input-small'],
            add: ['form-control'],
        },
    },
    {
        selector: '.input-medium',
        classList: {
            remove: ['input-medium'],
            add: ['form-control'],
        },
    },
    {
        selector: '.input-large',
        classList: {
            remove: ['input-large'],
            add: ['form-control'],
        },
    },
    {
        selector: '.input-xlarge',
        classList: {
            remove: ['input-xlarge'],
            add: ['form-control'],
        },
    },
    {
        selector: '.input-xxlarge',
        classList: {
            remove: ['input-xxlarge'],
            add: ['form-control'],
        },
    },
    {
        selector: '.btn-inverse',
        classList: {
            remove: ['btn-inverse'],
            add: ['btn-dark'],
        },
    },
    {
        selector: '.controls',
        classList: {
            remove: ['controls'],
        },
    },
    {
        selector: '.controls-row',
        classList: {
            remove: ['controls-row'],
            add: ['row'],
        },
    },
    {
        selector: '.navbar-inner',
        classList: {
            remove: ['navbar-inner'],
        },
    },
    {
        selector: '.dropdown-submenu',
        classList: {
            remove: ['dropdown-submenu'],
        },
    },
    {
        selector: '.tabs-left',
        classList: {
            remove: ['tabs-left'],
        },
    },
    {
        selector: '.tabs-right',
        classList: {
            remove: ['tabs-right'],
        },
    },
    {
        selector: '.tabs-below',
        classList: {
            remove: ['tabs-below'],
        },
    },
    {
        selector: '.pill-content',
        classList: {
            remove: ['pill-content'],
            add: ['tab-content'],
        },
    },
    {
        selector: '.pill-pane',
        classList: {
            remove: ['pill-pane'],
            add: ['tab-pane'],
        },
    },
    {
        selector: '.nav-list',
        classList: {
            remove: ['nav-list'],
        },
    },
    {
        selector: '.nav-header',
        classList: {
            remove: ['nav-header'],
        },
    },
    {
        selector: '.help-inline',
        classList: {
            remove: ['help-inline'],
            add: ['help-block'],
        },
    },
    {
        selector: '.progress-info .progress-bar',
        classList: { add: ['progress-bar-info'] },
    },
    {
        selector: '.progress-info',
        classList: {
            remove: ['progress-info'],
        },
    },
    {
        selector: '.progress-success .progress-bar',
        classList: { add: ['progress-bar-success'] },
    },
    {
        selector: '.progress-success',
        classList: {
            remove: ['progress-success'],
        },
    },
    {
        selector: '.progress-warning .progress-bar',
        classList: { add: ['progress-bar-warning'] },
    },
    {
        selector: '.progress-warning',
        classList: {
            remove: ['progress-warning'],
        },
    },
    {
        selector: '.progress-danger .progress-bar',
        classList: { add: ['progress-bar-danger'] },
    },
    {
        selector: '.progress-danger',
        classList: {
            remove: ['progress-danger'],
        },
    },
    {
        selector: '.modal.hide',
        classList: {
            remove: ['hide'],
        },
    },
    {
        selector: '.modal .modal-header .close',
        removeAttributes: ['aria-hidden'],
        setAttributes: [
            {
                key: 'aria-label',
                value: 'Close',
            },
        ],
        innerHTML: '<span aria-hidden="true">&times;</span>',
    },
    {
        selector: '.modal .modal-header h3',
        classList: {
            add: ['modal-title'],
        },
        rawTagName: 'h4',
    },
    {
        selector: '.modal-footer .btn',
        rawTagName: 'button',
        removeAttributes: ['href'],
        setAttributes: [
            {
                key: 'type',
                value: 'button',
            },
        ],
    },
    {
        selector: '.modal-footer .btn-default',
        setAttributes: [
            {
                key: 'data-dismiss',
                value: 'modal',
            },
        ],
    },
    {
        selector: '.modal',
        setAttributes: [
            {
                key: 'tabindex',
                value: '-1',
            },
            {
                key: 'role',
                value: 'dialog',
            },
        ],
        insertHTML: {
            afterbegin: '\n<div class="modal-dialog" role="document">\n<div class="modal-content">',
            beforeend: '</div>\n</div>',
        },
    },
    {
        selector: '[data-toggle="buttons-checkbox"]',
        setAttributes: [
            {
                key: 'data-toggle',
                value: 'buttons',
            },
        ],
    },
    {
        selector: '[data-toggle="buttons-radio"]',
        setAttributes: [
            {
                key: 'data-toggle',
                value: 'buttons',
            },
        ],
    },
];

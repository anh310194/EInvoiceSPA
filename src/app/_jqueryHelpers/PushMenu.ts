import * as $ from 'jquery';

export class PushMenu {
    NAME$8: string = 'PushMenu';
    DATA_KEY$8: string = 'lte.pushmenu';
    EVENT_KEY$5: string = "." + this.DATA_KEY$8;
    EVENT_COLLAPSED$3: string = "collapsed" + this.EVENT_KEY$5;
    EVENT_SHOWN: string = "shown" + this.EVENT_KEY$5;
    SELECTOR_TOGGLE_BUTTON: string = '[data-widget="pushmenu"]';
    SELECTOR_BODY: string = 'body';
    SELECTOR_OVERLAY: string = '#sidebar-overlay';
    SELECTOR_WRAPPER: string = '.wrapper';
    CLASS_NAME_COLLAPSED$1: string = 'sidebar-collapse';
    CLASS_NAME_OPEN: string = 'sidebar-open';
    CLASS_NAME_IS_OPENING: string = 'sidebar-is-opening';
    CLASS_NAME_CLOSED: string = 'sidebar-closed';
    //JQUERY_NO_CONFLICT$8: JQuery<HTMLElement> = $.fn.find(this.NAME$c);
    Default$6 = {
        autoCollapseSize: 992,
        enableRemember: false,
        noTransitionAfterReload: true
    };

    _options: any;
    _element: any;
    constructor(element: any, options: any) {
        this._element = element;
        this._options = $.extend({}, this.Default$6, options);

        if ($(this.SELECTOR_OVERLAY).length === 0) {
            //this._addOverlay();
        }

        //this._init();
    } // Public

    
    //get JQUERY_NO_CONFLICT$8(): JQuery<HTMLElement> {return $.fn[this.NAME$8];}

   
}
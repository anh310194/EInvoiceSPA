import * as $ from 'jquery';

export enum KeyTreeview{
    NAME$c = 'Treeview',
    DATA_KEY$c = 'lte.treeview',
    EVENT_KEY$7 = ".lte.treeview",
    EVENT_EXPANDED$3 = "expanded.lte.treeview'",
    EVENT_COLLAPSED$4 = "collapsed.lte.treeview",
    EVENT_LOAD_DATA_API = "load.lte.treeview",
    SELECTOR_LI = '.nav-item',
    SELECTOR_LINK = '.nav-link',
    SELECTOR_TREEVIEW_MENU = '.nav-treeview',
    SELECTOR_OPEN = '.menu-open',
    SELECTOR_DATA_WIDGET$2 = '[data-widget="treeview"]',
    CLASS_NAME_OPEN$2 = 'menu-open',
    CLASS_NAME_IS_OPENING$1 = 'menu-is-opening',
    CLASS_NAME_SIDEBAR_COLLAPSED = 'sidebar-collapse',
    
}

export class Treeview {
    Default$a = {
        trigger: KeyTreeview.SELECTOR_DATA_WIDGET$2 + " " + KeyTreeview.SELECTOR_LINK,
        animationSpeed: 300,
        accordion: true,
        expandSidebar: false,
        sidebarButtonSelector: '[data-widget="pushmenu"]'
    }

    _config: any;
    _element: any;
    constructor(element: any, config: any = null) {
        if (config) this._config = config;
        else this._config = this.Default$a;

        this._element = element;
    }

    init() {
        $(KeyTreeview.SELECTOR_LI + KeyTreeview.SELECTOR_OPEN + " " + KeyTreeview.SELECTOR_TREEVIEW_MENU).css('display', 'block');
        this._setupListeners();
    }

    private _setupListeners() {
        let thisMain = this;
        let eleId: string = "";
        if (this._element.attr("id")) {
            eleId = "#" + this._element.attr("id");
        }
        $(document).on('click', eleId + this._config.trigger, function (event) {
            thisMain.toggle(event);
        })
    }

    toggle(event: any) {
        let relativeTarget = $(event.currentTarget);
        let parent = relativeTarget.parent();
        let treeviewMenu = parent.find("> " + KeyTreeview.SELECTOR_TREEVIEW_MENU);

        if (!treeviewMenu.is(KeyTreeview.SELECTOR_TREEVIEW_MENU)) {
            if (!parent.is(KeyTreeview.SELECTOR_LI)) {
                treeviewMenu = parent.parent().find("> " + KeyTreeview.SELECTOR_TREEVIEW_MENU);
            }

            if (!treeviewMenu.is(KeyTreeview.SELECTOR_TREEVIEW_MENU)) {
                return;
            }
        }

        event.preventDefault();
        let parentLi = relativeTarget.parents(KeyTreeview.SELECTOR_LI).first();
        let isOpen = parentLi.hasClass(KeyTreeview.CLASS_NAME_OPEN$2);
        if (isOpen) {
            this.collapse($(treeviewMenu), parentLi);
        }
        else {
            this.expand($(treeviewMenu), parentLi);
        }
    }

    collapse(treeviewMenu: any, parentLi: any) {
        let thisMain = this;

        let collapseEvent = $.Event(KeyTreeview.EVENT_COLLAPSED$4);
        parentLi.removeClass(KeyTreeview.CLASS_NAME_IS_OPENING$1 + " " + KeyTreeview.CLASS_NAME_OPEN$2);
        treeviewMenu.stop().slideUp(thisMain._config.animationSpeed, function () {
            $(thisMain._element).trigger(collapseEvent);
            treeviewMenu.find(KeyTreeview.SELECTOR_OPEN + "> " + KeyTreeview.SELECTOR_TREEVIEW_MENU).slideUp();
            treeviewMenu.find(KeyTreeview.SELECTOR_OPEN).removeClass(KeyTreeview.CLASS_NAME_OPEN$2);
        });
    }

    expand(treeviewMenu: any, parentLi: any) {
        let thisMain = this;
        var expandedEvent = $.Event(KeyTreeview.EVENT_EXPANDED$3);

        if (thisMain._config.accordion) {
            let openMenuLi = parentLi.siblings(KeyTreeview.SELECTOR_OPEN).first();
            let openTreeView = openMenuLi.find(KeyTreeview.SELECTOR_TREEVIEW_MENU).first();
            thisMain.collapse(openTreeView, openMenuLi);
        }

        parentLi.addClass(KeyTreeview.CLASS_NAME_IS_OPENING$1);
        treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
            parentLi.addClass(KeyTreeview.CLASS_NAME_OPEN$2);
            $(thisMain._element).trigger(expandedEvent);
        });

        if (thisMain._config.expandSidebar) {
            thisMain._expandSidebar();
        }
    }

    private _expandSidebar() {
        if ($('body').hasClass(KeyTreeview.CLASS_NAME_SIDEBAR_COLLAPSED)) {
            //$(this._config.sidebarButtonSelector).PushMenu();
        }
    }    
}
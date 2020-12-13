import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

import { AuthenticateService } from '../../_services/authenticate.service';
import { MenuModel } from '../../_models/AuthModel'
import { Treeview, KeyTreeview } from '../../_jqueryHelpers/Treeview';

function elements(callBack: any) {
  let element: any = $("#TreeviewMenu");
  element.each(function (int: any, el: any) {
    return callBack(el);
  });
}

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss']
})
export class SiteMenuComponent implements OnInit {
  activeLink: string = "";
  UserName = 'sysadmin';
  activeItem = 'Home';
  _element: any;
  _config: any = {
    trigger: KeyTreeview.SELECTOR_DATA_WIDGET$2 + " " + KeyTreeview.SELECTOR_LINK,
    animationSpeed: 300,
    accordion: false,
    expandSidebar: false,
    sidebarButtonSelector: '[data-widget="pushmenu"]'
  }
  menus: Array<MenuModel>;
  constructor(
    activeRoute: ActivatedRoute,
    authService: AuthenticateService

  ) {
    let currentComponent: any = activeRoute.children[0].component;
    let currentmenu = authService.getCurrentMenu(currentComponent, true);
    this.menus = authService.menuValue;
    this.UserName = authService.userValue.UserName;
    if (currentmenu) {
      this.activeLink = currentmenu.Children[0].ModuleName;
      this.activeItem = currentmenu.ModuleName;
    }
  }
  ngOnInit(): void {
    this._element = document.getElementById("TreeviewMenu");
  }

  toggleClick(event: any) {
    this.toggle(event);
  }

  toggle(event: any) {
    // Using Jquery
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

    // event.preventDefault();
    let parentLi = relativeTarget.parents(KeyTreeview.SELECTOR_LI).first();
    //let isOpen = parentLi.hasClass(KeyTreeview.CLASS_NAME_OPEN$2);
    // if (isOpen) {
    //   this.collapse($(treeviewMenu), parentLi);
    // }
    // else {
    //   this.expand($(treeviewMenu), parentLi);
    // }

    //Using DOM
    let classSELECTOR_TREEVIEW_MENU = KeyTreeview.SELECTOR_TREEVIEW_MENU.substr(1);
    let classSELECTOR_LI = KeyTreeview.SELECTOR_LI.substr(1);
    let classCLASS_NAME_OPEN = KeyTreeview.CLASS_NAME_OPEN$2.substr(1);
    let parentDOM = event.currentTarget.parentElement;
    let treeviewMenuDOM = parentDOM.querySelectorAll(KeyTreeview.SELECTOR_TREEVIEW_MENU);

    if (!this.IsDOM(treeviewMenuDOM, classSELECTOR_TREEVIEW_MENU)) {
      if (!this.IsDOM(parentDOM, classSELECTOR_LI)) {
        treeviewMenuDOM = parentDOM.parentElement.getElementsByClassName(classSELECTOR_TREEVIEW_MENU);
      }

      if (!this.IsDOM(treeviewMenuDOM, KeyTreeview.SELECTOR_TREEVIEW_MENU)) {
        return;
      }
    }

    event.preventDefault();
    let parentLiDOM = event.currentTarget;
    if (parentLiDOM.classList.contains(classCLASS_NAME_OPEN)) {
      this.collapse(treeviewMenuDOM, parentLiDOM);
    }
    else {
      this.expand(treeviewMenuDOM, parentLiDOM, parentLi);
    }
  }

  IsDOM(elements: Array<any>, className: string) {
    let result = false;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (element.classList.contains(className)) {
        result = true;
        break;
      }
    }
    return result;
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

  expand(treeviewMenu: any, parentLiDOM: any, parentLi: any) {
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

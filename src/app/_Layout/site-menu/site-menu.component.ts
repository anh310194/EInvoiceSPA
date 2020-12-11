import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

import { AuthenticateService } from '../../_services/authenticate.service';
import { MenuModel } from '../../_models/AuthModel'
import { Treeview, KeyTreeview } from '../../_jqueryHelpers/TreeView';

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
  treeView!: Treeview
  menus: Array<MenuModel>;
  constructor(
    private activeRoute: ActivatedRoute,
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
    let ele: any = $("#TreeviewMenu");
    let config: any = {
      trigger: KeyTreeview.SELECTOR_DATA_WIDGET$2 + " " + KeyTreeview.SELECTOR_LINK,
      animationSpeed: 300,
      accordion: true,
      expandSidebar: false,
      sidebarButtonSelector: '[data-widget="pushmenu"]'
    }
    // elements((ele: any) => {
      this.treeView = new Treeview(ele, config);
      this.treeView.init();
    // })
  }

}

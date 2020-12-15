import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticateService } from '../../_services/authenticate.service';
import { MenuModel } from '../../_models/AuthModel'

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss']
})
export class SiteMenuComponent implements OnInit {
  activeLink: string = "";
  UserName = 'sysadmin';
  activeItem = 'Home';
  classMenuOpen = 'menu-open';
  classMenuOpening = "menu-is-opening";
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

  }

  toggleClick(event: any) {
    event.preventDefault();

    let thisMain = this;
    let parentLi = event.currentTarget.parentElement;
    let isOpen = parentLi.classList.contains(thisMain.classMenuOpen);
    let treeviewMenus = parentLi.querySelectorAll(":scope > .nav-treeview");
    if (treeviewMenus.lenght <= 0) { return; }
    let treeviewMenu = treeviewMenus[0];
    if (isOpen)
      thisMain.collapse(parentLi, treeviewMenu);
    else thisMain.expand(parentLi, treeviewMenu);

  }

  expand(parentLi: any, treeViewMenu: any) {
    let thisMain = this;
    parentLi.classList.add(thisMain.classMenuOpen);
    parentLi.classList.add(thisMain.classMenuOpening);
    window.setTimeout(function () {
      treeViewMenu.style.display = 'block';
    }, 300);
  }

  collapse(parentLi: any, treeViewMenu: any) {
    let thisMain = this;
    parentLi.classList.remove(thisMain.classMenuOpen);
    parentLi.classList.remove(thisMain.classMenuOpening);
    window.setTimeout(function () {
      treeViewMenu.style.display = 'none';
    }, 300);
  }
}

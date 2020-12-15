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
    //let thisMain = this;
    let parentEle = event.currentTarget.parentElement;
    let className = 'menu-open';
    if (parentEle.classList.contains(className)) {
      parentEle.classList.remove(className);
    }
    else
      parentEle.classList.add(className);
    // let treeViewMenu: any = parentEle.querySelectorAll(":scope > .nav-treeview");
    // treeViewMenu.forEach((element: any) => {
    //     let className = 'menu-open';
    //     if (parentEle.classList.contains(className)) {
    //       parentEle.classList.add(className);
    //     }
    //     else {
    //       parentEle.classList.remove(className);
    //     }
    // });
  }
}

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
  constructor(private activeRoute: ActivatedRoute, authService: AuthenticateService) {
    let currentComponent: any = activeRoute.children[0].component;
    this.activeLink = this.getActiveLink(currentComponent);
    this.menus = authService.menuValue;
    this.UserName = authService.userValue.UserName;
    this.activeItem = this.getActiveItem();
  }

  ngOnInit(): void {
  }

  private getActiveLink(component: any) {
    let result = "";
    if (component.name) {
      let length: number = component.name.length - 'Component'.length;
      result = component.name.substring(0, length);
    }
    return result;
  }

  private getActiveItem() {
    let result = "";
    this.menus.forEach((element: MenuModel) => {
      let isActive: boolean = false;
      element.Children.forEach((childEl: MenuModel) => {
        if(childEl.ModuleName == this.activeLink)
        { 
          isActive = true;
          return;
        }
      });
      if(isActive) {
        result = element.ModuleName;
        return;
      }
    });
    return result;
  }

}

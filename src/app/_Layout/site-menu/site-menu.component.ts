import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticateService } from '../../_services/authenticate.service';
import { MenuModel} from '../../_models/AuthModel'
@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss']
})
export class SiteMenuComponent implements OnInit {
  activeLink: string = "";
  UserName = 'sysadmin';
  ActiveItem = 'Home';
  ActiveLink = 'Home';
  menus: Array<MenuModel>;
  constructor(private activeRoute: ActivatedRoute, authService: AuthenticateService) {
    let currentComponent: any = activeRoute.children[0].component;
    this.activeLink =this.getActiveLink(currentComponent);
    this.menus = authService.menuValue;
    this.UserName = authService.userValue.UserName;
  }

  ngOnInit(): void {
  }

  private getActiveLink(component : any){
    let result = "";
    if(component.name == 'HomeComponent')
      result = 'home';
    return result;
  }

}

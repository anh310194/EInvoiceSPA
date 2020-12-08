import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuModel } from 'src/app/_models/AuthModel';

import { AuthenticateService } from '../../_services/authenticate.service';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  pageName: string = 'Home';
  pageNames: Array<string>= [];
  constructor(private activeRoute: ActivatedRoute, private authService: AuthenticateService) {
    let currentComponent: any = activeRoute.children[0].component;
    let currentmenu = this.authService.getCurrentMenu(currentComponent, true);
    if(currentmenu){
      this.setPageNames(currentmenu);      
      this.pageName = this.pageNames[this.pageNames.length - 1];
    }
  }

  ngOnInit(): void {
    let body = document.getElementsByTagName('body')[0];
    let existclass = body.classList.contains('sidebar-mini');
    if (!existclass) {
      body.classList.add('sidebar-mini');
    }
    if (body.classList.contains('login-page')) {
      body.classList.remove('login-page');
    }
  }

  private setPageNames(menu: MenuModel){
    this.pageNames.push(menu.DisplayText);    
    if(menu.Children && menu.Children.length > 0){
      let child = menu.Children[0];
      this.setPageNames(child);
    }
  }
}

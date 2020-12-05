import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss']
})
export class SiteMenuComponent implements OnInit {
  activeLink: string = "";
  UserName = 'sysadmin';
  constructor(private activeRoute: ActivatedRoute) {
    let currentComponent: any = activeRoute.children[0].component;
    this.activeLink =this.getActiveLink(currentComponent);
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  pageName: string = 'Home';

  constructor(private activeRoute: ActivatedRoute) {
    let currentComponent: any = activeRoute.children[0].component;
    this.pageName = this.getNamePage(currentComponent);
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

  private getNamePage(component: any) {
    let result = 'Home';
    let componentName = component.name;
    if (componentName)
      result = componentName.substring(0, componentName.length - 'Component'.length);
    return result;
  }
}
